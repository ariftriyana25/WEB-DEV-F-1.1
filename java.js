// Mendapatkan elemen ikon menu dengan ID 'menu-icon' (ikon hamburger)
let menu = document.querySelector('#menu-icon');
// Mendapatkan elemen daftar navigasi dengan class 'navlsit'
let navlsit = document.querySelector('.navlsit');

// Menambahkan event listener onclick ke ikon menu
menu.onclick = () => {
    // Toggle class 'bx-x' pada ikon menu (mungkin untuk mengubah ikon menjadi X)
    menu.classList.toggle('bx-x');
    // Toggle class 'open' pada daftar navigasi (untuk menampilkan/menyembunyikan menu)
    navlsit.classList.toggle('open');
}