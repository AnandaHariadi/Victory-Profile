# Victory International Futures — Website Profile

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?logo=framer)](https://www.framer.com/motion/)

</div>

## 🌐 Gambaran Umum

Website ini adalah **profil perusahaan modern dan interaktif** untuk PT Victory International Futures (VIF), sebuah perusahaan pialang berjangka resmi yang terdaftar di BAPPEBTI, ICDX, dan ICH. Dibangun dengan Next.js 16 App Router + React 19, website ini menampilkan:

- Profil perusahaan, produk, dan platform trading
- Modul edukasi interaktif beserta kuis
- Berita dan analisa pasar finansial
- Grafik OHLC candlestick real-time (simulasi)
- Galeri foto kantor dan event
- Lowongan karir dan formulir lamaran
- Formulir pembukaan akun live (multi-step)
- Formulir pendaftaran akun demo gratis
- AI Chatbot ("Vira") dengan knowledge base komprehensif
- AI Center: Analisis Sentimen Pasar & Risk Profiler
- Trading Simulator interaktif
- Visualisasi Money Flow

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🎨 **Premium UI/UX** | Desain glassmorphism, gradien dinamis, micro-animation Framer Motion |
| 🤖 **AI Chatbot (Vira)** | Chatbot berbasis knowledge base dengan pengenalan pola regex & keyword matching |
| 📊 **OHLC Chart** | Grafik candlestick interaktif menggunakan Chart.js + `chartjs-chart-financial` |
| 🧠 **AI Center** | Analisis sentimen pasar (bullish/bearish) + Risk Profiler berbasis kuesioner |
| 📚 **Modul Edukasi** | 4 modul berjenjang (Pemula → Mahir) + kuis interaktif per modul |
| 💼 **Trading Simulator** | Simulasi buka/tutup posisi dengan random-walk price engine |
| 🗺️ **Money Flow Diagram** | Visualisasi alur dana antara nasabah, broker, dan pasar |
| 📰 **Berita & Analisa** | Artikel kategorisasi (Forex, Komoditas, Indeks, Edukasi, Analisa) |
| 🖼️ **Galeri** | Filter galeri foto berdasarkan kategori (Kantor, Event, Training, Award) |
| 💼 **Karir** | Daftar lowongan + formulir lamaran interaktif |
| 📝 **Buka Akun Live** | Form multi-step 4 tahap dengan animasi transisi |
| 🎯 **Akun Demo** | Form pendaftaran demo dengan virtual balance $10.000 |
| 📱 **Fully Responsive** | Optimal di desktop, tablet, dan mobile |
| 🔤 **Tipografi Premium** | Font Google: Cinzel (heading), Plus Jakarta Sans (body), Inter |
| 🌐 **SEO Ready** | Meta title, description, semantic HTML5 |

---

## 🛠️ Tech Stack

### Core
| Package | Versi | Fungsi |
|---|---|---|
| `next` | 16.2.10 | Framework utama (App Router, SSR/SSG, Turbopack) |
| `react` | 19.2.4 | UI library |
| `react-dom` | 19.2.4 | DOM rendering |
| `typescript` | ^5 | Type safety |

### Styling
| Package | Versi | Fungsi |
|---|---|---|
| `tailwindcss` | ^4 | Utility-first CSS framework |
| `@tailwindcss/postcss` | ^4 | PostCSS integration |
| `clsx` | ^2.1.1 | Conditional class composition |
| `tailwind-merge` | ^3.6.0 | Merge Tailwind classes tanpa konflik |

### Animasi & Interaksi
| Package | Versi | Fungsi |
|---|---|---|
| `framer-motion` | ^12.42.2 | Animasi komponen, layout, gesture |
| `@headlessui/react` | ^2.2.10 | Komponen UI accessible (dialog, tab, dll) |
| `swiper` | ^14.0.1 | Carousel/slider interaktif |

### Charting & Data Viz
| Package | Versi | Fungsi |
|---|---|---|
| `chart.js` | ^4.5.1 | Library charting utama |
| `react-chartjs-2` | ^5.3.1 | React wrapper untuk Chart.js |
| `chartjs-chart-financial` | ^0.2.1 | Plugin candlestick chart (OHLC) |
| `chartjs-adapter-date-fns` | ^3.0.0 | Date adapter untuk Chart.js |
| `date-fns` | ^4.4.0 | Manipulasi tanggal |

### Form & Icons
| Package | Versi | Fungsi |
|---|---|---|
| `react-hook-form` | ^7.81.0 | Manajemen state form yang efisien |
| `lucide-react` | ^1.23.0 | Ikon SVG konsisten & tree-shakeable |

---

## 📁 Struktur Proyek

```
victory-website/
├── public/                         # Aset statis
│   ├── victory-logo.png            # Logo utama perusahaan
│   ├── file.svg / globe.svg        # Ikon default Next.js
│   └── ...
│
├── src/
│   ├── app/                        # Next.js App Router — semua halaman
│   │   ├── layout.tsx              # Root layout (Navbar, Footer, AIChatbot)
│   │   ├── globals.css             # CSS global + design tokens + patterns
│   │   ├── page.tsx                # Halaman utama (/)
│   │   │
│   │   ├── berita/
│   │   │   └── page.tsx            # Halaman /berita
│   │   ├── buka-akun/
│   │   │   └── page.tsx            # Halaman /buka-akun (form multi-step)
│   │   ├── demo-account/
│   │   │   └── page.tsx            # Halaman /demo-account
│   │   ├── edukasi/
│   │   │   └── page.tsx            # Halaman /edukasi
│   │   ├── galeri/
│   │   │   └── page.tsx            # Halaman /galeri
│   │   ├── karir/
│   │   │   └── page.tsx            # Halaman /karir
│   │   ├── kontak/
│   │   │   └── page.tsx            # Halaman /kontak
│   │   └── ohlc/
│   │       └── page.tsx            # Halaman /ohlc
│   │
│   ├── components/                 # Komponen React yang dapat digunakan ulang
│   │   ├── ai/                     # Komponen berbasis AI
│   │   │   ├── AIChatbot.tsx       # Chatbot "Vira" — floating bubble
│   │   │   ├── RiskProfiler.tsx    # Kuesioner profil risiko investor
│   │   │   └── SentimentAnalysis.tsx # Analisis sentimen pasar
│   │   │
│   │   ├── layout/                 # Komponen layout global
│   │   │   ├── Navbar.tsx          # Header navigasi + dropdown "Jelajahi"
│   │   │   └── Footer.tsx          # Footer dengan link, sosmed, newsletter
│   │   │
│   │   ├── sections/               # Seksi konten halaman utama
│   │   │   ├── HeroSection.tsx     # Banner utama dengan animated background
│   │   │   ├── AboutSection.tsx    # Tentang perusahaan + timeline
│   │   │   ├── ProductsSection.tsx # Produk trading (Forex, Gold, dll)
│   │   │   ├── PlatformSection.tsx # Fitur platform MT4/MT5
│   │   │   ├── ToolsSection.tsx    # Trading Simulator + Money Flow
│   │   │   ├── AICenterSection.tsx # Sentiment Analysis + Risk Profiler
│   │   │   ├── OpenAccountSection.tsx # Langkah buka akun
│   │   │   ├── NewsSection.tsx     # Berita & artikel pasar
│   │   │   ├── LearningSection.tsx # Modul edukasi + kuis
│   │   │   ├── OHLCSection.tsx     # Chart candlestick OHLC
│   │   │   ├── GallerySection.tsx  # Galeri foto perusahaan
│   │   │   ├── CareerSection.tsx   # Lowongan + form lamaran
│   │   │   └── ContactSection.tsx  # Form kontak + peta
│   │   │
│   │   ├── tools/                  # Komponen alat trading
│   │   │   ├── TradingSimulator.tsx# Simulasi buka posisi buy/sell
│   │   │   └── MoneyFlowDiagram.tsx# Diagram alur dana
│   │   │
│   │   └── ui/                     # Komponen UI primitif & reusable
│   │       ├── GradientButton.tsx  # Tombol dengan varian gold/navy/outline
│   │       ├── SectionWrapper.tsx  # Wrapper section dengan animasi & pattern
│   │       └── AnimatedCounter.tsx # Counter angka dengan animasi naik
│   │
│   └── lib/                        # Logika inti & data
│       ├── data.ts                 # Seluruh data statis aplikasi (SSoT)
│       ├── utils.ts                # Utility functions (format, kalkulasi)
│       ├── trading-engine.ts       # Engine simulasi trading (posisi, PnL, margin)
│       └── ai-engine.ts            # Knowledge base + logika AI chatbot Vira
│
├── next.config.ts                  # Konfigurasi Next.js
├── tsconfig.json                   # Konfigurasi TypeScript
├── postcss.config.mjs              # Konfigurasi PostCSS (Tailwind)
├── eslint.config.mjs               # Konfigurasi ESLint
└── package.json                    # Dependensi & scripts npm
```

---

## 🎨 Arsitektur & Design System

### Sistem Warna (`globals.css` → `@theme`)

Seluruh palet warna didefinisikan sebagai CSS custom properties di dalam blok `@theme` Tailwind v4:

```css
/* Navy — Warna utama brand VIF */
--color-navy-950: #050B14   /* Background gelap paling dalam */
--color-navy-900: #0A1628   /* Dark section background */
--color-navy-800: #1B3A5C
...hingga...
--color-navy-50:  #E8EDF4

/* Gold — Aksen & CTA */
--color-gold-500: #D4AF37   /* Gold utama */
--color-gold-600: #C8A45D
...
```

### Tipografi
Diload via `next/font/google` di `layout.tsx`:
- **`--font-cinzel`** (Cinzel) → Heading, judul utama (kesan premium/formal)
- **`--font-jakarta`** (Plus Jakarta Sans) → Body teks, paragraf
- **`--font-inter`** (Inter) → UI elemen kecil

### Pattern Background
Dua class CSS khusus pattern transparan berbentuk simbol trading/uang (SVG inline):
- **`.pattern-trading`** → Stroke putih → untuk section background gelap (navy)
- **`.pattern-trading-light`** → Stroke hitam → untuk section background terang

Pattern mencakup simbol: candlestick, bar chart, tren naik, tanda `$`, `%`, koin.

### Komponen `SectionWrapper`
Wrapper universal yang secara **otomatis menambahkan trading pattern** ke setiap section:

```tsx
<SectionWrapper
  id="platform"
  className="bg-navy-950"
  darkPattern    // gunakan pattern putih (untuk bg gelap)
  noPattern      // matikan pattern sama sekali (opsional)
  direction="up" // arah animasi masuk: up | down | left | right | none
  delay={0.2}    // delay animasi (detik)
>
  {/* konten section */}
</SectionWrapper>
```

### Komponen `GradientButton`

```tsx
<GradientButton
  variant="gold"    // gold | navy | outline | ghost
  size="lg"         // sm | md | lg
  fullWidth         // boolean
  href="/demo"      // render sebagai <Link> jika ada href
>
  Teks Tombol
</GradientButton>
```

---

## 🗺️ Halaman & Routing

Menggunakan **Next.js App Router** dengan file-based routing di `src/app/`:

| Route | File | Deskripsi |
|---|---|---|
| `/` | `app/page.tsx` | Landing page utama (semua section berurutan) |
| `/berita` | `app/berita/page.tsx` | Artikel berita & analisa pasar |
| `/edukasi` | `app/edukasi/page.tsx` | Modul belajar + kuis interaktif |
| `/ohlc` | `app/ohlc/page.tsx` | Grafik candlestick OHLC |
| `/galeri` | `app/galeri/page.tsx` | Galeri foto perusahaan |
| `/karir` | `app/karir/page.tsx` | Daftar lowongan & form lamaran |
| `/kontak` | `app/kontak/page.tsx` | Form kontak + informasi kantor |
| `/buka-akun` | `app/buka-akun/page.tsx` | Form pembukaan akun live (4 step) |
| `/demo-account` | `app/demo-account/page.tsx` | Registrasi akun demo gratis |

### Root Layout (`app/layout.tsx`)

```
html
└── body
    ├── <Navbar />      ← Fixed top, transparan → solid saat scroll
    ├── <main>
    │   └── {children}  ← Konten halaman
    ├── <Footer />
    └── <AIChatbot />   ← Floating bubble kanan bawah
```

**Font variables** di body class: `font-body`, `bg-slate-50`, `antialiased`  
**Metadata SEO**: Title + meta description di-set di `layout.tsx`

---

## 🧩 Komponen

### Layout

#### `Navbar.tsx`
- **Fixed positioning** di atas halaman
- **Dual mode**: Transparan dengan logo putih (di hero) → solid putih dengan logo normal (saat scroll/halaman lain)
- **Dropdown "Jelajahi"**: Menggabungkan 5 link (Edukasi, Berita, OHLC, Galeri, Karir) dalam satu dropdown panel bergambar ikon + deskripsi
- **Mobile responsive**: Hamburger menu dengan accordion untuk "Jelajahi"
- **Tombol ganda**: "Demo" (outline) + "Buka Akun" (gold gradient)

#### `Footer.tsx`
- Grid 4 kolom: Info perusahaan + logo besar, Tautan Cepat, Kontak, Newsletter
- Social media links: Instagram, Facebook, YouTube, LinkedIn
- Trading pattern overlay transparan di background
- Badge regulasi: BAPPEBTI, ICDX, ICH
- Copyright + Privacy Policy + Terms of Service

### Sections (Halaman Utama `/`)

| Komponen | Seksi | Fitur Kunci |
|---|---|---|
| `HeroSection` | Banner utama | Animated orbs, candlestick decoration, tombol CTA + Demo |
| `AboutSection` | Tentang Kami | Stats counter animasi, timeline milestone, badge regulasi |
| `ProductsSection` | Produk | Card produk (Forex, Gold, Silver, Oil, Index) dengan detail |
| `PlatformSection` | Platform | Fitur MT4/MT5, download CTA, dark background |
| `ToolsSection` | Tools | Trading Simulator + Money Flow Diagram |
| `AICenterSection` | AI Center | Sentiment Analysis + Risk Profiler |
| `OpenAccountSection` | Buka Akun | 4 langkah buka akun dengan ikon & connector |

### AI Components

#### `AIChatbot.tsx` — Chatbot "Vira"
- Floating bubble kanan bawah, dapat dibuka/tutup
- **Engine**: Berbasis `ai-engine.ts` (knowledge base + regex matching)
- Fitur: quick reply buttons, typing indicator, timestamp pesan
- Kategori pertanyaan: perusahaan, produk, akun, regulasi, edukasi, dll

#### `SentimentAnalysis.tsx`
- Tombol analisis sentimen untuk instrumen (Gold, EUR/USD, Oil, dsb.)
- Menampilkan skor bullish/bearish dengan progress bar
- Deskripsi faktor pendorong sentimen

#### `RiskProfiler.tsx`
- Kuesioner 5 pertanyaan (investasi, toleransi risiko, pengalaman, dll.)
- Menghasilkan profil: Konservatif / Moderat / Agresif
- Rekomendasi instrumen dan alokasi portofolio

### Tools Components

#### `TradingSimulator.tsx`
- Pilih instrumen (XAU/USD, EUR/USD)
- Input lot size dan arah (Buy/Sell)
- Simulasi harga real-time dengan random walk generator
- Tampilan posisi terbuka + floating P&L + tombol Close

#### `MoneyFlowDiagram.tsx`
- Visualisasi alur dana: Nasabah → Broker → Bursa → Pasar Internasional
- Animasi aliran dengan panah bergerak

### UI Primitives

#### `GradientButton.tsx`
- 4 varian: `gold`, `navy`, `outline`, `ghost`
- 3 ukuran: `sm`, `md`, `lg`
- Render sebagai `<button>` atau `<Link>` (jika prop `href`)
- Efek hover: shimmer overlay + scale

#### `SectionWrapper.tsx`
- Membungkus setiap `<section>` dengan `overflow-hidden`, `py-20`
- Trading pattern overlay otomatis (dapat di-toggle dengan `darkPattern` / `noPattern`)
- Animasi masuk berbasis `framer-motion` `whileInView`

#### `AnimatedCounter.tsx`
- Counter angka yang naik dari 0 → target saat elemen masuk viewport
- Dukungan suffix ("+", "%", dll.)

---

## 📚 Library Utility (`lib/`)

### `data.ts` — Single Source of Truth Data

File ini adalah **pusat data** seluruh aplikasi. Semua konten yang ditampilkan bersumber dari sini.

```typescript
// Entitas utama yang diekspor:

companyInfo         // Info dasar perusahaan (nama, alamat, kontak, sosmed)
companyStats        // 4 statistik utama (tahun, nasabah, cabang, kepuasan)
navLinks            // Link navigasi utama
products[]          // Daftar 5 produk trading dengan detail lengkap
platformFeatures[]  // 6 fitur platform trading
companyTimeline[]   // 7 milestone sejarah perusahaan
newsArticles[]      // 6 artikel berita/analisa dengan konten lengkap
jobPositions[]      // 5 lowongan pekerjaan
galleryItems[]      // 8 item galeri foto
marketInstruments[] // 8 instrumen pasar (harga mock)
learningModules[]   // 4 modul edukasi + quiz questions
faqs[]              // 6 pertanyaan umum
tradingGlossary[]   // 16 istilah kamus trading
```

### `utils.ts` — Fungsi Utilitas

```typescript
cn(...)                    // Merge Tailwind classes (clsx + twMerge)
formatCurrency(amount, currency)   // Format IDR / USD
formatDate(date)           // Format tanggal Indonesia (dd MMMM yyyy)
formatNumber(num)          // Format angka dengan titik ribuan
getGreeting()              // Sapaan kontekstual (pagi/siang/sore/malam)
slugify(text)              // Konversi teks ke URL slug
generateCandlestickData(days, startPrice) // Generator data OHLC (candlestick)
calculatePipValue(pair, lotSize)   // Kalkulasi nilai pip per pasangan
calculateMargin(price, lot, lev)   // Kalkulasi margin yang dibutuhkan
calculatePnL(entry, current, lot, direction, pair) // Kalkulasi P&L posisi
```

### `trading-engine.ts` — Engine Simulasi Trading

Berisi logika bisnis inti simulasi trading:

```typescript
// Interface utama
interface Position      // Satu posisi trading (symbol, direction, entry, lot, pnl)
interface AccountState  // State akun (balance, equity, margin, openPositions)

// Konstanta
INITIAL_BALANCE  = 100_000_000  // Rp 100 juta
DEFAULT_LEVERAGE = 100
CONTRACT_SIZE    = 100_000      // 1 lot standar

// Fungsi utama
getPipValueIDR(symbol, lotSize)               // Nilai pip dalam IDR
getMarginRequiredIDR(symbol, lot, price, lev) // Margin yang dibutuhkan (IDR)
calculatePositionPnL(position)                // Floating P&L posisi
updateAccountState(state)                     // Update equity, freeMargin, marginLevel
generateTick(currentPrice, volatility)        // Random walk harga (simulasi)
```

### `ai-engine.ts` — Engine AI Chatbot Vira

Knowledge base dan logika pencocokan pesan chatbot:

```typescript
interface KnowledgeEntry {
  keywords: string[]   // Kata kunci untuk matching
  patterns: RegExp[]   // Pola regex untuk matching lebih akurat
  response: string     // Respons yang diberikan
  category: string     // Kategori (greeting, company, product, account, dll)
  priority: number     // Prioritas matching (lebih tinggi = didahulukan)
}
```

**Kategori knowledge base yang tersedia:**
- `greeting` — Sapaan & perpisahan
- `company` — Info perusahaan, alamat, jam kerja, kontak
- `product` — Forex, Gold, Silver, Oil, Indeks
- `account` — Cara buka akun, modal minimum, akun demo
- `regulation` — BAPPEBTI, keamanan dana, segregated account
- `education` — Leverage, spread, margin, stop loss, dll
- `platform` — MT4/MT5, download, fitur
- `deposit_withdraw` — Metode deposit/withdrawal
- `faq` — Pertanyaan umum lainnya

---

## 🚀 Cara Menjalankan

### Prasyarat

- **Node.js** versi 18 atau lebih baru
- **npm** (sudah termasuk dalam Node.js)
- **Git**

### 1. Clone Repository

```bash
git clone https://github.com/AnandaHariadi/Victory-Profile.git
cd Victory-Profile
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka browser di: **http://localhost:3000**

Server menggunakan **Turbopack** (bundler Next.js generasi baru) sehingga hot reload sangat cepat.

### 4. Build Production (Opsional)

```bash
npm run build
npm run start
```

---

## 📜 Scripts

| Script | Perintah | Deskripsi |
|---|---|---|
| `dev` | `next dev` | Jalankan development server dengan Turbopack |
| `build` | `next build` | Build bundle production yang dioptimalkan |
| `start` | `next start` | Jalankan server production setelah build |
| `lint` | `eslint` | Cek kualitas kode dengan ESLint |

---

## ⚙️ Konfigurasi

### `next.config.ts`

Konfigurasi Next.js minimal tanpa kustomisasi khusus. Fitur bawaan yang aktif:
- **App Router** (default Next.js 13+)
- **Turbopack** (aktif saat `npm run dev`)
- **Image Optimization** via `next/image`
- **Font Optimization** via `next/font/google`

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,              // Strict mode TypeScript aktif
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]         // Alias @ → src/ untuk import bersih
    }
  }
}
```

Path alias `@/` memungkinkan import seperti:
```typescript
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
```

### `postcss.config.mjs`

Menggunakan `@tailwindcss/postcss` sebagai plugin PostCSS untuk mengaktifkan Tailwind v4.

### ESLint (`eslint.config.mjs`)

Menggunakan `eslint-config-next` dengan aturan Next.js bawaan.

---

## 📐 Konvensi Kode

### Struktur Komponen

```typescript
// 1. 'use client' jika perlu interaktivitas
'use client';

// 2. Import (urutan: React → Next → library → komponen → tipe)
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/GradientButton';

// 3. Interface/Type (jika ada)
interface Props { ... }

// 4. Konstanta/data lokal (di luar komponen)
const items = [...];

// 5. Komponen utama (default export)
export default function ComponentName({ prop }: Props) {
  // state hooks
  // effect hooks
  // handler functions
  // return JSX
}
```

### Penamaan File
- Komponen React → **PascalCase** (`HeroSection.tsx`)
- Utility/lib → **camelCase** (`ai-engine.ts`, `utils.ts`)
- Halaman Next.js → **kebab-case folder** + `page.tsx` (`buka-akun/page.tsx`)

### Styling
- Menggunakan **Tailwind utility classes** sebagai prioritas utama
- Class khusus di `globals.css` untuk pola berulang (`.glass`, `.gradient-text-gold`, `.pattern-trading`, dll.)
- Fungsi `cn()` dari `@/lib/utils` untuk menggabungkan class secara kondisional:
  ```typescript
  className={cn('base-class', condition && 'conditional-class', className)}
  ```

### Data Management
- **Semua data statis** ada di `src/lib/data.ts` — jangan hardcode data di komponen
- Komponen hanya **mengimpor** data dari `data.ts`, tidak mendefinisikan data sendiri

---

## 👤 Pengembang

Proyek ini dikembangkan dalam konteks magang di **PT Victory International Futures**.

**Repository:** [https://github.com/AnandaHariadi/Victory-Profile](https://github.com/AnandaHariadi/Victory-Profile)

---

## 📄 Lisensi

Proyek ini bersifat **privat** dan dikembangkan untuk keperluan internal PT Victory International Futures. Semua hak cipta dilindungi.

---

