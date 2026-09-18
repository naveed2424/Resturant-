import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Calendar, Compass, ShieldCheck, Heart } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: 'mentions' | 'privacy' | 'cookies') => void;
  config: typeof RESTAURANT_CONFIG;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal, config }) => {
  return (
    <footer className="bg-[#07131F] text-slate-300 border-t border-slate-800 text-sm">
      {/* Top Banner with Reservation Reminder */}
      <div className="bg-[#0C1B2A] border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-2">
            Votre Table Vous Attend
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Une Envie d'Iode en Plein Cœur de Paris ?
          </h2>
          <p className="text-sm text-slate-300 mb-6 max-w-xl mx-auto">
            Plateaux de fruits de mer écaillés minute, poissons sauvages et verres de Chablis. Pensez à réserver votre table avant votre venue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('reservation')}
              className="px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider transition-colors shadow"
            >
              Réserver Votre Table
            </button>
            <a
              href={`tel:${config.phone}`}
              className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-colors"
            >
              Appeler : {config.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Branding & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#132A40] border border-[#D4AF37] flex items-center justify-center p-1.5 shadow">
                <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                  <path d="M20 7C12 7 8 16 8 23C8 30 13 33 20 33C27 33 32 30 32 23C32 16 28 7 20 7Z" stroke="#D4AF37" strokeWidth="2" />
                  <circle cx="20" cy="24" r="3.5" fill="#F8FAFC" />
                </svg>
              </div>
              <span className="font-serif-display text-2xl font-bold text-white">
                {config.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {config.tagline}. Bar à huîtres et cuisine maritime de tradition française au cœur du quartier historique de Saint-Germain-des-Prés à Paris.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Instagram de Maison Marée Paris"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Facebook de Maison Marée Paris"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={config.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#D4AF37] hover:text-[#0C1B2A] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white tracking-wider mb-4 uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('accueil')} className="hover:text-white transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('carte')} className="hover:text-white transition-colors">
                  La Carte & Huîtres
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('selection')} className="hover:text-white transition-colors">
                  Sélection du Jour
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('histoire')} className="hover:text-white transition-colors">
                  Notre Histoire
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('galerie')} className="hover:text-white transition-colors">
                  Galerie Photo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('avis')} className="hover:text-white transition-colors">
                  Avis Clients
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Le Carnet de Marée
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reservation')} className="text-[#D4AF37] font-semibold hover:underline">
                  Réservation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordonnées NAP */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white tracking-wider mb-4 uppercase">
              Adresse & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p className="text-white font-medium">
                {config.name}
              </p>
              <p>{config.address}</p>
              <p>{config.neighborhood}, {config.postalCode}</p>
              <p className="pt-1 text-slate-300 font-mono">
                Tél : <a href={`tel:${config.phone}`} className="hover:text-white underline">{config.phoneDisplay}</a>
              </p>
              <p>
                Email : <a href={`mailto:${config.email}`} className="hover:text-white underline">{config.email}</a>
              </p>
              <p className="text-slate-400">
                {config.metroStation}
              </p>
            </div>
          </div>

          {/* Col 4: Horaires de service */}
          <div>
            <h4 className="font-serif-display text-base font-bold text-white tracking-wider mb-4 uppercase">
              Horaires de Service
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p><strong className="text-slate-200">Mardi – Samedi :</strong></p>
              <p className="pl-2">12h00 – 14h30 / 19h00 – 23h30</p>
              <p className="pt-2"><strong className="text-slate-200">Dimanche :</strong></p>
              <p className="pl-2">12h00 – 16h00 (Service continu)</p>
              <p className="pt-2"><strong className="text-slate-200">Lundi :</strong></p>
              <p className="pl-2">19h00 – 23h00 (Dîner uniquement)</p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Credits */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {config.name}. Tous droits réservés.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenLegal('mentions')}
              className="hover:text-slate-300 transition-colors"
            >
              Mentions Légales
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Politique de Confidentialité
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-slate-300 transition-colors"
            >
              Gestion des Cookies
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
