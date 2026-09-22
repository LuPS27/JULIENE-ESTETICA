import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/siteContent';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Toast helper notification */}
      {showBubble && (
        <div className="relative bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#eedfdf] max-w-xs text-xs text-[#211a1a] flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-[#815255] animate-ping shrink-0" />
          <div className="flex flex-col">
            <span className="font-bold text-[#815255]">Atendimento Betim-MG</span>
            <span className="text-[11px] text-[#514444]">Dúvidas ou agendamento? Fale conosco!</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowBubble(false);
            }}
            className="text-[#837374] hover:text-[#211a1a] ml-1 p-0.5"
            aria-label="Fechar notificação"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Round Button with Soft Pulse */}
      <div className="relative flex items-center justify-center">
        {/* Soft ambient radiating glow ring */}
        <span
          className="absolute w-14 h-14 rounded-full bg-[#f4b7ba] opacity-40 animate-ping pointer-events-none"
          style={{ animationDuration: '2.6s' }}
        />

        <a
          id="floating-whatsapp-btn"
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-14 h-14 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white flex items-center justify-center transition-all hover:scale-110 group-hover:ring-4 group-hover:ring-[#f4b7ba]/50 animate-soft-pulse"
          aria-label="Conversar no WhatsApp com Dra. Juliene Ribeiro"
        >
          <MessageCircle className="w-7 h-7 text-white fill-white/10" />
        </a>
      </div>
    </aside>
  );
};
