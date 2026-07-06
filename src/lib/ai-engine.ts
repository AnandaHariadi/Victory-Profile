// ============================================
// AI & ML ENGINE (Browser-Side)
// ============================================

// --- CHATBOT KNOWLEDGE BASE ---
const knowledgeBase = [
  {
    keywords: ['halo', 'hai', 'pagi', 'siang', 'sore', 'malam'],
    response: 'Halo! Saya Vira, Asisten Virtual Victory International Futures. Ada yang bisa saya bantu terkait trading hari ini?'
  },
  {
    keywords: ['buka akun', 'daftar', 'register'],
    response: 'Untuk membuka akun, Anda bisa klik tombol "Buka Akun" di kanan atas. Siapkan KTP, NPWP (opsional), dan ikuti 4 langkah mudah kami. Proses verifikasi biasanya memakan waktu kurang dari 1x24 jam kerja.'
  },
  {
    keywords: ['spread', 'biaya', 'komisi'],
    response: 'VIF menawarkan spread sangat kompetitif. Untuk Major Pairs (seperti EUR/USD) mulai dari 0.1 pips, dan untuk Gold (XAU/USD) mulai dari 0.3 pips. Kami mengedepankan transparansi tanpa biaya tersembunyi.'
  },
  {
    keywords: ['deposit', 'setor', 'modal', 'minimal'],
    response: 'Modal minimum untuk memulai trading di akun reguler adalah ekuivalen USD 500. Dana disetorkan langsung ke Segregated Account resmi kami di bank custodian.'
  },
  {
    keywords: ['aman', 'bappebti', 'penipuan', 'legal'],
    response: 'Keamanan Anda adalah prioritas kami. VIF adalah pialang resmi yang terdaftar dan diawasi penuh oleh BAPPEBTI. 100% dana nasabah disimpan di Segregated Account (rekening terpisah) sehingga aman.'
  },
  {
    keywords: ['forex', 'apa itu forex'],
    response: 'Forex (Foreign Exchange) adalah pasar keuangan terbesar di dunia tempat mata uang diperdagangkan. Anda bisa mendapat keuntungan dari selisih nilai tukar mata uang yang berfluktuasi.'
  },
  {
    keywords: ['leverage'],
    response: 'Leverage adalah daya ungkit. Kami menyediakan leverage hingga 1:500. Artinya dengan modal $1, Anda bisa mengendalikan nilai transaksi hingga $500. Namun ingat, leverage tinggi juga meningkatkan risiko.'
  },
  {
    keywords: ['withdraw', 'tarik dana'],
    response: 'Penarikan dana (withdrawal) dapat dilakukan kapan saja melalui Client Area. Dana akan ditransfer langsung ke rekening terdaftar Anda pada hari kerja yang sama jika diajukan sebelum jam 11:00 WIB.'
  }
];

export function getChatbotResponse(message: string): string {
  const normalizedMsg = message.toLowerCase();
  
  // Simple pattern matching
  for (const item of knowledgeBase) {
    if (item.keywords.some(kw => normalizedMsg.includes(kw))) {
      return item.response;
    }
  }
  
  return "Maaf, saya belum memahami pertanyaan Anda. Anda bisa bertanya tentang 'cara buka akun', 'minimal deposit', 'spread', atau 'keamanan dana'. Anda juga bisa menghubungi tim CS kami untuk bantuan lebih lanjut.";
}

// --- SENTIMENT ANALYSIS ---
const positiveWords = ['naik', 'profit', 'untung', 'bullish', 'rekor', 'reli', 'penguatan', 'positif', 'dukung'];
const negativeWords = ['turun', 'rugi', 'bearish', 'koreksi', 'anjlok', 'negatif', 'tekanan', 'krisis'];

export function analyzeSentiment(text: string): { score: number, label: 'Bullish' | 'Bearish' | 'Neutral' } {
  const normalized = text.toLowerCase();
  let score = 50; // Base neutral score
  
  let positiveCount = 0;
  let negativeCount = 0;
  
  positiveWords.forEach(word => {
    if (normalized.includes(word)) positiveCount++;
  });
  
  negativeWords.forEach(word => {
    if (normalized.includes(word)) negativeCount++;
  });
  
  // Calculate final score (0-100)
  score = 50 + (positiveCount * 10) - (negativeCount * 10);
  score = Math.max(0, Math.min(100, score)); // Clamp between 0-100
  
  let label: 'Bullish' | 'Bearish' | 'Neutral' = 'Neutral';
  if (score >= 60) label = 'Bullish';
  if (score <= 40) label = 'Bearish';
  
  return { score, label };
}

// --- RISK PROFILER ---
export type RiskProfile = 'Konservatif' | 'Moderat' | 'Agresif';

export function calculateRiskProfile(answers: number[]): { profile: RiskProfile, score: number, description: string, suggestion: string } {
  // Assuming 5 questions, score 1-3 each
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
