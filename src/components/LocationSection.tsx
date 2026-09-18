import React from 'react';
import { MapPin, Navigation, Phone, Clock, Train, Car, ExternalLink } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';
import { OpeningHoursCard } from './OpeningHoursCard';

interface LocationSectionProps {
  config: typeof RESTAURANT_CONFIG;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ config }) => {
  return (
    <section id="horaires" className="py-20 bg-[#F4F1EA] text-[#0C1B2A] border-b border-[#E2DDD3] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8C6D23] block mb-2">
            Rive Gauche • Paris 6e
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            Emplacement & Accès
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            Situé au cœur de Saint-Germain-des-Prés, notre restaurant vous accueille dans un cadre intime et maritime à deux pas des quais de Seine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Opening Hours Card */}
          <div className="lg:col-span-6">
            <OpeningHoursCard config={config} />
          </div>

          {/* Right: Map and Location Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address & Direct Actions Box */}
            <div className="bg-white rounded-2xl border border-[#E5E0D5] p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif-display text-2xl font-bold text-[#0C1B2A] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#8C6D23]" />
                <span>Adresse & Contact</span>
              </h3>

              <div className="space-y-3 text-sm text-slate-700 mb-6">
                <p className="text-base font-semibold text-slate-900">
                  {config.name}
                </p>
                <p>{config.address}</p>
                <p>{config.neighborhood}, {config.postalCode}</p>
                <p className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8C6D23]" />
                  <span>Réservations : <strong className="text-slate-900">{config.phoneDisplay}</strong></span>
                </p>
              </div>

              {/* Transit & Parking Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE7DE] text-xs text-slate-600 mb-6">
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-[#8C6D23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Métro</strong>
                    <span>{config.metroStation}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#8C6D23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Parking</strong>
                    <span>Parking Saint-Germain à 250m</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 rounded-md bg-[#0C1B2A] hover:bg-[#132A40] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Calculer l'Itinéraire</span>
                </a>

                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-md bg-[#FAF8F5] hover:bg-[#EAE5D9] text-[#0C1B2A] border border-[#DDD5C7] text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-[#8C6D23]" />
                  <span>Ouvrir dans Google Maps</span>
                </a>
              </div>
            </div>

            {/* Map Visual Frame */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E0D5] bg-slate-900 relative shadow-sm h-64 group">
              {/* Paris map representation with stylized marker */}
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80"
                alt="Vue de Paris et localisation du restaurant à Saint-Germain"
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B2A]/90 via-[#0C1B2A]/40 to-transparent" />
              
              {/* Center Pin Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-[#0C1B2A] flex items-center justify-center shadow-2xl mb-2 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-serif-display text-xl font-bold text-white drop-shadow">
                  {config.name}
                </span>
                <span className="text-xs text-amber-200 font-medium">
                  {config.neighborhood}
                </span>
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#0C1B2A] text-xs font-bold shadow-lg"
                >
                  <span>Vue Satellite & Itinéraire</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
