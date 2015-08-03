// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
importScripts('../jspm/npm/serviceworker-cache-polyfill@3.0.0/index.js');


var version = 'v1';
var staticCacheName = 'rethink' + version;

self.addEventListener('message', function(event){
  console.log("message to service worker recived:", event);

  var msg = event.data;

  if (event.source) {
      console.log("event.source present");
      event.source.postMessage(msg);
  }
  else {
      console.log("No event.source");
      if (event.data.port) {
          event.data.port.postMessage(msg);
      }
  }

  if (self.clients) {
      console.log("Attempting postMessage via clients API");
      clients.matchAll().then(function (clients) {
          for (i = 0; i < clients.length; i++ )
              clients[i].postMessage(msg);
      });
  }
});

self.addEventListener('push', function(event){
  console.log('push: ', event);
});

self.addEventListener('install', function(event) {

  self.skipWaiting();

  console.log("Installing…");

  var urlsToCache = [
    '../index.html',
    '../css/screen.css'
  ];

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {

      cache.addAll(urlsToCache.map(function(urlToCache) {
        return new Request(urlToCache, {mode: 'no-cors'});
      })).then(function(url) {
        console.log('All urls have been fetched and cached.', url);
        return caches.delete(cache);
      });

      console.log("installed: ", cache);

    }).catch(function(error) {
      console.error('Cache failed:', error);
    })
  );
});

self.addEventListener('activate', function(event) {

  console.log("Activating…");

  self.skipWaiting();

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.log("Activate CACHE:", cacheNames);
      return Promise.all(
        cacheNames.map(function(cacheName) {
          console.log('Deleted out of date cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );

});

self.addEventListener('fetch', function(event) {
  console.log('Fetch event:', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found in cache:', response);
        return response;
      }

      console.log('No response found in cache. Fetch from network...');

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response) {
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          var responseToCache = response.clone();

          caches.open(staticCacheName).then(function(cache) {
              var cacheRequest = event.request.clone();
              console.log("Add to cache:" + cacheRequest);
              cache.put(cacheRequest, responseToCache);
            });

          return response;
        });

    }
  ));
});
