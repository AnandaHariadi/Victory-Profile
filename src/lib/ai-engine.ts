// ============================================
// AI & ML ENGINE - ENHANCED SMART CHATBOT
// ============================================

// --- COMPREHENSIVE KNOWLEDGE BASE ---
// Organized by categories for better matching

interface KnowledgeEntry {
  keywords: string[];
  patterns: RegExp[];
  response: string;
  category: string;
  priority: number; // Higher = matched first
}

const knowledgeBase: KnowledgeEntry[] = [
  // ===== GREETINGS =====
  {
    keywords: ['halo', 'hai', 'hello', 'hi', 'hey', 'pagi', 'siang', 'sore', 'malam', 'assalamualaikum', 'selamat'],
    patterns: [/^(halo|hai|hi|hello|hey)/i, /selamat\s*(pagi|siang|sore|malam)/i],
    response: 'Halo! Saya Vira, Asisten Virtual PT Victory International Futures. Saya siap membantu Anda dengan informasi seputar trading, produk investasi, pembukaan akun, dan layanan kami lainnya. Silakan tanyakan apa saja!',
    category: 'greeting',
    priority: 1,
  },
  {
    keywords: ['terima kasih', 'thanks', 'makasih', 'tq', 'thx'],
    patterns: [/t(e|a)rima\s*kasih/i, /makasih/i],
    response: 'Sama-sama! Senang bisa membantu Anda. Jika ada pertanyaan lain, jangan ragu untuk bertanya ya. Selamat berinvestasi bersama Victory International Futures!',
    category: 'greeting',
    priority: 1,
  },

  // ===== COMPANY INFO =====
  {
    keywords: ['victory', 'perusahaan', 'tentang', 'profil', 'siapa', 'apa itu vif', 'company'],
    patterns: [/tentang\s*(victory|perusahaan|kami)/i, /apa\s*itu\s*(victory|vif)/i, /siapa\s*(victory|kalian|kamu)/i],
    response: 'PT Victory International Futures (VIF) adalah perusahaan pialang berjangka resmi yang didirikan tahun 2003 di Surabaya. Kami terdaftar dan diawasi oleh BAPPEBTI (Badan Pengawas Perdagangan Berjangka Komoditi). Dengan pengalaman lebih dari 20 tahun, kami melayani ribuan nasabah untuk trading Forex, Gold, Silver, Oil, dan Index dengan teknologi platform terdepan.',
    category: 'company',
    priority: 5,
  },
  {
    keywords: ['alamat', 'kantor', 'lokasi', 'dimana', 'cabang', 'di mana'],
    patterns: [/dimana|di\s*mana/i, /alamat/i, /kantor/i, /lokasi/i],
    response: 'Kantor pusat kami berlokasi di Jl. Diponegoro No. 153, Darmo, Surabaya 60241. Kami juga memiliki beberapa kantor cabang di kota-kota besar di Jawa dan Bali. Untuk informasi cabang terdekat, silakan hubungi kami di (031) 9924 1688.',
    category: 'company',
    priority: 4,
  },
  {
    keywords: ['jam', 'operasional', 'buka', 'tutup', 'waktu', 'kapan'],
    patterns: [/jam\s*(operasional|kerja|buka)/i, /kapan\s*buka/i],
    response: 'Kantor kami beroperasi Senin - Jumat, pukul 09:00 - 18:00 WIB. Sedangkan pasar trading aktif 24 jam dari Senin (pukul 04:00 WIB) sampai Sabtu (pukul 04:00 WIB). Jadi Anda bisa trading kapan saja selama hari kerja!',
    category: 'company',
    priority: 4,
  },
  {
    keywords: ['kontak', 'hubungi', 'telepon', 'telp', 'email', 'whatsapp', 'wa', 'cs'],
    patterns: [/hubungi/i, /kontak/i, /customer\s*service/i, /nomor/i],
    response: 'Anda bisa menghubungi kami melalui:\n• Telepon: (031) 9924 1688\n• Email: info@vif.co.id\n• Instagram: @victoryinternationalfutures\n• Kunjungi langsung: Jl. Diponegoro No. 153, Darmo, Surabaya\n\nTim Customer Service kami siap melayani Anda pada jam kerja (Senin-Jumat, 09:00-18:00 WIB).',
    category: 'company',
    priority: 4,
  },

  // ===== ACCOUNT OPENING =====
  {
    keywords: ['buka akun', 'daftar', 'register', 'pendaftaran', 'membuat akun', 'bikin akun', 'cara daftar', 'gimana daftar'],
    patterns: [/buka\s*akun/i, /cara\s*(daftar|buka|buat)/i, /gimana\s*(daftar|buka)/i, /bagaimana\s*(daftar|buka|cara)/i],
    response: 'Untuk membuka akun di Victory International Futures, ikuti langkah berikut:\n\n1️⃣ Klik tombol "Buka Akun" di halaman utama\n2️⃣ Isi data diri lengkap (KTP, NPWP opsional)\n3️⃣ Pilih tipe akun yang sesuai\n4️⃣ Verifikasi identitas\n\nProses verifikasi memakan waktu kurang dari 1×24 jam kerja. Setelah akun aktif, Anda bisa langsung melakukan deposit dan memulai trading!',
    category: 'account',
    priority: 8,
  },
  {
    keywords: ['syarat', 'persyaratan', 'dokumen', 'ktp', 'npwp', 'berkas'],
    patterns: [/syarat/i, /persyaratan/i, /dokumen\s*apa/i],
    response: 'Persyaratan untuk membuka akun trading:\n\n• KTP (Warga Negara Indonesia, usia min. 21 tahun)\n• NPWP (opsional namun disarankan)\n• Buku tabungan / rekening bank aktif\n• Alamat email aktif\n• Nomor HP aktif\n\nSemua proses bisa dilakukan secara online melalui website kami. Tidak perlu datang ke kantor!',
    category: 'account',
    priority: 6,
  },
  {
    keywords: ['tipe akun', 'jenis akun', 'akun apa saja', 'macam akun'],
    patterns: [/tipe\s*akun/i, /jenis\s*akun/i, /akun\s*apa/i],
    response: 'Kami menyediakan beberapa tipe akun:\n\n• Akun Reguler - Modal min. USD 500, leverage hingga 1:500, spread mulai 0.1 pip\n• Akun Mini - Modal min. USD 100, cocok untuk pemula\n• Akun Demo - Modal virtual, gratis untuk latihan\n\nSetiap akun mendapatkan akses penuh ke semua instrumen trading dan platform MetaTrader. Hubungi tim kami untuk rekomendasi akun terbaik sesuai profil Anda!',
    category: 'account',
    priority: 6,
  },

  // ===== DEPOSIT & WITHDRAWAL =====
  {
    keywords: ['deposit', 'setor', 'modal', 'minimal', 'minimum', 'dana awal'],
    patterns: [/deposit/i, /modal\s*(minimal|minimum|awal)/i, /berapa\s*(modal|deposit|dana)/i, /minimal\s*(deposit|modal)/i],
    response: 'Informasi deposit di Victory International Futures:\n\n• Akun Reguler: Minimal deposit USD 500 (setara ± Rp 7.5 juta)\n• Akun Mini: Minimal deposit USD 100 (setara ± Rp 1.5 juta)\n• Akun Demo: Gratis (modal virtual)\n\nDeposit dapat dilakukan melalui transfer bank ke rekening Segregated Account resmi kami. Dana diproses pada hari yang sama jika diterima sebelum jam 14:00 WIB.',
    category: 'finance',
    priority: 7,
  },
  {
    keywords: ['withdraw', 'tarik dana', 'penarikan', 'cairkan', 'wd', 'withdrawal'],
    patterns: [/withdraw/i, /tarik\s*dana/i, /penarikan/i, /cairkan/i],
    response: 'Proses penarikan dana (withdrawal) sangat mudah:\n\n• Ajukan melalui Client Area (platform online)\n• Minimal penarikan: USD 50\n• Diproses pada hari yang sama jika diajukan sebelum jam 11:00 WIB\n• Dana ditransfer langsung ke rekening bank terdaftar Anda\n• Tidak ada biaya penarikan\n\nKeamanan dana Anda dijamin 100% karena disimpan di rekening terpisah (Segregated Account).',
    category: 'finance',
    priority: 7,
  },
  {
    keywords: ['bayar', 'pembayaran', 'transfer', 'bank', 'rekening'],
    patterns: [/metode\s*(bayar|pembayaran)/i, /transfer\s*bank/i, /rekening/i],
    response: 'Metode deposit yang tersedia:\n\n• Transfer Bank Lokal (BCA, Mandiri, BRI, BNI, dll.)\n• Wire Transfer internasional\n\nSemua dana disetorkan ke Segregated Account resmi yang terpisah dari rekening operasional perusahaan, sesuai regulasi BAPPEBTI. Ini menjamin keamanan dana nasabah 100%.',
    category: 'finance',
    priority: 5,
  },

  // ===== PRODUCTS: FOREX =====
  {
    keywords: ['forex', 'mata uang', 'currency', 'valas', 'pasangan mata uang', 'pair'],
    patterns: [/forex/i, /mata\s*uang/i, /currency/i, /pair/i, /apa\s*itu\s*forex/i],
    response: 'Forex (Foreign Exchange) adalah perdagangan mata uang asing, pasar keuangan terbesar di dunia dengan volume harian lebih dari $6 triliun.\n\nDi Victory International Futures, Anda bisa trading 50+ pasangan mata uang:\n• Major: EUR/USD, GBP/USD, USD/JPY\n• Minor: EUR/GBP, AUD/NZD\n• Exotic: USD/SGD, USD/THB\n\nSpread mulai 0.1 pip, leverage hingga 1:500, trading 24 jam (Senin-Jumat).',
    category: 'product',
    priority: 6,
  },

  // ===== PRODUCTS: GOLD =====
  {
    keywords: ['gold', 'emas', 'xau', 'xauusd', 'logam mulia'],
    patterns: [/gold/i, /emas/i, /xau/i],
    response: 'Trading Emas (XAU/USD) adalah produk paling populer di Victory International Futures!\n\nKeunggulan trading Gold di VIF:\n• Spread mulai 0.3 pip (sangat kompetitif)\n• Leverage hingga 1:200\n• Eksekusi < 1 detik\n• Trading 24 jam (Senin-Jumat)\n• Safe haven asset — cocok di segala kondisi pasar\n\nEmas sangat cocok untuk trader pemula maupun profesional karena volatilitasnya yang menguntungkan.',
    category: 'product',
    priority: 7,
  },

  // ===== PRODUCTS: SILVER =====
  {
    keywords: ['silver', 'perak', 'xag'],
    patterns: [/silver/i, /perak/i, /xag/i],
    response: 'Trading Perak (XAG/USD) di Victory International Futures:\n\n• Spread mulai 0.5 pip\n• Leverage hingga 1:200\n• Trading 24 jam (Senin-Jumat)\n• Volatilitas tinggi — potensi profit besar\n• Korelasi dengan emas — mudah dianalisis\n• Margin lebih terjangkau dibanding Gold\n\nPerak sangat cocok sebagai diversifikasi portofolio komoditas Anda!',
    category: 'product',
    priority: 6,
  },

  // ===== PRODUCTS: OIL =====
  {
    keywords: ['oil', 'minyak', 'crude', 'wti', 'brent', 'minyak mentah'],
    patterns: [/oil/i, /minyak/i, /crude/i, /wti/i, /brent/i],
    response: 'Trading Minyak Mentah (Crude Oil) di Victory International Futures:\n\n• Spread mulai 0.04\n• Leverage hingga 1:100\n• Trading 22 jam/hari (Senin-Jumat)\n• Komoditas paling aktif diperdagangkan\n• Dipengaruhi geopolitik & supply-demand global\n\nMinyak adalah salah satu instrumen paling dinamis. Cocok untuk trader yang menyukai analisis fundamental dan berita global.',
    category: 'product',
    priority: 6,
  },

  // ===== PRODUCTS: INDEX =====
  {
    keywords: ['index', 'indeks', 'saham', 'dow jones', 'nasdaq', 'nikkei', 'hang seng', 'dax'],
    patterns: [/index/i, /indeks/i, /dow\s*jones/i, /nasdaq/i, /nikkei/i, /hang\s*seng/i],
    response: 'Trading Indeks Saham Global di Victory International Futures:\n\n• Dow Jones (US30), NASDAQ (US100), S&P 500\n• Nikkei (JP225), Hang Seng (HK50)\n• DAX (GER40)\n\nSpread mulai 1.0, leverage hingga 1:200. Anda bisa mendapatkan eksposur ke pasar saham global tanpa harus membeli saham individual. Cocok untuk diversifikasi portofolio!',
    category: 'product',
    priority: 6,
  },

  // ===== SPREAD & FEES =====
  {
    keywords: ['spread', 'biaya', 'komisi', 'fee', 'charge', 'ongkos'],
    patterns: [/spread/i, /biaya\s*(trading|transaksi)/i, /komisi/i, /fee/i, /berapa\s*spread/i],
    response: 'Informasi biaya trading di Victory International Futures:\n\n• Forex Major: Spread mulai 0.1 pip\n• Gold (XAU/USD): Spread mulai 0.3 pip\n• Silver (XAG/USD): Spread mulai 0.5 pip\n• Oil (Crude): Spread mulai 0.04\n• Index: Spread mulai 1.0\n\nKami mengedepankan transparansi — TIDAK ADA biaya tersembunyi, komisi sudah termasuk dalam spread. Anda mendapatkan eksekusi cepat dan harga terbaik!',
    category: 'trading',
    priority: 7,
  },

  // ===== LEVERAGE =====
  {
    keywords: ['leverage', 'daya ungkit', 'margin', 'lot'],
    patterns: [/leverage/i, /margin/i, /berapa\s*leverage/i],
    response: 'Penjelasan Leverage di Victory International Futures:\n\nLeverage adalah "daya ungkit" yang memungkinkan Anda mengendalikan posisi lebih besar dari modal yang Anda miliki.\n\n• Forex: Hingga 1:500\n• Gold & Silver: Hingga 1:200\n• Oil: Hingga 1:100\n• Index: Hingga 1:200\n\nContoh: Dengan leverage 1:500 dan modal $100, Anda bisa mengendalikan posisi senilai $50.000.\n\n⚠️ Penting: Leverage yang tinggi meningkatkan potensi profit SEKALIGUS risiko. Selalu gunakan manajemen risiko (Stop Loss)!',
    category: 'trading',
    priority: 6,
  },

  // ===== SECURITY & REGULATION =====
  {
    keywords: ['aman', 'bappebti', 'penipuan', 'legal', 'regulasi', 'izin', 'resmi', 'terdaftar', 'lisensi', 'scam', 'tipu', 'penipu'],
    patterns: [/aman/i, /bappebti/i, /legal/i, /regulasi/i, /penipuan/i, /scam/i, /apakah\s*(aman|resmi|legal)/i, /terdaftar/i],
    response: 'Keamanan adalah prioritas utama Victory International Futures:\n\n✅ Terdaftar & diawasi penuh oleh BAPPEBTI\n✅ Anggota Bursa Berjangka Jakarta (BBJ)\n✅ Anggota Kliring Berjangka Indonesia (KBI)\n✅ 100% dana nasabah di Segregated Account (rekening terpisah)\n✅ Tidak ada konflik kepentingan\n✅ Audit berkala oleh otoritas\n\nAnda bisa memverifikasi izin kami langsung di website resmi BAPPEBTI. Dana Anda AMAN dan terproteksi sepenuhnya oleh regulasi pemerintah Indonesia.',
    category: 'security',
    priority: 9,
  },
  {
    keywords: ['segregated', 'rekening terpisah', 'dana aman'],
    patterns: [/segregated/i, /rekening\s*terpisah/i],
    response: 'Segregated Account adalah rekening terpisah yang diwajibkan oleh BAPPEBTI. Artinya:\n\n• Dana nasabah 100% dipisahkan dari dana operasional perusahaan\n• Dana hanya bisa ditarik oleh nasabah sendiri\n• Diawasi oleh bank custodian dan BAPPEBTI\n• Perusahaan tidak bisa menggunakan dana nasabah untuk keperluan operasional\n\nIni adalah jaminan keamanan tertinggi untuk investasi Anda!',
    category: 'security',
    priority: 7,
  },

  // ===== PLATFORM =====
  {
    keywords: ['platform', 'metatrader', 'mt4', 'mt5', 'aplikasi', 'software', 'download'],
    patterns: [/platform/i, /metatrader/i, /mt[45]/i, /aplikasi\s*trading/i, /download/i],
    response: 'Victory International Futures menyediakan platform trading kelas dunia:\n\n• MetaTrader 4 (MT4) — Platform paling populer di dunia\n• MetaTrader 5 (MT5) — Versi terbaru dengan fitur lebih lengkap\n• Tersedia untuk: Windows, Mac, iOS (iPhone/iPad), Android\n• WebTrader — Trading langsung dari browser tanpa install\n\nFitur unggulan: Charting canggih, indikator teknikal, Expert Advisor (EA), one-click trading, dan eksekusi < 1 detik!',
    category: 'platform',
    priority: 6,
  },

  // ===== EDUCATION =====
  {
    keywords: ['belajar', 'edukasi', 'pemula', 'tutorial', 'webinar', 'seminar', 'kursus', 'cara trading'],
    patterns: [/belajar/i, /edukasi/i, /pemula/i, /cara\s*trading/i, /tutorial/i, /webinar/i],
    response: 'Victory International Futures menyediakan edukasi komprehensif:\n\n📚 Untuk Pemula:\n• Workshop gratis di kantor kami\n• Tutorial video trading dasar\n• Akun demo gratis untuk latihan\n• One-on-one mentoring\n\n📊 Untuk Trader Lanjutan:\n• Analisis pasar harian\n• Webinar strategi trading\n• Signal trading dari analis profesional\n\nKami percaya edukasi adalah kunci sukses trading. Hubungi kami untuk jadwal workshop terdekat!',
    category: 'education',
    priority: 5,
  },

  // ===== ANALYSIS TYPES =====
  {
    keywords: ['analisis', 'analisa', 'teknikal', 'fundamental', 'signal', 'sinyal', 'prediksi', 'forecast'],
    patterns: [/analis[ia]s?\s*(teknikal|fundamental)/i, /signal/i, /prediksi/i, /forecast/i],
    response: 'Jenis analisis trading yang tersedia:\n\n📊 Analisis Teknikal:\nMenggunakan chart/grafik, indikator (Moving Average, RSI, MACD, Bollinger Bands), dan pola candlestick untuk memprediksi pergerakan harga.\n\n📰 Analisis Fundamental:\nMenganalisis berita ekonomi, kebijakan bank sentral, data GDP, inflasi, dan Non-Farm Payroll untuk memahami arah pasar.\n\nKami menyediakan analisis harian dan signal trading dari tim analis profesional kami. Silakan kunjungi halaman Edukasi untuk informasi lebih lanjut!',
    category: 'education',
    priority: 5,
  },

  // ===== RISK MANAGEMENT =====
  {
    keywords: ['risiko', 'risk', 'stop loss', 'take profit', 'manajemen', 'management', 'rugi', 'loss'],
    patterns: [/risiko/i, /risk/i, /stop\s*loss/i, /take\s*profit/i, /rugi/i, /manajemen\s*risiko/i],
    response: 'Manajemen Risiko adalah kunci sukses trading!\n\nTips manajemen risiko dari VIF:\n\n1. Gunakan Stop Loss di setiap posisi — batasi kerugian Anda\n2. Terapkan aturan 1-2% — maksimal risiko 1-2% dari total modal per trade\n3. Gunakan Take Profit — kunci keuntungan Anda\n4. Jangan over-leverage — gunakan leverage sesuai kemampuan\n5. Diversifikasi — jangan taruh semua modal di satu instrumen\n6. Trading dengan rencana — jangan emosional\n\n⚠️ Trading berjangka memiliki risiko tinggi. Investasikan hanya dana yang Anda siap kehilangan.',
    category: 'trading',
    priority: 6,
  },

  // ===== CAREER =====
  {
    keywords: ['karir', 'karier', 'lowongan', 'kerja', 'rekrut', 'bergabung', 'job', 'vacancy', 'loker'],
    patterns: [/karir|karier/i, /lowongan/i, /kerja\s*(di|sama)/i, /bergabung/i, /loker/i, /job/i],
    response: 'Tertarik bergabung dengan tim Victory International Futures? 🎯\n\nKami selalu mencari talenta terbaik untuk posisi:\n• Financial Consultant\n• Business Development\n• Marketing & Digital\n• Customer Service\n• IT & Technology\n\nSilakan kunjungi halaman Karir di website kami untuk melihat lowongan terbaru dan mengirimkan CV Anda. Kami menawarkan jenjang karir yang menarik, komisi kompetitif, dan lingkungan kerja profesional!',
    category: 'career',
    priority: 5,
  },

  // ===== GENERAL TRADING QUESTIONS =====
  {
    keywords: ['apa itu trading', 'trading itu apa', 'pengertian trading', 'trading berjangka'],
    patterns: [/apa\s*(itu|yang\s*dimaksud)\s*trading/i, /trading\s*(itu|berjangka)/i, /pengertian\s*trading/i],
    response: 'Trading berjangka adalah aktivitas jual-beli instrumen keuangan (seperti mata uang, emas, minyak, indeks) dengan tujuan mendapatkan keuntungan dari selisih harga.\n\nKeunggulan trading berjangka:\n• Bisa profit saat harga naik MAUPUN turun (two-way opportunity)\n• Pasar buka 24 jam (Senin-Jumat)\n• Modal awal relatif terjangkau dengan sistem leverage\n• Likuiditas sangat tinggi\n• Transparan dan ter-regulasi\n\nNamun ingat, trading juga memiliki risiko. Edukasi dan manajemen risiko yang baik adalah kunci sukses!',
    category: 'trading',
    priority: 5,
  },
  {
    keywords: ['profit', 'untung', 'keuntungan', 'cuan', 'hasil', 'return'],
    patterns: [/berapa\s*(profit|untung|keuntungan|return)/i, /potensi\s*(profit|keuntungan)/i, /bisa\s*(untung|profit)/i],
    response: 'Potensi keuntungan di trading berjangka tidak terbatas, namun sebanding dengan risiko yang ada.\n\nFaktor yang mempengaruhi profit:\n• Modal yang digunakan\n• Leverage yang dipilih\n• Strategi trading yang diterapkan\n• Manajemen risiko\n• Konsistensi dan disiplin\n\nTarget yang realistis untuk trader:\n• Pemula: 3-5% per bulan\n• Intermediate: 5-15% per bulan\n• Profesional: 15-30% per bulan\n\n⚠️ Ingat: Trading berjangka memiliki risiko kehilangan modal. Hasil masa lalu tidak menjamin hasil masa depan.',
    category: 'trading',
    priority: 5,
  },

  // ===== MARKET HOURS =====
  {
    keywords: ['jam trading', 'waktu trading', 'sesi', 'pasar buka', 'market hour'],
    patterns: [/jam\s*trading/i, /waktu\s*trading/i, /sesi\s*(trading|pasar)/i, /pasar\s*buka/i],
    response: 'Jam trading di pasar global (dalam WIB):\n\n🌏 Sesi Sydney: 04:00 - 13:00 WIB\n🌸 Sesi Tokyo: 06:00 - 15:00 WIB\n🇬🇧 Sesi London: 14:00 - 23:00 WIB\n🇺🇸 Sesi New York: 19:00 - 04:00 WIB\n\n💡 Tips: Waktu paling volatil (peluang terbesar) biasanya saat overlap sesi London & New York (19:00-23:00 WIB).\n\nPasar Forex & Gold buka 24 jam dari Senin pagi sampai Sabtu dini hari.',
    category: 'trading',
    priority: 5,
  },

  // ===== SWAP & ROLLOVER =====
  {
    keywords: ['swap', 'rollover', 'bunga', 'overnight', 'biaya inap'],
    patterns: [/swap/i, /rollover/i, /biaya\s*inap/i, /overnight/i],
    response: 'Swap (biaya inap) adalah bunga yang dikenakan atau diterima ketika Anda menahan posisi trading melewati pukul 04:00 WIB (rollover time).\n\n• Swap bisa positif (Anda menerima) atau negatif (Anda membayar)\n• Bergantung pada perbedaan suku bunga antar negara\n• Swap triple dikenakan pada hari Rabu (untuk weekend)\n• Gold memiliki kondisi swap khusus\n\nUntuk trader jangka pendek (day trader), swap biasanya bukan masalah karena posisi ditutup sebelum rollover.',
    category: 'trading',
    priority: 4,
  },

  // ===== DEMO ACCOUNT =====
  {
    keywords: ['demo', 'latihan', 'simulasi', 'virtual', 'coba'],
    patterns: [/akun\s*demo/i, /demo\s*akun/i, /coba\s*dulu/i, /latihan/i, /simulasi/i],
    response: 'Akun Demo adalah cara terbaik untuk belajar trading tanpa risiko!\n\n✅ Modal virtual (uang tidak nyata)\n✅ Kondisi pasar real-time (harga sama dengan akun real)\n✅ Semua fitur platform tersedia\n✅ GRATIS dan bisa dibuat ulang\n✅ Cocok untuk:\n  - Pemula yang ingin belajar\n  - Menguji strategi baru\n  - Membiasakan diri dengan platform\n\nSilakan hubungi kami atau klik "Buka Akun" dan pilih tipe Demo untuk memulai latihan trading Anda!',
    category: 'account',
    priority: 6,
  },

  // ===== CANDLESTICK =====
  {
    keywords: ['candlestick', 'candle', 'chart', 'grafik', 'pola'],
    patterns: [/candlestick/i, /pola\s*candle/i, /chart/i, /grafik/i],
    response: 'Candlestick adalah grafik yang menunjukkan pergerakan harga dalam periode tertentu. Setiap "candle" menampilkan harga Open, High, Low, dan Close (OHLC).\n\nPola candlestick populer:\n• Doji — Sinyal potensi pembalikan\n• Hammer — Sinyal bullish reversal\n• Shooting Star — Sinyal bearish reversal\n• Engulfing — Sinyal perubahan trend\n• Morning/Evening Star — Sinyal reversal kuat\n\nAnda bisa belajar lebih lanjut tentang candlestick di halaman Edukasi atau OHLC pada website kami!',
    category: 'education',
    priority: 4,
  },

  // ===== NEWS / BERITA =====
  {
    keywords: ['berita', 'news', 'update', 'kabar', 'terbaru', 'terkini'],
    patterns: [/berita/i, /news/i, /update\s*(pasar|market|terbaru)/i],
    response: 'Untuk berita dan update pasar terbaru, silakan kunjungi halaman Berita di website kami.\n\nKami menyediakan:\n• Analisis pasar harian\n• Kalender ekonomi\n• Breaking news yang mempengaruhi pasar\n• Ulasan mingguan dari tim analis\n\nAnda juga bisa mengikuti media sosial kami untuk update real-time:\n📱 Instagram: @victoryinternationalfutures\n📺 YouTube: Victory International Futures',
    category: 'info',
    priority: 4,
  },

  // ===== OHLC =====
  {
    keywords: ['ohlc', 'open high low close', 'harga'],
    patterns: [/ohlc/i, /open\s*high\s*low/i],
    response: 'OHLC (Open, High, Low, Close) adalah data pergerakan harga yang menunjukkan:\n\n• Open: Harga pembukaan periode\n• High: Harga tertinggi periode\n• Low: Harga terendah periode\n• Close: Harga penutupan periode\n\nData OHLC sangat penting untuk analisis teknikal. Anda bisa melihat data OHLC terbaru untuk semua instrumen kami di halaman OHLC pada website kami!',
    category: 'education',
    priority: 4,
  },

  // ===== CATCH-ALL TRADING TERMS =====
  {
    keywords: ['pip', 'pips', 'lot', 'point'],
    patterns: [/apa\s*itu\s*pip/i, /pip\s*(itu|adalah)/i],
    response: 'Penjelasan istilah trading dasar:\n\n• Pip (Point in Percentage): Unit terkecil pergerakan harga. Contoh: EUR/USD bergerak dari 1.1000 ke 1.1001 = 1 pip.\n• Lot: Ukuran volume trading. 1 Standard Lot = 100.000 unit. Mini Lot = 10.000 unit. Micro Lot = 1.000 unit.\n• Point: Sama seperti pip, digunakan untuk mengukur pergerakan harga.\n\nContoh: Jika Anda beli 1 lot EUR/USD dan harga naik 10 pip, profit Anda sekitar $100.',
    category: 'education',
    priority: 4,
  },
  {
    keywords: ['buy', 'sell', 'long', 'short', 'beli', 'jual'],
    patterns: [/buy\s*dan\s*sell/i, /long\s*(dan|&)\s*short/i, /apa\s*itu\s*(buy|sell|long|short)/i],
    response: 'Dalam trading, ada 2 posisi utama:\n\n📈 BUY (Long): Anda membeli — mendapat profit jika harga NAIK\n📉 SELL (Short): Anda menjual — mendapat profit jika harga TURUN\n\nInilah keunggulan trading berjangka: Anda bisa mendapat profit baik saat pasar naik maupun turun (two-way opportunity)!\n\nContoh:\n• BUY Gold di 2000, SELL di 2010 = Profit 10 pip\n• SELL Gold di 2010, BUY di 2000 = Profit 10 pip juga!',
    category: 'education',
    priority: 4,
  },
];

