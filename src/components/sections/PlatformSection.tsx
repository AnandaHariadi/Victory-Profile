'use client';

import { motion } from 'framer-motion';
import { Download, Monitor, Smartphone, CheckCircle } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GradientButton from '../ui/GradientButton';
import { platformFeatures } from '@/lib/data';

export default function PlatformSection() {
  return (
    <SectionWrapper id="platform" className="bg-navy-950 text-white overflow-hidden py-24 relative" darkPattern>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Device Mockups / Visuals */}
        <div className="relative">
          {/* Main Desktop Mockup */}
          <motion.div 
            className="relative z-20 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-navy-900"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Mock browser header */}
            <div className="h-8 bg-navy-950 flex items-center px-4 gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Mock chart area */}
            <div className="h-[300px] p-6 relative">
              <div className="absolute inset-0 pattern-grid opacity-10" />
              {/* Candlesticks mock */}
              <div className="flex items-end justify-between h-full gap-2 px-4 pb-8">
                 {[40, 60, 45, 80, 50, 70, 90, 65, 85, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      className={`w-4 relative ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'} rounded-sm`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      {/* Wicks */}
                      <div className="absolute top-[-10px] bottom-[-10px] left-1/2 w-px bg-current -translate-x-1/2 opacity-50" />
                    </motion.div>
                 ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-navy-900 to-transparent" />
            </div>
          </motion.div>

          {/* Floating Mobile Mockup */}
          <motion.div 
            className="absolute -bottom-10 -right-10 w-48 h-[320px] rounded-[2rem] border-4 border-slate-800 bg-navy-950 shadow-2xl z-30 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y: useParallax(-0.1) }}
          >
            {/* Mock mobile UI */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="w-16 h-4 rounded bg-white/10" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <div>
                      <div className="w-10 h-4 bg-white/20 rounded mb-2" />
                      <div className="w-16 h-3 bg-white/10 rounded" />
                    </div>
                    <div className="w-12 h-6 bg-green-500/20 rounded text-green-400 text-[10px] flex items-center justify-center">+1.2%</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Text & Features */}
        <div>
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Platform Trading <span className="gradient-text-gold">Profesional</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Eksekusi strategi trading Anda dengan presisi tinggi menggunakan platform kelas dunia. Tersedia untuk semua perangkat Anda, kapan saja, di mana saja.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {platformFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <GradientButton variant="gold" className="gap-2">
              <Monitor className="w-5 h-5" /> Download untuk Windows
            </GradientButton>
            <GradientButton variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2">
              <Smartphone className="w-5 h-5" /> App Store / Play Store
            </GradientButton>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

// Parallax helper
import { useScroll, useTransform } from 'framer-motion';
function useParallax(value: number) {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 2000], [0, 2000 * value]);
}
