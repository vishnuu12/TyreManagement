// service-worker.js

const CACHE_NAME = 'tyre-maintenance-form-cache-v1';
const urlsToCache = [
  '/TyreForm.html',
  '/TyreManagement/TyreForm.html',
  // Add paths to other static assets here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
