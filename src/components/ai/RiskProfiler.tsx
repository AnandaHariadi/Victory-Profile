'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, ChevronRight, RefreshCcw } from 'lucide-react';
import { calculateRiskProfile, RiskProfile } from '@/lib/ai-engine';

const questions = [
  {
    text: "Berapa lama Anda berencana untuk menginvestasikan dana Anda?",
    options: [
      { text: "Kurang dari 1 tahun", score: 1 },
      { text: "1 hingga 3 tahun", score: 2 },
      { text: "Lebih dari 3 tahun", score: 3 }
    ]
  },
  {
    text: "Bagaimana reaksi Anda jika nilai investasi turun 20% dalam sebulan?",
    options: [
      { text: "Jual semua untuk mencegah kerugian lebih besar", score: 1 },
      { text: "Tahan dan tunggu pasar pulih", score: 2 },
      { text: "Beli lebih banyak karena harganya sedang murah", score: 3 }
    ]
  },
  {
    text: "Berapa persentase dari total pendapatan yang Anda alokasikan untuk investasi berisiko?",
    options: [
      { text: "Kurang dari 10%", score: 1 },
      { text: "10% hingga 30%", score: 2 },
      { text: "Lebih dari 30%", score: 3 }
    ]
  },
  {
    text: "Bagaimana Anda menggambarkan pengalaman trading/investasi Anda sebelumnya?",
    options: [
      { text: "Pemula (Belum pernah atau hanya deposito)", score: 1 },
      { text: "Menengah (Pernah trading saham/reksadana)", score: 2 },
      { text: "Berpengalaman (Aktif trading forex/kripto/derivatif)", score: 3 }
    ]
  },
  {
    text: "Apa tujuan utama Anda dalam berinvestasi?",
    options: [
      { text: "Melindungi nilai uang dari inflasi (Aman)", score: 1 },
      { text: "Pertumbuhan modal secara bertahap", score: 2 },
      { text: "Mendapatkan keuntungan maksimal dalam waktu singkat", score: 3 }
    ]
  }
];

export default function RiskProfiler() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{ profile: RiskProfile, score: number, description: string, suggestion: string } | null>(null);

  const handleSelectOption = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      // Finished
      const res = calculateRiskProfile(newAnswers);
      setResult(res);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden min-h-[400px] flex flex-col">
      <div className="absolute top-0 right-0 p-3 bg-navy-50 text-navy-600 rounded-bl-3xl border-b border-l border-navy-100">
        <Target className="w-5 h-5" />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-navy-900">AI Risk Profiler</h3>
        <p className="text-xs text-slate-500">Kenali profil risiko Anda untuk strategi trading yang tepat.</p>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex justify-between items-center text-xs text-slate-400 font-semibold">
                <span>Pertanyaan {currentStep + 1} dari {questions.length}</span>
                <div className="flex gap-1">
                   {questions.map((_, i) => (
                     <div key={i} className={`h-1.5 w-6 rounded-full ${i <= currentStep ? 'bg-gold-500' : 'bg-slate-200'}`} />
                   ))}
                </div>
              </div>

              <h4 className="text-lg font-bold text-navy-900 mb-6 leading-snug">
                {questions[currentStep].text}
              </h4>

              <div className="space-y-3">
                {questions[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-gold-500 hover:bg-gold-50 transition-all flex justify-between items-center group"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-gold-700">{opt.text}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-gold-500" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-navy-50 flex items-center justify-center mb-4 border-4 border-navy-100">
                <Target className="w-10 h-10 text-navy-600" />
              </div>
              <h4 className="text-sm text-slate-500 mb-1">Profil Risiko Anda:</h4>
              <div className="text-3xl font-bold text-gold-600 mb-4">{result.profile}</div>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-sm text-slate-700 text-left space-y-4">
                <p>{result.description}</p>
                <div className="p-3 rounded-lg bg-navy-900 text-white text-xs border-l-4 border-gold-500">
                  <strong>Rekomendasi AI:</strong> {result.suggestion}
                </div>
              </div>

              <button 
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 mx-auto text-sm font-semibold text-navy-600 hover:text-gold-600 transition-colors"
              >
                <RefreshCcw className="w-4 h-4" /> Ulangi Kuis
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
