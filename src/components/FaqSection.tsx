import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface FaqSectionProps {
  config: typeof RESTAURANT_CONFIG;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF9F6] text-[#0C1B2A] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1B2A]/5 border border-[#0C1B2A]/10 text-xs font-semibold tracking-wider uppercase text-[#0C1B2A] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            Tout Ce Qu'il Faut Savoir
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Pour préparer votre venue chez Maison Marée en toute sérénité.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {config.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display text-lg sm:text-xl font-bold text-[#0C1B2A]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom support note */}
        <div className="mt-10 text-center text-xs text-slate-500">
          Une autre question spécifique ? Contactez directement notre équipe au <a href={`tel:${config.phone}`} className="font-semibold text-slate-900 underline">{config.phoneDisplay}</a> ou sur <a href={`https://wa.me/${config.whatsappNumber}`} className="font-semibold text-emerald-700 underline">WhatsApp</a>.
        </div>

      </div>
    </section>
  );
};
