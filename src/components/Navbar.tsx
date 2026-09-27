import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent border-b border-slate-900/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white focus:outline-none"
        >
          <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400 group-hover:to-cyan-300 transition-all">
            VibeShift
          </span>
          <span className="text-cyan-400 font-light tracking-widest text-sm uppercase">Media</span>
        </a>

        {/* Zone 2: Navigation Links (Clean text with hover states) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('megoldasok')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Megoldások
          </button>
          <button
            onClick={() => scrollToSection('eloteszt')}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Élő Teszt
          </button>
          <button
            onClick={() => scrollToSection('csomagok')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Csomagok
          </button>
          <button
            onClick={() => scrollToSection('eredmenyek')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Eredmények
          </button>
          <button
            onClick={() => scrollToSection('folyamat')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Folyamat
          </button>
        </nav>

        {/* Zone 3: Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/20 active:scale-98 whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>15 Perces Konzultáció</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold rounded bg-cyan-400 text-slate-950 cursor-pointer"
          >
            Időpont
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü megnyitása"
            className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 bg-slate-900/60 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection('megoldasok')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            Megoldások
          </button>
          <button
            onClick={() => scrollToSection('eloteszt')}
            className="block w-full text-left py-2 text-base font-medium text-cyan-400 flex items-center justify-between"
          >
            <span>Élő Teszt</span>
            <span className="text-xs bg-cyan-950/80 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800/40">Interaktív</span>
          </button>
          <button
            onClick={() => scrollToSection('csomagok')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            Csomagok
          </button>
          <button
            onClick={() => scrollToSection('eredmenyek')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            Eredmények
          </button>
          <button
            onClick={() => scrollToSection('folyamat')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            Folyamat
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              <span>15 Perces Konzultáció Foglalása</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
