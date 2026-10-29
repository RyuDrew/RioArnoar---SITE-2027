import { Plane, Mail, Phone, MapPin, Instagram, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="inline-block bg-white px-3 py-2 rounded-xl shadow-sm hover:opacity-95 transition-opacity"
              aria-label="RioAr noar Propaganda Aérea - Início"
            >
              <img
                src="/assets/aistudio/logo_aeec24d2.png"
                alt="RioAr noar Propaganda Aérea"
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mais de 30 anos conectando as maiores marcas do Brasil ao público nas praias mais concorridas do litoral do Rio de Janeiro. Líder em propaganda aérea com 30.000 horas voadas.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Operação Homologada ANAC</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#empresa" className="hover:text-white transition-colors">Empresa</a>
              </li>
              <li>
                <a href="#regioes" className="hover:text-white transition-colors">Regiões Atendidas</a>
              </li>
              <li>
                <a href="#formatos" className="hover:text-white transition-colors">Formatos & Banners</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Simulador de Voo</a>
              </li>
              <li>
                <a href="#trabalhos" className="hover:text-white transition-colors">Trabalhos Realizados</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato & Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Regions Covered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Litoral Fluminense & Praias
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Zona Sul (Copacabana, Ipanema, Leblon, Leme)</li>
              <li>Barra da Tijuca, Reserva e Recreio</li>
              <li>Niterói (Itacoatiara, Camboinhas, Icaraí)</li>
              <li>Região dos Lagos (Cabo Frio, Búzios, Arraial)</li>
              <li>Costa Verde (Angra dos Reis, Itacuruçá)</li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Atendimento Operacional
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`https://wa.me/${CONTACT_INFO.phone1Raw}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone1}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`https://wa.me/${CONTACT_INFO.phone2Raw}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone2}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Av. Raquel de Queiroz, S/nº Barra da Tijuca | Rio de Janeiro | RJ Cep: 22.793-100 | CAER - Clube de Aeronáutica - Sede Barra /RJ
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@rioarnoar no Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} RioAr noar Propaganda Aérea. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.anacCertUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors underline underline-offset-2"
            >
              Homologação ANAC
            </a>
            <span>·</span>
            <span>Segurança Aeronáutica CENIPA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
