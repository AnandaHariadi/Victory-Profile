'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium animated gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

        {/* Trading/finance corak pattern */}
        <div className="absolute inset-0 pattern-trading opacity-[0.06] pointer-events-none" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          }}
          animate={{ x: [0, -50, 0], y: [0, -60, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />

        {/* Diagonal light streak */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background:
              'linear-gradient(120deg, transparent 30%, rgba(212,175,55,0.08) 50%, transparent 70%)',
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950/80 to-transparent pointer-events-none" />
      </div>

      {/* Floating candlestick chart decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 opacity-20 pointer-events-none">
        {[70, 45, 85, 55, 90, 40, 75].map((h, i) => (
          <motion.div
            key={i}
            className="flex items-end gap-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.5 }}
          >
            <div className="w-1 bg-gold-500/60 rounded-sm" style={{ height: `${h * 0.4}px` }} />
            <div
              className={`w-4 rounded-sm ${i % 2 === 0 ? 'bg-emerald-400/60' : 'bg-red-400/60'}`}
              style={{ height: `${h * 0.6}px` }}
            />
            <div className="w-1 bg-gold-500/60 rounded-sm" style={{ height: `${h * 0.3}px` }} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8">
              Mitra Trading Global{' '}
              <span className="gradient-text-gold">Terpercaya Anda</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Navigasi pasar finansial dunia dengan presisi dan transparansi. Kami memadukan
              teknologi mutakhir, likuiditas mendalam, dan keamanan dana absolut untuk mengoptimalkan
              potensi investasi Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="/buka-akun">
                <GradientButton size="lg" className="w-full sm:w-auto shadow-lg shadow-gold-500/30">
                  Mulai Trading Sekarang <ArrowRight className="w-5 h-5" />
                </GradientButton>
              </Link>
              <Link href="/demo-account">
                <GradientButton
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10"
                >
                  Coba Akun Demo Gratis
                </GradientButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
