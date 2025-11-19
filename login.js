// Mendapatkan elemen container yang berisi form login dan registrasi
const container = document.querySelector('.container');
// Mendapatkan tombol register dari panel toggle
const registerBtn = document.querySelector('.register-btn');
// Mendapatkan tombol login dari panel toggle
const loginBtn = document.querySelector('.login-btn');

// Menambahkan event listener untuk tombol register
// Ketika tombol register diklik, tambahkan class 'active' ke container
// Ini akan mengubah tampilan untuk menampilkan form registrasi
registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
});
// Menambahkan event listener untuk tombol login
// Ketika tombol login diklik, hapus class 'active' dari container
// Ini akan mengubah tampilan kembali ke form login
loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});



// 🔐 Utility Encryption (Base64)
function encrypt(text) {
  return btoa(unescape(encodeURIComponent(text)));
}
function decrypt(text) {
  return decodeURIComponent(escape(atob(text)));
}

// 📦 Simpan Data Registrasi
function registerUser(username, email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.username === username)) {
    alert('❌ Username sudah terdaftar!');
    return false;
  }
  users.push({ username, email, password: encrypt(password) });
  localStorage.setItem('users', JSON.stringify(users));
  alert('✅ Registrasi berhasil! Silakan login.');
  return true;
}

// 🔑 Login User
function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username);
  if (!user) {
    alert('❌ Username tidak ditemukan!');
    return false;
  }
  if (decrypt(user.password) === password) {
    localStorage.setItem('activeUser', encrypt(username));
    alert('✅ Login berhasil! Selamat datang, ' + username);
    window.location.href = 'index.html';
    return true;
  } else {
    alert('❌ Password salah!');
    return false;
  }
}

// 🚪 Logout User
function logoutUser() {
  localStorage.removeItem('activeUser');
  alert('Anda telah logout.');
  window.location.href = 'login.html';
}

// 👤 Cek Session Aktif
function getActiveUser() {
  const encodedUser = localStorage.getItem('activeUser');
  return encodedUser ? decrypt(encodedUser) : null;
}

// =============================
// Hubungkan dengan Form HTML
// =============================

// Tangani form registrasi
document.querySelector('.form-box.register form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.querySelector('input[placeholder="Username"]').value;
  const email = e.target.querySelector('input[placeholder="Email"]').value;
  const password = e.target.querySelector('input[placeholder="Password"]').value;
  registerUser(username, email, password);
});

// Tangani form login
document.querySelector('.form-box.login form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.querySelector('input[placeholder="Username"]').value;
  const password = e.target.querySelector('input[placeholder="Password"]').value;
  loginUser(username, password);
});
