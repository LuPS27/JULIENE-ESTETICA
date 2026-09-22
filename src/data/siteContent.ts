export interface Treatment {
  id: string;
  title: string;
  category: 'global' | 'labios' | 'botox' | 'colageno' | 'outro';
  badge: string;
  duration: string;
  description: string;
  longDescription: string;
  indications: string[];
  care: string[];
  imageUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  procedure: string;
  patient: string;
  age: string;
  location: string;
  testimonial: string;
  imageUrl: string;
  badge: string;
}

export interface BlogPost {
  id: string;
  title: string;
  tag: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
}

export const CLINIC_INFO = {
  name: "Dra. Juliene Ribeiro",
  role: "Biomédica Esteta",
  crbm: "CRBM 10302",
  tagline: "Harmonização Facial & Consultoria de Imagem Personalizada",
  method: "Método Singullaris®",
  phone: "(31) 98403-1358",
  whatsappUrl: "https://wa.me/message/Z6GI7NGWIQ6CO1",
  instagramHandle: "@drajulieneribeiro",
  instagramUrl: "https://instagram.com/drajulieneribeiro",
  address: "Comercial Asturias - Av. Amazonas, 1446 - Centro, Betim - MG, 32600-416",
  shortAddress: "Av. Amazonas, 1446 • Centro, Betim - MG",
  googleRating: "5.0",
  googleReviewsCount: 207,
  hours: "Segunda a Sexta-feira: 09h às 19h",
  mapsUrl: "https://maps.google.com/?q=Comercial+Asturias+Av+Amazonas+1446+Betim+MG"
};

