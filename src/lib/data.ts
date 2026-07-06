// ============================================
// VICTORY INTERNATIONAL FUTURES - DATA LIBRARY
// ============================================

// === COMPANY INFO ===
export const companyInfo = {
  name: 'PT Victory International Futures',
  shortName: 'Victory International',
  acronym: 'VIF',
  tagline: 'Investasi Cerdas, Masa Depan Cerah',
  description: 'Perusahaan pialang berjangka terpercaya yang berlisensi resmi BAPPEBTI, menyediakan layanan perdagangan forex, komoditas, dan indeks saham sejak 2003.',
  founded: 2003,
  headquarters: 'Jl. Diponegoro No. 153, Darmo, Surabaya',
  address: 'Jl. Diponegoro No. 153, Darmo, Surabaya 60241',
  phone: '+62 31 9999 8888',
  email: 'info@victoryifx.co.id',
  website: 'www.victoryifx.co.id',
  regulators: ['BAPPEBTI', 'ICDX', 'ICH'],
  socialMedia: {
    instagram: 'https://instagram.com/victoryifutures',
    facebook: 'https://facebook.com/victoryifutures',
    twitter: 'https://twitter.com/victoryifutures',
    youtube: 'https://youtube.com/@victoryifutures',
    linkedin: 'https://linkedin.com/company/victoryifutures',
  },
};

// === STATS ===
export const companyStats = [
  { value: 20, suffix: '+', label: 'Tahun Pengalaman', icon: 'calendar' },
  { value: 10000, suffix: '+', label: 'Nasabah Aktif', icon: 'users' },
  { value: 15, suffix: '', label: 'Kantor Cabang', icon: 'building' },
  { value: 98, suffix: '%', label: 'Kepuasan Client', icon: 'heart' },
];

// === NAVIGATION ===
export const navLinks = [
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Produk', href: '#produk' },
  { label: 'Platform', href: '#platform' },
  { label: 'Tools', href: '#tools' },
  { label: 'AI Center', href: '#ai-center' },
  { label: 'Edukasi', href: '/edukasi' },
  { label: 'Berita', href: '/berita' },
  { label: 'OHLC', href: '/ohlc' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Karir', href: '/karir' },
  { label: 'Kontak', href: '/kontak' },
];

// === PRODUCTS ===
export interface Product {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  details: string;
  spread: string;
  leverage: string;
  tradingHours: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'forex',
    name: 'Forex Trading',
    category: 'Currency',
    icon: 'currency',
    description: 'Perdagangkan pasangan mata uang major, minor, dan exotic dengan spread kompetitif.',
    details: 'Akses pasar forex global 24 jam dengan likuiditas tinggi. Trading pasangan mata uang seperti EUR/USD, GBP/USD, USD/JPY dan lainnya dengan eksekusi cepat dan platform canggih.',
    spread: 'Mulai 0.1 pip',
    leverage: 'Hingga 1:500',
    tradingHours: 'Senin - Jumat, 24 Jam',
    features: ['Spread ultra-rendah', 'Eksekusi < 1 detik', '50+ pasangan mata uang', 'Hedging diperbolehkan'],
  },
  {
    id: 'gold',
    name: 'Emas / Gold',
    category: 'Commodity',
    icon: 'gold',
    description: 'Investasi emas digital dengan spread tipis dan eksekusi instan di pasar global.',
    details: 'Trading emas (XAU/USD) sebagai aset safe haven favorit. Manfaatkan pergerakan harga emas dunia untuk meraih keuntungan optimal dengan leverage fleksibel.',
    spread: 'Mulai 0.3 pip',
    leverage: 'Hingga 1:200',
    tradingHours: 'Senin - Jumat, 24 Jam',
    features: ['Safe haven asset', 'Volatilitas menguntungkan', 'Tanpa biaya swap khusus', 'Lot micro tersedia'],
  },
  {
    id: 'silver',
    name: 'Perak / Silver',
    category: 'Commodity',
    icon: 'silver',
    description: 'Trading perak global dengan potensi keuntungan dari volatilitas tinggi.',
    details: 'Perak (XAG/USD) menawarkan peluang trading menarik dengan pergerakan harga yang dinamis. Cocok untuk diversifikasi portofolio komoditas Anda.',
    spread: 'Mulai 0.5 pip',
    leverage: 'Hingga 1:200',
    tradingHours: 'Senin - Jumat, 24 Jam',
    features: ['Volatilitas tinggi', 'Korelasi dengan emas', 'Margin terjangkau', 'Lot fleksibel'],
  },
  {
    id: 'oil',
    name: 'Minyak Mentah',
    category: 'Commodity',
    icon: 'oil',
    description: 'Manfaatkan pergerakan harga minyak dunia untuk peluang profit maksimal.',
    details: 'Trading minyak mentah (Crude Oil/CL) dengan akses langsung ke pasar global. Pantau faktor geopolitik dan supply-demand untuk strategi trading optimal.',
    spread: 'Mulai 0.04',
    leverage: 'Hingga 1:100',
    tradingHours: 'Senin - Jumat, 22 Jam',
    features: ['Komoditas paling aktif', 'Pengaruh geopolitik', 'Analisis fundamental kuat', 'Volume tinggi'],
  },
  {
    id: 'index',
    name: 'Indeks Saham',
    category: 'Index',
    icon: 'index',
    description: 'Trading indeks saham global: Hang Seng, Nikkei, Dow Jones, dan lainnya.',
    details: 'Akses indeks saham utama dunia termasuk HK50, JP225, US30, dan SPX500. Diversifikasi portofolio Anda dengan instrumen yang mencerminkan performa pasar saham global.',
    spread: 'Mulai 1.0 pip',
    leverage: 'Hingga 1:100',
    tradingHours: 'Sesuai jam bursa',
    features: ['Diversifikasi otomatis', 'Indeks global populer', 'Analisis teknikal kuat', 'Margin kompetitif'],
  },
];

