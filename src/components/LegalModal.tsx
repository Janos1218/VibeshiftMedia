import React from 'react';
import { X, ShieldCheck, FileText, Lock, Building } from 'lucide-react';
import { LegalModalType } from '../types';

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] flex flex-col justify-between overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            {type === 'impresszum' && <Building className="w-5 h-5 text-cyan-400" />}
            {type === 'gdpr' && <Lock className="w-5 h-5 text-teal-400" />}
            {type === 'aszf' && <FileText className="w-5 h-5 text-cyan-400" />}
            {type === 'dpa' && <ShieldCheck className="w-5 h-5 text-amber-400" />}
            
            <h3 className="text-lg font-bold text-white font-display">
              {type === 'impresszum' && 'Impresszum & Szolgáltatói Adatok'}
              {type === 'gdpr' && 'Adatkezelési Tájékoztató (GDPR)'}
              {type === 'aszf' && 'Általános Szerződési Feltételek (ÁSZF)'}
              {type === 'dpa' && 'Adatfeldolgozói Megállapodás (DPA)'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-5 pr-2 space-y-4 text-xs text-slate-300 leading-relaxed">
          {type === 'impresszum' && (
            <div className="space-y-3">
              <p>A weboldal üzemeltetőjének adatai az elektronikus kereskedelmi szolgáltatásokról szóló törvény alapján:</p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 font-mono text-[11px]">
                <div><strong className="text-slate-400">Márkanév:</strong> VibeShift Media</div>
                <div><strong className="text-slate-400">Üzemeltető:</strong> Nemeth Media EV</div>
                <div><strong className="text-slate-400">Székhely:</strong> 1117 Budapest, Október huszonharmadika u. 8-10.</div>
                <div><strong className="text-slate-400">Adószám:</strong> 59841203-1-42</div>
                <div><strong className="text-slate-400">Nyilvántartási szám:</strong> 58941022</div>
                <div><strong className="text-slate-400">Központi e-mail:</strong> info@vibeshiftmedia.hu</div>
                <div><strong className="text-slate-400">Telefonos ügyfélszolgálat:</strong> +36 30 892 4150</div>
                <div><strong className="text-slate-400">Tárhelyszolgáltató:</strong> Cloudflare, Inc. (San Francisco, USA) / Vercel Global Edge</div>
              </div>
            </div>
          )}

          {type === 'gdpr' && (
            <div className="space-y-3">
              <p className="font-semibold text-white">Adatkezelési alapelvek az Európai Unió Általános Adatvédelmi Rendelete (GDPR 2016/679) szerint:</p>
              <p>
                A VibeShift Media kiemelten kezeli az Ön személyes adatainak védelmét. A weboldalunkon megadott adatokat (név, telefonszám, e-mail cím, vállalkozási adatok) kizárólag a kért 15 perces konzultáció megszervezéséhez és az automatizált időpont-emlékeztetők küldéséhez használjuk fel.
              </p>
              <h4 className="text-white font-bold pt-2">1. Az adatkezelés jogalapja</h4>
              <p>Az érintett önkéntes hozzájárulása (GDPR 6. cikk (1) a)), valamint szerződéskötést megelőző lépések megtétele (GDPR 6. cikk (1) b)).</p>
              <h4 className="text-white font-bold pt-2">2. Adattárolás időtartama</h4>
              <p>A kapcsolatfelvételt követően legfeljebb 6 hónapig, vagy a hozzájárulás visszavonásáig tároljuk adatait.</p>
              <h4 className="text-white font-bold pt-2">3. Az Ön jogai</h4>
              <p>Ön bármikor kérheti személyes adatainak törlését, helyesbítését, vagy az adatkezelés korlátozását az <span className="text-cyan-400 font-mono">info@vibeshiftmedia.hu</span> címen.</p>
            </div>
          )}

          {type === 'aszf' && (
            <div className="space-y-3">
              <p className="font-semibold text-white">A VibeShift Media szolgáltatási feltételei:</p>
              <p>
                Jelen dokumentum szabályozza a VibeShift Media által nyújtott marketing automatizációs, MissedCall-TextBack és helyi SEO szolgáltatások igénybevételét.
              </p>
              <h4 className="text-white font-bold pt-2">1. A szolgáltatás nyújtása</h4>
              <p>
                A szolgáltató havidíjas megbízási szerződés keretében biztosítja az előfizetett csomagban rögzített feladatokat (Google Térkép profil frissítés, MissedCall szoftveres integráció, hirdetéskezelés).
              </p>
              <h4 className="text-white font-bold pt-2">2. 30 Napos Pilot Hónap</h4>
              <p>
                A 30 napos rendszerindító Pilot program fix 75.000 Ft egyszeri díj ellenében vehető igénybe. A pilot hónap végén a megrendelő szabadon eldöntheti, hogy folytatja-e a havidíjas együttműködést.
              </p>
              <h4 className="text-white font-bold pt-2">3. Felmondási feltételek</h4>
              <p>
                Havi csomagjaink hűségidő nélkül, 15 napos felmondási idővel bármikor megszüntethetők az aktuális számlázási ciklus végével.
              </p>
            </div>
          )}

          {type === 'dpa' && (
            <div className="space-y-3">
              <p className="font-semibold text-white">Adatfeldolgozói Megállapodás (Data Processing Agreement):</p>
              <p>
                A MissedCall-TextBack rendszer üzemeltetése során a Megrendelő minősül adatkezelőnek, míg a VibeShift Media technikai adatfeldolgozóként jár el az SMS küldési infrastruktúrában.
              </p>
              <h4 className="text-white font-bold pt-2">Biztonsági intézkedések</h4>
              <p>
                Minden hívási metaadat és SMS átvitel TLS 1.3 titkosítással ellátott európai felhőinfrastruktúrán fut. Harmadik fél részére marketing célból semmilyen hívószám vagy ügyféladat nem kerül átadásra.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
          >
            Bezárás
          </button>
        </div>

      </div>
    </div>
  );
};
