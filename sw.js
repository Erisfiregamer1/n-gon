if (!self.define) {
  let e,
    i = {};
  const s = (s, c) => (
    (s = new URL(s + ".js", c).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, r) => {
    const d =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[d]) return;
    let a = {};
    const o = (e) => s(e, d),
      f = { module: { uri: d }, exports: a, require: o };
    i[d] = Promise.all(c.map((e) => f[e] || o(e))).then((e) => (r(...e), a));
  };
}
define(["./workbox-f1a9eee3"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "favicon.ico", revision: "8132d99daac1824e5f9a70f67ebc7f71" },
        { url: "index.html", revision: "743c18976c6709ed8b5dc551f19fe131" },
        { url: "js/bullet.js", revision: "485838c7303fdb4a4b327bd837dcee8f" },
        { url: "js/engine.js", revision: "e85b59136cc9665d1a16f68e29ebc7c5" },
        { url: "js/index.js", revision: "794b1eb29f63fd8e728eb633aaf81cb8" },
        { url: "js/level.js", revision: "54ad25d6caa8c28dcc7dc57155d60b76" },
        { url: "js/lore.js", revision: "80fb699104c07002610c82320b0f0515" },
        { url: "js/mob.js", revision: "678cda1352a8bdc358baf7b4a4e282ba" },
        { url: "js/player.js", revision: "4f804ca2db61e8868468923e9f831bd3" },
        { url: "js/powerup.js", revision: "fd2b5e5cedefca93fdcc4f628b9f1169" },
        {
          url: "js/simulation.js",
          revision: "a630f976980c0a2f5daae40f648652cb",
        },
        { url: "js/spawn.js", revision: "7ff7de5c38496406d086e90ca54277bb" },
        { url: "js/tech.js", revision: "ddcf293a8ae60a65d3aeed9daff65761" },
        {
          url: "js/visibility.js",
          revision: "e47a1dc133e89abb68f48630140d0fc9",
        },
        {
          url: "lib/decomp.min.js",
          revision: "b79251d07db2349f7c79b1d3949ea6ff",
        },
        {
          url: "lib/matter.min.js",
          revision: "03977d92575a9987dccd54c5916b2b6c",
        },
        {
          url: "lib/randomColor.min.js",
          revision: "8b5de12e8924c723957c87c4c741c6cb",
        },
        { url: "style.css", revision: "134573daaf4d0ac8b8155167ba234377" },
        { url: "todo.txt", revision: "14f5f02facb5b75c594fd9e8084435c4" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
