'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { X, MapPin, Briefcase, Clock, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GradientButton from '../ui/GradientButton';
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Financial Analyst',
    department: 'Research & Analysis',
    location: 'Surabaya',
    type: 'Full-time',
    description: 'Menganalisis tren pasar global dan memberikan rekomendasi trading kepada klien institusional dan retail.',
    requirements: [
      'Minimal S1 jurusan Ekonomi, Keuangan, atau terkait',
      'Pengalaman minimal 3 tahun di industri pialang/keuangan',
      'Memiliki sertifikasi WPPE/WMI menjadi nilai tambah',
      'Kemampuan analisis teknikal dan fundamental yang kuat'
    ]
  },
  {
    id: '2',
    title: 'Wealth Manager',
    department: 'Sales & Marketing',
    location: 'Surabaya',
    type: 'Full-time',
    description: 'Membangun dan memelihara hubungan dengan klien HNW (High Net Worth) serta memberikan solusi investasi.',
    requirements: [
      'Pengalaman sales/marketing minimal 2 tahun',
      'Memiliki jaringan klien yang luas',
      'Kemampuan komunikasi dan presentasi yang sangat baik',
      'Berorientasi pada target'
    ]
  },
  {
    id: '3',
    title: 'Customer Support Specialist',
    department: 'Operations',
    location: 'Surabaya',
    type: 'Full-time',
    description: 'Memberikan dukungan teknis dan bantuan operasional kepada nasabah Victory International Futures.',
    requirements: [
      'Pendidikan minimal D3 semua jurusan',
      'Bersedia bekerja dalam sistem shift',
      'Kemampuan problem solving yang baik',
      'Familiar dengan platform MetaTrader'
    ]
  }
];

export default function CareerSection() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  
  return (
    <SectionWrapper id="karir" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-slate-200 text-gold-600 font-semibold text-sm mb-6 shadow-sm">
                Bergabung Bersama Kami
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-950 mb-6 leading-tight">
                Bangun Karir <br />
                <span className="text-gold-500">Cemerlang</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Kami mencari individu berbakat yang memiliki passion di pasar finansial. Jadilah bagian dari tim yang menggerakkan inovasi dalam industri pialang berjangka.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  </div>
                  <span>Lingkungan kerja dinamis & suportif</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  </div>
                  <span>Jenjang karir transparan</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  </div>
                  <span>Benefit kompetitif di industri</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Job Listings */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {jobPositions.map((job, index) => (
              <motion.div 
                key={job.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedJob(job)}
                className="bg-white p-6 rounded-2xl border border-slate-200 cursor-pointer hover:border-gold-500 transition-colors shadow-sm hover:shadow-md group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-gold-500" />
                  </div>
                </div>
                <p className="text-slate-600 line-clamp-2 text-sm">{job.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Sliding Drawer for Job Details */}
      <AnimatePresence>
        {selectedJob && (
          <Dialog
            static
            open={true}
            onClose={() => setSelectedJob(null)}
            className="relative z-[100]"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Sliding Panel */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-y-0 right-0 flex max-w-full">
                <AnimatePresence>
                  <Dialog.Panel
                    as={motion.div}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    className="pointer-events-auto w-screen max-w-2xl bg-white shadow-2xl h-full flex flex-col"
                  >
                    {/* Drawer Header */}
                    <div className="px-6 py-6 sm:px-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                      <div>
                        <h2 className="text-2xl font-bold text-navy-950">{selectedJob.title}</h2>
                        <div className="flex gap-3 text-sm text-slate-500 mt-2">
                          <span>{selectedJob.department}</span> • 
                          <span>{selectedJob.location}</span> • 
                          <span>{selectedJob.type}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="rounded-full p-2 bg-white hover:bg-slate-200 text-slate-500 transition-colors border border-slate-200 shadow-sm"
                        onClick={() => setSelectedJob(null)}
                      >
                        <span className="sr-only">Close panel</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Drawer Content */}
                    <div className="px-6 py-8 sm:px-8 overflow-y-auto flex-1 bg-white">
                      <div className="prose prose-slate max-w-none">
                        <h3 className="text-lg font-bold text-navy-950 mb-3">Deskripsi Pekerjaan</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">{selectedJob.description}</p>
                        
                        <h3 className="text-lg font-bold text-navy-950 mb-3">Tanggung Jawab</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
                          {selectedJob.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Drawer Footer (Apply action) */}
                    <div className="px-6 py-6 sm:px-8 border-t border-slate-100 bg-slate-50">
                      <GradientButton className="w-full flex items-center justify-center gap-2 py-4">
                        Kirim Lamaran Sekarang <Send className="w-5 h-5" />
                      </GradientButton>
                      <p className="text-center text-xs text-slate-500 mt-4">
                        Atau kirim CV ke <span className="font-semibold text-navy-900">hrd@vif.co.id</span> dengan subjek posisi yang dilamar.
                      </p>
                    </div>
                  </Dialog.Panel>
                </AnimatePresence>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
