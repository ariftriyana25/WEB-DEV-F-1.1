// ================== Utilities (Fungsi Bantuan) ==================
const $  = s => document.querySelector(s); // Seleksi satu elemen DOM
const $$ = s => Array.from(document.querySelectorAll(s)); // Seleksi semua elemen (NodeList -> Array)
const out = $('#output');  // Elemen area output log
const preview = $('#preview'); // Elemen iframe untuk preview hasil
const STORAGE_KEY = 'academy-codelab-web'; // Kunci penyimpanan localStorage

// Fungsi untuk mengamankan teks HTML agar tag tidak dieksekusi
const escapeHtml = s =>
  String(s).replace(/[&<>"]/g, c => ({

    '&':'&amp;',

    '<':'&lt;',

    '>':'&gt;',

    '"':'&quot;'
}[c]
));

// Fungsi menampilkan pesan log ke layar output
function log(msg, type='info'){
  const color = type==='error' ? 'var(--err)' : type==='warn' ? 'var(--warn)' : 'var(--brand)';

  const time = new Date().toLocaleTimeString();

  const line = document.createElement('div');

  line.innerHTML = `<span style="color:${color}">[${time}]</span> ${escapeHtml(msg)}`;

  out.appendChild(line); out.scrollTop = out.scrollHeight; // Scroll otomatis ke bawah
}


// Menghapus isi area output log
function clearOut(){ out.innerHTML=''; }

$('#clearOut')?.addEventListener('click', clearOut);


// ================== ACE Editors (HTML/CSS/JS) ==================
function makeEditor(id, mode){
  // Membuat editor ACE dengan konfigurasi tertentu
  const ed = ace.edit(id, {
    theme:'ace/theme/dracula', // Tema tampilan editor
    mode, tabSize:2, useSoftTabs:true, showPrintMargin:false, wrap:true  // Mode syntax (html/css/javascript)
  });


  ed.session.setUseWrapMode(true); // Bungkus baris otomatis
  // Shortcut Ctrl+Enter untuk menjalankan kode
  ed.commands.addCommand({
    name:'run', bindKey:{win:'Ctrl-Enter',mac:'Command-Enter'},
    exec(){ runWeb(false); }
  });

  // Shortcut Ctrl+S untuk menyimpan proyek
  ed.commands.addCommand({
    name:'save', bindKey:{win:'Ctrl-S',mac:'Command-S'},
    exec(){ saveProject(); }
  });


  return ed;
}

// Membuat tiga editor ACE untuk HTML, CSS, dan JavaScript
const ed_html = makeEditor('ed_html','ace/mode/html');
const ed_css  = makeEditor('ed_css','ace/mode/css');
const ed_js   = makeEditor('ed_js','ace/mode/javascript');

// ================== Tabs (Navigasi antar editor) ==================
const TAB_ORDER = ['html','css','js']; // Urutan tab
// Objek pembungkus masing-masing editor
const wraps   = Object.fromEntries($$('#webEditors .editor-wrap').map(w => [w.dataset.pane, w]));

// Objek referensi editor
const editors = { html: ed_html, css: ed_css, js: ed_js };
// Fungsi untuk mendapatkan tab aktif
function activePane(){
  const t = $('#webTabs .tab.active');
  return t ? t.dataset.pane : 'html';
}

// Fungsi untuk menampilkan tab tertentu
function showPane(name){
  // Sembunyikan semua, tampilkan satu
  TAB_ORDER.forEach(k => { if(wraps[k]) wraps[k].hidden = (k !== name); });
  // Update status aktif pada tombol tab
  $$('#webTabs .tab').forEach(t => {
    const on = t.dataset.pane === name;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
  });

  // Fokuskan editor yang aktif
  requestAnimationFrame(() => {
    const ed = editors[name];
    if(ed && ed.resize){ ed.resize(true); ed.focus(); }
  });

}

// Klik tab → ubah tampilan editor
$('#webTabs')?.addEventListener('click', (e)=>{
  const btn = e.target.closest('.tab'); if(!btn) return;
  showPane(btn.dataset.pane);
});

// Navigasi antar tab dengan panah kiri/kanan
$('#webTabs')?.addEventListener('keydown', (e)=>{
  const idx = TAB_ORDER.indexOf(activePane());
  if(e.key==='ArrowLeft' || e.key==='ArrowRight'){
    const delta = e.key==='ArrowLeft' ? -1 : 1;
    showPane(TAB_ORDER[(idx+delta+TAB_ORDER.length)%TAB_ORDER.length]);
    e.preventDefault();
  }
});

showPane('html'); // Default tab saat awal

// ================== Preview (Menjalankan kode) ==================
function buildWebSrcdoc(withTests=false){
  const html  = ed_html.getValue();
  const css   = ed_css.getValue();
  const js    = ed_js.getValue();
  const tests = ($('#testArea')?.value || '').trim();
  // Bangun struktur HTML lengkap untuk iframe
  return `<!doctype html>
  
  <html lang="en" dir="ltr">
  


<head>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width,initial-scale=1">


<style>${css}\n</style></head>

<body>${html}

<script>

try{

${js}

${withTests && tests ? `\n/* tests */\n${tests}` : ''}

}catch(e){console.error(e)}<\/script>

</body>

</html>`;
}

// Menjalankan hasil ke iframe preview
function runWeb(withTests=false){
  preview.srcdoc = buildWebSrcdoc(withTests);
  log(withTests ? 'Run with tests.' : 'Web preview updated.');
}

