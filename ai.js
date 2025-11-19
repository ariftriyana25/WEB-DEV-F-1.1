// Seleksi elemen DOM untuk tombol, konten teks, dan gambar voice
let btn = document.querySelector("#btn3");
let content = document.querySelector("#text");
let voice = document.querySelector("#voice");

// Fungsi untuk membuat browser berbicara dengan teks yang diberikan
function speak(text) {
    // Membuat objek SpeechSynthesisUtterance untuk teks yang akan diucapkan
    let text_speak = new SpeechSynthesisUtterance(text);
    // Mengatur kecepatan bicara (1 = normal)
    text_speak.rate = 1;
    // Mengatur volume (1 = maksimal)
    text_speak.volume = 1;
    // Mengatur pitch (1 = normal)
    text_speak.pitch = 1;
    // Memulai speech synthesis
    window.speechSynthesis.speak(text_speak);
}

// Fungsi untuk menyapa pengguna berdasarkan waktu hari
function wishme() {
    // Mendapatkan objek Date untuk waktu saat ini
    let days = new Date();
    // Mendapatkan jam saat ini
    let hours = days.getHours();
    // Jika jam antara 0-11 (pagi), ucapkan selamat pagi
    if (hours >= 0 && hours < 12) {
        speak("Selamat pagi Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira asisten virtual anda. saya di program atau dibuat oleh Tuan Muhammad Arif Triyana");
    // Jika jam antara 12-15 (siang), ucapkan selamat siang
    } else if (hours >= 12 && hours < 16) {
        speak("Selamat siang Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira asisten virtual anda. saya di program atau dibuat oleh Tuan Muhammad Arif Triyana");
    // Jika jam 16 ke atas (malam), ucapkan selamat malam
    } else {
        speak("Selamat malam Mas-Mas dan Mba-Mba yang cantik dan ganteng, sebelumnya saya ingin memperkenalkan diri nama saya fira asisten virtual anda. saya di program atau dibuat oleh Tuan Muhammad Arif Triyana");
    }
}

// Inisialisasi speech recognition (mendukung browser yang berbeda)
let speechRecognization = window.speechRecognition || window.webkitSpeechRecognition;
// Membuat instance recognization
let recognization = new speechRecognization();
// Event handler ketika hasil speech diterima
recognization.onresult = (event) => {
    // Mendapatkan indeks hasil terbaru
    let currentIndex = event.resultIndex;
    // Mendapatkan transkrip dari hasil
    let transcript = event.results[currentIndex][0].transcript;
    // Menampilkan transkrip di elemen konten
    content.innerText = transcript;
    // Memproses perintah dengan huruf kecil
    takeCommand(transcript.toLowerCase());
};

// Event listener untuk tombol klik
btn.addEventListener("click", () => {
    // Menyembunyikan tombol
    btn.style.display = "none";
    // Menampilkan gambar voice
    voice.style.display = "block";
    // Memulai speech recognition
    recognization.start();
});

// Fungsi untuk menebak kemungkinan masalah curhat berdasarkan kata kunci
function guessCurhatIssue(message) {
    // Jika ada kata terkait cinta atau pacar
    if (message.includes("pacar") || message.includes("mantan") || message.includes("cinta") || message.includes("putus")) {
        return "Masalah cinta ya? Jangan sedih, banyak ikan di laut. Cari yang lebih baik!";
    // Jika ada kata terkait keluarga
    } else if (message.includes("keluarga") || message.includes("orang tua") || message.includes("saudara")) {
        return "Masalah keluarga? Komunikasi adalah kunci. Coba bicara baik-baik dengan mereka.";
    // Jika ada kata terkait pekerjaan atau kuliah
    } else if (message.includes("kerja") || message.includes("kuliah") || message.includes("bos") || message.includes("tugas")) {
        return "Stres kerja atau kuliah? Istirahat sebentar dan fokus pada solusi. Kamu pasti bisa!";
    // Jika ada kata terkait teman
    } else if (message.includes("teman") || message.includes("persahabatan")) {
        return "Masalah teman? Teman sejati akan selalu ada. Evaluasi hubunganmu.";
    // Jika ada kata terkait kesehatan
    } else if (message.includes("sakit") || message.includes("sehat") || message.includes("stres")) {
        return "Kesehatanmu penting! Jaga pola makan dan istirahat yang cukup. Jika perlu, konsultasi dokter.";
    // Jika tidak ada kata kunci spesifik, respons umum
    } else {
        return "Aduh, jangan sedih dong. Ceritakan masalahmu lebih detail tentang pacar, keluarga, pekerjaan, teman, sakit, aku di sini untuk mendengarkan. Ingat, setiap masalah ada solusinya!";
    }
}

