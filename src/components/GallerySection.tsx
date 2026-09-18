import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Camera } from 'lucide-react';
import { RESTAURANT_CONFIG, GalleryPhoto } from '../restaurantConfig';

interface GallerySectionProps {
  config: typeof RESTAURANT_CONFIG;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ config }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filterTabs = ['Tous', 'Huîtres', 'Plateaux', 'Poissons', 'Ambiance', 'Desserts'];

  const filteredPhotos = activeFilter === 'Tous'
    ? config.gallery
    : config.gallery.filter(p => p.category === activeFilter);

  // Keyboard navigation for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="galerie" className="py-20 bg-[#FAF9F6] text-[#0C1B2A] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1B2A]/5 border border-[#0C1B2A]/10 text-xs font-semibold tracking-wider uppercase text-[#0C1B2A] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Instantanés & Terroir Marin</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            Galerie Photographique
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Plongez dans l'univers de Maison Marée : la fraîcheur cristalline de nos coquillages, la précision de nos dressages et la lumière tamisée de nos tables parisiennes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filterTabs.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-[#0C1B2A] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer bg-slate-200 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedPhotoIndex(index)}
              aria-label={`Agrandir la photo : ${photo.title}`}
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B2A]/90 via-[#0C1B2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] mb-1">
                  {photo.category}
                </span>
                <p className="text-sm font-medium leading-snug mb-2">
                  {photo.title}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Agrandir</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image plein écran"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Fermer la photo (Échap)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Photo précédente (Flèche gauche)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={filteredPhotos[selectedPhotoIndex].image}
              alt={filteredPhotos[selectedPhotoIndex].alt}
              className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-1">
                {filteredPhotos[selectedPhotoIndex].category}
              </span>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold mb-1">
                {filteredPhotos[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-slate-300 italic">
                {filteredPhotos[selectedPhotoIndex].alt}
              </p>
              <div className="mt-2 text-[11px] text-slate-400">
                Photo {selectedPhotoIndex + 1} sur {filteredPhotos.length} • Navigation au clavier (Flèches & Échap)
              </div>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Photo suivante (Flèche droite)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
