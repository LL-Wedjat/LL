
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
    'index.html': {size: 50595, hash: '91da3f6828f78905e91d13f0b922c19ae6eeb8b5aa1c702ad9be49d9d5fc746d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'liquid-light/index.html': {size: 82218, hash: '87dca0fdbaffece294bf0106d5bbba446964adb1c4233644ef1c3a863973cdc4', text: () => import('./assets-chunks/liquid-light_index_html.mjs').then(m => m.default)},
    'styles-QQQNFOI3.css': {size: 40870, hash: 'RBmf199WvCI', text: () => import('./assets-chunks/styles-QQQNFOI3_css.mjs').then(m => m.default)}
  },
};
