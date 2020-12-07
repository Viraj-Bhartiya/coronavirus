if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"38516c33a806a391d308b5b5c717a3c9","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"38516c33a806a391d308b5b5c717a3c9","url":"index.html"},{"revision":"a386a14ea1d3114236310802e0dde104","url":"precache-manifest.a386a14ea1d3114236310802e0dde104.js"},{"revision":"745d3c8224dafd98c6bc937d98a43cec","url":"static/css/15.3949935b.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"6a1600a059e93a621d02cfc39cd3ee42","url":"static/js/1.cd02988e.chunk.js"},{"revision":"b85f33aa2ab347579f62878cfcdc01af","url":"static/js/10.68e91946.chunk.js"},{"revision":"8ffe057f1384afed77a78426111a2762","url":"static/js/11.b87ce3c6.chunk.js"},{"revision":"c2879bdf743f60cc52d032575f0c2340","url":"static/js/12.ddf812ea.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"4935d1cecc57ddbf7c8cbb2b0880f25c","url":"static/js/14.c3c983c4.chunk.js"},{"revision":"078b54bf1e7b1b2f7ee5e15eae1ac2e6","url":"static/js/15.c8ee822a.chunk.js"},{"revision":"f71898ed048138a22e36b73736d520dc","url":"static/js/16.434e6625.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"5352ace020759083ba656501feb645f4","url":"static/js/18.e0734d47.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"b81632c1efb770c045c846b188cc206d","url":"static/js/20.f68b2373.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"34d8f584c9746005026d82c567597019","url":"static/js/23.2c5b222d.chunk.js"},{"revision":"0493ff7f06adce6cba9dc6af082cdf28","url":"static/js/24.846a61e5.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"6dcc754e3598cb2a72d2f196ec8caf4c","url":"static/js/26.88b92dea.chunk.js"},{"revision":"6c49e62b96a7a13861694673e672eb3f","url":"static/js/27.68b31906.chunk.js"},{"revision":"0daf7c451faf7ec9b7f2519773ba7172","url":"static/js/28.a828cc5f.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"3b10c6fab1ec3c397014e96f5c1657a7","url":"static/js/30.9c0bbac3.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"fe6789daac8ab6d60d0dc3974320e1c6","url":"static/js/33.7b901652.chunk.js"},{"revision":"fda4c36cfea02bffba874162360692da","url":"static/js/34.a8de9614.chunk.js"},{"revision":"0783a94900795901c96d77be182d624a","url":"static/js/35.919f3819.chunk.js"},{"revision":"94ff0d44631b7d1527f880d0d1821fbf","url":"static/js/36.aef881b6.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"6c791e320029985814de807e91407a90","url":"static/js/4.213768e8.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"9bacc536d315f68715a6a921228f1aca","url":"static/js/6.0fafb781.chunk.js"},{"revision":"0831aa5053c6190e63a1d9a5272acdeb","url":"static/js/9.6dadc0c1.chunk.js"},{"revision":"84ed0d8f66fbd2b76565b9943ad38613","url":"static/js/main.12293ac9.chunk.js"},{"revision":"0c7c4997cda358a27ce31655f794453a","url":"static/js/runtime-main.52122578.js"}]);

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