// === PLATFORM FEATURES ===
export const platformFeatures = [
  {
    title: 'Eksekusi Ultra Cepat',
    description: 'Eksekusi order dalam hitungan milidetik dengan teknologi server terdepan.',
    icon: 'zap',
  },
  {
    title: 'Charting Profesional',
    description: '100+ indikator teknikal dan tools analisis untuk keputusan trading terbaik.',
    icon: 'bar-chart-2',
  },
  {
    title: 'Multi-Device',
    description: 'Trading dari desktop, web browser, tablet, atau smartphone Anda.',
    icon: 'smartphone',
  },
  {
    title: 'Keamanan Tingkat Tinggi',
    description: 'Enkripsi end-to-end dan autentikasi 2 faktor untuk keamanan akun.',
    icon: 'shield',
  },
  {
    title: 'Expert Advisors',
    description: 'Jalankan robot trading otomatis dan strategi algoritmik tanpa batas.',
    icon: 'cpu',
  },
  {
    title: 'One-Click Trading',
    description: 'Buka dan tutup posisi dengan satu klik untuk kecepatan maksimal.',
    icon: 'mouse-pointer',
  },
];

// === TIMELINE ===
export const companyTimeline = [
  { year: 2003, title: 'Pendirian Perusahaan', description: 'PT Victory International Futures didirikan di Surabaya sebagai perusahaan pialang berjangka.' },
  { year: 2005, title: 'Lisensi BAPPEBTI', description: 'Memperoleh izin resmi dari BAPPEBTI dan menjadi anggota bursa berjangka.' },
  { year: 2008, title: 'Ekspansi Regional', description: 'Membuka 5 kantor cabang baru di kota-kota besar Jawa dan Bali.' },
  { year: 2012, title: 'Platform Digital', description: 'Meluncurkan platform trading online modern untuk nasabah.' },
  { year: 2016, title: 'Mobile Trading', description: 'Menghadirkan aplikasi mobile trading untuk kemudahan akses di mana saja.' },
  { year: 2020, title: '10.000 Nasabah', description: 'Mencapai milestone 10.000+ nasabah aktif di seluruh Indonesia.' },
  { year: 2024, title: 'AI-Powered Trading', description: 'Mengintegrasikan teknologi AI dan Machine Learning untuk analisis pasar.' },
];

