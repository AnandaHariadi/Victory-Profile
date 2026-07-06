'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GradientButton from '../ui/GradientButton';
import { products } from '@/lib/data';

// Define which product is highlighted as "Most popular" or similar
const highlightedProductId = 'gold';

export default function ProductsSection() {
  return (
    <SectionWrapper id="produk" className="bg-slate-50 py-28 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-navy-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-navy-50 border border-navy-100 text-navy-600 font-semibold text-sm mb-6 shadow-sm">
              Instrumen Trading Premium
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 leading-tight mb-6">
              Produk Investasi <br className="hidden sm:block" />
              <span className="text-gold-500">Kelas Dunia</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Diversifikasi portofolio Anda dengan berbagai instrumen perdagangan berjangka global. Nikmati spread kompetitif dan eksekusi secepat kilat.
            </p>
          </motion.div>
        </div>

        {/* Pricing/Package style Grid */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 xl:gap-8">
          {products.map((product, idx) => {
            const isHighlighted = product.id === highlightedProductId;
            
            return (
              <motion.div
                key={product.id}
                className={`relative flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)] bg-navy-900 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                  ${isHighlighted ? 'border-gold-500 shadow-gold-500/20 shadow-lg scale-105 z-10' : 'border-navy-700 hover:border-gold-500/50'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {/* Most Popular Badge */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Paling Populer
                    </span>
                  </div>
                )}
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Category */}
                  <div className="text-gold-400 text-sm font-bold uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {product.name}
                  </h3>
                  
                  {/* Main spec (e.g. Spread) */}
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-4xl font-bold text-white">{product.spread.replace('Mulai ', '')}</span>
                    <span className="text-slate-400 text-sm pb-1">/ spread</span>
                  </div>
                  
                  {/* Button */}
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all mb-8 flex items-center justify-center gap-2 group
                    ${isHighlighted ? 'bg-gold-500 text-navy-950 hover:bg-gold-400' : 'bg-navy-800 text-white hover:bg-navy-700 border border-navy-700 hover:border-gold-500/50'}`}
                  >
                    Detail Produk 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Specs List */}
                  <div className="space-y-4 flex-grow border-t border-navy-800 pt-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                         <Check className="w-3 h-3 text-gold-500" />
                      </div>
                      <span className="text-slate-300 text-sm leading-tight">
                        <strong className="text-white block mb-1">Maks. Leverage</strong>
                        {product.leverage}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                         <Check className="w-3 h-3 text-gold-500" />
                      </div>
                      <span className="text-slate-300 text-sm leading-tight">
                         <strong className="text-white block mb-1">Jam Trading</strong>
                         {product.tradingHours}
                      </span>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Keunggulan</span>
                      <ul className="space-y-3">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                             <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                             <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
