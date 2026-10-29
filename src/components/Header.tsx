import { useState, useEffect } from 'react';
import { Plane, Menu, X, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Empresa', href: '#empresa' },
    { label: 'Regiões', href: '#regioes' },
    { label: 'Formatos', href: '#formatos' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Trabalhos', href: '#trabalhos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo */}
          <a
            href="#"
            className="flex items-center group whitespace-nowrap shrink-0 py-0.5"
            aria-label="RioAr noar Propaganda Aérea - Início"
          >
            <img
              src="/assets/aistudio/logo_aeec24d2.png"
              alt="RioAr noar Propaganda Aérea"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Zone 2: 4-5 single-line clean text links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${CONTACT_INFO.phone1Raw}?text=${encodeURIComponent(
                'Olá! Gostaria de um orçamento para propaganda aérea com a RioAr.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-slate-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-sky-600 py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.phone1Raw}?text=${encodeURIComponent(
                  'Olá! Gostaria de um orçamento para propaganda aérea com a RioAr.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
