var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
    e.waitUntil(
	    caches.open(staticCacheName).then(function (cache) {
	        return cache.addAll([
				'./pwas.html',
				'./manifest.json',
				'./serviceworker.js',
				'./images/weight192.png',
				'./images/weight512.png',
			]);
	    })
    );
});

self.addEventListener("fetch", function (event) {
    console.log(event.request.url);

    event.respondWith(
	    caches.match(event.request).then(function (response) {
	        return response || fetch(event.request);
	    })
    );
});
