import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolutionGrid } from './components/ProblemSolutionGrid';
import { LiveDemoSection } from './components/LiveDemoSection';
import { PricingSection } from './components/PricingSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { BookingCalendar } from './components/BookingCalendar';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { PackageType, LegalModalType } from './types';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('motor');
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('idopontfoglalas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const el = document.getElementById('eloteszt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackage = (pkg: PackageType) => {
    setSelectedPackage(pkg);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onScrollToDemo={scrollToDemo}
          onScrollToBooking={scrollToBooking}
        />

        {/* 3. Problem vs Solution Grid */}
        <ProblemSolutionGrid />

        {/* 4. Interactive Live Demo ("Hűha" Effektus) & ROI Calculator */}
        <LiveDemoSection onScrollToBooking={scrollToBooking} />

        {/* 5. Pricing Table & Packages + Pilot Banner */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* Results & Case Studies */}
        <CaseStudiesSection />

        {/* 6. The Process (3 transparent steps) */}
        <ProcessSection onOpenBooking={scrollToBooking} />

        {/* 7. Direct Calendar Booking Widget (Google Calendar / Calendly experience) */}
        <BookingCalendar
          selectedPackage={selectedPackage}
          onSelectPackage={setSelectedPackage}
        />
      </main>

      {/* 8. Footer & Legal Disclosures */}
      <Footer
        onOpenLegal={(type) => setLegalModal(type)}
        onScrollToTop={scrollToTop}
      />

      {/* Legal Modals */}
      <LegalModal
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