// --- SMART MATCHING ENGINE ---
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, '') // Remove special chars
    .replace(/\s+/g, ' ')     // Normalize whitespace
    .trim();
}

function calculateRelevanceScore(message: string, entry: KnowledgeEntry): number {
  const normalizedMsg = normalizeText(message);
  const words = normalizedMsg.split(' ');
  let score = 0;

  // 1. Check regex patterns (highest weight)
  for (const pattern of entry.patterns) {
    if (pattern.test(message)) {
      score += 50;
      break;
    }
  }

  // 2. Check keyword matches
  let keywordMatches = 0;
  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalizeText(keyword);
    if (normalizedMsg.includes(normalizedKeyword)) {
      keywordMatches++;
      // Bonus for exact word match
      if (words.includes(normalizedKeyword)) {
        score += 15;
      } else {
        score += 10;
      }
    }
  }

  // 3. Bonus for multiple keyword matches
  if (keywordMatches >= 2) score += 20;
  if (keywordMatches >= 3) score += 30;

  // 4. Priority bonus
  score += entry.priority * 2;

  // 5. Check word similarity (fuzzy matching)
  for (const word of words) {
    if (word.length < 3) continue;
    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalizeText(keyword);
      // Check if the word is a substring of a keyword or vice versa
      if (normalizedKeyword.length >= 4 && word.length >= 4) {
        if (normalizedKeyword.includes(word) || word.includes(normalizedKeyword)) {
          score += 5;
        }
      }
      // Levenshtein-like simple check: same start
      if (word.length >= 4 && normalizedKeyword.length >= 4 && word.substring(0, 4) === normalizedKeyword.substring(0, 4)) {
        score += 3;
      }
    }
  }

  return score;
}

