'use client';
import React, { useState } from 'react';
import { CheckCircle2, Shield, Lock, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ nav, navToService }: { nav: (p: string) => void; navToService: (s: string) => void }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mgoljvnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'Newsletter', email }),
      });
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      }
    } catch (error) {
      console.error('Erreur newsletter');
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Lumina" className="w-10 h-10 object-contain brightness-0 invert" />
              <span className="text-xl font-bold tracking-tight">LUMINA</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm mb-4">
              Créateur d&apos;expériences numériques sur mesure. Du concept au déploiement, nous transformons vos ambitions en solutions concrètes.
            </p>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-emerald-400" />
              <span className="text-xs text-slate-400">Données protégées</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-2 text-sm">
              <button onClick={() => navToService('sites-web')} className="block text-slate-400 hover:text-white transition-colors text-left">Sites Web & Applications</button>
              <button onClick={() => navToService('branding')} className="block text-slate-400 hover:text-white transition-colors text-left">Branding</button>
              <button onClick={() => navToService('lumina-education')} className="block text-slate-400 hover:text-white transition-colors text-left">LUMINA Education</button>
              <button onClick={() => navToService('maintenance')} className="block text-slate-400 hover:text-white transition-colors text-left">Maintenance</button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Entreprise</h4>
            <div className="space-y-2 text-sm">
              {[['a-propos','À propos'],['partners','LUMINA Partners'],['contact','Contact']].map(([p,l]) => (
                <button key={p} onClick={() => nav(p)} className="block text-slate-400 hover:text-white transition-colors text-left">{l}</button>
              ))}
              <button onClick={() => nav('privacy')} className="block text-slate-400 hover:text-white transition-colors text-left">Politique de confidentialité</button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-3">Restez informé de nos actualités</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle2 size={16} /> Inscrit !
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                  S&apos;inscrire
                </button>
              </form>
            )}
            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              <Lock size={10} /> Pas de spam. Données protégées.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a href="tel:+242044054004" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Phone size={14} /> +242 06 404 54 04
            </a>
            <a href="tel:+330758172693" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Phone size={14} /> +33 07 58 17 26 93
            </a>
            <a href="mailto:contact@lumina-cg.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Mail size={14} /> contact@lumina-cg.com
            </a>
            <span className="flex items-center gap-2 text-slate-400">
              <MapPin size={14} /> Paris, France & Brazzaville, Congo
            </span>
          </div>
          <div className="text-center text-slate-500 text-sm">
            <p>© 2025 LUMINA Creative Group. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
