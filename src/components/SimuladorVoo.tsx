import { useState, useId } from 'react';
import { REGIONS, BANNER_FORMATS, CONTACT_INFO } from '../data/content';
import { Plane, Calculator, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface SimuladorVooProps {
  selectedRegionId?: string;
  selectedFormatId?: string;
}

export function SimuladorVoo({
  selectedRegionId = 'rio-de-janeiro',
  selectedFormatId = 'Banner Publicitário',
}: SimuladorVooProps) {
  const [regionId, setRegionId] = useState(selectedRegionId);
  const [formatId, setFormatId] = useState(selectedFormatId);
  const [duration, setDuration] = useState('2-dias');
  const [bannerText, setBannerText] = useState('SUA MARCA AQUI NO CÉU DO RIO');
  const [copied, setCopied] = useState(false);

  const regionIdInput = useId();
  const formatIdInput = useId();
  const durationInput = useId();
  const bannerTextInput = useId();

  const currentRegion = REGIONS.find((r) => r.id === regionId) || REGIONS[0];
  const currentFormat = BANNER_FORMATS.find((f) => f.id === formatId) || BANNER_FORMATS[0];

  const durationOptions = [
    { id: '1-dia', label: '1 Dia (Qualquer dia da semana )', flights: '1 sobrevoo de 3h' },
    { id: '2-dias', label: 'Fim de Semana Completo (Sex, Sáb e Dom)', flights: '3 a 4 sobrevoos em cada praia, totalizando 3h voo ' },
    { id: '4-dias', label: 'Feriadão Prolongado (4 Dias)', flights: '3 a 4 sobrevoos em cada praia, totalizando 12h voo' },
    { id: 'temporada', label: 'Temporada Verão (50 horas de Voos )', flights: '25  sobrevoos programados de 3h' },
  ];

  const selectedDurationObj = durationOptions.find((d) => d.id === duration) || durationOptions[1];

  // Dynamic audience calculation
  const getAudienceMultiplier = () => {
    switch (duration) {
      case '1-dia': return 1;
      case '2-dias': return 2;
      case '4-dias': return 4;
      case 'temporada': return 8;
      default: return 2;
    }
  };

  const getEstimatedTotalAudience = () => {
    if (
      regionId === 'Toda orla carioca | Recreio ao Leme' ||
      regionId === 'rio-de-janeiro'
    ) {
      return (1.2 * getAudienceMultiplier()).toFixed(1) + ' Milhões';
    }
    if (
      regionId === 'Orla Carioca | Barra ao Leme' ||
      regionId === 'Parcial 1 - Orla Carioca | Barra ao Leme' ||
      regionId === 'niteroi'
    ) {
      return (0.8 * getAudienceMultiplier()).toFixed(1) + ' Milhões';
    }
    if (
      regionId === 'Parcial 2 - Orla Zona Sul | Leblon – Ipanema – Arpoador – Copacabana – Leme'
    ) {
      return (350 * getAudienceMultiplier()).toLocaleString('pt-BR') + ' mil';
    }
    if (regionId === 'regiao-dos-lagos') {
      return (0.8 * getAudienceMultiplier()).toFixed(1) + ' Milhões';
    }
    return (180 * getAudienceMultiplier()).toLocaleString('pt-BR') + ' mil';
  };

  const formattedWhatsAppMessage = `Olá RioAr! Fiz uma simulação no site:
• Região: ${currentRegion.name} (${currentRegion.state})
• Formato: ${currentFormat.name}
• Duração: ${selectedDurationObj.label} (${selectedDurationObj.flights})
• Texto do Banner: "${bannerText}"
• Alcance Estimado: ${getEstimatedTotalAudience()} de pessoas
Gostaria de saber os valores e datas disponíveis para Veiculação!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="simulador" className="py-20 md:py-28 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Simulador de Voo & Campanha Aérea</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Monte sua rota, personalize o banner e calcule o alcance
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Veja em tempo real como seu anúncio se comportará no céu das praias brasileiras e receba uma proposta personalizada diretamente no WhatsApp ou e-mail.
          </p>
        </div>

        {/* Live Sky Preview Visualizer */}
        <div className="mb-12 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 rounded-2xl p-6 sm:p-10 border border-sky-300 shadow-inner relative overflow-hidden">
          {/* Subtle cloud shapes */}
          <div className="absolute top-4 left-10 w-32 h-10 bg-white/40 rounded-full blur-md" />
          <div className="absolute top-12 right-24 w-48 h-14 bg-white/50 rounded-full blur-md" />
          <div className="absolute bottom-6 left-1/3 w-64 h-12 bg-white/30 rounded-full blur-lg" />

          <div className="relative z-10 flex flex-col items-center justify-center min-h-[160px] py-4">
            <div className="flex items-center gap-2 sm:gap-4 animate-plane-float max-w-full overflow-x-auto py-2">
              {/* Aircraft Icon */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400 border-2 border-amber-600 text-slate-900 shadow-lg shrink-0">
                <Plane className="w-8 h-8 sm:w-10 sm:h-10 -rotate-45" />
              </div>

              {/* Tow Cable */}
              <div className="w-8 sm:w-16 h-0.5 bg-slate-700/80 shrink-0 border-dashed" />

              {/* Trailing Banner */}
              <div
                className="px-4 sm:px-6 py-3 sm:py-4 rounded-md shadow-xl border-2 border-amber-500 bg-amber-400 text-slate-900 font-black uppercase text-sm sm:text-base md:text-lg tracking-wider whitespace-nowrap animate-banner-wave shrink-0 max-w-[85vw] sm:max-w-md md:max-w-xl truncate"
              >
                {bannerText || 'DIGITE SUA MENSAGEM ABAIXO'}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-sky-950/80 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sky-200">
              <span>Circuito: <strong>{currentRegion.name}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Formato: <strong>{currentFormat.name}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Altitude Média: <strong>100 metros</strong></span>
            </div>
          </div>
        </div>

        {/* Simulator Controls & Calculations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Form Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {/* Banner Text Input */}
            <div>
              <label htmlFor={bannerTextInput} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Frase ou Mensagem do Banner
              </label>
              <input
                id={bannerTextInput}
                type="text"
                maxLength={45}
                value={bannerText}
                onChange={(e) => setBannerText(e.target.value.toUpperCase())}
                placeholder="Ex: CERVEJA GELADA NO QUIOSQUE 10"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 font-bold focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none uppercase"
              />
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                <span>{bannerText.length}/45 caracteres</span>
                <span>Visível com clareza em toda a areia</span>
              </div>
            </div>

            {/* Region Selector */}
            <div>
              <label htmlFor={regionIdInput} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Região e Praias de Sobrevoo
              </label>
              <select
                id={regionIdInput}
                value={regionId}
                onChange={(e) => setRegionId(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white"
              >
                {REGIONS.map((r) => {
                  let label = `${r.name} - ${r.audienceEstimate}`;
                  if (r.id === 'rio-de-janeiro') {
                    label = 'Toda orla carioca | Recreio ao Leme - - 1.200.000+ banhistas nos fins de semana ensolarados.';
                  } else if (r.id === 'niteroi') {
                    label = 'Orla Carioca | Barra ao Leme - 350.000+ Pessoas no circuito oceânico';
                  }
                  return (
                    <option key={r.id} value={r.id}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Format Selector */}
            <div>
              <label htmlFor={formatIdInput} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Formato da Mídia Aérea
              </label>
              <select
                id={formatIdInput}
                value={formatId}
                onChange={(e) => setFormatId(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white"
              >
                {BANNER_FORMATS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name} — {f.dimensions}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Selector */}
            <div>
              <label htmlFor={durationInput} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Intensidade & Período da Ação
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {durationOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDuration(opt.id)}
                    className={`p-3 text-left rounded-lg border text-xs transition-all ${
                      duration === opt.id
                        ? 'border-sky-600 bg-sky-50/70 text-slate-900 ring-1 ring-sky-600'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-slate-900 mb-0.5">{opt.label}</div>
                    <div className="text-[11px] text-slate-500">{opt.flights}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Operational Summary Card & WhatsApp Dispatch */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Resumo da Operação
                </span>
                <h3 className="text-lg font-bold text-white">
                  Plano de Voo Publicitário
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded">
                Homologado ANAC
              </span>
            </div>

            {/* Calculated Metrics */}
            <div className="space-y-4">
              <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/60">
                <span className="text-xs text-slate-400 block mb-1">
                  Público Estimado Acumulado
                </span>
                <div className="text-3xl font-extrabold text-amber-300 font-mono tabular-nums">
                  {getEstimatedTotalAudience()}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Banhistas, orla e calçadão nas praias de {currentRegion.name}
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300 divide-y divide-slate-800">
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Região Selecionada:</span>
                  <span className="font-bold text-white">{currentRegion.name}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Formato Escolhido:</span>
                  <span className="font-bold text-white text-right max-w-[200px] truncate">{currentFormat.name}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Janela Solar Ideal:</span>
                  <span className="font-bold text-emerald-300">11:30 às 15:00 (Pico da Praia)</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Decolagem / Pouso:</span>
                  <span className="font-bold text-white">CAER - Clube de Aeronáutica da Barra, RJ</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.phone1Raw}?text=${encodeURIComponent(
                  formattedWhatsAppMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/20 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enviar Plano no WhatsApp da RioAr</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Copiar Detalhes do Plano</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              Atendimento ágil direto com nosso coordenador de voo operacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
