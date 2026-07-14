'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Newspaper,
  BarChart2,
  Image as ImageIcon,
  Briefcase,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { companyInfo } from '@/lib/data';
import GradientButton from '../ui/GradientButton';

const mainNavLinks = [
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Produk', href: '#produk' },
  { label: 'Platform', href: '#platform' },
  { label: 'Tools', href: '#tools' },
  { label: 'AI Center', href: '#ai-center' },
  { label: 'Kontak', href: '/kontak' },
];

const exploreLinks = [
  {
    label: 'Edukasi',
    href: '/edukasi',
    icon: BookOpen,
    desc: 'Modul & quiz trading',
  },
  {
    label: 'Berita',
    href: '/berita',
    icon: Newspaper,
    desc: 'Analisa & berita pasar',
  },
  {
    label: 'OHLC',
    href: '/ohlc',
    icon: BarChart2,
    desc: 'Data harga Open High Low Close',
  },
  {
    label: 'Galeri',
    href: '/galeri',
    icon: ImageIcon,
    desc: 'Foto kantor & event',
  },
  {
    label: 'Karir',
    href: '/karir',
    icon: Briefcase,
    desc: 'Lowongan & magang',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const isNavbarSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setIsExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isNavbarSolid
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <Image
              src="/victory-logo.png"
              alt="Victory International Futures"
              width={180}
              height={48}
              priority
              unoptimized
              className={cn(
                'h-14 md:h-16 w-auto object-contain transition-opacity duration-300',
                isNavbarSolid ? 'opacity-100' : 'opacity-0 absolute'
              )}
            />
            <Image
              src="/victory-logo.png"
              alt="Victory International Futures"
              width={180}
              height={48}
              unoptimized
              className={cn(
                'h-14 md:h-16 w-auto object-contain transition-opacity duration-300 brightness-0 invert',
                !isNavbarSolid ? 'opacity-100' : 'opacity-0 absolute'
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {mainNavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-gold-500',
                      isNavbarSolid ? 'text-slate-600' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Jelajahi Dropdown */}
              <li ref={exploreRef} className="relative">
                <button
                  id="explore-menu-btn"
                  onClick={() => setIsExploreOpen(!isExploreOpen)}
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-500',
                    isNavbarSolid ? 'text-slate-600' : 'text-white/80 hover:text-white'
                  )}
                >
                  Jelajahi
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      isExploreOpen ? 'rotate-180' : ''
                    )}
                  />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={cn(
                    'absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-200 origin-top-right',
                    isExploreOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  )}
                >
                  <div className="p-2">
                    {exploreLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsExploreOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                          <item.icon className="w-4 h-4 text-navy-600 group-hover:text-gold-600 transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-navy-900">
                            {item.label}
                          </div>
                          <div className="text-xs text-slate-400">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Demo account shortcut in dropdown */}
                  <div className="border-t border-slate-100 p-3">
                    <Link
                      href="/demo-account"
                      onClick={() => setIsExploreOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors"
                    >
                      Coba Akun Demo Gratis
                    </Link>
                  </div>
                </div>
              </li>
            </ul>

            <div className="flex items-center gap-2 ml-2">
              <Link href="/demo-account">
                <GradientButton size="sm" variant="outline" className={cn(
                  isNavbarSolid ? 'border-navy-700 text-navy-700 hover:bg-navy-50' : 'border-white/40 text-white hover:bg-white/10'
                )}>
                  Demo
                </GradientButton>
              </Link>
              <Link href="/buka-akun">
                <GradientButton size="sm" variant="gold" className="ml-1">
                  Buka Akun <ChevronRight className="w-4 h-4" />
                </GradientButton>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', isNavbarSolid ? 'text-navy-900' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', isNavbarSolid ? 'text-navy-900' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[72px] bg-white shadow-xl transition-all duration-300 ease-in-out origin-top max-h-[85vh] overflow-y-auto',
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-gold-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Jelajahi accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-slate-700 hover:text-gold-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
            >
              Jelajahi
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform duration-200',
                  isMobileExploreOpen ? 'rotate-180' : ''
                )}
              />
            </button>
            {isMobileExploreOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-gold-600 hover:bg-slate-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-slate-400" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 px-3 space-y-2">
            <Link href="/demo-account" onClick={() => setIsMobileMenuOpen(false)}>
              <GradientButton fullWidth variant="outline">
                Coba Akun Demo Gratis
              </GradientButton>
            </Link>
            <Link href="/buka-akun" onClick={() => setIsMobileMenuOpen(false)}>
              <GradientButton fullWidth variant="gold">
                Buka Akun
              </GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
