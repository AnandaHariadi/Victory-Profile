'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

// Mock Gallery Data
const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', title: 'Seminar Nasional Trading 2024', category: 'Event' },
  { id: 2, src: '/images/gallery-2.jpg', title: 'Kantor Cabang Surabaya', category: 'Office' },
  { id: 3, src: '/images/gallery-3.jpg', title: 'Penghargaan BAPPEBTI', category: 'Award' },
  { id: 4, src: '/images/gallery-4.jpg', title: 'Edukasi Nasabah VIP', category: 'Education' },
  { id: 5, src: '/images/gallery-5.jpg', title: 'Gathering Komunitas', category: 'Community' },
  { id: 6, src: '/images/gallery-6.jpg', title: 'Tim Analis Profesional', category: 'Team' },
];

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <SectionWrapper id="galeri" className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-navy-50 text-navy-600 font-semibold text-sm mb-6">
            Galeri Kegiatan
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-950 mb-6">
            Momen <span className="text-gold-500">Berharga</span> Kami
          </h2>
          <p className="text-lg text-slate-600">
            Intip berbagai kegiatan edukasi, seminar, dan aktivitas kantor PT Victory International Futures.
          </p>
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-slate-200 ${
                idx === 0 || idx === 3 ? 'md:row-span-2' : ''
              }`}
              style={{ minHeight: idx === 0 || idx === 3 ? '400px' : '250px' }}
              onClick={() => setSelectedImageIndex(idx)}
            >
              {/* Fallback solid color since we don't have real images */}
              <div className="absolute inset-0 bg-navy-900 flex items-center justify-center">
                 <span className="text-white/20 font-bold text-xl">{img.category}</span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/90 text-navy-950 flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <Dialog
            static
            open={true}
            onClose={() => setSelectedImageIndex(null)}
            className="relative z-[100]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
              aria-hidden="true"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-5xl max-h-screen flex flex-col items-center justify-center"
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute top-0 right-0 z-50 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Main Image Area */}
                <div className="relative w-full aspect-video bg-navy-900 rounded-lg overflow-hidden flex items-center justify-center shadow-2xl">
                   <span className="text-white/40 font-bold text-4xl">
                      {galleryImages[selectedImageIndex].title}
                   </span>
                </div>

                {/* Caption */}
                <div className="mt-6 text-center">
                  <span className="text-gold-500 text-sm font-bold tracking-wider uppercase mb-2 block">
                    {galleryImages[selectedImageIndex].category}
                  </span>
                  <h3 className="text-white text-2xl font-semibold">
                    {galleryImages[selectedImageIndex].title}
                  </h3>
                  <p className="text-slate-400 mt-2">
                    {selectedImageIndex + 1} of {galleryImages.length}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white/10 hover:bg-gold-500 hover:text-navy-900 text-white rounded-full transition-all backdrop-blur-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white/10 hover:bg-gold-500 hover:text-navy-900 text-white rounded-full transition-all backdrop-blur-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
