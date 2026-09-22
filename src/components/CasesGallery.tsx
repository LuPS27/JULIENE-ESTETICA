import React, { useState } from 'react';
import { REAL_CASES, INSTAGRAM_HIGHLIGHTS, CLINIC_INFO, CaseStudy } from '../data/siteContent';
import { 
  CheckCircle2, 
  Instagram, 
  ExternalLink, 
  Heart, 
  MessageCircle, 
  Sparkles,
  Maximize2,
  ShieldCheck,
  Star
} from 'lucide-react';

interface CasesGalleryProps {
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export const CasesGallery: React.FC<CasesGalleryProps> = ({ onSelectCase }) => {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  return (
    <section id="casos" className="w-full py-20 lg:py-28 bg-[#fff8f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faeaea] text-[#775a19] border border-[#fed488]/40 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#815255]" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Resultados Reais &amp; Ética Biomédica
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211a1a] font-semibold tracking-tight">
            Transformações com Respeito à Sua Essência
          </h2>

          <p className="text-base text-[#514444] leading-relaxed">
            Registros compartilhados no perfil profissional da Dra. Juliene. As imagens foram recortadas das capturas enviadas, sem modificar os resultados. Cada pessoa responde de forma diferente ao tratamento.
          </p>
        </div>

        {/* Instagram Profile Highlights Bar (mimicking her actual Instagram profile) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 pb-8 overflow-x-auto scrollbar-none mb-6">
          {INSTAGRAM_HIGHLIGHTS.map((hl) => (
            <div
              key={hl.id}
              onClick={() => setActiveHighlight(hl.id === activeHighlight ? null : hl.id)}
              className="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 bg-gradient-to-tr from-[#c5a059] via-[#815255] to-[#f4b7ba] group-hover:scale-105 transition-transform shadow-sm">
                <div className="w-full h-full rounded-full bg-white p-1 flex items-center justify-center">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${hl.color} flex items-center justify-center text-white text-xs font-bold`}>
                    <Heart className="w-5 h-5 fill-white/80" />
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#211a1a] tracking-tight group-hover:text-[#815255] transition-colors">
                {hl.name}
              </span>
            </div>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {REAL_CASES.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="flex flex-col rounded-3xl bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#eedfdf] group"
            >
              {/* Image with zoom badge */}
              <div 
                onClick={() => onSelectCase(caseStudy)}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#faeaea] cursor-pointer"
              >
                <img
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#815255] text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" /> Ampliar imagem
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
                  <span className="text-[11px] font-bold text-[#815255] uppercase tracking-wide">
                    {caseStudy.procedure}
                  </span>
                  <span className="text-[11px] font-semibold text-[#775a19]">
                    {caseStudy.badge}
                  </span>
                </div>
              </div>

              {/* Patient Testimonial Quote */}
              <div className="p-3 pt-4 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs sm:text-sm text-[#211a1a] italic leading-relaxed">
                    {caseStudy.testimonial}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#faeaea] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#775a19]">
                    {caseStudy.patient}
                  </span>
                  <span className="text-[11px] text-[#514444]">
                    {caseStudy.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile Callout Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#faeaea] to-[#fff0f0] border border-[#eedfdf] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f4b7ba] to-[#815255] flex items-center justify-center text-white shadow-md shrink-0">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#211a1a]">
                Acompanhe Bastidores e Vídeos no Instagram
              </h3>
              <p className="text-xs sm:text-sm text-[#514444]">
                +12,3 mil seguidores conectados diariamente com casos, rotina clínica e dicas de cuidados faciais.
              </p>
            </div>
          </div>

          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#211a1a] hover:text-[#815255] transition-all font-semibold text-xs sm:text-sm shadow-sm border border-[#eedfdf] shrink-0"
          >
            <span>Seguir @drajulieneribeiro</span>
            <ExternalLink className="w-4 h-4 text-[#815255]" />
          </a>
        </div>
      </div>
    </section>
  );
};
