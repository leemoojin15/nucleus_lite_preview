'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "95054eff947277b559e9f094e6c5de27",
"index.html": "538ade6d457e1acbebb5a17ae28746e4",
"/": "538ade6d457e1acbebb5a17ae28746e4",
"main.dart.js": "d63895b9672dd0525e07d53e3cd4491f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1721c7f79bb9b75e0d02cbbc2064d2c0",
"assets/AssetManifest.json": "b37aa4bc7d5da925bd6ea7e6dc4965b7",
"assets/NOTICES": "dc3aefd4e49d7c707a15c1de1a4f7f4d",
"assets/FontManifest.json": "929ba0713b0369665189381d11aaabb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "7f3fc581cf372927a108cd81e207bff1",
"assets/fonts/MaterialIcons-Regular.otf": "8ed8362dff0f14b5427922950f9714e2",
"assets/assets/images/bg_get_started.png": "3ea82a28617f94f61b1a84109f840c8d",
"assets/assets/images/bg_vid_sm.png": "d677b5a1bfcdbb185102583169babaa4",
"assets/assets/images/t3Post.png": "5afe395c9ce11521d17bb48d8f6d7ac2",
"assets/assets/images/t3.png": "4901bf660189148c590dca1aa37d8d14",
"assets/assets/images/cart.png": "bcb31046b3ea217fdc3ca17c4d2fd482",
"assets/assets/images/thumb1.png": "43317243a033600101d9e9c5adac8141",
"assets/assets/images/post.png": "fd916dc6b85604bbc06cf9338c25fc7a",
"assets/assets/images/gradient-background.png": "c2c2ffbd942afde69e2235f23f7699b5",
"assets/assets/images/whopost.png": "ea6f0a0382e61d562ce44a2f08301f1c",
"assets/assets/images/empty.png": "8c8c3339ac9277448214bde16dc44f07",
"assets/assets/images/bgcheckout.png": "028906897a11b46c6f11590650f8dce2",
"assets/assets/images/Map.png": "8d95aff299b98259e181c5420c43f872",
"assets/assets/images/hits4.png": "6d96d8e45e68e16b643c8149568c5cab",
"assets/assets/images/matahari.png": "3d2d3799524f594336b6a4bcc7185b06",
"assets/assets/images/imgModel.png": "bd78744c8f706b87e246fb1f25ccd616",
"assets/assets/images/hits1.png": "aca7234dfef3efb9b7545b2e76abb1b2",
"assets/assets/images/whoIcon.png": "9cbb2ad8c3b6b5fb07ae850799cec1df",
"assets/assets/images/hits2.png": "6d96d8e45e68e16b643c8149568c5cab",
"assets/assets/images/hits3.png": "591292b6a5fdd2cc5d9f89e281675719",
"assets/assets/images/fsIcon.png": "526c1a7a90e9847f307d8610f1ccb47c",
"assets/assets/images/onf1.png": "df97c98942daf712a1a625fd3928a67c",
"assets/assets/images/fuji.jpg": "2b89344bdee8a0be479426d5571eb05e",
"assets/assets/images/fsPost.png": "a4421be3cf462f497a3d8b97aad59cc4",
"assets/assets/images/hotel2.jpg": "ab1729b30f3311bc6ba0819cb55b0998",
"assets/assets/images/avatar1.png": "aefa28ca01a4024405559977fa64581e",
"assets/assets/images/hotel1.jpg": "65cdedbf90c12647491f3d4e9d1f3d8f",
"assets/assets/images/pd1.png": "a482a0716549163065fd17fb94fd757b",
"assets/assets/images/detail.png": "338c2ceeaa4251771a66b5b699b9dfc6",
"assets/assets/images/bg_vid_big.png": "3de598c099cdb06cf433bb62f12facec",
"assets/assets/images/bgHighlight.png": "eda76cd212fbe286b75560d008296640",
"assets/assets/images/post3.png": "bf790c203e2a73944234f045029194ff",
"assets/assets/images/post2.png": "be58a7c59b5d79b7cb21642affcbc6fa",
"assets/assets/images/post1.png": "620f1506e9d7cd9ea2ac136f003eba50",
"assets/assets/icons/ic_share.svg": "f2ed602a83bbd8ed92c1b43fdb7d761d",
"assets/assets/icons/ic_arrow_back.svg": "ff49298a4cafe63ecfeba0d5a0b399df",
"assets/assets/icons/idn.png": "01101f485ef7f2892d8e604a8bea872d",
"assets/assets/icons/ic_video.svg": "51328cc53a97f30d3c6320d265641c15",
"assets/assets/icons/ic_lock.svg": "a32f1a85e486a6f16f359401f6c8cb10",
"assets/assets/icons/ic_musik.svg": "679e1ecb0c73b638759bb050ffea6e09",
"assets/assets/icons/ic_arrow_next.svg": "6e788afc282ffd0e28afc7a42368bf15",
"assets/assets/icons/ic_avatar.svg": "e88c7bcdeb808b14288f68d036dfcc5c",
"assets/assets/icons/ic_add.svg": "2cffece7383ae1a0fdecd377588f6d67",
"assets/assets/icons/ic_close.svg": "c08e1b5497dc6948d2a751fe073e2cfa",
"assets/assets/icons/ic_rating.svg": "7bc4d053263b9727ee02533930051c03",
"assets/assets/icons/ic_setting.svg": "2638e1e018a8dc300e39ec4ab2700786",
"assets/assets/icons/ic_notifications.svg": "625f7e5819f0921f54fa2ea0d190cc0f",
"assets/assets/icons/ic_rate.svg": "f31d2c840ec6f87a9a7b8a2792625651",
"assets/assets/icons/ic_call.svg": "c943d592b3bae558cc5283d21def0edd",
"assets/assets/icons/voice.svg": "709b7842138154a6f69e51bfe7817e9e",
"assets/assets/icons/ic_place.svg": "99082a16da492839cd916c87ffa277a6",
"assets/assets/icons/ic_check.svg": "a1fae475fa0d8845421eb74c5d9d97e3",
"assets/assets/icons/ic_arrow_down.svg": "7083d458eee41da4e4f2d388c41467b2",
"assets/assets/icons/ic_voice_1.svg": "90c582a555b33912df1ff299c41ea3e2",
"assets/assets/icons/noimg.svg": "4c657686869ae3cb4f285139bb957d01",
"assets/assets/icons/ic_help.svg": "7acfe61c680e95c3919bac6c339a7ac4",
"assets/assets/icons/ic_search.svg": "eeb81dd71be8947878d0fef3c85e8be9",
"assets/assets/icons/ic_payment.svg": "167e0ad372c6c66d6ba7290c8088365c",
"assets/assets/icons/ic_add_friend.svg": "672be437dbdf4de29eb15fe6b7cb0d02",
"assets/assets/icons/ic_arrow_up.svg": "c322b4384f3ad29227da1a4b9c3263ce",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
