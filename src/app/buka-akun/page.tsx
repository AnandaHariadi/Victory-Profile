'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, Briefcase, FileText, CheckCircle2, ChevronRight, ChevronLeft, Upload } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';

const steps = [
  { id: 1, name: 'Data Diri', icon: User },
  { id: 2, name: 'Pekerjaan', icon: Briefcase },
  { id: 3, name: 'Dokumen', icon: FileText },
  { id: 4, name: 'Selesai', icon: CheckCircle2 },
];

export default function BukaAkunPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((p) => Math.min(p + 1, steps.length));
  const prevStep = () => setCurrentStep((p) => Math.max(p - 1, 1));

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-950 mb-4">
            Buka Akun <span className="text-gold-500">Live</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Langkah pertama Anda menuju kebebasan finansial. Proses pendaftaran cepat, aman, dan sepenuhnya diawasi oleh BAPPEBTI.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gold-500 transition-all duration-500 -z-10" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep >= step.id;
              const isCurrent = currentStep === step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-50 transition-colors duration-300 ${isActive ? 'bg-gold-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`mt-2 text-sm font-semibold ${isCurrent ? 'text-navy-900' : 'text-slate-500'}`}>
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative min-h-[450px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy-950 mb-6">Informasi Pribadi</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap (Sesuai KTP)</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" placeholder="Contoh: Budi Santoso" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" placeholder="budi@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon / WhatsApp</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" placeholder="08123456789" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Tanggal Lahir</label>
                      <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy-950 mb-6">Informasi Pekerjaan & Keuangan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pekerjaan / Profesi</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all">
                        <option>Pilih Pekerjaan</option>
                        <option>Pegawai Swasta</option>
                        <option>Wiraswasta</option>
                        <option>PNS / TNI / POLRI</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Penghasilan Tahunan</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy-900 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all">
                        <option>Pilih Rentang Penghasilan</option>
                        <option>&lt; Rp 100 Juta</option>
                        <option>Rp 100 Juta - 500 Juta</option>
                        <option>Rp 500 Juta - 1 Miliar</option>
                        <option>&gt; Rp 1 Miliar</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pengalaman Trading</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="exp" className="w-4 h-4 text-gold-500 border-slate-300 focus:ring-gold-500" />
                          <span className="text-slate-600">Belum Pernah</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="exp" className="w-4 h-4 text-gold-500 border-slate-300 focus:ring-gold-500" />
                          <span className="text-slate-600">&lt; 1 Tahun</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="exp" className="w-4 h-4 text-gold-500 border-slate-300 focus:ring-gold-500" />
                          <span className="text-slate-600">&gt; 1 Tahun</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy-950 mb-6">Unggah Dokumen</h2>
                  <div className="space-y-6">
                    
                    {/* KTP Upload */}
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-gold-500 transition-colors bg-slate-50 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-6 h-6 text-navy-600" />
                      </div>
                      <h4 className="text-navy-900 font-semibold mb-1">Upload KTP Asli</h4>
                      <p className="text-slate-500 text-sm mb-4">Format JPG, PNG atau PDF. Maksimal 5MB.</p>
                      <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                        Pilih File
                      </button>
                    </div>

                    {/* NPWP Upload */}
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-gold-500 transition-colors bg-slate-50 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-6 h-6 text-navy-600" />
                      </div>
                      <h4 className="text-navy-900 font-semibold mb-1">Upload NPWP (Opsional)</h4>
                      <p className="text-slate-500 text-sm mb-4">Format JPG, PNG atau PDF. Maksimal 5MB.</p>
                      <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                        Pilih File
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy-950 mb-4">Pendaftaran Berhasil!</h2>
                  <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Data Anda telah kami terima dan sedang dalam proses verifikasi. Kami telah mengirimkan email konfirmasi ke alamat email Anda beserta panduan deposit.
                  </p>
                  
                  <div className="flex gap-4">
                    <GradientButton variant="outline" className="text-navy-900 border-slate-200 hover:bg-slate-50">
                      Kembali ke Beranda
                    </GradientButton>
                    <GradientButton>
                      Akses Client Area
                    </GradientButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Form Navigation */}
          {currentStep < 4 && (
            <div className="border-t border-slate-100 p-6 md:px-12 bg-slate-50/50 flex justify-between items-center">
              <button 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition-colors ${currentStep === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200'}`}
              >
                <ChevronLeft className="w-4 h-4" /> Kembali
              </button>
              
              <GradientButton onClick={nextStep} className="flex items-center gap-2">
                {currentStep === 3 ? 'Kirim Pendaftaran' : 'Selanjutnya'} <ChevronRight className="w-4 h-4" />
              </GradientButton>
            </div>
          )}
        </div>

        {/* Security Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
           <div className="flex items-center gap-2 text-slate-600 font-semibold">
             <Shield className="w-5 h-5 text-slate-500" /> Enkripsi SSL 256-bit
           </div>
           <div className="flex items-center gap-2 text-slate-600 font-semibold">
             <CheckCircle2 className="w-5 h-5 text-slate-500" /> Diawasi BAPPEBTI
           </div>
        </div>

      </div>
    </main>
  );
}
