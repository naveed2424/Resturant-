import React from 'react';
import { Calendar, Utensils, Phone, MessageCircle, MapPin, Clock, Award, ShieldCheck } from 'lucide-react';
import { RESTAURANT_CONFIG, getCurrentOpeningStatus } from '../restaurantConfig';

interface HeroProps {
  onBookClick: () => void;
  onMenuClick: () => void;
  config: typeof RESTAURANT_CONFIG;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onMenuClick, config }) => {
  const openingStatus = getCurrentOpeningStatus(config.openingHours);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#07131F] text-white overflow-hidden">
      {/* Background Image with optimized gradient overlay for legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=2000&q=85"
          alt="Plateau d'huîtres fraîches ouvertes minute sur glace pilée à Paris"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multilayer gradient for atmospheric depth and high WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B2A] via-[#0C1B2A]/80 to-[#07131F]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0C1B2A]/40 to-[#0C1B2A]/90" />
      </div>

      {/* Decorative maritime border motif */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent z-10" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        {/* City & Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132A40]/80 border border-[#D4AF37]/40 text-[#E6C875] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{config.neighborhood} • {config.locationCity}, {config.locationCountry}</span>
        </div>

        {/* Hero Title in Cormorant Garamond */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6 max-w-4xl mx-auto leading-[1.15]">
          {config.heroHeadline}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {config.heroSubheadline}
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] font-bold text-base tracking-wider uppercase transition-all shadow-lg hover:shadow-xl transform active:scale-95 flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5 text-[#0C1B2A]" />
            <span>Réserver une Table</span>
          </button>

          <button
            onClick={onMenuClick}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-base tracking-wider uppercase border border-white/25 transition-all backdrop-blur-sm flex items-center justify-center gap-3"
          >
            <Utensils className="w-5 h-5 text-[#D4AF37]" />
            <span>Découvrir la Carte</span>
          </button>
        </div>

        {/* Quick Action Contact Bar (Call, WhatsApp, Itinéraire) */}
        <div className="pt-6 border-t border-slate-700/60 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-medium">
            Contact direct & Informations pratiques
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <a
              href={`tel:${config.phone}`}
              className="px-4 py-2.5 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>{config.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-md bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={config.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{config.metroStation}</span>
            </a>
          </div>
        </div>

        {/* Status Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800">
            <span className={`w-2 h-2 rounded-full ${openingStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
            <strong className="text-slate-200">{openingStatus.statusText}</strong> — {openingStatus.nextTimeText}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            Écaillage à la commande
          </span>
        </div>

      </div>
    </section>
  );
};
