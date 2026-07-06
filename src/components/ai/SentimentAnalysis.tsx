'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, RefreshCw } from 'lucide-react';
import { analyzeSentiment } from '@/lib/ai-engine';

const MOCK_NEWS_HEADLINES = [
  "Emas melonjak capai rekor tertinggi di tengah ketegangan geopolitik.",
  "Data NFP positif dukung penguatan USD terhadap major currencies.",
  "OPEC+ umumkan pemangkasan produksi, harga minyak mentah naik tajam.",
  "Inflasi AS lebih tinggi dari perkiraan, pasar saham terkoreksi.",
  "Permintaan safe haven meningkat, silver ikut terdorong naik."
];

export default function SentimentAnalysis() {
  const [sentiment, setSentiment] = useState({ score: 50, label: 'Neutral' });
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const refreshSentiment = () => {
    setIsRefreshing(true);
    // Simulate analyzing multiple news sources
    setTimeout(() => {
      const combinedText = MOCK_NEWS_HEADLINES.join(' ');
      const result = analyzeSentiment(combinedText);
      setSentiment(result);
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    refreshSentiment();
    // Auto refresh every 30s
    const interval = setInterval(refreshSentiment, 30000);
    return () => clearInterval(interval);
  }, []);

  // Gauge calculation (0-100 mapped to -90 to 90 degrees)
  const rotation = (sentiment.score / 100) * 180 - 90;
  
  let sentimentColor = 'text-slate-500';
  let bgColor = 'bg-slate-500';
  let Icon = Minus;
  
  if (sentiment.label === 'Bullish') {
    sentimentColor = 'text-green-500';
    bgColor = 'bg-green-500';
    Icon = TrendingUp;
  } else if (sentiment.label === 'Bearish') {
    sentimentColor = 'text-red-500';
    bgColor = 'bg-red-500';
    Icon = TrendingDown;
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-navy-900">AI Sentiment Analysis</h3>
          <p className="text-xs text-slate-500">Menganalisis sentimen pasar secara real-time dari 50+ sumber berita.</p>
        </div>
        <button 
          onClick={refreshSentiment}
          className={`p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 transition-all ${isRefreshing ? 'animate-spin text-navy-500' : ''}`}
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
        {/* Gauge Chart */}
        <div className="relative w-48 h-24 overflow-hidden">
          {/* Gauge Background */}
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-slate-100 border-b-transparent border-r-transparent rotate-45" />
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-red-400 border-b-transparent border-r-transparent -rotate-45" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }} />
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-green-400 border-b-transparent border-l-transparent rotate-45" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }} />
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-slate-300 border-b-transparent rotate-45" style={{ clipPath: 'polygon(40% 0, 60% 0, 60% 50%, 40% 50%)' }} />

          {/* Needle */}
          <motion.div 
            className="absolute bottom-0 left-1/2 w-1 h-20 bg-navy-900 origin-bottom rounded-t-full -translate-x-1/2"
            animate={{ rotate: rotation }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <div className="absolute -bottom-3 -left-3 w-7 h-7 bg-navy-900 rounded-full border-4 border-white shadow-sm" />
          </motion.div>
        </div>

        {/* Score Display */}
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold font-mono text-navy-900 mb-2">
            {sentiment.score}<span className="text-xl text-slate-400">/100</span>
          </div>
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold text-white shadow-sm ${bgColor}`}>
            <Icon className="w-4 h-4" />
            {sentiment.label}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-100 pt-6">
        <h4 className="text-sm font-semibold text-slate-600 mb-3">Top Keywords Detected:</h4>
        <div className="flex flex-wrap gap-2">
           {['Emas', 'Rekor', 'NFP', 'Positif', 'OPEC+', 'USD'].map((word, i) => (
             <span key={i} className="px-3 py-1 rounded bg-navy-50 text-navy-600 text-xs font-medium border border-navy-100">
               {word}
             </span>
           ))}
        </div>
      </div>
    </div>
  );
}
