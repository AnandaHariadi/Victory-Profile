'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Wallet, Landmark, TrendingUp, AlertTriangle, Shield } from 'lucide-react';

export default function MoneyFlowDiagram() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 bg-gold-50 text-gold-700 text-xs font-bold rounded-bl-3xl border-b border-l border-gold-100">
        100% AMAN & TRANSPARAN
      </div>
      
      <div className="text-center mb-10 mt-4">
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Transparansi Alur Dana Nasabah</h3>
        <p className="text-sm text-slate-500">Sesuai dengan regulasi BAPPEBTI, dana Anda dipisahkan dari dana operasional perusahaan.</p>
      </div>

      <div className="max-w-4xl mx-auto relative pb-8">
        {/* Step 1: Deposit */}
        <div className="flex flex-col items-center mb-8 relative z-10">
          <motion.div 
            className="w-20 h-20 rounded-full bg-blue-50 border-4 border-white shadow-lg flex items-center justify-center text-blue-500 mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <Wallet className="w-8 h-8" />
          </motion.div>
          <h4 className="font-bold text-navy-900">Nasabah (Anda)</h4>
          <p className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2">Deposit Dana</p>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center mb-8 relative">
           <motion.div 
             className="h-16 w-1 bg-gradient-to-b from-blue-200 to-gold-300 rounded-full relative"
             initial={{ height: 0 }}
             whileInView={{ height: 64 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
           >
             <motion.div 
               className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500"
               animate={{ y: [0, 60] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />
           </motion.div>
        </div>

        {/* Step 2: Segregated Account */}
        <div className="flex flex-col items-center mb-12 relative z-10">
          <motion.div 
            className="w-64 p-6 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 shadow-xl shadow-gold-500/20 text-white text-center border-2 border-gold-400 relative overflow-hidden group"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Landmark className="w-10 h-10 mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-1">Segregated Account</h4>
            <p className="text-xs text-gold-100 leading-tight">Rekening Terpisah di Bank Custodian yang ditunjuk resmi (BCA, Mandiri, dll)</p>
          </motion.div>
          
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
            <Shield className="w-4 h-4" /> Diawasi BAPPEBTI & ICH
          </div>
        </div>

        {/* Split paths */}
        <div className="grid grid-cols-2 gap-8 relative pt-8">
           {/* Connecting horizontal line */}
           <motion.div 
             className="absolute top-0 left-1/4 right-1/4 h-1 bg-slate-200 rounded-full"
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.6 }}
           />
           {/* Connecting vertical lines */}
           <div className="absolute top-0 left-1/4 w-1 h-8 bg-slate-200" />
           <div className="absolute top-0 right-1/4 w-1 h-8 bg-slate-200" />

           {/* Path 1: Trading */}
           <motion.div 
             className="flex flex-col items-center text-center px-4"
             initial={{ x: -20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.8 }}
           >
             <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center text-navy-600 mb-3 border border-navy-100">
               <TrendingUp className="w-8 h-8" />
             </div>
             <h5 className="font-bold text-sm text-navy-900">Eksekusi Market</h5>
             <p className="text-xs text-slate-500 mt-1">Order diteruskan ke pasar global melalui bursa ICDX</p>
           </motion.div>

           {/* Path 2: Withdrawal */}
           <motion.div 
             className="flex flex-col items-center text-center px-4"
             initial={{ x: 20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.8 }}
           >
             <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-3 border border-green-100">
               <ArrowRight className="w-8 h-8" />
             </div>
             <h5 className="font-bold text-sm text-navy-900">Penarikan (Withdrawal)</h5>
             <p className="text-xs text-slate-500 mt-1">Dana ditarik kembali ke rekening pribadi nasabah</p>
           </motion.div>
        </div>
        
      </div>
      
      <div className="bg-slate-50 p-4 rounded-xl flex gap-3 text-sm text-slate-600 mt-4 border border-slate-100">
        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
        <p>Dana di Segregated Account <strong>tidak dapat</strong> digunakan untuk operasional perusahaan PT Victory International Futures. Dana hanya dapat digunakan untuk keperluan transaksi trading nasabah itu sendiri.</p>
      </div>
    </div>
  );
}
