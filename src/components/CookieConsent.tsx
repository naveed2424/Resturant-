import React, { useState, useEffect } from 'react';
import { Cookie, Check, X } from 'lucide-react';

interface CookieConsentProps {
  onOpenCookiesInfo: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenCookiesInfo }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('mm_cookie_consent');
    if (!hasConsented) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('mm_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('mm_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside 
      aria-label="Consentement aux cookies"
      className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#0C1B2A]/95 text-white border border-[#D4AF37]/40 rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-md animate-fadeIn"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="text-xs text-slate-200 leading-relaxed">
            Nous utilisons des témoins de navigation techniques pour vous garantir la meilleure expérience et mémoriser vos préférences de consultation.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              Accepter
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-medium uppercase tracking-wider transition-colors"
            >
              Continuer sans accepter
            </button>
            <button
              onClick={onOpenCookiesInfo}
              className="text-[11px] text-slate-400 hover:text-white underline ml-auto"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
