import React from 'react';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PackageType } from '../types';

interface PricingSectionProps {
  onSelectPackage: (pkg: PackageType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="csomagok" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <span>TRANSZPARENS ÁRAZÁS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Csomagok, amelyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">visszahozzák az árukat</span>
          </h2>
          <p className="text-base text-slate-300">
            Nincs apróbetű vagy rejtett költség. Válassz a vállalkozásod jelenlegi méretéhez igazodó csomagot, vagy indíts kockázatmentesen a 30 napos Pilot hónappal!
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          
          {/* Tier 1: Láthatóság */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display">LÁTHATÓSÁG</h3>
                <p className="text-xs text-slate-400 mt-1">Helyi jelenlét és stabil digitális alapok</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">45.000</span>
                  <span className="text-slate-300 text-sm font-medium">Ft / hó</span>
                </div>
                <div className="text-[11px] text-slate-400">Havi elszámolás, bármikor lemondható</div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">A csomag tartalma:</div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Google Térkép Profil (optimalizálás & frissítés)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Értékelésgyűjtő App (automatikus 5 csillagos vélemények)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>WordPress Karbantartás & Biztonsági mentések</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cloudflare Sebesség & DDoS védelem</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onSelectPackage('lathatosag')}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
              >
                Csomag Kiválasztása
              </button>
            </div>
          </div>

          {/* Tier 2: ÜGYFÉLSZERZŐ MOTOR (Featured / Best) */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan-400 p-8 flex flex-col justify-between relative shadow-2xl shadow-cyan-950/50 transform lg:-translate-y-2">
            
            {/* Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>ÜGYFÉLSZERZŐ MOTOR (Legjobb)</span>
            </div>

            <div className="space-y-6 pt-2">
              <div>
                <h3 className="text-xl font-bold text-white font-display">ÜGYFÉLSZERZŐ MOTOR</h3>
                <p className="text-xs text-cyan-300/80 mt-1">A teljes automatizált ügyfélszerző gépezet</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-200 font-mono tabular-nums">135.000</span>
                  <span className="text-slate-300 text-sm font-medium">Ft / hó</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">Átlagosan 3-5x megtérülés az első hónapban</div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">A csomag tartalma:</div>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5 font-semibold text-white">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Minden a Láthatóság csomagból</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>MissedCall-TextBack (Azonnali SMS 5 mp-en belül)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Google Naptár Időpontfoglaló integráció</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>1 db Célzott Hirdetési Kampány (Google vagy Meta)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>MailerLite Hírlevél & Utókövetési Alapok</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onSelectPackage('motor')}
                className="w-full py-4 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                CSOMAG KIVÁLASZTÁSA
              </button>
            </div>
          </div>

          {/* Tier 3: PIACVEZETŐ */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display">PIACVEZETŐ</h3>
                <p className="text-xs text-slate-400 mt-1">Aggresszív piaci dominancia és teljes kiszervezés</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">250.000</span>
                  <span className="text-slate-300 text-sm font-medium">Ft / hó</span>
                </div>
                <div className="text-[11px] text-slate-400">Komplett marketing és automatizációs csapat</div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">A csomag tartalma:</div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5 font-semibold text-white">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Minden az Ügyfélszerző Motor csomagból</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Komplett Hirdetéskezelés (Google + Meta hirdetések)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Automata E-mail Funnel (MailerLite Pro)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Többcsatornás Utókövetés (SMS + Email + Remarketing)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Havi VIP Stratégia & Dedikált fiókkezelő</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onSelectPackage('piacvezeto')}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
              >
                Csomag Kiválasztása
              </button>
            </div>
          </div>

        </div>

        {/* 5. A Kockázatmentes Belépő (Pilot Banner a táblázat alatt) */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-slate-900 border border-cyan-500/40 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
                <span className="text-xl">💡</span>
                <span>Bizonytalan vagy? Kezdjük egy 30 napos Rendszerindítással (Pilot Hónap)!</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Felépítjük az alapvető automatizmusokat (MissedCall, Google Cégem, Naptár) <span className="text-white font-bold font-mono">fix 75.000 Ft-ért</span>, hosszú távú elköteleződés nélkül. Ha a 30. nap végén elégedett vagy az eredményekkel, átváltunk a választott havi csomagra.
              </p>
            </div>

            <button
              onClick={() => onSelectPackage('pilot')}
              className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer shrink-0"
            >
              Pilot Hónap Igénylése (75.000 Ft)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
