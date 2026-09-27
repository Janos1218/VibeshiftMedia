import React, { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, User, Phone, Mail, Building, ArrowRight, Shield, Download, ExternalLink } from 'lucide-react';
import { PackageType, BookingData } from '../types';
import { playNotificationSound } from '../utils/audio';

interface BookingCalendarProps {
  selectedPackage: PackageType;
  onSelectPackage: (pkg: PackageType) => void;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({
  selectedPackage,
  onSelectPackage,
}) => {
  // Generate selectable dates for next 14 business days
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    let current = new Date(today);
    current.setDate(current.getDate() + 1); // Start tomorrow

    while (dates.length < 12) {
      const dayOfWeek = current.getDay();
      // Only Monday (1) to Friday (5)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const iso = current.toISOString().split('T')[0];
        const dayName = current.toLocaleDateString('hu-HU', { weekday: 'short' });
        const monthDay = current.toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' });
        dates.push({ iso, dayName, monthDay, full: current.toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }) });
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }, []);

  const timeSlots = [
    '09:00', '10:00', '11:15', '13:00', '14:30', '15:45', '17:00'
  ];

  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.iso || '');
  const [selectedTime, setSelectedTime] = useState<string>('10:00');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: 'Autószerviz / Gumis',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingData | null>(null);

  const packageNames: Record<PackageType, string> = {
    lathatosag: 'Láthatóság Csomag (45.000 Ft/hó)',
    motor: 'Ügyfélszerző Motor (135.000 Ft/hó)',
    piacvezeto: 'Piacvezető Csomag (250.000 Ft/hó)',
    pilot: '30 Napos Pilot Rendszerindítás (Fix 75.000 Ft)'
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Kérjük, add meg a nevedet!';
    if (!formData.phone.trim()) {
      errors.phone = 'Kérjük, add meg a telefonszámodat!';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errors.phone = 'Érvénytelen telefonszám formátum!';
    }
    if (!formData.email.trim()) {
      errors.email = 'Kérjük, add meg az e-mail címedet!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Kérjük, adj meg érvényes e-mail címet!';
    }
    if (!formData.businessName.trim()) {
      errors.businessName = 'Kérjük, add meg a céged vagy vállalkozásod nevét!';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const booking: BookingData = {
      ...formData,
      selectedPackage,
      date: selectedDate,
      timeSlot: selectedTime,
    };

    setConfirmedBooking(booking);
    setIsSubmitted(true);
    playNotificationSound();
  };

  const handleDownloadICS = () => {
    if (!confirmedBooking) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//VibeShift Media//Idopontfoglalas//HU
BEGIN:VEVENT
SUMMARY:15 Perces Stratégiai Konzultáció - VibeShift Media
DESCRIPTION:Google Térkép audit és MissedCall-TextBack rendszer bevezetése a(z) ${confirmedBooking.businessName} számára.
DTSTART:${confirmedBooking.date.replace(/-/g, '')}T${confirmedBooking.timeSlot.replace(':', '')}00
DTEND:${confirmedBooking.date.replace(/-/g, '')}T${(parseInt(confirmedBooking.timeSlot) + 1).toString().padStart(2, '0')}${confirmedBooking.timeSlot.split(':')[1]}00
LOCATION:Telefonon (+36 30 892 4150) / Google Meet
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `vibeshift-konzultacio-${confirmedBooking.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedDateObj = availableDates.find((d) => d.iso === selectedDate);

  return (
    <section id="idopontfoglalas" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <span>KÖZVETLEN IDŐPONTFOGLALÓ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Válassz egy időpontot egy 15 perces kötelezettségmentes hívásra!
          </h2>
          <p className="text-base text-slate-300">
            Átnézzük a jelenlegi Google Térkép profilodat és megmutatjuk, hogyan építhető be a MissedCall rendszer a cégedbe.
          </p>
        </div>

        {/* Embedded Interactive Calendar Card */}
        <div className="max-w-5xl mx-auto bg-slate-900/80 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Success Dialog View */}
          {isSubmitted && confirmedBooking ? (
            <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Időpontod sikeresen rögzítve!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Visszaigazoló SMS-t és naptármeghívót küldtünk a megadott elérhetőségeidre.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 text-left space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Időpont:</span>
                  <span className="text-cyan-300 font-mono font-bold">
                    {selectedDateObj?.full} · {confirmedBooking.timeSlot}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Ügyfél neve:</span>
                  <span className="text-white font-medium">{confirmedBooking.name}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Vállalkozás:</span>
                  <span className="text-white font-medium">{confirmedBooking.businessName}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Kiválasztott fókusz:</span>
                  <span className="text-teal-300 font-mono text-[11px]">{packageNames[confirmedBooking.selectedPackage]}</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1">
                  <span className="text-slate-400">Hívás formátuma:</span>
                  <span className="text-slate-200">Közvetlen telefonos hívás ezen a számon: {confirmedBooking.phone}</span>
                </div>
              </div>

              {/* Instant Simulated SMS Preview Box */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-950/80 border border-cyan-800/40 text-left space-y-1.5">
                <div className="text-[10px] text-cyan-400 font-mono flex items-center justify-between">
                  <span>AUTOMATIKUSAN KIKÜLDÖTT SMS ÉRTESÍTŐ</span>
                  <span className="text-emerald-400">Kézbesítve</span>
                </div>
                <p className="text-xs text-slate-300 bg-slate-900 p-2.5 rounded border border-slate-800 font-mono leading-relaxed">
                  „Szia {confirmedBooking.name.split(' ')[0]}! Rögzítettük a 15 perces stratégiai konzultációdat a VibeShift Media-val: {confirmedBooking.date} {confirmedBooking.timeSlot}. Kérdés esetén hívj minket: +36 30 892 4150.”
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleDownloadICS}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Naptárfájl (.ics) letöltése</span>
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                >
                  Új időpont választása
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: 2-click Date & Time Picker */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-950/90 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>1. Lépés: Válassz napot</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Elérhető munkanapok</h3>
                </div>

                {/* Day selector grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableDates.map((item) => (
                    <button
                      key={item.iso}
                      type="button"
                      onClick={() => setSelectedDate(item.iso)}
                      className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                        selectedDate === item.iso
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20'
                          : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-mono tracking-wider opacity-80">{item.dayName}</div>
                      <div className="text-xs font-bold mt-0.5">{item.monthDay}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Clock className="w-4 h-4" />
                    <span>2. Lépés: Válassz órát</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-2 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                          selectedTime === slot
                            ? 'bg-teal-400 text-slate-950 border-teal-300 shadow-md shadow-teal-400/20'
                            : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-800'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 space-y-1">
                  <div className="text-white font-semibold">Kijelölt időpont:</div>
                  <div className="text-cyan-300 font-mono">
                    {selectedDateObj?.full} · {selectedTime}
                  </div>
                  <div className="text-[11px] text-slate-500 pt-1">
                    Időtartam: 15 perc · Helyszín: Telefon / Google Meet
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    3. Lépés: Add meg az adataidat
                  </div>
                  <h3 className="text-lg font-bold text-white">Hova telefonáljunk?</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Package Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-slate-300">
                      Érdeklődés tárgya / Csomag:
                    </label>
                    <select
                      value={selectedPackage}
                      onChange={(e) => onSelectPackage(e.target.value as PackageType)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      <option value="motor">Ügyfélszerző Motor (135.000 Ft/hó) - Ajánlott</option>
                      <option value="lathatosag">Láthatóság Csomag (45.000 Ft/hó)</option>
                      <option value="piacvezeto">Piacvezető Csomag (250.000 Ft/hó)</option>
                      <option value="pilot">30 Napos Pilot Rendszerindítás (Fix 75.000 Ft)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-slate-300">
                        Teljes Név <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="pl. Kovács Péter"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full bg-slate-950 border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 ${
                            formErrors.name ? 'border-rose-500' : 'border-slate-800'
                          }`}
                        />
                      </div>
                      {formErrors.name && <p className="text-[11px] text-rose-400">{formErrors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-slate-300">
                        Telefonszám (ahol elérünk) <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="tel"
                          placeholder="+36 30 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-slate-950 border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 ${
                            formErrors.phone ? 'border-rose-500' : 'border-slate-800'
                          }`}
                        />
                      </div>
                      {formErrors.phone && <p className="text-[11px] text-rose-400">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-slate-300">
                        E-mail Cím (naptármeghívóhoz) <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="email"
                          placeholder="peter@vallalkozas.hu"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-slate-950 border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 ${
                            formErrors.email ? 'border-rose-500' : 'border-slate-800'
                          }`}
                        />
                      </div>
                      {formErrors.email && <p className="text-[11px] text-rose-400">{formErrors.email}</p>}
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-slate-300">
                        Vállalkozásod Neve <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="pl. Kovács Szerviz Kft."
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className={`w-full bg-slate-950 border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 ${
                            formErrors.businessName ? 'border-rose-500' : 'border-slate-800'
                          }`}
                        />
                      </div>
                      {formErrors.businessName && <p className="text-[11px] text-rose-400">{formErrors.businessName}</p>}
                    </div>
                  </div>

                  {/* Business Type selector */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-300">
                      Tevékenységi kör:
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Autószerviz / Gumis">Autószerviz / Gumis / Autókozmetika</option>
                      <option value="Fogászat / Magánrendelő">Fogászat / Egészségügyi Magánrendelő</option>
                      <option value="Klíma / Fűtés / Épületgépészet">Klíma / Fűtés / Épületgépészet</option>
                      <option value="Szépségipar / Fodrászat / Kozmetika">Szépségipar / Fodrászat / Kozmetika</option>
                      <option value="Szakipar (Villany, Víz, Festés)">Szakipar (Villanyszerelés, Víz, Festés)</option>
                      <option value="Ügyvédi Iroda / Könyvelés">Ügyvédi Iroda / Könyvelés</option>
                      <option value="Egyéb Helyi Szolgáltatás">Egyéb Helyi Szolgáltatás</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>15 Perces Konzultáció Lefoglalása</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-2">
                      <Shield className="w-3.5 h-3.5 text-teal-400" />
                      <span>100% spam-mentes és kötelezettségmentes hívás</span>
                    </div>
                  </div>

                </form>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
