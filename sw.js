if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let d={};const n=e=>s(e,f),o={module:{uri:f},exports:d,require:n};i[f]=Promise.all(r.map((e=>o[e]||n(e)))).then((e=>(c(...e),d)))}}define(["./workbox-6cb62acc"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"8132d99daac1824e5f9a70f67ebc7f71"},{url:"index.html",revision:"6b1cb789cba43513f705194f54ddf837"},{url:"js/bullet.js",revision:"1eecb7e17e63ed4970b18f18a1d4f184"},{url:"js/engine.js",revision:"d06a1c48e0ef2b67b4a04ffe3fb867bf"},{url:"js/index.js",revision:"55201ef7e617085feb596f761fae53ab"},{url:"js/level.js",revision:"46c171cf91bbdf19fe5d6eeaf8f695a4"},{url:"js/lore.js",revision:"80fb699104c07002610c82320b0f0515"},{url:"js/mob.js",revision:"897a2f071c376fca667293e1874803ce"},{url:"js/player.js",revision:"033467965df2d05c2ad58398ebfd01e3"},{url:"js/powerup.js",revision:"4001ed9883f473d8130a307f53564bdc"},{url:"js/simulation.js",revision:"8815d246d496ee4c5e6617b0fef37869"},{url:"js/spawn.js",revision:"15e3cba3f7ddcc0d4dae0cc216c8e348"},{url:"js/tech.js",revision:"71e9f0cabc33eee1ed01f95b97155f6e"},{url:"js/visibility.js",revision:"e47a1dc133e89abb68f48630140d0fc9"},{url:"lib/decomp.min.js",revision:"b79251d07db2349f7c79b1d3949ea6ff"},{url:"lib/matter.min.js",revision:"5da8cd5a622073eb0c422acd73b5347d"},{url:"lib/randomColor.min.js",revision:"8b5de12e8924c723957c87c4c741c6cb"},{url:"sw.js",revision:"181a4b65efccbb40e695510dd5d7d8b1"},{url:"style.css",revision:"fef22254a2ae5204c927ff492e1a0e16"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
