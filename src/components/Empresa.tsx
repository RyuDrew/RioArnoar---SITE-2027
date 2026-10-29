import { HANGAR_IMAGE, CONTACT_INFO } from '../data/content';
import { Award, Clock, FileCheck, MapPin, Wrench, Shield } from 'lucide-react';

export function Empresa() {
  const pilares = [
    {
      icon: Clock,
      title: '30 Anos de Experiência',
      desc: 'Tradição consolidada e conhecimento profundo dos regimes de vento, maré e fluxo de banhistas em todo o litoral brasileiro.',
    },
    {
      icon: Award,
      title: '30.000 Horas de Voo',
      desc: 'Mais de 30 mil horas no ar veiculando campanhas com pontualidade cirúrgica e segurança operacional absoluta.',
    },
    {
      icon: FileCheck,
      title: 'Homologação Integral ANAC',
      desc: 'Aeronaves e operações 100% regulamentadas e autorizadas pela Agência Nacional de Aviação Civil (ANAC).',
      link: {
        text: 'Visualizar Certidão Oficial ANAC',
        href: CONTACT_INFO.anacCertUrl,
      },
    },
    {
      icon: MapPin,
      title: 'Hangar no Clube de Aeronáutica (CAER)',
      desc: 'Base operacional própria no Clube de Aeronáutica da Barra da Tijuca (CAER), a poucos minutos de voo das praias da Barra, Leblon e Copacabana.',
    },
  ];

  return (
    <section id="empresa" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            Quem Somos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Três décadas liderando a mídia aérea nas praias mais concorridas do Brasil
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Fundada com o compromisso de entregar alto impacto visual e segurança aeronáutica rigorosa, a <strong>RioAr noar</strong> é a escolha de grandes agências de publicidade e marcas nacionais que desejam captar a atenção integral do consumidor durante seus momentos de lazer.
          </p>
        </div>

        {/* Narrative & Hangar Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed">
            <p>
              Atuamos no mercado de Propaganda Aérea há mais de <strong>30 anos</strong>. Com sólida experiência, contamos com mais de <strong>30 mil horas voadas</strong> atendendo agências de renome, marcas globais de bebidas, varejo, construtoras e grandes festivais de entretenimento.
            </p>
            <p>
              Com base operacional no <strong>Rio de Janeiro</strong>, atendemos nossos clientes nas faixas de areia mais concorridas da orla fluminense, onde a circulação de público soma mais de <strong>2 milhões de pessoas</strong> em um único fim de semana de sol.
            </p>
            <p>
              Nossos banners contam com tecidos náuticos especiais de alta tenacidade, costura reforçada e aerodinâmica de ponta, permitindo que a arte da sua campanha viaje estável e legível a centenas de metros de distância.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={CONTACT_INFO.anacCertUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 rounded-md hover:bg-sky-100 transition-colors"
              >
                <Shield className="w-4 h-4 text-sky-600" />
                <span>Certificado Homologado ANAC (PDF)</span>
              </a>

              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-slate-400" />
                Hangar no Clube de Aeronáutica (CAER)
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <img
                src={HANGAR_IMAGE}
                alt="Aeronave PT-AUM no hangar da RioAr no Clube de Aeronáutica (CAER)"
                referrerPolicy="no-referrer"
                className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-bold">Hangar · Clube de Aeronáutica da Barra da Tijuca (CAER)</p>
                <p className="text-xs text-slate-300">Base estratégica no Rio de Janeiro para decolagens imediatas e ágeis</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Diferenciais Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs font-bold text-sky-600 hover:text-sky-800 underline underline-offset-2"
                  >
                    {item.link.text} →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