// === NEWS / BERITA ===
export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Forex' | 'Komoditas' | 'Indeks' | 'Edukasi' | 'Analisa';
  date: string;
  author: string;
  readTime: string;
  thumbnail: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'analisis-emas-melonjak-2024',
    title: 'Harga Emas Melonjak ke Rekor Baru, Apa yang Mendorong Reli Ini?',
    excerpt: 'Emas mencatatkan rekor tertinggi sepanjang masa didorong oleh ketegangan geopolitik dan kebijakan moneter dovish dari bank sentral utama.',
    content: `Harga emas dunia (XAU/USD) kembali mencatatkan rekor tertinggi sepanjang masa pada perdagangan pekan ini, menembus level psikologis $2.400 per troy ounce. Reli yang telah berlangsung selama beberapa bulan ini didorong oleh sejumlah faktor fundamental yang kuat.\n\n## Faktor Pendorong Utama\n\n### 1. Ketegangan Geopolitik\nKonflik yang tengah berlangsung di beberapa wilayah dunia telah meningkatkan permintaan terhadap aset safe haven seperti emas. Investor global beralih dari aset berisiko ke emas sebagai lindung nilai.\n\n### 2. Kebijakan Moneter Bank Sentral\nEkspektasi pemotongan suku bunga oleh Federal Reserve AS dan bank sentral lainnya turut menjadi katalis positif bagi emas. Suku bunga yang lebih rendah mengurangi biaya peluang memegang emas.\n\n### 3. Pembelian Bank Sentral\nBank sentral dari berbagai negara berkembang terus menambah cadangan emasnya, memberikan dukungan fundamental yang kuat.\n\n## Prospek Ke Depan\nAnalis memproyeksikan harga emas berpotensi melanjutkan penguatan ke level $2.500-$2.600 dalam beberapa bulan mendatang jika kondisi makroekonomi dan geopolitik tetap mendukung.\n\n> **Disclaimer:** Artikel ini bersifat informatif dan bukan merupakan saran investasi.`,
    category: 'Komoditas',
    date: '2024-12-15',
    author: 'Tim Riset VIF',
    readTime: '5 menit',
    thumbnail: '/images/news-gold.jpg',
  },
  {
    id: '2',
    slug: 'strategi-trading-eurusd',
    title: 'Strategi Trading EUR/USD di Tengah Kebijakan ECB Terbaru',
    excerpt: 'ECB memberikan sinyal perubahan kebijakan moneter yang signifikan. Bagaimana trader bisa memanfaatkan peluang ini?',
    content: `European Central Bank (ECB) pada pertemuan terakhirnya memberikan sinyal yang lebih dovish dari perkiraan pasar, membuka peluang trading menarik pada pasangan EUR/USD.\n\n## Analisis Teknikal EUR/USD\n\nPasangan EUR/USD saat ini diperdagangkan di area support kritis 1.0750-1.0800. Beberapa indikator teknikal menunjukkan:\n\n- **RSI**: Berada di zona oversold (30), mengindikasikan potensi rebound\n- **MACD**: Divergensi bullish terbentuk pada timeframe harian\n- **Moving Average**: Harga mendekati MA 200 yang menjadi support dinamis\n\n## Strategi yang Disarankan\n\n### Skenario Bullish\n- Entry: Buy di area 1.0760-1.0780\n- Stop Loss: 1.0720\n- Take Profit: 1.0880 (TP1), 1.0950 (TP2)\n\n### Skenario Bearish\n- Entry: Sell jika break di bawah 1.0720\n- Stop Loss: 1.0780\n- Take Profit: 1.0650\n\n> **Disclaimer:** Artikel ini bersifat informatif dan bukan merupakan saran investasi.`,
    category: 'Forex',
    date: '2024-12-14',
    author: 'Ahmad Faisal, CFTe',
    readTime: '7 menit',
    thumbnail: '/images/news-forex.jpg',
  },
  {
    id: '3',
    slug: 'panduan-pemula-trading-futures',
    title: 'Panduan Lengkap Trading Berjangka untuk Pemula 2024',
    excerpt: 'Ingin mulai trading? Pelajari dasar-dasar perdagangan berjangka dari nol hingga siap bertransaksi.',
    content: `Trading berjangka (futures trading) menawarkan peluang investasi yang menarik namun memerlukan pemahaman yang baik sebelum memulai.\n\n## Apa Itu Trading Berjangka?\n\nTrading berjangka adalah perdagangan kontrak derivatif yang nilainya diturunkan dari aset dasar (underlying asset). Di Indonesia, perdagangan ini diawasi oleh BAPPEBTI.\n\n## Instrumen yang Diperdagangkan\n\n1. **Forex** - Pasangan mata uang asing\n2. **Emas & Perak** - Logam mulia\n3. **Minyak Mentah** - Crude oil\n4. **Indeks Saham** - Hang Seng, Nikkei, dll\n\n## Langkah Memulai\n\n### 1. Pilih Broker Resmi\nPastikan broker Anda terdaftar di BAPPEBTI dan merupakan anggota bursa berjangka.\n\n### 2. Buka Akun Demo\nLatih kemampuan trading dengan akun demo sebelum menggunakan dana real.\n\n### 3. Pelajari Analisis\nKuasai analisis teknikal dan fundamental untuk membuat keputusan trading.\n\n### 4. Kelola Risiko\nSelalu gunakan stop loss dan jangan risikokan lebih dari 2% modal per transaksi.\n\n> **Tips:** Mulai dengan akun demo di Victory International Futures untuk belajar tanpa risiko!`,
    category: 'Edukasi',
    date: '2024-12-13',
    author: 'Tim Edukasi VIF',
    readTime: '10 menit',
    thumbnail: '/images/news-education.jpg',
  },
  {
    id: '4',
    slug: 'outlook-minyak-mentah-opec',
    title: 'Outlook Minyak Mentah: Dampak Keputusan OPEC+ Terhadap Harga',
    excerpt: 'OPEC+ memutuskan kebijakan produksi baru. Simak analisis dampaknya terhadap harga minyak mentah.',
    content: `Organisasi Negara-negara Pengekspor Minyak dan sekutunya (OPEC+) telah mengumumkan keputusan penting mengenai kuota produksi.\n\n## Keputusan OPEC+\n\nOPEC+ memutuskan untuk melanjutkan pemangkasan produksi sebesar 2 juta barel per hari hingga kuartal kedua tahun depan.\n\n## Analisis Dampak\n\nHarga minyak mentah (WTI) saat ini diperdagangkan di kisaran $75-78 per barel. Pemangkasan produksi diperkirakan akan memberikan support pada harga.\n\n> **Disclaimer:** Artikel ini bersifat informatif dan bukan merupakan saran investasi.`,
    category: 'Komoditas',
    date: '2024-12-12',
    author: 'Budi Santoso, Analis Senior',
    readTime: '6 menit',
    thumbnail: '/images/news-oil.jpg',
  },
  {
    id: '5',
    slug: 'indeks-hang-seng-peluang-rebound',
    title: 'Indeks Hang Seng Berpeluang Rebound, Level Kunci yang Perlu Dipantau',
    excerpt: 'Setelah koreksi tajam, indeks Hang Seng menunjukkan sinyal pembalikan. Simak level-level penting berikut.',
    content: `Indeks Hang Seng (HK50) telah mengalami koreksi signifikan dari level tertingginya.\n\n## Analisis Teknikal\n\nHang Seng saat ini diperdagangkan di area support kuat 16.500-17.000. RSI pada timeframe mingguan menunjukkan kondisi oversold.\n\n## Level Penting\n- Support: 16.500, 16.000\n- Resistance: 17.500, 18.200\n\n> **Disclaimer:** Artikel ini bersifat informatif dan bukan merupakan saran investasi.`,
    category: 'Indeks',
    date: '2024-12-11',
    author: 'Dewi Kusuma, Analis',
    readTime: '4 menit',
    thumbnail: '/images/news-index.jpg',
  },
  {
    id: '6',
    slug: 'mengenal-risk-management-trading',
    title: 'Mengenal Risk Management: Kunci Sukses Trading Jangka Panjang',
    excerpt: 'Pelajari teknik-teknik manajemen risiko yang digunakan oleh trader profesional.',
    content: `Manajemen risiko adalah fondasi utama kesuksesan dalam trading. Tanpa risk management yang baik, bahkan strategi terbaik pun akan gagal.\n\n## Prinsip Dasar Risk Management\n\n### 1. Aturan 2% \nJangan pernah risikokan lebih dari 2% modal di satu posisi.\n\n### 2. Risk-Reward Ratio\nUsahakan minimal 1:2 — potensi profit 2x lipat dari potensi rugi.\n\n### 3. Gunakan Stop Loss\nSelalu pasang stop loss untuk membatasi kerugian.\n\n### 4. Diversifikasi\nJangan taruh semua modal di satu instrumen.\n\n> **Tips:** Gunakan kalkulator risiko di website Victory IF untuk menghitung ukuran lot yang tepat!`,
    category: 'Edukasi',
    date: '2024-12-10',
    author: 'Tim Edukasi VIF',
    readTime: '8 menit',
    thumbnail: '/images/news-risk.jpg',
  },
];

