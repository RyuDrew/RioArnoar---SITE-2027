import { RegionInfo, BannerFormat, PortfolioItem, TestimonialItem } from '../types';

export const HERO_IMAGE = '/assets/aistudio/Hero2_14c7b05a.png';
export const BEACH_RIO_IMAGE = '/src/assets/images/beach_copacabana_flight_1793106684258.jpg';
export const BEACH_NITEROI_IMAGE = '/src/assets/images/beach_niteroi_itacoatiara_1793106684601.jpg';
export const BEACH_LAGOS_IMAGE = '/src/assets/images/beach_buzios_lagos_1793106684741.jpg';
export const HANGAR_IMAGE = '/assets/aistudio/aircraft_hangar_jacarepagua_1793106686049_6cb1437b.jpeg';
export const LOGO_IMAGE = '/assets/aistudio/logo_aeec24d2.png';

export const CONTACT_INFO = {
  phone1: '(21) 97222-7088',
  phone1Raw: '5521972270888',
  phone2: '(21) 99636-5250',
  phone2Raw: '5521996365250',
  email: 'comercial@rioarnoar.com.br',
  address: 'Av. Raquel de Queiroz, S/nº - Barra da Tijuca, Rio de Janeiro - RJ',
  hangar: 'CAER - Clube de Aeronáutica - Sede Barra /RJ',
  cep: '22.793-100',
  fullAddress: 'Av. Raquel de Queiroz, S/nº Barra da Tijuca | Rio de Janeiro | RJ Cep: 22.793-100 | CAER - Clube de Aeronáutica - Sede Barra /RJ',
  anacCertUrl: 'https://rioarnoar.com.br/doc/SEI_12075318_Portaria_17894.pdf',
  instagramUrl: 'https://www.instagram.com/rioarnoar',
  instagramHandle: '@rioarnoar',
};

export const STATS = [
  { value: '+30', label: 'Anos de Tradição', sub: 'Pioneirismo em mídia aérea no Brasil' },
  { value: '30.000+', label: 'Horas Voadas', sub: 'Experiência máxima de voo e segurança' },
  { value: '2.000.000+', label: 'Pessoas Impactadas', sub: 'Alcance médio por final de semana' },
  { value: '100%', label: 'Homologação ANAC', sub: 'Aeronaves e pilotos regulamentados' },
];

export const REGIONS: RegionInfo[] = [
  {
    id: 'rio-de-janeiro',
    name: 'Toda orla carioca | Recreio ao Leme',
    state: 'RJ',
    tagline: 'Orla mais famosa do mundo com público qualificado e maciço',
    beaches: [
      'Recreio dos Bandeirantes',
      'Praia da Reserva',
      'Barra da Tijuca',
      'São Conrado',
      'Leblon',
      'Ipanema',
      'Arpoador',
      'Copacabana',
      'Leme',
    ],
    audienceEstimate: '- 1.200.000+ banhistas nos fins de semana ensolarados.',
    flightTimeAvg: 'Voos de 1h30 a 3h por circuito',
    image: BEACH_RIO_IMAGE,
    highlights: [
      'Visibilidade desimpedida sobre o mar',
      'Tempo de permanência visual superior a 2 minutos por passagem',
      'Cobertura contínua do Recreio até o Leme',
    ],
  },
  {
    id: 'niteroi',
    name: 'Orla Carioca | Barra ao Leme',
    state: 'RJ',
    tagline: 'Circuito nobre concentrando as praias de maior fluxo da Zona Sul e Barra',
    beaches: [
      'Barra da Tijuca',
      'São Conrado',
      'Leblon',
      'Ipanema',
      'Arpoador',
      'Copacabana',
      'Leme',
    ],
    audienceEstimate: '350.000+ Pessoas no circuito oceânico',
    flightTimeAvg: 'Voos de 1h a 2h por circuito',
    image: BEACH_NITEROI_IMAGE,
    highlights: [
      'Altíssima retenção nas areias da Zona Sul e Barra',
      'Visual desobstruído entre mar e calçadão',
      'Foco em famílias, público esportivo e turistas',
    ],
  },
  {
    id: 'regiao-dos-lagos',
    name: 'Região dos Lagos',
    state: 'RJ',
    tagline: 'O epicentro do turismo de verão e feriadões no estado do RJ',
    beaches: [
      'Cabo Frio (Praia do Forte)',
      'Búzios (Geribá, Ferradura)',
      'Arraial do Cabo (Prainha, Praia Grande)',
    ],
    audienceEstimate: '800.000+ turistas e veranistas em temporadas',
    flightTimeAvg: 'Voos de 2h a 3h30',
    image: BEACH_LAGOS_IMAGE,
    highlights: [
      'Concentração maciça de turistas de todo o Brasil',
      'Areias lotadas durante feriados prolongados e Réveillon',
      'Ideal para campanhas de bebidas, moda praia e entretenimento',
    ],
  },
  {
    id: 'costa-verde',
    name: 'Costa Verde & Ilhas',
    state: 'RJ',
    tagline: 'Circuito náutico exclusivo e condomínios de alto padrão',
    beaches: [
      'Itacuruçá',
      'Guaratiba',
      'Ilhas de Angra dos Reis',
      'Mangaratiba',
    ],
    audienceEstimate: '180.000+ banhistas e público de lanchas / iates',
    flightTimeAvg: 'Voos de 1h30 a 2h30',
    image: BEACH_NITEROI_IMAGE,
    highlights: [
      'Impacto em ancoradouros e marinas de luxo',
      'Perfil de público A/B com lanchas e iates',
      'Destaque exclusivo para marcas premium',
    ],
  },
];

