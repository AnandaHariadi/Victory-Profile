'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, TrendingUp, CheckCircle2, Calendar, Users, Building2, Heart } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import AnimatedCounter from '../ui/AnimatedCounter';
import { companyInfo, companyStats, companyTimeline } from '@/lib/data';

const statIcons: Record<string, React.ReactNode> = {
  calendar: <Calendar className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
};

export default function AboutSection() {
  return (
    <SectionWrapper id="tentang-kami" className="bg-white">
      {/* Stats Row - moved from Hero */}
      <div className="mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-gold-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-navy-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-navy-50 flex items-center justify-center text-navy-600 mb-4 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                  {statIcons[stat.icon]}
                </div>
                <div className="text-4xl font-heading font-bold text-navy-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text & Vision/Mission */}
        <div>
          <div className="mb-8">
            <div className="section-divider mb-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Lebih Dari Sekadar Pialang Berjangka
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Sejak didirikan pada tahun {companyInfo.founded}, {companyInfo.name} telah berkomitmen untuk memberikan pengalaman trading terbaik, teraman, dan paling transparan bagi masyarakat Indonesia.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Kami memahami bahwa kesuksesan nasabah adalah kesuksesan kami. Oleh karena itu, kami memadukan teknologi mutakhir dengan edukasi komprehensif untuk membantu Anda meraih tujuan finansial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <motion.div 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 card-hover"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Legal & Aman</h3>
              <p className="text-sm text-slate-600">Terdaftar resmi di BAPPEBTI. Dana tersimpan aman di rekening terpisah (Segregated Account).</p>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 card-hover"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Inovasi Berkelanjutan</h3>
              <p className="text-sm text-slate-600">Teknologi trading terkini dengan eksekusi market tercepat dan alat analisis lengkap.</p>
            </motion.div>
          </div>

          {/* Badges */}
          <div className="mt-10 p-6 rounded-2xl bg-navy-950 text-white">
             <div className="text-sm text-slate-400 mb-4 uppercase tracking-wider font-semibold">Regulasi & Keanggotaan</div>
             <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  <span className="font-semibold">BAPPEBTI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  <span className="font-semibold">ICDX</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  <span className="font-semibold">ICH</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Interactive Timeline / Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-100 to-gold-50 rounded-3xl transform rotate-3" />
          <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
                <Award className="w-6 h-6 text-gold-500" />
                Perjalanan Kami
              </h3>
              <div className="text-sm text-slate-500">{companyTimeline.length} Milestones</div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {companyTimeline.slice(0, 4).map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gold-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white text-xs font-bold">
                    {item.year.toString().slice(2)}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm transition-all hover:shadow-md hover:border-gold-200">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-navy-900 text-lg">{item.title}</h4>
                      <span className="text-gold-600 font-bold text-sm bg-gold-50 px-2 py-1 rounded">{item.year}</span>
                    </div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
               <button className="text-sm font-semibold text-navy-600 hover:text-gold-600 transition-colors flex items-center gap-1 mx-auto">
                 Lihat Sejarah Lengkap
               </button>
            </div>
          </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