// === CAREER / KARIR ===
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  description: string;
  requirements: string[];
  benefits: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Financial Consultant',
    department: 'Marketing',
    location: 'Surabaya',
    type: 'Full-time',
    description: 'Memberikan edukasi dan konsultasi kepada calon nasabah tentang investasi di pasar berjangka.',
    requirements: [
      'Minimal S1 segala jurusan',
      'Usia 22-35 tahun',
      'Komunikatif dan berorientasi pada target',
      'Pengalaman di bidang finansial menjadi nilai plus',
    ],
    benefits: ['Gaji pokok + komisi menarik', 'BPJS & asuransi kesehatan', 'Jenjang karir jelas', 'Training intensif'],
  },
  {
    id: 'job-2',
    title: 'Market Analyst',
    department: 'Research',
    location: 'Surabaya',
    type: 'Full-time',
    description: 'Melakukan analisis pasar forex, komoditas, dan indeks saham untuk laporan harian dan mingguan.',
    requirements: [
      'S1 Ekonomi/Keuangan/Statistik',
      'Memahami analisis teknikal & fundamental',
      'Pengalaman minimal 2 tahun',
      'Sertifikasi WPB/WPPE menjadi nilai plus',
    ],
    benefits: ['Gaji kompetitif', 'Bonus performa', 'Akses tools profesional', 'Pengembangan karir'],
  },
  {
    id: 'job-3',
    title: 'IT Developer',
    department: 'Technology',
    location: 'Surabaya',
    type: 'Full-time',
    description: 'Mengembangkan dan memelihara platform trading dan sistem internal perusahaan.',
    requirements: [
      'S1 Teknik Informatika/Ilmu Komputer',
      'Menguasai React/Next.js, Node.js',
      'Pengalaman dengan API integration',
      'Familiar dengan sistem trading merupakan nilai plus',
    ],
    benefits: ['Gaji di atas rata-rata', 'Remote working flexible', 'Tech stack modern', 'Learning budget'],
  },
  {
    id: 'job-4',
    title: 'Customer Service Officer',
    department: 'Operations',
    location: 'Surabaya',
    type: 'Full-time',
    description: 'Melayani nasabah melalui telepon, email, dan live chat terkait layanan trading.',
    requirements: [
      'Minimal D3 segala jurusan',
      'Komunikasi bahasa Indonesia & Inggris',
      'Sabar, teliti, dan problem solver',
      'Bersedia shift',
    ],
    benefits: ['Gaji pokok + tunjangan shift', 'BPJS', 'Training produk', 'Lingkungan kerja nyaman'],
  },
  {
    id: 'job-5',
    title: 'Magang Digital Marketing',
    department: 'Marketing',
    location: 'Surabaya',
    type: 'Internship',
    description: 'Mendukung tim marketing dalam pengelolaan media sosial, konten, dan kampanye digital.',
    requirements: [
      'Mahasiswa aktif semester 5+',
      'Menguasai Canva/Adobe Creative Suite',
      'Aktif di media sosial',
      'Kreatif dan inisiatif tinggi',
    ],
    benefits: ['Uang saku', 'Sertifikat magang', 'Mentoring langsung', 'Peluang diangkat karyawan'],
  },
];

