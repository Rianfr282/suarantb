/**
 * Data Berita SuaraNTB
 */
const SUARA_NTB_DATA = {
  // 5 Berita Headline untuk Slider Utama & 4 Kotak di bawahnya
  headlines: [
    {
      id: 101,
      title: "Gubernur NTB Tinjau Kesiapan Infrastruktur Jalan Menuju Sirkuit Mandalika",
      category: "Ekonomi",
      badgeClass: "badge-ekonomi",
      date: "31 Agustus 2026",
      time: "14:30 WITA",
      author: "Ahmad Rifai",
      tags: ["Mandalika", "Infrastruktur", "Ekonomi NTB", "Pariwisata"],
      thumb: "https://images.unsplash.com/photo-1578874691223-a49262e0c94f?w=900&auto=format&fit=crop&q=80",
      excerpt: "Pemerintah Provinsi NTB memastikan percepatan pengerjaan akses jalan utama penunjang pariwisata Mandalika tuntas sebelum agenda internasional berlangsung.",
      content: `
        <p><strong>Lombok Tengah</strong> — Gubernur Nusa Tenggara Barat (NTB) melakukan peninjauan langsung terhadap progres pengerjaan infrastruktur bypass dan jalan pendukung menuju kawasan ekonomi khusus Mandalika pada hari Senin.</p>
        <p>Dalam kunjungannya, Gubernur menekankan bahwa kualitas infrastruktur menjadi kunci utama kenyamanan wisatawan dan efisiensi mobilitas logistik masyarakat lokal.</p>
      `
    },
    {
      id: 102,
      title: "Kontingen NTB Targetkan Masuk 10 Besar di Ajang PON 2026 Mendatang",
      category: "Olahraga",
      badgeClass: "badge-olahraga",
      date: "31 Agustus 2026",
      time: "13:15 WITA",
      author: "Rian Hidayat",
      tags: ["PON", "Olahraga NTB", "Atlet", "KONI"],
      thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&auto=format&fit=crop&q=80",
      excerpt: "KONI NTB optimis atlet-atlet unggulan dari cabang atletik, tinju, dan panjat tebing mampu mempersembahkan medali emas bagi Bumi Gora.",
      content: `
        <p><strong>Mataram</strong> — Komite Olahraga Nasional Indonesia (KONI) Provinsi NTB terus menggenjot pemusatan latihan daerah bagi para atlet yang dipersiapkan menuju PON 2026.</p>
      `
    },
    {
      id: 103,
      title: "Polda NTB Ungkap Sindikat Penyelundupan Kayu Ilegal Lintas Pulau di Sumbawa",
      category: "Hukrim",
      badgeClass: "badge-hukrim",
      date: "31 Agustus 2026",
      time: "11:15 WITA",
      author: "Dian Pratama",
      tags: ["Polda NTB", "Hukrim", "Sumbawa", "Illegal Logging"],
      thumb: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&auto=format&fit=crop&q=80",
      excerpt: "Aparat kepolisian berhasil menyita puluhan meter kubik kayu sonokeling hasil pembalakan liar di kawasan hutan lindung Sumbawa.",
      content: `
        <p><strong>Mataram</strong> — Tim Ditreskrimsus Polda NTB berhasil membongkar sindikat perdagangan kayu ilegal lintas pulau yang beroperasi di wilayah hutan lindung Kabupaten Sumbawa.</p>
      `
    },
    {
      id: 104,
      title: "DPRD NTB Resmi Sahkan Raperda Perlindungan Lahan Pertanian Berkelanjutan",
      category: "Politik",
      badgeClass: "badge-politik",
      date: "31 Agustus 2026",
      time: "09:40 WITA",
      author: "Siti Rahma",
      tags: ["DPRD NTB", "Politik", "Pertanian", "Raperda"],
      thumb: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=900&auto=format&fit=crop&q=80",
      excerpt: "Sidang paripurna DPRD NTB menyetujui rancangan peraturan daerah guna membendung alih fungsi lahan sawah produktif di Pulau Lombok dan Sumbawa.",
      content: `
        <p><strong>Mataram</strong> — Sidang paripurna DPRD NTB resmi menetapkan Perda perlindungan sawah produktif demi menjaga kedaulatan pangan NTB.</p>
      `
    },
    {
      id: 105,
      title: "Inovasi Siswa SMK Lombok Timur Ciptakan Prototipe Motor Bertenaga Surya",
      category: "Pendidikan",
      badgeClass: "badge-pendidikan",
      date: "30 Agustus 2026",
      time: "16:20 WITA",
      author: "M. Faisal",
      tags: ["Pendidikan", "SMK", "Inovasi", "Lombok Timur"],
      thumb: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900&auto=format&fit=crop&q=80",
      excerpt: "Siswa jurusan teknik otomotif berhasil merakit prototipe kendaraan ramah lingkungan dengan memanfaatkan sel surya berdaya jangkau 60 km.",
      content: `
        <p><strong>Selong</strong> — Siswa-siswi SMK di Lombok Timur berhasil meluncurkan prototipe motor listrik ramah lingkungan bertenaga surya.</p>
      `
    }
  ],

  // 5 Berita tiap kategori sesuai susunan navigasi
  categorySections: [
    {
      slug: "ntb",
      name: "NTB",
      badgeClass: "badge-umum",
      articles: [
        {
          id: 201,
          title: "Revitalisasi Ruang Terbuka Hijau Kota Mataram Sasar Kawasan Udayana",
          date: "31 Agustus 2026",
          time: "15:00 WITA",
          thumb: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&auto=format&fit=crop&q=80",
          excerpt: "Pemerintah Kota Mataram mempercantik trotoar dan fasilitas ramah anak di sepanjang Jalan Udayana guna meningkatkan kenyamanan ruang publik perkotaan."
        },
        {
          id: 202,
          title: "Petani Jagung di Dompu Mulai Memasuki Musim Tanam Kedua dengan Bibit Unggul",
          date: "30 Agustus 2026",
          time: "14:10 WITA",
          thumb: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
          excerpt: "Dinas Pertanian Dompu menyalurkan ribuan kantong bibit varietas tahan cuaca kering."
        },
        {
          id: 203,
          title: "Pesona Tiga Gili di Lombok Utara Tarik Ratusan Wisatawan Mancanegara Tiap Hari",
          date: "29 Agustus 2026",
          time: "12:30 WITA",
          thumb: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80",
          excerpt: "Tingkat hunian kamar hotel di Gili Trawangan mencapai 85 persen pada akhir pekan ini."
        },
        {
          id: 204,
          title: "Pemkab Sumbawa Barat Salurkan Bantuan Alat Tangkap Modern untuk Nelayan",
          date: "28 Agustus 2026",
          time: "10:00 WITA",
          thumb: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80",
          excerpt: "Dukungan armada perahu dan mesin perikanan diserahkan langsung oleh Bupati KSB."
        },
        {
          id: 205,
          title: "Tradisi Pacuan Kuda Tradisional di Bima Tetap Jadi Magnet Wisata Budaya",
          date: "27 Agustus 2026",
          time: "09:15 WITA",
          thumb: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
          excerpt: "Penyelenggaraan pacuan kuda di Bima berlangsung meriah dan dipadati warga setempat."
        }
      ]
    },
    {
      slug: "ekonomi",
      name: "Ekonomi",
      badgeClass: "badge-ekonomi",
      articles: [
        {
          id: 1,
          title: "Gubernur NTB Tinjau Kesiapan Infrastruktur Jalan Menuju Sirkuit Mandalika",
          date: "31 Agustus 2026",
          time: "14:30 WITA",
          thumb: "https://images.unsplash.com/photo-1578874691223-a49262e0c94f?w=800&auto=format&fit=crop&q=80",
          excerpt: "Pemerintah Provinsi NTB memastikan percepatan pengerjaan akses jalan utama penunjang pariwisata Mandalika tuntas sebelum agenda internasional berlangsung."
        },
        {
          id: 6,
          title: "Harga Cabai Rawit di Pasar Tradisional Mataram Mulai Berangsur Turun",
          date: "28 Agustus 2026",
          time: "08:15 WITA",
          thumb: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
          excerpt: "Pasokan melimpah dari sentra panen Lombok Timur membuat harga komoditas cabai kembali terjangkau."
        },
        {
          id: 301,
          title: "Pariwisata Desa Sade Alami Lonjakan Kunjungan Sebesar 25 Persen",
          date: "27 Agustus 2026",
          time: "11:20 WITA",
          thumb: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop&q=80",
          excerpt: "Pelaku UMKM tenun ikat tradisional Sasak merasakan dampak positif peningkatan kunjungan turis."
        },
        {
          id: 302,
          title: "Bank NTB Syariah Catat Pertumbuhan Aset Dua Digit pada Semester Pertama 2026",
          date: "26 Agustus 2026",
          time: "13:40 WITA",
          thumb: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80",
          excerpt: "Kinerja positif didorong oleh ekspansi pembiayaan modal kerja UMKM di kabupaten/kota NTB."
        },
        {
          id: 303,
          title: "Investasi Pabrik Pengolahan Rumput Laut Siap Beroperasi di Teluk Saleh Sumbawa",
          date: "25 Agustus 2026",
          time: "16:00 WITA",
          thumb: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80",
          excerpt: "Fasilitas hilirisasi rumput laut ini diharapkan mampu menyerap ratusan tenaga kerja lokal."
        }
      ]
    },
    {
      slug: "politik",
      name: "Politik",
      badgeClass: "badge-politik",
      articles: [
        {
          id: 3,
          title: "DPRD NTB Sahkan Raperda Perlindungan Lahan Pertanian Berkelanjutan",
          date: "31 Agustus 2026",
          time: "09:40 WITA",
          thumb: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
          excerpt: "Sidang paripurna DPRD NTB menyetujui rancangan peraturan daerah guna membendung alih fungsi lahan sawah produktif di Pulau Lombok dan Sumbawa."
        },
        {
          id: 8,
          title: "KPU NTB Siapkan Simulasi Pemilihan Kepala Daerah di Wilayah Terpencil",
          date: "26 Agustus 2026",
          time: "10:30 WITA",
          thumb: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&auto=format&fit=crop&q=80",
          excerpt: "Komisi Pemilihan Umum NTB memetakan tantangan distribusi logistik surat suara di pulau-pulau terluar."
        },
        {
          id: 401,
          title: "Bawaslu NTB Luncurkan Gerakan Partisipatif Awasi Kampanye Digital",
          date: "25 Agustus 2026",
          time: "14:20 WITA",
          thumb: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&auto=format&fit=crop&q=80",
          excerpt: "Masyarakat diajak aktif melaporkan penyebaran hoaks dan ujaran kebencian di media sosial."
        },
        {
          id: 402,
          title: "Gubernur dan Pimpinan Parpol Sepakat Jaga Kondusivitas Menuju Pilkada Serentak",
          date: "24 Agustus 2026",
          time: "16:50 WITA",
          thumb: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&auto=format&fit=crop&q=80",
          excerpt: "Deklarasi damai ditandatangani oleh seluruh perwakilan pimpinan partai politik se-NTB."
        },
        {
          id: 403,
          title: "Komisi I DPRD NTB Uji Kelayakan Calon Anggota Komisi Penyiaran Daerah",
          date: "23 Agustus 2026",
          time: "11:10 WITA",
          thumb: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80",
          excerpt: "Sebanyak 14 peserta mengikuti tahapan fit and proper test di ruang sidang dewan."
        }
      ]
    },
    {
      slug: "hukrim",
      name: "Hukum dan Kriminal",
      badgeClass: "badge-hukrim",
      articles: [
        {
          id: 2,
          title: "Polda NTB Ungkap Jaringan Penyelundupan Kayu Ilegal di Sumbawa",
          date: "31 Agustus 2026",
          time: "11:15 WITA",
          thumb: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
          excerpt: "Aparat kepolisian berhasil menyita puluhan meter kubik kayu sonokeling hasil pembalakan liar di kawasan hutan lindung Sumbawa."
        },
        {
          id: 7,
          title: "Kejari Mataram Tingkatkan Penyelidikan Dugaan Penyelewengan Bansos",
          date: "27 Agustus 2026",
          time: "13:45 WITA",
          thumb: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
          excerpt: "Penyidik Kejaksaan memeriksa 12 saksi terkait dugaan penyaluran bansos yang tidak tepat sasaran."
        },
        {
          id: 501,
          title: "Polresta Mataram Ringkus Residivis Pencurian Sepeda Motor di Kos Mahasiswa",
          date: "25 Agustus 2026",
          time: "19:30 WITA",
          thumb: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80",
          excerpt: "Pelaku diamankan bersama barang bukti dua unit motor matik hasil kejahatan di wilayah Sekarbela."
        },
        {
          id: 502,
          title: "BNNP NTB Musnahkan Narkotika Jenis Sabu Senilai Rp1,2 Miliar",
          date: "24 Agustus 2026",
          time: "10:15 WITA",
          thumb: "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&auto=format&fit=crop&q=80",
          excerpt: "Barang bukti dimusnahkan dengan mesin insinerator disaksikan oleh perwakilan kejaksaan dan pengadilan."
        },
        {
          id: 503,
          title: "Gakkum KLHK Limpahkan Berkas Tambang Emas Tanpa Izin di Sekotong ke Jaksa",
          date: "22 Agustus 2026",
          time: "14:40 WITA",
          thumb: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=600&auto=format&fit=crop&q=80",
          excerpt: "Dua tersangka pemilik gelondong emas ilegal terancam hukuman pidana penjara 10 tahun."
        }
      ]
    },
    {
      slug: "pendidikan",
      name: "Pendidikan",
      badgeClass: "badge-pendidikan",
      articles: [
        {
          id: 4,
          title: "Inovasi SMK di Lombok Timur Ciptakan Motor Listrik Bertenaga Surya",
          date: "30 Agustus 2026",
          time: "16:20 WITA",
          thumb: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80",
          excerpt: "Siswa jurusan teknik otomotif berhasil merakit prototipe kendaraan ramah lingkungan dengan memanfaatkan sel surya fleksibel."
        },
        {
          id: 601,
          title: "Universitas Mataram Buka Tiga Program Studi Baru Berbasis Sains Lingkungan",
          date: "29 Agustus 2026",
          time: "09:30 WITA",
          thumb: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80",
          excerpt: "Prodi baru disiapkan untuk merespons kebutuhan SDM ahli transisi energi dan kelautan."
        },
        {
          id: 602,
          title: "Program Beasiswa NTB Batch 2026 Kirim 50 Mahasiswa ke Kampus Unggulan Dunia",
          date: "28 Agustus 2026",
          time: "14:00 WITA",
          thumb: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
          excerpt: "Para awardee akan menempuh studi magister dan doktoral di bidang kedokteran dan teknik pangan."
        },
        {
          id: 603,
          title: "Dinas Pendidikan NTB Distribusikan Bantuan Komputer untuk SD di Pelosok Sumbawa",
          date: "27 Agustus 2026",
          time: "11:15 WITA",
          thumb: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80",
          excerpt: "Dukungan perangkat digital ditujukan guna memperlancar Asesmen Nasional Berbasis Komputer."
        },
        {
          id: 604,
          title: "Guru Penggerak di Lombok Tengah Kenalkan Model Belajar Kontekstual Alam",
          date: "26 Agustus 2026",
          time: "08:45 WITA",
          thumb: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80",
          excerpt: "Metode ini terbukti menaikkan antusiasme siswa dalam memahami konsep sains dan matematika."
        }
      ]
    },
    {
      slug: "olahraga",
      name: "Olahraga",
      badgeClass: "badge-olahraga",
      articles: [
        {
          id: 102,
          title: "Kontingen NTB Targetkan Masuk 10 Besar di Ajang PON 2026 Mendatang",
          date: "31 Agustus 2026",
          time: "13:15 WITA",
          thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
          excerpt: "KONI NTB optimis atlet-atlet unggulan dari cabang atletik, tinju, dan panjat tebing mampu mempersembahkan medali emas bagi Bumi Gora."
        },
        {
          id: 701,
          title: "Pelari Cepat Lalu Muhammad Zohri Sabet Emas di Kejuaraan Atletik Terbuka",
          date: "29 Agustus 2026",
          time: "17:30 WITA",
          thumb: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&auto=format&fit=crop&q=80",
          excerpt: "Sprinter asal Lombok Utara tersebut mencatatkan waktu 10,18 detik pada nomor 100 meter putra."
        },
        {
          id: 702,
          title: "GOR Turida Mataram Dipadati Penonton Kejuaraan Bola Voli Antar-Klub Se-NTB",
          date: "28 Agustus 2026",
          time: "20:00 WITA",
          thumb: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&auto=format&fit=crop&q=80",
          excerpt: "Turnamen voli bergengsi ini memperebutkan piala bergilir Gubernur NTB dengan total hadiah puluhan juta."
        },
        {
          id: 703,
          title: "Pembalap Muda Asal Mataram Lolos Seleksi Balap Motor Internasional di Sepang",
          date: "27 Agustus 2026",
          time: "15:20 WITA",
          thumb: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop&q=80",
          excerpt: "Rider bertalenta usia 17 tahun ini bakal berlaga di kategori Moto3 junior musim depan."
        },
        {
          id: 704,
          title: "Komunitas Sepeda Lombok Gelar Tour de Sembalun Jelajahi Kaki Gunung Rinjani",
          date: "25 Agustus 2026",
          time: "07:30 WITA",
          thumb: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&auto=format&fit=crop&q=80",
          excerpt: "Ratusan pegowes dari berbagai provinsi menaklukkan rute tanjakan ekstrem pusuk Sembalun."
        }
      ]
    },
    {
      slug: "budaya",
      name: "Budaya & Hiburan",
      badgeClass: "badge-umum",
      articles: [
        {
          id: 5,
          title: "Festival Pesona Senggigi Kembali Digelar, Angkat Seni Tradisi Sasak",
          date: "29 Agustus 2026",
          time: "19:00 WITA",
          thumb: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
          excerpt: "Ribuan penonton memadati kawasan Pantai Senggigi untuk menyaksikan atraksi Gendang Beleq dan parade busana adat Nusantara."
        },
        {
          id: 801,
          title: "Film Dokumenter Kearifan Lokal Tambora Masuk Nominasi Festival Film Indonesia",
          date: "28 Agustus 2026",
          time: "18:20 WITA",
          thumb: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
          excerpt: "Karya sineas muda Sumbawa ini memotret keharmonisan masyarakat adat dengan alam pegunungan."
        },
        {
          id: 802,
          title: "Peluncuran Buku Antologi Puisi Penyair NTB Catat Rekor Kunjungan Pesta Literasi",
          date: "27 Agustus 2026",
          time: "16:45 WITA",
          thumb: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
          excerpt: "Taman Budaya NTB menjadi saksi perjumpaan sastrawan senior dan generasi penulis milenial."
        },
        {
          id: 803,
          title: "Pementasan Wayang Sasak di Narmada Tampilkan Dalang Cilik Berbakat",
          date: "26 Agustus 2026",
          time: "20:30 WITA",
          thumb: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
          excerpt: "Regenerasi kesenian tradisional wayang kulit sasak terus dirawat oleh sanggar seni desa."
        },
        {
          id: 804,
          title: "Komunitas Sinema Mataram Gelar Nobar dan Diskusi Film Pendek Garapan Lokal",
          date: "24 Agustus 2026",
          time: "19:15 WITA",
          thumb: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
          excerpt: "Tiga film indie bertema dinamika sosial kota Mataram mendapat sambutan hangat penonton."
        }
      ]
    }
  ],

  // Komentar bergambar (5 komentar di berita lainnya dalam bentuk thumbnail)
  comments: [
    {
      author: "Hendra Wijaya",
      articleId: 1,
      articleTitle: "Gubernur NTB Tinjau Kesiapan Infrastruktur Jalan Menuju Sirkuit Mandalika",
      thumb: "https://images.unsplash.com/photo-1578874691223-a49262e0c94f?w=300&auto=format&fit=crop&q=80",
      time: "31 Agustus 2026, 15:10 WITA",
      text: "Semoga jalan bypass dan penerangan lampu selesai tepat waktu, sangat membantu warga sekitar!"
    },
    {
      author: "Rian Kurniawan",
      articleId: 102,
      articleTitle: "Kontingen NTB Targetkan Masuk 10 Besar di Ajang PON 2026 Mendatang",
      thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&auto=format&fit=crop&q=80",
      time: "31 Agustus 2026, 14:05 WITA",
      text: "Semangat atlet Bumi Gora! Kami bangga dengan perjuangan cabor atletik dan tinju NTB."
    },
    {
      author: "Nurul Hidayati",
      articleId: 2,
      articleTitle: "Polda NTB Ungkap Jaringan Penyelundupan Kayu Ilegal di Sumbawa",
      thumb: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&auto=format&fit=crop&q=80",
      time: "31 Agustus 2026, 12:40 WITA",
      text: "Tindak tegas para pelaku illegal logging, hutan NTB harus kita lindungi demi masa depan anak cucu."
    },
    {
      author: "Lalu Suparlan",
      articleId: 4,
      articleTitle: "Inovasi SMK di Lombok Timur Ciptakan Motor Listrik Bertenaga Surya",
      thumb: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=300&auto=format&fit=crop&q=80",
      time: "30 Agustus 2026, 17:15 WITA",
      text: "Karya anak muda NTB luar biasa. Perlu dukungan modal dari pemda agar bisa diproduksi massal."
    },
    {
      author: "Baiq Anggun",
      articleId: 5,
      articleTitle: "Festival Pesona Senggigi Kembali Digelar, Angkat Seni Tradisi Sasak",
      thumb: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&auto=format&fit=crop&q=80",
      time: "29 Agustus 2026, 21:00 WITA",
      text: "Atraksi Gendang Beleq semalam sangat spektakuler, bangga sekali jadi orang Lombok."
    }
  ],

  // Flattened all articles for search & general lookup
  articles: [],

  categoryMeta: {
    "ntb": {
      name: "NTB",
      slug: "ntb",
      badgeClass: "badge-umum",
      desc: "Warta daerah terkini dari pulau Lombok dan Sumbawa, Provinsi Nusa Tenggara Barat."
    },
    "mataram": {
      name: "Mataram",
      slug: "mataram",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Kumpulan berita teraktual seputar pembangunan, masyarakat, dan pemerintahan Kota Mataram."
    },
    "ekonomi": {
      name: "Ekonomi",
      slug: "ekonomi",
      badgeClass: "badge-ekonomi",
      desc: "Informasi seputar perkembangan ekonomi daerah, investasi, pasar, pariwisata, dan UMKM di Nusa Tenggara Barat."
    },
    "politik": {
      name: "Politik",
      slug: "politik",
      badgeClass: "badge-politik",
      desc: "Kabar perpolitikan, kebijakan legislatif, eksekutif, dan dinamika pemilu di NTB."
    },
    "hukrim": {
      name: "Hukum dan Kriminal",
      slug: "hukrim",
      badgeClass: "badge-hukrim",
      desc: "Berita seputar penegakan hukum, kasus kriminal, pengadilan, dan ketertiban masyarakat di NTB."
    },
    "pendidikan": {
      name: "Pendidikan",
      slug: "pendidikan",
      badgeClass: "badge-pendidikan",
      desc: "Perkembangan dunia pendidikan sekolah, kampus, beasiswa, dan inovasi generasi muda NTB."
    },
    "olahraga": {
      name: "Olahraga",
      slug: "olahraga",
      badgeClass: "badge-olahraga",
      desc: "Kabar prestasi atlet NTB, PON, sepak bola, atletik, dan perkembangan dunia olahraga daerah."
    },
    "budaya": {
      name: "Budaya & Hiburan",
      slug: "budaya",
      badgeClass: "badge-umum",
      desc: "Liputan seni tradisi, film, buku, festival budaya, dan hiburan di Nusa Tenggara Barat."
    },
    "lombok-barat": {
      name: "Lombok Barat",
      slug: "lombok-barat",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Kumpulan berita terkini seputar pembangunan, masyarakat, dan pariwisata di Kabupaten Lombok Barat."
    },
    "lombok-tengah": {
      name: "Lombok Tengah",
      slug: "lombok-tengah",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Informasi teraktual dari Kabupaten Lombok Tengah, kawasan KEK Mandalika dan sekitarnya."
    },
    "lombok-timur": {
      name: "Lombok Timur",
      slug: "lombok-timur",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Kabar seputar pemerintahan, sosial budaya, dan potensi daerah Kabupaten Lombok Timur."
    },
    "lombok-utara": {
      name: "Lombok Utara",
      slug: "lombok-utara",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Warta terkini dari Bumi Tioq Tata Tunaq, destinasi Tiga Gili, dan Gunung Rinjani."
    },
    "sumbawa-barat": {
      name: "Sumbawa Barat",
      slug: "sumbawa-barat",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Berita pembangunan, pertambangan, dan kehidupan masyarakat Kabupaten Sumbawa Barat."
    },
    "sumbawa": {
      name: "Sumbawa",
      slug: "sumbawa",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Liputan mendalam tentang potensi agro dan dinamika masyarakat Kabupaten Sumbawa."
    },
    "dompu": {
      name: "Dompu",
      slug: "dompu",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Informasi seputar Kabupaten Dompu, pertanian jagung, Tambora, dan kabar daerah lainnya."
    },
    "bima": {
      name: "Bima",
      slug: "bima",
      badgeClass: "badge-umum",
      parent: "NTB",
      desc: "Berita terpercaya dari Kota dan Kabupaten Bima, ujung timur Provinsi NTB."
    },
    "film": {
      name: "Film",
      slug: "film",
      badgeClass: "badge-umum",
      parent: "Budaya & Hiburan",
      desc: "Ulasan film, sinema lokal, sineas NTB, dan perkembangan industri hiburan layar lebar."
    },
    "buku": {
      name: "Buku",
      slug: "buku",
      badgeClass: "badge-umum",
      parent: "Budaya & Hiburan",
      desc: "Resensi buku, literasi daerah, peluncuran karya sastra, dan penulis Nusa Tenggara Barat."
    }
  }
};

