// GANTI alamat di bawah dengan email tim yang aktif sebelum website dipublikasikan.
const TEAM_EMAIL = "email-tim@example.com";

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
});
siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contactEmail").textContent = TEAM_EMAIL;

document.getElementById("aspirationForm").addEventListener("submit", event => {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim() || "Tidak disebutkan";
  const kategori = document.getElementById("kategori").value;
  const pesan = document.getElementById("pesan").value.trim();
  const status = document.getElementById("formStatus");

  if (!TEAM_EMAIL || TEAM_EMAIL === "email-tim@example.com") {
    status.textContent = "Email tim belum diatur. Buka script.js dan ganti TEAM_EMAIL dengan alamat email yang aktif.";
    return;
  }
  if (!pesan) {
    status.textContent = "Silakan isi aspirasi terlebih dahulu.";
    return;
  }
  const subject = encodeURIComponent("Aspirasi website KETOK SETARA - " + kategori);
  const body = encodeURIComponent("Nama: " + nama + "\nTopik: " + kategori + "\n\nAspirasi:\n" + pesan);
  status.textContent = "Aplikasi email akan dibuka. Periksa pesan, lalu tekan Kirim di aplikasi email Anda.";
  window.location.href = "mailto:" + TEAM_EMAIL + "?subject=" + subject + "&body=" + body;
});
