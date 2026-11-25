# 🛡️ JejakKita: Panduan & Asisten Cerdas Cek Fakta dan Etika Berbagi Informasi di Sekolah

**JejakKita** adalah aplikasi web ringan berbasis peramban (*browser-based*) yang dirancang untuk membantu siswa, guru, dan warga sekolah memverifikasi kebenaran informasi, menjaga etika privasi digital, serta mencegah penyebaran rumor dan *cyberbullying* sebelum mengunggah atau meneruskan pesan di media sosial maupun grup percakapan sekolah.

---

## 1. Latar Belakang & Identifikasi Masalah
Di lingkungan sekolah, siswa sering kali meneruskan pesan berantai, rumor, atau tangkapan layar (*screenshot*) tidak lengkap di WhatsApp, Instagram Story, dan TikTok tanpa verifikasi. Selain itu, rendahnya kesadaran privasi digital membuat foto teman atau data lingkungan sekolah kerap diunggah tanpa izin.

**Penyebab Utama:**
- **Budaya FOMO & kecepatan berbagi:** Keinginan menjadi yang pertama menyebarkan kabar mengalahkan kebiasaan cek fakta.
- **Literasi verifikasi yang rendah:** Kesulitan membedakan fakta terverifikasi, opini, satire, dan potongan konteks.
- **Kurangnya kesadaran privasi:** Menganggap wajar penyebaran chat pribadi atau foto teman tanpa izin (*consent*).
- **Minimnya alat bantu praktis:** Materi literasi digital umumnya bersifat teoritis dan sulit diterapkan saat siswa sedang memegang ponsel.

---

## 2. Tujuan & Sasaran Pengguna
### Tujuan Proyek
Menyediakan panduan interaktif yang praktis, cepat diakses dari ponsel tanpa instalasi berat, guna membiasakan budaya *Saring Sebelum Sharing* di sekolah.

### Sasaran Pengguna
| Sasaran Pengguna | Peran | Cara Pemanfaatan |
| :--- | :--- | :--- |
| **Siswa SMP / SMA** | Pengguna utama sehari-hari | Menggunakan **Cek Kilat 60 Detik** sebelum *share* info ke grup/medsos serta berlatih lewat **Simulasi Studi Kasus**. |
| **Guru BK / Wali Kelas / OSIS** | Fasilitator & edukator | Memanfaatkan studi kasus dan panduan pelaporan sebagai materi diskusi literasi digital maupun sosialisasi MPLS. |

---

## 3. Fitur Utama
1. **Cek Kilat 60 Detik (Fact & Privacy Checker):** Kuesioner interaktif 5 langkah dengan indikator progres *real-time* yang menghasilkan status **Aman Dibagikan**, **Perlu Dicek Ulang**, atau **Sebaiknya Jangan Disebar** beserta saran tindakan.
2. **Kamus & Simulasi Studi Kasus Sekolah:** Simulasi interaktif skenario nyata di sekolah (potongan chat, foto teman tanpa izin, hoaks jadwal ujian) lengkap dengan umpan balik etika digital.
3. **Panduan Tindakan & Kotak Konsultasi Etika:** Langkah darurat penanganan kasus dan generator otomatis draf pesan pelaporan kepada Wali Kelas atau Guru BK.

---

## 4. Cara Menjalankan & Publikasi di GitHub Pages
1. Unggah keempat file (`index.html`, `style.css`, `script.js`, `README.md`) ke repositori GitHub Anda.
2. Buka menu **Settings** > **Pages** pada repositori GitHub.
3. Pada bagian **Branch**, pilih `main` (folder `/root`) lalu klik **Save**.
4. Website **JejakKita** siap diakses melalui tautan GitHub Pages di ponsel maupun komputer.

---

## 5. Hasil Pengujian Website
Pengujian fungsional (*black-box testing*) dan responsivitas dilakukan pada peramban desktop dan layar ponsel (375px – 1280px):

| Skenario Pengujian | Input / Tindakan | Hasil yang Diharapkan | Status |
| :--- | :--- | :--- | :--- |
| **Navigasi & Responsivitas** | Membuka menu pada tampilan mobile & desktop | Menu hamburger berfungsi baik, layout menyesuaikan lebar layar tanpa *horizontal scroll* | ✅ Berhasil |
| **Validasi Form Cek Kilat** | Klik tombol "Analisis" sebelum semua soal terisi | Muncul peringatan agar pengguna melengkapi ke-5 poin pemeriksaan | ✅ Berhasil |
| **Logika Skor & Privasi Kritis** | Memilih opsi "Tidak izin / memalukan orang lain" pada poin privasi meski skor lain tinggi | Sistem tetap memberi status **Sebaiknya Jangan Disebar** karena pelanggaran privasi kritis | ✅ Berhasil |
| **Interaktivitas Studi Kasus** | Berpindah tab kasus 1–3 dan memilih opsi jawaban | Konten kasus berganti dinamis dan menampilkan analisis sesuai pilihan pengguna | ✅ Berhasil |
| **Generator Draf Laporan** | Memilih jenis situasi pada menu *dropdown* konsultasi | Muncul saran tindakan dan draf pesan sopan yang siap disalin | ✅ Berhasil |

---

## 6. Kesimpulan
- **Manfaat Solusi:** *JejakKita* berhasil menerjemahkan konsep literasi digital menjadi alat bantu praktis yang relevan dengan keseharian siswa, sehingga mampu menekan risiko salah paham antarkelas, penyebaran hoaks jadwal sekolah, dan pelanggaran privasi digital.
- **Hasil Pengujian:** Seluruh fitur interaktif berjalan sesuai rancangan, responsif di perangkat ponsel siswa, serta memiliki logika penilaian yang memprioritaskan aspek keamanan privasi dan keutuhan fakta.
- **Peran AI dalam Pengembangan:** AI dimanfaatkan secara kritis sebagai mitra diskusi perancangan struktur fitur, penyusunan kode dasar HTML/CSS/JS, serta simulasi skenario pengujian. Setiap keluaran kode dan logika penilaian diperiksa ulang secara manual oleh pengembang agar sesuai dengan konteks psikologis dan aturan komunikasi di lingkungan sekolah Indonesia.