export const TREATMENTS: Treatment[] = [
  {
    id: "full-face",
    title: "Harmonização Full Face",
    category: "global",
    badge: "Planejamento Global",
    duration: "~18 a 24 meses",
    description: "Mapeamento tridimensional de pontos de sustentação (malar, mandíbula, mento e têmporas) para um efeito lifting imediato sem artificialismo.",
    longDescription: "A Harmonização Full Face no Método Singullaris® não busca transformar seu rosto no de outra pessoa, mas sim recuperar a arquitetura e os coxins de gordura que sofrem reabsorção com o tempo. Avaliamos a dinâmica facial e aplicamos ácido hialurônico de alta tecnologia em pontos estruturais chave.",
    indications: ["Perda de contorno mandibular", "Sulcos nasogenianos (bigode chinês)", "Queda da maçã do rosto", "Sensação de face 'derretendo'"],
    care: ["Não deitar nas primeiras 4 horas", "Evitar atividade física intensa por 24h", "Evitar exposição solar direta nos primeiros dias"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDup2FWXWJOhj3i9rU_gBkgMmRiSdstM9aAZ8tpj5KKrhWzbFIh1aaSu0z7mADYDqTBlPTXbCOqfSS_J5WdOSC5WJSGIUvi4RCXBBmK8skS4ugP_o--dBTdFxEupZ7z0Dv_ajf7oi0hoYhUD2FdjlqtTFGA-8seGfxlVJN9EXwz_LzQaBmUOIKDvtdpUj6hYRkyBgzXJLNTykstfeEBR_fgdLFCMtTrmd9xC8iXFsvbYt46knx3bfwe"
  },
  {
    id: "labial",
    title: "Preenchimento Labial Esculpido",
    category: "labios",
    badge: "Assinatura Labial",
    duration: "~12 a 15 meses",
    description: "Volume sutil, restauração do arco do cupido e profunda hidratação celular com ácido hialurônico de reologia elástica premium.",
    longDescription: "O preenchimento labial da Dra. Juliene Ribeiro respeita a proporção entre o lábio superior e inferior (proporção áurea 1:1.618). Realizamos contorno, eversão delicada e projeção equilibrada, eliminando o medo de 'boca de pato'.",
    indications: ["Lábios finos ou desidratados", "Assimetrias do arco do cupido", "Linhas periorais (código de barras)", "Perda de volume decorrente da idade"],
    care: ["Evitar bebidas muito quentes nas primeiras 24h", "Hidratar com bálsamo neutro", "Compressas frias nas primeiras 12h se houver edema"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGFo5O_Yt53dKnOuoZ7KNdsAw7TlToIka1rBj4z-VzYh9AHT_4TEcaqfJdveBd14JhkNtuv6XOk9y4msmxuicxYH-_QBzNPuQbPCAzwJvesmj9Yu_l42K9iz4cWDXReLdtQp23kNGa3ES4_cgmaUsi3bD9TMpQ4Wc0bJJWK42qIwbU371mFa7zhlM4nSyvsxVXGgk2jvALMJ5rtUA_Xu-Xh8R_VICrOyaa3KA4DeQdAsID1bGABSWY"
  },
  {
    id: "botox",
    title: "Toxina Botulínica Preventiva",
    category: "botox",
    badge: "Expressão Leve",
    duration: "Manutenção: 4 a 6 meses",
    description: "Suavização milimétrica de rugas dinâmicas em testa, glabela e 'pés de galinha', mantendo sua mímica facial aberta e descansada.",
    longDescription: "A toxina botulínica no Método Singullaris® não paralisa expressões. Trabalhamos com microdosagens individualizadas para relaxar apenas a musculatura hipercinética, prevenindo a quebra de fibras de colágeno e vincos estáticos definitivos.",
    indications: ["Rugas na testa ao arquear sobrancelhas", "Vincos de preocupação entre as sobrancelhas (glabela)", "Rugas periorbitais ao sorrir", "Sorriso gengival"],
    care: ["Não massagear a área tratada nas primeiras 24h", "Permanecer em postura ereta por 4 horas", "Evitar exercícios de impacto por 24 horas"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsixPSS3H71ZpHJPhDuh_8C_bZWx7Jl-_SMTFA8KnFxHbuBstJpO1Xh5YlXSwnNfZsGiUfwama4mgG2ljcnmBzXU5PnWaOQeBbAS5l8x5UhGUoRzRswHz1H_KnezJaiibMgGrD5RdaJ8bTGXEZKwYYFFLyh69ptVAGfFIkY_DxtiV5SfKCx8sJwQnRsptT5lCBgUqRwD5QB-qFYDacuCcLeuhhxQqIBrwG_Br4DV4eW5dOKDzJ6ToN"
  },
  {
    id: "colageno",
    title: "Bioestimuladores de Colágeno",
    category: "colageno",
    badge: "Banco de Colágeno",
    duration: "Pico: a partir de 90 dias",
    description: "Aplicação de substâncias indutoras para gerar neocologênese autóloga, compactando a derme e combatendo a flacidez estrutural.",
    longDescription: "Trabalhamos com os melhores bioestimuladores do mercado mundial (Ácido Poli-L-Láctico e Hidroxiapatita de Cálcio). O organismo é estimulado a produzir seu próprio colágeno tipo I e III, devolvendo firmeza, espessura e densidade à derme facial e cervical.",
    indications: ["Flacidez no terço médio e inferior da face", "Linhas de marionete e perda de sustentação", "Flacidez em pescoço e colo", "Pele com afinamento e textura craquelada"],
    care: ["Massagem 5x5x5 quando orientada pelo profissional", "Consumo adequado de água diária (35ml/kg)", "Manter rotina de proteção solar FPS 50+"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cDtEZ1tEjSQgQHuTDEiAZZB4AyrLES1Yh0GVll7kwpMvP08GgBjQnbpzK3KIYk_n-jDowYMI61AH3NIjyxx-p182gQ8V_NXDjNAkJYyHdu3YEVSBbxEZgAaeWvBu7_GndOIM494ZBKX2ZoG8TRwuhXq8bLK-nuuv1n9vGDeoEVgxzprjkv-zsQtnq9CzPOw2XQZ0-ZUfkA6tc8xj7JPu4JhLTBfpJoNDhrCyN7yZhwC0P3JXammj"
  },
  {
    id: "rinomodelacao",
    title: "Rinomodelação Estruturada",
    category: "outro",
    badge: "Harmonia Não-Cirúrgica",
    duration: "Procedimento em ~40min",
    description: "Correção precisa da giba nasal e elevação sutil da ponta do nariz com ácido hialurônico de alta viscosidade com segurança anatômica rigorosa.",
    longDescription: "Alternativa não cirúrgica para queixas anatômicas pontuais do nariz. Realizada sob estrita técnica com microcânula, mapeando artérias angulares e nasais dorsais para segurança máxima, refinando o perfil facial em menos de uma hora.",
    indications: ["Giba óssea proeminente no dorso nasal", "Ponta caída ao sorrir", "Pequenas assimetrias nasais pós-trauma ou cirurgia prévia"],
    care: ["Evitar uso de óculos pesados nos primeiros 7 dias", "Não pressionar o dorso nasal", "Repouso de atividades com risco de impacto por 72h"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyPKIxH1TpPs40JlcB86WWJvpZS52ZdbLuAZJwy7AFa6Fep4uVLjQBmVyOm7ypS1wFnHSDRfr0YmO6Azv3wo6yFw8zLeRPlUKRjthEYqRI9vG54PCeE7TEG7nDKZdRQZGnUwz2YdU-s-Ayk9LDKTGWpklSu5tMCp9sQB8xxYXzVoZs96YL_438_2SDNV41waHr2ganS2NM20ucHJusMt98F_nvu80E77dHICQlEF0X88RbJec9t35"
  },
  {
    id: "consultoria",
    title: "Consultoria & Plano de Imagem",
    category: "global",
    badge: "Gerenciamento Anual",
    duration: "Planejamento 360°",
    description: "Cronograma completo de cuidados dermofaciais adaptados à sua rotina, idade e objetivos para manter a jovialidade ao longo das estações.",
    longDescription: "Uma imersão completa na sua estética facial. Fazemos uma leitura morfológica e psicológica da mensagem que o seu rosto transmite (segurança, cansaço, maturidade, doçura) e desenhamos um plano sob medida de intervenções graduais ao longo de 12 meses.",
    indications: ["Pessoas que não sabem por onde começar", "Desejo de alinhar imagem profissional e pessoal", "Prevenção contra o envelhecimento prematuro sem excessos"],
    care: ["Relatório digital detalhado entregue à paciente", "Indicação de dermocosméticos home care personalizados"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWDE9CEthtGeHHbF2DM0s3o4QNzIaPRqD3WYXCW3o-jyPAo7C5VZz5XCf0c8mvMJckwqQUHkHE1YxtT4e_LS31c5eNpJ2QS7WNnUc-Y-oRaR_7n4cII8j6ZbB_FxPyv-FLrs_pI9ABrdmO5eDamtp8N-Bp9zRMOA4CZ9ptXNGDj-B4YZlPUfrw0ufdGA4xboFPNwxyBgmc2fGftJYiZqdxoWEenm44svOcSawGJmyX8rEgY-HdL1zk"
  }
];

export const REAL_CASES: CaseStudy[] = [
  { id: "case-1", title: "Registro visual de resultado facial", procedure: "Antes e depois", patient: "Registro do Instagram", age: "", location: "Dra. Juliene Ribeiro", testimonial: "Comparativo publicado no perfil da Dra. Juliene. Os resultados variam conforme a avaliação individual.", imageUrl: "/images/resultado-frontal.webp", badge: "Registro 01" },
  { id: "case-2", title: "Comparativo facial em detalhe", procedure: "Antes e depois", patient: "Registro do Instagram", age: "", location: "Dra. Juliene Ribeiro", testimonial: "Imagem recortada da publicação original, preservando a aparência das fotografias.", imageUrl: "/images/resultado-olhar.webp", badge: "Registro 02" },
  { id: "case-3", title: "Comparativo da pele", procedure: "Antes e depois", patient: "Registro do Instagram", age: "", location: "Dra. Juliene Ribeiro", testimonial: "Cada plano de tratamento depende de uma avaliação profissional personalizada.", imageUrl: "/images/resultado-pele.webp", badge: "Registro 03" },
  { id: "case-4", title: "Comparativo de perfil", procedure: "Antes e depois", patient: "Registro do Instagram", age: "", location: "Dra. Juliene Ribeiro", testimonial: "Registro visual divulgado no perfil profissional da clínica.", imageUrl: "/images/resultado-perfil.webp", badge: "Registro 04" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "bioestimulador-vs-preenchedor",
    title: "Bioestimulador x Preenchedor: Descubra qual é a indicação exata para o seu momento de pele",
    tag: "Guias Clínicos",
    readTime: "5 min",
    date: "Fevereiro, 2025",
    excerpt: "Entenda as diferenças químicas, os planos de aplicação e como combinar estímulo de colágeno com suporte estrutural de ácido hialurônico.",
    content: [
      "Uma das dúvidas mais comuns no consultório da Dra. Juliene Ribeiro é: 'Doutora, eu preciso de preenchimento ou de bioestimulador?'. Embora ambos sejam injetáveis de alta performance, eles atuam em camadas e objetivos completamente distintos.",
      "O ácido hialurônico preenchedor tem função volumizadora e estrutural. Ele atua como um 'alicerce', devolvendo suporte ósseo e coxins adiposos que perderam sustentação no malar, mento, mandíbula e lábios. Seu resultado é visível imediatamente após a sessão.",
      "Já os bioestimuladores de colágeno (como Sculptra® e Radiesse®) funcionam como adubo biológico. Eles não criam volume artificial: estimulam seus próprios fibroblastos a sintetizar novas fibras de colágeno e elastina. O pico de efeito ocorre entre 60 e 90 dias, proporcionando uma pele mais densa, firme e radiante.",
      "No Método Singullaris®, frequentemente combinamos as duas abordagens: primeiro criamos a base estrutural com ácido hialurônico milimétrico e, em seguida, semeamos o colágeno para um rejuvenescimento orgânico e duradouro."
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWB4Du8yX9S7JS-NYVC1NLZ5lz8doQG9ftZlT2ma9x5_SdrN6bXj28B_4DKorqhq5cb86lowA5FfsKMwGD49nRSTCvR9E88_NA6QsIKjv2J6CONOYSoNuZI44GuzR6GlcmN4DJSD8dLhhKxIVRaIQ1GcOXdVE6veNsj6c1uRAhm0sJhFk6FshjMdCj8f9duDjqVJzNNWSSJMJCzypWq1vhKf2LHeOljDEEVMwKjWLnzOpQfZp8UJEt"
  },
  {
    id: "naturalidade-harmonizacao-menos-e-mais",
    title: "Naturalidade na Harmonização Facial: Por que o “menos é mais” rejuvenesce até 10 anos",
    tag: "Tendências & Filosofia",
    readTime: "4 min",
    date: "Janeiro, 2025",
    excerpt: "A transição do visual padronizado para o rejuvenescimento elegante. Como identificar exageros e prevenir a síndrome da face superpreenchida.",
    content: [
      "Nos últimos anos, a internet foi inundada por rostos excessivamente marcados, mandíbulas quadradas artificiais e bochechas infladas. Essa hipercorreção — conhecida na literatura médica como 'Pillow Face Syndrome' — afasta a estética do seu propósito maior: realçar a identidade.",
      "O Método Singullaris® nasceu como contraponto a essa tendência. Defendemos a harmonia anatômica e a proporção áurea suave. Quando o procedimento é bem executado, as pessoas ao seu redor devem notar que você está mais descansada, luminosa e jovial — e não perguntar qual produto você injetou.",
      "O segredo reside no respeito à mímica facial dinâmica. O rosto humano se comunica sorrindo, franzindo a testa e gesticulando. Respeitar essa mobilidade é a verdadeira assinatura de uma estética sofisticada."
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxmCfuZciZzKdsn9JJWoAOVhhp6sKk2B2AHJuJcpWkmDVCj7iUSkOyAWos0lYYyliGr_Aj4qDbumcKs8ZkxM0s3Lp-cSHyQatMQWuwMiU7llPYzmSOXxZZRELtLgfHM6kNt_K2H2hhotupzhdda_371wsOMvjANs2E3ARbA1lEGIIAyUKwOKB2GCEAfP_r4Dd86ZkT3FiLLm1QLSkVXndrEW4CQoL09pKsPcqsORwxxNb1JeoxF5HL"
  },
  {
    id: "primeira-consulta-metodo-singullaris",
    title: "O que esperar da sua primeira consulta no Método Singullaris: Do planejamento ao pós",
    tag: "Bastidores Clínicos",
    readTime: "6 min",
    date: "Janeiro, 2025",
    excerpt: "Saiba passo a passo como funciona a anamnese biomédica, o registro fotográfico tridimensional e os cuidados fundamentais para os primeiros dias.",
    content: [
      "Dar o primeiro passo para realizar um procedimento facial pode gerar ansiedade. É por isso que nossa consulta avaliativa no Edifício Comercial Asturias, em Betim, foi desenhada para ser um momento de acolhimento e escuta atenta.",
      "Durante o atendimento inicial, realizamos um minucioso mapeamento fotográfico em ângulos clínicos padronizados. Analisamos proporções, espessura cutânea, histórico médico e, principalmente, as suas expectativas emocionais com o tratamento.",
      "Após a definição do plano conjunto, o procedimento pode ser realizado com conforto absoluto, utilizando anestésicos tópicos potentes e microcânulas atraumáticas. Você sai do consultório com orientações por escrito e canal direto no WhatsApp da clínica para acompanhamento."
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxCknEBjb15_j86TzHe8NQdLqXRKTZsqENtNxs3EhdxlZNuKiQfzqhXqq1LinkQzJ3jIuPJLH7Z8CI5yfIOSgNCBLztAda6i59wRPapu5O4FIgPQIUi7tVettBdt6k789Moh2ihYB2ODeL1iGAjcmbGkGSg9heFposMXn51X6iPW9s1_LQnWxaR1gK1LS6Z8d-DKUmxkaxlAhbbgVYrIFLnm3OPtTuRc5Dt_AHm6cXmMeBV2ewh2o_"
  }
];

export const INSTAGRAM_HIGHLIGHTS = [
  { id: "feedback", name: "Feedback", icon: "favorite", color: "from-[#815255] to-[#d49b9e]" },
  { id: "resultados1", name: "Resultados", icon: "auto_awesome", color: "from-[#775a19] to-[#fed488]" },
  { id: "resultados2", name: "Casos Reais", icon: "verified", color: "from-[#815255] to-[#e8b4b8]" },
  { id: "singullaris", name: "SINGULLARIS", icon: "spa", color: "from-[#c5a059] to-[#f4b7ba]" },
  { id: "bastidores", name: "Bastidores", icon: "visibility", color: "from-[#514444] to-[#aca9a6]" }
];

export const FAQS = [
  {
    question: "Os procedimentos no consultório causam dor?",
    answer: "Trabalhamos com protocolos de conforto avançados, incluindo anestésicos tópicos farmacêuticos de alta potência e anestesia infiltrativa local quando necessário. Além disso, utilizamos cânulas flexíveis com ponta romba (que não cortam vasos), tornando a experiência surpreendentemente tranquila e confortável."
  },
  {
    question: "Qual a diferença entre Botox (Toxina Botulínica) e Preenchimento?",
    answer: "A toxina botulínica relaxa a musculatura que causa rugas dinâmicas de expressão (testa, entre sobrancelhas e pés de galinha). O preenchimento com ácido hialurônico repõe volumes perdidos, desenha contornos (lábios, mandíbula, queixo) e melhora a sustentação dérmica."
  },
  {
    question: "Quanto tempo dura o inchaço após o preenchimento labial?",
    answer: "Nos primeiros 2 a 3 dias é normal ocorrer um leve edema (inchaço) reacional. A partir do 7º dia o tecido desincha consideravelmente e, após 15 a 20 dias, atingimos o resultado final estável e completamente integrado à mucosa labial."
  },
  {
    question: "Como funciona a avaliação no Método Singullaris®?",
    answer: "A avaliação é uma consulta dedicada de cerca de 45 a 60 minutos onde conversamos sobre seus incômodos, analisamos seu histórico de saúde, fotografamos seu rosto em ângulos estáticos e dinâmicos e desenhamos um cronograma personalizado sem pressa ou imposição de pacotes."
  },
  {
    question: "Como chegar ao consultório em Betim?",
    answer: "Estamos no Edifício Comercial Asturias, na Av. Amazonas, 1446 - Centro de Betim (próximo à Praça da Bíblia e restaurante Colher de Pau). O edifício conta com portaria identificada, elevadores e opções de estacionamento conveniado ao redor para total conveniência."
  }
];
