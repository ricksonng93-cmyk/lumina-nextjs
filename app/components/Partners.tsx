'use client';
import React, { useState } from 'react';
import { Handshake, Shield, TrendingUp, Layers, UserPlus, Send, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from './shared';

export default function Partners({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const [formType, setFormType] = useState<'apporteur' | 'rejoindre'>('apporteur');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', experience: '' });
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mgoljvnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formType === 'apporteur' ? 'Apporteur d\'affaires' : 'Candidature équipe',
          name: form.name, email: form.email, phone: form.phone,
          experience: form.experience, message: form.message,
        }),
      });
      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', message: '', experience: '' });
        setTimeout(() => setSent(false), 5000);
      }
    } catch (error) {
      console.error('Erreur envoi formulaire');
    }
  };

  return (
    <div>
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <Handshake size={16} /> Programme Partenaires
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">LUMINA Partners</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto fade-in-up delay-2">Valorisez votre réseau avec un partenaire technologique fiable</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Pourquoi nous rejoindre ?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Recommander LUMINA, c&apos;est offrir l&apos;excellence à votre réseau tout en bénéficiant d&apos;avantages exclusifs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Fiabilité Technique', desc: 'Ne craignez plus les projets inachevés. Avec notre rigueur d\'ingénieur et nos standards internationaux, vos contacts sont entre de bonnes mains.', color: 'bg-blue-50 text-blue-600' },
              { icon: TrendingUp, title: 'Commissions Attractives', desc: 'Bénéficiez d\'un pourcentage transparent sur chaque contrat généré. Un modèle gagnant-gagnant clair dès le premier jour.', color: 'bg-emerald-50 text-emerald-600' },
              { icon: Layers, title: 'Offre Complète', desc: 'Du site vitrine à l\'IA complexe, nous couvrons tous les besoins digitaux. Vous ne manquerez aucune opportunité de recommandation.', color: 'bg-violet-50 text-violet-600' },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all bg-white">
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Prêt à collaborer ?</h2>
            <p className="text-slate-600">Remplissez ce formulaire pour rejoindre notre réseau de partenaires.</p>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setFormType('apporteur')} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${formType === 'apporteur' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
              <Handshake size={18} /> Apporteur d&apos;affaires
            </button>
            <button onClick={() => setFormType('rejoindre')} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${formType === 'rejoindre' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
              <UserPlus size={18} /> Nous rejoindre
            </button>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-10 shadow-sm">
            {sent ? (
              <div className="text-center py-12 scale-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Candidature envoyée !</h3>
                <p className="text-slate-600">Nous vous contacterons sous 48h</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet *</label>
                    <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email professionnel *</label>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="votre@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white" placeholder="+242 XX XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {formType === 'apporteur' ? 'Expérience en apport d\'affaires' : 'Votre domaine d\'expertise'}
                    </label>
                    <select value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white h-[50px]">
                      <option value="">Sélectionnez</option>
                      {formType === 'apporteur' ? (
                        <>
                          <option value="debutant">Je débute</option>
                          <option value="quelques">Quelques expériences</option>
                          <option value="confirme">Confirmé</option>
                        </>
                      ) : (
                        <>
                          <option value="dev">Développement Web/Mobile</option>
                          <option value="design">Design / UX</option>
                          <option value="marketing">Marketing Digital</option>
                          <option value="commercial">Commercial</option>
                          <option value="autre">Autre</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {formType === 'apporteur' ? 'Décrivez votre réseau' : 'Pourquoi souhaitez-vous nous rejoindre ?'}
                  </label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none input-focus bg-white resize-none" placeholder={formType === 'apporteur' ? 'Parlez-nous de votre réseau professionnel...' : 'Parlez-nous de vous et de vos motivations...'} />
                </div>
                <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-semibold text-lg btn-dark">
                  <Send size={20} /> Envoyer ma candidature
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
