const dict = {
  id: {
    nav_profile:"Profil", nav_skills:"Keahlian", nav_projects:"Proyek", nav_contact:"Kontak",
    role:"Mobile Developer · Full Stack Developer · System Analyst",
    bio:"Sarjana Teknik Informatika (IPK 3.65) yang membangun aplikasi mobile dengan Flutter dan React Native, serta web full-stack dengan Laravel dan React JS. Pengalaman dari startup teknologi hingga perusahaan ritel besar.",
    fact_gpa:"IPK S.Kom", fact_roles:"Peran profesional",
    cta_projects:"Lihat proyek", cta_contact:"Hubungi saya",
    skills_title:"Keahlian", sk_mobile:"Mobile", sk_db:"Database", sk_sa:"Analisis Sistem",
    cert_label:"Sertifikasi:", certs:"Junior Web Programmer, CCNA, BNSP Teknologi Informasi, TOEFL ITP 446",
    projects_title:"Proyek", projects_hint:"Klik proyek untuk melihat detailnya.",
    p1:"Sistem manajemen parkir berbasis mobile. Alur sistem dirancang di Figma, backend Laravel sebagai REST API server, lengkap dengan SRS dan Data Flow Diagram.",
    p2:"Aplikasi manajemen aset yang membaca tag RFID UHF. Dibangun dengan Flutter dan terintegrasi dengan Java Native untuk akses perangkat keras.",
    p3_title:"Aplikasi Pembayaran SPP",
    p3:"Sistem pembayaran SPP untuk sekolah, dari analisis kebutuhan, ERD, BPMN, dan UI/UX sampai deployment, dengan pengujian UAT bersama staf sekolah.",
    p4:"Website landing page dengan desain dari Figma dan Adobe XD, data dari API RESTful/GraphQL, plus pemetaan proses bisnis promosi, menu digital, dan pesan online.",
    p5:"Membantu membangun aplikasi e-commerce dengan pembayaran Stripe, pelacakan kurir, dan navigasi yang intuitif.",
    p6_tag:"Infrastruktur",
    p6:"Rancangan solusi Disaster Recovery dengan backup data real-time untuk menjaga kelangsungan bisnis dan mencegah kehilangan data.",
    contact_title:"Kontak", contact_hint:"Terbuka untuk peluang kerja dan kolaborasi.",
    c_email:"Email", c_phone:"Telepon", c_loc:"Lokasi", c_loc_val:"Bogor, Jawa Barat",
    copy_email:"Salin email", copied:"Email tersalin"
  },
  en: {
    nav_profile:"Profile", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
    role:"Mobile Developer · Full Stack Developer · System Analyst",
    bio:"Informatics Engineering graduate (GPA 3.65) building mobile apps with Flutter and React Native, and full-stack web with Laravel and React JS. Experience from tech startups to large retail companies.",
    fact_gpa:"Bachelor's GPA", fact_roles:"Professional roles",
    cta_projects:"View projects", cta_contact:"Contact me",
    skills_title:"Skills", sk_mobile:"Mobile", sk_db:"Database", sk_sa:"System Analysis",
    cert_label:"Certifications:", certs:"Junior Web Programmer, CCNA, BNSP Information Technology, TOEFL ITP 446",
    projects_title:"Projects", projects_hint:"Click a project to see the details.",
    p1:"A mobile parking management system. The flow was designed in Figma, with a Laravel REST API backend, backed by an SRS and Data Flow Diagrams.",
    p2:"An asset management app that reads UHF RFID tags. Built with Flutter and integrated with Java Native for hardware access.",
    p3_title:"Tuition Payment App",
    p3:"A school tuition payment system, from requirement analysis, ERD, BPMN, and UI/UX to deployment, with UAT alongside school staff.",
    p4:"A landing page website with designs from Figma and Adobe XD, data from RESTful/GraphQL APIs, plus business process mapping for promotions, digital menu, and online ordering.",
    p5:"Helped build an e-commerce app with Stripe payments, courier tracking, and intuitive navigation.",
    p6_tag:"Infrastructure",
    p6:"A Disaster Recovery solution design with real-time data backup to keep the business running and prevent data loss.",
    contact_title:"Contact", contact_hint:"Open to job opportunities and collaboration.",
    c_email:"Email", c_phone:"Phone", c_loc:"Location", c_loc_val:"Bogor, West Java",
    copy_email:"Copy email", copied:"Email copied"
  }
};

const buttons = document.querySelectorAll('.lang button');
const copyBtn = document.getElementById('copyEmail');
let current = 'id';

function setLang(lang){
  current = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = dict[lang][el.dataset.i18n];
    if (t) el.textContent = t;
  });
  buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  try { localStorage.setItem('lang', lang); } catch(e){}
}

buttons.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

// Open one project at a time
const items = document.querySelectorAll('.projects details');
items.forEach(d => d.addEventListener('toggle', () => {
  if (d.open) items.forEach(o => { if (o !== d) o.open = false; });
}));

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('idham16ip@gmail.com');
    copyBtn.textContent = dict[current].copied;
    setTimeout(() => copyBtn.textContent = dict[current].copy_email, 2000);
  } catch(e){ location.href = 'mailto:idham16ip@gmail.com'; }
});

document.getElementById('year').textContent = new Date().getFullYear();

let saved = null;
try { saved = localStorage.getItem('lang'); } catch(e){}
setLang(saved || (navigator.language.startsWith('id') ? 'id' : 'en'));
