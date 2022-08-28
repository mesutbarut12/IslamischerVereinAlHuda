'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ce509809110c0b21992705e2d8177bdf",
".git/config": "725cc62c5f982cc25f9c3deae2b07207",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9a38551a2f9d454e0ab71dfa24bf6a85",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e37a87d7c9c860cc6a889a96778e22d",
".git/logs/refs/heads/main": "ffdaef259fc7be1e5a5c40233153ee87",
".git/logs/refs/remotes/origin/main": "400a2a0e9c5800da7a826ae6f1eefa51",
".git/objects/00/ee17fd3e30b4e4aff45187169e56b5332aa80b": "699cee9fff47cb76591e1c7db0e6be6d",
".git/objects/02/b9460b5920a035a1d60f2b7ed78279552bb22a": "2e7c8450d98038477516421f8aca266d",
".git/objects/1a/bd339ff63f409288e1b0ab19a5da2b702510c2": "826a063f161fd51ae9641caac5f43012",
".git/objects/1e/05c279808b09fe2e0c8dabd96dbb7644dbe88d": "c3fa2b19fbb4f5ec5dcb9bd54fe1c300",
".git/objects/24/938edd46b121a42200de21385c21b03a58e465": "9f6efdfe2dd56ff76fb776fd2dc4e408",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/51/6979550580a1ee1290e17d6764391d2fbdf330": "d194c9fc71640455a16871aaca244748",
".git/objects/54/d1e98ec216aa5674c1583b2d2c41fed8dd5f8e": "0cd4b51830aee58890c8bab6763b2c75",
".git/objects/5d/d536a069a5cfc0573ed4196102f6171df14382": "132cf7d853eb5b05095ce1612ac050e0",
".git/objects/62/0fedcf4e0acc0b4c1a5605cce8af6207d9ceaf": "849c3cc0ec312f25e886ab600a20a02b",
".git/objects/63/5233ba1d8528d50b3c77637f7a078447ac93fe": "17cce61170f773eea5d2b79a990f17de",
".git/objects/63/b414dbd1744cf6e15deb0d6ecf71f85e79c76d": "507933cf928afde8fd0aa0bdb309d89a",
".git/objects/63/b9fb3d349c3041064dedae23addcaac88ba3e4": "909c6abe4828fe85747d0f5f72a52a88",
".git/objects/6a/caeebbbc5163f5e050c6014d82a28c216e207d": "a9696a41a6ad69353de88036a150b385",
".git/objects/6e/86c59e15ff36fe6591e21c75d6eda73fb04cbc": "c7d1f75316ba55e46103e8923086acb7",
".git/objects/6e/fd1fe6713161b99e0b1e80d8749d757698d017": "4fab63e8f33e7102bc5ae7c144752b4d",
".git/objects/73/361a2ff88f3da06e834101a599fa00adbda987": "5124fa423c9d92ce300cd358c0e6cdc7",
".git/objects/74/6b194ee7c6f186e5e8feadccc45bef8575b952": "ae8fdda93dce8fc441d6131f96bd3a84",
".git/objects/74/dd6e8d2bd82e0af305de4633299d57cd919426": "6dc6a531f2843fda4710fc3e6cbcaa8b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ae69cd4a3761cf911145b5fdf42dce4e17d2b0": "064b168086fce79c03b32e0dc7a2cc2a",
".git/objects/86/7baca633e335a00970c5177135bffacef2eebb": "3c568fc80f22489f46ae47a9c32b4a64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/124ed87cb85d291489958bedc1997e62661a1a": "6a8ae139e0e8dc1968a05cfe51c86249",
".git/objects/96/90551ebbd92a7633b7de07f2703b6bf20b76ca": "dd779825cbce79148ef2dd7e6cbbd3d0",
".git/objects/9c/f09478934bc36440b98b529a9621076ad400f7": "a15c18ddc54b7c2451f78cfe06f15ea9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/134bbf84003a498a68736cb47dc2d42aaae38e": "0a0437627d7af8fb7ecbe1b2beb5c868",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/8d13078c31aae85e10f03a852ae6dd9d634069": "8db817852b471852e8db93a956e1fe75",
".git/objects/ae/ce6eca75debb4b90e45234513ddc1a77d99ba7": "ba2f945baccc90804a5d4c401335558a",
".git/objects/af/6c64fcdd7c1c477adb5f4bd4e696c6dc654252": "24d2add3c3cfe9af4eb123c11b99be3a",
".git/objects/af/ba7d349cc8d6a768de689ed790d74085167050": "3607021aee82bcf13f7049a9cb10a6ef",
".git/objects/b0/b1faee9e73fff07ec16b11df03ada11555ea38": "9f7dd769db8da1ab2adbcf3b762b758c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/725ed23260569156f1ba1f605d52d57392e5da": "4ac3979555c1be5160da026fe9853c10",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/1663de676f1d680e22c46284afc6f7b00802d0": "b410686eabfebb31894701006a2d44d3",
".git/objects/bf/e5941f085b8e2ac28f564a91f60a53f36f9359": "858d7cc2315d21d89cdab43dfe6d3217",
".git/objects/c4/ac06a6fd42e011b0d5231b4f05ed368af1b899": "3632a5e3bc42ddfb96693d585db44cd0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d5/11368bf48ef96b25ad5305a72142d46e872081": "99abb8a840c260b121d8108e00775276",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ccaa6879643527960ee97a972202deb8fab0e1": "2a0ad3271fe67e6448d925a43fac8d51",
".git/objects/dd/ab17c30db4dda77449de7e2fe7ef609162d265": "d95f0db7751bef180c1d55616b3da6dd",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/966c732c05e21681a65b0d75971e12c9902cfb": "9270154ec7a978e1101436f3d22c5b53",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/516156eef68641411f1dad2b5f827597b225c7": "61ac3e509f3bbbcbc805a07c343de049",
".git/objects/e8/d28aefabcfd1e4038c636b6208b6a640d16f3a": "0411c9d8ad83c24f9507ebe4092cb54e",
".git/objects/e9/3465f7ace57f38b964a376ff62a60d26118f7f": "ef8d2f81f66acc697f361a31d9f0bc76",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/62864a80301c78555b7297b9a7e3a5c0aecb2f": "6759e6d1c38364f9f77a2da35d2b6b4c",
".git/objects/ed/98ce8d797f04ee02e3271c4da41022aa233308": "edfa6d20ba8c9c7647a2b5edb6674ccd",
".git/objects/ee/e77febcfbcc5f1bbf3d39bcfce2cfba563af61": "77443ee2eaced56c0f3487e7aaf26064",
".git/objects/ef/f50042f0d4c6eb8b7cee9ebac1e626828a017d": "4e14fe455db864b04f3c267ef22d9df3",
".git/objects/f3/984c1e46ed75eea1ea8ad6a3867307755158e8": "a1fe934daca19060610ef462e7e91aed",
".git/objects/f8/cc23e86d08735bbf2ef029cf20ae2bacf92f5c": "0fb2a9bc111f04431310ea2f0b0fce8a",
".git/refs/heads/main": "25278f2ef255087215b80ff1b6cd826d",
".git/refs/remotes/origin/main": "25278f2ef255087215b80ff1b6cd826d",
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
"index.html": "2ec3cd3b645af47bdb6ce5c52b00d854",
"/": "2ec3cd3b645af47bdb6ce5c52b00d854",
"main.dart.js": "2b9cd1ca6c544bbab99b41b48bcdd10e",
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