// --- INTELLIGENT RESPONSE GENERATOR ---
function generateContextualResponse(message: string): string {
  const normalizedMsg = normalizeText(message);

  // Check for question patterns and provide helpful fallback
  const isQuestion = /\?|apa|bagaimana|gimana|berapa|kapan|dimana|siapa|kenapa|mengapa|bisakah|apakah|caranya/i.test(message);

  if (isQuestion) {
    // Try to detect topic even without exact keyword match
    if (/untung|rugi|profit|loss|hasil/i.test(normalizedMsg)) {
      return 'Tentang potensi keuntungan/kerugian trading: Trading berjangka memiliki potensi profit yang menarik namun juga disertai risiko. Di Victory International Futures, kami menekankan pentingnya edukasi dan manajemen risiko. Target realistis untuk pemula adalah 3-5% per bulan dengan strategi yang disiplin. Ingin tahu lebih detail? Tanyakan tentang manajemen risiko atau edukasi trading!';
    }
    if (/mulai|start|awal|pertama|pemula/i.test(normalizedMsg)) {
      return 'Untuk memulai trading di Victory International Futures:\n\n1. Buka akun (klik "Buka Akun" di website)\n2. Verifikasi identitas (KTP)\n3. Deposit dana minimal USD 100 (akun mini) atau USD 500 (reguler)\n4. Download platform MetaTrader\n5. Mulai trading!\n\n💡 Saran: Mulailah dengan akun demo gratis untuk berlatih tanpa risiko. Tim kami juga menyediakan edukasi gratis untuk pemula!';
    }
    if (/aman|percaya|trust|terpercaya|bisa dipercaya/i.test(normalizedMsg)) {
      return 'Victory International Futures adalah perusahaan yang AMAN dan LEGAL. Kami terdaftar resmi di BAPPEBTI, anggota BBJ dan KBI. Dana nasabah 100% disimpan di Segregated Account. Dengan pengalaman lebih dari 20 tahun sejak 2003, kami telah melayani ribuan nasabah di seluruh Indonesia.';
    }
  }

  // Default smart response based on message length and content
  if (normalizedMsg.length < 5) {
    return 'Halo! Saya Vira, Asisten Virtual Victory International Futures. Silakan ajukan pertanyaan Anda dengan lebih detail agar saya bisa membantu lebih baik. Misalnya:\n\n• "Bagaimana cara membuka akun trading?"\n• "Berapa spread untuk trading Gold?"\n• "Apakah Victory International Futures aman?"\n• "Apa saja produk yang tersedia?"';
  }

  return `Terima kasih atas pertanyaan Anda! Meskipun saya belum memiliki informasi spesifik mengenai "${message.substring(0, 50)}${message.length > 50 ? '...' : ''}", berikut beberapa hal yang mungkin membantu:\n\n• Untuk informasi produk (Forex, Gold, Silver, Oil, Index) — tanyakan nama produknya\n• Untuk pembukaan akun — tanyakan "cara buka akun"\n• Untuk biaya trading — tanyakan "spread" atau "biaya"\n• Untuk keamanan — tanyakan "apakah aman"\n• Untuk edukasi — tanyakan "cara belajar trading"\n\nAtau hubungi tim CS kami langsung di (031) 9924 1688 untuk bantuan lebih lanjut!`;
}

