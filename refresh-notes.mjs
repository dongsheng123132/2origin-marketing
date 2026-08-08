#!/usr/bin/env node
// refresh-notes.mjs — 营销点自动刷新
//
// 扫描关联仓库的最新 commit，产出「有新东西可写的项目」简报。
//
// ⚠️ 公私分流（重要，别改坏）
//   本仓库 2origin-marketing 是【公开】仓库。u-king-mini 是【私有】仓库。
//   私有仓库的 commit 标题绝不能自动流进公开仓库 —— 内部 bug / 未发布功能 / 密钥路径
//   都可能出现在 commit message 里。所以：
//     · docs/whats-new.md        只含【公开仓库】的 commit，可提交、可 push、Actions 生成
//     · docs/whats-new.local.md  含私有仓库，仅本机可见，已在 .gitignore，永不提交
//
// 用法：
//   node refresh-notes.mjs           本机全扫（公开→whats-new.md，私有→whats-new.local.md）
//   node refresh-notes.mjs --remote  只扫公开仓库，走 GitHub API（GitHub Actions 用）
//
// 已写过草稿的 commit 记在 docs/covered.json，简报里标 ✅ 不再重复推荐。
import fs from 'node:fs';

const OWNER = 'dongsheng123132';

const REPOS = [
  { name: '2origin-computer', repo: '2origin-computer', path: 'D:/uking编程/2origin-computer', hook: '架构规范/Conformance', public: true },
  { name: '2origin-harness', repo: '2origin-harness', path: 'D:/uking编程/2origin-harness', hook: '参考实现/测试', public: true },
  { name: '2origin', repo: '2origin', path: 'D:/uking编程/本象协议', hook: '本象协议', public: true },
  { name: 'uking', repo: 'u-king-mini', path: 'D:/uking编程/seo-2026-08/repos/u-king-mini', hook: 'U-King 整机', public: false },
];

const N = 3;
const REMOTE = process.argv.includes('--remote') || process.env.GITHUB_ACTIONS === 'true';

// ---------- 数据源 ----------

async function localCommits(r) {
  const { execSync } = await import('node:child_process');
  try {
    const out = execSync(`git -C "${r.path}" log --format=%h%x09%s -${N}`, { encoding: 'utf8', timeout: 10000 });
    return out.trim().split('\n').filter(Boolean).map(l => {
      const [sha, ...rest] = l.split('\t');
      return { sha, subject: rest.join('\t') };
    });
  } catch {
    return null;
  }
}

// 只对公开仓库走 API。私有仓库一律不联网抓，避免任何跨界可能。
async function remoteCommits(r) {
  if (!r.public) return { error: '私有仓库，远程模式下不扫描（设计如此）' };
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': '2origin-marketing-refresh' };
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${r.repo}/commits?per_page=${N}`, { headers });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const json = await res.json();
    return json.map(c => ({ sha: c.sha.slice(0, 7), subject: (c.commit.message || '').split('\n')[0] }));
  } catch (e) {
    return { error: e.message };
  }
}

async function commitsFor(r) {
  if (!REMOTE) {
    const local = await localCommits(r);
    if (local && local.length) return local;
    if (!r.public) return { error: '本机读不到该私有仓库' };
  }
  return remoteCommits(r);
}

// ---------- 已覆盖记录 ----------

function loadCovered() {
  try {
    return new Set(JSON.parse(fs.readFileSync('docs/covered.json', 'utf8')).covered.map(c => c.sha));
  } catch {
    return new Set();
  }
}

// ---------- 渲染 ----------

function render({ title, note, sections, writeable, skipped, today }) {
  const lines = [`# ${title} · ${today}`, '', `> ${note}　✅=已写过草稿　🚀=可写`, ''];
  for (const s of sections) lines.push(...s, '');
  lines.push('## 📝 可写的新素材（未写过草稿的）');
  if (writeable.length) lines.push(...writeable.map(w => `- 🚀 **${w.repo}** \`${w.sha}\` ${w.subject}`));
  else lines.push('（没有新素材——所有近期 commit 都已写过草稿）');
  if (skipped.length) lines.push('', '## ⚠️ 本次未覆盖', ...skipped.map(s => `- ${s}`));
  lines.push('', '---', `_由 refresh-notes.mjs 生成 · ${today} · 写稿规则见 AGENTS.md_`);
  return lines.join('\n') + '\n';
}

// ---------- 主流程 ----------

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const covered = loadCovered();

  const pub = { sections: [], writeable: [], skipped: [] };
  const priv = { sections: [], writeable: [], skipped: [] };

  for (const r of REPOS) {
    const bucket = r.public ? pub : priv;
    const result = await commitsFor(r);

    if (result && result.error) {
      bucket.sections.push([`## ${r.name}（${r.hook}）`, `- ⚠️ 未读取：${result.error}`]);
      bucket.skipped.push(`${r.name}：${result.error}`);
      continue;
    }
    if (!result || !result.length) {
      bucket.sections.push([`## ${r.name}（${r.hook}）`, '- ⚠️ 无数据']);
      bucket.skipped.push(`${r.name}：无数据`);
      continue;
    }

    const sec = [`## ${r.name}（${r.hook}）${r.public ? '' : ' 🔒私有'}`];
    for (const c of result) {
      const done = covered.has(c.sha);
      sec.push(`- ${done ? '✅' : '🚀'} \`${c.sha}\` ${c.subject}`);
      if (!done) bucket.writeable.push({ repo: r.name, sha: c.sha, subject: c.subject });
    }
    bucket.sections.push(sec);
  }

  fs.mkdirSync('docs', { recursive: true });

  // 公开简报 —— 只含公开仓库，可提交
  fs.writeFileSync(
    'docs/whats-new.md',
    render({
      title: "What's New",
      note: `数据源：${REMOTE ? 'GitHub API（远程）' : '本机 git'}，**仅公开仓库**`,
      ...pub,
      today,
    }),
    'utf8'
  );
  console.error(`✅ docs/whats-new.md（公开）：可写 ${pub.writeable.length} 条，未覆盖 ${pub.skipped.length} 项`);

  // 私有简报 —— 仅本机，.gitignore 已排除
  if (!REMOTE) {
    fs.writeFileSync(
      'docs/whats-new.local.md',
      render({
        title: "What's New · 🔒 本机私有（禁止提交）",
        note: '含私有仓库 commit，**只在本机看，不进 git**',
        ...priv,
        today,
      }),
      'utf8'
    );
    console.error(`🔒 docs/whats-new.local.md（私有，不提交）：可写 ${priv.writeable.length} 条`);
  }
}

main().catch(e => {
  console.error('❌ refresh 失败:', e.message);
  process.exit(1);
});
