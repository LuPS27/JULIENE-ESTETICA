import React, { useState } from 'react';
import { CLINIC_INFO, FAQS } from '../data/siteContent';
import { 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Send
} from 'lucide-react';

interface PreBookingProps {
  initialProcedure?: string;
}

export const PreBooking: React.FC<PreBookingProps> = ({ initialProcedure = 'harmonizacao' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [procedure, setProcedure] = useState(initialProcedure);
  const [period, setPeriod] = useState('qualquer');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Build polite WhatsApp message
    const procedureNames: Record<string, string> = {
      harmonizacao: 'Harmonização Facial Full Face',
      labios: 'Preenchimento Labial Esculpido',
      botox: 'Toxina Botulínica Preventiva (Botox)',
      colageno: 'Bioestimuladores de Colágeno',
      rinomodelação: 'Rinomodelação Estruturada',
      avaliacao: 'Primeira Consulta Avaliativa (Método Singullaris®)',
      outros: 'Dúvidas Gerais sobre Tratamentos'
    };

    const selectedProcedureName = procedureNames[procedure] || procedure;
    const periodText = period === 'manha' ? 'no período da Manhã' : period === 'tarde' ? 'no período da Tarde' : 'em qualquer horário disponível';

    const message = `Olá, Dra. Juliene e equipe! Meu nome é ${name} (${phone}). Gostaria de solicitar um horário para ${selectedProcedureName} no consultório em Betim, de preferência ${periodText}. Poderiam me informar a disponibilidade?`;

    setSubmitted(true);

    // Open WhatsApp after a brief moment
    setTimeout(() => {
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/message/Z6GI7NGWIQ6CO1?text=${encoded}`, '_blank');
    }, 600);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="agendamento" className="w-full py-20 lg:py-28 bg-[#faeaea]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[2.5rem] bg-white border border-[#eedfdf] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex flex-col space-y-5 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faeaea] text-[#775a19] border border-[#fed488]/40 w-fit mx-auto lg:mx-0">
              <Calendar className="w-4 h-4 text-[#815255]" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Agendamentos Abertos em Betim
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211a1a] font-semibold tracking-tight leading-tight">
              Sua melhor versão começa com uma conversa franca e acolhedora.
            </h2>

            <p className="text-base sm:text-lg text-[#514444] leading-relaxed">
              Reserve seu horário exclusivo no Edifício Comercial Asturias e descubra como o Método Singullaris® pode devolver o viço, contorno e luminosidade da sua face sem exageros.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white transition-all shadow-[0_8px_24px_rgba(129,82,85,0.25)] hover:shadow-xl font-semibold text-sm sm:text-base tracking-wide group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110 text-[#f4b7ba]" />
                <span>Falar Diretamente no WhatsApp</span>
              </a>

              <span className="text-xs text-[#514444] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#775a19]" />
                Seg. a Sex. das 09h às 19h
              </span>
            </div>
          </div>

          {/* Quick Pre-Booking Form Box */}
          <div className="w-full lg:w-[420px] p-6 sm:p-8 rounded-3xl bg-[#fff8f7] border border-[#eedfdf] shadow-lg flex flex-col space-y-4">
            <div className="text-center pb-2 border-b border-[#eedfdf]">
              <h3 className="font-serif text-xl font-semibold text-[#211a1a]">
                Pré-Agendamento Rápido
              </h3>
              <p className="text-xs text-[#514444] mt-1">
                Preencha seus dados para receber horários disponíveis com prioridade no WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#faeaea] border border-[#d49b9e] text-center flex flex-col items-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#815255]" />
                <h4 className="font-serif text-lg font-semibold text-[#211a1a]">
                  Solicitação Enviada!
                </h4>
                <p className="text-xs text-[#514444]">
                  O WhatsApp da clínica foi aberto para confirmar seu horário com nossa recepção.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#815255] underline font-bold pt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-[#514444] uppercase tracking-wider block mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#eedfdf] text-sm text-[#211a1a] placeholder:text-[#837374] focus:outline-none focus:ring-2 focus:ring-[#815255] shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#514444] uppercase tracking-wider block mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(31) 90000-0000"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#eedfdf] text-sm text-[#211a1a] placeholder:text-[#837374] focus:outline-none focus:ring-2 focus:ring-[#815255] shadow-inner"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#514444] uppercase tracking-wider block mb-1">
                    Procedimento de Interesse
                  </label>
                  <select
                    value={procedure}
                    onChange={(e) => setProcedure(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#eedfdf] text-sm text-[#211a1a] focus:outline-none focus:ring-2 focus:ring-[#815255]"
                  >
                    <option value="harmonizacao">Harmonização Facial Full Face</option>
                    <option value="labios">Preenchimento Labial Esculpido</option>
                    <option value="botox">Toxina Botulínica (Botox)</option>
                    <option value="colageno">Bioestimulador de Colágeno</option>
                    <option value="rinomodelação">Rinomodelação Estruturada</option>
                    <option value="avaliacao">Primeira Consulta Avaliativa</option>
                    <option value="outros">Dúvidas Gerais</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#514444] uppercase tracking-wider block mb-1">
                    Melhor Período para Atendimento
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-medium">
                    {[
                      { id: 'manha', label: 'Manhã' },
                      { id: 'tarde', label: 'Tarde' },
                      { id: 'qualquer', label: 'Qualquer' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPeriod(p.id)}
                        className={`py-2 rounded-lg border text-center transition-colors ${
                          period === p.id
                            ? 'bg-[#815255] text-white border-[#815255]'
                            : 'bg-white text-[#514444] border-[#eedfdf] hover:bg-[#faeaea]'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-xl bg-[#815255] hover:bg-[#663b3e] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#f4b7ba]" />
                  <span>Solicitar Horário no WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#211a1a]">
              Perguntas Frequentes &amp; Esclarecimentos
            </h3>
            <p className="text-sm text-[#514444] mt-1">
              Transparência e rigor científico antes, durante e após cada atendimento.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#eedfdf] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-[#211a1a] hover:text-[#815255] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#815255] text-white' : 'bg-[#faeaea] text-[#815255]'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#faeaea] text-xs sm:text-sm text-[#514444] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
