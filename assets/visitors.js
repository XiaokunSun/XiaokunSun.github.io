/* =====================================================================
 * 加载页 + 访客统计（MapMyVisitors）
 * · 地图和总浏览量都在页面加载完后异步请求，不会拖慢首屏
 * · mapmyvisitors.com 在中国大陆无法访问：8 秒没加载出来就显示提示
 * ===================================================================== */
(function () {
  const id = window.SITE && SITE.visitorMapId;

  /* ---------- 加载页：首屏图片就绪后淡出，最多等 2.5 秒 ---------- */
  const loader = document.getElementById("loader");
  const hide = () => loader && loader.classList.add("is-done");
  const firstImgs = [...document.querySelectorAll(".hero img, .loader img")];
  Promise.race([
    Promise.all(firstImgs.map(img => img.complete ? 0 : new Promise(r => { img.onload = img.onerror = r; }))),
    new Promise(r => setTimeout(r, 2500)),
  ]).then(() => requestAnimationFrame(hide));

  if (!id) return;

  /* ---------- 访客地图 ----------
   * 图片参数：w 宽度，t=n 不显示文字，co 海洋/背景色，cl 陆地色（不带 #） */
  const MAP_COLORS = { ocean: "ffffff", land: "dcd0f2" };
  const box = document.getElementById("visitor-map");
  const status = document.getElementById("visitor-status");

  function loadMap() {
    const img = new Image();
    let settled = false;
    const fail = () => {
      if (settled) return;
      settled = true;
      box.classList.remove("is-loading");
      box.classList.add("is-failed");
      status.querySelector("span").textContent = "Visitor map is unavailable on your network.";
    };
    img.alt = "Visitor map";
    img.onload = () => {
      if (settled) return;
      settled = true;
      box.classList.remove("is-loading");
      box.classList.add("is-loaded");
      const a = document.createElement("a");
      a.href = "https://mapmyvisitors.com/"; a.target = "_blank"; a.rel = "noopener"; a.title = "Visitor map";
      a.appendChild(img);
      box.appendChild(a);
    };
    img.onerror = fail;
    setTimeout(fail, 8000); // 网络不通时请求会一直挂起
    img.src = `https://mapmyvisitors.com/map.png?d=${id}&w=800&t=n&co=${MAP_COLORS.ocean}&cl=${MAP_COLORS.land}`;
  }

  /* ---------- 总浏览量 ----------
   * MapMyVisitors 小部件的数据接口（JSONP）返回一段脚本，其中带有 "3,038 Total Pageviews"，从中取出数字 */
  function loadTotal() {
    const totalEl = document.getElementById("map-total");
    const cb = "__mmvTotal" + Date.now();
    const s = document.createElement("script");
    const cleanup = () => { delete window[cb]; s.remove(); };
    window[cb] = code => {
      const m = String(code).match(/([\d,]+)\s+Total Pageviews/i);
      if (m) {
        totalEl.querySelector("b").textContent = m[1];
        totalEl.hidden = false;
      }
      cleanup();
    };
    s.onerror = cleanup;
    s.src = `https://mapmyvisitors.com/widget_call_home.js?d=${id}&w=300&t=tt&callback=${cb}`;
    document.body.appendChild(s);
  }

  window.addEventListener("load", () => { loadMap(); loadTotal(); });
})();
