import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthorityStats } from './components/AuthorityStats';
import { MetodoSingullaris } from './components/MetodoSingullaris';
import { Treatments } from './components/Treatments';
import { CasesGallery } from './components/CasesGallery';
import { BlogSection } from './components/BlogSection';
import { LocationMap } from './components/LocationMap';
import { PreBooking } from './components/PreBooking';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Modals } from './components/Modals';
import { Treatment, CaseStudy, BlogPost } from './data/siteContent';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingProcedureTitle, setBookingProcedureTitle] = useState('Harmonização Facial Full Face');

  const handleOpenBooking = (procedureTitle?: string) => {
    if (procedureTitle) {
      setBookingProcedureTitle(procedureTitle);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#211a1a] flex flex-col font-sans selection:bg-[#f4b7ba]/50 selection:text-[#321114]">
      {/* Top Fixed Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Authority & Social Proof Numbers */}
        <AuthorityStats />

        {/* 3. The 4 Pillars of Método Singullaris® */}
        <MetodoSingullaris />

        {/* 4. Treatments Showcase */}
        <Treatments
          onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          onOpenBooking={(title) => handleOpenBooking(title)}
        />

        {/* 5. Real Cases & Testimonials Gallery (Instagram inspired) */}
        <CasesGallery
          onSelectCase={(caseStudy) => setSelectedCase(caseStudy)}
        />

        {/* 6. Scientific Blog & Education */}
        <BlogSection
          onReadPost={(post) => setSelectedPost(post)}
        />

        {/* 7. Location & Google Maps Integration */}
        <LocationMap />

        {/* 8. Pre-Booking Form & Frequently Asked Questions */}
        <PreBooking />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Modals (Treatments, Case Studies, Blog Reader, Booking) */}
      <Modals
        selectedTreatment={selectedTreatment}
        onCloseTreatment={() => setSelectedTreatment(null)}
        selectedCase={selectedCase}
        onCloseCase={() => setSelectedCase(null)}
        selectedPost={selectedPost}
        onClosePost={() => setSelectedPost(null)}
        isBookingOpen={isBookingOpen}
        onCloseBooking={() => setIsBookingOpen(false)}
        bookingProcedureTitle={bookingProcedureTitle}
      />
    </div>
  );
}
