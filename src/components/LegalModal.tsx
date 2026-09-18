import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface LegalModalProps {
  type: 'mentions' | 'privacy' | 'cookies' | null;
  onClose: () => void;
  config: typeof RESTAURANT_CONFIG;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, config }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200 relative text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'mentions' && (
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2 mb-2 text-[#8C6D23]">
              <FileText className="w-5 h-5" />
              <span className="text-xs uppercase font-bold tracking-wider">Informations Juridiques</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0C1B2A]">
              Mentions Légales
            </h2>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs">
              <p><strong>Éditeur du site :</strong> {config.name}</p>
              <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée (Exemple démo à compléter par le client)</p>
              <p><strong>Adresse du siège :</strong> {config.address}, {config.postalCode}</p>
              <p><strong>Téléphone :</strong> {config.phoneDisplay}</p>
              <p><strong>Courrier électronique :</strong> {config.email}</p>
              <p><strong>Directeur de la publication :</strong> La Direction de {config.name}</p>
              <p><strong>Hébergement :</strong> Déploiement statique Netlify, Inc., 44 Montgomery St, Ste 300, San Francisco, CA 94104.</p>
            </div>

            <h3 className="font-serif-display text-lg font-bold text-[#0C1B2A] pt-2">
              Propriété Intellectuelle
            </h3>
            <p className="text-slate-600 text-xs">
              L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, plans, logos, marques) est protégé par le droit d'auteur et les dispositions du Code de la propriété intellectuelle français. Toute reproduction totale ou partielle sans autorisation expresse est strictement interdite.
            </p>

            <h3 className="font-serif-display text-lg font-bold text-[#0C1B2A] pt-2">
              Tarifs et Disponibilités
            </h3>
            <p className="text-slate-600 text-xs">
              Les prix affichés sur ce site de démonstration sont indicatifs. Les produits de la mer étant soumis aux aléas climatiques et aux arrivages journaliers des criées, la carte servie en salle peut présenter des variations.
            </p>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2 mb-2 text-emerald-700">
              <Lock className="w-5 h-5" />
              <span className="text-xs uppercase font-bold tracking-wider">Protection des Données (RGPD)</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0C1B2A]">
              Politique de Confidentialité
            </h2>

            <p className="text-slate-600 text-xs">
              Maison Marée s'engage à ce que la collecte et le traitement de vos données personnelles effectués à partir de ce site soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs">
              <p><strong>Données collectées :</strong> Nom, prénom, téléphone, email lors d'une demande de réservation ou de contact.</p>
              <p><strong>Finalité :</strong> Gestion exclusive des réservations de table et réponses aux demandes d'informations.</p>
              <p><strong>Conservation :</strong> Les données sont conservées pour la durée stricte nécessaire au traitement de votre venue au restaurant.</p>
              <p><strong>Vos droits :</strong> Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à {config.email}.</p>
            </div>
          </div>
        )}

        {type === 'cookies' && (
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2 mb-2 text-[#8C6D23]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs uppercase font-bold tracking-wider">Respect de la Vie Privée</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0C1B2A]">
              Gestion des Cookies & Traceurs
            </h2>

            <p className="text-slate-600 text-xs">
              Ce site web statique est conçu pour être rapide, sobre et respectueux de votre navigation.
            </p>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs">
              <p><strong>Cookies techniques essentiels :</strong> Nécessaires au bon fonctionnement de la navigation et à la mémorisation de vos préférences d'affichage.</p>
              <p><strong>Traceurs tiers ou publicitaires :</strong> Aucun traceur publicitaire invasif n'est activé sans votre consentement préalable.</p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-[#0C1B2A] text-white text-xs font-semibold uppercase tracking-wider"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
