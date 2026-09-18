import React, { useState } from 'react';
import { Sliders, Sparkles, X, Check, RefreshCw, Copy, FileCode, Store } from 'lucide-react';
import { RESTAURANT_CONFIG, RestaurantConfig } from '../restaurantConfig';

interface DemoCustomizerProps {
  currentConfig: RestaurantConfig;
  onUpdateConfig: (newConfig: RestaurantConfig) => void;
  onReset: () => void;
  onTest404: () => void;
  is404Active: boolean;
}

export const DemoCustomizer: React.FC<DemoCustomizerProps> = ({
  currentConfig,
  onUpdateConfig,
  onReset,
  onTest404,
  is404Active
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form local state
  const [name, setName] = useState(currentConfig.name);
  const [phone, setPhone] = useState(currentConfig.phoneDisplay);
  const [address, setAddress] = useState(currentConfig.address);
  const [neighborhood, setNeighborhood] = useState(currentConfig.neighborhood);
  const [whatsapp, setWhatsapp] = useState(currentConfig.whatsappNumber);

  const presets = [
    {
      name: "Maison Marée Paris",
      phone: "01 42 68 00 00",
      address: "18 Rue de la Mer (Démo Rive Gauche)",
      neighborhood: "Saint-Germain-des-Prés, Paris 6e",
      whatsapp: "33612345678"
    },
    {
      name: "L'Écailler du Marais",
      phone: "01 48 87 22 11",
      address: "42 Rue des Rosiers",
      neighborhood: "Le Marais, Paris 4e",
      whatsapp: "33698765432"
    },
    {
      name: "La Marée Montparnasse",
      phone: "01 43 20 89 00",
      address: "14 Boulevard Vavin",
      neighborhood: "Montparnasse, Paris 14e",
      whatsapp: "33611223344"
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig({
      ...currentConfig,
      name,
      phoneDisplay: phone,
      phone: phone.replace(/\s+/g, ''),
      address,
      neighborhood,
      whatsappNumber: whatsapp.replace(/\D/g, '')
    });
    setIsOpen(false);
  };

  const handleApplyPreset = (p: typeof presets[0]) => {
    setName(p.name);
    setPhone(p.phone);
    setAddress(p.address);
    setNeighborhood(p.neighborhood);
    setWhatsapp(p.whatsapp);
    onUpdateConfig({
      ...currentConfig,
      name: p.name,
      phoneDisplay: p.phone,
      phone: p.phone.replace(/\s+/g, ''),
      address: p.address,
      neighborhood: p.neighborhood,
      whatsappNumber: p.whatsapp
    });
  };

  const handleCopyConfigSnippet = () => {
    const snippet = `// Configuration client pour : ${currentConfig.name}
export const RESTAURANT_CONFIG = {
  name: "${currentConfig.name}",
  phoneDisplay: "${currentConfig.phoneDisplay}",
  address: "${currentConfig.address}",
  neighborhood: "${currentConfig.neighborhood}",
  whatsappNumber: "${currentConfig.whatsappNumber}",
  locationCity: "Paris",
  locationCountry: "France"
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Demo Trigger (Discreet bottom-left badge) */}
      <div className="fixed bottom-16 sm:bottom-4 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C1B2A]/90 hover:bg-[#0C1B2A] text-amber-300 text-[11px] font-semibold border border-amber-400/40 shadow-xl backdrop-blur-md transition-all active:scale-95"
          aria-label="Ouvrir le personnalisateur pour démonstration client"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Démo Vente : Personnaliser ce Site</span>
        </button>
      </div>

      {/* Slide-over / Modal Customizer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-t-2xl sm:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200 text-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-[#8C6D23]" />
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#0C1B2A]">
                    Mode Démo Agence
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Testez la personnalisation en direct devant votre client
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick 1-Click Presets for Paris Districts */}
            <div className="mb-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Exemples rapides de restaurants parisiens :
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleApplyPreset(preset)}
                    className="text-left p-2 rounded-lg bg-slate-50 hover:bg-amber-50/60 border border-slate-200 text-xs text-slate-800 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <strong className="block text-slate-900">{preset.name}</strong>
                      <span className="text-[11px] text-slate-500">{preset.neighborhood}</span>
                    </div>
                    <span className="text-[10px] text-amber-700 font-bold">Appliquer</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleApply} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Nom du Restaurant
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#0C1B2A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Téléphone Affiché
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#0C1B2A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Adresse à Paris
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#0C1B2A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Quartier / Arrondissement
                </label>
                <input
                  type="text"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#0C1B2A]"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2 rounded bg-[#0C1B2A] hover:bg-[#132A40] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Appliquer en Direct
                </button>
                <button
                  type="button"
                  onClick={onReset}
                  className="p-2 rounded border border-slate-300 hover:bg-slate-50 text-slate-600"
                  title="Réinitialiser"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Test 404 and export features */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={onTest404}
                className="w-full py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium"
              >
                {is404Active ? "Quitter la simulation 404" : "Tester la page 404 (Table vide)"}
              </button>

              <button
                onClick={handleCopyConfigSnippet}
                className="w-full py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Configuration copiée !" : "Copier la configuration JSON"}</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
