if (!self.define) {
  const a = (a) => {
      "require" !== a && (a += ".js");
      let e = Promise.resolve();
      return (
        i[a] ||
          (e = new Promise(async (e) => {
            if ("document" in self) {
              const i = document.createElement("script");
              (i.src = a), document.head.appendChild(i), (i.onload = e);
            } else importScripts(a), e();
          })),
        e.then(() => {
          if (!i[a]) throw new Error(`Module ${a} didn’t register its module`);
          return i[a];
        })
      );
    },
    e = (e, i) => {
      Promise.all(e.map(a)).then((a) => i(1 === a.length ? a[0] : a));
    },
    i = { require: Promise.resolve(e) };
  self.define = (e, r, c) => {
    i[e] ||
      (i[e] = Promise.resolve().then(() => {
        let i = {};
        const s = { uri: location.origin + e.slice(1) };
        return Promise.all(
          r.map((e) => {
            switch (e) {
              case "exports":
                return i;
              case "module":
                return s;
              default:
                return a(e);
            }
          })
        ).then((a) => {
          const e = c(...a);
          return i.default || (i.default = e), i;
        });
      }));
  };
}
define("https://marcomadera.github.io/workbox-service-worker-9659c3e6.js", [
  "https://marcomadera.github.io/workbox-9659c3e6",
], function (a) {
  "use strict";
  a.skipWaiting(),
    a.clientsClaim(),
    a.precacheAndRoute(
      [
        {
          url:
            "https://marcomadera.github.io/images/android-chrome-144x144.png",
          revision: "f17359d6d380a75b35340943f7565236",
        },
        {
          url:
            "https://marcomadera.github.io/images/android-chrome-192x192.png",
          revision: "2d5f248cc235020d88f7a2790d8cd2bd",
        },
        {
          url:
            "https://marcomadera.github.io/images/android-chrome-256x256.png",
          revision: "5571ec7109bc482d1cbfd7c78413568a",
        },
        {
          url: "https://marcomadera.github.io/images/android-chrome-36x36.png",
          revision: "6bde1237f32322852984fc8ee7cbeb23",
        },
        {
          url:
            "https://marcomadera.github.io/images/android-chrome-384x384.png",
          revision: "e68dfcd5641a2e87f70b92c6047c8ff5",
        },
        {
          url: "https://marcomadera.github.io/images/android-chrome-48x48.png",
          revision: "35a1a29dd888ed46522da3eaa29c4d96",
        },
        {
          url:
            "https://marcomadera.github.io/images/android-chrome-512x512.png",
          revision: "533b88cde8898536cd19f69b18c7c6e7",
        },
        {
          url: "https://marcomadera.github.io/images/android-chrome-72x72.png",
          revision: "f3fff083cce25a65de6d072cf06bd37a",
        },
        {
          url: "https://marcomadera.github.io/images/android-chrome-96x96.png",
          revision: "59b51e5821a5771a937a1ec3a7645a01",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-1024x1024.png",
          revision: "d7f30c3201cd76029453f477a4622d3b",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-114x114.png",
          revision: "4ab740cadad3bc37784004458e3790ae",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-120x120.png",
          revision: "4a7d272cfca2f133a9d7ecbef0c87980",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-144x144.png",
          revision: "f17359d6d380a75b35340943f7565236",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-152x152.png",
          revision: "15ef1830a75d5233898918b0fb46ba9a",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-167x167.png",
          revision: "a31a696b207d3c7eb6acf9902e2559b4",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-180x180.png",
          revision: "f482ecf87585e48a630541b151029e6c",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-57x57.png",
          revision: "996e1fba5c273d7cc2dd1913be282c09",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-60x60.png",
          revision: "86c4a977badb20f550ca8dbe3d46c737",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-72x72.png",
          revision: "f3fff083cce25a65de6d072cf06bd37a",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-76x76.png",
          revision: "a656405b605c5381c7a76bfc80ece9de",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-icon-precomposed.png",
          revision: "f482ecf87585e48a630541b151029e6c",
        },
        {
          url: "https://marcomadera.github.io/images/apple-touch-icon.png",
          revision: "f482ecf87585e48a630541b151029e6c",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1125x2436.png",
          revision: "3d72513897b009f93d8e44a8fae4dfc9",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1136x640.png",
          revision: "603424c657df715ebf62d63e82d6d4b8",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1242x2208.png",
          revision: "23e871a8c9dff8b3c4bfda1e7c7d7016",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1242x2688.png",
          revision: "0b22fdfa1e1f51dae784b1e929e99183",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1334x750.png",
          revision: "a552ec53a2ead94d1f127f8077bfd4e8",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1536x2048.png",
          revision: "61a963ac0b236f371b544f543fd9ca1c",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1620x2160.png",
          revision: "546bbf31448d79e4a2c7116518af1279",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1668x2224.png",
          revision: "50ab593de62ae7cbb246bda00a81734d",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1668x2388.png",
          revision: "1c32e49b8d83442f4085022876e823ae",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-1792x828.png",
          revision: "15a7972839c184f68215373b71ab1085",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2048x1536.png",
          revision: "9623bdb6a3a07e9dce6efda59dc14d25",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2048x2732.png",
          revision: "02dc943f48dba974eb64c603566ef478",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2160x1620.png",
          revision: "746b62c45c249cfedac67864ecb4de40",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2208x1242.png",
          revision: "816de84a0d04eb759a472a9c78875583",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2224x1668.png",
          revision: "864384e137bbc43a89363f15996abca6",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2388x1668.png",
          revision: "d0b523796dadd975eb5f0a3df25329e2",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2436x1125.png",
          revision: "ea935cbc58d139dce3a93ccf1bfb7afc",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2688x1242.png",
          revision: "917b6f67c77d2a2f1c23e0e66d6b99f6",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-2732x2048.png",
          revision: "8abdfde16dde9709d23baee18e890f62",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-640x1136.png",
          revision: "6d07d83a7ecfbbfe1e36e70a1cf512cf",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-750x1334.png",
          revision: "22c8c1c4b9015cabfe17fbe5922bd6d1",
        },
        {
          url:
            "https://marcomadera.github.io/images/apple-touch-startup-image-828x1792.png",
          revision: "189b586f8947ede334470af9ac5dbaf0",
        },
        {
          url: "https://marcomadera.github.io/browserconfig.xml",
          revision: "8cb967174f610049fa3375a595bb76e9",
        },
        {
          url: "https://marcomadera.github.io/images/coast-228x228.png",
          revision: "ea943d8cd350102c8227755acaf09a88",
        },
        {
          url: "https://marcomadera.github.io/images/favicon-16x16.png",
          revision: "b7f1a71c2f6752477e8e78b54a0a82db",
        },
        {
          url: "https://marcomadera.github.io/images/favicon-32x32.png",
          revision: "18d3732f706861fabbac0b3e1afab60d",
        },
        {
          url: "https://marcomadera.github.io/images/favicon-48x48.png",
          revision: "35a1a29dd888ed46522da3eaa29c4d96",
        },
        {
          url: "https://marcomadera.github.io/images/favicon.ico",
          revision: "228ad9f53a33b06ba2676815d54e63f2",
        },
        {
          url: "https://marcomadera.github.io/images/firefox_app_128x128.png",
          revision: "8dc6b5946febec2d8550ece3684a746e",
        },
        {
          url: "https://marcomadera.github.io/images/firefox_app_512x512.png",
          revision: "3ced394fb263df3711100d489ab85697",
        },
        {
          url: "https://marcomadera.github.io/images/firefox_app_60x60.png",
          revision: "82f7307d9b653c36c6d008099655da4e",
        },
        {
          url: "https://marcomadera.github.io//manifest.json",
          revision: "54f4d66c3beb29756d9cc3fa2e2e5e0c",
        },
        {
          url: "https://marcomadera.github.io/manifest.webapp",
          revision: "f09a44f3a0deb803e978aa535689f26b",
        },
        {
          url: "https://marcomadera.github.io/images/mstile-144x144.png",
          revision: "f17359d6d380a75b35340943f7565236",
        },
        {
          url: "https://marcomadera.github.io/images/mstile-150x150.png",
          revision: "837c4b9a2d49233437e29afbb5d4f4e4",
        },
        {
          url: "https://marcomadera.github.io/images/mstile-310x150.png",
          revision: "8436c56d9af1a22fb5c73c010d974cc5",
        },
        {
          url: "https://marcomadera.github.io/images/mstile-310x310.png",
          revision: "c106a47a05ff6d0ba91fcac867ae1a91",
        },
        {
          url: "https://marcomadera.github.io/images/mstile-70x70.png",
          revision: "df2ef6ec641ce270ea9c0e87c926a43a",
        },
        {
          url: "https://marcomadera.github.io/images/yandex-browser-50x50.png",
          revision: "18be51c411daff16dc243c147de4a411",
        },
        {
          url: "https://marcomadera.github.io/yandex-browser-manifest.json",
          revision: "ac8574390d7c441f6a0ac71a8ba7b0ec",
        },
        {
          url: "https://marcomadera.github.io/.cache",
          revision: "722b5337bc462e0b7ca97f1c01912960",
        },
        {
          url:
            "https://marcomadera.github.io/assets/07effc3b0bb19aeab2e8636afb276ad0.webp",
          revision: "a437e9c4b9854dbb13c972598d25d22c",
        },
        {
          url:
            "https://marcomadera.github.io/assets/0855f70714ab0c93491d9d6ff54e3e20.png",
          revision: "05742bbdc9d33fb827e0ed8765a01710",
        },
        {
          url:
            "https://marcomadera.github.io/assets/0d267aedf5a6a7263b3fe9b0141b6146.webp",
          revision: "e32545d61c19ac390917fa902b1ed50b",
        },
        {
          url:
            "https://marcomadera.github.io/assets/0e2b28df108b572ce9f6c7c6d9ad0708.webp",
          revision: "661150b79746b9e05980ce6f01bb54f3",
        },
        {
          url:
            "https://marcomadera.github.io/assets/2128581cd141bd02fbee30658a2169fd.png",
          revision: "3e5e07a56c63abf6db35d4e35921c496",
        },
        {
          url:
            "https://marcomadera.github.io/assets/25ab2e4ceebc81a420575161de28fa1d.webp",
          revision: "392315d6083056abe4c25026f5abc79e",
        },
        {
          url:
            "https://marcomadera.github.io/assets/44b77729521913fdb9421e38e7d56720.png",
          revision: "160d536b769d66461baa80f9fdbc1f76",
        },
        {
          url:
            "https://marcomadera.github.io/assets/45b1f37875e221351960e7c53e20ab20.png",
          revision: "ccdf651e37c0b31823f3a4091a07c337",
        },
        {
          url:
            "https://marcomadera.github.io/assets/5e31925e05b16948ae5c0f46be59d81f.png",
          revision: "37d61edfb30c9def41532c50f85b15aa",
        },
        {
          url:
            "https://marcomadera.github.io/assets/61f27b013941e71598fbdc6756879c47.png",
          revision: "8d89342f26ae851010914fe974d213fb",
        },
        {
          url:
            "https://marcomadera.github.io/assets/63f6a4558680b84970fcb3ffa710e823.png",
          revision: "4ee662d8f24e0cc5f3cec109d1e64e5a",
        },
        {
          url:
            "https://marcomadera.github.io/assets/766b22b73a88bf555e8ad3836efa8ffb.webp",
          revision: "cef1e69a875fa92df148fdc146d68bea",
        },
        {
          url:
            "https://marcomadera.github.io/assets/7736b274f99f300e3b0b29bc4d3bf871.webp",
          revision: "39740107fe637164d3c0e5b0ef6c8107",
        },
        {
          url:
            "https://marcomadera.github.io/assets/79ea99c3b5003ced4b454ac19d925653.webp",
          revision: "1c7202372ae7c839fbd655f000b51aff",
        },
        {
          url:
            "https://marcomadera.github.io/assets/7b5fd10a00c089423eb2a5b01d278d07.png",
          revision: "8aaeecce462dfd591f1e063459f5c196",
        },
        {
          url:
            "https://marcomadera.github.io/assets/85bb9b9cb918b538a83f53d8ab4bd9d0.jpg",
          revision: "eb4682717df3e4c14e24f1c664b0de01",
        },
        {
          url:
            "https://marcomadera.github.io/assets/8b91a0fdbc0e569371643cc71534ba48.png",
          revision: "5b5961bff78994add00570ee2188b21c",
        },
        {
          url:
            "https://marcomadera.github.io/assets/90c57ecf3fb3dde03f8af45af9faa561.png",
          revision: "30162f84dc942f477aebdec3acdd7004",
        },
        {
          url:
            "https://marcomadera.github.io/assets/9ac07b020523cfc3cd78b2d3aeb2ee62.webp",
          revision: "0caebd41aa441e347004e9c6c884f20e",
        },
        {
          url:
            "https://marcomadera.github.io/assets/a6fc9426651ee2211142e96cd477b39f.jpg",
          revision: "294b4a23553098a32ac293cc69e09fa1",
        },
        {
          url:
            "https://marcomadera.github.io/assets/bf8eef839f744e7ac1545aacc5137e61.webp",
          revision: "eeb2782abef3fcf0547c6ff680f460f6",
        },
        {
          url:
            "https://marcomadera.github.io/assets/c18b0f1a2c93a50b834b0cd939d66f1f.webp",
          revision: "0823ef97ecaf81d182642c7bd8d85ae2",
        },
        {
          url:
            "https://marcomadera.github.io/assets/dc79a4833bb772a3f28a0a5192926e46.webp",
          revision: "ae87947d44ff8c90553ba53c9c3c69a7",
        },
        {
          url:
            "https://marcomadera.github.io/assets/ed090bec7c4251a7fd0ffa14fcb6243e.webp",
          revision: "6a4468b6a74b87369bbf8b0d4189c262",
        },
        {
          url:
            "https://marcomadera.github.io/assets/fbf447e14ceec1ecfa151b227af00ff6.png",
          revision: "a36b4a4d91d60b294744b1d5500b665d",
        },
        {
          url: "https://marcomadera.github.io/css/0.5afaa3e5acd49ea1c0d9.css",
          revision: "c085eb47b2aeff4d0dbb1637bb430de2",
        },
        {
          url: "https://marcomadera.github.io/css/10.5afaa3e5acd49ea1c0d9.css",
          revision: "2ab5da45c2658dae0266128f79c3add6",
        },
        {
          url: "https://marcomadera.github.io/css/11.5afaa3e5acd49ea1c0d9.css",
          revision: "6ae682854d19b43b589cbab85f5bffd4",
        },
        {
          url: "https://marcomadera.github.io/css/4.5afaa3e5acd49ea1c0d9.css",
          revision: "6192e27e424089b4ab50907c65f614fc",
        },
        {
          url: "https://marcomadera.github.io/css/5.5afaa3e5acd49ea1c0d9.css",
          revision: "efca344b7a8f13769eeab65de431d968",
        },
        {
          url: "https://marcomadera.github.io/css/6.5afaa3e5acd49ea1c0d9.css",
          revision: "8ca7e84cff9220eceb35f4d7a6579728",
        },
        {
          url: "https://marcomadera.github.io/css/7.5afaa3e5acd49ea1c0d9.css",
          revision: "a5dfb409fce3d1539a9040a8a6599b29",
        },
        {
          url: "https://marcomadera.github.io/css/8.5afaa3e5acd49ea1c0d9.css",
          revision: "8e4846362aa1f36a55f2bb7af2ec508a",
        },
        {
          url: "https://marcomadera.github.io/css/9.5afaa3e5acd49ea1c0d9.css",
          revision: "4864d888337666e3c5f2fec8c7bdac4e",
        },
        {
          url: "https://marcomadera.github.io/css/app.5afaa3e5acd49ea1c0d9.css",
          revision: "4ddc9581f879202fb5b42e74de63f432",
        },
        {
          url: "https://marcomadera.github.io/iconstats.json",
          revision: "65a04de51409718dcf7809eda8898759",
        },
        {
          url: "https://marcomadera.github.io/index.html",
          revision: "a4a92dbfa45275405f1a492ea8ad5ff0",
        },
        {
          url: "https://marcomadera.github.io/js/0.73f929bb2715227e19ad.js",
          revision: "53c13bcba615c4b6e4a7bcf6a63f2123",
        },
        {
          url: "https://marcomadera.github.io/js/10.a8dab8212f941e39c746.js",
          revision: "26312ccac7b87a9e85608b78fd58f4e3",
        },
        {
          url: "https://marcomadera.github.io/js/11.c9e2ef4591b97b1dc4d6.js",
          revision: "5a861935f36f2138d36732c01d1c3928",
        },
        {
          url: "https://marcomadera.github.io/js/12.ccc68a3eea41f0dd6318.js",
          revision: "7240766c14fe6a80455a0e9dcf1d09ea",
        },
        {
          url:
            "https://marcomadera.github.io/js/12.ccc68a3eea41f0dd6318.js.LICENSE.txt",
          revision: "81896c98bac7b5b16ab1d3790da5b937",
        },
        {
          url: "https://marcomadera.github.io/js/13.3148f089a0d4a9dfa93b.js",
          revision: "f5172a99afbf4cecb7d4e82c9eb352ed",
        },
        {
          url: "https://marcomadera.github.io/js/2.6e065e44777fe8308c36.js",
          revision: "e3697b9123d2a9be0763e05ef84b0eb3",
        },
        {
          url:
            "https://marcomadera.github.io/js/2.6e065e44777fe8308c36.js.LICENSE.txt",
          revision: "e4a0d87becbcc6d09668875fe197b50f",
        },
        {
          url: "https://marcomadera.github.io/js/3.7777032eaf19d048b9a1.js",
          revision: "5113fd6b7cd5340832cb310abd1e2721",
        },
        {
          url:
            "https://marcomadera.github.io/js/3.7777032eaf19d048b9a1.js.LICENSE.txt",
          revision: "3a7a1ad38638f2f20fa42f7dcf239bee",
        },
        {
          url: "https://marcomadera.github.io/js/4.5cb3d0337377eb401483.js",
          revision: "a311156e46b9686b836ddfa4bc4cf1e9",
        },
        {
          url: "https://marcomadera.github.io/js/5.d3595c237a98aa53d2ae.js",
          revision: "4d8a5306493da28c39635c0c68575a37",
        },
        {
          url: "https://marcomadera.github.io/js/6.854f8bd6542d1f2e1c89.js",
          revision: "1f5c2d0be21ed51afef92f7b52f52947",
        },
        {
          url: "https://marcomadera.github.io/js/7.7ae1ef753d969ce7d0f2.js",
          revision: "bd35bae93534532a392f59533898e30a",
        },
        {
          url: "https://marcomadera.github.io/js/8.6f0784c07383bc2dab9b.js",
          revision: "7422568e2e1ef1d08d2ce1843337136b",
        },
        {
          url: "https://marcomadera.github.io/js/9.bbef02d9bb79aa13f9ec.js",
          revision: "5cd0d3e7d0a989a01b08bacb9737f90b",
        },
        {
          url: "https://marcomadera.github.io/js/app.5afaa3e5acd49ea1c0d9.js",
          revision: "a0b1f67552220ef218e61debe25f886f",
        },
        {
          url:
            "https://marcomadera.github.io/js/app.5afaa3e5acd49ea1c0d9.js.LICENSE.txt",
          revision: "bcda1cd32249233358d1702647c75e56",
        },
        {
          url:
            "https://marcomadera.github.io/js/modules.78764a6464c04bd7ccb8.dll.js",
          revision: "be38d4b5c0216bc5f2b9871fc7b17dba",
        },
        {
          url:
            "https://marcomadera.github.io/js/modules.78764a6464c04bd7ccb8.dll.js.LICENSE.txt",
          revision: "c64c486544348f10a6d6c716950bc223",
        },
        {
          url: "https://marcomadera.github.io/robots.txt",
          revision: "54779dd164361d6fa83da8b4b9381eff",
        },
      ],
      {}
    ),
    a.registerRoute(/images/, new a.StaleWhileRevalidate(), "GET"),
    a.registerRoute(/assets/, new a.CacheFirst(), "GET"),
    a.registerRoute(
      /https:\/\/i.imgur.com\//,
      new a.StaleWhileRevalidate(),
      "GET"
    ),
    a.registerRoute(
      /https:\/\/upload.wikimedia.org\/wikipedia\/commons\//,
      new a.StaleWhileRevalidate(),
      "GET"
    ),
    a.registerRoute(/.*/, new a.NetworkFirst(), "GET");
});
