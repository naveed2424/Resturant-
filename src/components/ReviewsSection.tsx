import React from 'react';
import { Star, ShieldAlert, ExternalLink, MapPin, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface ReviewsSectionProps {
  config: typeof RESTAURANT_CONFIG;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ config }) => {
  return (
    <section id="avis" className="py-20 bg-white text-[#0C1B2A] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-2">
            Transparence & Expérience Client
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            Avis & Retours de Nos Convives
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            La satisfaction de nos convives est notre plus grande fierté. Retrouvez ici les témoignages vérifiés déposés sur nos plateformes officielles.
          </p>
        </div>

        {/* Demo Compliance Notice as instructed in requirements */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block mb-0.5">Charte de Transparence & Mode Démo :</strong>
            <span>
              Conformément aux exigences de déontologie, aucun faux avis n'est inventé sur ce site de démonstration. Les encarts ci-dessous sont prêts à accueillir les avis réels et certifiés de vos clients Google ou Tripadvisor dès l'ouverture du site.
            </span>
          </div>
        </div>

        {/* Reviews Grid with transparent placeholder tags */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {config.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-xl bg-[#FAF9F6] border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Source and stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-200/80 text-slate-700">
                    {rev.source}
                  </span>
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <strong className="text-slate-900 block">{rev.author}</strong>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>
                {rev.isPlaceholder && (
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                    Emplacement Démo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Business Profile & Social Proof Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0C1B2A] text-white p-8 sm:p-10 shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-1">
                Fiche Établissement Officielle
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
                Retrouvez {config.name} sur Google
              </h3>
              <p className="text-sm text-slate-300 max-w-lg">
                Consultez nos horaires à jour, l'itinéraire vers Saint-Germain et déposez votre propre avis après votre dégustation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={config.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow"
              >
                <MapPin className="w-4 h-4" />
                <span>Itinéraire Google</span>
              </a>

              <a
                href={`tel:${config.phone}`}
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider text-center border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Appeler</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
