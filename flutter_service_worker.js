'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aeb1c596c5804dd27e94e8e3ed6e1116",
".git/config": "eaed743e2aa35ef6142ff25c1b4db47b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ca7f390f0bee10175de934ab788f2dd9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe2d54e778135ea6cbb39096492517c9",
".git/logs/refs/heads/main": "30ed70da7117546a8e4589fc1e40bea7",
".git/logs/refs/remotes/origin/main": "a20a6f9291f897360be8c1144be54f42",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/f1f2015899193f951c995398051a9c90017246": "8468effaecbf076fbb1977b6a6b636a4",
".git/objects/13/769384ddad3dc4de1cc7dbc7db4fcea3f96424": "8f4ec396b8c607d8a4d44746f791a7dd",
".git/objects/1d/040ada75dba60d5282a7ca05aa4615ceaef8f8": "b0fd20fa90e9923b05ccc7c84aeda74f",
".git/objects/20/4541c75ff592d591410f06d716238a912b43e0": "9764c5d9f1811509e57f5a70f8ef5ed2",
".git/objects/21/db1b9d62cdc72d679a5a650799d61e39f5ce07": "d319e2f8dbd0e007c52eb05410535988",
".git/objects/23/4da157f38efe4890dc34ff68715607687131ea": "b07917036cb232a5755e6c3c32ab0ced",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/26/871e699a31fa19f4be76b07adc955186cc309c": "00505acf72f5485e239e0ef593c53df9",
".git/objects/27/9613e1f4fae41403e51c49e18de09f1f93c5bf": "0549bf56208a5fcc5c16f0741f09a4f2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/5dc1d07dcb0605fe67e7caf13bed4f740cf3f3": "fcff7269a037b86e714dac1aaf669c1b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/183b8fd6cd0fe0aa8ecfe81afef17708ecc189": "31013f3cc3ad74d32cb1bae2562cf6f5",
".git/objects/43/ca5af5b920f4d43492a6b3f13028870579a9b1": "ff2e547265327220f8b03f3447c6ff66",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/59/443e45588f8f72635087dddcb132311e9ff507": "6ccb0a4e05c5c5fda5cf6cdbc38e017e",
".git/objects/59/a702ccf0bcd227931c14757808818c713d3263": "330541ca70958912ae86a2e127e47789",
".git/objects/64/a0d60dbfb294d35e8c1a0496f0f71152807634": "23702f9dbf98462c9cbe914b92dad79c",
".git/objects/64/de2b6b51e6d0dd85902173be1768d1a525d29f": "0a61a336ff50b330a5fda5c8b40056e8",
".git/objects/66/b05a68eb860e1db3438f4a92def336932df216": "de09c736ca4515ca4e12d6a91f807661",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/2c8c117cbbbe8e7f41bc4555005fad2bc0742c": "9285cf08c8d609f312251f5dab34d084",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/2bf904fb02eadf301720d2edeca7fa49c9bfc9": "52511750f6ad6327feaf9dba80630bf4",
".git/objects/98/2d8bade7bb0d5720f891d11cc219d1925846df": "e5a7469a307662c97728762d25175ce5",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a4/bea47ea2e3e8d7cf170acce59b4ac5c2df7919": "118f1f06325ffae4c6ea8ea9f5384911",
".git/objects/a5/104d8f38695b014b3843d191cc5f4bd54caa11": "03cc4a68bcadf5db1d91571f536e8911",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/f067beff847501f5782c23acdda9e8196f2e0b": "7e0a2dcec06eb97b56dec43da06e777b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/eb2f5ff6908426913e127239fd32cd520c770d": "fe39cf5d6e37fb30e0c19bb555382fe1",
".git/objects/c4/12f645532aad6c5126cfb747dc9fb52f1f44ee": "ce69e837504682713d41faa4db9ddf08",
".git/objects/c4/ca06cdb0e76c9a84f6c1186c1b3dfe24fd1e3d": "002f0f5544ed9a0fecd440b57b272549",
".git/objects/c9/93c04074ab76aaf46cdd22d3d35a786032115b": "c1b6384c9fd5ae2492d2c303cd2971ab",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b1b79942091a04d5da6db87638be55fbdd1df2": "9c5569e143a884f12fbbbaeac95b653e",
".git/objects/da/68a5c576abcc7f6d92d19640af558fa0ca817d": "98218b001d7281ffabed573b0f01b3c8",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/839681352c15c88f48b2158af92011df5dd7fd": "28fd3f6fea178d1a8db9234d80bee35a",
".git/objects/f8/f7e879aa5b17c22982eaa8709ba34610f4de80": "5b7d86fb313580c06c7a13c541e3499f",
".git/objects/ff/5dedf1289a7da0f0a7a1456f36385b1de19488": "7941e59b78f0e3946003b2256627bdbb",
".git/refs/heads/main": "a1c03ab891c146c1b5c7b018e0bf8b06",
".git/refs/remotes/origin/main": "a1c03ab891c146c1b5c7b018e0bf8b06",
"assets/AssetManifest.bin": "370d2a7fabab133d150cf4565537976e",
"assets/AssetManifest.bin.json": "0f992739052615ba93e2e4fa17711ba8",
"assets/AssetManifest.json": "61c55d2f791ad31b157dcae3ed4bb03e",
"assets/assets/files/Catalog.json": "e5a4113f70e236a01665cbfe248fc497",
"assets/assets/files/Catalog2.json": "b8f3fcca084f919835174c52b30af0dc",
"assets/assets/images/ONE%2520PIECE.jpeg": "3b223b819f94d6671f4b07b3477913f8",
"assets/assets/images/shanks.jpeg": "dd6a83446e7c9bba09d7a3ca6d6dbec7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "90abd9f158f97b4df1adc07efcc98345",
"assets/NOTICES": "ba15948b2f8a3bc9236c4121995e2f37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "abb25da4039041c343a8906a1e8cd9b1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5651e1abe700272dd14be80d6c52883a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3a645304fb1d397a189a4fb0efe51d3",
"/": "e3a645304fb1d397a189a4fb0efe51d3",
"main.dart.js": "25975cd2d6fb24a88d46ffd8cfa74174",
"manifest.json": "fe9e50313eb04db7724886d1f19cfcbd",
"version.json": "7a5a0726d28b0cd924b328445f5e6d04"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
