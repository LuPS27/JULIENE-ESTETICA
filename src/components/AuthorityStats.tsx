import React from 'react';
import { CLINIC_INFO } from '../data/siteContent';
import { Users, Star, Award, Fingerprint, CheckCircle } from 'lucide-react';

export const AuthorityStats: React.FC = () => {
  return (
    <section id="sobre" className="w-full bg-[#faeaea] py-14 border-y border-[#eedfdf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="flex flex-col p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow border border-[#eedfdf]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
                Histórico Clínico
              </span>
              <div className="w-9 h-9 rounded-full bg-[#faeaea] flex items-center justify-center text-[#815255]">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <span className="font-serif text-3xl lg:text-4xl text-[#815255] font-semibold">
              +4.000
            </span>
            <span className="text-sm font-semibold text-[#211a1a] mt-1">
              Mulheres Transformadas
            </span>
            <p className="text-xs text-[#514444] mt-2 leading-relaxed">
              Casos clínicos documentados com preservação da identidade única e proporções harmônicas.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow border border-[#eedfdf]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
                Google Meu Negócio
              </span>
              <div className="w-9 h-9 rounded-full bg-[#ffdea5]/50 flex items-center justify-center text-[#775a19]">
                <Star className="w-5 h-5 fill-[#775a19]" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl lg:text-4xl text-[#775a19] font-semibold">
                {CLINIC_INFO.googleRating}
              </span>
              <div className="flex text-[#775a19] text-base">
                ★★★★★
              </div>
            </div>
            <span className="text-sm font-semibold text-[#211a1a] mt-1">
              Nota Máxima Absoluta
            </span>
            <p className="text-xs text-[#514444] mt-2 leading-relaxed">
              {CLINIC_INFO.googleReviewsCount} avaliações reais e verificadas de pacientes atendidas em Betim e região.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow border border-[#eedfdf]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
                Registro Profissional
              </span>
              <div className="w-9 h-9 rounded-full bg-[#faeaea] flex items-center justify-center text-[#815255]">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <span className="font-serif text-2xl lg:text-3xl text-[#815255] font-semibold">
              {CLINIC_INFO.crbm}
            </span>
            <span className="text-sm font-semibold text-[#211a1a] mt-1">
              Biomedicina Esteta
            </span>
            <p className="text-xs text-[#514444] mt-2 leading-relaxed">
              Rigor científico, biossegurança anatômica e substâncias com selo de aprovação da Anvisa.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow border border-[#eedfdf]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
                Filosofia Clínica
              </span>
              <div className="w-9 h-9 rounded-full bg-[#ffdea5]/50 flex items-center justify-center text-[#775a19]">
                <Fingerprint className="w-5 h-5" />
              </div>
            </div>
            <span className="font-serif text-3xl lg:text-4xl text-[#775a19] font-semibold">
              100%
            </span>
            <span className="text-sm font-semibold text-[#211a1a] mt-1">
              Individualizado
            </span>
            <p className="text-xs text-[#514444] mt-2 leading-relaxed">
              Sem fórmulas prontas ou pacotes padronizados. Cada face é tratada como uma obra de arte única.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
