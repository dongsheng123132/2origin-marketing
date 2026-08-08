#!/usr/bin/env node
// refresh-notes.mjs — 营销点自动刷新
// 扫描关联仓库的最新 commit，产出「有新东西可写的项目」简报。
// 用法: node refresh-notes.mjs
// 输出: 每个项目最近 N 条 commit + 「可写」标记，落到 docs/whats-new.md
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const REPOS = [
  { name: '2origin-computer', path: 'D:/uking编程/2origin-computer', hook: '架构规范/Conformance' },
  { name: '2origin-harness', path: 'D:/uking编程/2origin-harness', hook: '参考实现/测试' },
  { name: '2origin', path: 'D:/uking编程/本象协议', hook: '本象协议' },
  { name: 'uking', path: 'D:/uking编程/seo-2026-08/repos/u-king-mini', hook: 'U-King 整机' },
];

function recentCommits(repoPath, n = 3) {
  try {
    const out = execSync(`git -C "${repoPath}" log --oneline -${n}`, { encoding: 'utf8', timeout: 10000 });
    return out.trim().split('\n').filter(Boolean).map(l => l.replace(/^[a-f0-9]+\s*/, ''));
  } catch {
    return [];
  }
}

function main() {
  const lines = [`# What's New · ${new Date().toISOString().slice(0, 10)}`, ''];
  let writeable = [];

  for (const r of REPOS) {
    const commits = recentCommits(r.path);
    if (!commits.length) { lines.push(`## ${r.name}\n（无法读 git log）\n`); continue; }
    lines.push(`## ${r.name}（${r.hook}）`);
    lines.push(...commits.map(c => `- ${c}`));
    // 可写标记：最近有 commit 就有新东西可写
    if (commits.length) writeable.push(`${r.name}（${commits[0].slice(0, 30)}…）`);
    lines.push('');
  }

  lines.push(`## 📝 可写的新素材`);
  if (writeable.length) lines.push(...writeable.map(w => `- 🚀 ${w}`));
  else lines.push('（暂无新 commit）');

  const out = lines.join('\n');
  fs.writeFileSync('docs/whats-new.md', out, 'utf8');
  console.log(out);
  console.log(`\n✅ 已写入 docs/whats-new.md`);
}

fs.mkdirSync('docs', { recursive: true });
main();
