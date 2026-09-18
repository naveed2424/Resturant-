import React from 'react';
import { Calendar, Phone, MessageCircle, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface MobileStickyBarProps {
  onBookClick: () => void;
  config: typeof RESTAURANT_CONFIG;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick, config }) => {
  return (
    <div 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0C1B2A]/95 backdrop-blur-md border-t border-[#D4AF37]/30 px-3 py-2 shadow-2xl safe-area-bottom"
      aria-label="Actions rapides pour mobile"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Bouton Réserver */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#D4AF37] text-[#0C1B2A] font-bold active:scale-95 transition-transform min-h-[50px] shadow"
          aria-label="Réserver une table"
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] uppercase tracking-wider leading-tight font-extrabold">Réserver</span>
        </button>

        {/* Bouton Appeler */}
        <a
          href={`tel:${config.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-800/90 text-slate-100 hover:text-white active:scale-95 transition-transform min-h-[50px] border border-slate-700/60"
          aria-label={`Appeler le restaurant au ${config.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 mb-0.5 text-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-wider leading-tight">Appeler</span>
        </a>

        {/* Bouton WhatsApp */}
        <a
          href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#0F382A] text-emerald-300 hover:text-emerald-200 active:scale-95 transition-transform min-h-[50px] border border-emerald-700/40"
          aria-label="Contacter le restaurant sur WhatsApp"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] uppercase tracking-wider leading-tight">WhatsApp</span>
        </a>

        {/* Bouton Itinéraire Google Maps */}
        <a
          href={config.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-800/90 text-slate-100 hover:text-white active:scale-95 transition-transform min-h-[50px] border border-slate-700/60"
          aria-label="Voir le plan et itinéraire sur Google Maps"
        >
          <MapPin className="w-5 h-5 mb-0.5 text-[#D4AF37]" />
          <span className="text-[11px] uppercase tracking-wider leading-tight">Itinéraire</span>
        </a>
      </div>
    </div>
  );
};
