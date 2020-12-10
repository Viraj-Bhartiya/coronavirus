if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"ba46333cb22516a989323ce02f816629","url":"404.html"},{"revision":"eae555b744449150d90d1f2028d355f3","url":"6245d8ce6365aa6c88ff.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"ba46333cb22516a989323ce02f816629","url":"index.html"},{"revision":"f78dad5e681915aa38f511f82cbb71c9","url":"precache-manifest.f78dad5e681915aa38f511f82cbb71c9.js"},{"revision":"9967b54c3aa63ca7cd989449cc1f317c","url":"static/css/15.7b61ad71.chunk.css"},{"revision":"de0f32fff87cbb3bd52b8cf7e45c9aff","url":"static/js/0.7d23ca14.chunk.js"},{"revision":"2abda0cb6ea459b19ae7512c863945ec","url":"static/js/1.7aa44ae0.chunk.js"},{"revision":"80e5280ee0a699bc0cfe2ab55d2743e2","url":"static/js/10.71775bb6.chunk.js"},{"revision":"657f158d6f2ed6c7254074dabf423b74","url":"static/js/11.851230c7.chunk.js"},{"revision":"d91bf307b127fea9ca689950c5907410","url":"static/js/12.a2ffa1e1.chunk.js"},{"revision":"05946bfc17bbc2bc970d2c52c644cd54","url":"static/js/13.9d4d04d3.chunk.js"},{"revision":"7bc28373c5b489fb6f0f5b23f863aac6","url":"static/js/14.aa7cbd68.chunk.js"},{"revision":"d4bb77e3622494b4f7a299be3af8d75d","url":"static/js/15.2f4b077b.chunk.js"},{"revision":"37beaf7815bd83e6b92136bb941912ed","url":"static/js/16.8dbb441b.chunk.js"},{"revision":"f122788bade512e83c7e7d590fe34e42","url":"static/js/17.e3cf4842.chunk.js"},{"revision":"b5e8026ed12a0fa6da7ff18c6e415099","url":"static/js/18.39ae1567.chunk.js"},{"revision":"8cb3bba61cb335f0ff5f28df2fc00f6d","url":"static/js/19.0058cbac.chunk.js"},{"revision":"bc602237ed8885e49a796124a60971fe","url":"static/js/2.9f79b5ee.chunk.js"},{"revision":"3566ad8ace826cc782a302d164a5763f","url":"static/js/20.161052f9.chunk.js"},{"revision":"a1cc67ad2d9a1201ac0c57170dbff803","url":"static/js/21.57e11f47.chunk.js"},{"revision":"e5c4509397f62445671c36b5a43d82cc","url":"static/js/22.f5656f75.chunk.js"},{"revision":"ed35998c89223e05a1ba1ef321f7ed1f","url":"static/js/23.3f363c55.chunk.js"},{"revision":"7b560f4384dbb57cdf7519072abdee38","url":"static/js/24.3f583f23.chunk.js"},{"revision":"cf0972df327a89ce5adbd5f5fac32abf","url":"static/js/25.cb6c08a3.chunk.js"},{"revision":"b2146069906a6942c93f17ea45003bbf","url":"static/js/26.1d2079ad.chunk.js"},{"revision":"26d45ec2a839b1d51426dbf75a3abde9","url":"static/js/27.99f00253.chunk.js"},{"revision":"1f605d06f373a8006c8c95313084366b","url":"static/js/28.a824152d.chunk.js"},{"revision":"7ad39374898a43a8578bdd17d481ef2d","url":"static/js/29.b53e1722.chunk.js"},{"revision":"33d3e08d7e8a9aedeb0c307641ae2413","url":"static/js/3.b2a66175.chunk.js"},{"revision":"e0497a9fcab552e0a6112b94e9d363e1","url":"static/js/30.ab04a11d.chunk.js"},{"revision":"011af317f9d15aea56fcb21399a7628b","url":"static/js/31.4f4107ed.chunk.js"},{"revision":"2983309fdfaee87a3eb6387670531eda","url":"static/js/32.e5d97858.chunk.js"},{"revision":"8315174214bc13a7cf430f45a3ade809","url":"static/js/33.f27ec5f4.chunk.js"},{"revision":"2264e6384697e114d9820b415c4b6c01","url":"static/js/34.69bb057d.chunk.js"},{"revision":"9f06d7bdae69ef81db138e71345c1f8e","url":"static/js/35.390dc414.chunk.js"},{"revision":"89306bd39596e569cd91cc7d82435db0","url":"static/js/36.cafbca6f.chunk.js"},{"revision":"77fffede9a624c8b924d263ee7f0fe6e","url":"static/js/37.d7540b92.chunk.js"},{"revision":"56d4553d0a9f1adf15ea580903af56b5","url":"static/js/38.ec2328f6.chunk.js"},{"revision":"91c931337d7439089c72b63141ab25c7","url":"static/js/4.0698f941.chunk.js"},{"revision":"b038cf7bb91d58ca4eaf7912e727d098","url":"static/js/5.9b465699.chunk.js"},{"revision":"302f8b697ba658313d5a6a9e3d8b8b6a","url":"static/js/6.11118bba.chunk.js"},{"revision":"5ac7b63f11744a6a6bc99841e00175c5","url":"static/js/9.7dec4fa2.chunk.js"},{"revision":"4696638958867dfcff595ba2bba64c2d","url":"static/js/main.f58ed70c.chunk.js"},{"revision":"5f8dac3bcad3ed92af0c1aa1cef2ccef","url":"static/js/runtime-main.502b018c.js"}]);

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
