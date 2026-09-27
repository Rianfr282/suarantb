# Design Specification — SuaraNTB (Redesign)

Dokumen ini adalah spesifikasi desain lengkap dari prototipe Figma SuaraNTB, ditulis dalam bentuk teks presisi agar bisa dijadikan acuan implementasi tanpa perlu melihat gambar. Semua nilai warna, ukuran, dan tipografi di bawah ini bersifat mengikat kecuali ditandai sebagai "estimasi" atau "asumsi".

## 1. Tech Stack

- **HTML5 + CSS3 + JavaScript vanilla** (tanpa framework/library eksternal).
- Struktur multi-halaman statis (Multi-Page Application), bukan SPA — setiap jenis halaman adalah file `.html` terpisah, dihubungkan lewat navigasi `<a href>` biasa.
- Font **Inter** dimuat dari Google Fonts, weight yang dibutuhkan: `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold).
- State UI (mode dark/light, dropdown terbuka/tertutup, hasil pencarian) dikelola dengan JS vanilla: `classList.toggle`, `localStorage` untuk menyimpan preferensi tema.
- Pendekatan CSS: **mobile-first**. Base style menargetkan lebar ±375–414px (sesuai desain Figma asli), lalu ditambah `@media` query untuk tablet & desktop (lihat bagian 7).

## 2. Design Tokens

### 2.1 Warna — Light Mode (default, sesuai Figma)

```css
:root {
  --color-primary: #0089C3;        /* nav bar, garis judul seksi, footer */
  --color-bg: #FFFDF7;             /* background utama & area logo header */
  --color-surface: #FFFFFF;        /* kartu, dropdown, input */
  --color-border: #E8E6E1;         /* garis pemisah antar elemen/kartu */
  --color-text: #000000;           /* teks utama, dengan variasi opacity di bawah */
  --color-text-opacity-strong: 0.8;  /* judul */
  --color-text-opacity-medium: 0.7;  /* isi/deskripsi */
  --color-text-opacity-soft: 0.4;    /* metadata/caption */

  --color-header-meta: #7F7979;    /* tanggal & isi teks breaking news */
  --color-header-label: #303030;   /* label "BREAKING NEWS" */
  --color-nav-text: #FFFFFF;       /* teks menu navigasi */

  --color-footer-bg: rgba(0, 137, 195, 0.3);
  --color-footer-divider: rgba(255, 255, 255, 0.3);
  --color-footer-text: #000000;
}
```

> Catatan asumsi: pengguna menyebut ada warna dasar `#232429` ("dark, dipakai di top bar"). Nilai ini paling konsisten dipakai sebagai **background dasar Dark Mode** (lihat 2.3), bukan bagian dari palet light mode — karena warna area atas header pada light mode sudah ditentukan sebagai `#FFFDF7`.

### 2.2 Tipografi

Font family: `'Inter', sans-serif` di semua elemen.

| Elemen | Weight | Ukuran |
|---|---|---|
| Judul artikel / label kategori (badge) | Bold (700) | 14–15px |
| Menu navigasi | SemiBold (600) | 13px |
| Isi ringkasan / metadata umum | Medium (500) | 8–13px (sesuaikan per konteks) |
| Tanggal & isi teks breaking news (header) | Regular (400) | 10px |
| Label "BREAKING NEWS" | Medium (500) | 11px |
| "IKUTI KAMI" (footer) | Bold (700) | 12px |
| Link footer (Redaksi, Pedoman Media Siber, Kontak Kami, Indeks) | Regular (400) | 12px |
| Copyright footer | Medium (500) | 10px |

### 2.3 Warna — Dark Mode (usulan Claude, belum ada di Figma)

Prinsip: hindari hitam pekat (`#000000`) dan putih murni (`#FFFFFF`) agar tidak silau/menyebabkan *eye strain*; gunakan varian abu-gelap hangat yang senada dengan `#232429` yang sudah disebutkan pengguna sebagai basis warna gelap.

```css
[data-theme="dark"] {
  --color-primary: #29A9E0;        /* versi lebih terang dari #0089C3, kontras cukup di bg gelap */
  --color-bg: #232429;             /* basis dark mode */
  --color-surface: #2C2E34;        /* kartu, sedikit lebih terang dari bg agar ada depth */
  --color-border: #3A3C42;
  --color-text: #F2F1ED;           /* bukan #FFFFFF murni, mengurangi silau */
  --color-text-opacity-strong: 0.85;
  --color-text-opacity-medium: 0.7;
  --color-text-opacity-soft: 0.45;

  --color-header-meta: #A0A0A0;
  --color-header-label: #E8E6E1;
  --color-nav-text: #F2F1ED;

  --color-footer-bg: rgba(41, 169, 224, 0.15);
  --color-footer-divider: rgba(255, 255, 255, 0.15);
  --color-footer-text: #F2F1ED;
}
```