// === GALLERY ===
export const galleryCategories = ['Semua', 'Kantor', 'Event', 'Training', 'Award'];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Kantor Pusat Diponegoro', category: 'Kantor', description: 'Tampak lobby utama kantor pusat VIF di Jl. Diponegoro No. 153, Darmo, Surabaya' },
  { id: 'g2', title: 'Trading Floor', category: 'Kantor', description: 'Ruang trading dengan monitor dan fasilitas modern' },
  { id: 'g3', title: 'Seminar Trading 2024', category: 'Event', description: 'Seminar edukasi trading bersama 200+ peserta' },
  { id: 'g4', title: 'Workshop Technical Analysis', category: 'Training', description: 'Workshop intensif analisis teknikal oleh trainer berpengalaman' },
  { id: 'g5', title: 'Penghargaan Broker Terbaik', category: 'Award', description: 'VIF meraih penghargaan broker berjangka terbaik' },
  { id: 'g6', title: 'Team Building 2024', category: 'Event', description: 'Kegiatan team building tahunan seluruh tim VIF' },
  { id: 'g7', title: 'Webinar Forex Mastery', category: 'Training', description: 'Webinar online series Forex Mastery' },
  { id: 'g8', title: 'Ruang Meeting Executive', category: 'Kantor', description: 'Ruang meeting eksekutif untuk konsultasi nasabah VIP' },
];

