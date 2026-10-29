import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone1Raw}?text=${encodeURIComponent(
    'Oi! Vi o site da RioAr e gostaria de saber mais sobre como funciona para anunciar na orla!'
  )}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Falar no WhatsApp com a RioAr noar"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

      {/* Floating tooltip badge on desktop */}
      <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-800">
        Fale no WhatsApp da RioAr
      </div>
    </aside>
  );
}