export function getChatbotResponse(message: string): string {
  if (!message || message.trim().length === 0) {
    return 'Silakan ketik pertanyaan Anda dan saya akan berusaha membantu!';
  }

  // Score all knowledge entries
  const scored = knowledgeBase.map(entry => ({
    entry,
    score: calculateRelevanceScore(message, entry),
  }));

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // If top score is high enough, return that response
  if (scored[0].score >= 15) {
    return scored[0].entry.response;
  }

  // If no good match found, use intelligent fallback
  return generateContextualResponse(message);
}

// --- SENTIMENT ANALYSIS (unchanged) ---
const positiveWords = ['naik', 'profit', 'untung', 'bullish', 'rekor', 'reli', 'penguatan', 'positif', 'dukung', 'kuat', 'rally', 'breakout', 'support'];
const negativeWords = ['turun', 'rugi', 'bearish', 'koreksi', 'anjlok', 'negatif', 'tekanan', 'krisis', 'jatuh', 'resistance', 'breakdown', 'collapse'];

export function analyzeSentiment(text: string): { score: number, label: 'Bullish' | 'Bearish' | 'Neutral' } {
  const normalized = text.toLowerCase();
  let score = 50;

  let positiveCount = 0;
  let negativeCount = 0;

  positiveWords.forEach(word => {
    if (normalized.includes(word)) positiveCount++;
  });

  negativeWords.forEach(word => {
    if (normalized.includes(word)) negativeCount++;
  });

  score = 50 + (positiveCount * 10) - (negativeCount * 10);
  score = Math.max(0, Math.min(100, score));

  let label: 'Bullish' | 'Bearish' | 'Neutral' = 'Neutral';
  if (score >= 60) label = 'Bullish';
  if (score <= 40) label = 'Bearish';

  return { score, label };
}