// === MARKET DATA (MOCK) ===
export const marketInstruments = [
  { symbol: 'XAU/USD', name: 'Gold', price: 2385.50, change: 1.23, type: 'commodity' },
  { symbol: 'EUR/USD', name: 'Euro/Dollar', price: 1.0865, change: -0.15, type: 'forex' },
  { symbol: 'GBP/USD', name: 'Pound/Dollar', price: 1.2720, change: 0.08, type: 'forex' },
  { symbol: 'USD/JPY', name: 'Dollar/Yen', price: 151.85, change: 0.32, type: 'forex' },
  { symbol: 'XAG/USD', name: 'Silver', price: 28.45, change: -0.45, type: 'commodity' },
  { symbol: 'OIL/USD', name: 'Crude Oil', price: 76.30, change: 0.67, type: 'commodity' },
  { symbol: 'HK50', name: 'Hang Seng', price: 17250, change: -1.12, type: 'index' },
  { symbol: 'JP225', name: 'Nikkei 225', price: 39800, change: 0.89, type: 'index' },
];

// === LEARNING MODULES ===
export interface LearningModule {
  id: string;
  title: string;
  description: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
  duration: string;
  topics: string[];
  quizQuestions: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const learningModules: LearningModule[] = [
  {
    id: 'mod-1',
    title: 'Pengantar Trading Berjangka',
    description: 'Pelajari dasar-dasar perdagangan berjangka dan cara kerjanya.',
    level: 'Pemula',
    duration: '15 menit',
    topics: ['Apa itu trading', 'Jenis instrumen', 'Cara kerja leverage', 'Istilah penting'],
    quizQuestions: [
      {
        question: 'Apa yang dimaksud dengan leverage dalam trading?',
        options: ['Modal minimum untuk buka akun', 'Daya ungkit yang memungkinkan trading dengan dana lebih besar dari modal', 'Biaya komisi broker', 'Spread antara harga bid dan ask'],
        correctIndex: 1,
        explanation: 'Leverage adalah fasilitas yang memungkinkan trader mengendalikan posisi yang lebih besar dari modal yang dimiliki. Misalnya, leverage 1:100 berarti modal $100 bisa mengendalikan posisi senilai $10.000.',
      },
      {
        question: 'Apa itu spread dalam trading forex?',
        options: ['Biaya penarikan dana', 'Pajak trading', 'Selisih antara harga bid dan ask', 'Bunga overnight'],
        correctIndex: 2,
        explanation: 'Spread adalah selisih antara harga jual (bid) dan harga beli (ask) suatu instrumen. Ini merupakan salah satu sumber pendapatan broker.',
      },
      {
        question: 'Lembaga apa yang mengawasi perdagangan berjangka di Indonesia?',
        options: ['OJK', 'Bank Indonesia', 'BAPPEBTI', 'Bursa Efek Indonesia'],
        correctIndex: 2,
        explanation: 'BAPPEBTI (Badan Pengawas Perdagangan Berjangka Komoditi) adalah lembaga pemerintah yang bertugas mengawasi perdagangan berjangka komoditi di Indonesia.',
      },
    ],
  },
  {
    id: 'mod-2',
    title: 'Analisis Teknikal Dasar',
    description: 'Kuasai membaca chart dan indikator teknikal populer.',
    level: 'Pemula',
    duration: '20 menit',
    topics: ['Membaca candlestick', 'Support & Resistance', 'Trend line', 'Moving Average'],
    quizQuestions: [
      {
        question: 'Apa yang ditunjukkan oleh candlestick berwarna hijau/bullish?',
        options: ['Harga penutupan lebih rendah dari pembukaan', 'Harga penutupan lebih tinggi dari pembukaan', 'Volume trading tinggi', 'Pasar sedang sideways'],
        correctIndex: 1,
        explanation: 'Candlestick bullish (hijau) menunjukkan bahwa harga penutupan (close) lebih tinggi dari harga pembukaan (open), mengindikasikan tekanan beli yang dominan.',
      },
      {
        question: 'Apa fungsi utama Support level?',
        options: ['Level harga dimana tekanan jual meningkat', 'Level harga dimana tekanan beli cenderung menahan penurunan', 'Rata-rata harga dalam periode tertentu', 'Level target profit'],
        correctIndex: 1,
        explanation: 'Support adalah level harga dimana permintaan (buying pressure) cukup kuat untuk menahan penurunan harga lebih lanjut.',
      },
    ],
  },
  {
    id: 'mod-3',
    title: 'Manajemen Risiko',
    description: 'Teknik-teknik profesional untuk mengelola risiko trading.',
    level: 'Menengah',
    duration: '25 menit',
    topics: ['Position sizing', 'Stop loss & take profit', 'Risk-reward ratio', 'Drawdown management'],
    quizQuestions: [
      {
        question: 'Berapa persen modal maksimal yang sebaiknya dirisikokan per transaksi?',
        options: ['10%', '5%', '2%', '20%'],
        correctIndex: 2,
        explanation: 'Aturan umum yang direkomendasikan trader profesional adalah tidak melebihi 2% dari total modal per transaksi (aturan 2%).',
      },
    ],
  },
  {
    id: 'mod-4',
    title: 'Strategi Trading Lanjutan',
    description: 'Pelajari strategi trading yang digunakan trader profesional.',
    level: 'Mahir',
    duration: '30 menit',
    topics: ['Price action', 'Fibonacci retracement', 'Elliott Wave', 'Multi-timeframe analysis'],
    quizQuestions: [
      {
        question: 'Level Fibonacci retracement mana yang dianggap paling signifikan?',
        options: ['23.6%', '38.2%', '61.8%', '78.6%'],
        correctIndex: 2,
        explanation: 'Level 61.8% (golden ratio) dianggap sebagai level Fibonacci retracement paling signifikan karena sering menjadi area reversal kuat.',
      },
    ],
  },
];

// === FAQ ===
export const faqs = [
  {
    question: 'Apakah Victory International Futures resmi dan terdaftar?',
    answer: 'Ya, PT Victory International Futures adalah perusahaan pialang berjangka yang terdaftar dan diawasi oleh BAPPEBTI (Badan Pengawas Perdagangan Berjangka Komoditi), serta merupakan anggota bursa ICDX dan lembaga kliring ICH.',
  },
  {
    question: 'Berapa modal minimum untuk mulai trading?',
    answer: 'Modal minimum untuk membuka akun trading di VIF mulai dari USD 500 atau setara. Kami juga menyediakan akun demo gratis untuk berlatih terlebih dahulu.',
  },
  {
    question: 'Apakah dana nasabah aman?',
    answer: 'Ya, dana nasabah disimpan dalam Segregated Account (rekening terpisah) di bank custodian terpercaya, terpisah dari dana operasional perusahaan sesuai regulasi BAPPEBTI.',
  },
  {
    question: 'Instrumen apa saja yang bisa diperdagangkan?',
    answer: 'Anda dapat memperdagangkan forex (pasangan mata uang), emas (gold), perak (silver), minyak mentah (crude oil), dan indeks saham global (Hang Seng, Nikkei, dll).',
  },
  {
    question: 'Bagaimana cara membuka akun?',
    answer: 'Proses pembukaan akun sangat mudah: 1) Isi formulir pendaftaran, 2) Verifikasi identitas (KTP), 3) Deposit dana, 4) Mulai trading. Tim kami akan membantu setiap langkahnya.',
  },
  {
    question: 'Apakah ada biaya atau komisi?',
    answer: 'Biaya trading berupa spread (selisih harga jual-beli) yang kompetitif. Tidak ada biaya tersembunyi. Detail fee schedule dapat ditanyakan langsung ke customer service kami.',
  },
];

// === TRADING GLOSSARY ===
export interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
  related?: string[];
}

