if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"a8c48588674c2119b898fce79220878e","url":"404.html"},{"revision":"eae555b744449150d90d1f2028d355f3","url":"6245d8ce6365aa6c88ff.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"a8c48588674c2119b898fce79220878e","url":"index.html"},{"revision":"a2ea443653685dc8cea4d400c3373aaf","url":"precache-manifest.a2ea443653685dc8cea4d400c3373aaf.js"},{"revision":"08438547f36a14ec92d4c60c28576734","url":"static/css/15.7ab074fd.chunk.css"},{"revision":"de8951ef1bdac7058e0053a0b2d818b5","url":"static/js/0.c0b2ded7.chunk.js"},{"revision":"140dba523defe332d7af3b6b813deb70","url":"static/js/1.bf93f537.chunk.js"},{"revision":"12ba8ea780e876a444c570e853fcef64","url":"static/js/10.923e165d.chunk.js"},{"revision":"556ff58c4fff822e0e349c797aafe9df","url":"static/js/11.6d084066.chunk.js"},{"revision":"f1770eebfd65b55ba0ca70ea3e9f08e0","url":"static/js/12.08fed372.chunk.js"},{"revision":"86d1079d6879bfb1c06b1156be263823","url":"static/js/13.1ed11536.chunk.js"},{"revision":"f46c43f61837575a6ae2c27ab27558e2","url":"static/js/14.9f865df4.chunk.js"},{"revision":"6644a23ce56b722aa4dd860c10ee3973","url":"static/js/15.f2127b70.chunk.js"},{"revision":"ce4c3301c6a0e58b3a7b7bbca634ec99","url":"static/js/16.18522aac.chunk.js"},{"revision":"fe4d3fcf6f9d5986ae5429d1d2e0db87","url":"static/js/17.ce71aca0.chunk.js"},{"revision":"8c894e83ce68982079f3c60be1543ee8","url":"static/js/18.9dd20222.chunk.js"},{"revision":"4e24a68104d387f81f883dda3c423da0","url":"static/js/19.bb86e593.chunk.js"},{"revision":"2282a4f97a27fe236b6b90cd36a92c43","url":"static/js/2.c203e1fa.chunk.js"},{"revision":"7c4f7bffb8329132cf7f90042ec7187e","url":"static/js/20.36d2ad7b.chunk.js"},{"revision":"dba9e4da39d9a33a112cf3966fa0be6e","url":"static/js/21.bc3bd119.chunk.js"},{"revision":"14a946c35cf3d6bef095476feb6b7c38","url":"static/js/22.d010626f.chunk.js"},{"revision":"63c63769805b219fb9623be3ec1fe7cb","url":"static/js/23.4d25ddff.chunk.js"},{"revision":"12f744af50adf6128bf160206562437f","url":"static/js/24.268dea20.chunk.js"},{"revision":"945159e9fc9f345a19971a13974e9130","url":"static/js/25.59477568.chunk.js"},{"revision":"9a15c626d61fe30d812294c5aee13e24","url":"static/js/26.7edfbe0e.chunk.js"},{"revision":"8a1fdef8af093f2f8ea9d8680770624a","url":"static/js/27.d0f2ada7.chunk.js"},{"revision":"6dab657b7105f25dd0d460c4c4c74438","url":"static/js/28.672618cb.chunk.js"},{"revision":"3667c459d0aec36e117a323111691701","url":"static/js/29.9530d3a0.chunk.js"},{"revision":"b63e31e3e2f345c69cd7b633ee60f948","url":"static/js/3.5e766c5d.chunk.js"},{"revision":"aeff5af906439ca3e8246095a64aae05","url":"static/js/30.7566cc8b.chunk.js"},{"revision":"aac1ff8932ad5c174fd92bc1cea87401","url":"static/js/31.9019c744.chunk.js"},{"revision":"d5607e0d6bee752eb5bcec92f7dacd8d","url":"static/js/32.0404b0cc.chunk.js"},{"revision":"f79511ca818b0f401e232dd5a8555f25","url":"static/js/33.994b1f79.chunk.js"},{"revision":"e7edc090d502808818622467569cbbc0","url":"static/js/34.d612252c.chunk.js"},{"revision":"491926c34063f0bc3ffa8cea3900365f","url":"static/js/35.4d2baec1.chunk.js"},{"revision":"7cd73501ec6a6c8da4b3757a8d5a1f74","url":"static/js/36.63b9cd2e.chunk.js"},{"revision":"cad0643fd19377394c6396625a6a20a1","url":"static/js/37.1620c0f2.chunk.js"},{"revision":"ec09553fc7319c7e9a3fd9ebaa6b9530","url":"static/js/38.4142c973.chunk.js"},{"revision":"8cfeb57c316781539316f3688ef5d51b","url":"static/js/4.74a9d33f.chunk.js"},{"revision":"1ac246b5303feb3f9404ba35501889d7","url":"static/js/5.357bbf0a.chunk.js"},{"revision":"6c0c538d28041dfdd42f057e552bbf44","url":"static/js/6.4315da67.chunk.js"},{"revision":"726308fe7288fa0ef387298627a508f7","url":"static/js/9.c9373f2f.chunk.js"},{"revision":"ba3346533e96a8949969631978b9dc05","url":"static/js/main.53d160de.chunk.js"},{"revision":"f493012ffaf531074ae37cd21f40f4cd","url":"static/js/runtime-main.c4efe22a.js"}]);

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
