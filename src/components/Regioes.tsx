import { useState } from 'react';
import { REGIONS, CONTACT_INFO } from '../data/content';
import { MapPin, Users, Clock, Compass, ArrowUpRight } from 'lucide-react';

interface RegioesProps {
  onSelectRegionForSimulator?: (regionId: string) => void;
}

export function Regioes({ onSelectRegionForSimulator }: RegioesProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'orla-completa' | 'barra-zona-sul' | 'litoral'>('all');
  const [activeModalRegion, setActiveModalRegion] = useState<string | null>(null);

  const filteredRegions = REGIONS.filter((region) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'orla-completa') return region.id === 'rio-de-janeiro';
    if (selectedFilter === 'barra-zona-sul') return region.id === 'niteroi';
    if (selectedFilter === 'litoral') return region.id === 'regiao-dos-lagos' || region.id === 'costa-verde';
    return true;
  });

  const activeRegionData = REGIONS.find((r) => r.id === activeModalRegion);

  return (
    <section id="regioes" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
              Cobertura Geográfica
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Regiões Atendidas na Orla do Rio de Janeiro
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Sobrevoamos as faixas de areia mais famosas do Rio de Janeiro com rotas planejadas para impacto máximo em banhistas e veranistas.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg self-start max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas as Rotas
            </button>
            <button
              onClick={() => setSelectedFilter('orla-completa')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                selectedFilter === 'orla-completa'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Orla Carioca Completa
            </button>
            <button
              onClick={() => setSelectedFilter('barra-zona-sul')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                selectedFilter === 'barra-zona-sul'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Barra & Zona Sul
            </button>
            <button
              onClick={() => setSelectedFilter('litoral')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                selectedFilter === 'litoral'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lagos & Costa Verde
            </button>
          </div>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRegions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden bg-slate-800">
                <img
                  src={region.image}
                  alt={`Praias de ${region.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                  {region.state}
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {region.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs font-medium text-sky-700 mb-3">
                    {region.tagline}
                  </p>

                  <div className="space-y-2 mb-4 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <Users className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span><strong>Público:</strong> {region.audienceEstimate}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span><strong>Circuito médio:</strong> {region.flightTimeAvg}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Praias Atendidas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {region.beaches.map((beach, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {beach}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalRegion(region.id)}
                    className="text-xs font-bold text-slate-700 hover:text-sky-600 transition-colors inline-flex items-center gap-1"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Detalhes do Voo</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectRegionForSimulator) {
                        onSelectRegionForSimulator(region.id);
                        const el = document.getElementById('simulador');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    <span>Simular Rota</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Region Detail Modal */}
        {activeRegionData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                    Plano de Rota Aérea
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {activeRegionData.name} ({activeRegionData.state})
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalRegion(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <p className="text-slate-800 font-medium">
                  {activeRegionData.tagline}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-4 h-4 text-sky-600" />
                    <span><strong>Alcance Estimado:</strong> {activeRegionData.audienceEstimate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="w-4 h-4 text-sky-600" />
                    <span><strong>Duração por Voo:</strong> {activeRegionData.flightTimeAvg}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Faixas de Areia e Circuito
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {activeRegionData.beaches.map((b, i) => (
                      <div key={i} className="flex items-center gap-1 text-slate-700">
                        <MapPin className="w-3 h-3 text-sky-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Destaques Estratégicos
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                    {activeRegionData.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalRegion(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Fechar
                </button>
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone1Raw}?text=${encodeURIComponent(
                    `Olá! Gostaria de consultar disponibilidade de voo para a região de ${activeRegionData.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors"
                >
                  Agendar Voo nesta Região
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
