'use client';
import React from 'react';
import {
  Layers, Globe, Palette, Code, Smartphone, ShoppingCart, Brush, FileText,
  Megaphone, Shield, Wrench, GraduationCap, ArrowRight, CheckCircle2
} from 'lucide-react';
import { useScrollReveal } from './shared';

export default function Services({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const data = [
    { id: 'sites-web', cat: 'Sites Web & Applications', icon: Globe, color: 'blue', items: [
      { name: 'Pack Starter', price: '150 000 FCFA', icon: Code, feat: ['Site vitrine 1-5 pages','Design responsive','Formulaire contact','SEO basique','Hébergement 1 an'] },
      { name: 'Pack Pro', price: '520 000 FCFA', icon: Smartphone, pop: true, feat: ['Pages illimitées','Design premium','Chatbot IA intégré (option)','SEO optimisé','Blog intégré','Support 6 mois'] },
      { name: 'E-commerce', price: 'Sur devis', icon: ShoppingCart, feat: ['Boutique complète','Paiement sécurisé','Gestion stock','Formation','Support continu'] },
    ]},
    { id: 'branding', cat: 'Branding', icon: Palette, color: 'violet', items: [
      { name: 'Identité Visuelle', price: '75 000 FCFA', icon: Brush, feat: ['Logo professionnel','Charte graphique','Palette couleurs','3 propositions','Révisions illimitées'] },
      { name: 'Design Complet', price: '200 000 FCFA', icon: FileText, pop: true, feat: ['Tout du pack Identité','Cartes visite','Templates réseaux sociaux','Guide de marque'] },
      { name: 'Marketing Digital', price: 'Sur devis', icon: Megaphone, feat: ['Stratégie contenu','Gestion réseaux sociaux','Campagnes pub','Email marketing','Analytics'] },
    ]},
  ];

  const colors: Record<string, { bg: string; text: string; border: string; light: string; accent: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', light: 'bg-blue-50', accent: 'bg-blue-600' },
    violet: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200', light: 'bg-violet-50', accent: 'bg-violet-600' },
  };

  return (
    <div>
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <Layers size={16} /> Expertise & Solutions
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">Nos Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto fade-in-up delay-2">Solutions digitales complètes et sur mesure pour propulser votre activité</p>
        </div>
      </section>

      {data.map((pkg, idx) => {
        const c = colors[pkg.color];
        return (
          <section key={pkg.cat} id={pkg.id} className={idx % 2 === 0 ? 'bg-white py-20' : 'bg-slate-50 py-20'}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                  <pkg.icon size={22} />
                  <span className="font-semibold">{pkg.cat}</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {pkg.items.map((item, i) => (
                  <div key={item.name} className={`relative rounded-2xl p-6 lg:p-8 card-hover bg-white ${item.pop ? `border-2 ${c.border} shadow-xl` : 'border-2 border-slate-100 hover:border-slate-200'}`} style={{animationDelay: `${i * 0.1}s`}}>
                    {item.pop && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 ${c.accent} text-white text-sm rounded-full font-semibold`}>Populaire</span>}
                    <div className={`w-12 h-12 rounded-xl ${c.light} ${c.text} flex items-center justify-center mb-5`}><item.icon size={24} /></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                    <div className={`text-2xl lg:text-3xl font-bold ${c.text} mb-5`}>{item.price}</div>
                    <ul className="space-y-3 mb-8">
                      {item.feat.map(f => <li key={f} className="flex items-start gap-2"><CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">{f}</span></li>)}
                    </ul>
                    <button onClick={() => nav('contact')} className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${item.pop ? `${c.accent} text-white hover:opacity-90` : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                      Demander un devis <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section id="lumina-education" className="py-20 bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                <GraduationCap size={18} /> Nouveau : Plateforme SaaS
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">LUMINA Education</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                La plateforme tout-en-un pour gérer votre établissement scolaire. Notes, bulletins, SMS aux parents, paiements... Tout au même endroit.
              </p>
              <ul className="space-y-3 mb-8">
                {['Gestion des élèves et classes','Notes et bulletins automatiques','Envoi SMS/Email aux parents','Suivi des paiements scolarité','Espace parents sécurisé'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-orange-500" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => nav('education')} className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all font-semibold flex items-center gap-2">
                  Découvrir LUMINA Education <ArrowRight size={18} />
                </button>
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-orange-200">
                  <span className="text-slate-500 text-sm">À partir de</span>
                  <span className="text-xl font-bold text-orange-600">60 000 FCFA</span>
                  <span className="text-slate-500 text-sm">/mois</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">École Saint-Joseph</p>
                    <p className="text-xs text-slate-500">Dashboard administrateur</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">342</p>
                    <p className="text-xs font-medium text-slate-600">Élèves</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">12</p>
                    <p className="text-xs font-medium text-slate-600">Classes</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">89%</p>
                    <p className="text-xs font-medium text-slate-600">Paiements</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">24</p>
                    <p className="text-xs font-medium text-slate-600">Profs</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-green-700">Bulletins ce mois</span>
                  <span className="text-lg font-bold text-green-700">156</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-lg">
                Essai gratuit 30 jours
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="maintenance" className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
              <Shield size={22} /><span className="font-semibold">Maintenance & Support</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-6">Restez serein</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Maintenance Basique', price: '25 000 FCFA/mois', icon: Wrench, feat: ['Mises à jour sécurité','Sauvegardes hebdo','Support email','Corrections bugs'], pop: false },
              { name: 'Maintenance Premium', price: '50 000 FCFA/mois', icon: Shield, pop: true, feat: ['Tout basique','MAJ contenu 2h/mois','Support prioritaire','Sauvegardes quotidiennes','Monitoring','Rapports mensuels'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 lg:p-8 card-hover bg-white ${plan.pop ? 'border-2 border-blue-300 shadow-xl' : 'border-2 border-slate-100'}`}>
                {plan.pop && <span className="inline-block mb-4 px-4 py-1 bg-blue-600 text-white text-sm rounded-full font-semibold">Recommandé</span>}
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5"><plan.icon size={24} /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-5">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.feat.map(f => <li key={f} className="flex items-start gap-2"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">{f}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Besoin d&apos;un service sur mesure ?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Chaque projet est unique. Contactez-nous pour un devis personnalisé gratuit.
          </p>
          <button onClick={() => nav('contact')} className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto font-semibold text-lg btn-dark">
            Demander un devis gratuit <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
