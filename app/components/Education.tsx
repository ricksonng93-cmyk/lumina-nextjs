'use client';
import React, { useState } from 'react';
import {
  GraduationCap, Users, FileText, MessageCircle, Wallet, Shield,
  TrendingUp, Layers, Settings, CreditCard, CheckCircle2, ArrowRight
} from 'lucide-react';
import { useScrollReveal } from './shared';

export default function Education({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const features = [
    { icon: Users, title: 'Gestion des élèves', desc: 'Inscriptions, fiches élèves, affectation aux classes, historique complet' },
    { icon: FileText, title: 'Notes & Bulletins', desc: 'Saisie des notes, calcul automatique des moyennes, génération PDF des bulletins' },
    { icon: MessageCircle, title: 'Communication Parents', desc: 'Envoi SMS et emails groupés : résultats, absences, informations importantes' },
    { icon: Wallet, title: 'Suivi Paiements', desc: 'Gestion des frais de scolarité, relances automatiques, rapports financiers' },
    { icon: Shield, title: 'Espace Parents', desc: 'Portail sécurisé pour consulter notes, bulletins et informations de l\'enfant' },
    { icon: TrendingUp, title: 'Statistiques', desc: 'Tableaux de bord, analyses des performances, rapports personnalisés' },
  ];

  const plans = [
    { name: 'Starter', price: '60 000', period: '/mois', students: 'Jusqu\'à 200 élèves', features: ['Gestion élèves & classes', 'Notes et bulletins PDF', 'Espace parents', 'Support email'], cta: 'Commencer l\'essai gratuit', popular: false },
    { name: 'Pro', price: '110 000', period: '/mois', students: 'Jusqu\'à 500 élèves', features: ['Tout de Starter', 'Envoi SMS aux parents', 'Suivi des paiements', 'Rapports avancés', 'Support prioritaire'], cta: 'Commencer l\'essai gratuit', popular: true },
    { name: 'Premium', price: '180 000', period: '/mois', students: 'Élèves illimités', features: ['Tout de Pro', 'Multi-établissements', 'API personnalisée', 'Formation sur site', 'Support dédié 24/7'], cta: 'Nous contacter', popular: false },
  ];

  const faqs = [
    { q: 'Comment fonctionne l\'essai gratuit ?', a: 'Vous avez 30 jours pour tester toutes les fonctionnalités sans engagement. Aucune carte bancaire requise.' },
    { q: 'Puis-je migrer mes données existantes ?', a: 'Oui, notre équipe vous accompagne gratuitement dans la migration de vos données depuis Excel ou tout autre système.' },
    { q: 'Le système fonctionne-t-il hors connexion ?', a: 'L\'application nécessite une connexion internet, mais les bulletins PDF peuvent être téléchargés et consultés hors ligne.' },
    { q: 'Comment sont envoyés les SMS aux parents ?', a: 'Vous rédigez votre message, sélectionnez les destinataires (classe, niveau, ou individuel) et envoyez. Les SMS sont facturés en supplément selon votre consommation.' },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <section className="bg-orange-500 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 fade-in-up">
                <GraduationCap size={18} /> Plateforme de gestion scolaire
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight fade-in-up delay-1">
                Gérez votre école <br/>en toute simplicité
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed fade-in-up delay-2">
                Notes, bulletins, communication parents, paiements... Tout ce dont votre établissement a besoin, dans une seule plateforme.
              </p>
              <div className="flex flex-wrap gap-4 fade-in-up delay-3">
                <button onClick={() => nav('contact')} className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all font-semibold flex items-center gap-2">
                  Essai gratuit 30 jours <ArrowRight size={20} />
                </button>
                <button onClick={() => nav('contact')} className="px-8 py-4 border-2 border-white/50 text-white rounded-xl hover:bg-white/10 transition-all font-semibold">
                  Demander une démo
                </button>
              </div>
              <p className="text-orange-200 text-sm mt-4 flex items-center gap-2">
                <CheckCircle2 size={16} /> Aucune carte bancaire requise
              </p>
            </div>
            <div className="relative fade-in-right delay-2">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">LUMINA Education</p>
                    <p className="text-xs text-slate-500">Tableau de bord</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">487</p>
                    <p className="text-xs font-medium text-slate-600">Élèves</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">18</p>
                    <p className="text-xs font-medium text-slate-600">Classes</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">94%</p>
                    <p className="text-xs font-medium text-slate-600">Paiements</p>
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-slate-900">156</p>
                    <p className="text-xs font-medium text-slate-600">SMS</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-slate-900" />
                  <span className="text-sm font-semibold text-slate-900">Bulletins CM1 générés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-4">
              <Layers size={16} /> Fonctionnalités
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Tout ce dont votre école a besoin</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Une solution complète pour simplifier la gestion de votre établissement</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <f.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
              <Settings size={16} /> Étape 1
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Mise en place</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Nous construisons votre plateforme sur mesure selon vos besoins</p>
          </div>
          <div className="max-w-3xl mx-auto mb-20">
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Ce qui est inclus :</h3>
                  <ul className="space-y-3">
                    {['Analyse de vos besoins spécifiques', 'Développement personnalisé', 'Import de vos données existantes', 'Personnalisation (logo, couleurs)', 'Formation de votre équipe', '1 mois de support inclus'].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center items-center text-center bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-500 mb-2">Prix</p>
                  <p className="text-3xl font-bold text-slate-900 mb-4">Sur devis</p>
                  <p className="text-sm text-slate-500 mb-6">Adapté à la taille et aux besoins de votre établissement</p>
                  <button onClick={() => nav('contact')} className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    Demander un devis gratuit <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-16"></div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
              <CreditCard size={16} /> Étape 2
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Abonnement mensuel</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choisissez la formule adaptée à votre établissement</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-orange-500 text-white scale-105 shadow-2xl' : 'bg-white border-2 border-slate-200'}`}>
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-900 text-white text-sm rounded-full font-semibold">Populaire</span>}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-orange-100' : 'text-slate-500'}`}>{plan.students}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-orange-500'}`}>{plan.price}</span>
                  <span className={plan.popular ? 'text-orange-100' : 'text-slate-500'}>FCFA{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className={plan.popular ? 'text-orange-200' : 'text-emerald-500'} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-slate-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => nav('contact')} className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-white text-orange-500 hover:bg-orange-50' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ArrowRight size={20} className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Prêt à moderniser votre école ?</h2>
          <p className="text-xl text-orange-100 mb-8">Rejoignez les établissements qui ont déjà simplifié leur gestion avec LUMINA Education.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => nav('contact')} className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-orange-50 transition-all font-semibold flex items-center gap-2">
              Démarrer l&apos;essai gratuit <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-orange-200 text-sm mt-6">30 jours gratuits • Aucune carte bancaire • Annulation à tout moment</p>
        </div>
      </section>
    </div>
  );
}