// Tombol aksi preview
$('#runWeb')?.addEventListener('click', ()=>runWeb(false));


$('#runTests')?.addEventListener('click', ()=>runWeb(true));

// Tombol membuka hasil di tab baru
$('#openPreview')?.addEventListener('click', ()=>{

  const src = buildWebSrcdoc(false);

  const w = window.open('about:blank');

  w.document.open(); w.document.write(src); w.document.close();
});

// ================== Save / Load (Penyimpanan lokal) ==================
function projectJSON(){
  // Bentuk data proyek yang akan disimpan
  return {
    version: 1,
    kind: 'web-only',
    assignment: $('#assignment')?.value || '',
    test: $('#testArea')?.value || '',
    html: ed_html.getValue(),
    css:  ed_css.getValue(),
    js:   ed_js.getValue()
  };
}

// Memuat proyek dari file JSON
function loadProject(obj){

  try{

    if($('#assignment')) $('#assignment').value = obj.assignment || '';

    if($('#testArea'))   $('#testArea').value   = obj.test || '';

    ed_html.setValue(obj.html || '', -1);

    ed_css.setValue(obj.css   || '', -1);

    ed_js.setValue(obj.js     || '', -1);

    log('Web project loaded.');

  }catch(e){ log('Unable to load project: '+e, 'error'); }

}

// Mengisi editor dengan contoh default
function setDefaultContent(){
  ed_html.setValue(`<!-- Welcome card -->
<section class="card" style="max-width:520px;margin:24px auto;padding:18px;text-align:center">
  <h1>Welcome to the Academy</h1>
  <p>This example runs locally in the browser.</p>
  <button id="btn">Try me</button>
</section>`, -1);

  ed_css.setValue(`body{font-family:system-ui;background:#f7fafc;margin:0}
h1{color:#0f172a}
#btn{padding:.75rem 1rem;border:0;border-radius:10px;background:#60a5fa;color:#08111f;font-weight:700}`, -1);

  ed_js.setValue(`document.getElementById('btn').addEventListener('click',()=>alert('Well done!'));
console.log('Hello from JavaScript!');`, -1);
}

// Menyimpan proyek ke localStorage + unduh file JSON
function saveProject(){
  try{
    const data = JSON.stringify(projectJSON(), null, 2);
    localStorage.setItem(STORAGE_KEY, data);
    const blob = new Blob([data], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'academy-web.json';
    a.click();
    log('Saved locally and downloaded JSON file.');
  }catch(e){ log('Unable to save: '+e, 'error'); }
}

// Event tombol untuk menyimpan & memuat file
$('#saveBtn')?.addEventListener('click', saveProject);
$('#loadBtn')?.addEventListener('click', ()=> $('#openFile').click());
$('#openFile')?.addEventListener('change', async (e)=>{
  const f = e.target.files?.[0]; if(!f) return;
  try{ const obj = JSON.parse(await f.text()); loadProject(obj); }
  catch(err){ log('Invalid project file', 'error'); }
});

// ================== Initial load (Saat pertama dibuka) ==================
try{
  const cache = localStorage.getItem(STORAGE_KEY);
  if(cache){ loadProject(JSON.parse(cache)); }
  else { setDefaultContent(); }
}catch{ setDefaultContent(); }

log('Ready — Web-only Editor (HTML/CSS/JS) ✨');


// ================== Tambahan: Normalisasi Data ==================
function normalizeProject(raw){
  if (!raw || typeof raw !== 'object') throw new Error('Not an object');

  // Mengambil data HTML/CSS/JS dari format lama atau baru
  const html = typeof raw.html === 'string' ? raw.html : (raw.web && raw.web.html) || '';
  const css  = typeof raw.css  === 'string' ? raw.css  : (raw.web && raw.web.css ) || '';
  const js   = typeof raw.js   === 'string' ? raw.js   : (raw.web && raw.web.js  ) || '';

  return {
    version: 1,
    kind: 'web-only',
    assignment: typeof raw.assignment === 'string' ? raw.assignment : (raw.task || ''),
    test:       typeof raw.test       === 'string' ? raw.test       : (raw.tests || ''),
    html, css, js
  };
}
// Fungsi aman untuk mengisi elemen form (jika elemen tidak ada, tampilkan warning)
function safeSetValue(id, val){
  const el = document.getElementById(id);
  if (el) { el.value = val; }
  else { log(`Warning: #${id} not found; skipped setting value`, 'warn'); }
}
// Versi baru loadProject (pakai normalisasi)
function loadProject(raw){
  const proj = normalizeProject(raw);
  safeSetValue('assignment', proj.assignment);
  safeSetValue('testArea',   proj.test);
  if (typeof ed_html?.setValue === 'function') ed_html.setValue(proj.html, -1);
  if (typeof ed_css?.setValue  === 'function') ed_css.setValue(proj.css, -1);
  if (typeof ed_js?.setValue   === 'function') ed_js.setValue(proj.js, -1);
  log('Project loaded.');
}


// ================== Restore otomatis saat DOM siap ==================
window.addEventListener('DOMContentLoaded', () => {
  try{
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      const obj = JSON.parse(cached);
      loadProject(obj);
    } else {
      // seed defaults if nothing cached
      if (!document.getElementById('assignment')) return;
      // your default seeding function if you have one:
      // setDefaultContent();
    }
  }catch(e){
    log('Skipping auto-restore: ' + e, 'warn');
  }
});
