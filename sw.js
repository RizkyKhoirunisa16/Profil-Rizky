// Event ini dijalankan ketika service worker pertama kali di-*install*
self.addEventListener("install", async event => {
  // Membuka (atau membuat) cache baru bernama "pwa-assets"
  const cache = await caches.open("pwa-assets");

  // Menambahkan semua file yang dibutuhkan aplikasi agar bisa bekerja offline
  cache.addAll([
    "/", // root (mungkin tidak perlu jika tidak digunakan)
    "./index.html", // halaman utama
    "./skills.html", // halaman skills
    "./hobby.html", // halaman hobby
    "./style.css", // file CSS utama
    "./app.js", // file JavaScript utama
    "./rizky.jpg", // gambar profil
    "./prau.jpg", // gambar prau
    "./mongkrang1.jpg", // gambar mongkrang

    // Link CDN eksternal (harus hati-hati, bisa gagal dicache karena CORS)
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/640px-Progressive_Web_Apps_Logo.svg.png",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  ]); 
});

// Event ini dijalankan setiap kali browser melakukan permintaan (request) ke server
self.addEventListener("fetch", event => {
  event.respondWith(
    // Mengecek apakah file yang diminta sudah ada di cache
    caches.match(event.request).then(cachedResponse => {
      // Jika ada di cache, kembalikan dari cache
      // Jika tidak, ambil dari server (fetch)
      return cachedResponse || fetch(event.request);
    })
  );
});
