if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"41518cfbd8a257e28a0ae67171795a59","url":"404.html"},{"revision":"eae555b744449150d90d1f2028d355f3","url":"6245d8ce6365aa6c88ff.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"41518cfbd8a257e28a0ae67171795a59","url":"index.html"},{"revision":"f05e5cb7dcd680614be3701835a4c28d","url":"precache-manifest.f05e5cb7dcd680614be3701835a4c28d.js"},{"revision":"719b75f4301d0d4aa60c960bc1d11c6c","url":"static/css/15.e08b02dd.chunk.css"},{"revision":"d63b128bda5e5b882c9f1a84f5e04fd0","url":"static/js/0.2425026e.chunk.js"},{"revision":"555353c115d2fc149d7cbd09bde31c5a","url":"static/js/1.ec3bdd0a.chunk.js"},{"revision":"42d9fdaad7d9988288bc4d6580cb710b","url":"static/js/10.ee657867.chunk.js"},{"revision":"d104860d1f8b3e1066efbba345223b51","url":"static/js/11.c0934556.chunk.js"},{"revision":"d6d806466f49e23701dfd5c409c03932","url":"static/js/12.de46f666.chunk.js"},{"revision":"92b45535fcee4ef0d17826ebebc4d414","url":"static/js/13.8bbf46af.chunk.js"},{"revision":"a8fc7cc48c8ac129887833dfd04c1602","url":"static/js/14.ba46200c.chunk.js"},{"revision":"a5f1636f28865e169ac4051ae8917959","url":"static/js/15.f8e62e20.chunk.js"},{"revision":"36caa8c7470f88a2135992dc48812a1d","url":"static/js/16.ec12fefc.chunk.js"},{"revision":"f818232edb076618fa7b0488467d76ea","url":"static/js/17.4d1f8779.chunk.js"},{"revision":"90bacbf4f051bc39df71b079ce5aa658","url":"static/js/18.d5b0a30d.chunk.js"},{"revision":"c11fb8eaf990975664ec246f65cb37bb","url":"static/js/19.a2d369db.chunk.js"},{"revision":"20398b39650a53fac033612ec0126f54","url":"static/js/2.51d7d9ff.chunk.js"},{"revision":"b2164772c7c3c27bdbe51942d4e2bd28","url":"static/js/20.21a46a93.chunk.js"},{"revision":"60f01b02d02bac90e320cf9ec8ec2b56","url":"static/js/21.5e5f7835.chunk.js"},{"revision":"c1e4afbe16426e9c217fe705df7b6b99","url":"static/js/22.3d2a6ab4.chunk.js"},{"revision":"22c7f97bdbb7ca90bcf5c4e899015bb9","url":"static/js/23.b76d8c3a.chunk.js"},{"revision":"a829e4d5ac807b33c79b3bfd587cc8ce","url":"static/js/24.ebda8420.chunk.js"},{"revision":"7997da661048b5b73bb43822057a520e","url":"static/js/25.d1c533a8.chunk.js"},{"revision":"3984233a0ec8bef88b6ce72a1fbf5b03","url":"static/js/26.91a6b3eb.chunk.js"},{"revision":"fd6d8970ae7ef7c697b288e84f9f4497","url":"static/js/27.21721406.chunk.js"},{"revision":"b1f319986b80e7929c7a4d9700381d5f","url":"static/js/28.d496e643.chunk.js"},{"revision":"f9709a2b52efcad00c5c275356cb70c3","url":"static/js/29.09f554f5.chunk.js"},{"revision":"33d3e08d7e8a9aedeb0c307641ae2413","url":"static/js/3.b2a66175.chunk.js"},{"revision":"e8c1c4e14f4596b7bd8230b09ad249b7","url":"static/js/30.027cc92a.chunk.js"},{"revision":"dfc18aca3304f3ca549489aa4e62dd53","url":"static/js/31.172ded6e.chunk.js"},{"revision":"abd9dd7b39e4c07b8f463939a9553244","url":"static/js/32.ed93c4aa.chunk.js"},{"revision":"9661670b8df53b73a759942f77475d26","url":"static/js/33.6c2a4910.chunk.js"},{"revision":"d42ef820cd168fd5ffeb7601b8ea9026","url":"static/js/34.7c0dfb91.chunk.js"},{"revision":"9472fb1a801e8179ebb9c51f71d3ce35","url":"static/js/35.adeb3e3e.chunk.js"},{"revision":"7bc0138318e07efc74cc5b3094016d5a","url":"static/js/36.9049cdaa.chunk.js"},{"revision":"2ff87a68bdf2cd56047711a18f2d1226","url":"static/js/37.93e9797d.chunk.js"},{"revision":"5f46106a24cbc6ef739906772df58456","url":"static/js/38.e0e4d695.chunk.js"},{"revision":"1d98094d5cf2506890ae2d9e6723daa1","url":"static/js/4.04202cbb.chunk.js"},{"revision":"0589dc015fcfd9d326b3a49ef19fe802","url":"static/js/5.b5c82fa2.chunk.js"},{"revision":"7a4e80efc62d4a6361af0743d4dafb6a","url":"static/js/6.d9d3d3e4.chunk.js"},{"revision":"5ac7b63f11744a6a6bc99841e00175c5","url":"static/js/9.7dec4fa2.chunk.js"},{"revision":"479ac2aae9c931877f054d9bf880b272","url":"static/js/main.3cd71e65.chunk.js"},{"revision":"ad405c59338c71bb8c3643116f4fbeb9","url":"static/js/runtime-main.2147634c.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
