import React from 'react';
import { CLINIC_INFO } from '../data/siteContent';
import { 
  Sparkles, 
  MessageCircle, 
  ArrowDown, 
  Star, 
  ShieldCheck, 
  Heart, 
  Award,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#fff8f7] pt-28 pb-16 lg:pt-36 lg:pb-28">
      {/* Delicate background ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#ffdadb]/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#ffdea5]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#f4b7ba]/20 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faeaea] text-[#815255] border border-[#d49b9e]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#775a19]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#775a19]">
                Harmonização Facial &amp; Consultoria de Imagem
              </span>
            </div>

            {/* Display Hero Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] text-[#211a1a] tracking-tight leading-[1.15] font-semibold">
              Realce a sua beleza natural com a sensibilidade do{' '}
              <span className="italic text-[#815255] relative inline-block">
                Método Singullaris®
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-[#f4b7ba]/40 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Authentic Quote from Dra. Juliene */}
            <div className="relative pl-5 border-l-2 border-[#815255]/40 py-1">
              <p className="font-sans text-base sm:text-lg text-[#514444] italic leading-relaxed">
                “Se você chegou agora, deixa eu te mostrar como eu enxergo a estética: resultados elegantes, harmônicos e que respeitam a sua individualidade.”
              </p>
              <span className="text-xs font-semibold text-[#775a19] uppercase tracking-wider block mt-2">
                — Dra. Juliene Ribeiro • CRBM 10302
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                id="hero-whatsapp-cta"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white transition-all shadow-[0_8px_24px_rgba(129,82,85,0.25)] hover:shadow-xl font-semibold text-sm sm:text-base tracking-wide group w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110 text-[#f4b7ba]" />
                <span>Agendar Consulta via WhatsApp</span>
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 rounded-full bg-[#faeaea] text-[#211a1a] hover:bg-[#f4e5e4] hover:text-[#815255] transition-colors font-medium text-sm sm:text-base w-full sm:w-auto border border-[#eedfdf]"
              >
                <span>Conhecer o Método Singullaris</span>
                <ArrowDown className="w-4 h-4 text-[#815255]" />
              </a>
            </div>

            {/* Quick Micro Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 w-full max-w-xl">
              <div className="flex flex-col p-3 sm:p-3.5 rounded-2xl bg-white/85 backdrop-blur-md shadow-sm border border-[#eedfdf]">
                <span className="text-[11px] font-bold text-[#775a19] uppercase tracking-wider">Credencial</span>
                <span className="font-serif text-base sm:text-lg text-[#211a1a] font-semibold mt-0.5">CRBM 10302</span>
                <span className="text-[11px] text-[#514444] leading-tight">Biomédica Esteta</span>
              </div>

              <div className="flex flex-col p-3 sm:p-3.5 rounded-2xl bg-white/85 backdrop-blur-md shadow-sm border border-[#eedfdf]">
                <div className="flex items-center gap-1 text-[#775a19]">
                  <Star className="w-3.5 h-3.5 fill-[#775a19] text-[#775a19]" />
                  <span className="font-serif text-base sm:text-lg text-[#211a1a] font-semibold">5.0 ★</span>
                </div>
                <span className="text-[11px] font-bold text-[#775a19] uppercase tracking-wider mt-0.5">Google Maps</span>
                <span className="text-[11px] text-[#514444] leading-tight">207 avaliações</span>
              </div>

              <div className="flex flex-col p-3 sm:p-3.5 rounded-2xl bg-white/85 backdrop-blur-md shadow-sm border border-[#eedfdf]">
                <span className="text-[11px] font-bold text-[#775a19] uppercase tracking-wider">Atendimento</span>
                <span className="font-serif text-base sm:text-lg text-[#211a1a] font-semibold mt-0.5">Betim, MG</span>
                <span className="text-[11px] text-[#514444] leading-tight">Comercial Asturias</span>
              </div>
            </div>
          </div>

          {/* Visual Hero Composition Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] p-3 bg-gradient-to-b from-[#faeaea] to-[#fff0f0] shadow-2xl overflow-hidden border border-[#eedfdf]">
              <img
                src="/images/dra-juliene-foto-enviada.png"
                alt="Dra. Juliene Ribeiro - Biomédica Esteta em Betim"
                className="w-full h-full object-cover rounded-[2rem]"
                loading="eager"
              />

              {/* Floating Badge: Experience */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-[#eedfdf] flex items-center gap-3.5 animate-in fade-in duration-500">
                <div className="w-12 h-12 rounded-full bg-[#ffdea5] flex items-center justify-center text-[#775a19] shrink-0 shadow-inner">
                  <Heart className="w-6 h-6 fill-[#775a19]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-wider">Compromisso Ético</span>
                  <span className="font-serif text-base sm:text-lg text-[#211a1a] font-semibold leading-tight">
                    +4 mil mulheres transformadas
                  </span>
                  <span className="text-[11px] text-[#514444]">
                    Sem estereótipos, com harmonia facial
                  </span>
                </div>
              </div>
            </div>

            {/* Top corner decorative seal */}
            <div className="hidden sm:flex absolute -top-3 -right-3 w-28 h-28 rounded-full bg-gradient-to-br from-[#d49b9e] to-[#815255] backdrop-blur-md items-center justify-center p-2 text-center text-white shadow-xl transform rotate-6 border-2 border-white/60">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-6 h-6 text-[#ffdea5]" />
                <span className="text-[10px] leading-3 uppercase tracking-wider font-bold mt-1">
                  100% Autoral
                </span>
                <span className="text-[8px] opacity-90">Betim • MG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
