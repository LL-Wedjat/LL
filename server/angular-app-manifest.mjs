
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-RN6ILYWX.js"
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
    'index.csr.html': {size: 9544, hash: '1c54295dadd69d5e58a01a890db8648f31997eca42d0c61753b84a732925af28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1246, hash: '877c5233aee3f3fcdb343ff7bfa6128eef1e3a6b7d93c0d49d62cd8b9afbdedc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 50363, hash: '779e3d12d62978f4f6ef303f5c69282bf1e3803d951b5ac6e110d48a8c2c1748', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'liquid-light/index.html': {size: 82127, hash: 'e53ef5de9ba317b6f7dfab879cbcd802f8b15b3ed23dd455dc018c41f1c8cf04', text: () => import('./assets-chunks/liquid-light_index_html.mjs').then(m => m.default)},
    'styles-P22E5V5N.css': {size: 40840, hash: 'jeXWU50n57c', text: () => import('./assets-chunks/styles-P22E5V5N_css.mjs').then(m => m.default)}
  },
};
