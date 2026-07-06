'use client';

import { motion } from 'framer-motion';
import { User, Shield, CreditCard, PlayCircle } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GradientButton from '../ui/GradientButton';

const steps = [
  {
    id: 1,
    title: 'Isi Data Diri',
    description: 'Lengkapi formulir pendaftaran online dalam waktu kurang dari 5 menit.',
    icon: <User className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Verifikasi Identitas',
    description: 'Upload KTP/SIM dan foto selfie untuk memenuhi standar keamanan KYC BAPPEBTI.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Deposit Dana',
    description: 'Setor dana awal ke Segregated Account bank custodian resmi secara aman.',
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'Mulai Trading',
    description: 'Akun aktif! Download platform dan mulai transaksi di pasar global.',
    icon: <PlayCircle className="w-6 h-6" />,
  },
];

export default function OpenAccountSection() {
  return (
    <SectionWrapper id="buka-akun" className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
            Siap Memulai Perjalanan Trading Anda?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Buka akun live sekarang dan nikmati eksekusi cepat, spread rendah, serta dukungan edukasi dari tim profesional kami.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-navy-200 via-gold-300 to-navy-200" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-navy-600 mb-6 relative group">
                  <div className="absolute inset-0 bg-gold-500/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {step.icon}
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-500 text-white font-bold flex items-center justify-center border-4 border-slate-50 shadow-sm">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <GradientButton size="lg" className="px-12 text-lg shadow-xl shadow-gold-500/20">
              Buka Akun Live Sekarang
            </GradientButton>
            <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              Data Anda dienkripsi dan dijamin keamanannya
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
