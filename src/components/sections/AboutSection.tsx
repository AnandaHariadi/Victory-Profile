'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, TrendingUp, CheckCircle2, Calendar, Users, Building2, Heart } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import AnimatedCounter from '../ui/AnimatedCounter';
import GradientButton from '../ui/GradientButton';
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
        
        {/* Left: Text & Vision/Mission */}
        <div className="lg:col-span-6 lg:pl-4 xl:pl-8">
          <div className="max-w-xl">
            <div className="mb-10">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-gold-600 font-semibold text-sm mb-6 shadow-sm">
                Tentang Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-950 mb-6 leading-tight">
                Lebih Dari Sekadar <span className="text-gold-500">Pialang Berjangka</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Sejak didirikan pada tahun {companyInfo.founded}, {companyInfo.name} telah berkomitmen untuk memberikan pengalaman trading terbaik, teraman, dan paling transparan bagi masyarakat Indonesia.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Kami memahami bahwa kesuksesan nasabah adalah kesuksesan kami. Oleh karena itu, kami memadukan teknologi mutakhir dengan edukasi komprehensif untuk membantu Anda meraih tujuan finansial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
              <motion.div 
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Legal & Aman</h3>
                <p className="text-sm text-slate-600">Terdaftar di BAPPEBTI. Dana aman di Segregated Account.</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Inovasi Terus Menerus</h3>
                <p className="text-sm text-slate-600">Teknologi trading terkini dengan eksekusi secepat kilat.</p>
              </motion.div>
            </div>

            {/* Badges */}
            <div className="p-8 rounded-3xl bg-navy-950 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <div className="text-sm text-slate-400 mb-4 uppercase tracking-wider font-semibold relative z-10">Regulasi & Keanggotaan</div>
               <div className="flex flex-wrap items-center gap-x-8 gap-y-4 relative z-10">
                  <div className="flex items-center gap-2 bg-navy-900 px-4 py-2 rounded-lg border border-navy-800">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                    <span className="font-bold tracking-wide">BAPPEBTI</span>
                  </div>
                  <div className="flex items-center gap-2 bg-navy-900 px-4 py-2 rounded-lg border border-navy-800">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                    <span className="font-bold tracking-wide">ICDX</span>
                  </div>
                  <div className="flex items-center gap-2 bg-navy-900 px-4 py-2 rounded-lg border border-navy-800">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                    <span className="font-bold tracking-wide">ICH</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right: Premium Interactive Timeline */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-navy-500/10 rounded-[2.5rem] transform rotate-2 blur-sm" />
          <div className="relative bg-navy-950 p-8 md:p-10 rounded-[2rem] shadow-2xl border border-navy-800 overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-500/5 blur-[80px] pointer-events-none" />
            
            <div className="flex items-center justify-between mb-10 relative z-10 border-b border-navy-800 pb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Award className="w-8 h-8 text-gold-500" />
                Perjalanan Kami
              </h3>
              <div className="bg-navy-900 px-3 py-1 rounded-full border border-navy-700 text-sm font-semibold text-gold-400">
                {companyTimeline.length} Milestones
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold-500/50 before:via-navy-700 before:to-transparent z-10">
              {companyTimeline.slice(0, 4).map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="relative flex items-start gap-6 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-navy-950 bg-gold-500 shadow-[0_0_15px_rgba(234,179,8,0.4)] shrink-0 z-10 text-navy-950 text-sm font-black group-hover:scale-110 transition-transform">
                    {item.year.toString().slice(2)}
                  </div>
                  <div className="flex-1 p-5 rounded-2xl border border-navy-800 bg-navy-900/50 backdrop-blur-md transition-all group-hover:bg-navy-800/80 group-hover:border-gold-500/50">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <span className="text-gold-400 font-bold text-sm bg-gold-500/10 px-2 py-0.5 rounded">{item.year}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 text-center relative z-10">
               <GradientButton fullWidth variant="gold" className="py-4 shadow-lg shadow-gold-500/20">
                 Jelajahi Sejarah Lengkap
               </GradientButton>
            </div>
          </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