// Fungsi untuk memproses perintah yang diterima
function takeCommand(message) {
    // Menampilkan tombol kembali
    btn.style.display = "flex";
    // Menyembunyikan gambar voice
    voice.style.display = "none";
    
    // Jika pesan mengandung salam atau kata positif, sapa dan tanya bantuan
    if (message.includes("hello") || message.includes("perkenalkan diri kamu") || message.includes("hello sayang") || message.includes("hello ganteng") || message.includes("hello sobat catur insan")) {
        wishme();
        speak("Hallo sobat Universitas Catur Insan Cendikia apa yang bisa saya bantu?");
    // Jika perintah untuk buka YouTube
    } else if (message.includes("buka youtube")) {
        speak("Buka youtube sabar dulu kang...");
        window.open("https://www.youtube.com/", "_blank");
    // Jika perintah untuk buka Facebook
    } else if (message.includes("buka facebook")) {
        speak("Buka facebook sabar dulu kang...");
        window.open("https://www.facebook.com/", "_blank");
    // Jika perintah untuk buka Instagram
    } else if (message.includes("buka instagram")) {
        speak("Buka instagram sabar dulu kang...");
        window.open("https://www.instagram.com/", "_blank");
    // Jika perintah untuk buka Spotify
    } else if (message.includes("buka spotify")) {
        speak("Buka spotify sabar dulu kang...");
        window.open("https://www.spotify.com/", "_blank");
    // Jika perintah untuk buka kalkulator
    } else if (message.includes("buka kalkulator")) {
        speak("Buka kalkulator sabar dulu kang...");
        window.open("calculator://");
    // Jika perintah untuk buka WhatsApp
    } else if (message.includes("buka whatsapp")) {
        speak("Buka whatsapp emang ada yang nge chat sok sokan luh...");
        window.open("whatsapp://");
    // Jika perintah untuk waktu
    } else if (message.includes("jam")) {
        // Mendapatkan waktu saat ini dalam format jam:menit
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    // Jika perintah untuk tanggal
    } else if (message.includes("tanggal")) {
        // Mendapatkan tanggal saat ini dalam format hari bulan tahun
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric" });
        speak(date);
    // Jika perintah untuk ngoding
    } else if (message.includes("coding")) {
        speak("Buka Text Editor kami untuk coding tersedia html, css, dan javascript, selamat belajar.");
        window.location.href = "editor.html";
    // Jika perintah untuk musik galau
    } else if (message.includes("musik galau") || message.includes("lagu galau")) {
        speak("Ini lagu rekomendasi buat kamu kang bisa galau inget mantan terus hahahaha...");
        window.open("https://youtu.be/Zj4liOF8LpU?si=NpweSjCRVFbnK93T", "_blank");
    // Jika perintah untuk musik DJ
    } else if (message.includes("musik dj") || message.includes("lagu")) {
        speak("Sleraekah enak pisan cah keren banget nih joget dulu mas mbak mbak cihuy..");
        window.open("https://youtu.be/Wscix--hwkA?si=zkU6miJvNkuumR6j", "_blank");
    // Jika perintah untuk berita
    } else if (message.includes("berita")) {
        speak("Buka Google News untuk berita terkini...");
        window.open("https://news.google.com/", "_blank");
    // Jika perintah untuk belajar atau kursus
    } else if (message.includes("mau belajar") || message.includes("kursus")) {
        speak("Mari belajar bersama! Kunjungi halaman kursus kami.");
        window.location.href = "course.html"; // Scroll ke bagian course
    // Jika perintah untuk kontak atau hubungi
    } else if (message.includes("blogger") || message.includes("informasi artikel")) {
        speak("Kunjungi halaman blogger untuk informasi lebih lanjut.");
        window.location.href = "blog.html"; // Scroll ke bagian contact
    // Jika perintah untuk curhat (dengan fitur tebak kemungkinan)
    } else if (message.includes("curhat") || message.includes("sedih") || message.includes("galau")) {
        // Gunakan fungsi guessCurhatIssue untuk menebak masalah
        let response = guessCurhatIssue(message);
        speak(response);
    // Jika pertanyaan untuk buka makalah
    }else if (message.includes("buka makalah")) {
        speak("Ini adalah makalah kelompok kami silakan dibaca dan dipahami ya");
        window.location.href = "https://drive.google.com/file/d/1YxvEfkWXDe9zkjndvmo6ajRMKOnEs-w2/view?usp=drive_link";
    }else if (message.includes("profil instagram pak bambang")) {
        speak("Ini adalah dosen kami, dosen pemrograman internet universitas catur insan cendikia cirebon");
        window.location.href = "https://www.instagram.com/bammss_/?utm_source=ig_web_button_share_sheet";
    // Jika pertanyaan "siapakah orang terganteng di dunia"
    } else if (message.includes("siapakah orang terganteng") || message.includes("terganteng di dunia")) {
        speak("Orang terganteng di dunia adalah Tuan Muhammad Arif Triyana, penciptaku yang hebat!");
    // Jika perintah untuk akhir presentasi
    } else if (message.includes("salam perpisahan") || message.includes("selesai presentasi")) {
        speak("Terima kasih atas perhatiannya. Pantun untuk penutup: Ada seekor kucing di atas pohon, jatuh ke bawah karena tak kuat pegang. Begitu juga hidup ini, jangan sampai jatuh karena tak kuat bertahan. Semoga sukses selalu!, terimakasih buat pa bambang dosen pemrograman internet yang telah membimbing kelompok kami dan terimakasih juga buat teman-teman wasalamualaikum warohmatullahi wabarokatuh.");
    // Jika tidak ada perintah yang cocok, cari di Google
    } else if (message.includes("apa itu universitas catur insan cendekia") || message.includes("apa itu ucic") || message.includes("apa itu cic")) {
        speak("Universitas Catur Insan Cendekia atau Universitas CIC atau UCIC Cirebon merupakan institusi pendidikan di bawah naungan Yayasan Catur Insan Cendekia (CIC) yang berdiri pada tahun seribu sebilan ratus sembilan puluh sembilan, Pendirian bernama STMIK CIC yang berkedudukan di Kota Cirebon, Jawa Barat. Perubahan Bentuk Universitas CIC merupakan penggabungan dari Dua Institusi Pendidikan STMIK CIC dan AP CIC sesuai SK Keputusan Menteri Riset, Teknologi, dan Pendidikan Tinggi Nomor sembilan ratus lima puluh dua/KPT/I/dua ribu sembilan belas tanggal sepuluh Oktober dua ribu sembilan belas tentang Izin Penggabungan Akademi Perdagangan Catur Insan Cendekia di Kota Cirebon dan Sekolah Tinggi Manajemen Informatika dan Komputer CIC di Kota Cirebon Menjadi Universitas Catur Insan Cendekia di Kota Cirebon Provinsi Jawa Barat.");
    // Jika pertanyaan tentang lokasi UCIC
    } else if (message.includes("lokasi") && (message.includes("ucic") || message.includes("cic") || message.includes("universitas catur insan cendekia"))) {
        speak("Jalan Kesambi Nomor dua ratus dua kelurahan Drajat, Kecamatan Kesambi, Kota Cirebon, Jawa Barat.");
    // Jika pertanyaan tentang jurusan dan program studi UCIC
    } else if (message.includes("jurusan") || message.includes("program studi") && (message.includes("ucic") || message.includes("cic") || message.includes("universitas catur insan cendekia"))) {
        speak("Oke saya jelaskan dulu ya kang, jadi CIC menawarkan program Diploma tiga atau D tiga yang praktis dan berorientasi pada pasar kerja. Sementara itu, untuk membentuk para pemikir dan pemimpin masa depan, universitas ini menyelenggarakan program Sarjana. untuk Fakultas Ekonomi dan Bisnis, ada prodi Sarjana Akuntansi, Sarjana Manajemen, Sarjana Bisnis Digital, Diploma tiga atau D tiga Manajemen Bisnis. yang kedua Fakultas Teknologi Informasi, ada Sarjana Teknik Informatika, Sarjana Sistem Informasi, Sarjana Desain Komunikasi Visual (DKV), Diploma tiga atau D tiga Manajemen Informatika, Diploma tiga atau D tiga Komputerisasi Akuntansi. dan dari Fakultas Pendidikan dan Sains, ada Sarjana Pendidikan Kepelatihan Olahraga, Universitas Catur Insan Cendekia semakin tegas menempatkan posisinya sebagai perguruan tinggi yang dinamis, responsif, dan berkomitmen untuk mencetak lulusan yang unggul, tidak hanya di bidang ekonomi-bisnis dan teknologi, tetapi juga dalam kontribusinya bagi peningkatan kualitas dan kesehatan masyarakat.");
    // Jika pertanyaan tentang visi dan misi UCIC
    } else if (message.includes("visi") || message.includes("misi") && (message.includes("ucic") || message.includes("cic") || message.includes("universitas catur insan cendekia"))) {
        speak("VISI Universitas, Menjadi Universitas yang berorientasi dalam Bidang teknologi dan Kewirausahaan, melalui dedikasi terhadap Pendidikan untuk mendukung masyarakat daerah dengan menghasilkan lulusan yang mampu menanggapi perubahan jaman., Misi Universitas satu Menyelenggarakan pengajaran yang berfokus untuk menghasilkan lulusan-lulusan yang mampu untuk beradaptasi sesuai perubahan jaman, dua Mendukung dan menciptakan lingkungan yang positif untuk pembelajran, inovasi, dan penerapan dalam bidang teknologi dan kewirausahaan, tiga Menjalankan aktivitas Tridarma untuk memberikan kontribusi terhadap masyarakat daerah empat Menyelenggarakan Pendidikan tinggi yang terjangkau dalam memperluas akses Pendidikan dimasyarakat daerah.");
    // Jika pertanyaan tentang CIC GREAT
    } else if (message.includes("cic great") || message.includes("jelaskan cic great")) {
        speak("Creativity artinya Insan UCIC an berpikir dengan cara yang orisinal dan tidak biasa dalam memecahkan masalah. Mereka mencari solusi dan peluang baru yang diperlukan untuk mencapai suatu tujuan. Ini termasuk kemampuan untuk menciptakan hal-hal baru yang bermanfaat, Initiative artinya Insan UCIC an adalah individu yang memiliki kemampuan untuk berpikir, mengambil sikap, dan bertindak secara mandiri. Mereka tidak perlu menunggu perintah, tetapi secara proaktif mengambil langkah pertama untuk mencapai suatu tujuan, Critical Thinking artinya Insan UCIC an berpikir secara kritis dan rasional, yang memungkinkan mereka untuk menganalisis, mendalami informasi, dan mengevaluasi semua informasi atau pandangan baru untuk mencapai kesimpulan yang terukur, Grit artinya Insan UCIC an adalah individu yang telah menemukan tujuan hidupnya, dan dengan ketekunan serta semangat yang kuat, mereka terus berupaya untuk mencapai tujuan-tujuan tersebut. Mereka memiliki daya tahan dan gairah untuk mengejar ambisi jangka panjang, Respectful artinya Insan UCIC an sangat menghormati individu, budaya, pengetahuan, dan keanekaragaman dalam bingkai Bhinneka Tunggal Ika. Mereka menjunjung tinggi harkat dan martabat manusia, serta memperlakukan orang lain dengan sopan dan penuh penghargaan, Entrepreneurship artinya Insan UCIC an mampu mengidentifikasi peluang untuk menciptakan nilai dari proses berkreasi. Mereka menciptakan dan menangani inisiatif yang berguna untuk memenuhi kebutuhan zaman dan industri. Mereka berani mengambil risiko, memiliki jiwa kepemimpinan, dan menjalankan usaha berbasis teknologi informasi untuk mencapai tujuannya, Accountable artinya Insan UCIC an memiliki rasa tanggung jawab yang tinggi terhadap pikiran, perkataan, dan perilaku mereka. Mereka dapat diandalkan dan bersedia mempertanggungjawabkan setiap tindakan yang diambil, Teamwork artinya Insan UCIC an mampu berkolaborasi dengan orang lain dalam sebuah tim untuk mencapai tujuan bersama. Mereka saling mendukung dan membangun komunikasi yang efektif, serta berkontribusi secara positif dalam kelompok.");
    // Jika pertanyaan tentang rektor UCIC
    } else if (message.includes("rektor") && (message.includes("ucic") || message.includes("cic") || message.includes("universitas catur insan cendekia"))) {
        speak("Rektor UCIC adalah Association. Professor Doktor Chandra Lukita, Sarjana Ekonomi., Magister Manajemen., Magister Teknologi Informasi.");
    // Jika pertanyaan tentang makna dan filosofi logo UCIC
    } else if (message.includes("logo") || message.includes("makna logo") || message.includes("filosofi logo") && (message.includes("ucic") || message.includes("cic") || message.includes("universitas catur insan cendekia"))) {
        speak("pertama Segi Empat berbentuk perisai warna Biru Universitas CIC menaungi dan melindungi sivitas akademika dengan menjunjung tinggi kejujuran, kemapanan, serta persamaan sivitas akademika yang handal dan komunikatif dalam harmoni kehidupan kampus yang dapat diterima dan dipercaya oleh masyarakat, kedua Warna Emas dalam komponen logo Universitas CIC selalu optimis dan berpikir positif dalam menjalankan fungsinya sebagai institusi pendidikan tinggi untuk menghasilkan insan cendekia yang kompeten dan berbudi luhur, ketiga Pena, Buku, dan Obor Universitas CIC sebagai institusi penyelenggara pendidikan tinggi memiliki semangat tinggi dan pantang menyerah untuk selalu menghasilkan lulusan yang memiliki kompetensi dan karakter berbudi luhur sehingga mampu bekerja mandiri, professional, dan berwirausaha serta berkontribusi positif kepada masyarakat, keempat Udang, dan Mega Mendung Universitas CIC yang berkedudukan di Kota Cirebon akan selalu mengayomi dengan penuh kesabaran, persatuan, dan persaudaraan dalam memberikan layanan pendidikan tinggi bagi seluruh sivitas akademika.");
    } else {
        speak(`Ini adalah apa pun yang saya temukan di Internet mengenai ${message}`);
        window.open(`https://www.google.com/search?q=${message}`);
    }
}

// Penyempurnaan: Tambahkan event listener untuk error speech recognition
recognization.onerror = (event) => {
    speak("Maaf, saya tidak bisa mendengar Anda dengan jelas. Silakan coba lagi.");
    btn.style.display = "flex";
    voice.style.display = "none";
};

// Penyempurnaan: Tambahkan event listener untuk akhir speech
recognization.onend = () => {
    btn.style.display = "flex";
    voice.style.display = "none";
};

