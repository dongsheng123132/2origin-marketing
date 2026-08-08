# 营销点库 · 全项目（2026-08-07 建）

> **用法**：每个项目一段。`定位` 一句话；`可讲的故事` = 能直接发出去、有证据链的营销点；
> `数据背书` = 可核验的数字/榜单/实验结果（**发之前再核一遍**，过期数字比不发更糟）；
> `目标人群` = 写给谁看。✅=已用于官网，📝=可写未写，🚀=适合上轰炸机。
>
> **🎯 北极星（2026-08-07 用户定）**：**所有项目都是 U-King（u-king.org）的引流内容。**
> 每个项目/文章/发布台的 CTA 一律指向 U-King 下载
> （https://u-claw.org.cn/download/U-King-Setup.exe）。
> 定位分级据此调整：凡「能装进 U-King、由 U-King 一键装好的工具」→ 直接引到 U-King；
> 凡「独立工具/教程」→ 用它引流，文末带 U-King 入口。

---

## 🏆 北极星旗舰：U-King 装机管家（u-king.org）★ 一切营销的终点

**定位**：对话式一键装好 Codex / Claude Code / OpenClaw / Hermes 的 AI 装机管家 + 工作台，自动配置国内直连模型驱动，装完即用，免费下载。

**可讲的故事**
0. 🚀 **「AI 进入组装机时代」——U-King 是最大的组装机（2026-08-07 用户定调的核心叙事）**：
   - 比喻：deepseek 是 **Intel 芯片**（便宜好用的算力），AI agent（Codex/Claude Code/OpenClaw）是**组装机**，codex 是**苹果**（整机封闭，什么都自己干）。
   - 定位：我们要做**最大的组装机** = **最高的自由度**——用户自己选「芯片」（模型）+「主板」（agent）+「内存显示器」（GUI 工具），自由搭配。对标 workbuddy/traework 这些**品牌机**（封装好但受限）。
   - 核心论：**品牌机和组装机其实差不多**——都是「模型 + GUI」的组合，就像当年的「芯片 + 内存 + 显示器」。区别只在：品牌机锁死配置，组装机给你全部选择权。
   - U-King 的角色：**装机管家**——帮你把「芯片/主板/内存显示器」按你想要的自由组合装好。你不用懂硬件，我们帮你配。
1. 🚀 **「装好全部 AI，一个软件就够了」**——对话式装机，不用翻墙、不用配 Key，国内直连。这是全项目里唯一直接产生「下载量+使用量」的。
2. 🚀 **「国内直连」**——Codex/Claude Code 都配好国内可用模型驱动，装完实测连通。
3. 📝 **新手引导 + 终端快速词**——写周报/做表格/写代码六个快捷词，小白零门槛。
4. 📝 **用量曲线 + 省钱建议**——内置 Token 水电表，看得见烧钱速度。

**数据背书**：当前版本 0.9.92（2026-08-07 核，`website/version.json`）；下载入口 `https://u-claw.org.cn/download/U-King-Setup.exe`（国内）；**无埋点=无下载/使用统计（盲区）**。

**⚠️ 诚实边界（2026-08-08 用户定调，营销叙事的地基）**：
- **单主力维护**：U-King 只有一个主力维护者，**bug 还很多，不少功能带测试味道**。
- **探索中**：正在探索 **AI harness 工程**——致力于 AI 基础设施（LLM=CPU、AI 操作系统搭建中）。
- **不宣称未实现**：发出去的每一个营销点必须真实可核验。凡涉及「成熟」「稳定」「强大」的措辞一律降调为「在探索」「还很不成熟」「欢迎一起拼」。
- **欢迎联系**：对 AI 基础设施 / harness 工程感兴趣的人 → 联系方式见官网 u-king.org 的意见反馈区（单主力，回复慢，见谅）。
- 官网已体现：`#feedback` 意见反馈区（诚实声明 + 联系方式）。

**金句（用户定）**：WorkBuddy 很好，像品牌机戴尔联想；**懂电脑的，都选组装机 u-king.org——因为你懂的**。

**目标人群**：所有想用 AI 但装不动的国内用户——这是最大基本盘；以及对 AI 基础设施 / harness 工程感兴趣、想一起搭这台「组装机」的人。

