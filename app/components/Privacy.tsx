'use client';
import React from 'react';
import { Shield, Lock, Mail, FileText, CheckCircle2 } from 'lucide-react';

export default function Privacy({ nav }: { nav: (p: string) => void }) {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6">
            <Shield size={16} /> Données & Transparence
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-slate-300">Dernière mise à jour : Février 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Chez <strong>LUMINA</strong>, la confidentialité n&apos;est pas une option, c&apos;est le fondement de la confiance que vous nous accordez. En tant qu&apos;entreprise de services numériques opérant selon des standards d&apos;ingénierie internationaux, nous nous engageons à protéger vos données personnelles avec la plus grande rigueur.
            </p>
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">1</div>
                  <h2 className="text-xl font-bold text-slate-900">Collecte des données</h2>
                </div>
                <p className="text-slate-600 mb-4">Nous collectons uniquement les données strictement nécessaires au bon fonctionnement de nos services et à notre relation commerciale. Cela inclut :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-1" /><span className="text-slate-600"><strong>Données d&apos;identification :</strong> Nom, prénom, adresse email, numéro de téléphone (via le formulaire de contact)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-1" /><span className="text-slate-600"><strong>Données professionnelles :</strong> Nom de l&apos;entreprise, poste occupé, projet envisagé</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-1" /><span className="text-slate-600"><strong>Données techniques :</strong> Adresse IP, type de navigateur (à des fins de sécurité et de statistiques anonymes)</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">2</div>
                  <h2 className="text-xl font-bold text-slate-900">Utilisation des données</h2>
                </div>
                <p className="text-slate-600 mb-4">Vos données sont traitées pour des finalités déterminées, explicites et légitimes :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <Mail size={20} className="text-blue-500 mb-2" />
                    <h3 className="font-semibold text-slate-900 mb-1">Communication</h3>
                    <p className="text-sm text-slate-600">Répondre à vos demandes de devis et questions techniques</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <FileText size={20} className="text-blue-500 mb-2" />
                    <h3 className="font-semibold text-slate-900 mb-1">Contractuel</h3>
                    <p className="text-sm text-slate-600">Exécution des contrats de prestation de services et facturation</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">3</div>
                  <h2 className="text-xl font-bold text-slate-900">Protection & Sécurité</h2>
                </div>
                <p className="text-slate-600 mb-4">Nous appliquons une politique de <strong>&ldquo;Security by Design&rdquo;</strong>. Vos données sont stockées sur des serveurs sécurisés et protégées par des protocoles de chiffrement avancés.</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-blue-800 text-sm flex items-start gap-2">
                    <Lock size={16} className="flex-shrink-0 mt-0.5" />
                    L&apos;accès à vos données personnelles est strictement limité aux employés de LUMINA habilités en raison de leurs fonctions et tenus à une obligation de confidentialité.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">4</div>
                  <h2 className="text-xl font-bold text-slate-900">Partage & Tiers</h2>
                </div>
                <p className="text-slate-600">
                  <strong>Nous ne vendons jamais vos données.</strong> Elles peuvent être partagées uniquement avec nos sous-traitants techniques (hébergement, outils emailing) qui respectent les mêmes normes de confidentialité strictes. Aucune donnée n&apos;est transférée hors de nos infrastructures sécurisées sans votre consentement.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">5</div>
                  <h2 className="text-xl font-bold text-slate-900">Vos Droits</h2>
                </div>
                <p className="text-slate-600 mb-4">Conformément à la réglementation, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données.</p>
                <div className="bg-slate-900 text-white rounded-xl p-5">
                  <h3 className="font-semibold mb-2">Exercer vos droits</h3>
                  <p className="text-slate-300 text-sm mb-3">Pour toute demande concernant vos données personnelles :</p>
                  <a href="mailto:contact@lumina-cg.com" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-medium text-sm hover:bg-slate-100 transition-colors">
                    <Mail size={16} /> contact@lumina-cg.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Des questions ?</h2>
          <p className="text-slate-600 mb-6">Notre équipe est disponible pour répondre à toutes vos interrogations concernant la protection de vos données.</p>
          <button onClick={() => nav('contact')} className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-semibold btn-dark">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}
