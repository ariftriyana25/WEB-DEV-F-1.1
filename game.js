// Konstanta untuk jumlah bushes (semak) dan balls (bola) yang akan dibuat
const NUM_BUSHES = 50
const NUM_BALLS = 5

// Mendapatkan elemen pemain dari DOM
const player = document.querySelector('.player')
// Objek untuk menyimpan posisi pemain (x dan y)
const player_pos = {
    x: parseInt(window.innerWidth / 2),
    y: parseInt(window.innerHeight / 2)
}
// Objek untuk menyimpan kecepatan pemain (x dan y)
const player_vel = {
    x: 0,
    y: 0
}
// Array untuk menyimpan objek bola
const balls = []
// Membuat objek audio untuk suara koin
const sound = new Audio('assets/coin.mp3')

// Fungsi untuk membuat bushes (semak) secara acak di layar
function createBushes(){
    // Loop untuk membuat jumlah bushes sesuai NUM_BUSHES
    for(let i = 0; i < NUM_BUSHES; i++){
        // Membuat elemen div baru
        const div = document.createElement('div')
        // Menambahkan class 'bush' ke div
        div.classList.add('bush')
        // Mengatur posisi kiri secara acak (0-100%)
        div.style.left = Math.random() * 100 + '%'
        // Mengatur posisi atas secara acak (0-100%)
        div.style.top = Math.random() * 100 + '%'
        // Menambahkan div ke body dokumen
        document.body.appendChild(div)
    }
}

// Fungsi untuk menghasilkan satu bola baru
function generateBall(){
    // Membuat elemen div baru
    const div = document.createElement('div')
     // Menambahkan class 'pokeball' ke div
    div.classList.add('pokeball')
    // Menghasilkan posisi x acak (0-100%)
    let x = Math.random() * 100 + '%'
    // Menghasilkan posisi y acak (0-100%)
    let y = Math.random() * 100 + '%'
     // Mengatur posisi kiri bola
    div.style.left = x
    // Mengatur posisi atas bola
    div.style.top = y
    // Menambahkan objek bola ke array balls dengan posisi
    balls.push({
        ball: div,
        pos: {
            x,
            y
        }
    })
    // Menambahkan div bola ke body dokumen
    document.body.appendChild(div)
}

// Fungsi untuk membuat beberapa bola sesuai NUM_BALLS
function createBalls(){
    // Loop untuk membuat jumlah balls sesuai NUM_BALLS
    for(let i = 0; i < NUM_BALLS; i++){
        // Memanggil fungsi generateBall
        generateBall()
    }
}

// Fungsi untuk mendeteksi tabrakan antara dua elemen div
function collision($div1, $div2) {
    // Mendapatkan koordinat kiri div1
    var x1 = $div1.getBoundingClientRect().left;
    // Mendapatkan koordinat atas div1
    var y1 = $div1.getBoundingClientRect().top;
    // Mendapatkan tinggi div1
    var h1 = $div1.clientHeight;
    // Mendapatkan lebar div1
    var w1 = $div1.clientWidth;
    // Menghitung batas bawah div1
    var b1 = y1 + h1;
    // Menghitung batas kanan div1
    var r1 = x1 + w1;

    // Mendapatkan koordinat kiri div2
    var x2 = $div2.getBoundingClientRect().left;
    // Mendapatkan koordinat atas div2
    var y2 = $div2.getBoundingClientRect().top;
    // Mendapatkan tinggi div2
    var h2 = $div2.clientHeight;
    // Mendapatkan lebar div2
    var w2 = $div2.clientWidth;
    // Menghitung batas bawah div2
    var b2 = y2 + h2;
    // Menghitung batas kanan div2
    var r2 = x2 + w2;

    // Mengecek apakah tidak ada tabrakan (jika salah satu kondisi terpenuhi, return false)
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    // Jika ada tabrakan, return true
    return true;
}

// Fungsi untuk memeriksa tabrakan antara pemain dan bola
function checkCollisions(){
    // Loop melalui setiap bola di array balls
    balls.forEach(ball => {
        // Mengecek apakah pemain bertabrakan dengan bola
        if(collision(ball.ball, player)){
            // Memainkan suara koin
            sound.play()
            // Menghapus bola dari DOM
            ball.ball.remove()
            // Menghasilkan bola baru
            generateBall()
        }
    })
}

// Fungsi utama untuk menjalankan game loop
function run(){
    // Memperbarui posisi pemain berdasarkan kecepatan
    player_pos.x += player_vel.x
    player_pos.y += player_vel.y

    // Mengatur posisi kiri pemain
    player.style.left = player_pos.x + 'px'
    // Mengatur posisi bawah pemain
    player.style.bottom = player_pos.y + 'px'
    
    // Memeriksa tabrakan
    checkCollisions()
    // Meminta frame animasi berikutnya untuk loop
    requestAnimationFrame(run)
}

// Fungsi inisialisasi untuk memulai game
function init(){
    // Membuat bushes
    createBushes()
    // Membuat balls
    createBalls()
    // Menjalankan game loop
    run()
}

// Memanggil fungsi init untuk memulai game
init()

// Menambahkan event listener untuk keydown (saat tombol ditekan)
window.addEventListener('keydown', function(e){
    // Jika tombol panah atas ditekan
    if(e.key == "ArrowUp"){
        // Mengatur kecepatan y ke 3 (bergerak ke atas)
        player_vel.y = 3
        // Mengubah gambar latar pemain ke depan
        player.style.backgroundImage = 'url("assets/player_front.png")'
    }
    // Jika tombol panah bawah ditekan
    if(e.key == "ArrowDown"){
        // Mengatur kecepatan y ke -3 (bergerak ke bawah)
        player_vel.y = -3
         // Mengubah gambar latar pemain ke belakang
        player.style.backgroundImage = 'url("assets/player_back.png")'
    }
    // Jika tombol panah kiri ditekan
    if(e.key == "ArrowLeft"){
        // Mengatur kecepatan x ke -3 (bergerak ke kiri)
        player_vel.x = -3
        // Mengubah gambar latar pemain ke kiri
        player.style.backgroundImage = 'url("assets/player_left.png")'
    }
    // Jika tombol panah kanan ditekan
    if(e.key == "ArrowRight"){
        // Mengatur kecepatan x ke 3 (bergerak ke kanan)
        player_vel.x = 3
        // Mengubah gambar latar pemain ke kanan
        player.style.backgroundImage = 'url("assets/player_right.png")'
    }
     // Menambahkan class 'active' ke pemain (mungkin untuk animasi)
    player.classList.add('active')
})
// Menambahkan event listener untuk keyup (saat tombol dilepas)
window.addEventListener('keyup', function(){
    // Mengatur kecepatan x dan y ke 0 (berhenti bergerak)
    player_vel.x = 0
    player_vel.y = 0
    // Menghapus class 'active' dari pemain
    player.classList.remove('active')
})