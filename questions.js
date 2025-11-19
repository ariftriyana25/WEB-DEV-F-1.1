// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "html",
    questions: [
      {
        question: "Apa tag HTML yang digunakan untuk membuat paragraf?",
        options: ["<p>", "<div>", "<span>", "<h1>"],
        correctAnswer: 0,
      },
      {
        question: "Tag apa yang digunakan untuk membuat heading utama?",
        options: ["<p>", "<h1>", "<a>", "<img>"],
        correctAnswer: 1,
      },
      {
        question: "Atribut apa yang digunakan untuk menambahkan tautan pada tag <a>?",
        options: ["src", "href", "alt", "id"],
        correctAnswer: 1,
      },
      {
        question: "Tag HTML untuk membuat daftar tidak berurutan adalah?",
        options: ["<ol>", "<ul>", "<li>", "<dl>"],
        correctAnswer: 1,
      },
      {
        question: "Apa fungsi tag <br>?",
        options: ["Membuat baris baru", "Membuat paragraf", "Membuat link", "Membuat gambar"],
        correctAnswer: 0,
      },
      {
        question: "Tag untuk menyisipkan gambar adalah?",
        options: ["<img>", "<video>", "<audio>", "<link>"],
        correctAnswer: 0,
      },
      {
        question: "Atribut alt pada tag <img> digunakan untuk?",
        options: ["Menentukan ukuran gambar", "Menambahkan teks alternatif", "Menentukan sumber gambar", "Menambahkan border"],
        correctAnswer: 1,
      },
      {
        question: "Tag HTML untuk membuat tabel adalah?",
        options: ["<table>", "<tr>", "<td>", "<th>"],
        correctAnswer: 0,
      },
      {
        question: "Elemen apa yang digunakan untuk membuat form?",
        options: ["<form>", "<input>", "<button>", "<select>"],
        correctAnswer: 0,
      },
      {
        question: "Atribut type pada tag <input> untuk teks adalah?",
        options: ["password", "text", "email", "number"],
        correctAnswer: 1,
      },
      {
        question: "Tag untuk membuat komentar di HTML adalah?",
        options: ["<!-- komentar -->", "// komentar", "/* komentar */", "# komentar"],
        correctAnswer: 0,
      },
      {
        question: "Apa yang dimaksud dengan DOCTYPE?",
        options: ["Deklarasi tipe dokumen", "Tag untuk body", "Atribut untuk head", "Elemen untuk footer"],
        correctAnswer: 0,
      },
      {
        question: "Tag <meta> biasanya ditempatkan di?",
        options: ["<body>", "<head>", "<footer>", "<nav>"],
        correctAnswer: 1,
      },
      {
        question: "Tag untuk membuat link internal adalah?",
        options: ["<a href='#id'>", "<link>", "<nav>", "<section>"],
        correctAnswer: 0,
      },
      {
        question: "Elemen HTML untuk membuat daftar definisi adalah?",
        options: ["<ul>", "<ol>", "<dl>", "<li>"],
        correctAnswer: 2,
      },
      {
        question: "Atribut class digunakan untuk?",
        options: ["Menambahkan ID unik", "Mengelompokkan elemen", "Menentukan sumber", "Menambahkan tautan"],
        correctAnswer: 1,
      },
      {
        question: "Tag <strong> digunakan untuk?",
        options: ["Membuat teks miring", " Membuat teks tebal", "Membuat teks garis bawah", "Membuat teks kecil"],
        correctAnswer: 1,
      },
      {
        question: "Apa tag untuk membuat baris baru tanpa paragraf?",
        options: ["<p>", "<br>", "<hr>", "<div>"],
        correctAnswer: 1,
      },
      {
        question: "Elemen <iframe> digunakan untuk?",
        options: ["Menyisipkan video", "Menyisipkan halaman web lain", "Membuat form", "Menambahkan audio"],
        correctAnswer: 1,
      },
      {
        question: "Tag untuk membuat heading level 2 adalah?",
        options: ["<h1>", "<h2>", "<h3>", "<h4>"],
        correctAnswer: 1,
      },
      {
        question: "Atribut title pada tag <a> digunakan untuk?",
        options: ["Menentukan URL", "Menambahkan tooltip", "Menentukan target", "Menambahkan gambar"],
        correctAnswer: 1,
      },
      {
        question: "Tag <em> digunakan untuk?",
        options: ["Membuat teks tebal", "Membuat teks miring", "Membuat teks garis bawah", "Membuat teks besar"],
        correctAnswer: 1,
      },
      {
        question: "Elemen HTML untuk membuat navigasi adalah?",
        options: ["<nav>", "<header>", "<footer>", "<aside>"],
        correctAnswer: 0,
      },
      {
        question: "Atribut required pada form input digunakan untuk?",
        options: ["Membuat input wajib diisi", "Menentukan tipe input", "Menambahkan placeholder", "Menentukan nilai default"],
        correctAnswer: 0,
      },
      {
        question: "Tag untuk membuat garis horizontal adalah?",
        options: ["<br>", "<hr>", "<line>", "<border>"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "css",
    questions: [
      {
        question: "Apa singkatan dari CSS?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara menambahkan CSS internal?",
        options: [" Menggunakan tag <style> di <head>", " Menggunakan tag <link>", "Menggunakan atribut style", "Menggunakan file .js"],
        correctAnswer: 0,
      },
      {
        question: "Selector CSS untuk semua elemen <p> adalah?",
        options: ["#p", ".p", "p", "*p"],
        correctAnswer: 2,
      },
      {
        question: "Properti CSS untuk mengubah warna teks adalah?",
        options: ["background-color", "color", "text-color", "font-color"],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara menambahkan CSS eksternal?",
        options: ["Menggunakan tag <style>", "Menggunakan tag <link> di <head>", "Menggunakan atribut style", "Menggunakan tag <script>"],
        correctAnswer: 1,
      },
      {
        question: "Properti untuk mengubah ukuran font adalah?",
        options: ["font-size", "text-size", "size", "font-weight"],
        correctAnswer: 0,
      },
      {
        question: "Selector ID menggunakan simbol?",
        options: [".", "#", "*", "@"],
        correctAnswer: 1,
      },
      {
        question: "Properti CSS untuk margin adalah?",
        options: ["padding", "border", "margin", "spacing"],
        correctAnswer: 2,
      },
      {
        question: "Bagaimana cara membuat teks rata tengah?",
        options: ["text-align: center", "align: center", "text-center: true", "center: text"],
        correctAnswer: 0,
      },
      {
        question: "Properti untuk background gambar adalah?",
        options: ["background-image", "image", "bg-image", "background"],
        correctAnswer: 0,
      },
      {
        question: "Selector class menggunakan simbol?",
        options: ["#", ".", "*", "@"],
        correctAnswer: 1,
      },
      {
        question: "Properti CSS untuk border adalah?",
        options: ["margin", "padding", "border", "outline"],
        correctAnswer: 2,
      },
      {
        question: "Bagaimana cara membuat elemen float ke kiri?",
        options: ["float: left", "position: left", "align: left", "left: float"],
        correctAnswer: 0,
      },
      {
        question: "Properti untuk tinggi elemen adalah?",
        options: ["width", "height", "size", "length"],
        correctAnswer: 1,
      },
      {
        question: "Selector universal adalah?",
        options: ["*", ".", "#", "@"],
        correctAnswer: 0,
      },
      {
        question: "Properti CSS untuk opacity adalah?",
        options: ["transparent", "opacity", "visibility", "display"],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara menambahkan CSS inline?",
        options: ["Menggunakan tag <style>", "Menggunakan tag <link>", "Menggunakan atribut style", "Menggunakan file .css"],
        correctAnswer: 2,
      },
      {
        question: "Properti untuk font family adalah?",
        options: ["font-style", "font-family", "text-font", "family"],
        correctAnswer: 1,
      },
      {
        question: "Selector untuk elemen anak langsung adalah?",
        options: [">", "+", "~", "*"],
        correctAnswer: 0,
      },
      {
        question: "Properti CSS untuk padding adalah?",
        options: ["margin", "border", "padding", "spacing"],
        correctAnswer: 2,
      },
      {
        question: "Bagaimana cara membuat teks bold?",
        options: ["font-weight: bold", "text-bold: true", "bold: font", "weight: bold"],
        correctAnswer: 0,
      },
      {
        question: "Properti untuk display block adalah?",
        options: ["display: block", "block: display", "show: block", "visible: block"],
        correctAnswer: 0,
      },
      {
        question: "Selector untuk elemen dengan atribut tertentu adalah?",
        options: ["[atribut]", ".atribut", "#atribut", "*atribut"],
        correctAnswer: 0,
      },
      {
        question: "Properti CSS untuk box-shadow adalah?",
        options: ["shadow", "box-shadow", "shadow-box", "box-effect"],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara mengatur lebar elemen?",
        options: ["height", "width", "size", "length"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "javascript",
    questions: [
      {
        question: "Bagaimana cara mendeklarasikan variabel di JavaScript?",
        options: ["var nama;", "variable nama;", "declare nama;", "let nama;"],
        correctAnswer: 3,
      },
      {
        question: "Operator untuk perbandingan sama adalah?",
        options: ["=", "==", "===", "!="],
        correctAnswer: 1,
      },
      {
        question: "Fungsi untuk menampilkan pesan alert adalah?",
        options: ["console.log()", "alert()", "prompt()", "confirm()"],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara membuat komentar satu baris?",
        options: ["/* komentar */", "// komentar", "# komentar", "<!-- komentar -->"],
        correctAnswer: 1,
      },
      {
        question: "Tipe data untuk angka adalah?",
        options: ["string", "number", "boolean", "object"],
        correctAnswer: 1,
      },
      {
        question: "Array di JavaScript dimulai dari indeks?",
        options: ["0", "1", "-1", "10"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk mendapatkan panjang string adalah?",
        options: ["length()", "size()", "len()", "count()"],
        correctAnswer: 1,
      },
      {
        question: "Loop untuk mengulang sebanyak n kali adalah?",
        options: ["for", "while", "if", "switch"],
        correctAnswer: 0,
      },
      {
        question: "Operator logika AND adalah?",
        options: ["&&", "||", "!", "=="],
        correctAnswer: 0,
      },
      {
        question: "Bagaimana cara mengakses elemen HTML dengan ID?",
        options: ["getElementById()", "getElementByClass()", "querySelector()", "getElementsByTagName()"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk mengubah string menjadi number adalah?",
        options: ["parseInt()", "toString()", "toNumber()", "convert()"],
        correctAnswer: 0,
      },
      {
        question: "Kondisi if-else digunakan untuk?",
        options: ["Loop", "Percabangan", "Fungsi", "Variabel"],
        correctAnswer: 1,
      },
      {
        question: "Event klik pada elemen HTML adalah?",
        options: ["onclick", "onhover", "onload", "onsubmit"],
        correctAnswer: 0,
      },
      {
        question: "Bagaimana cara mendefinisikan fungsi?",
        options: ["function nama() {}", "def nama() {}", "func nama() {}", "method nama() {}"],
        correctAnswer: 0,
      },
      {
        question: "Operator untuk penjumlahan adalah?",
        options: ["-", "*", "/", "+"],
        correctAnswer: 3,
      },
      {
        question: "Tipe data boolean memiliki nilai?",
        options: ["true/false", "0/1", "yes/no", "on/off"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk menampilkan di console adalah?",
        options: ["alert()", "console.log()", "print()", "log()"],
        correctAnswer: 1,
      },
      {
        question: "Array method untuk menambah elemen di akhir adalah?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
      {
        question: "Operator increment adalah?",
        options: ["++", "--", "+=", "-="],
        correctAnswer: 0,
      },
      {
        question: "Bagaimana cara membuat objek?",
        options: ["var obj = {};", "var obj = [];", 'var obj = "";', "var obj = 0;"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi setTimeout() digunakan untuk?",
        options: ["Menjalankan kode setelah delay", "Menjalankan loop", "Membuat alert", "Mengubah DOM"],
        correctAnswer: 0,
      },
      {
        question: "String method untuk mengubah ke huruf besar adalah?",
        options: ["toLowerCase()", "toUpperCase()", "upper()", "big()"],
        correctAnswer: 1,
      },
      {
        question: "Loop while berhenti ketika kondisi?",
        options: ["True", "False", "Null", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Event onload terjadi ketika?",
        options: ["Halaman dimuat", "Klik tombol", "Hover mouse", "Submit form"],
        correctAnswer: 0,
      },
      {
        question: "Operator ternary adalah?",
        options: ["? :", "&&", "||", "=="],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "php",
    questions: [
      {
        question: "Bagaimana cara mendeklarasikan variabel di PHP?",
        options: ["$nama;", "var nama;", "let nama;", "variable nama;"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk menampilkan output adalah?",
        options: ["print()", "echo()", "display()", "show()"],
        correctAnswer: 1,
      },
      {
        question: "Operator untuk concatenation string adalah??",
        options: ["+", ".", "&", ","],
        correctAnswer: 1,
      },
      {
        question: "Array di PHP dimulai dari indeks?",
        options: ["0", "1", "-1", "10"],
        correctAnswer: 0,
      },
      {
        question: "Loop for digunakan untuk?",
        options: ["Percabangan", "Pengulangan", "Fungsi", "Variabel"],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara membuat komentar?",
        options: ["// komentar", " /* komentar */", " # komentar", "Semua benar"],
        correctAnswer: 3,
      },
      {
        question: "Fungsi untuk menghitung panjang array adalah?",
        options: ["count()", "length()", "size()", "len()"],
        correctAnswer: 0,
      },
      {
        question: "Kondisi if digunakan untuk?",
        options: ["Loop", "Percabangan", "Fungsi", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Operator perbandingan sama adalah?",
        options: ["=", "==", "===", "!="],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara mengakses elemen array?",
        options: ["$array[0]", "$array{0}", "$array.0", "$array -> 0"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk mengubah string ke huruf besar adalah?",
        options: ["strtolower()", "strtoupper()", "upper()", "big()"],
        correctAnswer: 1,
      },
      {
        question: "Include file lain menggunakan?",
        options: ["include()", "require()", "load()", "import()"],
        correctAnswer: 0,
      },
      {
        question: "Tipe data untuk teks adalah?",
        options: ["int", "float", "string", "bool"],
        correctAnswer: 2,
      },
      {
        question: "Loop while berhenti ketika?",
        options: ["True", "False", "Null", "Undefined"],
        correctAnswer: 1,
      },
      {
        question: "Fungsi untuk mendapatkan input POST adalah?",
        options: ["$GET", "$_POST", "$REQUEST", "$SESSION"],
        correctAnswer: 1,
      },
      {
        question: "Operator logika AND adalah?",
        options: ["&&", "and", "&", "Semua benar"],
        correctAnswer: 3,
      },
      {
        question: "Bagaimana cara mendefinisikan fungsi?",
        options: ["function nama() {}", "def nama() {}", "func nama() {}", "method nama() {}"],
        correctAnswer: 0,
      },
      {
        question: "Array asosiatif menggunakan?",
        options: ["Indeks angka", "Key string", "Hanya nilai", "Loop"],
        correctAnswer: 1,
      },
      {
        question: "Fungsi untuk menghapus spasi di string adalah?",
        options: ["trim()", "strip()", "clean()", "remove()"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk menggabungkan array adalah?",
        options: ["merge()", "array_merge()", "combine()", "join()"],
        correctAnswer: 1,
      },
      {
        question: "Operator untuk modulus adalah?",
        options: ["/", "%", "*", "+"],
        correctAnswer: 1,
      },
      {
        question: "Bagaimana cara membuat cookie?",
        options: ["setcookie()", "createcookie()", "makecookie()", "cookie()"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk mengenkripsi password adalah?",
        options: ["md5()", "password_hash()", "encrypt()", "hash()"],
        correctAnswer: 1,
      },
      {
        question: "Loop foreach digunakan untuk?",
        options: ["Array", "String", "Number", "Boolean"],
        correctAnswer: 0,
      },
      {
        question: "Fungsi untuk menghentikan script adalah?",
        options: ["stop()", "end()", "die()", "exit()"],
        correctAnswer: 2,
      },
    ],
  },
];
