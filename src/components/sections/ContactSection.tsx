'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
    <polygon points="9.545 15.568 15.818 12 9.545 8.432" fill="white"/>
  </svg>
);

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@vif.co.id', href: 'mailto:info@vif.co.id' },
  { icon: Phone, label: 'Telepon', value: '(031) 9924 1688', href: 'tel:+623199241688' },
  { icon: MapPin, label: 'Kantor Pusat', value: 'Jl. Diponegoro No. 153, Darmo, Surabaya 60241', href: 'https://maps.google.com/?q=Jl.+Diponegoro+No.+153+Darmo+Surabaya' },
  { icon: Clock, label: 'Jam Operasional', value: 'Senin - Jumat, 09:00 - 18:00 WIB', href: '#' },
];

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/victoryinternationalfutures/' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/VictoryInternationalFutures/' },
  { icon: YoutubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@VictoryInternationalFutures' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <SectionWrapper id="kontak" className="bg-white py-24 relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
            Hubungi Kami
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-0 items-stretch">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 border border-slate-200 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none relative"
          >
            <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">Kirim Pesan</h3>
            <p className="text-slate-500 text-sm mb-8">Kami siap membantu Anda. Isi formulir di bawah ini dan tim kami akan segera merespons.</p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="text-xl font-heading font-bold text-navy-900 mb-2">Pesan Terkirim!</h4>
                <p className="text-slate-500 text-sm">Tim kami akan menghubungi Anda dalam 1×24 jam kerja.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">Pesan</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all resize-none"
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40"
                >
                  Kirim Pesan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-navy-900 text-white p-8 md:p-10 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none flex flex-col justify-between relative overflow-hidden"
          >
            {/* Decorative gold line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />

            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Informasi Kontak</h3>
              <p className="text-slate-400 text-sm mb-10">Hubungi kami melalui saluran berikut.</p>

              <div className="space-y-7">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-0.5">{item.label}</p>
                      <p className="text-sm text-white/90 leading-relaxed">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-4">Ikuti Kami</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 hover:bg-gold-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[300px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6!2d112.7387!3d-7.2685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9a3c5e3e3e3%3A0x0!2sJl.%20Diponegoro%20No.153%2C%20Darmo%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1625000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Victory International Futures"
          />
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
