import { useState } from 'react';
import { PORTFOLIO_ITEMS, TESTIMONIALS, CONTACT_INFO } from '../data/content';
import { Instagram, Eye, Award, ExternalLink, Quote } from 'lucide-react';

export function TrabalhosMidiaSocial() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<string | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const activePhoto = PORTFOLIO_ITEMS.find((p) => p.id === selectedPhotoModal);

  return (
    <section id="trabalhos" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
              Portfólio & Execução
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Campanhas que marcaram os céus do Rio de Janeiro
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Registros reais de voos comerciais conduzidos pela RioAr com marcas líderes nacionais e internacionais.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'Todos os Voos' },
              { id: 'beverage', label: 'Bebidas' },
              { id: 'events', label: 'Eventos' },
              { id: 'retail', label: 'Varejo' },
              { id: 'real-estate', label: 'Imóveis' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoModal(item.id)}
              className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-1">
                  {item.categoryLabel}
                </div>
                <h3 className="text-base font-bold leading-snug mb-1">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-300 flex items-center justify-between pt-2 border-t border-white/10 mt-2">
                  <span>{item.beach}</span>
                  <span className="font-semibold text-emerald-400">{item.impactReach}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials adjacent to proof claims */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
              Depoimentos de Clientes & Agências
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              O que dizem os diretores de mídia e marketing
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-sky-500/60" />
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </div>
                  <div className="text-[11px] text-sky-700 font-semibold mt-1">
                    {t.verifiedFlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram / Social Media Integration Banner */}
        <div id="midia-social" className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-md border border-sky-800">
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram Oficial {CONTACT_INFO.instagramHandle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Acompanhe nossos voos e vídeos da orla em tempo real
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Postamos sobrevoos diários, bastidores do hangar no Clube de Aeronáutica (CAER), fotos aéreas do litoral e depoimentos de quem vê sua marca no céu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 rounded-lg transition-all shadow-lg shadow-pink-500/20 whitespace-nowrap"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir @rioarnoar no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Photo Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
              <div className="relative h-72 sm:h-96">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPhotoModal(null)}
                  className="absolute top-4 right-4 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  {activePhoto.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {activePhoto.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <span><strong>Local:</strong> {activePhoto.beach}</span>
                  <span><strong>Cliente:</strong> {activePhoto.client}</span>
                  <span><strong>Impacto:</strong> {activePhoto.impactReach}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
