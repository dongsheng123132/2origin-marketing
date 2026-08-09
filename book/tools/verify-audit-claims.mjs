#!/usr/bin/env node
// verify-audit-claims.mjs — 复核影核 audit.log 里「带证据的声明」今天还成立几条
//
// 这是《装机记》卷四那个核心数字的**可重跑出处**。
//
// ⚠️⚠️ 2026-08-09 修正：本脚本 v1 报的「970 条声明 / 仍成立 8 条 / 0.82%」是**分母口径错误**。
//   同一个文件会被反复声明几十上百次（临时目录尤其严重），按「条」统计时，
//   分母被重复声明灌大，比率因此被压得极低，**看起来像灾难，其实是重复计数**。
//   审核官 2026-08-08 20:43 班次驳回了这个数字，驳得对。
//   v2 同时报两个口径，并明确哪个才该对外引用：
//     · 按【文件】（去重后）—— **对外引用这个**。回答「有多少个产物今天还是当时那个样子」
//     · 按【条】（去重前）  —— 只用来说明"造声明的速度"，不能当成立率的分母
//
// 判据（写死，防口径漂移）：
//   「带证据的声明」= audit.log 里 evidence.exists === true 且 evidence.sha256 非空
//   「仍成立」      = 现在按 target 重算 sha256，与该 target **最后一次**声明的哈希一致
//                    （用最后一次，因为文件被多次覆写时，只有最新那次声明才是"当时的状态"）
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
    claims.push({ t: o.t, target: o.target, sha: e.sha256 });
  }
}

// 每个 target 取【最后一次】声明 —— 这才是"当时该文件应有的样子"
const lastClaim = new Map();
for (const c of claims) lastClaim.set(c.target, c);

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

// ── 口径 A：按文件（去重后）—— 对外引用这个 ──
let fHold = 0, fGone = 0, fDrift = 0;
for (const [target, c] of lastClaim) {
  const cur = shaOf(target);
  if (cur === null) fGone++;
  else if (cur === c.sha) fHold++;
  else fDrift++;
}
const files = lastClaim.size;

// ── 口径 B：按条（去重前）—— 只说明造声明的速度 ──
let cHold = 0;
for (const c of claims) { const cur = shaOf(c.target); if (cur !== null && cur === c.sha) cHold++; }

const out = {
  log: LOG,
  log_lines: lines.length,
  unparsable,
  by_file: {
    _note: '对外引用这个口径',
    distinct_targets: files,
    still_holds: fHold,
    gone: fGone,
    drifted: fDrift,
    hold_rate_percent: files ? Number((fHold / files * 100).toFixed(1)) : 0,
  },
  by_claim: {
    _note: '仅用于说明造声明的速度，不可当成立率分母',
    total_claims: claims.length,
    still_holds: cHold,
  },
  first_claim_at: claims[0]?.t || null,
  last_claim_at: claims[claims.length - 1]?.t || null,
};

if (asJson) {
  console.log(JSON.stringify(out, null, 2));
} else {
  console.log(`# 影核 audit.log 声明复核\n`);
  console.log(`日志：${out.log}（${out.log_lines} 行，解析失败 ${out.unparsable}）`);
  console.log(`声明区间：${out.first_claim_at} → ${out.last_claim_at}\n`);
  console.log(`## ✅ 按文件（去重后）—— **对外只引用这个**`);
  console.log(`  不同 target：${out.by_file.distinct_targets} 个`);
  console.log(`  ├─ 今天仍成立：**${out.by_file.still_holds}**`);
  console.log(`  ├─ 已不存在：${out.by_file.gone}`);
  console.log(`  └─ 已漂移：${out.by_file.drifted}`);
  console.log(`  **成立率：${out.by_file.hold_rate_percent}%**\n`);
  console.log(`## ⚠️ 按条（去重前）—— 只说明造声明的速度`);
  console.log(`  声明总条数：${out.by_claim.total_claims}`);
  console.log(`  （同一文件会被反复声明，**不要拿这个当成立率的分母**——v1 就是这么算错的）\n`);
  console.log(`⚠️ 日志 append-only，数字每分钟都在变。引用前重跑，并写上跑的时刻。`);
}