// --- RISK PROFILER (unchanged) ---
export type RiskProfile = 'Konservatif' | 'Moderat' | 'Agresif';

export function calculateRiskProfile(answers: number[]): { profile: RiskProfile, score: number, description: string, suggestion: string } {
  const totalScore = answers.reduce((a, b) => a + b, 0);

  if (totalScore <= 8) {
    return {
      profile: 'Konservatif',
      score: totalScore,
      description: 'Anda lebih mengutamakan keamanan modal daripada imbal hasil tinggi. Anda cenderung menghindari risiko kerugian signifikan.',
      suggestion: 'Kami menyarankan Anda untuk memulai dengan instrumen Gold (Emas) atau indeks saham dengan leverage rendah (1:100) dan lot terkecil.'
    };
  } else if (totalScore <= 12) {
    return {
      profile: 'Moderat',
      score: totalScore,
      description: 'Anda bersedia menerima risiko menengah demi mencapai pertumbuhan investasi yang seimbang.',
      suggestion: 'Anda cocok trading Major Forex Pairs (EUR/USD, GBP/USD) dengan leverage 1:200 dan disiplin menggunakan Stop Loss.'
    };
  } else {
    return {
      profile: 'Agresif',
      score: totalScore,
      description: 'Anda siap menghadapi fluktuasi pasar yang tinggi demi mengejar potensi keuntungan maksimal.',
      suggestion: 'Anda memiliki profil untuk trading komoditas volatil (Oil, Silver) atau Cross Pairs dengan leverage hingga 1:500.'
    };
  }
}
