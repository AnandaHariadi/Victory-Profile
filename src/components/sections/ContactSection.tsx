'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

// Inline SVGs for brand icons (since lucide-react doesn't include them all)
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function ContactSection() {
  return (
    <SectionWrapper id="kontak" className="bg-slate-50 py-24 relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Main Wrapper matching the UI reference */}
        <div className="bg-white rounded-xl shadow-2xl overflow-visible flex flex-col lg:flex-row relative">
          
          {/* Yellow Box Decor (behind right col) */}
          <div className="hidden lg:block absolute -top-8 -bottom-8 right-[-2rem] w-1/3 bg-[#FFD700] rounded-xl -z-10" />

          {/* Left Column: Form */}
          <div className="lg:w-7/12 p-10 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-[#1c1c1c] mb-4">Contact Us</h2>
              <p className="text-slate-500 mb-12 max-w-sm text-sm">
                Feel free to contact us any time. We will get back to you as soon as we can!
              </p>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-slate-300 py-2 text-[#1c1c1c] placeholder:text-slate-400 focus:outline-none focus:border-[#1c1c1c] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-slate-300 py-2 text-[#1c1c1c] placeholder:text-slate-400 focus:outline-none focus:border-[#1c1c1c] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-slate-300 py-2 text-[#1c1c1c] placeholder:text-slate-400 focus:outline-none focus:border-[#1c1c1c] transition-colors"
                  />
                </div>

                <button className="bg-[#1c1c1c] hover:bg-black text-white px-12 py-4 rounded font-bold tracking-widest text-sm transition-colors mt-8 w-full md:w-auto">
                  SEND
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Info Block */}
          <div className="lg:w-5/12 relative">
            {/* The Dark Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1c1c1c] text-white h-full p-10 md:p-16 flex flex-col justify-center rounded-xl lg:rounded-none lg:rounded-r-xl lg:my-8 lg:-ml-8 shadow-2xl relative z-10"
            >
              <h3 className="text-3xl font-bold mb-10">Info</h3>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-center gap-6">
                  <Mail className="w-6 h-6 text-slate-300 font-light" />
                  <span className="text-sm tracking-wide">info@vif.co.id</span>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="w-6 h-6 text-slate-300 font-light" />
                  <span className="text-sm tracking-wide">(031) 9924 1688</span>
                </div>
                <div className="flex items-start gap-6">
                  <MapPin className="w-6 h-6 text-slate-300 font-light shrink-0" />
                  <span className="text-sm tracking-wide leading-relaxed">
                    Pakuwon Center Superblock<br />
                    Tunjungan Plaza 5 Lt 15<br />
                    Surabaya 60261
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <Clock className="w-6 h-6 text-slate-300 font-light" />
                  <span className="text-sm tracking-wide">09:00 - 18:00</span>
                </div>
              </div>

            </motion.div>

            {/* Social Links placed at the bottom right, aligned with the yellow bg */}
            <div className="absolute -bottom-6 lg:-bottom-12 right-0 left-0 lg:left-auto flex justify-center lg:justify-end gap-6 px-10 z-20 pb-4">
               <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-[#1c1c1c] hover:text-white transition-colors">
                 <FacebookIcon />
               </a>
               <a href="https://www.instagram.com/victoryinternationalfutures/" target="_blank" rel="noreferrer" className="text-[#1c1c1c] hover:text-white transition-colors">
                 <InstagramIcon />
               </a>
               <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-[#1c1c1c] hover:text-white transition-colors">
                 <TwitterIcon />
               </a>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
