#!/usr/bin/env node
// verify-audit-claims.mjs — 复核影核 audit.log 里「带证据的声明」今天还成立几条
//
// 这是《装机记》卷四那个核心数字的**可重跑出处**。
// 起因：线索里写着「772 条带证据的声明，今天仍成立的只有 8 条」，但没有出处命令。
// 按体例（数字现跑现写），补上这个脚本。**引用这个数字前必须重跑，因为它每分钟都在变。**
//
// 判据（写清楚，免得下次又对不上口径）：
//   「带证据的声明」= audit.log 里 evidence.exists === true 且 evidence.sha256 非空的条目
//                    （即：机器主动声称「我写了这个文件，这是它的哈希」）
//   「今天仍成立」  = 现在按 target 路径重算 sha256，与当时记录的一致
//
// 用法：
//   node book/tools/verify-audit-claims.mjs
//   node book/tools/verify-audit-claims.mjs --log "<path>/audit.log" --json
import fs from 'node:fs';
import crypto from 'node:crypto';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const DEFAULT_LOG = 'D:/uking编程/ShadowOS = Harness OS/southbridge/audit.log';
const LOG = argv.includes('--log') ? argv[argv.indexOf('--log') + 1] : DEFAULT_LOG;
const CWD = LOG.replace(/[\\/]southbridge[\\/]audit\.log$/, '');

let raw;
try {
  raw = fs.readFileSync(LOG, 'utf8');
} catch (e) {
  console.error(`❌ 读不到 audit.log：${LOG}\n   ${e.message}`);
  process.exit(1);
}

const lines = raw.split('\n').filter(l => l.trim());
const claims = [];
let unparsable = 0;
for (const l of lines) {
  let o;
  try { o = JSON.parse(l); } catch { unparsable++; continue; }
  const e = o.evidence;
  if (e && e.exists === true && e.sha256) {
    claims.push({ t: o.t, target: o.target, sha: e.sha256, size: e.size_bytes, verb: o.verb });
  }
}

// 同一个 target 可能被声称很多次，按路径缓存，避免重复读盘
const cache = new Map();
function shaOf(rel) {
  if (cache.has(rel)) return cache.get(rel);
  let v = null;
  for (const base of [CWD, '.']) {
    try { v = crypto.createHash('sha256').update(fs.readFileSync(`${base}/${rel}`)).digest('hex'); break; } catch { /* 试下一个 base */ }
  }
  cache.set(rel, v);
  return v;
}

let hold = 0, gone = 0, changed = 0;
const targets = new Set();
for (const c of claims) {
  targets.add(c.target);
  const cur = shaOf(c.target);
  if (cur === null) gone++;
  else if (cur === c.sha) hold++;
  else changed++;
}

const rate = claims.length ? (hold / claims.length * 100) : 0;
const out = {
  log: LOG,
  log_lines: lines.length,
  unparsable,
  claims_with_evidence: claims.length,
  still_holds: hold,
  file_gone: gone,
  content_changed: changed,
  distinct_targets: targets.size,
  hold_rate_percent: Number(rate.toFixed(2)),
  first_claim_at: claims[0]?.t || null,
  last_claim_at: claims[claims.length - 1]?.t || null,
};

if (asJson) {
  console.log(JSON.stringify(out, null, 2));
} else {
  console.log(`# 影核 audit.log 声明复核\n`);
  console.log(`日志：${out.log}`);
  console.log(`日志总行数：${out.log_lines}（解析失败 ${out.unparsable}）`);
  console.log(`声明区间：${out.first_claim_at} → ${out.last_claim_at}\n`);
  console.log(`带证据的声明（exists=true 且有 sha256）：**${out.claims_with_evidence}** 条`);
  console.log(`  ├─ 今天仍成立（重算 sha256 一致）：**${out.still_holds}** 条`);
  console.log(`  ├─ 文件已不存在：${out.file_gone} 条`);
  console.log(`  └─ 文件还在但内容变了：${out.content_changed} 条`);
  console.log(`涉及不同 target：${out.distinct_targets} 个`);
  console.log(`\n**成立率：${out.hold_rate_percent}%**`);
  console.log(`\n⚠️ 这个数字每分钟都在变（日志 append-only）。引用前重跑，写上跑的时刻。`);
}
