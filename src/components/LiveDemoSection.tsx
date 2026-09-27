import React, { useState, useEffect } from 'react';
import { Phone, PhoneOff, PhoneCall, MessageSquare, ArrowRight, CheckCircle2, RotateCcw, Volume2, Calculator, Sparkles } from 'lucide-react';
import { playNotificationSound, playPhoneRing } from '../utils/audio';

interface LiveDemoSectionProps {
  onScrollToBooking: () => void;
}

export const LiveDemoSection: React.FC<LiveDemoSectionProps> = ({ onScrollToBooking }) => {
  // Simulator states: 'idle' | 'calling' | 'hungup' | 'waiting_sms' | 'sms_received'
  const [simState, setSimState] = useState<'idle' | 'calling' | 'hungup' | 'waiting_sms' | 'sms_received'>('idle');
  const [countdown, setCountdown] = useState<number>(4);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // ROI Calculator states
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(8);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(35000);
  const [conversionRate, setConversionRate] = useState<number>(65); // 65% rescued

  const monthlyLostCalls = missedCallsPerWeek * 4;
  const monthlyLostRevenue = monthlyLostCalls * avgCustomerValue;
  const rescuedRevenue = Math.round(monthlyLostRevenue * (conversionRate / 100));

  // Simulation flow
  const handleStartCall = () => {
    setSimState('calling');
    if (soundEnabled) {
      playPhoneRing();
    }

    // After 2.5 seconds of ringing, hang up and begin SMS automation countdown
    setTimeout(() => {
      setSimState('hungup');
      setTimeout(() => {
        setSimState('waiting_sms');
        setCountdown(4);
      }, 700);
    }, 2500);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (simState === 'waiting_sms' && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (simState === 'waiting_sms' && countdown === 0) {
      setSimState('sms_received');
      if (soundEnabled) {
        playNotificationSound();
      }
    }
    return () => clearTimeout(timer);
  }, [simState, countdown, soundEnabled]);

  const resetSimulation = () => {
    setSimState('idle');
    setCountdown(4);
  };

  return (
    <section id="eloteszt" className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>AZ INTERAKTÍV ÉLŐ DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Ne higgy nekünk. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-300">Próbáld ki a saját telefonodon most!</span>
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Teszteld élesben a MissedCall-TextBack sebességét a saját mobiloddal, vagy használd a lenti interaktív okostelefon szimulátort!
          </p>
        </div>

        {/* 4. Kialakítás: A Nagy Kiemelt Doboz a kijelző közepén */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/40 text-center space-y-8">
            
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/90 border border-cyan-700/50">
                1. LÉPÉS: VALÓDI TESZTHÍVÁS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Hívd fel ezt a tesztszámot most:
              </h3>
              
              <div className="py-2">
                <a
                  href="tel:+36308924150"
                  className="inline-flex items-center gap-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-white hover:opacity-90 transition-opacity"
                >
                  <PhoneCall className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                  <span>+36 30 892 4150</span>
                </a>
              </div>
            </div>

            {/* Instruction Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Hagyd kicsengeni <span className="text-cyan-300 font-bold">2-3 alkalommal</span>, majd tedd le a telefont!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Nézd meg a mobilodat: <span className="text-cyan-300 font-bold">hány másodperc múlva</span> kaptad meg az SMS-ünket?
                </p>
              </div>
            </div>

            {/* Doboz alatti záró gondolat */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-sm sm:text-base text-slate-300 italic font-medium max-w-xl mx-auto leading-relaxed">
                „Ugyanezt az élményt kapja minden leendő ügyfeled is, amikor épp nem tudod felvenni a telefont. Hány ügyfelet mentene meg ez neked egyetlen hónap alatt?”
              </p>
            </div>

          </div>
        </div>

        {/* Two-Column Interactive Area: Live Virtual Phone Mockup + Lost Revenue ROI Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: On-Screen Interactive Smartphone Simulation */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-6">
              <div className="text-left">
                <h4 className="text-base font-bold text-white">Virtuális Készülék Szimuláció</h4>
                <p className="text-xs text-slate-400">Kattints a hívásra, és figyeld a reakcióidőt!</p>
              </div>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer border ${
                  soundEnabled ? 'text-cyan-300 bg-cyan-950/80 border-cyan-800' : 'text-slate-500 bg-slate-900 border-slate-800'
                }`}
                title={soundEnabled ? 'Hang engedélyezve' : 'Hang némítva'}
              >
                <Volume2 className="w-4 h-4" />
                <span className="font-mono text-[11px]">{soundEnabled ? 'Hang BE' : 'Néma'}</span>
              </button>
            </div>

            {/* Phone Body Mockup */}
            <div className="w-full max-w-[310px] rounded-[36px] bg-slate-900 border-[6px] border-slate-800 p-3 shadow-2xl relative">
              {/* Dynamic Island / Speaker notch */}
              <div className="w-24 h-4 bg-slate-950 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-800" />
              </div>

              {/* Screen Area */}
              <div className="rounded-[24px] bg-slate-950 min-h-[440px] p-4 flex flex-col justify-between border border-slate-800/80 relative overflow-hidden">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 border-b border-slate-900">
                  <span>09:41</span>
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                </div>

                {/* State: IDLE */}
                {simState === 'idle' && (
                  <div className="my-auto text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                      <PhoneCall className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">VibeShift Autószerviz Kft.</div>
                      <div className="text-xs text-slate-400 font-mono">+36 30 892 4150</div>
                    </div>
                    <p className="text-[11px] text-slate-400 px-4 leading-normal">
                      Indíts egy teszthívást a gombbal! A rendszer érzékeli a nem fogadott hívást és 4 másodpercen belül reagál.
                    </p>
                    <button
                      onClick={handleStartCall}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Nem fogadott hívás indítása</span>
                    </button>
                  </div>
                )}

                {/* State: CALLING */}
                {simState === 'calling' && (
                  <div className="my-auto text-center space-y-5 animate-pulse">
                    <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 animate-bounce">
                      <Phone className="w-10 h-10" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Kicsengés...</div>
                      <div className="text-base font-bold text-white">VibeShift Autószerviz Kft.</div>
                      <div className="text-xs text-slate-400 font-mono">+36 30 892 4150</div>
                    </div>
                    <div className="text-[11px] text-slate-400 italic">
                      A szakember épp dolgozik, nem tudja felvenni...
                    </div>
                  </div>
                )}

                {/* State: HUNGUP / WAITING SMS */}
                {(simState === 'hungup' || simState === 'waiting_sms') && (
                  <div className="my-auto text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
                      <PhoneOff className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-rose-400">Nem fogadott hívás rögzítve</div>
                      <div className="text-xs text-slate-400">Vonal megszakadt.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-cyan-800/40 space-y-2">
                      <div className="text-[11px] font-mono text-cyan-400 flex items-center justify-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>MissedCall-TextBack szerver aktiválva</span>
                      </div>
                      <div className="text-2xl font-black font-mono text-white">
                        00:0{countdown}
                      </div>
                      <div className="text-[10px] text-slate-400">Automata SMS küldése a hívónak...</div>
                    </div>
                  </div>
                )}

                {/* State: SMS RECEIVED */}
                {simState === 'sms_received' && (
                  <div className="space-y-4 my-auto">
                    {/* Incoming notification banner */}
                    <div className="p-3 rounded-xl bg-slate-900/95 border border-cyan-500/60 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs">
                          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Üzenetek · Épp most</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800/40">
                          3.8 mp
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-white">VibeShift Autószerviz</div>
                      <p className="text-[11px] text-slate-200 leading-relaxed bg-slate-950 p-2 rounded border border-slate-800">
                        „Szia! Sajnos épp szerelés alatt vagyunk és nem tudtam fogadni a hívásodat. Miben segíthetünk? Vagy foglalj időpontot azonnal a naptárunkban: <span className="text-cyan-400 underline font-medium">vibeshift.hu/idopont</span>”
                      </p>
                    </div>

                    <div className="text-center space-y-2">
                      <div className="text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Ügyfél megtartva 5 másodpercen belül!</span>
                      </div>
                      <button
                        onClick={resetSimulation}
                        className="py-1.5 px-3 rounded text-[11px] text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Újratesztelés</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Footer simulation hint */}
                <div className="text-[10px] text-slate-500 text-center pt-2 border-t border-slate-900">
                  VibeShift Cloudflare SMS Engine v2.4
                </div>

              </div>
            </div>

          </div>

          {/* Column 2: Interactive Lost Revenue & ROI Calculator */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Elveszített Hívás & Árbevétel Kalkulátor
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              Húzd el a csúszkákat a saját vállalkozásod számaihoz, és nézd meg, mennyi pénzt hagysz jelenleg a konkurenciánál!
            </p>

            {/* Slider 1: Missed calls per week */}
            <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Nem fogadott hívások száma hetente:</span>
                <span className="font-mono text-cyan-300 font-bold text-sm bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  {missedCallsPerWeek} hívás / hét
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={missedCallsPerWeek}
                onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>2 hívás</span>
                <span>15 hívás</span>
                <span>30 hívás</span>
              </div>
            </div>

            {/* Slider 2: Average Customer Value */}
            <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Átlagos profit / megbízás értéke:</span>
                <span className="font-mono text-teal-300 font-bold text-sm bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                  {avgCustomerValue.toLocaleString('hu-HU')} Ft
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="5000"
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10.000 Ft</span>
                <span>75.000 Ft</span>
                <span>150.000 Ft+</span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-rose-400 font-semibold">
                  Jelenlegi havi veszteség:
                </div>
                <div className="text-xl sm:text-2xl font-black font-mono text-rose-300">
                  -{monthlyLostRevenue.toLocaleString('hu-HU')} Ft
                </div>
                <div className="text-[10px] text-slate-400">
                  {monthlyLostCalls} elszalasztott vevő havonta
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Megmenthető profit:</span>
                </div>
                <div className="text-xl sm:text-2xl font-black font-mono text-emerald-300">
                  +{rescuedRevenue.toLocaleString('hu-HU')} Ft
                </div>
                <div className="text-[10px] text-emerald-400/80">
                  Havi többlet a vállalkozásodban
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onScrollToBooking}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>Állítsuk meg ezt a veszteséget még ezen a héten!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