Nav bar dark mode: gunakan `--color-bg` (`#232429`) sebagai background nav, bukan biru solid — biru solid terang akan terasa menyilaukan di lingkungan gelap. `--color-primary` (biru terang) dipakai untuk state aktif/link/garis aksen saja.

Toggle disimpan di `localStorage` (`key: theme`, value `"light"` / `"dark"`), diterapkan lewat atribut `data-theme` di `<html>`.

## 3. Ukuran & Spacing (estimasi — poin 4)

Karena tidak ada data pasti dari panel Inspect Figma, berikut estimasi proporsional berdasarkan screenshot, disusun agar konsisten dan mudah disesuaikan lewat CSS variable:

```css
:root {
  --space-page-x: 16px;      /* margin kiri-kanan halaman */
  --space-card-gap: 16px;    /* jarak antar kartu */
  --space-card-padding: 12px;
  --radius-card: 10px;
  --radius-badge: 4px;
  --radius-button: 6px;

  --thumb-size-list: 96px;   /* thumbnail kartu list (Berita Terbaru dsb), persegi */
  --thumb-ratio-featured: 16 / 9; /* thumbnail kartu unggulan di halaman Kategori */
}
```

Badge kategori (pill kecil di atas judul kartu): padding `4px 8px`, border-radius `var(--radius-badge)`, teks uppercase, Bold, 10–11px, warna per kategori (estimasi, sesuaikan bila ada palet resmi):

| Kategori | Warna badge (estimasi) |
|---|---|
| Ekonomi | `#C97A3D` |
| Hukum dan Kriminal | `#C0392B` |
| Politik | `#8E44AD` |
| Pendidikan | `#2E86AB` |
| Umum | `#5C6670` |

## 4. Komponen Global

### 4.1 Header (sticky di top)

Terdiri dari 2 baris:

