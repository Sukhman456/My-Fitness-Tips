const CACHE_NAME = "gym-site-v1";

const urlsToCache = [
  // HTML files
  "/",
  "/index.html",
  "/about.html",
  "/contact.html",
  "/equipment.html",
  "/workouts.html",

  // CSS files (minified)
  "minifiedcss/common.min.css",
  "minifiedcss/about.min.css",
  "minifiedcss/contact.min.css",
  "minifiedcss/equipment.min.css",
  "minifiedcss/workouts.min.css"
];

// INSTALL → cache all files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// ACTIVATE → clean old cache
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// FETCH → serve from cache first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});