# 个人主页维护说明

纯静态网页，无需构建，直接推送到 `XiaokunSun.github.io` 仓库即可由 GitHub Pages 发布。

## 文件结构

```
index.html          页面入口（加载页、页脚访客统计的骨架）
data.js             ★ 所有内容都在这里：基本信息、链接、About、新闻、作者主页、论文、博客、经历、荣誉、服务、访客统计 ID
images/             头像、论文配图、硕士论文 PDF、favicon
assets/
  style.css         全部样式；配色 / 字体 / 高亮颜色在文件开头的 :root 里
  render.js         读取 data.js 生成页面；板块标题和顺序在 SECTIONS，论文按钮图标在 PUB_LINK_ICON
  visitors.js       加载页 + 访客地图和总浏览量（MapMyVisitors）；地图颜色在 MAP_COLORS
  icons.js          品牌图标（ArXiv / Email / Google Scholar / GitHub / Hugging Face / 小红书 / B站 / X / YouTube）
  fonts/            本地字体 Inter + Source Serif 4（不依赖 Google Fonts，国内加载快）
  logos/            学校校徽、公司 logo
```

页面和导航顺序：About → News → Publications → Blog → Education → Work Experience → Honors → Services；访客地图和总浏览量位于页脚。板块标题、导航文字和顺序统一由 `assets/render.js` 的 `SECTIONS` 控制。

## 常见操作（只改 data.js）

| 想做的事 | 怎么改 |
|---|---|
| 加一条新闻 | 在 `news` 数组**最前面**加一行 `{ date: "2026.11", text: "..." },` |
| 修改新闻窗口条数 | 改 `newsVisibleCount`，默认显示前 10 条，剩余新闻滚动查看；桌面和手机均按实际行高计算 |
| 加一篇预印本 | 取消 `publications` 开头预印本模板的注释并填写；配图放进 `images/` |
| 预印本中稿了 | 把它的 `type` 改成 `"published"`，`venue` / `year` 改成会议名和年份 |
| 加学位论文 | `type: "thesis"`（博士论文以后放这里） |
| 加一篇博客 | 在 `blog` 数组最前面添加 `date`、`title`、`url`、`image`、`platform`、`language`、`summary`；日期格式为 `YYYY.MM.DD` |
| 添加作者主页 | 在 `authorProfiles` 中添加 `"作者姓名": "主页 URL"`，所有论文会统一引用 |
| 修改博客配图 | 将图片放进 `images/`，修改对应 `blog` 条目的 `image`；博客和论文可使用各自独立的配图 |
| 修改头像 | 同时修改 `profile.avatar` 和 `index.html` 中加载页头像的 `src`；当前为 `images/avatar.png` |
| 加实习 / 工作 | 在 `experience` 最前面加一条，logo 放进 `assets/logos/`；可选 `desc` 写一句工作内容 |
| 加荣誉 | 在 `honors` 最前面加一行 `{ date: "...", text: "..." },` |
| 加 / 删顶部链接 | 改 `links` 数组；`icon` 填 `assets/icons.js` 里已有的键名 |
| 改简介、所在地 | 改 `profile` 里的 `tagline` / `location` |
| 修改联系提示 | 改 `contactNote` 数组，每一项显示为一条独立提示，支持 HTML |
| 高亮某条新闻 / 论文 | 在该条里加 `highlight: 0.5`（0~1，越大紫色越深；不写就是不高亮） |
| 更新日期 | 改最底部的 `lastUpdated` |

- 出版物按 `preprint` → `published` → `thesis` 分三组显示，某组为空会自动隐藏。
- 每篇论文 `links` 的第一项会作为标题和配图的跳转链接。
- 文字里可以直接写 HTML，例如 `<a href="...">链接</a>`、`<b>加粗</b>`。

## 新闻窗口

`newsVisibleCount: 10` 表示列表窗口默认完整显示最新 10 条新闻，后续条目通过滚动查看。窗口根据前 10 条的实际高度计算，字体加载完成、窗口宽度变化或手机端文字换行后会重新测量，因此手机端窗口可能比桌面端更高；不要通过修改 CSS 固定高度来调整条数。

新闻不超过设定条数时全部展示，底部滚动提示自动隐藏。新增新闻后，提示中的总条数自动更新。

## 出版物作者与按钮

作者顺序和身份标记维护在每篇论文的 `authors` 数组中：

```js
authors: ["Co-author A*", "Xiaokun Sun*", "Zhenyu Zhang†"],
```

