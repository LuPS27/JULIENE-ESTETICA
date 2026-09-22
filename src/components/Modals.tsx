import React, { useState } from 'react';
import { Treatment, CaseStudy, BlogPost, CLINIC_INFO } from '../data/siteContent';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Sparkles, 
  Calendar, 
  Share2, 
  Send 
} from 'lucide-react';

interface ModalsProps {
  selectedTreatment: Treatment | null;
  onCloseTreatment: () => void;
  selectedCase: CaseStudy | null;
  onCloseCase: () => void;
  selectedPost: BlogPost | null;
  onClosePost: () => void;
  isBookingOpen: boolean;
  onCloseBooking: () => void;
  bookingProcedureTitle?: string;
}

export const Modals: React.FC<ModalsProps> = ({
  selectedTreatment,
  onCloseTreatment,
  selectedCase,
  onCloseCase,
  selectedPost,
  onClosePost,
  isBookingOpen,
  onCloseBooking,
  bookingProcedureTitle = ''
}) => {
  // Local booking state inside quick booking modal
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalProcedure, setModalProcedure] = useState(bookingProcedureTitle || 'Harmonização Facial Full Face');

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalName || !modalPhone) return;

    const message = `Olá Dra. Juliene e equipe! Meu nome é ${modalName} (${modalPhone}). Gostaria de agendar uma consulta avaliativa para ${modalProcedure || 'Harmonização Facial'} no consultório de Betim. Quais os horários disponíveis?`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/message/Z6GI7NGWIQ6CO1?text=${encoded}`, '_blank');
    onCloseBooking();
  };

  return (
    <>
      {/* 1. TREATMENT DETAIL MODAL */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#eedfdf]">
            {/* Modal Header Bar */}
            <div className="relative h-48 sm:h-56 bg-[#faeaea] overflow-hidden shrink-0">
              <img
                src={selectedTreatment.imageUrl}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#815255] text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    {selectedTreatment.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {selectedTreatment.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={onCloseTreatment}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#211a1a] flex items-center justify-center transition-colors shadow-md"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#775a19] bg-[#faeaea] px-3.5 py-1.5 rounded-full w-fit">
                <Clock className="w-4 h-4 text-[#815255]" />
                <span>Duração estimada: {selectedTreatment.duration}</span>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-[#211a1a] mb-1">
                  Visão Geral do Procedimento
                </h4>
                <p className="text-sm text-[#514444] leading-relaxed">
                  {selectedTreatment.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#fff0f0] border border-[#eedfdf]">
                  <h5 className="text-xs font-bold text-[#815255] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#775a19]" /> Principais Indicações
                  </h5>
                  <ul className="space-y-1.5">
                    {selectedTreatment.indications.map((ind, i) => (
                      <li key={i} className="text-xs text-[#514444] flex items-start gap-1.5">
                        <span className="text-[#815255] font-bold">•</span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#fff0f0] border border-[#eedfdf]">
                  <h5 className="text-xs font-bold text-[#775a19] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#815255]" /> Cuidados Recomendados
                  </h5>
                  <ul className="space-y-1.5">
                    {selectedTreatment.care.map((care, i) => (
                      <li key={i} className="text-xs text-[#514444] flex items-start gap-1.5">
                        <span className="text-[#775a19] font-bold">•</span>
                        <span>{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#fff8f7] border-t border-[#eedfdf] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-[#514444] text-center sm:text-left">
                Avaliação individualizada no Edifício Comercial Asturias, Betim
              </span>
              <a
                href={`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(`Olá, Dra. Juliene! Gostaria de saber mais informações e valores para o procedimento de ${selectedTreatment.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#f4b7ba]" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. REAL CASE STUDY MODAL */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#eedfdf]">
            <div className="relative aspect-[4/4.5] bg-[#faeaea] overflow-hidden">
              <img
                src={selectedCase.imageUrl}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onCloseCase}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/85 hover:bg-white text-[#211a1a] flex items-center justify-center shadow-lg transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#815255] uppercase tracking-wider">
                    {selectedCase.badge} • {selectedCase.procedure}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-semibold text-[#211a1a]">
                    {selectedCase.title}
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#775a19]">
                  {selectedCase.patient} ({selectedCase.age})
                </span>
              </div>
            </div>

            <div className="p-6 bg-white space-y-4">
              <div className="p-4 rounded-2xl bg-[#fff0f0] border border-[#eedfdf] italic text-xs sm:text-sm text-[#211a1a] leading-relaxed">
                {selectedCase.testimonial}
              </div>

              <div className="flex items-center justify-between text-xs text-[#514444] pt-2 border-t border-[#faeaea]">
                <span>Atendimento realizado em Betim-MG</span>
                <span className="font-semibold text-[#815255]">Método Singullaris®</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. BLOG POST READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#eedfdf]">
            <div className="relative h-48 bg-[#faeaea] overflow-hidden shrink-0">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClosePost}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/85 hover:bg-white text-[#211a1a] flex items-center justify-center shadow-md transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-white/95 text-[#775a19] text-xs font-bold">
                {selectedPost.tag}
              </span>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="text-xs text-[#514444] flex items-center gap-2">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>Tempo de leitura: {selectedPost.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#211a1a] leading-snug">
                {selectedPost.title}
              </h2>

              <div className="space-y-4 pt-2 text-sm sm:text-base text-[#514444] leading-relaxed font-sans">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#faeaea] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#211a1a]">
                    Dra. Juliene Ribeiro
                  </h4>
                  <span className="text-xs text-[#775a19]">Biomédica Esteta • CRBM 10302</span>
                </div>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#faeaea] text-[#815255] font-semibold text-xs hover:bg-[#815255] hover:text-white transition-colors"
                >
                  Tirar Dúvidas
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. QUICK BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#eedfdf]">
            <button
              onClick={onCloseBooking}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#faeaea] hover:bg-[#eedfdf] text-[#211a1a] flex items-center justify-center transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
                Consulta Avaliativa Exclusiva
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#211a1a] mt-1">
                Agendamento de Horário
              </h3>
              <p className="text-xs text-[#514444] mt-1">
                Atendimento no Edifício Comercial Asturias, Centro de Betim.
              </p>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-[#514444] uppercase tracking-wider block mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  value={modalName}
                  onChange={(e) => setModalName(e.target.value)}
                  placeholder="Nome e Sobrenome"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f7] border border-[#eedfdf] text-sm text-[#211a1a] focus:outline-none focus:ring-2 focus:ring-[#815255]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#514444] uppercase tracking-wider block mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  value={modalPhone}
                  onChange={(e) => setModalPhone(e.target.value)}
                  placeholder="(31) 90000-0000"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f7] border border-[#eedfdf] text-sm text-[#211a1a] focus:outline-none focus:ring-2 focus:ring-[#815255]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#514444] uppercase tracking-wider block mb-1">
                  Procedimento de Interesse
                </label>
                <input
                  type="text"
                  value={modalProcedure}
                  onChange={(e) => setModalProcedure(e.target.value)}
                  placeholder="Ex: Harmonização Full Face, Botox, etc."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#fff8f7] border border-[#eedfdf] text-sm text-[#211a1a] focus:outline-none focus:ring-2 focus:ring-[#815255]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#815255] hover:bg-[#663b3e] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-4 h-4 text-[#f4b7ba]" />
                <span>Confirmar via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
