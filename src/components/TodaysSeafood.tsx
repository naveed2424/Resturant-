import React from 'react';
import { Sparkles, Info, ArrowRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface TodaysSeafoodProps {
  onOrderOrBookClick: () => void;
  config: typeof RESTAURANT_CONFIG;
}

export const TodaysSeafood: React.FC<TodaysSeafoodProps> = ({ onOrderOrBookClick, config }) => {
  return (
    <section id="selection" className="py-20 bg-[#F4F1EA] text-[#0C1B2A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1B2A]/5 border border-[#0C1B2A]/10 text-xs font-semibold tracking-wider uppercase text-[#0C1B2A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Arrivages & Banc d'Écailler</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            La Sélection Iodée du Jour
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Chaque matin, nos bancs sont garnis au gré des criées atlantiques et des marées ostréicoles.
            Découvrez nos spécialités marines travaillées dans le respect du produit.
          </p>
        </div>

        {/* Seafood Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {config.todaysSeafood.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E5E0D5] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Tag */}
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0C1B2A]/90 backdrop-blur-md text-amber-200 text-xs font-semibold px-3 py-1 rounded-full border border-amber-400/30">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow-sm">
                    {item.season}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs uppercase font-semibold text-[#8C6D23] tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif-display text-2xl font-bold text-[#0C1B2A] mb-2 group-hover:text-[#0E3B43] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#EDE8E0] flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">
                  Préparation : <strong className="text-slate-900">{item.preparation}</strong>
                </span>
                <button
                  onClick={onOrderOrBookClick}
                  className="inline-flex items-center gap-1 text-[#0C1B2A] font-semibold hover:text-[#D4AF37] transition-colors"
                >
                  <span>Réserver</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Notice */}
        <div className="bg-[#EDE8DE] border border-[#DDD5C7] rounded-lg p-4 flex items-start gap-3 max-w-3xl mx-auto text-xs sm:text-sm text-slate-700">
          <Info className="w-5 h-5 text-[#8C6D23] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-900 mb-0.5">Note sur la fraîcheur et la disponibilité</p>
            <p>{config.todaysSelectionNotice}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
