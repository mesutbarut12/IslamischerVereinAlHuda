'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b5bdfa7d805df2e364b0321962e50705",
"assets/assets/home/jemen.jpeg": "e889e8edc85cc5e3ca42cea1e8246093",
"assets/assets/home/kuranlernen.jpeg": "1691da57890b3a2ecbc93d088b2bbc4a",
"assets/assets/home/pageview1.jpeg": "7b44ff7406527229b4bc059fd69d5c6b",
"assets/assets/home/pageview2.jpeg": "4f2c73763d5d7cbfde182309c85a2c43",
"assets/assets/home/pageview3.jpeg": "7b44ff7406527229b4bc059fd69d5c6b",
"assets/assets/home/uganda.jpeg": "7a1d8f05aef04ed5eaf47f1689703ae6",
"assets/assets/home/video1.mp4": "a1f9b7121b58bc5a4abf72b5b9669f3d",
"assets/assets/kleiderverteilung/kleiderverteilung1.jpg": "089d63133c299fd641ee50a0afc13172",
"assets/assets/kleiderverteilung/kleiderverteilung10.jpg": "71fe74a3aec5fe28f0bec6d04dd5db3a",
"assets/assets/kleiderverteilung/kleiderverteilung2.jpg": "9e093676cb9d458fa3b9b7e76a89e2c4",
"assets/assets/kleiderverteilung/kleiderverteilung3.jpg": "28a0f7a0aa2979318dc7c148b2e20f32",
"assets/assets/kleiderverteilung/kleiderverteilung4.jpg": "641b82d9de15598ee7a7993e116813ad",
"assets/assets/kleiderverteilung/kleiderverteilung5.jpg": "c3b23e7a2659a91164e5da52ed84bed2",
"assets/assets/kleiderverteilung/kleiderverteilung6.jpg": "ce04810a7b1b7faf0ca766c07468ffe0",
"assets/assets/kleiderverteilung/kleiderverteilung7.jpg": "b183592aaf1475b7c50336ac2e745815",
"assets/assets/kleiderverteilung/kleiderverteilung8.jpg": "12957145fcdd4d8bdde8fc01d480f306",
"assets/assets/kleiderverteilung/kleiderverteilung9.jpg": "225480437c911e43816fa163c44b5d12",
"assets/assets/logo/LogoIslamischerVerein.jpeg": "0532010ada67e60a8e232c70d5fe1ea9",
"assets/assets/projekte/Aqiqah.png": "5de9eafadc7422e8ded82c52337614d1",
"assets/assets/projekte/bekleidung.png": "5f54c7183d3b9f4bdd8e672732d10fa5",
"assets/assets/projekte/kafarah.png": "b10173744814873c198a40752f48ff4a",
"assets/assets/projekte/kuh.png": "cec77276ce69f1d428d19be4ddc44ec4",
"assets/assets/projekte/lebensmittel.png": "49e3196e1e0f470a7f47114202e934ac",
"assets/assets/projekte/medizin.png": "b632910febf1b099e1bd7add16899faa",
"assets/assets/projekte/waisenkinder.png": "7f24d451df1090ea178b803aea9fb896",
"assets/assets/projekte/zakatalfitr.png": "eb224a082fd29d307898a51a46444ca2",
"assets/assets/projekte/zekah.png": "6474ccd81252662f95631869001cb3f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9632e2777b52d67c6e669f3742c3227f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b879cd43378bd92cd013d01a2315a4c",
"/": "2b879cd43378bd92cd013d01a2315a4c",
"main.dart.js": "12217be6327a1e09ba1cbf1dbc827848",
"manifest.json": "78501e988a0808a804bc139b0978f6c2",
"version.json": "5aa8e2521766d5fb95fdcec5a844b598"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
