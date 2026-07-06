'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { X, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { newsArticles, NewsArticle } from '@/lib/data';

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  // Filter out just a few for the main view
  const displayArticles = newsArticles.slice(0, 3);

  return (
    <SectionWrapper id="berita" className="bg-slate-50 py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-navy-100 text-navy-800 font-semibold text-sm mb-6">
            Berita & Analisa
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-950 mb-6">
            Wawasan Pasar Terkini
          </h2>
          <p className="text-lg text-slate-600">
            Dapatkan update terbaru seputar pergerakan harga, analisis fundamental, dan wawasan teknikal langsung dari tim ahli kami.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
              onClick={() => setSelectedArticle(article)}
            >
              {/* Thumbnail Placeholder */}
              <div className="h-56 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors z-10" />
                {/* Fallback pattern for thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 text-white group-hover:scale-105 transition-transform duration-700">
                   <div className="opacity-20 font-heading font-bold text-6xl">{article.category}</div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-navy-950 mb-4 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-navy-900 font-semibold text-sm group-hover:text-gold-600 transition-colors mt-auto">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <Dialog
            static
            open={true}
            onClose={() => setSelectedArticle(null)}
            className="relative z-[100]"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel
                  as={motion.div}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden relative my-8"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-6 right-6 z-30 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Article Hero */}
                  <div className="h-80 relative flex items-end p-8 sm:p-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950" />
                    <div className="absolute inset-0 bg-black/40" />
                    
                    <div className="relative z-10">
                      <span className="bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                        {selectedArticle.category}
                      </span>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
                        {selectedArticle.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gold-500" />
                          {selectedArticle.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gold-500" />
                          {selectedArticle.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gold-500" />
                          {selectedArticle.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-8 sm:p-12 max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-slate prose-headings:font-heading prose-headings:text-navy-950 prose-a:text-gold-600 max-w-none">
                      {selectedArticle.content.split('\n').map((paragraph, i) => {
                        if (paragraph.startsWith('## ')) {
                          return <h3 key={i} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h3>;
                        } else if (paragraph.startsWith('### ')) {
                          return <h4 key={i} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h4>;
                        } else if (paragraph.startsWith('- ')) {
                          return <li key={i} className="ml-6 mb-2">{paragraph.replace('- ', '')}</li>;
                        } else if (paragraph.startsWith('> **Disclaimer:**')) {
                           return (
                             <div key={i} className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg text-sm text-orange-800">
                               <strong>Disclaimer:</strong> Artikel ini bersifat informatif dan bukan merupakan saran investasi.
                             </div>
                           );
                        } else if (paragraph.trim() === '') {
                          return null;
                        } else {
                          return <p key={i} className="mb-4">{paragraph}</p>;
                        }
                      })}
                    </div>
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
