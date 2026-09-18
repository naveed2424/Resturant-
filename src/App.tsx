/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MAISON MARÉE PARIS — APPLICATION VITRINE RESTAURANT DE FRUITS DE MER & BAR À HUÎTRES
 * Conçu pour un déploiement statique direct sur Netlify et facilement réutilisable pour d'autres établissements.
 */

import React, { useState, useEffect } from 'react';
import { RESTAURANT_CONFIG, RestaurantConfig } from './restaurantConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TodaysSeafood } from './components/TodaysSeafood';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CookieConsent } from './components/CookieConsent';
import { LegalModal } from './components/LegalModal';
import { NotFoundView } from './components/NotFoundView';
import { DemoCustomizer } from './components/DemoCustomizer';

export default function App() {
  const [config, setConfig] = useState<RestaurantConfig>(RESTAURANT_CONFIG);
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [legalModalType, setLegalModalType] = useState<'mentions' | 'privacy' | 'cookies' | null>(null);
  const [is404Active, setIs404Active] = useState<boolean>(false);

  // Sync window hash or routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '404') {
        setIs404Active(true);
      } else if (hash) {
        setIs404Active(false);
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (is404Active) {
      setIs404Active(false);
    }
    setActiveSection(sectionId);
    
    if (sectionId === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookClick = () => {
    handleNavigate('reservation');
  };

  const handleMenuClick = () => {
    handleNavigate('carte');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E293B] selection:bg-[#D4AF37]/30 selection:text-[#0C1B2A] pb-16 lg:pb-0">
      
      {/* Primary Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        config={config}
      />

      {is404Active ? (
        /* 404 Page View */
        <NotFoundView
          onGoHome={() => handleNavigate('accueil')}
          onGoMenu={() => handleNavigate('carte')}
          onGoBook={() => handleNavigate('reservation')}
          config={config}
        />
      ) : (
        /* Standard Restaurant Experience */
        <main id="main-content" className="flex-grow">
          {/* Hero Section */}
          <div id="accueil">
            <Hero
              onBookClick={handleBookClick}
              onMenuClick={handleMenuClick}
              config={config}
            />
          </div>

          {/* Today's Seafood Selection */}
          <TodaysSeafood
            onOrderOrBookClick={handleBookClick}
            config={config}
          />

          {/* Menu Section */}
          <MenuSection
            onBookClick={handleBookClick}
            config={config}
          />

          {/* About / Story Section */}
          <AboutSection config={config} />

          {/* Gallery Section */}
          <GallerySection config={config} />

          {/* Reviews & Social Proof Section */}
          <ReviewsSection config={config} />

          {/* Location & Opening Hours Section */}
          <LocationSection config={config} />

          {/* Online Reservation Module */}
          <ReservationSection config={config} />

          {/* Blog / Le Carnet de Marée */}
          <BlogSection config={config} />

          {/* FAQ Section */}
          <FaqSection config={config} />

          {/* Contact Section */}
          <ContactSection
            onBookClick={handleBookClick}
            config={config}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
        config={config}
      />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar
        onBookClick={handleBookClick}
        config={config}
      />

      {/* Cookie Consent Banner */}
      <CookieConsent
        onOpenCookiesInfo={() => setLegalModalType('cookies')}
      />

      {/* Legal / Privacy / Cookie Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        config={config}
      />

      {/* Live Sales Demo Customizer Drawer */}
      <DemoCustomizer
        currentConfig={config}
        onUpdateConfig={(newConfig) => setConfig(newConfig)}
        onReset={() => setConfig(RESTAURANT_CONFIG)}
        onTest404={() => setIs404Active(!is404Active)}
        is404Active={is404Active}
      />

    </div>
  );
}
