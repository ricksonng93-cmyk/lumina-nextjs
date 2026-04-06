'use client';
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Clock, MapPin, CheckCircle2, Send } from 'lucide-react';
import { useScrollReveal } from './shared';

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('https://formspree.io/f/mgoljvnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, service: form.service, message: form.message }),
      });
      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
    }
    setSending(false);
  };

  const info = [
    { icon: Phone, title: 'Téléphone CG', value: '+242 06 404 54 04', link: 'tel:+242044054004' },
    { icon: Phone, title: 'Téléphone FR', value: '+33 07 58 17 26 93', link: 'tel:+330758172693' },
    { icon: Mail, title: 'Email', value: 'contact@lumina-cg.com', link: 'mailto:contact@lumina-cg.com' },
    { icon: Clock, title: 'Horaires', value: 'Lun - Ven: 8h - 18h' },
  ];
  const services = ['Site Vitrine','Site E-commerce','Application Web','Branding','Marketing Digital','Solution École','Maintenance','Autre'];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <MessageCircle size={16} /> Contact & Échanges
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">Parlons de votre projet</h1>
          <p className="text-xl text-slate-300 fade-in-up delay-2">Une idée ? Un besoin technique ? Discutons de la manière dont nous pouvons collaborer.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {info.map((i, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 card-hover bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <i.icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 font-medium mb-0.5">{i.title}</p>
                    {i.link ? (
                      <a href={i.link} className="text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors block truncate">{i.value}</a>
                    ) : (
                      <p className="text-slate-900 font-semibold text-sm truncate">{i.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h2>
                <p className="text-slate-600">Nous répondons généralement sous 24h ouvrées.</p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 lg:p-8 bg-white shadow-sm">
                {sent ? (
                  <div className="text-center py-12 scale-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} /></div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                    <p className="text-slate-600">Nous vous répondrons sous 24h</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet *</label>
                        <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="votre@email.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone</label>
                        <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="+242 XX XXX XXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Sujet de la demande *</label>
                        <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white h-[50px]">
                          <option value="">Sélectionnez un sujet</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Détails du projet *</label>
                      <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} required rows={5} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white resize-none" placeholder="Parlez-nous de vos objectifs, de votre budget estimé et de vos délais..." />
                    </div>
                    <button type="submit" disabled={sending} className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-semibold text-lg btn-dark disabled:opacity-50">
                      <Send size={20} /> {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp Direct</h3>
                <p className="text-slate-600 text-sm mb-4">Pour une réponse plus rapide, contactez-nous directement sur WhatsApp.</p>
                <a href="https://wa.me/33758172693" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Direct
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-slate-400 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Siège</p>
                      <p className="text-slate-600 text-sm">Paris, France & Brazzaville, Congo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-slate-400 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Horaires</p>
                      <p className="text-slate-600 text-sm">Lun - Ven : 8h00 - 18h00</p>
                      <p className="text-slate-600 text-sm">Sam : 9h00 - 13h00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Nos engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-emerald-400" />Réponse garantie sous 24h</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-emerald-400" />Devis gratuit et sans engagement</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-emerald-400" />Accompagnement personnalisé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-medium mb-4">
              <MapPin size={16} /> Notre localisation
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Situés à Paris & Brazzaville</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entre Paris et Brazzaville, nous accompagnons les entreprises dans leur transformation digitale
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl lg:text-4xl font-bold text-violet-600 mb-2">&lt; 24h</div>
              <div className="text-slate-600 text-sm font-medium">Temps de réponse</div>
            </div>
            <div className="text-center p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-slate-600 text-sm font-medium">Devis gratuits</div>
            </div>
            <div className="text-center p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">6j/7</div>
              <div className="text-slate-600 text-sm font-medium">Disponibilité</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
