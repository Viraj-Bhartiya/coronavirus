if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"c239d2592c0f5e79a62ce6c2e6ef41e1","url":"404.html"},{"revision":"eae555b744449150d90d1f2028d355f3","url":"6245d8ce6365aa6c88ff.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"c239d2592c0f5e79a62ce6c2e6ef41e1","url":"index.html"},{"revision":"d2d354c3396d6956f0bbd2addb5dce8c","url":"precache-manifest.d2d354c3396d6956f0bbd2addb5dce8c.js"},{"revision":"9967b54c3aa63ca7cd989449cc1f317c","url":"static/css/15.7b61ad71.chunk.css"},{"revision":"de0f32fff87cbb3bd52b8cf7e45c9aff","url":"static/js/0.7d23ca14.chunk.js"},{"revision":"d825ccdf635a46ee982e84dc6ddace3c","url":"static/js/1.2d3784b7.chunk.js"},{"revision":"f7f48ee23824ca28a6c9a3036ba5bdf9","url":"static/js/10.615bfb2f.chunk.js"},{"revision":"7b7500ea500cfd262071ef9e6f2d1f9a","url":"static/js/11.607947d0.chunk.js"},{"revision":"d91bf307b127fea9ca689950c5907410","url":"static/js/12.a2ffa1e1.chunk.js"},{"revision":"a8f6d6e7e99a9b80f31b2815779c6d24","url":"static/js/13.c7cef2f3.chunk.js"},{"revision":"249e866eab931b9a38947bdb5d541a78","url":"static/js/14.71ff2906.chunk.js"},{"revision":"6fa01dd431d6919e71594a95af13f791","url":"static/js/15.275011c6.chunk.js"},{"revision":"37beaf7815bd83e6b92136bb941912ed","url":"static/js/16.8dbb441b.chunk.js"},{"revision":"2a75e58283967729f815daca74cd097b","url":"static/js/17.da59931f.chunk.js"},{"revision":"bfc48f304464b05a095bc3c7df1592bf","url":"static/js/18.0b9d55e7.chunk.js"},{"revision":"8cb3bba61cb335f0ff5f28df2fc00f6d","url":"static/js/19.0058cbac.chunk.js"},{"revision":"bc602237ed8885e49a796124a60971fe","url":"static/js/2.9f79b5ee.chunk.js"},{"revision":"c4d13c3eb2a6cfd6a622a1404f14433d","url":"static/js/20.4b3c5733.chunk.js"},{"revision":"5c6664655dccf11020455187b64e7e71","url":"static/js/21.2aa91055.chunk.js"},{"revision":"e5c4509397f62445671c36b5a43d82cc","url":"static/js/22.f5656f75.chunk.js"},{"revision":"27fe20d6b968a492b63d4996b28093ab","url":"static/js/23.58587861.chunk.js"},{"revision":"7b560f4384dbb57cdf7519072abdee38","url":"static/js/24.3f583f23.chunk.js"},{"revision":"cf0972df327a89ce5adbd5f5fac32abf","url":"static/js/25.cb6c08a3.chunk.js"},{"revision":"b2146069906a6942c93f17ea45003bbf","url":"static/js/26.1d2079ad.chunk.js"},{"revision":"6457d270c3678c1b9d2a27d977b3d43f","url":"static/js/27.74ec5905.chunk.js"},{"revision":"8859f2fef65115877c7d91e063a8aad1","url":"static/js/28.76c62f99.chunk.js"},{"revision":"e4c7e52f8e0e575a0f6b55740d9326e0","url":"static/js/29.c741aa92.chunk.js"},{"revision":"33d3e08d7e8a9aedeb0c307641ae2413","url":"static/js/3.b2a66175.chunk.js"},{"revision":"e0497a9fcab552e0a6112b94e9d363e1","url":"static/js/30.ab04a11d.chunk.js"},{"revision":"011af317f9d15aea56fcb21399a7628b","url":"static/js/31.4f4107ed.chunk.js"},{"revision":"2983309fdfaee87a3eb6387670531eda","url":"static/js/32.e5d97858.chunk.js"},{"revision":"2e9fa5dc19b552194c0a24921f4ee370","url":"static/js/33.ba0d2fb5.chunk.js"},{"revision":"2264e6384697e114d9820b415c4b6c01","url":"static/js/34.69bb057d.chunk.js"},{"revision":"9f06d7bdae69ef81db138e71345c1f8e","url":"static/js/35.390dc414.chunk.js"},{"revision":"89306bd39596e569cd91cc7d82435db0","url":"static/js/36.cafbca6f.chunk.js"},{"revision":"4c0635213e84615957a043237fd1ff40","url":"static/js/37.db9e14bb.chunk.js"},{"revision":"56d4553d0a9f1adf15ea580903af56b5","url":"static/js/38.ec2328f6.chunk.js"},{"revision":"eb9fca774662e1f2a5272cb30ad350c5","url":"static/js/4.a1ab6a0d.chunk.js"},{"revision":"b038cf7bb91d58ca4eaf7912e727d098","url":"static/js/5.9b465699.chunk.js"},{"revision":"e98259856b346805c90b5d21e84ad7a8","url":"static/js/6.18eace7f.chunk.js"},{"revision":"5ac7b63f11744a6a6bc99841e00175c5","url":"static/js/9.7dec4fa2.chunk.js"},{"revision":"4696638958867dfcff595ba2bba64c2d","url":"static/js/main.f58ed70c.chunk.js"},{"revision":"ade5a4ecc46dfa2e38ce5b711a3c4092","url":"static/js/runtime-main.f2e0d174.js"}]);

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
