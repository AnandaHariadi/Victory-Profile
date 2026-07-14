'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Shield,
  BookOpen,
  Zap,
  CheckCircle2,
  ArrowRight,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  BarChart2,
  DollarSign,
  Award,
  RefreshCw,
} from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';

const demoFeatures = [
  {
    icon: DollarSign,
    title: 'Virtual Deposit $10.000',
    desc: 'Dana virtual untuk latihan trading bebas risiko',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: BarChart2,
    title: 'Platform Full Akses',
    desc: 'Semua fitur platform trading profesional',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: RefreshCw,
    title: 'Data Harga Real-Time',
    desc: 'Harga live dari pasar internasional',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: BookOpen,
    title: 'Akses Materi Edukasi',
    desc: 'Modul belajar dan quiz interaktif',
    color: 'text-gold-600',
    bg: 'bg-gold-50',
  },
  {
    icon: Shield,
    title: 'Tanpa Risiko Nyata',
    desc: 'Belajar tanpa takut kehilangan modal',
    color: 'text-navy-600',
    bg: 'bg-navy-50',
  },
  {
    icon: Zap,
    title: 'Aktif Instan',
    desc: 'Akun demo langsung aktif setelah daftar',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

const demoStats = [
  { value: '30 Hari', label: 'Masa Aktif Demo' },
  { value: '$10.000', label: 'Virtual Balance' },
  { value: '24/5', label: 'Jam Trading' },
  { value: 'Gratis', label: 'Biaya Pendaftaran' },
];

const mockPortfolio = [
  { symbol: 'XAU/USD', name: 'Gold', price: '2.385,50', change: '+1.23%', positive: true },
  { symbol: 'EUR/USD', name: 'Euro/Dollar', price: '1.0865', change: '-0.15%', positive: false },
  { symbol: 'GBP/USD', name: 'Pound/Dollar', price: '1.2720', change: '+0.08%', positive: true },
  { symbol: 'OIL/USD', name: 'Crude Oil', price: '76.30', change: '+0.67%', positive: true },
];

type FormState = 'form' | 'success';

export default function DemoAccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState<FormState>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setIsLoading(false);
    setFormState('success');
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Gratis · Tanpa Deposit · Tanpa Risiko
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Akun Demo Trading
              <br />
              <span className="gradient-text-gold">Victory International Futures</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Latih skill trading Anda dengan virtual balance $10.000 menggunakan platform dan data
              harga real-time kami — 100% gratis.
            </p>
          </motion.div>

          {/* Demo Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {demoStats.map((s) => (
              <div
                key={s.label}
                className="px-4 py-4 rounded-2xl glass border border-white/10 text-center"
              >
                <div className="text-2xl font-bold text-gold-400">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {formState === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8"
                >
                  <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                    Daftar Akun Demo Gratis
                  </h2>
                  <p className="text-slate-500 text-sm mb-8">
                    Isi data di bawah dan akun demo Anda langsung aktif
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nama Lengkap
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Nama lengkap Anda"
                          className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all text-sm bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="nama@email.com"
                          className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all text-sm bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        No. Telepon / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="08xx xxxx xxxx"
                          className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all text-sm bg-slate-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Buat Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          minLength={8}
                          value={form.password}
                          onChange={(e) => setForm({ ...form, password: e.target.value })}
                          placeholder="Min. 8 karakter"
                          className="w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all text-sm bg-slate-50 focus:bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Agree */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.agree}
                        onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-gold-500 rounded"
                      />
                      <span className="text-sm text-slate-500 leading-relaxed">
                        Saya menyetujui{' '}
                        <span className="text-gold-600 font-semibold cursor-pointer hover:underline">
                          Syarat & Ketentuan
                        </span>{' '}
                        serta{' '}
                        <span className="text-gold-600 font-semibold cursor-pointer hover:underline">
                          Kebijakan Privasi
                        </span>{' '}
                        Victory International Futures
                      </span>
                    </label>

                    <GradientButton
                      type="submit"
                      fullWidth
                      size="lg"
                      disabled={isLoading}
                      className="mt-2"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          Membuat Akun Demo...
                        </>
                      ) : (
                        <>
                          Buat Akun Demo Gratis <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </GradientButton>
                  </form>

                  <p className="mt-6 text-center text-sm text-slate-400">
                    Sudah punya akun?{' '}
                    <span className="text-gold-600 font-semibold cursor-pointer hover:underline">
                      Login di sini
                    </span>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </motion.div>
                  <h2 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                    Akun Demo Berhasil Dibuat! 🎉
                  </h2>
                  <p className="text-slate-500 mb-3">
                    Selamat datang, <span className="font-semibold text-navy-800">{form.name}</span>!
                  </p>
                  <p className="text-slate-500 text-sm mb-8">
                    Detail login telah dikirim ke{' '}
                    <span className="font-semibold text-navy-700">{form.email}</span>. Periksa inbox
                    Anda.
                  </p>

                  <div className="bg-navy-50 rounded-2xl p-5 mb-8 text-left space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Login Email</span>
                      <span className="font-semibold text-navy-800">{form.email}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Virtual Balance</span>
                      <span className="font-bold text-emerald-600">$10.000,00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Masa Aktif</span>
                      <span className="font-semibold text-navy-800">30 Hari</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Status</span>
                      <span className="font-semibold text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        Aktif
                      </span>
                    </div>
                  </div>

                  <GradientButton fullWidth size="lg">
                    Mulai Trading Demo <ChevronRight className="w-5 h-5" />
                  </GradientButton>
                  <p className="mt-4 text-sm text-slate-400">
                    Ingin akun live?{' '}
                    <a href="/buka-akun" className="text-gold-600 font-semibold hover:underline">
                      Buka Akun Real
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Preview & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mock Trading Dashboard Preview */}
            <div className="bg-navy-950 rounded-3xl p-6 shadow-xl border border-white/5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-slate-400 text-xs">Demo Virtual Balance</p>
                  <p className="text-3xl font-bold text-white">$10.000,00</p>
                  <p className="text-emerald-400 text-xs flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    P&L: +$325,50 hari ini
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center">
                  <BarChart2 className="w-6 h-6 text-gold-400" />
                </div>
              </div>

              {/* Price Table */}
              <div className="space-y-2">
                {mockPortfolio.map((item) => (
                  <div
                    key={item.symbol}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center">
                        <span className="text-xs font-bold text-gold-400">
                          {item.symbol.split('/')[0].slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{item.symbol}</div>
                        <div className="text-slate-500 text-xs">{item.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white text-sm font-bold">{item.price}</div>
                      <div
                        className={`text-xs font-semibold ${
                          item.positive ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {item.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="py-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm hover:bg-emerald-500/30 transition-colors">
                  BUY
                </button>
                <button className="py-2.5 rounded-xl bg-red-500/20 text-red-400 font-bold text-sm hover:bg-red-500/30 transition-colors">
                  SELL
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {demoFeatures.map((f) => (
                <motion.div
                  key={f.title}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"
                >
                  <div className={`w-9 h-9 rounded-lg ${f.bg} flex items-center justify-center mb-3`}>
                    <f.icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <div className="text-sm font-bold text-navy-900 leading-tight mb-1">{f.title}</div>
                  <div className="text-xs text-slate-400">{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
