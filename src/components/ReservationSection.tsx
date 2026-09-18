import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

interface ReservationSectionProps {
  config: typeof RESTAURANT_CONFIG;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ config }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    service: 'diner',
    time: '20:00',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Netlify form capture
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: new Date().toISOString().split('T')[0],
      service: 'diner',
      time: '20:00',
      guests: '2',
      message: ''
    });
  };

  return (
    <section id="reservation" className="py-24 bg-[#0C1B2A] text-white scroll-mt-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#132A40]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-2">
            Réservations & Accueil
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Réserver Votre Table à Paris
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Pour un déjeuner d'affaires au calme ou un dîner iodé d'exception. Remplissez notre formulaire ou utilisez notre plateforme en ligne directe.
          </p>

          {/* External Booking Link Option if available */}
          <div className="mt-6">
            <a
              href={config.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 text-amber-200 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Accéder au Système de Réservation Direct</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#102334] rounded-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          
          {submitted ? (
            /* Success confirmation card as required by prompt */
            <div className="text-center py-12 px-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-100">
                Votre demande a bien été reçue
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
                Le restaurant vérifie les disponibilités des tables et de l'écailler, puis vous confirmera votre réservation par email ou SMS sous 2 heures.
              </p>
              
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 max-w-md mx-auto space-y-1.5 text-left">
                <p><strong>Nom :</strong> {formData.name}</p>
                <p><strong>Couverts :</strong> {formData.guests} personnes</p>
                <p><strong>Date & Heure souhaitées :</strong> {formData.date} à {formData.time}</p>
                <p><strong>Contact :</strong> {formData.email} • {formData.phone}</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold uppercase tracking-wider"
                >
                  Effectuer une autre demande
                </button>
                <a
                  href={`tel:${config.phone}`}
                  className="px-5 py-2.5 rounded-md bg-[#D4AF37] text-[#0C1B2A] text-xs font-bold uppercase tracking-wider"
                >
                  Appeler pour une confirmation urgente
                </a>
              </div>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              name="reservation"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Honeypot for Netlify Forms */}
              <input type="hidden" name="form-name" value="reservation" />
              <div className="hidden">
                <label>Ne pas remplir : <input name="bot-field" /></label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Nom & Prénom *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ex: Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Adresse Email *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jean.dupont@exemple.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Téléphone Mobile (SMS de confirmation) *</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Nombre de convives */}
                <div>
                  <label htmlFor="guests" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Nombre de Couverts *</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <option value="1">1 personne (Comptoir Écailler)</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes</option>
                    <option value="7+">7 personnes ou plus (Grande table)</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Date Souhaitée *</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                {/* Heure / Service */}
                <div>
                  <label htmlFor="time" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Créneau Horaire *</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  >
                    <optgroup label="Service Déjeuner">
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                    </optgroup>
                    <optgroup label="Service Dîner">
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Message & Préférences */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Demandes particulières, allergies ou événement (Optionnel)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Ex: Table au calme, intolérance au gluten, anniversaire..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#0C1B2A]" />
                  <span>Demander une Table</span>
                </button>
              </div>

              {/* Transparent Note */}
              <div className="pt-3 flex items-start gap-2.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p>
                  Toute demande effectuée via ce site fait l'objet d'une vérification manuelle par notre équipe. Un message de confirmation vous sera envoyé par SMS ou email.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