// Flatten all articles for general lookup and Category helper
(function() {
  const map = new Map();
  SUARA_NTB_DATA.headlines.forEach(a => map.set(a.id, a));
  SUARA_NTB_DATA.categorySections.forEach(sec => {
    sec.articles.forEach(a => {
      if (!map.has(a.id)) {
        map.set(a.id, {
          ...a,
          category: sec.name,
          badgeClass: sec.badgeClass,
          tags: [sec.name, "NTB"],
          author: "Redaksi SuaraNTB"
        });
      }
    });
  });
  SUARA_NTB_DATA.articles = Array.from(map.values());

  // Function to provide 11 articles for any category (1 featured + 5 initial + 5 load more)
  SUARA_NTB_DATA.getCategoryArticles = function(key) {
    const norm = (key || 'ekonomi').toLowerCase();
    const meta = SUARA_NTB_DATA.categoryMeta[norm] || { name: norm.toUpperCase() };
    const name = meta.name;

    let matched = SUARA_NTB_DATA.articles.filter(a => {
      return (a.category && a.category.toLowerCase().includes(norm)) ||
             (a.tags && a.tags.some(t => t.toLowerCase().includes(norm))) ||
             (a.title && a.title.toLowerCase().includes(name.toLowerCase()));
    });

    // Ensure we have at least 11 articles so "Tampilkan Lebih Banyak" loads 5 more and then disappears
    const seedThumbs = [
      "https://images.unsplash.com/photo-1578874691223-a49262e0c94f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&auto=format&fit=crop&q=80"
    ];

    const fallbackTitles = [
      `Perkembangan Terkini Pembangunan Sektor ${name} di Nusa Tenggara Barat`,
      `Pemerintah Daerah Mataram Dorong Penguatan Kolaborasi Bidang ${name}`,
      `Gubernur NTB Tinjau Langsung Program Akselerasi Peningkatan Layanan ${name}`,
      `DPRD NTB Apresiasi Capaian Kinerja dan Prestasi Bidang ${name}`,
      `Kunjungan Kerja Tim Ahli Bahas Potensi Pengembangan ${name} Daerah`,
      `Sosialisasi Kebijakan Baru Sektor ${name} Digelar di Lombok Barat`,
      `Antusiasme Warga Sambut Kegiatan Edukasi dan Pameran ${name}`,
      `Penguatan Ekosistem dan Sinergi Stakeholder Demi Kemajuan ${name} NTB`,
      `Rapat Evaluasi Triwulan Bidang ${name} Catat Progres Signifikan`,
      `Inisiatif Komunitas Generasi Muda NTB Berkontribusi Nyata pada ${name}`,
      `Harapan Masa Depan Lebih Baik Melalui Penguatan Sektor ${name} di Bumi Gora`
    ];

    while (matched.length < 11) {
      const idx = matched.length;
      matched.push({
        id: 9000 + idx,
        title: fallbackTitles[idx] || `Warta Terkini Seputar ${name} Bagian #${idx + 1}`,
        date: `${28 - (idx % 7)} Agustus 2026`,
        time: "10:00 WITA",
        thumb: seedThumbs[idx % seedThumbs.length],
        excerpt: `Berita informatif mengenai langkah strategis dan kontribusi kemajuan ${name} bagi seluruh lapisan masyarakat di Nusa Tenggara Barat.`,
        category: name
      });
    }

    return matched.slice(0, 11);
  };
})();
