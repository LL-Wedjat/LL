
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IME4BXDA.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6CO3TBYL.js"
    ],
    "route": "/liquid-light"
  },
  {
    "renderMode": 0,
    "redirectTo": "/liquid-light",
    "route": "/ll"
  },
  {
    "renderMode": 0,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9544, hash: '836895864d0f7d7d0c816eb3e6b9358d2b18526ded6d2232ebca0f25b1a84f96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1246, hash: 'f9d0099c47f4df8304af02912ef1bce8902daf6cf25e0ed6753f987036f76170', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'liquid-light/index.html': {size: 82127, hash: '2cc392640eb7cc6fd93fff367fb7b4963c13b08f7e1f315dbe842675475aa912', text: () => import('./assets-chunks/liquid-light_index_html.mjs').then(m => m.default)},
    'index.html': {size: 50413, hash: '5ea986814e52c40a72133ff5e0bae18cb3171f1c87370b6b74fbcdd0da449a6e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QQQNFOI3.css': {size: 40870, hash: 'RBmf199WvCI', text: () => import('./assets-chunks/styles-QQQNFOI3_css.mjs').then(m => m.default)}
  },
};
