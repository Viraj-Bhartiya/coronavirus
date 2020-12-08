if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"e9aeee49e4d80f4ec093a07f60cd737b","url":"404.html"},{"revision":"eae555b744449150d90d1f2028d355f3","url":"6245d8ce6365aa6c88ff.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e9aeee49e4d80f4ec093a07f60cd737b","url":"index.html"},{"revision":"090a9d5c56db5deaedc452f14f5b0c68","url":"precache-manifest.090a9d5c56db5deaedc452f14f5b0c68.js"},{"revision":"9967b54c3aa63ca7cd989449cc1f317c","url":"static/css/15.7b61ad71.chunk.css"},{"revision":"d63b128bda5e5b882c9f1a84f5e04fd0","url":"static/js/0.2425026e.chunk.js"},{"revision":"e84191a45ba47425bf384ca8a6183c95","url":"static/js/1.d68a6ddb.chunk.js"},{"revision":"3bad3cd8cdbfc662ca1db14fd9952fb7","url":"static/js/10.ed6ec24d.chunk.js"},{"revision":"9bb070214c61b784ca6aab8654ca391e","url":"static/js/11.12dd783c.chunk.js"},{"revision":"718ef48c51b600f689d5d0ab603df37e","url":"static/js/12.84ad1828.chunk.js"},{"revision":"b9a0c58c5c1b07275d4a46d6a622227d","url":"static/js/13.478679f6.chunk.js"},{"revision":"caf1b7644adbe26b9d4b851a637f8ede","url":"static/js/14.1ff829e4.chunk.js"},{"revision":"1db901027b4971e6e84339ab037776f2","url":"static/js/15.e8589639.chunk.js"},{"revision":"b192b9a879b6e29e9f0480bc242248a1","url":"static/js/16.04f55ecf.chunk.js"},{"revision":"a93df3a8a925c0dd5e2db0d9e8ffae68","url":"static/js/17.ff92d46b.chunk.js"},{"revision":"853161d9fef346e166a7ee5884225fad","url":"static/js/18.8030b1a6.chunk.js"},{"revision":"8cb3bba61cb335f0ff5f28df2fc00f6d","url":"static/js/19.0058cbac.chunk.js"},{"revision":"2987f4784d6604bca5544ffc2f2ab6fb","url":"static/js/2.76e31064.chunk.js"},{"revision":"c0143a01b9bd3a8dd53dea47d962668e","url":"static/js/20.2231e8b4.chunk.js"},{"revision":"328ca118df427f8cfb15629292845359","url":"static/js/21.fd947ab6.chunk.js"},{"revision":"e5c4509397f62445671c36b5a43d82cc","url":"static/js/22.f5656f75.chunk.js"},{"revision":"5b76063b86870fdae1f5f2928a8fac75","url":"static/js/23.d92a8b3d.chunk.js"},{"revision":"79fe3e77e4a2cd3bb331d1e03d8f7904","url":"static/js/24.0c8249ce.chunk.js"},{"revision":"e8ea4490b7f53277bf0d64b5ad7d66dc","url":"static/js/25.233e985f.chunk.js"},{"revision":"740446654d433f5a88a2f044ad04518a","url":"static/js/26.ab00a9b0.chunk.js"},{"revision":"37672e4ab0064007b7170573c0abb7ee","url":"static/js/27.70552604.chunk.js"},{"revision":"026f7ab31dcb8de629916fddf76f1569","url":"static/js/28.be30ce51.chunk.js"},{"revision":"c86ead03c37789e3d8c67891322f4809","url":"static/js/29.2babc604.chunk.js"},{"revision":"33d3e08d7e8a9aedeb0c307641ae2413","url":"static/js/3.b2a66175.chunk.js"},{"revision":"3956d42608d79a575c9da67e488a68b0","url":"static/js/30.e190e6f0.chunk.js"},{"revision":"65307924d74cc150f81774f8e2e0c35d","url":"static/js/31.e45f7c6a.chunk.js"},{"revision":"2d08c3fdbf26bbc1e3349bc076472edc","url":"static/js/32.0ba3f17f.chunk.js"},{"revision":"a9453ed8fd9931ce2b3c1cf3fc611bda","url":"static/js/33.2102f890.chunk.js"},{"revision":"a57c7945e2707fc5311f151fd75bd06b","url":"static/js/34.8c35a2a1.chunk.js"},{"revision":"065784ebd2e89b7600eb67d769427136","url":"static/js/35.152c3a72.chunk.js"},{"revision":"89306bd39596e569cd91cc7d82435db0","url":"static/js/36.cafbca6f.chunk.js"},{"revision":"da68de040b32282eb1f71cb955d83afb","url":"static/js/37.be1a8e27.chunk.js"},{"revision":"56d4553d0a9f1adf15ea580903af56b5","url":"static/js/38.ec2328f6.chunk.js"},{"revision":"be094dfccd72914e9682b1bdf2b4a1b2","url":"static/js/4.44704342.chunk.js"},{"revision":"0589dc015fcfd9d326b3a49ef19fe802","url":"static/js/5.b5c82fa2.chunk.js"},{"revision":"e9affa659422736e3408be806934e630","url":"static/js/6.2fa6a43a.chunk.js"},{"revision":"5ac7b63f11744a6a6bc99841e00175c5","url":"static/js/9.7dec4fa2.chunk.js"},{"revision":"f343c2bfda1ad48b9ccfd52f125b78d2","url":"static/js/main.6f7618c1.chunk.js"},{"revision":"dda345b5bccde12357b88963a57db261","url":"static/js/runtime-main.4667e88b.js"}]);

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
