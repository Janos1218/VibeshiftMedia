import React from 'react';
import { PhoneCall, Cpu, TrendingUp, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      stepNumber: '01',
      title: '15 perces Stratégiai Hívás',
      duration: '15 perc online konzultáció',
      description: 'Átbeszéljük a jelenlegi folyamataidat, és megnézzük, hol veszítesz ügyfeleket a telefonban vagy a weben. Semmi kötelezettség, azonnali gyakorlati tanácsok.',
      icon: PhoneCall,
      highlight: 'Zéró nyomás, valódi audit'
    },
    {
      stepNumber: '02',
      title: 'Rendszerépítés & Pilot Hónap',
      duration: '3–5 munkanapos beüzemelés',
      description: '3-5 nap alatt összekötjük a szoftvereket (MissedCall, Google Cégem, Naptár, WordPress) és elindítjuk a hirdetéseket. Nincs szükség műszaki tudásra a részedről.',
      icon: Cpu,
      highlight: 'Kulcsrakész átadás'
    },
    {
      stepNumber: '03',
      title: 'Kiszámítható Növekedés',
      duration: 'Folyamatos optimalizálás',
      description: 'A rendszered lekezeli az érdeklődőket, a havi riportok alapján pedig finomhangoljuk a kampányokat. Te a szakmádra koncentrálsz, a gép dolgozik helyetted.',
      icon: TrendingUp,
      highlight: 'Mérhető árbevétel-növekedés'
    }
  ];

  return (
    <section id="folyamat" className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <span>A FOLYAMAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Hogyan dolgozunk együtt?
          </h2>
          <p className="text-base text-slate-300">
            Három lépéses, teljesen transzparens menetrend. Nincsenek elhúzódó hetek, sem érthetetlen szakkifejezések.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="relative rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-cyan-400/60 transition-colors">
                      {step.stepNumber}.
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="inline-block text-[11px] font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/30 px-2 py-0.5 rounded mb-3">
                    {step.duration}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Technikai Garancia</div>
              <div className="text-[11px] text-slate-400">
                A beállítások 100%-át mi végezzük el, nem kell kódolnod vagy szerverekkel bajlódnod.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer shrink-0"
          >
            Kezdjük el az 1. lépéssel
          </button>
        </div>

      </div>
    </section>
  );
};
