self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("pwa-coder").then(function (cache) {
      cache.addAll(["/", '/login/login.html','/shop/shop.html','/Fakeflix/index.html', "/css/index2.css","/css/login.css"]);
    })
  );
});

// estrategia de cache
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (res) {
      if (res) {
        return res;
      } else {
        return fetch(e.request);
      }
    })
  );
});
