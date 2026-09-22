import React, { useState } from 'react';
import { 
  Scan, 
  Compass, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  Check, 
  MessageCircle,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { CLINIC_INFO } from '../data/siteContent';

export const MetodoSingullaris: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      number: '01',
      title: 'Avaliação 3D e Dinâmica',
      icon: Scan,
      short: 'Expressão facial em repouso e movimento',
      description: 'Analisamos o comportamento dos seus músculos faciais sorrindo, falando e em repouso. Uma harmonização elegante não pode ficar bonita apenas na foto parada: ela precisa acompanhar a naturalidade das suas emoções cotidianas sem travar suas expressões.',
      details: ['Mapeamento de 24 pontos anatômicos', 'Análise de assimetrias fisiológicas naturais', 'Fotodocumentação em estúdio clínico']
    },
    {
      number: '02',
      title: 'Proporção Áurea Suave',
      icon: Compass,
      short: 'Simetria milimétrica sem excessos de volume',
      description: 'Aplicamos a divina proporção matemática (1:1.618) com extrema moderação. Em vez de projetar queixos excessivos ou mandíbulas pesadas, buscamos o equilíbrio harmonioso que valoriza sua ancestralidade e contornos autênticos.',
      details: ['Respeito ao formato original do crânio', 'Microprojeções imperceptíveis a olho nu', 'Efeito de lifting natural sem cirurgia']
    },
    {
      number: '03',
      title: 'Alta Pureza & Segurança Anatômica',
      icon: ShieldCheck,
      short: 'Insumos padrão ouro mundial e microcânulas',
      description: 'Utilizamos microcânulas flexíveis com ponta arredondada (romba), reduzindo drasticamente riscos vasculares e desconfortos. Todos os ácidos hialurônicos e bioestimuladores possuem rastreabilidade de lote e certificação Anvisa e FDA.',
      details: ['Procedimento seguro com microcânula', 'Materiais reabsorvíveis e biocompatíveis', 'Biossegurança hospitalar rigorosa']
    },
    {
      number: '04',
      title: 'Acompanhamento Íntimo',
      icon: HeartHandshake,
      short: 'Revisão presencial em 15 e 30 dias',
      description: 'O procedimento não termina quando você se levanta da maca. Oferecemos retornos agendados para avaliar a integração tecidual e realizar eventuais refinamentos sutis, além de um canal aberto e acolhedor de WhatsApp.',
      details: ['Revisão presencial completa inclusa', 'Canal direto para tirar dúvidas pós-aplicação', 'Orientações personalizadas de home care']
    }
  ];

  return (
    <section id="metodo" className="w-full py-20 lg:py-28 bg-[#fff8f7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faeaea] text-[#775a19] border border-[#fed488]/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#815255]" />
            <span className="text-xs font-bold tracking-wider uppercase">
              Metodologia Autoral Exclusiva
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211a1a] font-semibold tracking-tight">
            Método Singullaris®:{' '}
            <span className="italic text-[#815255]">A beleza de ser quem você é</span>
          </h2>

          <p className="text-base sm:text-lg text-[#514444] leading-relaxed">
            Desenvolvido pela Dra. Juliene Ribeiro ao longo de centenas de atendimentos em Betim, o Método Singullaris® rejeita a padronização artificial. Aqui, cada milímetro é pensado para preservar e enaltecer sua essência.
          </p>
        </div>

        {/* Bento Grid layout with Photo + Interactive Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Photo Column with floating quote card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-gradient-to-b from-[#faeaea] to-[#fff0f0] p-3 sm:p-4 shadow-xl border border-[#eedfdf]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Ol78w3jU6EDEP-VQKPa-k7pHhirpMCLzrOwb8rc6Wgth-AJmxj9CFQkRdWmA2Lc4YFfpAIFCXS_YE9_ouDglene8pOFZzizcG5MscmtQkLJXnzn6RNmxLhXv8wYu-Y0Ba0EvLU5_9kegcPTACfVTQM88Zjq7vXvA4E40HTKkGiJ_EJvAlWrq7d4es92rCYEYKjEQUn_VZXrW-qZ5PVElx73NAvZXL5yXnPjYbli0TOiGlzYGlrfR"
                alt="Dra. Juliene Ribeiro em consulta estética personalizada"
                className="w-full h-auto aspect-[3/4] object-cover rounded-2xl"
              />
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="sm:absolute -bottom-8 -right-4 mt-4 sm:mt-0 p-5 sm:p-6 rounded-2xl bg-white shadow-2xl border border-[#eedfdf] max-w-sm">
              <div className="flex items-center gap-2 text-[#815255] mb-2">
                <Eye className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
                  Visão Biomédica Humanizada
                </span>
              </div>
              <p className="text-sm text-[#211a1a] italic leading-relaxed">
                “Por trás de cada aplicação, existe uma profissional que escuta a sua história, acolhe seus anseios e valoriza cada traço da sua história.”
              </p>
              <div className="mt-3 pt-3 border-t border-[#faeaea] flex items-center justify-between">
                <span className="text-xs font-bold text-[#775a19]">Dra. Juliene Ribeiro</span>
                <span className="text-[11px] text-[#514444]">CRBM 10302</span>
              </div>
            </div>
          </div>

          {/* Pillars List & Active Pillar Card */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isActive = activePillar === index;

                return (
                  <div
                    key={pillar.number}
                    onClick={() => setActivePillar(index)}
                    className={`p-5 rounded-2xl transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-white border-[#815255] shadow-lg ring-2 ring-[#815255]/10'
                        : 'bg-[#fff0f0] hover:bg-[#faeaea] border-transparent hover:border-[#eedfdf]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#815255] text-white' : 'bg-[#faeaea] text-[#815255]'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-serif font-bold text-[#775a19]">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-[#211a1a] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#514444] line-clamp-2">
                      {pillar.short}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Active Pillar Deep Dive Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#eedfdf] shadow-md mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#775a19] uppercase tracking-wider">
                  Pilar {pillars[activePillar].number} em Detalhes
                </span>
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#815255] mb-2">
                {pillars[activePillar].title}
              </h4>
              <p className="text-sm text-[#514444] leading-relaxed mb-4">
                {pillars[activePillar].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-[#faeaea]">
                {pillars[activePillar].details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#211a1a] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#775a19] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#514444]">
                Atendimento presencial exclusivo em Betim-MG
              </span>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#815255] hover:text-[#663b3e] transition-colors"
              >
                Tirar dúvidas com a equipe <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
