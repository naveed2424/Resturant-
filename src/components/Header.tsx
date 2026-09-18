import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, MessageCircle, Calendar } from 'lucide-react';
import { RESTAURANT_CONFIG, getCurrentOpeningStatus } from '../restaurantConfig';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  config: typeof RESTAURANT_CONFIG;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openingStatus = getCurrentOpeningStatus(config.openingHours);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'carte', label: 'La Carte' },
    { id: 'selection', label: 'Sélection Iodée' },
    { id: 'histoire', label: 'Notre Histoire' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'avis', label: 'Avis' },
    { id: 'horaires', label: 'Horaires & Accès' },
    { id: 'blog', label: 'Le Carnet' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0C1B2A]/95 backdrop-blur-md text-white border-b border-[#1E293B] shadow-sm transition-all">
      {/* Top Banner: Localisation, statut en direct & Appel */}
      <div className="hidden lg:block bg-[#08131E] text-xs text-slate-300 py-1.5 px-4 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-amber-200/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {config.neighborhood}, {config.locationCity}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className={`inline-block w-2 h-2 rounded-full ${openingStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {openingStatus.statusText}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${config.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Appeler le restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Réservations & Accueil : <strong className="text-white">{config.phoneDisplay}</strong></span>
            </a>
            <a 
              href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition-colors"
              title="Discuter sur WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Branding */}
          <button 
            onClick={() => handleNavClick('accueil')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Retour à l'accueil"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#132A40] to-[#0A1826] border border-[#D4AF37]/50 flex items-center justify-center p-2 shadow-inner group-hover:border-[#D4AF37] transition-colors">
              <svg viewBox="0 0 40 40" className="w-full h-full" fill="none">
                <path d="M20 7C12 7 8 16 8 23C8 30 13 33 20 33C27 33 32 30 32 23C32 16 28 7 20 7Z" stroke="#D4AF37" strokeWidth="2" />
                <path d="M20 10C15 13 12 18 12 24C12 28 15 30 20 30C25 30 28 28 28 24C28 18 25 13 20 10Z" stroke="#E6C875" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="20" cy="24" r="3.5" fill="#F8FAFC" />
              </svg>
            </div>
            <div>
              <span className="block font-serif-display text-2xl tracking-wider text-slate-100 font-bold group-hover:text-amber-200 transition-colors">
                {config.name}
              </span>
              <span className="block text-[11px] tracking-widest text-[#D4AF37] uppercase font-medium">
                {config.type}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Navigation principale">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm tracking-wide font-medium rounded-md transition-all ${
                    isActive
                      ? 'text-[#D4AF37] bg-white/5 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('reservation')}
              className="px-5 py-2.5 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] font-semibold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform active:scale-98 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#0C1B2A]" />
              <span>Réserver</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#08131E] border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn">
          {/* Quick status on mobile drawer */}
          <div className="flex items-center justify-between py-2 px-3 mb-3 bg-slate-900/90 rounded-md text-xs border border-slate-800">
            <span className="text-slate-300">{config.neighborhood}, Paris</span>
            <span className="text-amber-200 flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${openingStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {openingStatus.statusText}
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 space-y-2.5">
            <button
              onClick={() => handleNavClick('reservation')}
              className="w-full py-3 rounded-md bg-[#D4AF37] text-[#0C1B2A] font-bold text-center text-sm uppercase tracking-wider shadow"
            >
              Réserver une Table
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${config.phone}`}
                className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-xs font-medium text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                {config.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/40 rounded-md text-xs font-medium text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
