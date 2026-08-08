# 草稿 · 发布待审

> **状态**：📝 草稿，待用户审。审过后才允许发布。
> **素材来源**：2origin-computer `e523380` Add conformance/run-tests.sh — one-command verification
> **数据核验**：2026-08-08 本机实跑 `bash conformance/run-tests.sh` → **PASS 5 · FAIL 0 · MANUAL 2**。
> **调性**：诚实。全文核心就是「那 2 项我们没算通过」，不许改成 7/7。
> **北极星**：文末 CTA 指向 U-King 下载。

- **标题**：给 AI 架构写自测：2 项我们不敢说通过
- **slug**：2origin-conformance-honest
- **summary**：2Origin 架构加了一条命令的一致性自测。跑出来 5 项通过、0 失败、2 项标记为「需人工」。我们没把它写成 7/7——没验证的就是没验证。
- **tags**：2Origin,AI架构,一致性测试,可验证,开源

---

```html
<h1>给 AI 架构写自测：2 项我们不敢说通过</h1>

<p>2Origin 这套架构从提出到现在，一直有个尴尬问题：我们说它「模型可换、状态不丢、动作可迁移」，凭什么信？</p>

<p>所以我们加了一条命令：</p>

<pre><code>bash conformance/run-tests.sh</code></pre>

<p>今天的实际输出是这样的：</p>

<pre><code>PASS: 5   FAIL: 0   MANUAL: 2</code></pre>

<h2>先说那 2 项</h2>

<p>很多项目会把这个结果写成「7 项一致性测试全部通过」。我们不写。</p>

<p>因为那 2 项脚本打的标签是 <code>[MANUAL]</code>，不是 <code>[PASS]</code>：</p>

<ul>
  <li><strong>C2 跨 harness</strong>——同一个任务状态换一个 harness 接着跑。需要真实的外部执行环境，脚本自己测不了。</li>
  <li><strong>C3 跨模型</strong>——换一个模型端点，任务照样接得上。需要接第二个真实模型，脚本自己也测不了。</li>
</ul>

<p>这两项恰恰是整套架构最核心的主张。测不了就是测不了，写成「通过」是骗人。真话是：<strong>5 项自动化验证通过，2 项需要人工和外部依赖，我们没把它算成通过。</strong></p>

<h2>通过的那 5 项是什么</h2>

<ul>
  <li><strong>C1 跨会话</strong>——全新会话从状态文件自动加载，不靠聊天记录。</li>
  <li><strong>C4 动作可迁移</strong>——同一个动作在两个不同 driver 上执行，产出 sha256 完全一致。</li>
  <li><strong>C5 结果可验证</strong>——状态里声称的产物，去磁盘上核实是否真的存在。</li>
  <li><strong>C6 不偷偷学习</strong>——所有经验条目都带 candidate / verified 状态，没有无置信度的自动晋升。</li>
  <li><strong>C7 可审计</strong>——每一次写动作都有审计日志。</li>
</ul>

<p>C4 那条尤其值得说：两个 driver 跑出同一个哈希，意味着「动作」这层真的和模型解耦了。这是「组装机」比喻里最实的一块。</p>

<h2>为什么要费这个劲</h2>

<p>AI 工具现在最不缺的就是宣称。缺的是一条能让人自己跑一遍的命令。</p>

<p>你不用信我们说了什么。clone 下来，跑那一行，看你自己机器上的输出。跑出来是几就是几。</p>

<pre><code>git clone https://github.com/dongsheng123132/2origin-computer
cd 2origin-computer
bash conformance/run-tests.sh</code></pre>

<h2>这跟你装 AI 有什么关系</h2>

<p>2Origin 是架构，U-King 是照这套架构装出来的第一台整机。架构管「模型可换、状态不丢」，U-King 管把 Codex / Claude Code / OpenClaw / Hermes 真的装到你电脑上、配好国内可直连的模型驱动。</p>

<p>一个负责讲清楚为什么，一个负责让你今天就能用上。</p>

<p style="margin-top:2em;border-left:4px solid #888;padding-left:1em">
  <strong>下载 U-King</strong>，装好你的 AI 全家桶 → https://u-claw.org.cn/download/U-King-Setup.exe<br>
  对话式一键装好 Codex / Claude Code / OpenClaw / Hermes，国内直连，装完即用。
</p>
```
