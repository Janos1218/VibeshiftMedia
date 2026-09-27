import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { LegalModalType } from '../types';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onScrollToTop }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top zone: Brand & Quick links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-white tracking-tight">VibeShift</span>
              <span className="text-cyan-400 font-light tracking-widest text-xs uppercase">Media</span>
            </div>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              Kevesebb mellébeszélés, több mérhető ügyfél. Automatizált hívásmentő és ügyfélszerző technológia növekedni vágyó helyi vállalkozásoknak.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs text-slate-300">
              <a
                href="tel:+36308924150"
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono">+36 30 892 4150</span>
              </a>
              <span className="hidden sm:inline text-slate-700">·</span>
              <a
                href="mailto:info@vibeshiftmedia.hu"
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>info@vibeshiftmedia.hu</span>
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">Navigáció</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#megoldasok" className="hover:text-white transition-colors">Megoldások</a>
              </li>
              <li>
                <a href="#eloteszt" className="hover:text-white transition-colors">Élő Teszt</a>
              </li>
              <li>
                <a href="#csomagok" className="hover:text-white transition-colors">Csomagok & Árak</a>
              </li>
              <li>
                <a href="#eredmenyek" className="hover:text-white transition-colors">Eredmények</a>
              </li>
              <li>
                <a href="#folyamat" className="hover:text-white transition-colors">A Folyamat</a>
              </li>
              <li>
                <a href="#idopontfoglalas" className="text-cyan-400 font-semibold hover:underline">15 Perces Konzultáció</a>
              </li>
            </ul>
          </div>

          {/* Official Business Details */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">Cégadatok</div>
            <div className="text-[11px] space-y-1.5 text-slate-300 font-sans">
              <div><strong className="text-slate-200">VibeShift Media</strong></div>
              <div>üzemelteti: Nemeth Media EV</div>
              <div>Székhely: 1117 Budapest, Magyarország</div>
              <div className="font-mono text-slate-300">Adószám: 59841203-1-42</div>
            </div>
          </div>

        </div>

        {/* Legal links & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Legal clickables */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-400">
            <button
              onClick={() => onOpenLegal('impresszum')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Impresszum
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('gdpr')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Adatkezelési Tájékoztató (GDPR)
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('aszf')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              ÁSZF
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('dpa')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Adatfeldolgozói Megállapodás (DPA)
            </button>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4 text-slate-400">
            <span>© 2026 VibeShift Media. Minden jog fenntartva.</span>
            <button
              onClick={onScrollToTop}
              aria-label="Vissza a lap tetejére"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
