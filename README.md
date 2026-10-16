# Website KETOK — SETARA untuk Langko

Website statis HTML, CSS, dan JavaScript yang dapat di-host gratis di GitHub Pages.

## Isi folder
- `index.html` — isi halaman website
- `style.css` — tampilan responsif untuk komputer dan HP
- `script.js` — menu HP, tahun footer, dan formulir aspirasi via email
- `assets/` — simpan foto calon dan foto kegiatan di sini

## Sebelum dipublikasikan
1. Ganti `email-tim@example.com` pada `script.js` dengan email tim yang aktif.
2. Perbarui biografi Huzairi/KETOK, visi-misi, berita, tanggal, kontak, dan akun media sosial berdasarkan informasi yang benar.
3. Ganti placeholder foto dengan foto yang diizinkan untuk dipublikasikan. Cara mudah: simpan foto sebagai `assets/ketok.jpg`, lalu ubah blok placeholder pada `index.html` menjadi:
   `<img src="assets/ketok.jpg" alt="Huzairi, dikenal sebagai KETOK" class="candidate-photo">`
   Untuk tampilan foto, tambahkan CSS:
   `.candidate-photo{width:100%;height:380px;object-fit:cover;display:block}`
   Pada tampilan HP, boleh gunakan `height:320px`.
4. Ganti kartu contoh berita dan galeri dengan konten nyata. Karena ini website statis, berita tidak dapat ditambah melalui panel admin; untuk mengubah berita, edit `index.html` lalu commit perubahan ke GitHub.
5. Jangan memasukkan nomor pribadi atau data sensitif tanpa izin. Form aspirasi menggunakan aplikasi email pengunjung; data tidak tersimpan dalam database.

## Cara menerbitkan di GitHub Pages
1. Masuk ke https://github.com dan login atau buat akun.
2. Klik **New repository**.
3. Isi nama repository, misalnya `ketok-setara-langko`.
4. Pilih **Public**, lalu klik **Create repository**.
5. Unggah file `index.html`, `style.css`, `script.js`, dan folder `assets` ke repository. Bisa memakai **Add file → Upload files**.
6. Klik **Commit changes**.
7. Buka **Settings → Pages**.
8. Pada **Build and deployment**, pilih **Deploy from a branch**.
9. Pilih branch **main** dan folder **/(root)**, lalu klik **Save**.
10. Tunggu proses selesai. Alamat website biasanya berbentuk `https://NAMA-USERNAME.github.io/ketok-setara-langko/`. Ganti `NAMA-USERNAME` dengan username GitHub Anda.
11. Jika alamat belum muncul, muat ulang halaman Settings → Pages setelah beberapa menit.

## Cara memperbarui berita
1. Buka repository di GitHub.
2. Klik `index.html`, lalu ikon pensil/Edit.
3. Cari bagian `id="berita"` untuk mengubah kartu berita, atau `id="galeri"` untuk galeri.
4. Klik **Commit changes**. Perubahan akan diterbitkan setelah GitHub Pages selesai membangun ulang website.

## Catatan
Website ini adalah situs informasi independen untuk gagasan dan kegiatan tim, bukan situs resmi Pemerintah Desa Langko. Periksa fakta, izin foto, aturan kampanye/pemilihan yang berlaku, serta status pencalonan sebelum publikasi.
