# Ander-Zheng.com — 项目规则

## 项目背景
这是郑秋阳（Ander）的个人主页。当前是一个单文件 index.html（内联 CSS + JS，图片为 base64），已上线 Vercel。本次任务：在不改变任何视觉与内容的前提下，将其工程化为 Astro 项目，并接入 Decap CMS。

## 技术栈
- 框架：Astro（静态输出）
- CMS：Decap CMS（GitHub backend）
- 部署：Vercel（已连接 GitHub 仓库，push 到 main 自动部署）
- 包管理：npm

## 最高铁律（绝对不可违反）
1. 以现有 index.html 为唯一视觉与内容基准，重构后页面在浏览器中必须与原 index.html 像素级一致。
2. 不得改动任何文案。简体 / 繁体 / 英文三语内容必须逐字保留，包括所有标点。
3. 不得改动任何链接、href、邮箱、外链地址（YouTube、公众号、小红书、Apple Music、GitHub、飞书、微信文章等全部原样保留）。
4. 不得改动任何颜色、字体、间距、圆角、阴影、动画等样式数值。
5. 三语切换（简/繁/EN 切换）、文章展开/收起、学习路径 A/B 标签切换、复制账号、滚动显隐、导航高亮等所有交互必须保持原有行为。
6. hero 中的人物照片必须原样保留（可从 base64 抽成 public/ 下的图片文件，但显示效果不变）。

## 工程化要求
1. 用 Astro 初始化项目，输出为纯静态站点。
2. 将 index.html 合理拆分为组件（如 Header、Hero、Work、Experience、Projects、Writing、Media、Learning、Bookshelf、Connect、Footer）。
3. 把内联 CSS 抽取到 src/styles/global.css，保持选择器与数值不变。
4. 把 base64 图片落地到 public/ 目录并正确引用。
5. 三语切换、标签切换等 JS 逻辑迁移后行为不变。
6. 配置 Decap CMS：在 public/admin/ 下提供 index.html 与 config.yml，backend 使用 git-gateway 或 github，可后续再接认证；先保证后台页面能打开、字段结构合理。
7. 完成后运行 npm run build 确认构建通过，并保留可用的 npm run dev 预览。

## 验收标准
- npm run build 成功，无报错。
- npm run dev 本地预览，逐屏对照原 index.html，视觉与交互一致。
- 所有外链可点、三语可切、照片正常显示。

## 工作方式
- 每完成一个步骤，简要说明做了什么，再继续下一步。
- 涉及删除或大改文件前，先说明原因。
- 遇到与本规则冲突或信息不全时，停下来询问，不要自行假设。
