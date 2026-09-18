import React from 'react';
import { Compass, Anchor, HeartHandshake, Sparkles, MapPin, ChefHat } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface AboutSectionProps {
  config: typeof RESTAURANT_CONFIG;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  return (
    <section id="histoire" className="py-24 bg-[#0C1B2A] text-white overflow-hidden relative">
      {/* Subtle decorative background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#132A40] blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#1A3650] blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column: Duo of High-Quality Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 aspect-4/5 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Intérieur chaleureux et élégant d'un restaurant de fruits de mer parisien"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B2A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  Ambiance Parisienne
                </span>
                <p className="text-sm font-serif-display italic text-slate-200">
                  L'esprit des grandes brasseries maritimes, convivial et raffiné.
                </p>
              </div>
            </div>

            {/* Small Floating Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 bg-[#132A40] border border-[#D4AF37]/40 rounded-xl p-5 shadow-2xl max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <ChefHat className="w-6 h-6 text-[#D4AF37]" />
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Chef & Direction</span>
                  <span className="text-sm font-bold text-slate-100">{config.story.chefOwner}</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 italic">
                « Cuisiner la mer, c'est avant tout savoir s'effacer devant la noblesse du produit. »
              </p>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-4">
              <Anchor className="w-3.5 h-3.5" />
              <span>Notre Philosophie Maritime</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-6 leading-tight">
              {config.story.headline}
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              <p>
                {config.story.restaurantStory}
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                {config.story.cuisinePhilosophy}
              </p>
            </div>

            {/* Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-slate-800">
              {config.story.commitments.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#132A40] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-[#D4AF37] font-bold">✓</span>
                  </div>
                  <span className="text-sm text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Location highlight */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <strong className="text-white block font-medium">Adresse au cœur de la rive gauche</strong>
                <span>{config.address} • {config.neighborhood}, {config.postalCode}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
