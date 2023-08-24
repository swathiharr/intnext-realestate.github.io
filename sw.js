const cacheName = 'exotichomes';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener('fetch', async (event) => {
  if (event.request.method !== "GET") return;
  if ((event.request.destination === 'image' || (event.request.url.includes("/assets/") && event.request.url.includes(atob("aHR0cHM6Ly9leG90aWMtaG9tZXMuZ2l0aHViLmlvLw"))))) {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request.url).then((fetchedResponse) => {
          cache.put(event.request, fetchedResponse.clone());
          return fetchedResponse;
        });
      });
    }));
  } else {
    return;
  }
});