import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface ContactSectionProps {
  onBookClick: () => void;
  config: typeof RESTAURANT_CONFIG;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookClick, config }) => {
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Renseignement général',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white text-[#0C1B2A] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-2">
            Échange & Informations
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1B2A] mb-4">
            Prendre Contact Avec Notre Équipe
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Pour une demande de privatisation, un groupe, une commande de plateaux de fruits de mer à emporter ou toute question particulière.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0C1B2A] text-white shadow-xl space-y-6">
              <h3 className="font-serif-display text-2xl font-bold text-slate-100 mb-2">
                Coordonnées Directes
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Notre accueil téléphonique et notre messagerie sont ouverts chaque jour de service.
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href={`tel:${config.phone}`}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Téléphone direct</span>
                    <strong className="text-base text-white">{config.phoneDisplay}</strong>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/40 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-emerald-300 block">WhatsApp Officiel</span>
                    <strong className="text-base text-emerald-100">Discuter en Direct</strong>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Courrier électronique</span>
                    <strong className="text-sm text-white">{config.email}</strong>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Adresse à Paris</span>
                    <span className="text-sm text-slate-200 block">{config.address}</span>
                    <span className="text-xs text-slate-400">{config.neighborhood}, {config.postalCode}</span>
                  </div>
                </div>
              </div>

              {/* Quick Book CTA in Contact */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onBookClick}
                  className="w-full py-3 rounded-md bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider transition-colors shadow"
                >
                  Réserver une Table Maintenant
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Netlify Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F6] border border-slate-200 shadow-sm">
              <h3 className="font-serif-display text-2xl font-bold text-[#0C1B2A] mb-2">
                Envoyer un Message
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Remplissez ce formulaire et notre maître d'hôtel vous répondra dans les meilleurs délais.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-white border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif-display text-2xl font-bold text-[#0C1B2A]">
                    Message Envoyé Avec Succès
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Merci {contactForm.name}. Votre demande a bien été transmise à l'équipe de Maison Marée Paris. Nous vous recontacterons à l'adresse {contactForm.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setContactForm({ name: '', email: '', phone: '', subject: 'Renseignement général', message: '' });
                    }}
                    className="px-4 py-2 text-xs uppercase font-semibold text-slate-700 bg-slate-100 rounded hover:bg-slate-200"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <label>Ne pas remplir : <input name="bot-field" /></label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Nom & Prénom *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Ex: Sophie Martin"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        placeholder="sophie.martin@exemple.fr"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        placeholder="06 00 00 00 00"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Objet de la Demande
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]"
                      >
                        <option value="Renseignement général">Renseignement général</option>
                        <option value="Privatisation ou Groupe">Privatisation & Événement</option>
                        <option value="Plateaux de fruits de mer à emporter">Commande à emporter</option>
                        <option value="Allergies & Carte">Question sur la carte / Allergies</option>
                        <option value="Presse & Partenariats">Presse & Partenariats</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Votre Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Comment pouvons-nous vous renseigner ?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#0C1B2A] hover:bg-[#132A40] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Envoyer le Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
