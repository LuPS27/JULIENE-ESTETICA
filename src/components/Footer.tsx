import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CLINIC_INFO } from '../data/siteContent';
import { 
  Clock, 
  Phone, 
  MapPin, 
  Instagram, 
  ShieldCheck, 
  Heart, 
  ArrowUp 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#faeaea] border-t border-[#eedfdf] mt-16 text-[#211a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#eedfdf]">
          {/* Column 1: Brand & Philosophy */}
          <div className="flex flex-col space-y-4">
            <BrandLogo />
            <p className="text-xs sm:text-sm text-[#514444] leading-relaxed">
              Especialista em Harmonização Facial e rejuvenescimento natural. Criadora do Método Singullaris®, promovendo a beleza autêntica e o refinamento anatômico com segurança e ética biomédica.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#775a19] bg-white px-3 py-1.5 rounded-full border border-[#eedfdf]">
                <ShieldCheck className="w-4 h-4 text-[#815255]" />
                <span>CRBM 10302 • Biomédica Esteta</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
              Navegação Rápida
            </span>
            <nav className="flex flex-col space-y-2 text-xs sm:text-sm text-[#514444]">
              <a href="#inicio" className="hover:text-[#815255] transition-colors">Início</a>
              <a href="#sobre" className="hover:text-[#815255] transition-colors">Sobre a Doutora</a>
              <a href="#metodo" className="hover:text-[#815255] transition-colors">Método Singullaris®</a>
              <a href="#tratamentos" className="hover:text-[#815255] transition-colors">Tratamentos Exclusivos</a>
              <a href="#casos" className="hover:text-[#815255] transition-colors">Casos &amp; Depoimentos</a>
              <a href="#blog" className="hover:text-[#815255] transition-colors">Blog de Estética</a>
              <a href="#localizacao" className="hover:text-[#815255] transition-colors">Localização &amp; Contato</a>
            </nav>
          </div>

          {/* Column 3: Clinical Care */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
              Atendimento Clínico
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-[#514444]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#211a1a]">Segunda a Sexta-feira</p>
                  <p className="text-xs">09h às 19h (Horário agendado)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#211a1a]">WhatsApp Recepção</p>
                  <p className="text-xs">{CLINIC_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#211a1a]">Comunidade Digital</p>
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#815255] hover:underline"
                  >
                    {CLINIC_INFO.instagramHandle} (12,3k)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location Betim */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
              Consultório Exclusivo
            </span>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#514444]">
              <MapPin className="w-4 h-4 text-[#775a19] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#211a1a]">Edifício Comercial Asturias</p>
                <p className="text-xs">Av. Amazonas, 1446, Centro</p>
                <p className="text-xs">Betim - MG, 32600-416</p>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-[#eedfdf]">
              <span className="text-[11px] font-bold text-[#815255] block mb-0.5">
                Segurança &amp; Conforto
              </span>
              <p className="text-[11px] text-[#514444] leading-snug">
                Estacionamento conveniado e acessibilidade completa no centro médico de Betim.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notes & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#514444]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Dra. Juliene Ribeiro — Biomédica Esteta (CRBM 10302). Todos os direitos reservados.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] text-[#837374] leading-normal">
            Em estrita observância à regulamentação do Conselho Regional de Biomedicina e normas sanitárias. Imagens clínicas ilustram casos individuais e não garantem resultados idênticos para todas as pessoas.
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#faeaea] text-[#815255] border border-[#eedfdf] flex items-center justify-center transition-colors shadow-sm shrink-0"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