**Baris 1 — background `--color-bg` (#FFFDF7):**
- Logo SuaraNTB, ukuran tetap **219×42px**, rata kiri.
- Kanan atas: 2 ikon — ikon kaca pembesar (buka overlay pencarian, lihat 4.6) dan ikon toggle dark/light mode (matahari/bulan).
- Baris tanggal: contoh "Sabtu, 29 Agustus 2026" — `--color-header-meta`, Regular 10px.
- Baris breaking news: label **"BREAKING NEWS:"** (`--color-header-label`, Medium 11px) diikuti teks berjalan/ticker satu baris (`--color-header-meta`, Regular 10px) — teks lebih panjang dari lebar layar, dipotong dengan ellipsis atau di-marquee (animasi scroll horizontal kontinu via CSS `@keyframes`).

**Baris 2 — nav, background `--color-primary` (#0089C3):**
- Daftar menu horizontal, **overflow-x: auto** (scroll horizontal, sembunyikan scrollbar), item: `BERANDA`, `NTB ▾`, `EKONOMI`, `POLITIK`, `HUKRIM`, dan kategori lain menyusul.
- Teks menu: `--color-nav-text`, SemiBold 13px, `white-space: nowrap` per item.
- Item dengan tanda `▾` (mis. `NTB`, `BUDAYA & HIBURAN`) adalah trigger dropdown — lihat 4.5.

**Breadcrumb** (muncul di bawah header, pada halaman selain Beranda): teks kecil format `BERANDA > [NAMA HALAMAN]`, contoh: `BERANDA > ARSIP BERITA`, `BERANDA > EKONOMI`. Style: font kecil (±11–12px), warna abu netral, dipisah `>`.

### 4.2 Footer

- Background: `--color-footer-bg` (biru transparan 30%).
- Logo SuaraNTB, ukuran **219×42px**, rata tengah.
- Garis pembatas di bawah logo: `--color-footer-divider` (putih transparan 30%).
- Judul **"IKUTI KAMI"**: `--color-footer-text`, Bold 12px, diikuti baris ikon sosial media (Facebook, TikTok, Instagram/X, YouTube — 4 ikon bulat).
- Garis pembatas kedua: sama seperti di atas.
- Baris tautan: `Redaksi | Pedoman Media Siber | Kontak Kami | Index` — `--color-footer-text`, Regular 12px.
- Baris copyright: `© SUARANTB.com 2004-2026` dan baris kedua `PT. Suara NTB Pers (Kelompok Media Bali Post)` — `--color-footer-text`, Medium 10px.

### 4.3 Kartu Artikel (Article Card)

Dipakai berulang di: daftar "Berita Terbaru", grid "Kategori", hasil pencarian gaya list.

Layout: thumbnail persegi (`--thumb-size-list`) di kiri, konten di kanan:
1. Badge kategori (lihat tabel warna di atas)
2. Judul artikel — Bold 14–15px, maksimal 2–3 baris (`-webkit-line-clamp: 2`)
3. Metadata: ikon jam kecil + tanggal publish — Medium, ukuran kecil (±10–11px), opacity soft

Card di halaman Kategori (item pertama/unggulan) menggunakan thumbnail lebih besar rasio `16:9` (`--thumb-ratio-featured`), judul di bawah thumbnail (bukan di samping), plus ringkasan 1–2 kalimat dan link "Selengkapnya →".

### 4.4 Kartu Artikel Terkait ("Baca Juga" / Berita Terkait)

Format **list teks tanpa thumbnail**, dipisahkan garis (`--color-border`) antar item:
- Judul artikel (link, Medium/SemiBold, ±13px)
- Tiap item dipisah divider tipis 1px

Dipakai di:
- Bagian "Baca Juga" di halaman Isi Berita
- Bagian "Berita Terkait" — tampilkan **5 item**, diambil berdasarkan tag/topik artikel yang sama.

### 4.5 Dropdown Menu Navigasi

Trigger: item nav dengan ikon `▾` (mis. `NTB`, `BUDAYA & HIBURAN`). Saat diklik:
- Panel dropdown muncul menempel di bawah item, background putih (`--color-surface`), lebar menyesuaikan konten.
- Isi list: setiap opsi berupa pill/button biru (`--color-primary`) dengan teks putih, tersusun vertikal, sedikit gap antar pill.

Isi dropdown **NTB**: Lombok Barat, Lombok Tengah, Lombok Timur, Lombok Utara, Sumbawa Barat, Sumbawa, Dompu, Bima.

Isi dropdown **Budaya & Hiburan**: Film, Buku.

Klik salah satu opsi → menuju halaman ber-layout sama seperti **halaman Kategori** (lihat 6.4), tapi judul & konten difilter sesuai wilayah/topik yang dipilih (mis. klik "Lombok Barat" → judul halaman "Lombok Barat", breadcrumb `BERANDA > NTB > LOMBOK BARAT`).

### 4.6 Filter Arsip (Index Berita)

Tiga `<select>` custom (tanggal / bulan / tahun) tersusun horizontal, tiap select berupa kotak putih dengan panah dropdown di kanan, lalu tombol hitam **"Tampilkan"** (ikon corong/filter) di sebelahnya.

Saat salah satu select diklik, muncul panel dropdown list vertikal (background gelap `#000000`/near-black, teks putih, item ter-highlight biru saat di-hover/dipilih) menutupi elemen di bawahnya sementara — **penting: dropdown tidak boleh tertutup oleh frame iklan** di bawahnya (gunakan `z-index` tinggi pada dropdown).

Setelah klik "Tampilkan": hasil muncul di bawah blok filter (frame iklan yang tadinya ada di situ bergeser turun), berupa:
- Jika ada hasil: teks info `"Ditemukan N berita"` + list kartu artikel (format seperti 4.3, versi kecil/list).
- Jika tidak ada hasil: kotak pesan `"Tidak ada berita yang di temukan pada tanggal ini."`

Kombinasi filter valid (sesuai logika yang sudah dirancang sebelumnya): tanggal 31, bulan Agustus, tahun 2026 → menampilkan 3 berita; kombinasi lain → pesan "tidak ditemukan".

### 4.7 Pencarian

Trigger: ikon kaca pembesar di header → membuka **overlay pencarian full-screen**:
1. State awal: search bar kosong, placeholder `"Cari postingan, tag"`, tombol `"Batalkan"` di kanan untuk menutup overlay.
2. Saat mengetik: placeholder berubah jadi `"Cari postingan dan tag"`, keyboard virtual muncul (khusus simulasi mobile, tidak perlu diimplementasikan — ini bawaan OS).
3. Setelah ada input (mis. mengetik "Pendidikan"): muncul search bar dengan tombol close (X) + teks input, lalu:
   - Bagian **TAG**: tag yang cocok, format `# [kata kunci]`.
   - Bagian **POSTINGAN**: list hasil — judul artikel (kata kunci di-bold) + cuplikan teks isi (dipotong dengan `...`), format sama seperti komponen 4.4 (list, tanpa thumbnail, divider antar item).
   - Tombol **"Tampilkan lebih banyak hasil"** di bagian bawah list.

Halaman hasil pencarian (setelah submit/navigasi penuh, bukan overlay) menggunakan **layout list seperti komponen "Baca Juga"/Berita Terkait (4.4)** — bukan grid kartu bergambar.

### 4.8 Kartu Komentar

Avatar bulat kecil + nama komenter (Bold) + judul artikel yang dikomentari (link, dengan badge kategori kecil + tanggal) + isi komentar (teks preview, italic atau regular kecil).

### 4.9 Bar Judul Seksi

Label seksi (`BERITA TERBARU`, `BERITA POPULER`, `KOMENTAR DI BERITA LAINNYA`, dst): teks Bold uppercase, dengan garis/bar aksen warna `--color-primary` di kiri atau sebagai underline pendek.

### 4.10 Tombol "Tampilkan Lebih Banyak"

Full-width, background hitam/`--color-text`, teks putih, Bold, border-radius `var(--radius-button)`, ikon panah bawah di kanan teks. Dipakai di halaman Kategori untuk memuat lebih banyak artikel (bisa diimplementasikan dengan JS `fetch`/`slice` array data statis, atau cukup toggle elemen tersembunyi untuk keperluan prototipe skripsi).

### 4.11 Kartu Info Kontak (halaman Kontak Kami)

Ikon di dalam lingkaran (background biru muda tint, mis. `#BFE3F0`), ukuran ikon ±28-32px, warna ikon senada `--color-primary`/dark. Di bawah ikon: heading Bold ±18-20px, lalu isi teks/list Regular ±14px. Card background `--color-surface`, border-radius `var(--radius-card)`, padding lebih besar dari kartu artikel (±20-24px).

Dua varian isi:
- **Varian alamat**: ikon pin lokasi, heading "Alamat Redaksi", teks alamat, link "LIHAT PETA →" (arahkan ke URL Google Maps).
- **Varian kontak**: ikon telepon, heading "Kontak Redaksi", bullet list dengan label bergaris bawah (Telepon, WhatsApp, Email) diikuti nilainya.

### 4.12 Form Kontak

Card terpisah, heading "Kontak Redaksi" (Bold besar), field berurutan vertikal:
- Label uppercase kecil Bold di atas tiap input (mis. "NAMA LENGKAP").
- Input/textarea: background abu muda (estimasi `#F0EFEA`) dengan border tipis, border-radius `var(--radius-button)`, padding ±14px, placeholder warna `--color-text` opacity soft.
- Field: Nama Lengkap (text, placeholder "Nama Anda"), Alamat Email (email, placeholder "email@contoh.com"), Subjek (text, placeholder "Judul Pesan..."), Pesan (textarea, tinggi ±120px, placeholder "Tulis pesan anda di sini...").
- Tombol submit **"Kirim Pesan"**: full-width, background hitam/`--color-text`, teks putih Bold, ikon paper-plane di kiri teks, border-radius `var(--radius-button)`.
- Untuk kebutuhan skripsi, submit tidak perlu backend nyata — cukup `event.preventDefault()` + tampilkan pesan konfirmasi sederhana, atau integrasikan ke layanan form statis (mis. Formspree) bila ingin benar-benar fungsional.

### 4.13 Halaman Teks Panjang (Long-form Content)

Dipakai di halaman **Redaksi** & **Pedoman Media Siber** — tanpa kartu/gambar seperti Isi Berita, cukup konten teks terstruktur:
- Judul halaman: Bold besar (±24-28px).
- Paragraf: Regular, `line-height` ±1.6 untuk keterbacaan teks panjang.
- Sub-heading (mis. "1. Ruang Lingkup", "Pendiri:"): Bold, sedikit lebih besar dari body text, margin-top lebih besar dari paragraf biasa.
- Sub-list berhuruf (a, b, c...) di dalam sub-heading bernomor: indentasi menjorok, tetap Regular.
- Bullet list biasa (mis. daftar nama staf per jabatan): `<ul><li>` standar; label sebelum titik dua di-bold jika ada (mis. "Alamat:").
- Kata/istilah bergaris bawah tanpa jadi link sungguhan (mis. "Telepon", "WhatsApp", "Email" pada halaman Redaksi) cukup `text-decoration: underline`, warna tetap `--color-text` (bukan warna link/primary).
- Halaman ini **tidak** memiliki: gambar utama, related articles, comment section, pagination. Struktur hanya: Header → breadcrumb → judul → konten teks panjang → Footer.

## 5. Struktur Halaman

| Halaman | File (usulan) | Breadcrumb |
|---|---|---|
| Beranda | `index.html` | – |
| Index Berita (arsip + filter tanggal) | `index-berita.html` | `BERANDA > ARSIP BERITA` |
| Isi Berita (detail artikel) | `isi-berita.html` | `BERANDA > [KATEGORI]` |
| Kategori (mis. Ekonomi) | `kategori.html?slug=ekonomi` atau `kategori-ekonomi.html` | `BERANDA > [KATEGORI]` |
| Submenu NTB per wilayah | pakai template sama seperti Kategori, judul & data berbeda | `BERANDA > NTB > [WILAYAH]` |
| Pencarian | `pencarian.html` | `BERANDA > PENCARIAN` |
| Redaksi | `redaksi.html` | `BERANDA > REDAKSI` |
| Pedoman Media Siber | `pedoman-media-siber.html` | `BERANDA > PEDOMAN MEDIA SIBER` |
| Kontak Kami | `kontak-kami.html` | `BERANDA > KONTAK KAMI` |

### 5.1 Beranda
Header → carousel banner iklan (dots indicator) → seksi "Berita Terbaru" (list kartu, 4.3) → seksi "Berita Populer" (list bernomor 1–5) → seksi "Komentar di Berita Lainnya" (4.8) → beberapa seksi kategori tambahan (Politik, Kriminal, dst masing-masing dengan bar judul + kartu) → Footer.

### 5.2 Index Berita
Header → breadcrumb → judul "Index Berita" + deskripsi singkat → komponen filter (4.6) → banner iklan carousel → seksi "Berita Terbaru" → "Berita Populer" → "Komentar di Berita Lainnya" → Footer.

### 5.3 Isi Berita
Header → breadcrumb → judul artikel + info penulis/tanggal + badge kategori → gambar utama + caption → isi artikel (paragraf) → blok "Baca Juga" (4.4, 2 item di tengah artikel) → pagination halaman artikel (jika multi-halaman) → topik/tag → tombol share → komentar → banner iklan → "Berita Terkait" (4.4, 5 item) → "Berita Terbaru" → "Berita Populer" → "Komentar di Berita Lainnya" → Footer.

### 5.4 Kategori
Header → breadcrumb → judul kategori ("ARSIP KATEGORI" + nama kategori) + total berita ("Total: N Berita") + deskripsi singkat → kartu unggulan (thumbnail besar) → list kartu artikel lain → tombol "Tampilkan Lebih Banyak" (4.10) → banner iklan → "Berita Terbaru" → "Berita Populer" → "Komentar di Berita Lainnya" → Footer.

### 5.5 Submenu NTB / Budaya & Hiburan
Sama persis dengan struktur 5.4 (Kategori), hanya judul dan sumber data yang berbeda sesuai wilayah/topik yang dipilih dari dropdown.

### 5.6 Halaman Hasil Pencarian
Header (search bar sudah terisi kata kunci) → breadcrumb → judul `"Hasil pencarian: [kata kunci]"` → list hasil (format 4.4) → tombol "Tampilkan lebih banyak hasil" → Footer.

### 5.7 Redaksi
Header → breadcrumb (`BERANDA > REDAKSI`) → judul "Perkenalkan, SUARANTB.com" (kata "SUARANTB.com" ditandai warna berbeda/style link, teks lain default) → 5 paragraf deskripsi → info kontak singkat (Alamat, Telepon, WhatsApp, Email — bullet list, label bold) → daftar susunan redaksi per jabatan, masing-masing sub-heading underline bold diikuti bullet nama: Pendiri, Pemimpin Umum, Penanggung Jawab/Pemimpin Redaksi, Redaktur, Staf Redaksi (dikelompokkan per wilayah: Mataram, Lombok Barat, Lombok Tengah, Lombok Timur, Lombok Utara, Sumbawa, Sumbawa Barat, Dompu, Bima/Kota Bima), Video Jurnalis, Staff IT, Admin Web dan Media Sosial, Staff Marketing dan Iklan, Keuangan → Footer.
Gunakan komponen 4.13 (Halaman Teks Panjang).

### 5.8 Pedoman Media Siber
Header → breadcrumb (`BERANDA > PEDOMAN MEDIA SIBER`) → judul "Pedoman Media Siber" → 2 paragraf pembuka → 9 seksi bernomor (1. Ruang Lingkup, 2. Verifikasi dan Keberimbangan Berita, 3. Isi Buatan Pengguna/User Generated Content, 4. Ralat, Koreksi, dan Hak Jawab, 5. Pencabutan Berita, 6. Iklan, 7. Hak Cipta, 8. Pencantuman Pedoman, 9. Sengketa) — sebagian seksi berisi sub-poin berhuruf (a, b, c, ...) — → penutup baris tanggal/tempat ("Jakarta, 3 Februari 2012" + keterangan penyusun) → Footer.
Gunakan komponen 4.13. Konten teks lengkap tiap seksi mengikuti isi pada screenshot yang sudah diberikan pengguna.

### 5.9 Kontak Kami
Header → breadcrumb (`BERANDA > KONTAK KAMI`) → judul "Kontak Kami" + subjudul singkat ("Kami siap mendengar masukan, kritik, dan tawaran kerjasama anda") → Kartu Info Kontak varian alamat (4.11) → Kartu Info Kontak varian kontak (4.11) → Form Kontak (4.12) → Footer.

Footer di semua halaman kini menautkan link "Redaksi", "Pedoman Media Siber", dan "Kontak Kami" (lihat 4.2) ke ketiga halaman ini secara nyata (bukan placeholder `#`).

## 6. Responsive Strategy (Ekstrapolasi Desktop/Tablet)

Desain asli Figma **hanya untuk mobile** (±375–414px). Berikut aturan ekstrapolasi:

```css
/* Mobile: default, tanpa media query — sesuai Figma persis */

/* Tablet */
@media (min-width: 768px) {
  /* container di-center, max-width 720px */
  /* grid kartu Kategori: 2 kolom */
  /* nav: sebagian besar item muat tanpa scroll, sisanya tetap overflow-x */
}

/* Desktop */
@media (min-width: 1024px) {
  /* container di-center, max-width ±1140px */
  /* layout 2 kolom: konten utama (kiri, ~70%) + sidebar (kanan, ~30%) berisi
     "Berita Populer" dan "Komentar di Berita Lainnya" yang sejajar,
     bukan lagi ditumpuk di bawah konten utama */
  /* grid kartu Kategori: 3 kolom */
  /* header: nav tidak perlu scroll, semua item tampil penuh */
}
```

Prinsip umum: elemen yang di mobile berbentuk *list vertikal penuh lebar* (kartu artikel, grid kategori) diubah jadi *grid multi-kolom* pada tablet/desktop; elemen yang di mobile ditumpuk berurutan (konten utama → sidebar) pada desktop disusun *berdampingan*. Header, footer, dan komponen dasar (badge, tombol, dropdown) tidak berubah struktur, hanya skala spacing yang sedikit membesar.

## 7. Ringkasan Asumsi/Estimasi

Bagian ini merangkum semua tempat di mana Claude membuat keputusan desain karena data pasti tidak tersedia — kembangkan sesuai kebutuhan, atau minta konfirmasi ke pengguna bila ragu:

- Palet warna Dark Mode (bagian 2.3) — desain baru, belum ada di Figma.
- Ukuran/spacing kartu & border-radius (bagian 3) — estimasi proporsional dari screenshot.
- Warna badge per kategori (bagian 3) — estimasi, bukan dari data resmi.
- Interpretasi warna `#232429` sebagai basis Dark Mode (bagian 2.1, catatan).
- Breakpoint tablet (768px) & desktop (1024px) serta perubahan layout di dalamnya (bagian 6) — mengikuti konvensi umum, bukan spesifikasi eksplisit dari pengguna.

## 8. Konten Teks Lengkap (untuk `redaksi.html` & `pedoman-media-siber.html`)

Bagian ini berisi teks final, sudah tidak perlu screenshot lagi — salin verbatim, jangan diringkas.

### 8.1 Data Resmi Kontak (dipakai di `kontak-kami.html` DAN `redaksi.html`)

- Alamat Redaksi: Jalan Bangau Nomor 15 Cakranegara, Kota Mataram, Nusa Tenggara Barat.
- Telepon: (0370) 639543
- WhatsApp: 081805211818
- Email: suarantbcom@gmail.com
- Link "LIHAT PETA →": arahkan ke URL pencarian Google Maps berdasarkan alamat di atas, mis. `https://www.google.com/maps/search/?api=1&query=Jalan+Bangau+Nomor+15+Cakranegara+Kota+Mataram+Nusa+Tenggara+Barat` (tidak ada koordinat pasti dari pengguna, gunakan format search query ini).

### 8.2 Konten `redaksi.html`

**Judul:** Perkenalkan, SUARANTB.com *(kata "SUARANTB.com" diberi style warna/link berbeda dari teks lain)*

**Paragraf:**

> Adalah sebuah portal berita lokal yang merupakan bagian dari Kelompok Media Bali Post (KMB) di NTB. suarantb.com didirikan oleh para awak redaksi Harian Suara NTB.

> Seperti halnya Harian Suara NTB yang lahir dan tumbuh untuk menjawab tuntutan perkembangan masyarakat NTB, demikian pula dengan suarantb.com.

> Kemajuan dalam cara masyarakat memperoleh informasi telah melahirkan tuntutan bagi insan pers guna melahirkan berita yang mudah dan cepat diakses oleh masyarakat. Namun, berita yang demikian harus tetap dibuat dengan penuh tanggungjawab dan tetap menjunjung tinggi nilai-nilai luhur pers di Indonesia.

> Dengan demikian, akurasi pemberitaan tetap menjadi prioritas utama portal online ini. Tanpa akurasi dalam pemberitaan, sebuah media online akan runtuh reputasinya dan ditinggalkan oleh pembaca.

> Portal berita ini mengusung tagline "Jendela NTB untuk Dunia". Tagline ini diaktualisasikan dalam berbagai ragam rubrik dan produk berita yang akan disuguhkan untuk pembaca suarantb.com. Tagline tersebut merupakan mimpi kami untuk menjadi sebuah portal berita dimana dunia bisa memandang NTB melalui portal berita ini.

> Untuk lebih dekat dengan kami, silakan berkunjung ke kantor PT. Suara NTB Pers

Diikuti bullet list data kontak (pakai data resmi di 8.1 — versi WhatsApp di halaman ini ada tanda `(*)` setelah nomornya: "081805211818. (*)").

**Susunan Redaksi** (tiap jabatan = sub-heading underline bold + bullet nama):

- **Pendiri:** Satria Naradha
- **Pemimpin Umum:** I Gusti Agung Adisuarsana
- **Penanggung Jawab/Pemimpin Redaksi:** Marham
- **Redaktur:** Muhammad Kasim; Fitriani Agustina; Atanasius Rony Fernandez
- **Staf Redaksi:**
  - Mataram: Muhammad Kasim, Ahmad Bulkaini, Ahmad Hiswandi, Umaera, Nurmita, Sibawaeh, Pandi
  - Lombok Barat: M. Haeruzzubaidi
  - Lombok Tengah: Munakir
  - Lombok Timur: Rusliadi
  - Lombok Utara: Johari
  - Sumbawa: Ilham Syahroni
  - Sumbawa Barat: Heri Andi
  - Dompu: Nasrullah
  - Bima/Kota Bima: Nur Wahirah Hijaralia Azzahra
- **Video Jurnalis:** Alfan Hady; Dimas Loveian DN
- **Staff IT:** Alfan Hady
- **Admin Web dan Media Sosial:** Ayu Apriel
- **Staff Marketing dan Iklan:** Zulkarnaen; Nanik Hidayati
- **Keuangan:** Ari Nila Dewi

### 8.3 Konten `pedoman-media-siber.html`

**Judul:** Pedoman Media Siber

**Paragraf pembuka:**

> Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB. Keberadaan media siber di Indonesia juga merupakan bagian dari kemerdekaan berpendapat, berekspresi, dan kemerdekaan pers.

> Media siber memiliki karakter khusus sehingga memerlukan pedoman agar pengelolaannya dapat dilaksanakan secara profesional, memenuhi fungsi, hak, dan kewajibannya sesuai Undang-Undang Nomor 40 Tahun 1999 tentang Pers dan Kode Etik Jurnalistik. Untuk itu Dewan Pers bersama organisasi pers, pengelola media siber, dan masyarakat menyusun Pedoman Pemberitaan Media Siber sebagai berikut:

**1. Ruang Lingkup**
Media Siber adalah segala bentuk media yang menggunakan wahana Internet dan melaksanakan kegiatan jurnalistik, serta memenuhi persyaratan Undang-Undang Pers dan Standar Perusahaan Pers yang ditetapkan Dewan Pers. Isi Buatan Pengguna (User Generated Content) adalah isi yang dibuat dan atau dipublikasikan oleh pengguna media siber, antara lain, artikel, gambar, komentar, video dan berbagai bentuk unggahan lain yang melekat pada media siber, seperti blog, forum, komentar pembaca atau pemirsa, dan bentuk lain.

**2. Verifikasi dan Keberimbangan Berita**
a. Pada prinsipnya setiap berita harus melalui verifikasi.
b. Berita yang dapat merugikan pihak lain memerlukan prinsip akurasi dan keberimbangan.
c. Ketentuan dalam butir (a) di atas dikecualikan, dengan syarat: berita benar-benar mengandung kepentingan publik yang bersifat mendesak; sumber berita yang pertama adalah sumber yang jelas disebutkan identitasnya, kredibel dan kompeten; subyek berita yang harus dikonfirmasi tidak diketahui keberadaannya atau tidak dapat diwawancarai; media memberikan penjelasan kepada pembaca bahwa berita tersebut masih memerlukan verifikasi lebih lanjut dan diupayakan dalam waktu secepatnya — penjelasan dimuat pada bagian akhir dari berita yang sama, di dalam kurung dan menggunakan huruf miring.
d. Setelah memuat berita sesuai butir (c), media wajib meneruskan upaya verifikasi, dan setelah verifikasi didapatkan, hasil verifikasi dicantumkan pada berita pemutakhiran (update) dengan tautan pada berita yang belum terverifikasi.

**3. Isi Buatan Pengguna (User Generated Content)**
a. Media siber wajib mencantumkan syarat dan ketentuan mengenai Isi Buatan Pengguna yang tidak bertentangan dengan Undang-Undang No. 40 tahun 1999 tentang Pers dan Kode Etik Jurnalistik, ditempatkan secara terang dan jelas.
b. Media siber mewajibkan setiap pengguna untuk melakukan registrasi keanggotaan dan melakukan proses log-in terlebih dahulu sebelum mempublikasikan semua bentuk Isi Buatan Pengguna lebih lanjut.
c. Dalam registrasi tersebut, media siber wajib mewajibkan pengguna memberi persetujuan tertulis bahwa Isi Buatan Pengguna yang dipublikasikan tidak akan: (a) memuat isi bohong, fitnah, sadis dan cabul; (b) memuat isi yang mengandung prasangka dan kebencian terkait dengan suku, agama, ras, dan antargolongan (SARA), serta menganjurkan tindakan kekerasan; (c) memuat isi diskriminatif atas dasar perbedaan jenis kelamin dan bahasa, serta merendahkan martabat orang lemah, miskin, sakit, cacat jiwa, atau cacat jasmani.
d. Media siber memiliki kewenangan mutlak untuk mengedit atau menghapus Isi Buatan Pengguna yang bertentangan dengan butir (c) di atas, serta wajib menyediakan mekanisme pengaduan yang dinilai melanggar ketentuan tersebut. Mekanisme tersebut harus disediakan di tempat yang mudah dapat diakses pengguna.
e. Media siber wajib menyunting, menghapus, dan melakukan tindakan koreksi setiap Isi Buatan Pengguna yang melanggar ketentuan butir (c), segera mungkin secara proporsional selambat-lambatnya 2 × 24 jam setelah pengaduan diterima.
f. Media siber yang telah memenuhi ketentuan butir (a), (b), (c), dan (e) dibebaskan dari tanggung jawab atas masalah yang ditimbulkan akibat pemuatan isi yang melanggar ketentuan pada butir (c).
g. Media siber bertanggung jawab atas Isi Buatan Pengguna yang dipublikasikan bila tidak mengambil tindakan koreksi setelah batas waktu sebagaimana tersebut pada butir (f).

**4. Ralat, Koreksi, dan Hak Jawab**
a. Ralat, koreksi, dan hak jawab mengacu pada Undang-Undang Pers, Kode Etik Jurnalistik, dan Pedoman Hak Jawab yang ditetapkan Dewan Pers.
b. Ralat, koreksi dan atau hak jawab wajib dimuat pada berita yang diralat, dikoreksi, atau yang diberi hak jawab tersebut.
c. Di setiap ralat, koreksi, dan hak jawab dicantumkan waktu pemuatan ralat, koreksi, dan hak jawab tersebut.
d. Bila suatu berita media siber tertentu disebarluaskan media siber lain, maka: tanggung jawab berita pembuat berita terbatas pada berita yang dipublikasikan di media siber tersebut atau media siber yang berada di bawah otoritas teknisnya; koreksi berita yang dilakukan oleh sebuah media siber juga harus dilakukan oleh media siber lain yang mengutip berita dari media siber yang dikoreksi itu; media yang menyebarluaskan berita dari sebuah media siber dan tidak melakukan koreksi atas berita sesuai yang dilakukan oleh media siber pemilik dan atau pembuat berita, bertanggung jawab penuh atas semua akibat hukum dari berita yang tidak dikoreksinya itu.
e. Sesuai dengan Undang-Undang Pers, media siber yang tidak melayani hak jawab dapat dijatuhi sanksi hukum pidana denda paling banyak Rp500.000.000 (Lima ratus juta rupiah).

**5. Pencabutan Berita**
a. Berita yang sudah dipublikasikan tidak dapat dicabut karena alasan penyensoran dari pihak luar redaksi, kecuali terkait masalah SARA, kesusilaan, masa depan anak, pengalaman traumatik korban, atau berdasarkan pertimbangan khusus lain yang ditetapkan Dewan Pers.
b. Media siber lain wajib mengikuti pencabutan kutipan berita dari media asal yang telah dicabut.
c. Pencabutan berita wajib disertai dengan alasan pencabutan dan diumumkan kepada publik.

**6. Iklan**
a. Media siber wajib membedakan dengan tegas antara produk berita dan iklan.
b. Setiap berita/artikel/isi yang merupakan iklan atau isi berbayar wajib mencantumkan keterangan "advertorial", "iklan", "ads", atau kata lain yang menjelaskan bahwa berita/artikel/isi tersebut adalah iklan.

**7. Hak Cipta**
Media siber wajib menghormati hak cipta sebagaimana diatur dalam peraturan perundang-undangan yang berlaku.

**8. Pencantuman Pedoman**
Media siber wajib mencantumkan Pedoman Pemberitaan Media Siber ini di medianya secara terang dan jelas.

**9. Sengketa**
Penilaian akhir atas sengketa mengenai pelaksanaan Pedoman Pemberitaan Media Siber ini diselesaikan oleh Dewan Pers.

**Penutup:**

> Jakarta, 3 Februari 2012
> (Pedoman ini ditandatangani oleh Dewan Pers dan komunitas pers di Jakarta, 3 Februari 2012)
