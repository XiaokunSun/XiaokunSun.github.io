/* =====================================================================
 * 渲染脚本：读取 data.js 生成整个页面，日常维护不需要改这里
 * · 板块标题、顺序、导航文字：改下面的 SECTIONS
 * · 论文链接按钮的图标：改 PUB_LINK_ICON
 * · 作者标记说明的文字：改 sectionTitle()；布局在 style.css 的 .pub-heading / .pub-legend
 * ===================================================================== */
(function () {
  const S = window.SITE;
  const ICONS = window.ICONS || {};

  const SECTIONS = [
    { id: "about",        nav: "About",           title: "About Me",               icon: "user" },
    { id: "news",         nav: "News",            title: "News",                   icon: "news" },
    { id: "publications", nav: "Publications",    title: "Publications",           icon: "book" },
    { id: "blog",         nav: "Blog",            title: "Blog",                   icon: "pen" },
    { id: "education",    nav: "Education",       title: "Educational Experience", icon: "cap" },
    { id: "experience",   nav: "Work",            title: "Work Experience",        icon: "briefcase" },
    { id: "honors",       nav: "Honors",          title: "Honors & Awards",        icon: "award" },
    { id: "services",     nav: "Services",        title: "Academic Services",      icon: "users" },
  ];

  // 线条图标（Lucide 风格）
  const UI = {
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    news: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    building: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5h6v5M9 10h.01M15 10h.01"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',
    pen: '<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    mouse: '<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/>',
    user2: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  };
  // 论文链接按钮的图标：按钮名 → 图标；@ 前缀使用 icons.js 中的品牌图标
  const PUB_LINK_ICON = { Project: "globe", ArXiv: "@arxiv", arXiv: "@arxiv", arxiv: "@arxiv", Paper: "file", PDF: "file", Code: "@github", Model: "@huggingface", Blog: "pen", Video: "play", Gallery: "image", Dataset: "db" };

  const ui = name => `<svg class="ui" viewBox="0 0 24 24" aria-hidden="true">${UI[name] || UI.link}</svg>`;
  const brand = name => {
    const ic = ICONS[name];
    if (!ic) return ui("link");
    return `<svg class="brand brand-${name}" viewBox="${ic.viewBox || "0 0 24 24"}" aria-hidden="true">${ic.raw || `<path d="${ic.path}"/>`}</svg>`;
  };
  const ext = url => (/^https?:\/\//.test(url) ? ' target="_blank" rel="noopener"' : "");
  const a = (url, text, cls = "") => (url ? `<a${cls ? ` class="${cls}"` : ""} href="${url}"${ext(url)}>${text}</a>` : text);
  const strip = n => n.replace(/[*†]+$/, "");
  // 高亮深度：data.js 里 highlight 填 0~1 之间的数（0 不高亮，1 最深），转成 CSS 变量 --hl
  const hl = x => {
    const v = Math.min(1, Math.max(0, Number(x.highlight) || 0));
    return v ? ` style="--hl:${v}"` : "";
  };
  const me = S.profile.name;

  function authors(list) {
    return list.map(n => {
      const plain = strip(n);
      const name = plain === me ? `<b>${plain}</b>` : plain;
      const marks = n.slice(plain.length);
      return `<span class="pub-author">${a((S.authorProfiles || {})[plain], name)}${marks ? `<sup>${marks}</sup>` : ""}</span>`;
    }).join(", ");
  }

  function sectionTitle(sec) {
    const title = `<h2 class="sec-title"><span class="sec-icon">${ui(sec.icon)}</span><span>${sec.title}</span></h2>`;
    if (sec.id !== "publications") return title;
    return `<div class="pub-heading">${title}<p class="pub-legend"><span><sup>*</sup> Equal contribution</span><span aria-hidden="true">·</span><span><sup>†</sup> Corresponding author</span></p></div>`;
  }

  /* ---------- 各板块 ---------- */
  function hero() {
    const p = S.profile;
    return `
    <header class="hero" id="top">
      <div class="hero-bg"></div>
      <div class="wrap"><div class="hero-inner">
        <div class="hero-photo"><img src="${p.avatar}" alt="${p.name}"></div>
        <div class="hero-text">
          <h1>${p.name}<span class="zh">${p.nameZh}</span></h1>
          <p class="hero-role">
            <span>${ui("building")}${p.position} @ ${a(p.affiliationUrl, p.affiliation)}</span>
            <span>${ui("pin")}${p.location}</span>
          </p>
          <p class="hero-tagline">${p.tagline}</p>
          <div class="hero-links">${S.links.map(l => {
            const color = (ICONS[l.icon] || {}).color || "var(--accent)";
            return `<a class="link-btn" href="${l.url}"${ext(l.url)} style="--brand:${color}" title="${l.label}">${brand(l.icon)}<span>${l.label}</span></a>`;
          }).join("")}</div>
        </div>
      </div></div>
    </header>`;
  }

  const BODY = {
    about: () => `<div class="about">${S.about.map(t => `<p>${t}</p>`).join("")}
      ${S.contactNote.map(note => `<p class="contact-note">${ui("chat")}<span>${note}</span></p>`).join("")}</div>`,

    news: () => `<div class="news-box"><ul class="news-list" tabindex="0" aria-label="News">
      ${S.news.map(n => `<li${hl(n)}><time>${n.date}</time><span>${n.text}</span></li>`).join("")}
      </ul></div>
      <p class="news-hint">${ui("mouse")}Scroll or drag the bar on the right to see all ${S.news.length} updates</p>`,

    publications: () => {
      const groups = [
        { type: "preprint", title: "Preprints" },
        { type: "published", title: "Conference & Journal Papers" },
        { type: "thesis", title: "Thesis" },
      ];
      return groups.map(g => {
        const list = S.publications.filter(p => p.type === g.type);
        if (!list.length) return "";
        return `<h3 class="sec-sub">${g.title}<span class="count">${list.length}</span></h3>
          <div class="pub-list">${list.map(pub).join("")}</div>`;
      }).join("");
    },

    blog: () => `<div class="blog-list">${S.blog.map((b, i) => `
      <a class="blog-card" href="${b.url}"${ext(b.url)} aria-labelledby="blog-title-${i}">
        <div class="blog-thumb"><img src="${b.image}" alt="" loading="lazy"></div>
        <div class="blog-info">
          <p class="blog-meta"><time datetime="${b.date.replace(/\./g, "-")}">${b.date}</time><span>${b.platform} · ${b.language}</span></p>
          <h3 class="blog-title" id="blog-title-${i}" lang="zh-CN">${b.title}</h3>
          <p class="blog-summary">${b.summary}</p>
        </div>
      </a>`).join("")}</div>`,

    education: () => `<ul class="tl">${S.education.map(e => tlItem({
      logo: e.logo, url: e.url, org: e.school, orgZh: e.schoolZh, period: e.period, title: e.degree,
      lines: [`${ui("building")}${a(e.deptUrl, e.dept)}`, `${ui("pin")}${e.location}`, e.advisor ? `${ui("user2")}${e.advisor}` : ""],
    })).join("")}</ul>`,

    experience: () => `<ul class="tl">${S.experience.map(e => tlItem({
      logo: e.logo, url: e.url, org: e.company, orgZh: e.companyZh, period: e.period, title: e.role,
      lines: [`${ui("pin")}${e.location}`, e.desc || ""],
    })).join("")}</ul>`,

    honors: () => `<ul class="honor-list">${S.honors.map(h => `<li><time>${h.date}</time><span>${h.text}</span></li>`).join("")}</ul>`,

    services: () => `<dl class="service-list">${S.services.map(s =>
      `<div><dt>${s.role}</dt><dd>${s.venues.map(v => `<span class="chip">${v}</span>`).join("")}</dd></div>`).join("")}</dl>`,
  };

  function pub(p) {
    const links = Object.entries(p.links || {});
    const main = links.length ? links[0][1] : "";
    const linkIcon = label => {
      const k = PUB_LINK_ICON[label];
      return k && k[0] === "@" ? brand(k.slice(1)) : ui(k);
    };
    return `
      <article class="pub${p.type === "preprint" ? " is-preprint" : ""}"${hl(p)}>
        ${a(main, `<img src="${p.image}" alt="${p.title}" loading="lazy"><span class="pub-venue">${p.venue} ${p.year}</span>`, "pub-thumb")}
        <div class="pub-info">
          <h4 class="pub-title">${a(main, p.title)}</h4>
          <p class="pub-authors">${authors(p.authors)}</p>
          ${p.tldr ? `<p class="pub-tldr"><span class="tldr-tag">TL;DR</span>${p.tldr}</p>` : ""}
          <div class="pub-links">${links.map(([label, url]) => url
            ? `<a href="${url}"${ext(url)}>${linkIcon(label)}${label}</a>`
            : `<button type="button" data-coming-soon aria-label="${label}: Coming soon">${linkIcon(label)}${label}</button>`).join("")}</div>
        </div>
      </article>`;
  }

  function tlItem(x) {
    return `
      <li class="tl-item">
        ${a(x.url, `<img src="${x.logo}" alt="${x.org}" loading="lazy">`, "tl-logo")}
        <div class="tl-body">
          <div class="tl-head">${a(x.url, x.org, "tl-org")}${x.orgZh ? `<span class="tl-orgzh">${x.orgZh}</span>` : ""}<span class="tl-period">${x.period}</span></div>
          <div class="tl-title">${x.title}</div>
          ${x.lines.filter(Boolean).map(l => `<div class="tl-sub">${l}</div>`).join("")}
        </div>
      </li>`;
  }

  /* ---------- 组装页面 ---------- */
  const nav = `
    <nav class="topnav"><div class="wrap">
      <a class="brand" href="#top">${S.profile.name}<span>${S.profile.nameZh}</span></a>
      <ul class="nav-links">${SECTIONS.map(s => `<li><a href="#${s.id}">${s.nav}</a></li>`).join("")}</ul>
    </div></nav>`;
  const main = `<main class="wrap">${SECTIONS.map(s =>
    `<section class="sec sec-${s.id}" id="${s.id}">${sectionTitle(s)}${BODY[s.id]()}</section>`).join("")}</main>`;

  document.getElementById("app").innerHTML = nav + hero() + main;
  document.title = `${S.profile.name} (${S.profile.nameZh})`;
  const meta = document.getElementById("footer-meta");
  if (meta) meta.innerHTML = `© ${new Date().getFullYear()} ${S.profile.name} · Last updated ${S.lastUpdated}`;

  /* ---------- 交互 ---------- */
  // 新闻窗口按前 N 条的实际高度计算；换行、字体加载和窗口变化后重新测量
  const list = document.querySelector(".news-list");
  const box = document.querySelector(".news-box");
  const newsHint = document.querySelector(".news-hint");
  const visibleNews = [...list.children].slice(0, Math.max(1, Math.floor(Number(S.newsVisibleCount) || 10)));
  const syncFade = () => box.classList.toggle("at-end", list.scrollTop + list.clientHeight >= list.scrollHeight - 4);
  const resizeNews = () => {
    const last = visibleNews[visibleNews.length - 1];
    const overflowing = list.children.length > visibleNews.length;
    if (last && overflowing) {
      const height = last.getBoundingClientRect().bottom - list.getBoundingClientRect().top + list.scrollTop;
      list.style.maxHeight = `${Math.ceil(height)}px`;
    } else {
      list.style.maxHeight = "none";
    }
    newsHint.hidden = !overflowing;
    syncFade();
  };
  list.addEventListener("scroll", syncFade, { passive: true });
  resizeNews();
  if (window.ResizeObserver) {
    const newsObserver = new ResizeObserver(resizeNews);
    visibleNews.forEach(item => newsObserver.observe(item));
  } else {
    window.addEventListener("resize", resizeNews, { passive: true });
  }
  if (document.fonts) document.fonts.ready.then(resizeNews);

  // 共用提示：未发布资源与邮箱复制
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  let toastTimer;
  const showToast = msg => {
    toast.textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2600);
  };
  document.querySelectorAll("[data-coming-soon]").forEach(button => button.addEventListener("click", () => showToast("Coming soon")));

  // 邮箱链接：同时复制地址，兼容没有默认邮件客户端的电脑
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => link.addEventListener("click", () => {
    const addr = link.getAttribute("href").replace(/^mailto:/, "").split("?")[0];
    if (navigator.clipboard) navigator.clipboard.writeText(addr).then(() => showToast(`Email copied: ${addr}`), () => showToast(addr));
    else showToast(addr);
  }));

  // 导航高亮当前板块
  const links = [...document.querySelectorAll(".nav-links a")];
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-35% 0px -60% 0px" });
  SECTIONS.forEach(s => io.observe(document.getElementById(s.id)));
})();
