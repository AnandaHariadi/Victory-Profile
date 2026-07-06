'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 gradient-hero z-0">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-navy-600/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-sm font-medium text-white">Pialang Berjangka Resmi BAPPEBTI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8">
              Mitra Trading Global <br />
              <span className="gradient-text-gold">Terpercaya Anda</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Navigasi pasar finansial dunia dengan presisi dan transparansi. Kami memadukan teknologi mutakhir, likuiditas mendalam, dan keamanan dana absolut untuk mengoptimalkan potensi investasi Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <GradientButton size="lg" className="w-full sm:w-auto shadow-lg shadow-gold-500/30">
                Mulai Trading Sekarang <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10">
                Pelajari Lebih Lanjut
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