**官网**：`C:\Users\ZhuanZ\Desktop\claude\u-claw\u-king简化版-u盘版本\website\`（index + 各 install 教程页 + download/）
**部署**：`bash deploy.sh` → 新加坡 nginx（101.32.254.221），非 Vercel，URL 必须带 .html
**已内置引流页**：codex-cli-install.html / claude-code-install.html / hermes-install.html / openclaw-install.html / install-help.html / ai-academy.html

**营销动作**：所有博客/项目/轰炸机文末 CTA = U-King 下载。U-King 本身就是「装好全部 AI」的收口。**调性一律谦虚诚实，用「组装机/星辰大海」的叙事收口，不用「最强/最好」的宣称。**

---

## 🏆 引流旗舰：本象协议 Benxiang / 2origin（GitHub: dongsheng123132/2origin）

**定位**：给 AI 一套「不会失忆」的持久对象状态层——AI 只提交语义事务，确定性编译器校验落地。
「一源万影：保存本象，按需投影。」协议核心 = Origin IR。

**可讲的故事（按强度排序）**
1. 🚀 **全球第一个「AI 状态回写正确性」开放榜单 ShadowBench-W**（自建基准，已推 2origin）——立标准，抢定义权。已发博客 #13。
2. 🚀 **「AI 为什么写不了长篇小说」= 上下文必炸，本象把它变成可验证的事务**——科普 + 技术双钩子。已发博客 #14。
3. 🚀 **白鼓挑战：AI 挑战人类最长小说纪录（Venmurasu），状态全程可验证**——最博眼球的叙事。已发博客 #16。
4. 🚀 **实验数据：状态准确率 W3 跨两个水平悬殊的模型（qwen-plus / deepseek-v4-flash）同时 98.9%，逐轮分布相同**。已发博客 #9。
5. 📝 **「状态层的正确性与底模无关，正文层质量与底模显著相关」**——这个结论本身是金句，可单独成文。
6. 📝 **在 ConStory-Bench（ACL 2026）上「亮剑」**：已发 issue #1，争取拿第三方尺子量自己的状态机臂。进行中，可跟踪成续集。

**数据背书**
- W3 状态准确率：qwen-plus 98.9%、deepseek-v4-flash 98.9%（各 n=11，置换检验 p=1.0000）
- W1 正文质量：qwen 0.20 vs deepseek 0.55（p=0.0392）——状态分相同、正文差近 3 倍
- 自测：81+44+101+87+18 项，conformance 68/68（JS+Python）
- 27 项自测跨两域（compiler）
- 注意：**诚实边界**——多模型验证只到 2 个模型、无真实用户、生产级适配器未完成。对外必须主动说明。

**目标人群**：AI 研究员、长文写作团队、Agent 开发者、小说平台。

**官网**：`D:\uking编程\本象协议\website\`（index/manifesto/challenge + longrun 页）
**outreach 草稿**：`本象协议\outreach\` 有 14 篇（天命 issue、memtx 信、conStory 信、评测方案、官网发布任务等）

---

## 🏆 引流旗舰：U-Claw 虾盘（GitHub: dongsheng123132/u-claw）

**定位**：OpenClaw AI 助手离线安装 U 盘——一键装好 Claude Code / Codex / OpenClaw，无需联网即插即用。**U-King 的前身/兄弟产品，承接引流到 u-king.org。**

**可讲的故事**
1. 🚀 **「离线 AI 装机」**——电脑没网也能装全套 AI 工具，U 盘即插即用。1.7k★ 主力。
2. 🚀 **「从 U 盘到软件：U-King 是更轻的装法」**——U-Claw 证明的装机需求，由 u-king.org 免费软件承接（下载即用，比 U 盘更轻）。
3. 📝 **虾盘云**（api.u-claw.org.cn）——自建 AI API 分发平台，U-King 内置它作为模型驱动。

**数据背书**：1.7k★（2026-08-07 核）；u-claw.org.cn 国内可达（GFW 按 SNI 阻断的是 api.u-claw.org）。
**目标人群**：想用 AI 但装不动的普通用户、离线环境工作者、USB 便携党。
**CTA 策略**：U-Claw 文章把「想更省事？直接下 U-King」当收口。

---

## 🏆 旗舰三：Open365（GitHub: dongsheng123132/Open365）

**定位**：开源、轻量、不联网上传的 Windows 电脑维护工具——清理 / 开机加速 / 网络修复 / 安全护盾 / 软件卸载 / 守夜模式。纯 PowerShell 引擎 + C# 托盘 GUI，零依赖。

**可讲的故事**
1. 📝 **「隐私优先的 Windows 维护工具」**——对比 360 系全家桶：不联网上传、开源、轻量。直击国内用户隐私焦虑。
2. 📝 对标「电脑管家」的开源替代，Windows 用户一键维护。
3. 📝 可兼转案例库卡片（CONTENT-PLAN 里已标）。

**目标人群**：Windows 用户、被 360 烦到的人、开源爱好者、隐私敏感者。
**官网**：`D:\uking编程\Open365电脑AI开源助手\`（CONTENT-PLAN 待写 #3）

---

## 🚀 OpenCodex（GitHub: dongsheng123132/opencodex）

**定位**：绿色（~4.7MB）本地多终端 AI 编程工作台——以文件夹为基础，主区直接是终端，分屏跑 Claude Code / Codex。Tauri 2 + React，便携免安装。

**可讲的故事**
1. 📝 **4.7MB 的「绿色」AI 工作台**——免安装、自带模型、无服务器、无内置 Key。体量是最大卖点。
2. 📝 分屏同时跑 Claude Code + Codex，文件夹即工作区。
3. 🚀 已在轰炸机有 campaign 先例（`opencodex-redline`），复用最快。

**目标人群**：AI 编程开发者、多工具用户、便携党。

---

## 📚 教程书系（蓝皮书/红皮书，中文教程 = 长尾 SEO 主力）

| 教程 | 仓库 | 亮点 | 状态 |
|---|---|---|---|
| Codex CLI 中文教程 | codex-handbook-zh | 保姆级安装，国内可用、不用登录 OpenAI | 📝 待写（长尾 SEO 主力） |
| Hermes Agent 中文教程 | hermes-agent-zh | 38 章 14 万字，配套 U-Hermes 马盘 | 📝 待写 |
| AI 作图中文教程 | ai-image-handbook-zh | gpt-image-2 文生图/改图，国内不用翻墙 | 📝 待写 |
| Obsidian + AI 教程 | obsidian-ai-handbook-zh | 第二大脑 + AI | 📝 |
| ClawX 中文教程 | clawx-handbook-zh | OpenClaw 图形版实战 | 📝 |
| Claude Code 中文教程 | claude-code-handbook-zh | 保姆级，国内可用不用登录 | 📝 |

**核心营销点**：**「国内可用、不用翻墙」** —— 这是全部中文教程的统一钩子，也是最强的差异化。
**目标人群**：被墙挡在 AI 门外的中文开发者。

---

## 🎨 U-Hermes 虾米 + Hermes 生态

**定位**：NousResearch Hermes Agent 中文便携版（Linux Live 启动盘 + Windows 商业版）+ 中文社区门户（zh.u-hermes.org）。

**可讲的故事**
1. 📝 **「让马替你 24 小时写代码」**——Hermes 中文教程 + 便携盘配套。
2. 📝 离线 AI Agent 环境随身带。

---

## 🛠 工具矩阵（每个都能出一条短文）

| 工具 | 一句话卖点 | 人群 |
|---|---|---|
| **bomber / media-publish** | 一份文案 → 20+ 平台发布台，半自动 | 自媒体人（✅已发博客#10） |
| **ClawMe 虾秘** | 跨模型跨 Agent AI 值班台，AI 干活你拍板 | Agent 重度用户 |
| **PodApp** | AI 程序舱：AI 不确定输出 → 确定动作加工，装 .pod 即 MCP 工具 | 开发者 |
| **PodApp Protocol** | AI 小程序开放标准（ActionParity MiniApp Profile） | 开发者 |
| **Redline** | 万能文档预览标注层，人圈选 AI 改源文件，自身不写回 | AI 编程 |
| **ShadowFork** | 开源软件定制层：魔改一次跟随一生 | 开源作者 |
| **zhaozuo 照做** | Windows 第三方软件自动化示范（兼容影核） | RPA/AI agent |
| **AIQR 爱码** | Agent Ready QR：AI 能读的二维码 | 物联网/AI |
| **PaperGuard** | 论文体检：扫描统计自洽/数字一致/图片完整性 | 科研人员 |
| **GitScience** | AI for Science 开源科研门户 | 科研人员 |
| **SearchHub 一搜** | Chrome 扩展：一次输入多 AI 并排比对（已上架） | 普通用户 |
| **UBench** | USB 跑分，识别假盘扩容盘 | U 盘党 |
| **fastcp** | 一读多写并行拷 U 盘 | 装机商 |
| **u-rescue** | AI 编程环境故障病例库，npx 直接用 | AI 开发者 |
| **keygate** | 轻量 LLM Key 分发计费，单二进制 | 团队 |
| **skill-multi-publisher** | 一条命令把 skill 发到多个市场 | 技能作者 |
| **ClawX 便携版** | 解压即用的 OpenClaw GUI，内置虾盘云 | 便携党 |
| **phonebody** | 闲置 Mac 变竖屏手机义体远程写码 | Mac 用户 |
| **Openclaw-nav** | OpenClaw 工具导航站（nav.u-claw.org） | 生态用户 |
| **u-king-miniapp** | U-King 小程序开放规范 | 开发者 |
| **音乐《呜哇·迎客来》** | 隆回花瑶迎宾曲，CC BY-SA 4.0 | 文化 |

---

## 🏛 官网群（SEO 矩阵，seo-2026-08 已有管线）

- www.hequbing.com（贺去病 AI 咨询，主站）
- blog.hequbing.com（博客，Vercel，posts.json 驱动）
- u-claw.org / u-king.org / nav.u-claw.org / api.u-claw.org.cn
- 56chat.cn · actionparity.com · aiqr.cc · kditui.com · claw-x.com · clawx.com.cn
- zh.u-hermes.org（Hermes 中文社区）

**营销点**：各项目独立站互相站内互链 + GitHub 仓库 homepage 互链 + 主站博客三向闭环（已跑通）。

---

## 🚀 2Origin 本源计算架构（2026-08-08 发布）· 组装机叙事的工程化

**定位**：「AI 组装机时代」从比喻变成**可验证的开源技术架构**——模型是 CPU（可换），状态是硬盘（不丢），动作可迁移，经验会复利。U-King 是它的第一台参考整机。

**可讲的故事**
1. 🚀 **「我们不造模型，我们造一台 AI 计算机」**——模型是 CPU，但 CPU 从来不等于一台计算机。2Origin 定义"AI 计算机"该怎么组成。
2. 🚀 **「AI 会转学了」**——环境即镜像：把 AI 的"学历"（本境）复制到另一台机器，新机器开学即续，不用从零教。
3. 🚀 **「越用越懂你这台机器」**——学历跨会话积累，5 份学历 27 条事实全带进新会话，一个不丢。
4. 📝 **「开源建标准，参考实现可跑」**——2origin-computer（规范）+ 2origin-harness（零依赖参考实现），5 分钟跑通。
5. 📝 **「顺带修了 uking 一个真 bug」**——crashlog 多实例误报，用这套架构的方法论确诊并修复。

**数据背书（2026-08-08 核，发前再核）**
- GitHub：`dongsheng123132/2origin-computer`（PUBLIC）· `dongsheng123132/2origin-harness`（PUBLIC）· `dongsheng123132/2origin`（本象）
- Conformance：**PASS 5 · FAIL 0 · MANUAL 2**（2026-08-08 实跑 `bash conformance/run-tests.sh`）。
  通过的 5 项：跨会话 / 动作可迁移 / 结果可验证 / 学习不自动永久化 / 可审计。
  **⚠️ 不许写成 7/7**——跨 Harness（C2）、跨模型（C3）需真实外部依赖，脚本标 `[MANUAL]` 不是 `[PASS]`。
- 2origin-harness：零依赖纯 Node，**38 测试全过**（2026-08-08 实跑 `npm test`，须单独跑，与 conformance 并发会假失败），QUICKSTART 5 分钟跑通
- 实测证据：全新会话自动加载学历报出任务标题；Codex 零追问续作；两个不同模型读同一状态零漂移

**目标人群**：开发者、AI 工程师、对"AI 系统架构"感兴趣的独立开发者；CTA 引 U-King（它是第一台 2Origin 参考整机）。

**金句（可入金句库）**：「本象保存世界，本境保存成长，影核改变世界。」「北桥负责知，南桥负责行。」「模型可换，状态不丢，动作可迁移，经验会复利。」

---

## ⚡ 金句库（可直接用的标题/引言）

- 「一源万影：保存本象，按需投影。」
- 「状态层的正确性与底模无关，正文层的质量与底模显著相关。」
- 「AI 读到的不是世界，是影子的影子。」
- 「把投影当成对象本身，是我们改 PDF 却改不到本质的原因。」
- 「AI 为什么写不了长篇小说？因为上下文必炸。」
- 「国内可用、不用翻墙」——所有中文教程的统一钩子。
- 「魔改一次，跟随一生」——ShadowFork。
- 「一份文案，满世界发」——bomber。
