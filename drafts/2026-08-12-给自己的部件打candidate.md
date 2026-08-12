# 草稿 · 发布待审

> **状态**：📝 草稿，待用户审

- **标题**：我们给自己的五个部件打了 candidate
- **slug**：five-components-marked-candidate
- **summary**：给 AI 架构的概念表加了一列「实现状态」，结果五个部件是零实现、零判据——而它们此前在文档里以既有部件的身份被引用了一百多次。定义一个名字，等于做出一个还没被验证的存在性主张。
- **tags**：2Origin、AI架构、命名治理、可验证性、Agent

---

<h2>先数名字，再数判据，中间那个差额很难看</h2>

<p>做一套 AI 架构，最容易长的东西是<strong>名字</strong>。本象、本境、学籍、取象、影核、南桥、北桥、学堂、叠象、影域、影刻……一个季度下来，概念表上排了十六行。</p>

<p>然后我们按自己定的标准数了第二遍：<strong>这些名字里，有几个能被外部核验？</strong></p>

<p>标准是我们自己写的，写在 <code>spec/conformance/README.md</code> 里：「一份实现自己跑通自己的测试，证明不了协议存在。」</p>

<p><strong>按这个标准数出来是：一个。</strong>其余全部是自家实现跑自家判据。</p>

<h2>于是概念表加了一列</h2>

<p>加的是「实现状态」。规则只有一句，也刻意只有一句：</p>

<ul>
  <li><code>candidate</code>：提出了，但<strong>没有任何一条判据会因这个部件缺失而变红</strong></li>
  <li><code>verified</code>：有判据钉着——把这个部件拿掉，那条判据当场变红</li>
</ul>

<p>填完之后，五个概念落在 candidate 这一格：<strong>零实现、零判据</strong>。</p>

<p>更难看的是下一句：<strong>它们此前在文档里，以「既有部件」的身份被引用了一百多次。</strong>读的人没有办法从行文里看出哪些已经存在、哪些还只是打算——因为写的人自己也没分。</p>

<h2>为什么这跟「学历」是同一条规矩</h2>

<p>这套体系里，AI 攒下的经验有个生命周期：先是 <code>candidate</code>，挂上一条<strong>任何人都能重跑的检验命令</strong>；跑通了才由考试给 <code>verified</code>；下次重跑挂了，当场降回去。</p>

<p>规矩的核心是一句话：<strong>作者不能给自己发证。</strong>手写一个 <code>verified</code>，写入闸门会把它压回 <code>candidate</code>。</p>

<p>盘点经验的时候，这条规矩救过场：五十多条经验里，大部分自称已验证，而<strong>能被别人重跑的是零条</strong>。</p>

<p>名字这一层，此前压根没有考试。所以现在把同一条规矩搬过来：</p>

<blockquote><p><strong>定义一个名字 ＝ 做出一个尚未被验证的存在性主张。</strong></p></blockquote>

<p>起了名字，等于宣布它存在。名字是免费的，判据是贵的——<strong>当命名的密度远超验证的密度，文档就开始替代码撒谎。</strong></p>

<h2>顺手撤回了一个缺口</h2>

<p>做这次清查时，我们本来列了四个「主板上还空着的格子」。其中一个当场被撤回了——因为它没有任何实测病症支撑，只是「主板上好像该有这个」。</p>

<p>剩下三个里，只有一个有真实事故垫底：多会话并发时，共享状态文件被整体覆盖，吃掉过另一个会话刚写入的内容。另外两个标着「尚无实测病例」。</p>

<p><strong>这行字我们没删。</strong>「按类比推出来的缺口」和「被真实事故打出来的缺口」不是一回事，混在一张表里，读的人会以为都是后者。</p>

<h2>怎么自己核</h2>

<p>【公开可核】<strong>2026-08-12 实测</strong>：</p>

<ul>
  <li>一致性套件：<code>bash conformance/run-tests.sh</code>（2origin-computer 仓库）→ <strong>PASS 10 · FAIL 0 · MANUAL 2</strong></li>
  <li>概念表与实现状态列：本象协议仓库 <code>docs/02-概念体系.md</code></li>
  <li>命名生命周期规则：2origin-computer 仓库 <code>NAMING-DECISION.md</code> §5</li>
</ul>

<p><strong>关于那 2 项 MANUAL，我们不含糊</strong>：跨 harness 与跨模型两项需要真实外部依赖，脚本标的是 <code>[MANUAL]</code> 而不是 <code>[PASS]</code>。正确说法是「10 项自动化验证通过，2 项需人工或外部依赖，我们没把它算成通过」——不是「12 项全过」。</p>

<h2>把这件事写出来的理由</h2>

<p>给自己的五个部件打上「零实现、零判据」，对宣传没有一点好处。</p>

<p>但反过来说：<strong>一份从不标注自己哪里是空的架构文档，读者凭什么信它标注了的那部分？</strong></p>

<p>能让自己难看的那一列，比让自己好看的那一页值钱。</p>

<p style="margin-top:2em;border-left:4px solid #888;padding-left:1em">
  <strong>下载 U-King</strong>，装好你的 AI 全家桶 → https://u-claw.org.cn/download/U-King-Setup.exe<br>
  模型是 CPU，Agent 是组装机，U-King 是那个把机器给你装好的管家——一键装齐 Claude Code / Codex / OpenClaw，环境不用自己折腾。
</p>
