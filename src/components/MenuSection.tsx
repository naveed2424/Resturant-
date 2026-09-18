import React, { useState } from 'react';
import { Download, AlertCircle, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_CONFIG, MenuItem } from '../restaurantConfig';

interface MenuSectionProps {
  onBookClick: () => void;
  config: typeof RESTAURANT_CONFIG;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onBookClick, config }) => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('oysters');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const filteredItems = config.menuItems.filter(item => item.category === activeCategory);
  const currentCategoryMeta = config.menuCategories.find(c => c.id === activeCategory);

  return (
    <section id="carte" className="py-20 bg-white text-[#0C1B2A] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-2">
            Gastronomie Maritime à Paris
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            La Carte de l'Écailler
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Une sélection de produits d'exception ouverts à la commande ou préparés sur le feu selon la tradition culinaire française.
          </p>

          {/* Download Menu CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FAF8F5] hover:bg-[#F0ECE1] text-[#0C1B2A] border border-[#DDD5C7] text-xs uppercase font-semibold tracking-wider transition-colors shadow-sm"
              aria-label="Télécharger le menu en PDF"
            >
              <Download className="w-4 h-4 text-[#8C6D23]" />
              <span>Télécharger la Carte (PDF)</span>
            </button>
            <span className="text-xs text-slate-500 italic">
              Carte mise à jour selon les saisons
            </span>
          </div>
        </div>

        {/* Demo Pricing Notice Badge */}
        <div className="mb-8 max-w-2xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-lg p-3 text-xs text-amber-900 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Note de Démonstration :</strong> Les prix indiqués sont des montants indicatifs destinés à la présentation commerciale du site.
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {config.menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#0C1B2A] text-white shadow-md'
                    : 'bg-[#F4F1EA] text-slate-700 hover:bg-[#EAE5D9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        {currentCategoryMeta && (
          <div className="text-center mb-10 max-w-xl mx-auto">
            <p className="text-sm font-serif-display italic text-slate-500">
              « {currentCategoryMeta.description} »
            </p>
          </div>
        )}

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="p-6 rounded-xl bg-[#FAF9F6] border border-[#ECE7DE] hover:border-[#D4AF37]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0C1B2A]">
                      {dish.name}
                    </h3>
                    {dish.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#7D601E] border border-[#D4AF37]/30">
                        {dish.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#0C1B2A] shrink-0 font-mono">
                    {dish.price}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {dish.description}
                </p>
              </div>

              {/* Tags and Allergens */}
              <div className="pt-3 border-t border-[#ECE7DE] flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2 flex-wrap">
                  {dish.dietary?.map((tag, idx) => (
                    <span key={idx} className="text-emerald-700 font-medium">
                      ✓ {tag}
                    </span>
                  ))}
                  {dish.allergens && dish.allergens.length > 0 && (
                    <span className="text-slate-500 text-[11px]">
                      Allergènes : {dish.allergens.join(', ')}
                    </span>
                  )}
                </div>

                {dish.isDemoPrice && (
                  <span className="text-[10px] uppercase text-slate-400 font-mono tracking-wider">
                    Tarif Démo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Allergen & Dietary Requirement Notice */}
        <div className="max-w-4xl mx-auto p-5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD3] text-center text-xs sm:text-sm text-slate-600 space-y-2">
          <p className="font-semibold text-slate-900">
            {config.allergenNotice}
          </p>
          <p className="text-xs text-slate-500">
            Pain de seigle au levain et beurre d'Isigny demi-sel servis d'office avec nos bancs de coquillages.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookClick}
            className="px-8 py-3.5 rounded-md bg-[#0C1B2A] hover:bg-[#132A40] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-md"
          >
            Réserver Votre Table Pour Goûter la Carte
          </button>
        </div>

      </div>

      {/* Modal Téléchargement de Carte PDF */}
      {downloadModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Téléchargement du menu"
        >
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="font-serif-display text-2xl font-bold text-[#0C1B2A] mb-2">
              Télécharger la Carte du Restaurant
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Dans la version finale pour votre client restaurateur, ce bouton ouvrira directement le fichier PDF de la carte officielle ou le document numérique mis à jour.
            </p>
            <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#ECE7DE] mb-6 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#0C1B2A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Configuration prête dans config.js / restaurantConfig.ts</span>
              </div>
              <p className="text-slate-500">
                Paramètre : <code className="bg-white px-1 py-0.5 rounded border text-slate-800">pdfMenuUrl: "https://.../carte.pdf"</code>
              </p>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  alert("Simulation : Le fichier PDF de la carte de Maison Marée Paris est téléchargé.");
                  setDownloadModalOpen(false);
                }}
                className="px-5 py-2.5 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider shadow"
              >
                Simuler le Téléchargement
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
