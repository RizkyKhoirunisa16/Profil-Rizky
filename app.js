// Memanggil fungsi registerSW saat file dijalankan
registerSW();

// Fungsi untuk mendaftarkan Service Worker
async function registerSW() {
  // Mengecek apakah browser mendukung API Service Worker
  if ('serviceWorker' in navigator) {
    try {
      // Mendaftarkan service worker dengan file sw.js di root
      const registration = await navigator.serviceWorker.register("sw.js");

      // Jika berhasil, tampilkan pesan sukses di console
      console.log("Service Worker registered successfully");       
    } catch (error) {
      // Jika gagal mendaftar, tampilkan pesan error ke halaman
      showResult("Error while registering: " + error.message);
    }    
  } else {
      // Jika browser tidak mendukung service worker
      showResult("Service workers API not available");
  }
}; 

// Fungsi untuk menampilkan hasil ke elemen <output> di HTML
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}
