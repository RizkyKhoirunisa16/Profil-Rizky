
self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // it stores all resources on first SW install
  cache.addAll(["/",
    "/index.html",
    "/skills.html",
    "/hobby.html",
    "/style.css",
    "/app.js",
    "/rizky.jpg",
    "/prau.jpg",
    "/mongkrang1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/640px-Progressive_Web_Apps_Logo.svg.png",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
  ]); 
});
 
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request).then(cachedResponse => {
	   // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});