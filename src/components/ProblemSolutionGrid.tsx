import React, { useState } from 'react';
import { PhoneOff, MapPin, DollarSign, CheckCircle2, MessageSquare, Star, Mail, ArrowRight, Sparkles } from 'lucide-react';

export const ProblemSolutionGrid: React.FC = () => {
  const [activePreview, setActivePreview] = useState<number | null>(null);

  const painPoints = [
    {
      id: 1,
      problemTitle: 'Nem tudod felvenni a telefont munkanapon?',
      problemText: 'A leendő vevő visszalép a Google-re és azonnal felhívja a szomszéd versenytársat. Az átlagos helyi cég a hívások 28-35%-át elveszíti munka közben.',
      solutionTitle: 'MissedCall-TextBack Automáció',
      solutionText: 'A rendszer 5 másodpercen belül SMS-ben válaszol a hívónak egy egyedi időpontfoglaló linkkel, azonnal megtartva az érdeklődőt.',
      metric: '< 5 mp válaszidő',
      previewType: 'sms',
      previewDetails: {
        sender: '+36 30 892 4150',
        content: '„Szia! Épp szervizelünk/ügyféllel vagyunk, ezért nem tudtam fogadni a hívásodat. Miben segíthetünk? Vagy válassz egy szabad időpontot itt azonnal: vibesystem.hu/idopont”',
      }
    },
    {
      id: 2,
      problemTitle: 'A konkurencia előtted van a Google Térképen?',
      problemText: 'Kevés az értékelésed, a helyi vevők pedig a magasabb csillagszámú, több véleménnyel rendelkező céget választják elsőként.',
      solutionTitle: 'Google Cégem & Értékelési Rendszer',
      solutionText: 'Domináljuk a helyi kereséseket, és az elégedett vevőidtől automatikusan, diszkrét SMS/e-mail linkkel gyűjtjük az 5 csillagos Google értékeléseket.',
      metric: '4.8+ csillagos átlag',
      previewType: 'google',
      previewDetails: {
        stars: 5,
        reviewText: '„Villámgyors időpontfoglalás és profi kommunikáció! Munkaidőn kívül foglaltam, mégis 2 percen belül megkaptam a visszaigazolást.”',
        reviewer: 'Kovács Tamás (Helyi ügyfél)'
      }
    },
    {
      id: 3,
      problemTitle: 'Drága hirdetések, amikből nem lesz kifizetett munka?',
      problemText: 'Pénzt költesz kattintásokra a Meta és Google felületein, de az érdeklődők lemaradnak, nem érkeznek meg a konzultációra vagy elfelejtik a megkeresést.',
      solutionTitle: 'Automata Követési Lánc (MailerLite)',
      solutionText: 'Minden érdeklődő azonnali visszaigazoló e-mailt és 24 órával/2 órával korábban emlékeztető SMS-t kap a foglalásáról. Zéró no-show.',
      metric: '94% megjelenési arány',
      previewType: 'email',
      previewDetails: {
        subject: 'Időpontod megerősítve: Holnap 10:00 óra',
        steps: ['1. Azonnali visszaigazoló email + Google Naptár meghívó', '2. SMS emlékeztető 24 órával az időpont előtt', '3. SMS útvonalterv linkkel a megérkezéshez 2 órával előtte']
      }
    }
  ];

  return (
    <section id="megoldasok" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <span>PROBLÉMA VS. MEGOLDÁS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Kevesebb mellébeszélés, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">több mérhető ügyfél</span>
          </h2>
          <p className="text-base text-slate-300">
            A legtöbb helyi vállalkozó nem a munkájában gyenge, hanem a modern technológiai réseken folyik el a pénze. Pontosan ezeket a lyukakat foltozzuk be.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden group shadow-lg shadow-black/40"
            >
              {/* Top: The Bleeding Problem */}
              <div className="p-6 pb-5 bg-rose-950/20 border-b border-rose-900/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Pénzégető probléma
                  </span>
                  <span className="text-xs font-mono text-rose-300/80">Veszteségforrás</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  ❌ {item.problemTitle}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.problemText}
                </p>
              </div>

              {/* Bottom: The VibeShift System Solution */}
              <div className="p-6 pt-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      VibeShift Rendszer
                    </span>
                    <span className="text-xs font-mono text-emerald-300/90 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                      {item.metric}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item.solutionTitle}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.solutionText}
                  </p>
                </div>

                {/* Interactive Preview Drawer */}
                <div className="pt-2">
                  <button
                    onClick={() => setActivePreview(activePreview === item.id ? null : item.id)}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>{activePreview === item.id ? 'Előnézet bezárása' : 'Működési előnézet megtekintése'}</span>
                    <span className="text-cyan-400 font-mono text-[11px]">{activePreview === item.id ? '▲' : '▼'}</span>
                  </button>

                  {activePreview === item.id && (
                    <div className="mt-3 p-3.5 rounded-lg bg-slate-950 border border-cyan-900/50 text-xs space-y-2 animate-in fade-in duration-200">
                      {item.previewType === 'sms' && (
                        <div>
                          <div className="text-[10px] text-cyan-400 font-mono mb-1">AUTOMATA SMS SABLON</div>
                          <div className="p-2.5 rounded bg-slate-900 text-slate-200 font-sans border border-slate-800 leading-relaxed text-[11px]">
                            {item.previewDetails.content}
                          </div>
                        </div>
                      )}

                      {item.previewType === 'google' && (
                        <div>
                          <div className="text-[10px] text-amber-400 font-mono mb-1">GOOGLE TÉRKÉP ÉRTÉKELÉS</div>
                          <div className="p-2.5 rounded bg-slate-900 text-slate-200 border border-slate-800 space-y-1">
                            <div className="flex items-center gap-1 text-amber-400">
                              {'★'.repeat(5)}
                            </div>
                            <p className="italic text-[11px] text-slate-300">{item.previewDetails.reviewText}</p>
                            <span className="text-[10px] text-slate-400 block pt-1">{item.previewDetails.reviewer}</span>
                          </div>
                        </div>
                      )}

                      {item.previewType === 'email' && (
                        <div>
                          <div className="text-[10px] text-teal-400 font-mono mb-1">MAILERLITE AUTOMATIZÁLT LÁNC</div>
                          <div className="p-2 rounded bg-slate-900 text-slate-200 border border-slate-800 space-y-1.5 text-[11px]">
                            {item.previewDetails.steps?.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                                <span className="text-cyan-400 shrink-0">✓</span>
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