export const BANNER_FORMATS: BannerFormat[] = [
  {
    id: 'Banner Publicitário',
    name: 'Banner Especial - Digital Full-Color',
    dimensions: 'Até 63 m² (Ex: 3m x 21m)',
    audienceImpact: 'Máxima fidelidade visual e impacto instantâneo',
    bestFor: 'Marcas de bebidas, cervejas, moda, varejo, logotipos conhecidos e lançamentos de produtos.',
    description: 'Confeccionado em tecido náutico especial  de alta resistência com impressão digital UV de alta resolução. As cores da sua marca brilham intensamente sob o sol contra o céu azul.',
    specs: [
      'Impressão digital fotográfica em alta definição',
      'Aerodinâmica calibrada para voo estável sem ondulação excessiva',
      'Totalmente reutilizável em dezenas de voos na temporada',
      'Garantia de leitura nítida a mais de 300 metros de altitude',
    ],
  },
  {
    id: 'faixa-alfanumerica',
    name: 'Faixa de Letras Alfanumérica Gigante',
    dimensions: 'Letras modulares de 1,5m a 18 m de altura (Até 50 caracteres). ' ,
    audienceImpact: 'Alta legibilidade rápida para mensagens diretas',
    bestFor: 'Slogans, promoções pontuais, cupons, datas de eventos, homenagens, pedido de namoro,casamento, chá revelação.',
    description: 'Impressão Digital com letras gigantes em tecido preto ou vermelho contrastante com fundo neutro. Produção rápida e excelente relação custo-benefício.',
    specs: [
      'Prontidão imediata de montagem em 24h a 48h',
      'Flexibilidade para trocar a frase a cada final de semana',
      'Letras de até 2 metros para fácil leitura na praia',
      'Perfeito para chamadas de ação diretas (Ex: site, cupom, WhatsApp)',
    ],
  },
  {
    id: 'painel-misto',
    name: 'Painel Combinado (Logo + Letreiro)',
    dimensions: 'Logomarca em alta definição + Até 20 caracteres de texto',
    audienceImpact: 'União da força da marca com mensagem promocional',
    bestFor: 'Eventos patrocinados, festivais de música, marcas com slogan dinâmico e imobiliárias.',
    description: 'Combina um painel frontal com o logotipo oficial da sua empresa impresso em alta definição, seguido por uma cauda de letras modulares para veicular o texto da campanha.',
    specs: [
      'Logotipo fiel com identidade corporativa protegida',
      'Frase intercambiável para múltiplos fins de semana',
      'Ótima visibilidade e engajamento nas redes sociais',
      'Aprovado para grandes campanhas sazonais',
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Campanha de Verão - Cervejaria Bohemia',
    category: 'beverage',
    categoryLabel: 'Bebidas & Gastronomia',
    beach: 'Copacabana & Ipanema, RJ',
    client: 'Ambev / Bohemia',
    impactReach: '1.400.000 banhistas',
    image: HERO_IMAGE,
  },
  {
    id: '2',
    title: 'Circuito Verão Orla Barra e Recreio',
    category: 'events',
    categoryLabel: 'Eventos & Entretenimento',
    beach: 'Barra da Tijuca & Reserva, RJ',
    client: 'Festival de Música de Verão',
    impactReach: '950.000 pessoas',
    image: BEACH_RIO_IMAGE,
  },
  {
    id: '3',
    title: 'Campanha Regional Região Oceânica',
    category: 'retail',
    categoryLabel: 'Varejo & Serviços',
    beach: 'Itacoatiara & Camboinhas, Niterói',
    client: 'Rede de Farmácias & Cosméticos',
    impactReach: '320.000 pessoas',
    image: BEACH_NITEROI_IMAGE,
  },
  {
    id: '4',
    title: 'Ativação Turística Réveillon Búzios',
    category: 'real-estate',
    categoryLabel: 'Lançamentos & Imóveis',
    beach: 'Praia de Geribá, Búzios - RJ',
    client: 'Resort & Condomínio de Luxo',
    impactReach: '600.000 veranistas',
    image: BEACH_LAGOS_IMAGE,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'A RioAr noar executou com perfeição nossa ativação em Copacabana e Ipanema. As passagens da aeronave foram exatamente no horário de pico solar e o engajamento do público tirando fotos da faixa para o Instagram superou todas as metas da agência.',
    author: 'Rodrigo Albuquerque',
    role: 'Diretor de Mídia & OOH',
    company: 'Agência Voo Comunicação',
    verifiedFlight: 'Campanha de Verão - 8 Voos Homologados',
  },
  {
    quote: 'Trabalhamos com a RioAr há mais de 8 anos consecutivos. Saber que possuem hangar próprio no Clube de Aeronáutica (CAER) e homologação integral na ANAC nos dá a total tranquilidade que grandes marcas multinacionais exigem em conformidade e segurança.',
    author: 'Mariana Drummond',
    role: 'Gerente de Marketing Regional',
    company: 'Grupo de Bebidas & Eventos',
    verifiedFlight: 'Circuito Barra, Copacabana e Cabo Frio',
  },
  {
    quote: 'Para lançamentos imobiliários de frente para o mar na Barra da Tijuca, nada bate a propaganda aérea da RioAr. O público na praia não tem como dar skip no anúncio. Nosso plantão de vendas recebeu ligações imediatas durante o sobrevoo.',
    author: 'Carlos Eduardo Nogueira',
    role: 'Superintendente Comercial',
    company: 'Incorporadora Carioca',
    verifiedFlight: 'Voos Sazonais Barra da Tijuca',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Como funciona a propaganda aérea com a RioAr noar?',
    a: 'Nossa equipe projeta ou recebe a arte do seu banner (painel fotográfico full-color ou letreiro alfanumérico). No dia agendado, decolamos do Clube de Aeronáutica da Barra da Tijuca (CAER) com a aeronave homologada pela ANAC, engatamos o banner em segurança na pista e sobrevoamos a orla marítima na altitude de cerca de 100 metros, garantindo total visibilidade para quem está na areia.',
  },
  {
    q: 'Qual é o melhor horário para veiculação nas praias?',
    a: 'O horário de pico nas praias do Rio de Janeiro ocorre entre 11h00 e 15h30 nos sábados, domingos e feriados, quando a incidência solar e a quantidade de banhistas atingem o ápice. Monitoramos as condições meteorológicas em tempo real para garantir luminosidade perfeita.',
  },
  {
    q: 'A empresa é regulamentada pela ANAC?',
    a: 'Sim, a RioAr é 100% homologada e fiscalizada pela Agência Nacional de Aviação Civil (ANAC). Nossas aeronaves possuem certificação rigorosa para reboque de faixas, manutenção periódica em oficinas credenciadas e pilotos com milhares de horas de voo específicas na modalidade.',
  },
  {
    q: 'Qual a antecedência necessária para contratar?',
    a: 'Para faixas de letras modulares (letreiros), podemos montar e voar em até 48 horas. Para painéis fotográficos impressos em alta resolução (até 70m²), o prazo médio de confecção náutica e costura técnica é de 5 a 7 dias úteis.',
  },
  {
    q: 'Como recebo o relatório e a comprovação dos voos?',
    a: 'Todas as operações contam com comprovação por rastreamento GPS aeronáutico (FlightRadar / log do piloto) e registro em fotos e vídeos de alta resolução feitos a partir da praia e por nossa equipe de apoio, prontos para suas redes sociais e auditoria de mídia.',
  },
];
