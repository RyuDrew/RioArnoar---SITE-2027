import { BANNER_FORMATS, CONTACT_INFO } from '../data/content';
import { Layers, Maximize2, Sparkles, Check, ArrowRight } from 'lucide-react';

interface FormatosMidiaProps {
  onSelectFormat?: (formatId: string) => void;
}

export function FormatosMidia({ onSelectFormat }: FormatosMidiaProps) {
  return (
    <section id="formatos" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            Engenharia & Formatos de Mídia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Painéis náuticos gigantes projetados para visibilidade a quilômetros
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Nossos banners utilizam tecido náutico microperfurado de alta tenacidade com corte a laser e tecnologia de dissipação aerodinâmica, garantindo estabilidade e leitura nítida das areias.
          </p>
        </div>

        {/* 3 Banner Formats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {BANNER_FORMATS.map((format, idx) => (
            <div
              key={format.id}
              className={`rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'border-sky-300 bg-gradient-to-b from-sky-50/50 to-white shadow-md relative'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {idx === 0 && (
                <div className="absolute -top-3 left-6 bg-sky-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Mais Procurado para Grandes Marcas
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    {idx === 0 ? (
                      <Sparkles className="w-5 h-5" />
                    ) : idx === 1 ? (
                      <Layers className="w-5 h-5" />
                    ) : (
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {format.name}
                    </h3>
                    <span className="text-xs font-bold text-sky-700">
                      {format.dimensions}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-medium italic">
                  Ideal para: {format.bestFor}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {format.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Especificações Técnicas
                  </span>
                  <ul className="space-y-2">
                    {format.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectFormat) {
                      onSelectFormat(format.id);
                    }
                    const el = document.getElementById('simulador');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg transition-colors ${
                    idx === 0
                      ? 'bg-sky-600 text-white hover:bg-sky-700'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <span>Simular com este Formato</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Safety & Operational standards ribbon */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-sky-400 text-xs font-bold uppercase tracking-wider">
                Altitude & Ângulo
              </div>
              <h4 className="text-lg font-bold text-white">
                Voo a ~100m de altitude sobre a água
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sobrevoo a cerca de 100 metros da arrebentação com ângulo oblíquo ideal para visualização de quem está na areia.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sky-400 text-xs font-bold uppercase tracking-wider">
                Velocidade de Cruzeiro
              </div>
              <h4 className="text-lg font-bold text-white">
                55 a 65 Nós (~110 km/h)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Velocidade baixa e controlada que proporciona mais de 90 segundos de exposição contínua por ponto de praia a cada passagem.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sky-400 text-xs font-bold uppercase tracking-wider">
                Segurança Aeronáutica
              </div>
              <h4 className="text-lg font-bold text-white">
                Desengate Rápido de Emergência
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mecanismo homologado pelo Centro de Investigação e Prevenção de Acidentes Aeronáuticos (CENIPA) com travas duplas de segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
