require.config({
  baseUrl: '/js',
  config: {
    moment: { noGlobal: true },
  },
  paths: {
    domReady: 'vendor/domReady',
    classList: 'vendor/classList',
    storage: 'vendor/Storage',

    modernizr: 'vendor/modernizr',

    moment: 'vendor/moment',
    momentIS: 'vendor/moment-is',
    momenttz: 'vendor/moment-timezone',
    momentjs: 'init/moment',

    bind: 'vendor/event-binding',

    keys: 'kolibri/koli-keys',
    onLoad: 'kolibri/koli-onload',
    router: 'kolibri/koli-router',
    vueHelper: 'init/vue-helper',

    zepto: 'vendor/zepto-build',
    promise: 'vendor/promise',
    vue: 'vendor/vue',
    swiftclick: 'vendor/swiftclick',
  },
  shim: {
    modernizr: { exports: 'Modernizr' },
    zepto: { exports: 'Zepto' },
  }
});

require([
  'init/gengi'
]);