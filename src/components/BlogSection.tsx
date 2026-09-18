import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, X, User } from 'lucide-react';
import { RESTAURANT_CONFIG, BlogPost } from '../restaurantConfig';

interface BlogSectionProps {
  config: typeof RESTAURANT_CONFIG;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ config }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-white text-[#0C1B2A] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1B2A]/5 border border-[#0C1B2A]/10 text-xs font-semibold tracking-wider uppercase text-[#0C1B2A] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Culture & Gastronomie Maritime</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            Le Carnet de Marée
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Conseils d'écaillers, secrets d'affinage et accords mets-vins : découvrez nos guides pratiques pour apprécier les richesses de nos côtes à Paris.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0C1B2A]/90 text-amber-200 text-xs font-semibold px-2.5 py-1 rounded">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0C1B2A] mb-3 leading-snug group-hover:text-[#8C6D23] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0C1B2A] hover:text-[#D4AF37] transition-colors"
                >
                  <span>Lire l'Article Complet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal Article Reader */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedArticle.title}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Fermer la lecture"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-1">
                {selectedArticle.category}
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0C1B2A] leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>Par l'équipe Maison Marée Paris</span>
              </div>
            </div>

            <div className="my-6 rounded-xl overflow-hidden h-64 bg-slate-100">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 italic">
                Source : Guide culinaire Maison Marée Paris
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-md bg-[#0C1B2A] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