export const tradingGlossary: GlossaryTerm[] = [
  { term: 'Pip', definition: 'Pergerakan harga terkecil dalam forex, biasanya digit desimal ke-4 (0.0001) pada sebagian besar pasangan mata uang.', example: 'EUR/USD bergerak dari 1.0800 ke 1.0810 = naik 10 pips', related: ['Pipette', 'Lot', 'Spread'] },
  { term: 'Lot', definition: 'Ukuran standar transaksi di pasar forex. 1 lot standar = 100.000 unit mata uang dasar.', example: '1 lot EUR/USD = 100.000 EUR', related: ['Mini Lot', 'Micro Lot', 'Pip'] },
  { term: 'Leverage', definition: 'Fasilitas yang memungkinkan trader mengendalikan posisi lebih besar dari modal yang dimiliki.', example: 'Leverage 1:100 artinya modal $1.000 bisa mengendalikan $100.000', related: ['Margin', 'Margin Call'] },
  { term: 'Margin', definition: 'Jumlah dana yang dibutuhkan sebagai jaminan untuk membuka posisi trading.', example: 'Untuk buka 1 lot EUR/USD dengan leverage 1:100, margin = $1.000', related: ['Leverage', 'Free Margin', 'Margin Call'] },
  { term: 'Spread', definition: 'Selisih antara harga jual (bid) dan harga beli (ask) suatu instrumen.', example: 'Bid EUR/USD: 1.0800, Ask: 1.0802, Spread = 2 pips', related: ['Bid', 'Ask', 'Pip'] },
  { term: 'Stop Loss', definition: 'Order otomatis untuk menutup posisi pada level harga tertentu guna membatasi kerugian.', related: ['Take Profit', 'Risk Management'] },
  { term: 'Take Profit', definition: 'Order otomatis untuk menutup posisi pada level harga tertentu guna mengamankan keuntungan.', related: ['Stop Loss', 'Risk-Reward Ratio'] },
  { term: 'Margin Call', definition: 'Peringatan dari broker bahwa margin akun sudah mendekati batas minimum yang dipersyaratkan.', related: ['Margin', 'Stop Out', 'Leverage'] },
  { term: 'Bullish', definition: 'Kondisi pasar atau sentimen yang mengindikasikan harga akan naik.', related: ['Bearish', 'Trend'] },
  { term: 'Bearish', definition: 'Kondisi pasar atau sentimen yang mengindikasikan harga akan turun.', related: ['Bullish', 'Trend'] },
  { term: 'Candlestick', definition: 'Jenis chart yang menampilkan harga pembukaan, tertinggi, terendah, dan penutupan dalam satu bar.', related: ['OHLC', 'Doji', 'Hammer'] },
  { term: 'OHLC', definition: 'Singkatan dari Open, High, Low, Close — empat titik harga utama dalam satu periode.', related: ['Candlestick', 'Bar Chart'] },
  { term: 'Swap', definition: 'Biaya atau bunga yang dikenakan untuk posisi yang dibiarkan terbuka melewati tengah malam (overnight).', related: ['Rollover', 'Carry Trade'] },
  { term: 'Hedging', definition: 'Strategi membuka posisi berlawanan pada instrumen yang sama untuk mengurangi risiko.', related: ['Risk Management', 'Diversifikasi'] },
  { term: 'Scalping', definition: 'Strategi trading jangka sangat pendek yang bertujuan meraih profit kecil dari banyak transaksi.', related: ['Day Trading', 'Swing Trading'] },
  { term: 'Segregated Account', definition: 'Rekening terpisah di bank custodian untuk menyimpan dana nasabah, terpisah dari dana perusahaan.', related: ['BAPPEBTI', 'Keamanan Dana'] },
];
