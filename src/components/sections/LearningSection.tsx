'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { Play, X, BookOpen, Clock, ChevronRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GradientButton from '../ui/GradientButton';

// Mock educational content
const educationalModules = [
  {
    id: 'mod-1',
    title: 'Pengantar Trading Berjangka',
    description: 'Pelajari dasar-dasar pasar berjangka, istilah-istilah penting, dan bagaimana cara kerjanya.',
    level: 'Pemula',
    duration: '15 Menit',
    thumbnail: '/images/edu-1.jpg'
  },
  {
    id: 'mod-2',
    title: 'Analisis Teknikal Dasar',
    description: 'Memahami cara membaca candlestick, tren, dan indikator teknikal paling populer.',
    level: 'Menengah',
    duration: '25 Menit',
    thumbnail: '/images/edu-2.jpg'
  },
  {
    id: 'mod-3',
    title: 'Manajemen Risiko Profitabel',
    description: 'Strategi mengamankan modal Anda menggunakan Stop Loss, Take Profit, dan Money Management.',
    level: 'Menengah',
    duration: '20 Menit',
    thumbnail: '/images/edu-3.jpg'
  }
];

export default function LearningSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <SectionWrapper id="edukasi" className="bg-slate-50 py-24 relative">
      <div className="container mx-auto px-4">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-100 text-navy-800 font-semibold text-sm mb-6">
              <BookOpen className="w-4 h-4" /> Victory Academy
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-950 mb-6">
              Belajar Trading dari <span className="text-gold-600">Nol</span>
            </h2>
            <p className="text-lg text-slate-600">
              Akses perpustakaan modul pembelajaran eksklusif kami. Dirancang oleh trader profesional untuk membantu Anda menguasai pasar finansial.
            </p>
          </div>
          <div className="flex-shrink-0">
             <GradientButton variant="outline" className="text-navy-900 border-navy-200 hover:bg-navy-50">
               Lihat Semua Modul <ChevronRight className="w-4 h-4 ml-1" />
             </GradientButton>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalModules.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(mod.id)}
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-lg bg-navy-900">
                {/* Fallback pattern */}
                <div className="absolute inset-0 pattern-grid opacity-20" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors duration-500 z-10" />
                
                {/* Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500 transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                   <span className="bg-navy-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10">
                     {mod.level}
                   </span>
                   <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                     <Clock className="w-3 h-3" /> {mod.duration}
                   </span>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                {mod.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Theater Mode Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <Dialog
            static
            open={true}
            onClose={() => setActiveVideo(null)}
            className="relative z-[100]"
          >
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-0 md:p-8">
                <Dialog.Panel
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-5xl bg-navy-950 md:rounded-3xl shadow-2xl overflow-hidden relative"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-4 right-4 z-30 p-2 bg-white/10 hover:bg-gold-500 hover:text-navy-900 text-white rounded-full backdrop-blur-md transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Fake Video Player Area */}
                  <div className="w-full aspect-video bg-black relative flex items-center justify-center group/player">
                    <div className="absolute inset-0 pattern-grid opacity-20" />
                    
                    {/* Simulated Loading/Play State */}
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-center z-10"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                         <Play className="w-8 h-8 text-gold-500 ml-1" fill="currentColor" />
                      </div>
                      <p className="text-white/50 text-sm font-medium">Video Player Placeholder</p>
                    </motion.div>
                    
                    {/* Fake Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                       <div className="h-full bg-gold-500 w-1/3 relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                       </div>
                    </div>
                  </div>
                  
                  {/* Video Info below player */}
                  <div className="p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {educationalModules.find(m => m.id === activeVideo)?.title}
                    </h2>
                    <p className="text-slate-400">
                       {educationalModules.find(m => m.id === activeVideo)?.description}
                    </p>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
