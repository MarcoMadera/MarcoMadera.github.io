if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./serviceWorker-9659c3e6.js",["./workbox-87e0d50e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://marcomadera.github.io/assets/25ab2e4ceebc81a420575161de28fa1d.webp",revision:"392315d6083056abe4c25026f5abc79e"},{url:"https://marcomadera.github.io/assets/3770daac195b925450d3d4e6418c2e9b.js",revision:"97272405339381e169bd69079d490d50"},{url:"https://marcomadera.github.io/assets/6605b271635706aab939cd06799225bb.js",revision:"a32ee849025920ec702c41036454f86c"},{url:"https://marcomadera.github.io/assets/85bb9b9cb918b538a83f53d8ab4bd9d0.jpg",revision:"eb4682717df3e4c14e24f1c664b0de01"},{url:"https://marcomadera.github.io/assets/ae0072a4db25559464dafb1fc0f4e53d.js",revision:"810ab61af2a77f13f064276654f1b54d"},{url:"https://marcomadera.github.io/css/10.55e1268756ef4b05f50f.css",revision:"34161c1642d08bf05e51673e61a5b9cc"},{url:"https://marcomadera.github.io/css/3.55e1268756ef4b05f50f.css",revision:"e556e9388603b598454e64480327ca40"},{url:"https://marcomadera.github.io/css/4.55e1268756ef4b05f50f.css",revision:"b2ddf9ca50125f22405995f93558fe4b"},{url:"https://marcomadera.github.io/css/5.55e1268756ef4b05f50f.css",revision:"fbfb3c02cb696fd91382df0ffdbd8e58"},{url:"https://marcomadera.github.io/css/6.55e1268756ef4b05f50f.css",revision:"4734e4b90c2cd25dcd8dd266ce2e1f2c"},{url:"https://marcomadera.github.io/css/7.55e1268756ef4b05f50f.css",revision:"5df840cee33b943df208ce10554c25d3"},{url:"https://marcomadera.github.io/css/8.55e1268756ef4b05f50f.css",revision:"5ec7100a300c9aafc526b5b297712b0d"},{url:"https://marcomadera.github.io/css/9.55e1268756ef4b05f50f.css",revision:"519b9dca02b6c2a71b427b3fa4fc12b1"},{url:"https://marcomadera.github.io/css/app.55e1268756ef4b05f50f.css",revision:"70a90bfb6c6e507e5d9146510885dc1e"},{url:"https://marcomadera.github.io/images/icon_128x128.7e3db203ed6c29e5288f593599d008af.png",revision:"7e3db203ed6c29e5288f593599d008af"},{url:"https://marcomadera.github.io/images/icon_192x192.2d5f248cc235020d88f7a2790d8cd2bd.png",revision:"2d5f248cc235020d88f7a2790d8cd2bd"},{url:"https://marcomadera.github.io/images/icon_256x256.5571ec7109bc482d1cbfd7c78413568a.png",revision:"5571ec7109bc482d1cbfd7c78413568a"},{url:"https://marcomadera.github.io/images/icon_384x384.e68dfcd5641a2e87f70b92c6047c8ff5.png",revision:"e68dfcd5641a2e87f70b92c6047c8ff5"},{url:"https://marcomadera.github.io/images/icon_512x512.533b88cde8898536cd19f69b18c7c6e7.png",revision:"533b88cde8898536cd19f69b18c7c6e7"},{url:"https://marcomadera.github.io/images/icon_96x96.59b51e5821a5771a937a1ec3a7645a01.png",revision:"59b51e5821a5771a937a1ec3a7645a01"},{url:"https://marcomadera.github.io/index.html",revision:"9ed9420cc1c8babb2b1013507dbf4faf"},{url:"https://marcomadera.github.io/js/0.8a834f8d25afc0c7e30f.js",revision:"986df78d8c3b5dde480ff18b1882e046"},{url:"https://marcomadera.github.io/js/10.94e517afffebb1c2f825.js",revision:"4b760c6ae3cc6ade47a58f5b32999ef7"},{url:"https://marcomadera.github.io/js/11.8988b5e61b0513210053.js",revision:"f06cc27af6c35252e5b43f9e3039572e"},{url:"https://marcomadera.github.io/js/11.8988b5e61b0513210053.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"https://marcomadera.github.io/js/12.7b084f0683424c04e121.js",revision:"109fdbb5354b854c6bd5b86b6dee88a4"},{url:"https://marcomadera.github.io/js/2.60d1d563c2867e2132c4.js",revision:"8befae53fb2a489fee572b072dd510f6"},{url:"https://marcomadera.github.io/js/3.1a6c80f757884428e186.js",revision:"e0d6ebbfce67c00627e4c659752c554f"},{url:"https://marcomadera.github.io/js/4.c7d769456e2b34ffcf00.js",revision:"88aa827d0ff16717ffe7588f980df276"},{url:"https://marcomadera.github.io/js/5.d477bafe3109a29d4897.js",revision:"812ed3ef222be074e3d28244eed8458b"},{url:"https://marcomadera.github.io/js/6.d11d23483338bb646144.js",revision:"e01b4aae99cb85a43550cbf34fbfaaef"},{url:"https://marcomadera.github.io/js/7.742a17fe6edd5bbdbd50.js",revision:"a85e2608fb6f9c741d90d1e3adcade28"},{url:"https://marcomadera.github.io/js/8.a6edec2588ee56a73b20.js",revision:"26b4acc6173190d4ffd8d7b07c39c15a"},{url:"https://marcomadera.github.io/js/9.84c2a4b56818af00f9ca.js",revision:"f3444207b8ebb4ebc9a6a49050bb12ad"},{url:"https://marcomadera.github.io/js/app.55e1268756ef4b05f50f.js",revision:"b5bc401e1b6c232436c17178f46f0f66"},{url:"https://marcomadera.github.io/js/app.55e1268756ef4b05f50f.js.LICENSE.txt",revision:"9fc52a5c86dadbc815e772d81271cc4e"},{url:"https://marcomadera.github.io/js/modules.b1a890e6be10aff77b05.dll.js",revision:"3de8b200e6dfbf86ac9eadfc7d739023"},{url:"https://marcomadera.github.io/js/modules.b1a890e6be10aff77b05.dll.js.LICENSE.txt",revision:"3c73c585782ac05880c0f89bcfdbba5a"},{url:"https://marcomadera.github.io/manifest.8147eefe6e66928e660c7945c0c2e534.json",revision:"8147eefe6e66928e660c7945c0c2e534"},{url:"https://marcomadera.github.io/robots.txt",revision:"54779dd164361d6fa83da8b4b9381eff"}],{}),e.registerRoute(/images/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/assets/,new e.CacheFirst,"GET"),e.registerRoute(/https:\/\/res.cloudinary.com\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/.*/,new e.NetworkFirst,"GET")}));
