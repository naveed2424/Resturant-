import React from 'react';
import { Home, Utensils, Calendar, Compass } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface NotFoundViewProps {
  onGoHome: () => void;
  onGoMenu: () => void;
  onGoBook: () => void;
  config: typeof RESTAURANT_CONFIG;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({
  onGoHome,
  onGoMenu,
  onGoBook,
  config
}) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#07131F] text-white px-4 py-20 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10 space-y-6">
        
        {/* Decorative shell emblem */}
        <div className="w-20 h-20 rounded-full bg-[#132A40] border-2 border-[#D4AF37] flex items-center justify-center mx-auto shadow-2xl">
          <Compass className="w-10 h-10 text-[#D4AF37] animate-spin-slow" />
        </div>

        <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
          Erreur 404 • Page Introuvable
        </span>

        <h1 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-100">
          Oups — Cette table est vide.
        </h1>

        <p className="text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          La page que vous recherchez semble avoir pris le large ou n'existe plus sur le site de {config.name}.
        </p>

        {/* 3 Mandatory Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/25 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Retour à l'Accueil</span>
          </button>

          <button
            onClick={onGoMenu}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/25 transition-all flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#D4AF37]" />
            <span>Voir la Carte</span>
          </button>

          <button
            onClick={onGoBook}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Réserver une Table</span>
          </button>
        </div>

      </div>
    </div>
  );
};
