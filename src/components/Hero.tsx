import React from 'react';
import { ArrowRight, PhoneIncoming, Zap, Shield, CheckCircle2, Star, Calendar } from 'lucide-react';
import heroImage from '../assets/images/hero_marketing_growth_1790524043946.jpg';

interface HeroProps {
  onScrollToDemo: () => void;
  onScrollToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToDemo, onScrollToBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Eyebrow text (uncluttered, high-contrast) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>AUTOMATIZÁLT ÜGYFÉLSZERZÉS HELYI VÁLLALKOZÁSOKNAK</span>
            </div>

            {/* Main Headline (H1) with text-wrap balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.12] [text-wrap:balance]">
              Több helyi ügyfél és <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300">zéró elveszített hívás</span> – automatán.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Megmentjük a nem fogadott hívásaidat, a Google Térkép élvonalába pozícionálunk, és automata időpontfoglalót építünk a weboldaladra. Amíg te dolgozol, a rendszered gyűjti a vevőket.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA (Interactive Live Demo jump) */}
              <button
                onClick={onScrollToDemo}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 shadow-lg shadow-rose-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <span>Teszteld a rendszert élőben</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Secondary CTA (Direct Booking) */}
              <button
                onClick={onScrollToBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Ingyenes stratégiai hívás foglalása</span>
              </button>
            </div>

            {/* Trust Badges: Clean unboxed metadata discipline */}
            <div className="pt-6 border-t border-slate-800/70">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-300 font-medium">100% Adatvezérelt</span>
                </div>
                <span className="hidden sm:inline text-slate-700 font-mono">/</span>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400/20 shrink-0" />
                  <span className="text-slate-300 font-medium">Google & Meta Hirdetési Rendszerek</span>
                </div>
                <span className="hidden sm:inline text-slate-700 font-mono">/</span>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-slate-300 font-medium">Cloudflare Biztonság & Sebesség</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High Impact System Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-slate-800/80 shadow-2xl shadow-cyan-950/20">
              
              {/* Background ambient preview image with dark scrim */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                <img
                  src={heroImage}
                  alt="VibeShift Media Iroda és Munkaállomás"
                  className="w-full h-full object-cover opacity-35"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                {/* Overlaid Live Flow Simulator Card */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>AKTÍV AUTOMATIZÁCIÓ</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">Válaszidő: &lt;5 mp</span>
                  </div>

                  {/* Flow Stages */}
                  <div className="space-y-2.5 my-auto">
                    {/* Stage 1: Incoming missed call */}
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-rose-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                          <PhoneIncoming className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Nem fogadott ügyfélhívás</div>
                          <div className="text-[11px] text-slate-400">+36 30 458 9120 · Munkanap 11:42</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/30">
                        Elfoglalt vonal
                      </span>
                    </div>

                    {/* Step 2: Instant SMS sent */}
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-cyan-500/30 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-cyan-300">MissedCall-TextBack (SMS)</span>
                          <span className="text-[10px] text-emerald-400 font-mono">3.4 mp múlva</span>
                        </div>
                        <p className="text-[11px] text-slate-300 bg-slate-950/80 p-2 rounded border border-slate-800">
                          „Szia! Épp ügyfélnél vagyunk, nem tudtam felvenni. Miben segíthetek, vagy válassz időpontot itt: <span className="text-cyan-400 underline">vibeshift.hu/b/idopont</span>”
                        </p>
                      </div>
                    </div>

                    {/* Step 3: Calendar booking secured */}
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold text-emerald-200">Új ügyfélidőpont rögzítve!</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-300">+45.000 Ft megmentve</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2 pt-2 border-t border-slate-800/60">
                    <span className="text-slate-300 font-medium">Automatikus naptár szinkronizáció</span>
                    <span>·</span>
                    <span className="text-cyan-400">Zero elveszített ügyfél</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
