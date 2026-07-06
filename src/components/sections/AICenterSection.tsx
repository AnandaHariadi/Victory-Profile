'use client';

import { Cpu } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SentimentAnalysis from '../ai/SentimentAnalysis';
import RiskProfiler from '../ai/RiskProfiler';

export default function AICenterSection() {
  return (
    <SectionWrapper id="ai-center" className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-blue-100/50 via-gold-100/30 to-purple-100/50 blur-3xl pointer-events-none rounded-full" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 text-white font-semibold text-sm mb-6 shadow-lg shadow-navy-900/20">
          <Cpu className="w-4 h-4 text-gold-400" />
          Powered by Artificial Intelligence
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
          Trading Lebih Pintar dengan AI
        </h2>
        <p className="text-lg text-slate-600">
          Victory IF mengintegrasikan teknologi kecerdasan buatan untuk membantu Anda membuat keputusan trading yang lebih obyektif dan terukur.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        <SentimentAnalysis />
        <RiskProfiler />
      </div>
      
      <div className="text-center mt-12 text-sm text-slate-500 relative z-10 max-w-2xl mx-auto px-4">
        *Disclaimer: Alat analisis AI disediakan murni untuk tujuan edukasi dan informatif. Ini bukan saran keuangan atau instruksi trading. Keputusan investasi sepenuhnya ada di tangan nasabah.
      </div>
    </SectionWrapper>
  );
}
