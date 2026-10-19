/* =====================================================================
 * 主页内容数据 —— 日常维护只需要改这个文件
 *
 * · 文字里可以直接写 HTML，例如 <a href="...">链接</a>、<b>加粗</b>
 * · 新闻 / 论文 / 博客 / 经历：按时间从新到旧排列，新条目加在数组最前面
 * · 图片放到 images/ 目录，logo 放到 assets/logos/ 目录
 * · 新闻和论文都可以加 highlight: 0~1 设置紫色背景深度（不写 = 0 不高亮，0.3 浅，0.6 中，1 最深）
 * ===================================================================== */

window.SITE = {

  /* ---------- 基本信息 ---------- */
  profile: {
    name: "Xiaokun Sun",
    nameZh: "孙晓琨",
    avatar: "images/avatar.png",
    tagline: "3D content generation, from digital humans to creative 3D assets.",
    position: "PhD Student",
    affiliation: "Nanjing University",
    affiliationUrl: "https://is.nju.edu.cn/main.htm",
    location: "Shanghai, China",
  },

  /* ---------- 顶部链接 ----------
   * icon 对应 assets/icons.js 里的键名 */
  links: [
    { label: "Email",          icon: "email",         url: "mailto:xiaokun_sun@smail.nju.edu.cn" },
    { label: "Google Scholar", icon: "googlescholar", url: "https://scholar.google.com/citations?user=SG3SxqEAAAAJ" },
    { label: "GitHub",         icon: "github",        url: "https://github.com/XiaokunSun" },
    { label: "Hugging Face",   icon: "huggingface",   url: "https://huggingface.co/XiaokunSun" },
    { label: "RedNote",          icon: "xiaohongshu",   url: "https://www.xiaohongshu.com/user/profile/673d87fd000000000c01924e" },
    { label: "Bilibili",       icon: "bilibili",      url: "https://space.bilibili.com/255789819" },
    { label: "X",              icon: "x",             url: "https://x.com/MingJian26" },
    { label: "YouTube",        icon: "youtube",       url: "https://www.youtube.com/@Xiaokun_Sun" },
  ],

  /* ---------- About Me ---------- */
  about: [
    `I am currently a PhD student (2024.09 - Now) at <a href="https://is.nju.edu.cn/main.htm">School of Intelligence Science and Technology, Nanjing University</a>, advised by <a href="https://jessezhang92.github.io">Zhenyu Zhang (张振宇)</a>, working closely with <a href="https://tyshiwo.github.io/index.html">Ying Tai (邰颖)</a> and <a href="https://zili-yi.github.io">Zili Yi (易子立)</a>. My research focuses on <b>3D content generation</b>, encompassing human-centric digitalization and high-creativity asset generation.`,
    `I graduated from <a href="https://ci.hfut.edu.cn/index.htm">School of Computer Science and Information Engineering, Hefei University of Technology</a> with a bachelor's degree and from <a href="https://cic.tju.edu.cn">College of Intelligence and Computing, Tianjin University</a> with a master's degree, advised by <a href="https://cic.tju.edu.cn/faculty/likun/index.html">Kun Li (李坤)</a>, working closely with <a href="https://users.cs.cf.ac.uk/Yukun.Lai">Yu-Kun Lai (来煜坤)</a> and <a href="https://seea.tju.edu.cn/info/1015/1608.htm">Jingyu Yang (杨敬钰)</a>.`,
  ],
  contactNote: "I am always open to discussions and collaborations, feel free to contact me!",

  /* ---------- 新闻 ----------
   * newsVisibleCount 决定默认显示条数；桌面和手机端按实际高度测量，剩余条目滚动查看
   * highlight: 0~1 可选，背景紫色深度 */
  newsVisibleCount: 10,
  news: [
    { date: "2026.10", text: `I am honored to receive the <b>National Scholarship for PhD Students</b>!`, highlight: 0.5 },
    { date: "2026.04", text: `My internship journey at <a href="https://www.mihoyo.com/">miHoYo</a> begins, wish me luck!`, highlight: 0.0 },
    { date: "2026.02", text: `<a href="https://xiaokunsun.github.io/MorphAny3D.github.io">MorphAny3D</a> and <a href="https://luhexiao.github.io/Muses.github.io">Muses</a> are accepted by <b>CVPR 2026</b>!`, highlight: 0.5 },
    { date: "2026.02", text: `<a href="https://xiaokunsun.github.io/DreamBarbie.github.io">DreamBarbie</a> is accepted by <b>TVCG 2026</b>!`, highlight: 0.5 },
    { date: "2026.01", text: `Our paper <a href="https://luhexiao.github.io/Muses.github.io">Muses</a> focusing on fantasy 3D creatures generation has been released.`, highlight: 0.0 },
    { date: "2026.01", text: `Our paper <a href="https://xiaokunsun.github.io/MorphAny3D.github.io">MorphAny3D</a> focusing on robust 3D morphing has been released.`, highlight: 0.0 },
    { date: "2025.06", text: `<a href="https://xiaokunsun.github.io/StrandHead.github.io">StrandHead</a> is accepted by <b>ICCV 2025</b>!`, highlight: 0.5 },
    { date: "2025.05", text: `<a href="https://xiaokunsun.github.io/DreamBarbie.github.io">DreamBarbie</a> now supports expressive animation and physical simulation!`, highlight: 0.0 },
    { date: "2024.12", text: `Our paper <a href="https://xiaokunsun.github.io/StrandHead.github.io">StrandHead</a> focusing on strand-disentangled text-to-3D-head has been released.`, highlight: 0.0 },
    { date: "2024.09", text: `My PhD student life begins, wish me luck!`, highlight: 0.5 },
    { date: "2024.08", text: `Our paper <a href="https://xiaokunsun.github.io/DreamBarbie.github.io">DreamBarbie</a> focusing on high-fidelity disentangled text-to-3D-avatar has been released.`, highlight: 0.0 },
    { date: "2024.01", text: `I successfully obtained my master's degree. <a href="images/Master_thesis.pdf">Here</a> is my master thesis.`, highlight: 0.5 },
  ],

  /* ---------- 作者主页（键名不含 * / †；同一作者共用链接，未配置时保留纯文字）---------- */
  authorProfiles: {
    "Xiaokun Sun": "https://xiaokunsun.github.io/",
    "Hexiao Lu": "https://github.com/luhexiao",
    "Zeyu Cai": "https://zcai0612.github.io/",
    "Hao Guo": "https://github.com/LiveStockShapeAnalysis",
    "Hao Tang": "https://ha0tang.github.io/",
    "Ying Tai": "https://tyshiwo.github.io/index.html",
    "Jian Yang": "https://scholar.google.com.hk/citations?user=6CIDtZQAAAAJ",
    "Zhenyu Zhang": "https://jessezhang92.github.io/",
    "Zili Yi": "https://zili-yi.github.io/",
    "Qiao Feng": "https://fengq1a0.github.io/",
    "Jinsong Zhang": "https://zhangjinso.github.io/",
    "Yu-Kun Lai": "https://users.cs.cf.ac.uk/Yukun.Lai/",
    "Jingyu Yang": "http://seea.tju.edu.cn/info/1015/1608.htm",
    "Kun Li": "https://cic.tju.edu.cn/faculty/likun/",
  },

  /* ---------- 出版物 ----------
   * type 决定分组，页面上按此顺序显示：
   *   "preprint" 预印本 | "published" 会议 / 期刊 | "thesis" 学位论文
   * 作者名后加 * 表示共同一作，加 † 表示通信作者（可组合为 *†）
   * 统一说明放在 Publications 标题行右侧、横线上方；手机端紧贴标题下方换行
   * 名字与 profile.name 相同会自动加粗；主页链接从 authorProfiles 读取
   * links 的第一项会作为标题和配图的跳转链接
   * highlight: 0~1 可选，背景紫色深度（同新闻） */
  publications: [
    // 预印本模板：有新预印本时取消注释并填写
    // {
    //   type: "preprint",
    //   title: "Your Next ArXiv Preprint Title Goes Here",
    //   authors: ["Xiaokun Sun", "Co-author A", "Co-author B", "Zhenyu Zhang"],
    //   venue: "ArXiv", year: 2026,
    //   image: "images/MorphAny3D.png",
    //   tldr: "One sentence summarizing the key idea of the paper.",
    //   links: { ArXiv: "https://arxiv.org/abs/xxxx.xxxxx", Project: "https://..." },
    // },
    {
      type: "published", highlight: 0.5,
      title: "MorphAny3D: Unleashing the Power of Structured Latent in 3D Morphing",
      authors: ["Xiaokun Sun", "Zeyu Cai", "Hao Tang", "Ying Tai", "Jian Yang", "Zhenyu Zhang†"],
      venue: "CVPR", year: 2026,
      image: "images/MorphAny3D.png",
      tldr: "Training-free 3D morphing by blending structured latents inside the attention of 3D generators, yielding smooth, semantically consistent morphs even across categories.",
      links: { Project: "https://xiaokunsun.github.io/MorphAny3D.github.io", ArXiv: "https://arxiv.org/abs/2601.00204", Code: "https://github.com/XiaokunSun/MorphAny3D", Blog: "https://mp.weixin.qq.com/s/NIfDF0RUEidH0tIlPw0gHw" },
    },
    {
      type: "published", highlight: 0.25,
      title: "Muses: Designing, Composing, Generating Nonexistent Fantasy 3D Creatures without Training",
      authors: ["Hexiao Lu*", "Xiaokun Sun*", "Zeyu Cai", "Hao Guo", "Ying Tai", "Jian Yang", "Zhenyu Zhang†"],
      venue: "CVPR", year: 2026,
      image: "images/Muses.png",
      tldr: "The first training-free, feed-forward method for fantasy 3D creatures, composing diverse parts on a 3D skeleton to design, assemble and generate coherent new species.",
      links: { Project: "https://luhexiao.github.io/Muses.github.io", ArXiv: "https://arxiv.org/abs/2601.03256", Code: "https://github.com/luhexiao/Muses" },
    },
    {
      type: "published", highlight: 0.5,
      title: "DreamBarbie: Text to Barbie-Style 3D Avatars",
      authors: ["Xiaokun Sun", "Zhenyu Zhang†", "Ying Tai", "Hao Tang", "Zili Yi", "Jian Yang"],
      venue: "TVCG", year: 2026,
      image: "images/DreamBarbie.png",
      tldr: "Text-driven, animatable 3D avatars with separable shoes, accessories and simulation-ready garments — just like dressing up a Barbie doll.",
      links: { Project: "https://xiaokunsun.github.io/DreamBarbie.github.io", ArXiv: "https://arxiv.org/abs/2408.09126", Code: "https://github.com/XiaokunSun/DreamBarbie", Gallery: "https://drive.google.com/drive/folders/1FXDROWXrnsSQiOZ4vBgA_Yzib3irLNBc" },
    },
    {
      type: "published", highlight: 0.5,
      title: "StrandHead: Text to Hair-Disentangled 3D Head Avatars Using Human-Centric Priors",
      authors: ["Xiaokun Sun", "Zeyu Cai", "Ying Tai", "Jian Yang", "Zhenyu Zhang†"],
      venue: "ICCV", year: 2025,
      image: "images/StrandHead.png",
      tldr: "Generates strand-level 3D hair and disentangled head avatars from text, distilling human-centric 2D priors without any hair-text paired data.",
      links: { Project: "https://xiaokunsun.github.io/StrandHead.github.io", ArXiv: "https://arxiv.org/abs/2412.11586", Code: "https://github.com/XiaokunSun/StrandHead", Gallery: "https://drive.google.com/drive/folders/1Ve2vVVilzI-2TYNB9wQrLgG53L2PjFBM?usp=sharing" },
    },
    {
      type: "published", highlight: 0.5,
      title: "Learning Semantic-Aware Disentangled Representation for Flexible 3D Human Body Editing",
      authors: ["Xiaokun Sun", "Qiao Feng", "Xiongzheng Li", "Jinsong Zhang", "Yu-Kun Lai", "Jingyu Yang", "Kun Li†"],
      venue: "CVPR", year: 2023,
      image: "images/SemanticHuman.png",
      tldr: "Learns a semantic-aware disentangled latent space of 3D human bodies, allowing flexible, part-level editing of body shape.",
      links: { Project: "https://cic.tju.edu.cn/faculty/likun/projects/SemanticHuman/index.html", Paper: "https://openaccess.thecvf.com/content/CVPR2023/html/Sun_Learning_Semantic-Aware_Disentangled_Representation_for_Flexible_3D_Human_Body_Editing_CVPR_2023_paper.html", Code: "https://github.com/XiaokunSun/SemanticHuman", Video: "https://www.youtube.com/watch?v=hnrIv1bnZVw", Blog: "https://mp.weixin.qq.com/s/6v-3nbzYq2hZCsSacycDRw" },
    },
    {
      type: "published", highlight: 0.0,
      title: "Learning to Infer Inner-Body under Clothing from Monocular Video",
      authors: ["Xiongzheng Li*", "Jing Huang*", "Jinsong Zhang", "Xiaokun Sun", "Haibiao Xuan", "Yu-Kun Lai", "Yingdi Xie", "Jingyu Yang", "Kun Li†"],
      venue: "TVCG", year: 2022,
      image: "images/InnerBody.png",
      tldr: "Recovers the accurate inner body shape hidden under loose clothing from a single monocular video.",
      links: { Project: "https://cic.tju.edu.cn/faculty/likun/projects/Inner-Body/index.html", Paper: "https://ieeexplore.ieee.org/document/9869633", Code: "https://github.com/xz-pisces/Inner-body", Dataset: "https://ieee-dataport.org/documents/inner-body-dataset" },
    },
    {
      type: "thesis", highlight: 0.0,
      title: "Fine-Grained Semantic Disentangled 3D Human Body Representation and Its Applications",
      authors: ["Xiaokun Sun", "Kun Li"],
      venue: "Master's Thesis", year: 2024,
      image: "images/master_thesis.png",
      tldr: "A fine-grained, semantically disentangled 3D human body representation enabling part-level editing and downstream applications.",
      links: { Paper: "images/Master_thesis.pdf" },
    },
  ],

  /* ---------- 博客（按实际发布日期从新到旧排列，日期格式 YYYY.MM.DD）----------
   * 整张卡片链接到 url，无独立阅读按钮；title / summary 填文字，不嵌套链接
   * image 是博客独立配图，放在 images/，缩略图按 16:9 裁剪 */
  blog: [
    {
      date: "2026.03.17",
      title: "MorphAny3D：无需额外训练的三维变形",
      url: "https://mp.weixin.qq.com/s/NIfDF0RUEidH0tIlPw0gHw",
      image: "images/blog_morphany3d.png",
      platform: "WeChat", language: "Chinese",
      summary: "A closer look at MorphAny3D and how structured latents enable training-free 3D morphing.",
    },
    {
      date: "2023.04.18",
      title: "SemanticHuman：部件级、精细语义、灵活可控的 3D 人体编辑表征",
      url: "https://mp.weixin.qq.com/s/6v-3nbzYq2hZCsSacycDRw",
      image: "images/blog_semantichuman.png",
      platform: "WeChat", language: "Chinese",
      summary: "An introduction to SemanticHuman and its fine-grained, semantic-aware representation for 3D human body editing.",
    },
  ],

  /* ---------- 教育经历 ---------- */
  education: [
    {
      period: "2024.09 – Present",
      degree: "Ph.D. in Computer Science and Technology",
      school: "Nanjing University", schoolZh: "南京大学", url: "https://www.nju.edu.cn",
      dept: "School of Intelligence Science and Technology", deptUrl: "https://is.nju.edu.cn/main.htm",
      location: "Suzhou, China", logo: "assets/logos/nju.png",
      advisor: `Advisor: <a href="https://jessezhang92.github.io">Zhenyu Zhang (张振宇)</a>`,
    },
    {
      period: "2021.09 – 2024.01",
      degree: "M.Eng. in Computer Technology",
      school: "Tianjin University", schoolZh: "天津大学", url: "https://www.tju.edu.cn",
      dept: "College of Intelligence and Computing", deptUrl: "https://cic.tju.edu.cn",
      location: "Tianjin, China", logo: "assets/logos/tju.png",
      advisor: `Advisor: <a href="https://cic.tju.edu.cn/faculty/likun/index.html">Kun Li (李坤)</a>`,
    },
    {
      period: "2017.09 – 2021.06",
      degree: "B.Eng. in Communication Engineering",
      school: "Hefei University of Technology", schoolZh: "合肥工业大学", url: "https://www.hfut.edu.cn",
      dept: "School of Computer Science and Information Engineering", deptUrl: "https://ci.hfut.edu.cn/index.htm",
      location: "Hefei, China", logo: "assets/logos/hfut.png",
    },
  ],

  /* ---------- 工作 / 实习经历 ---------- */
  experience: [
    {
      period: "2026.04 – Present",
      role: "Research Intern",
      company: "miHoYo", companyZh: "米哈游", url: "https://www.mihoyo.com/",
      location: "Shanghai, China", logo: "assets/logos/mihoyo.png",
      // desc: "可选：一句话描述工作内容",
    },
    {
      period: "2023.04 – 2023.10",
      role: "Research Intern",
      company: "XR Lab, Alibaba DAMO Academy", companyZh: "阿里巴巴达摩院", url: "https://damo.alibaba.com/labs/xr-lab",
      location: "Beijing, China", logo: "assets/logos/alibaba.png",
    },
  ],

  /* ---------- 荣誉奖励 ---------- */
  honors: [
    { date: "2026.10", text: "National Scholarship for PhD Students" },
    { date: "2026.10", text: `Top Reviewer, <a href="https://neurips.cc/Conferences/2026">NeurIPS 2026</a>` },
    { date: "2019.10", text: `National First Prize in <a href="https://en.mcm.edu.cn">China Undergraduate Mathematical Contest in Modeling</a> (Top 0.75%)` },
  ],

  /* ---------- 学术服务 ---------- */
  services: [
    { role: "Conference Reviewer", venues: ["CVPR", "ICCV", "ECCV", "NeurIPS", "AAAI", "BMVC", "EG"] },
    { role: "Journal Reviewer", venues: ["TOG", "TVCG"] },
  ],

  /* ---------- 访客统计（MapMyVisitors，沿用旧主页的 ID，历史数据保留）----------
   * 页脚显示访客地图 + 总浏览量；mapmyvisitors.com 在中国大陆无法访问，大陆访客会看到"unavailable"提示 */
  visitorMapId: "05gHSbesKYAOaEvi76QB07btN2thK_7EWzKnK3bmrFc",

  lastUpdated: "Oct 2026",
};
