if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"628effc910320ee5f1f58b373d8530c6","url":"404.html"},{"revision":"eae555b744449150d90d1f2028d355f3","url":"6245d8ce6365aa6c88ff.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"628effc910320ee5f1f58b373d8530c6","url":"index.html"},{"revision":"735017215744ab3ef5390ebcb6b90248","url":"precache-manifest.735017215744ab3ef5390ebcb6b90248.js"},{"revision":"39546d5972781de5ac88900a100e51c7","url":"static/css/15.ac904f3c.chunk.css"},{"revision":"d63b128bda5e5b882c9f1a84f5e04fd0","url":"static/js/0.2425026e.chunk.js"},{"revision":"f3cd1ee528b7f68c883b47c20af1715b","url":"static/js/1.9f563072.chunk.js"},{"revision":"d3931b11cb8187b491042dafb5d210d6","url":"static/js/10.31fd6e11.chunk.js"},{"revision":"766b800f1ee1c37379d2764aab85fadd","url":"static/js/11.6e3df4d7.chunk.js"},{"revision":"ef080c4c7b76d27bea0327abacf74ffb","url":"static/js/12.9d935124.chunk.js"},{"revision":"48c3b64429e257c78efe5bcbe435b3c2","url":"static/js/13.be29ed40.chunk.js"},{"revision":"307a9cc53a86af1c1ed05a2a76568097","url":"static/js/14.b8b09e25.chunk.js"},{"revision":"9dc15b8e9a884c0432ecd3fcbd3b46bf","url":"static/js/15.c5a090d7.chunk.js"},{"revision":"36807f3dbdf9d4a5dec8ed0290744da4","url":"static/js/16.5d2b26ee.chunk.js"},{"revision":"f580e42e9bd29dd8f1ecd6049558aecd","url":"static/js/17.46a7d691.chunk.js"},{"revision":"6e04b429a842a10fdbe5689c01d0567c","url":"static/js/18.1d544cef.chunk.js"},{"revision":"bc19fcb903aaa77a891197b258ac7f4a","url":"static/js/19.7ac198da.chunk.js"},{"revision":"91fd5997bc1052928fc6d0a1d29fba52","url":"static/js/2.a7dcaf38.chunk.js"},{"revision":"2c08e1b43425ae52b3484579917e6b29","url":"static/js/20.641ad58d.chunk.js"},{"revision":"ad045f83abd89a0ee6ebb37e626d414e","url":"static/js/21.e91c993a.chunk.js"},{"revision":"cfb251765e18e28d05fe028b5f3f05bb","url":"static/js/22.a82deb09.chunk.js"},{"revision":"741be6b9b83e83767739d4507c77b023","url":"static/js/23.6a8c49f7.chunk.js"},{"revision":"bb5e2fb751370bf2f649629423bdbb34","url":"static/js/24.fc9599b1.chunk.js"},{"revision":"e3946e2a6ba82458b0b971432307623b","url":"static/js/25.4be72c54.chunk.js"},{"revision":"74a60c55ee9aad063abb4b052f382021","url":"static/js/26.eb207801.chunk.js"},{"revision":"baf0d57e3f5a82168b31e593390439c6","url":"static/js/27.8dc8ee88.chunk.js"},{"revision":"519269bc6d2f0a8289f418cf7228c517","url":"static/js/28.16dcd7b5.chunk.js"},{"revision":"273b739b99e578976905cd705ca3f21c","url":"static/js/29.41d09f00.chunk.js"},{"revision":"209c2dce808302eee2e4eb4d92a58636","url":"static/js/3.c7335a2c.chunk.js"},{"revision":"4d5732a4e20ab83078a56fc992dd841d","url":"static/js/30.c2e97c31.chunk.js"},{"revision":"fbe888214a7bfec71b219f7f17e81cf9","url":"static/js/31.382d7e77.chunk.js"},{"revision":"352f2ad0a0bdf7b3cd2d82f7e6031474","url":"static/js/32.3996cc3f.chunk.js"},{"revision":"2fa45da1ecbc0b0f35e718b513ecba44","url":"static/js/33.2d966adc.chunk.js"},{"revision":"3b0d0e7383a80122292209ea088ce77f","url":"static/js/34.5183eb03.chunk.js"},{"revision":"975267c5bad5f7b63b9c159935b8ff91","url":"static/js/35.1a980227.chunk.js"},{"revision":"78b7ec62498b37e038c89f0b93e5c4e5","url":"static/js/36.1b244ee4.chunk.js"},{"revision":"2ff87a68bdf2cd56047711a18f2d1226","url":"static/js/37.93e9797d.chunk.js"},{"revision":"5f46106a24cbc6ef739906772df58456","url":"static/js/38.e0e4d695.chunk.js"},{"revision":"a79db4196e37eca4dec11cc9c9398efa","url":"static/js/4.cdf6b5d6.chunk.js"},{"revision":"e74e09620957a40592fa6074af3692cb","url":"static/js/5.3bcc98d0.chunk.js"},{"revision":"037f0a7c3a6f964ec8b7ba18c8178451","url":"static/js/6.20a80f74.chunk.js"},{"revision":"5ac7b63f11744a6a6bc99841e00175c5","url":"static/js/9.7dec4fa2.chunk.js"},{"revision":"160e42b4b57191f5b543ccab85814401","url":"static/js/main.c683df3f.chunk.js"},{"revision":"36014f63f26c4d050f81e743461126ca","url":"static/js/runtime-main.7b009d1f.js"}]);

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
