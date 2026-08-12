# Ander-Zheng.com

郑秋阳（Ander）的 Astro 个人主页。项目采用“Codex 自然语言修改 + Astro 实时预览 + GitHub/Vercel 发布”的工作流。

## 用 Codex 修改网站

在 Codex 中打开本仓库，直接描述希望看到的结果，例如：

- “把首页个人简介的围棋 4 段改成围棋 5 段，三种语言一起更新。”
- “为项目经历增加一张卡片，先给我本地预览，不要发布。”
- “把手机端头像缩小一点，桌面端保持不变，并检查构建。”

Codex 会遵循 [`AGENTS.md`](./AGENTS.md) 中的项目规则，修改源码并运行验证。Astro 开发服务器支持热更新，保存代码后浏览器会立即显示最新版本。

## 本地实时预览

首次运行：

```bash
npm install
npm run dev
```

然后打开终端显示的本地地址，通常是 <http://localhost:4321>。修改代码后无需重新启动，页面会自动刷新。

如果需要从同一局域网内的手机查看：

```bash
npm run dev:host
```

## 验证与发布

发布前运行：

```bash
npm run build
npm run preview
```

推荐发布流程：

1. 在 `codex/` 分支让 Codex 修改并验证。
2. 查看本地实时预览，确认内容和样式。
3. 明确告诉 Codex“提交并推送，创建 PR”或“合并并发布到 main”。
4. GitHub 更新后由 Vercel 自动部署。

本方案不在网页中调用 OpenAI API，因此不需要把 OpenAI API Key 放进项目。

## 项目结构

```text
src/components/   页面组件
src/pages/        Astro 页面入口
src/styles/       全局样式
public/           图片和 Decap CMS 后台
AGENTS.md         Codex 的仓库级工作规则
```