- `*` 表示共同一作（Equal contribution），`†` 表示通信作者（Corresponding author），两种身份兼有时写作 `姓名*†`。
- 标记说明只出现一次：桌面端位于 Publications 标题行右侧、横线上方；宽度不超过 760px 时，紧贴标题下方换行。文字在 `assets/render.js` 的 `sectionTitle()` 中维护，布局在 `.pub-heading` / `.pub-legend` 中调整。
- 作者姓名与 `profile.name` 相同时自动加粗、加下划线，身份符号以上标显示。
- 作者主页统一维护在 `authorProfiles`，键名只填姓名，不包含 `*` 或 `†`。同一作者在不同论文中共用链接；未配置链接的姓名显示为纯文字。项目主页只提供 GitHub 或 Google Scholar 时可沿用该链接。
- 作者顺序、共同一作、通信作者和主页链接以对应论文主页为依据；主页遗漏身份标记时核对论文 PDF。Inner-Body 的两位共同一作已由论文 PDF 首页确认。
- 论文按钮名称到图标的映射在 `assets/render.js` 的 `PUB_LINK_ICON` 中；值以 `@` 开头表示使用 `assets/icons.js` 中的品牌图标，例如 `Code: "@github"`。
- ArXiv 使用专用交叉标志，图标键为 `arxiv`，兼容 `ArXiv`、`arXiv`、`arxiv` 三种按钮名；新增条目建议统一写 `ArXiv`。
- Model 按钮使用与顶部链接相同的彩色 Hugging Face 图标。资源尚未发布时在论文 `links` 中填 `Model: null`，点击会显示 “Coming soon”；发布后将 `null` 替换为模型 URL 即可。

## 博客维护

Blog 章节位于 Publications 后、Education 前。每张卡片整体是文章链接，点击图片、文字或留白均会在新标签页打开文章，也支持 Tab 聚焦后按 Enter 跳转；没有单独的 “Read on WeChat” 按钮。论文卡片里的 Blog 按钮继续保留。

在 `data.js` 的 `blog` 数组最前面添加条目，日期按新到旧排列。例如：

```js
{
  date: "2026.03.17", // YYYY.MM.DD，使用文章实际发布日期
  title: "MorphAny3D：无需额外训练的三维变形",
  url: "https://mp.weixin.qq.com/s/NIfDF0RUEidH0tIlPw0gHw",
  image: "images/blog_morphany3d.png",
  platform: "WeChat",
  language: "Chinese",
  summary: "A closer look at MorphAny3D and how structured latents enable training-free 3D morphing.",
},
```

`title` 是展示标题，可适当缩短原文标题；`summary` 是简短介绍，两者直接填写文字即可。卡片已包含整张链接，不要在标题或介绍中再嵌套链接。

当前博客配图为 `images/blog_morphany3d.png` 和 `images/blog_semantichuman.png`。替换同名文件即可更新图片；使用新文件名时修改对应 `image`。缩略图按 16:9 裁剪显示（`object-fit: cover`），建议使用相同比例以保留画面内容。

## 荣誉与名称约定

博士研究生国家奖学金的英文统一为 **National Scholarship for PhD Students**。2026 年 10 月获奖已分别记录在 `honors` 和 `news` 中，新闻采用 `highlight: 0.5` 高亮。两个数组独立维护；以后更改同一事件的日期或名称时需同步修改。

## 改样式（assets/style.css）

| 想改的 | 位置 |
|---|---|
| 主题紫色 | `:root` 里的 `--accent` 系列 |
| 高亮最深时的颜色 | `:root` 里的 `--hl-max` |
| 论文卡片之间的间隔 | `.pub-list` 里的 `gap` |
| 标题字体 / 正文字体 | `:root` 里的 `--font-head` / `--font` |
| 正文最大宽度 | `:root` 里的 `--w` |
| 出版物标题和标记说明的布局 | `.pub-heading` / `.pub-legend`；手机端规则在 `@media (max-width: 760px)` 中 |
| 博客卡片布局、悬停和键盘聚焦样式 | `.blog-card` / `.blog-thumb` / `.blog-title` |

版式约定：新闻是"一个外框 + 内部一行一条、浅色虚线分隔"；论文是"每篇一张独立圆角卡片、卡片之间留间隔"。两者都由 `highlight` 控制底色深浅。

## 其他行为说明

- **邮箱按钮**：点击时会打开默认邮件客户端，同时把邮箱地址复制到剪贴板并弹出提示（很多电脑没有设置邮件客户端，点击 mailto 没反应）。
- **加载页**：首屏图片加载完后淡出，最多等 2.5 秒。
- **访客统计**：使用旧主页的 MapMyVisitors（ID 在 `data.js` 的 `visitorMapId`），历史数据保留。
  页脚显示访客地图，标题行右侧显示总浏览量。mapmyvisitors.com 在中国大陆无法访问：大陆访客会看到"unavailable"提示，海外访客正常显示。
  两者都在页面加载完后异步请求，不会拖慢页面。

## 本地预览

直接双击 `index.html` 用浏览器打开即可。

发布前建议确认：新闻完整展示前 10 条且能滚动查看后续条目；作者标记和主页链接正确；ArXiv 按钮显示专用标志；整张博客卡片能跳转；桌面和手机端均无横向溢出。替换图片后若仍显示旧图，可强制刷新浏览器。
