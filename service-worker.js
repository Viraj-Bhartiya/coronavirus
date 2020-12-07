if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"82edc2e363e6f9bba9c626e075e74aa7","url":"404.html"},{"revision":"eae555b744449150d90d1f2028d355f3","url":"6245d8ce6365aa6c88ff.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"82edc2e363e6f9bba9c626e075e74aa7","url":"index.html"},{"revision":"4e78050c6b7728ef460415af8ba8d771","url":"precache-manifest.4e78050c6b7728ef460415af8ba8d771.js"},{"revision":"08438547f36a14ec92d4c60c28576734","url":"static/css/15.7ab074fd.chunk.css"},{"revision":"d63b128bda5e5b882c9f1a84f5e04fd0","url":"static/js/0.2425026e.chunk.js"},{"revision":"b42987f6a26921c51f9b8682a9a329d6","url":"static/js/1.06bd7c5b.chunk.js"},{"revision":"a542c71d5d5f094139bfeb3a2525fba4","url":"static/js/10.a84aed9a.chunk.js"},{"revision":"733fb3f7fa37b855fe02bff87035143c","url":"static/js/11.320889aa.chunk.js"},{"revision":"d75f4a0a845f03749acfc51fef480936","url":"static/js/12.a9c51a2c.chunk.js"},{"revision":"2d31a5b22c34f1ffa257d685ccead49a","url":"static/js/13.eafecdb7.chunk.js"},{"revision":"d228815ee4600f945a5dc49427e95113","url":"static/js/14.3c147d10.chunk.js"},{"revision":"f919e6efd8792b766b869936356af288","url":"static/js/15.f8905ce4.chunk.js"},{"revision":"971e8f678679cd7a50083a572874ec49","url":"static/js/16.60f53125.chunk.js"},{"revision":"7c0ded917ff19b203a35d0f4c07d5923","url":"static/js/17.acbc74d7.chunk.js"},{"revision":"88a9d7e817a8da749012032049dbc508","url":"static/js/18.140585b6.chunk.js"},{"revision":"31abda5e990ab86e423bad2d13e0b591","url":"static/js/19.9ed3ea92.chunk.js"},{"revision":"9c4ded819d0a9173d3346d0164aef154","url":"static/js/2.2036bf0e.chunk.js"},{"revision":"b2164772c7c3c27bdbe51942d4e2bd28","url":"static/js/20.21a46a93.chunk.js"},{"revision":"606d12c09624cc309656cd2a3f4bf730","url":"static/js/21.7f6880b9.chunk.js"},{"revision":"c196d0c04dab4c70c7c20685583a2284","url":"static/js/22.0f9d227c.chunk.js"},{"revision":"22c7f97bdbb7ca90bcf5c4e899015bb9","url":"static/js/23.b76d8c3a.chunk.js"},{"revision":"1e358b489baf9206b1d47f988f0fc06f","url":"static/js/24.d4ff28e4.chunk.js"},{"revision":"1058d071e15fa7746625196d69485058","url":"static/js/25.ef187aec.chunk.js"},{"revision":"68cf2bf729e1eb8d7ccaf8a09753d887","url":"static/js/26.f17e0114.chunk.js"},{"revision":"5370a443ddbd4e42952d1cab932f22d9","url":"static/js/27.e5f425e7.chunk.js"},{"revision":"7580fd03ffc02332a03caec3f3a4060b","url":"static/js/28.80a91911.chunk.js"},{"revision":"7308ddd4b3be2dd53ea2998ec499ecef","url":"static/js/29.d58be501.chunk.js"},{"revision":"33d3e08d7e8a9aedeb0c307641ae2413","url":"static/js/3.b2a66175.chunk.js"},{"revision":"49dce63c487f767d3c1985e55a549b62","url":"static/js/30.7c8a6b78.chunk.js"},{"revision":"5fa82784d3bf5ae1e3e4a8934ef8ff03","url":"static/js/31.f16ecbb9.chunk.js"},{"revision":"f42cdf3733535986fe82700abdfa8cfc","url":"static/js/32.e04b7eee.chunk.js"},{"revision":"25b1b18190fdfb23342f5614df768fc8","url":"static/js/33.5a59c524.chunk.js"},{"revision":"542898d0a9c4b2db2ccdbf6bf3bca465","url":"static/js/34.3af53a75.chunk.js"},{"revision":"894e141ff2f11b8375aefecba19b2795","url":"static/js/35.0a801422.chunk.js"},{"revision":"a43512b518093c7fc237b44ebe848d52","url":"static/js/36.fbdd5f6f.chunk.js"},{"revision":"2ff87a68bdf2cd56047711a18f2d1226","url":"static/js/37.93e9797d.chunk.js"},{"revision":"5f46106a24cbc6ef739906772df58456","url":"static/js/38.e0e4d695.chunk.js"},{"revision":"2cb10ec5514311ae37b5dce1056d8255","url":"static/js/4.34a0f4ec.chunk.js"},{"revision":"0589dc015fcfd9d326b3a49ef19fe802","url":"static/js/5.b5c82fa2.chunk.js"},{"revision":"76f86ea60c482ea5a871056afa0202cb","url":"static/js/6.91b7c47b.chunk.js"},{"revision":"5ac7b63f11744a6a6bc99841e00175c5","url":"static/js/9.7dec4fa2.chunk.js"},{"revision":"28e532c3a96409e3c3d4c1274ab59ea0","url":"static/js/main.50300c09.chunk.js"},{"revision":"2eeaeeb5b0f011e3cc204c05e2706668","url":"static/js/runtime-main.1a3f22a6.js"}]);

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
