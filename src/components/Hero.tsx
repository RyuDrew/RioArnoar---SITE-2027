import { HERO_IMAGE, STATS, CONTACT_INFO } from '../data/content';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 overflow-hidden">
      {/* Decorative ambient atmospheric glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-r from-sky-200/30 via-sky-400/20 to-blue-200/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split grid: Proposition + High Impact Aerial Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quiet Trust Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-800 bg-sky-100/70 border border-sky-200/60 px-3 py-1.5 rounded-md">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Aviação Publicitária Homologada ANAC</span>
              <span aria-hidden="true" className="text-sky-400">·</span>
              <span>Base no Rio de Janeiro</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight [text-wrap:balance]">
              Quer ver sua marca decolar?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                Anuncie na RioAr!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed [text-wrap:balance]">
              Conecte sua mensagem a mais de <strong>2 milhões de pessoas</strong> nas praias mais concorridas do Brasil. São mais de 30 anos e 30.000 horas de voo levando visibilidade inquestionável aos céus do Rio de Janeiro.
            </p>

            {/* Key benefits bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% de atenção sem skip ou bloqueio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Painéis gigantes de até 70m²</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Horários solares de maior concentração</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Relatório com fotos e rastreamento GPS</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20 whitespace-nowrap shrink-0 group"
              >
                <span>Simular Campanha & Banner</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.phone1Raw}?text=${encodeURIComponent(
                  'Oi, vi o site da RioAr e gostaria de saber mais sobre como funciona para anunciar na orla!'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Falar com Comercial</span>
              </a>
            </div>
          </div>

          {/* Column 2: High Impact Aerial Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <img
                src={HERO_IMAGE}
                alt="Aeronave da RioAr rebocando faixa publicitária sobre a orla no Rio de Janeiro"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10 pointer-events-none" />

              {/* Bottom tag inside photo */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs backdrop-blur-md bg-slate-900/60 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Sobrevoo real na orla carioca, RJ</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">Altitude ~100m</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below the hero split */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
