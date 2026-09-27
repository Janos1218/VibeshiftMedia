import React from 'react';
import { Star, TrendingUp, Users, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      sector: 'Gépjármű Diagnosztika & Szerviz',
      client: 'Buda Motor Szerviz Kft.',
      location: 'Budapest, XI. kerület',
      problem: 'A műhelyben a szerelők nem tudták zsíros kézzel felvenni a telefont. Napi 6-8 hívás veszett el, miközben a versenytársak vitték el a féktárcsa- és vezérléscseréket.',
      outcome: '+38 megmentett ügyfél / hó',
      revenue: '+1.330.000 Ft többletbevétel',
      timeline: '2 hónap alatt elérve',
      rating: '4.9 csillag (118 új Google vélemény)',
      quote: '„Azelőtt este hallgattam vissza a hangpostákat, amikor az ügyfél már rég máshol volt. Most 5 másodpercen belül kap egy időpontfoglaló linket, és mire végzek az emelőnél, a naptár tele van.”'
    },
    {
      sector: 'Magán Fogászat & Esztétika',
      client: 'DentArt Prémium Klinika',
      location: 'Győr',
      problem: 'Munkaidő után és hétvégén rengeteg sürgősségi hívás érkezett, amikre a recepció nem tudott válaszolni. A hirdetési költségek magasak voltak, de a konverzió elmaradt.',
      outcome: '0 elveszített páciens este & hétvégén',
      revenue: '+2.100.000 Ft havi új páciensérték',
      timeline: 'Első 30 nap (Pilot hónap)',
      rating: '5.0 csillag (89 új értékelés)',
      quote: '„A MissedCall-TextBack és az automata Google naptár kombinációja önmagában fedezte a havi díj tízszeresét. A páciensek imádják az azonnali SMS választ.”'
    },
    {
      sector: 'Klímatelepítés & Épületgépészet',
      client: 'Nordic Clima Kft.',
      location: 'Pest megye és agglomeráció',
      problem: 'A nyári kánikula beköszöntével összeomlott a telefonvonal. Nem győzték a kapacitást, a lemaradt hívók pedig rossz értékeléseket írtak a Google-re.',
      outcome: '5 mp-es automatikus válaszidő',
      revenue: '100% lefedett érdeklődő',
      timeline: 'Szezonális csúcsidőszakban',
      rating: '4.8 csillag (200+ elégedett ügyfél)',
      quote: '„A VibeShift nélkül a szezon felét elbuktuk volna. A rendszer kiszűri a komolytalan érdeklődőket és közvetlenül az ingyenes felmérés naptárába tereli a valódi vevőket.”'
    }
  ];

  return (
    <section id="eredmenyek" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <span>MÉRHETŐ BIZONYÍTÉKOK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Valódi hazai vállalkozások, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">valódi számszerű profit</span>
          </h2>
          <p className="text-base text-slate-300">
            Nem ígéreteket árulunk. Nézd meg, hogyan változott meg három magyar KKV mindennapi működése a VibeShift automatizmusok bevezetése után.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all shadow-xl shadow-black/30"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/40">
                    {item.sector}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-mono font-bold">5.0</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{item.client}</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Measurable Metric Badges */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-800/80">
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase text-slate-400 font-mono">Elért eredmény</div>
                    <div className="text-sm font-bold text-cyan-300 font-mono">{item.outcome}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase text-slate-400 font-mono">Többletbevétel</div>
                    <div className="text-sm font-bold text-emerald-400 font-mono">{item.revenue}</div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed italic bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  {item.quote}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="text-teal-400">{item.rating}</span>
                <span>{item.timeline}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
