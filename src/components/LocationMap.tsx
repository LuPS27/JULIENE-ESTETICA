import React from 'react';
import { CLINIC_INFO } from '../data/siteContent';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Star, 
  Building2, 
  Car, 
  ExternalLink, 
  MessageCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section id="localizacao" className="w-full py-20 lg:py-28 bg-[#fff8f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Location Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-[#eedfdf] shadow-md">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#815255]" />
                <span>Consultório em Betim</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#211a1a] tracking-tight">
                Localização Privilegiada no Centro de Betim
              </h2>

              {/* Info Items */}
              <div className="space-y-5 pt-2">
                {/* Building Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#faeaea] flex items-center justify-center text-[#815255] shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#211a1a]">Edifício Comercial Asturias</h4>
                    <p className="text-xs sm:text-sm text-[#514444]">Av. Amazonas, 1446 - Centro</p>
                    <p className="text-xs sm:text-sm text-[#514444]">Betim - MG, CEP: 32600-416</p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-[#775a19] bg-[#faeaea] px-2 py-0.5 rounded-full">
                      Próximo à Praça da Bíblia &amp; Colher de Pau
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#faeaea] flex items-center justify-center text-[#815255] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#211a1a]">Horário de Atendimento</h4>
                    <p className="text-xs sm:text-sm text-[#514444]">{CLINIC_INFO.hours}</p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#815255] mt-1">
                      <span className="w-2 h-2 rounded-full bg-[#815255] animate-pulse" />
                      <span>Atendimento com hora previamente agendada</span>
                    </div>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#faeaea] flex items-center justify-center text-[#815255] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#211a1a]">Contato Oficial &amp; WhatsApp</h4>
                    <p className="text-xs sm:text-sm text-[#514444] font-medium">{CLINIC_INFO.phone}</p>
                    <span className="text-[11px] text-[#514444]">Equipe pronta para esclarecer dúvidas sobre procedimentos</span>
                  </div>
                </div>

                {/* Comfort & Parking */}
                <div className="p-4 rounded-2xl bg-[#fff0f0] border border-[#eedfdf] flex items-start gap-3">
                  <Car className="w-5 h-5 text-[#775a19] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#211a1a] block">
                      Conforto, Acessibilidade &amp; Estacionamento
                    </span>
                    <span className="text-xs text-[#514444]">
                      Prédio comercial moderno com portaria identificada, elevadores rápidos e opções de estacionamento conveniado nas imediações.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-[#eedfdf]">
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <Navigation className="w-4 h-4 text-[#ffdadb]" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#faeaea] text-[#815255] font-semibold text-xs sm:text-sm border border-[#eedfdf] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#775a19]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Styled Google Maps Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-[#eedfdf] relative min-h-[460px] flex flex-col justify-between">
            {/* Map background view */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDa5AULHnKgVhGWMQboruK-5r7NIC8YmRPsYnhcE77NoI-FLLgsfS0Px2prtG3CqRYUBNK1p6SO8Z53w2m8ddiH1vMrN30AbT5M8uEuNBw3P5K-XdTVUTHpKTWq4bZH8ilG3GSG7yrowx1cV4TT0QlHVOUPbOJ_CPOnAHe0ZigBJN2_rl6i7cVcYgC_M4dffBtgmUIP3eXAws7CJQdF1WR-K7O5zZntY69Oxp7yEKVYBWxko0t0o7MV')`
              }}
            />

            {/* Dark/Soft gradient overlay for map readability */}
            <div className="absolute inset-0 bg-[#321114]/10 pointer-events-none" />

            {/* Floating Google Maps Card replicating authentic Google Meu Negócio card from Image 2 */}
            <div className="relative z-10 m-4 sm:m-6 p-5 max-w-sm rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-[#eedfdf] flex flex-col space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-wider">
                  Google Meu Negócio Verificado
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#faeaea] text-[#815255] text-[10px] font-bold">
                  Oficial
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#211a1a] leading-tight">
                {CLINIC_INFO.name}
              </h3>

              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#775a19]">
                  {CLINIC_INFO.googleRating}
                </span>
                <div className="flex text-[#775a19] text-xs">
                  ★★★★★
                </div>
                <span className="text-xs text-[#514444]">
                  ({CLINIC_INFO.googleReviewsCount} avaliações)
                </span>
              </div>

              <p className="text-xs text-[#514444] leading-relaxed">
                Centro de saúde e beleza • Edifício Comercial Asturias
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#faeaea]">
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#815255] text-white text-xs font-semibold flex items-center gap-1 hover:bg-[#663b3e] transition-colors shadow-sm"
                >
                  <Navigation className="w-3 h-3 text-[#ffdadb]" /> Traçar Rota
                </a>
                <span className="text-xs text-[#775a19] font-bold">
                  Aberto até às 19:00
                </span>
              </div>
            </div>

            {/* Bottom address locator tag */}
            <div className="relative z-10 m-4 sm:m-6 self-end px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-lg text-xs font-semibold text-[#211a1a] border border-[#eedfdf] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#815255]" />
              <span>Av. Amazonas, 1446 • Centro de Betim - MG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
