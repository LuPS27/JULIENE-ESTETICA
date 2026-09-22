import React, { useState } from 'react';
import { TREATMENTS, Treatment, CLINIC_INFO } from '../data/siteContent';
import { 
  Sparkles, 
  Clock, 
  ChevronRight, 
  Check, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck,
  Heart
} from 'lucide-react';

interface TreatmentsProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: (procedureTitle?: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ 
  onSelectTreatment,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Procedimentos' },
    { id: 'global', label: 'Planejamento Global' },
    { id: 'labios', label: 'Escultura Labial' },
    { id: 'botox', label: 'Toxina Botulínica' },
    { id: 'colageno', label: 'Banco de Colágeno' },
  ];

  const filteredTreatments = activeCategory === 'todos'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section id="tratamentos" className="w-full py-20 lg:py-28 bg-[#fff0f0]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#815255]" />
              <span>Tratamentos de Alta Precisão</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211a1a] font-semibold tracking-tight">
              A Arte da Reestruturação e do Rejuvenescimento
            </h2>
            <p className="text-base text-[#514444]">
              Protocolos individualizados para recuperar contornos, estimular colágeno autólogo e suavizar linhas de expressão com segurança biomédica.
            </p>
          </div>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#815255] font-semibold text-sm hover:bg-[#faeaea] transition-all shadow-sm border border-[#eedfdf] self-start md:self-end"
          >
            <span>Consultar Tabela &amp; Condições</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#815255] text-white shadow-md'
                  : 'bg-white text-[#514444] hover:bg-[#faeaea] border border-[#eedfdf]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#eedfdf] hover:border-[#d49b9e]"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-[#faeaea]">
                <img
                  src={treatment.imageUrl}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#815255] text-xs font-bold shadow-sm">
                  {treatment.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#211a1a] mb-2 group-hover:text-[#815255] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#514444] leading-relaxed line-clamp-3">
                    {treatment.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#faeaea] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#775a19]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{treatment.duration}</span>
                  </div>

                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="text-[#815255] hover:text-[#663b3e] text-xs sm:text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Ver Detalhes</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#eedfdf] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#faeaea] flex items-center justify-center text-[#815255] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#211a1a]">
                Segurança Biomédica e Conforto em Todas as Sessões
              </h4>
              <p className="text-xs text-[#514444]">
                Insumos lacrados na sua frente, microcânulas atraumáticas e protocolo anestésico farmacêutico de ponta.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-2.5 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm transition-all"
          >
            Pré-Agendar Avaliação
          </button>
        </div>
      </div>
    </section>
  );
};
