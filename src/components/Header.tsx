import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { CLINIC_INFO } from '../data/siteContent';
import { 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  Calendar,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (procedure?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Método Singullaris®', href: '#metodo' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Casos Reais', href: '#casos' },
    { label: 'Blog', href: '#blog' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fff8f7]/90 backdrop-blur-xl border-b border-[#eedfdf] shadow-[0_4px_24px_rgba(33,26,26,0.04)] py-3'
          : 'bg-[#fff8f7]/70 backdrop-blur-md border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center"
            aria-label="Dra. Juliene Ribeiro Página Inicial"
          >
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#514444] hover:text-[#815255] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#815255] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Betim Location Pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#faeaea] text-[#775a19] border border-[#fed488]/40 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#775a19]" />
              <span>Betim, MG</span>
            </div>

            {/* CTA Button */}
            <button
              id="header-booking-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white transition-all shadow-[0_4px_16px_rgba(129,82,85,0.25)] hover:shadow-lg font-semibold text-xs sm:text-sm tracking-wide group"
            >
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110 text-[#f4b7ba]" />
              <span className="hidden sm:inline">Agendar Consulta</span>
              <span className="sm:hidden">Agendar</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-[#514444] hover:bg-[#faeaea] transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fff8f7] border-b border-[#eedfdf] shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#eedfdf] text-xs font-semibold text-[#775a19]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Betim - MG (Comercial Asturias)
              </span>
              <span className="text-[#815255]">CRBM 10302</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#211a1a] hover:bg-[#faeaea] hover:text-[#815255] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#815255] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Agendar Avaliação
              </button>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-[#faeaea] text-[#815255] font-semibold text-sm flex items-center justify-center gap-2 border border-[#815255]/20"
              >
                <PhoneCall className="w-4 h-4 text-[#775a19]" />
                WhatsApp: {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
