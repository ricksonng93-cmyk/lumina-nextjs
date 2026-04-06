'use client';
import React from 'react';
import {
  Globe, Palette, GraduationCap, ArrowRight, CheckCircle2,
  Target, Code, Users, Wrench, Heart, Star, Layers, Headphones, Wallet
} from 'lucide-react';
import { useScrollReveal, AnimatedNumber } from './shared';

export default function Home({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const technologies = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'WordPress',
    'Figma', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS',
    'Vercel', 'Git', 'REST API', 'GraphQL', 'Firebase'
  ];

  const services = [
    { icon: Globe, title: 'Sites Web & Applications', desc: 'Création de sites vitrine, e-commerce et applications web sur mesure pour booster votre présence digitale.', color: 'blue' },
    { icon: Palette, title: 'Branding Digital', desc: 'Identité visuelle, logo, charte graphique et design pour une image de marque forte et mémorable.', color: 'violet' },
    { icon: GraduationCap, title: 'LUMINA Education', desc: 'Plateformes de gestion scolaire, sites web éducatifs et outils numériques pour établissements.', color: 'orange' },
  ];

  const colors: Record<string, { bg: string; text: string; hover: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:border-blue-200', border: 'border-blue-100' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-600', hover: 'hover:border-violet-200', border: 'border-violet-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'hover:border-orange-200', border: 'border-orange-100' },
  };

  const process = [
    { num: '01', title: 'Découverte', desc: 'Analyse de vos besoins et objectifs' },
    { num: '02', title: 'Conception', desc: 'Maquettes et validation du design' },
    { num: '03', title: 'Développement', desc: 'Création de votre solution' },
    { num: '04', title: 'Livraison', desc: 'Mise en ligne et formation' },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] -z-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 fade-in-up">
                <Globe size={16} /> Votre partenaire en création numérique
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight fade-in-up delay-1">
                Votre vision mérite une <span className="text-blue-600">expertise d&apos;exception</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed fade-in-up delay-2">
                Nous accompagnons les institutions et entreprises dans leur transformation numérique grâce à des solutions fiables, sécurisées et adaptées.
              </p>
              <div className="flex flex-wrap gap-4 fade-in-up delay-3">
                <button onClick={() => nav('contact')} className="px-7 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 font-semibold btn-dark">
                  Démarrer un projet <ArrowRight size={18} />
                </button>
                <button onClick={() => nav('services')} className="px-7 py-3.5 border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-semibold btn-secondary">
                  Découvrir nos services
                </button>
              </div>
            </div>
            <div className="relative fade-in-right delay-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 img-hover">
                <img src="/hero.png" alt="Digital Solutions" className="w-full h-[400px] lg:h-[480px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Projet livré</p>
                    <p className="text-xs text-slate-500">Il y a 2h</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">+50</p>
                    <p className="text-xs text-slate-500">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
          <p className="text-center text-sm text-slate-500 font-medium uppercase tracking-wider">Nos derniers projets</p>
        </div>
        <div className="scroll-container">
          <div className="scroll-content">
            {[
              { name: 'Master Finance', logo: '/projects/master-finance.png' },
              { name: 'Moonlie', logo: '/projects/moonlie.png' },
              { name: 'France-Afrique Média', logo: '/projects/france-afrique.png' },
              { name: 'École Saint-Joseph', logo: '/projects/ecole-st-joseph.png' },
              { name: 'TechCongo', logo: '/projects/techcongo.png' },
              { name: 'Master Finance', logo: '/projects/master-finance.png' },
              { name: 'Moonlie', logo: '/projects/moonlie.png' },
              { name: 'France-Afrique Média', logo: '/projects/france-afrique.png' },
              { name: 'École Saint-Joseph', logo: '/projects/ecole-st-joseph.png' },
              { name: 'TechCongo', logo: '/projects/techcongo.png' },
            ].map((project, i) => (
              <div key={i} className="inline-flex flex-col items-center mx-12 lg:mx-16">
                <div className="w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-4">
                  <img src={project.logo} alt={project.name} className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm font-medium text-slate-400">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[['50','+','Projets réalisés'],['5','/5','Satisfaction'],['24','h','Délai de réponse'],['6','/7','Disponibilité']].map(([v,s,l]) => (
              <div key={l} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2"><AnimatedNumber value={v} suffix={s} /></div>
                <div className="text-slate-400 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Target size={16} /> Nos expertises
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Services sur mesure</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Des solutions digitales complètes pour votre succès</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const c = colors[s.color];
              return (
                <div key={s.title} className={`border-2 ${c.border} rounded-2xl p-8 ${c.hover} card-hover bg-white`} style={{animationDelay: `${i * 0.1}s`}}>
                  <div className={`w-14 h-14 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-6`}>
                    <s.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                  <button onClick={() => nav('services')} className={`${c.text} hover:underline font-medium flex items-center gap-2 group`}>
                    En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
              <Layers size={16} /> Notre méthode
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Du concept à la réalité</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Un processus clair et transparent pour votre projet</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.num} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-blue-600/20 mb-4">{p.num}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm">{p.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={20} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Notre stack technique</h3>
            <p className="text-slate-500 text-sm">Les technologies modernes pour des solutions performantes</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map(t => (
              <div key={t} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default">
                <span className="font-medium text-slate-700 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Heart size={16} /> Pourquoi nous choisir
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Votre partenaire digital de confiance</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nous combinons expertise technique, créativité et compréhension du marché local.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/about.png" alt="Notre équipe" className="w-full h-[400px] lg:h-[480px] object-cover" />
                </div>
              </div>
              <div className="absolute -z-10 top-6 left-6 w-full h-full bg-blue-200/60 rounded-3xl" />
              <div className="absolute -z-20 top-12 left-12 w-full h-full bg-blue-100/40 rounded-3xl" />
            </div>
            <div>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Users, text: "Équipe d'experts passionnés", color: 'bg-blue-50 text-blue-600' },
                  { icon: Target, text: 'Solutions sur mesure adaptées', color: 'bg-orange-50 text-orange-600' },
                  { icon: Code, text: 'Technologies modernes', color: 'bg-slate-100 text-slate-700' },
                  { icon: Headphones, text: 'Accompagnement personnalisé', color: 'bg-violet-50 text-violet-600' },
                  { icon: Wallet, text: 'Tarifs transparents et compétitifs', color: 'bg-emerald-50 text-emerald-600' },
                  { icon: Wrench, text: 'Maintenance et support continu', color: 'bg-rose-50 text-rose-600' },
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                    <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <f.icon size={20} />
                    </div>
                    <span className="text-slate-700 font-medium">{f.text}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => nav('a-propos')} className="px-7 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 font-semibold btn-dark">
                En savoir plus sur nous <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
              <Star size={16} /> Ils nous font confiance
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Ce que disent nos clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 fade-in-up">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-orange-400 text-orange-400" />)}</div>
              <p className="text-slate-600 mb-6 leading-relaxed">&ldquo;LUMINA a conçu notre charte graphique, notre logo et toute notre identité visuelle. Un travail soigné et professionnel. La collaboration continue sur d&apos;autres projets.&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src="/projects/france-afrique.png" alt="France-Afrique Média" className="w-12 h-12 rounded-lg object-contain bg-white border border-slate-200 p-1" />
                <div>
                  <p className="font-semibold text-slate-900">France-Afrique Média</p>
                  <p className="text-sm text-slate-500">Charte graphique, logo & identité visuelle</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 fade-in-up delay-2">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-orange-400 text-orange-400" />)}</div>
              <p className="text-slate-600 mb-6 leading-relaxed">&ldquo;Nous avions besoin d&apos;une plateforme SaaS de gestion solide et fiable. LUMINA a parfaitement compris nos besoins et livré un produit qui dépasse nos attentes.&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src="/projects/techcongo.png" alt="Tech Congo" className="w-12 h-12 rounded-lg object-contain bg-white border border-slate-200 p-1" />
                <div>
                  <p className="font-semibold text-slate-900">Tech Congo</p>
                  <p className="text-sm text-slate-500">Plateforme SaaS de gestion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Prêt à donner vie à votre projet ?</h2>
          <p className="text-lg text-slate-600 mb-8">Chaque grande réalisation commence par une conversation. Parlons de vos ambitions.</p>
          <button onClick={() => nav('contact')} className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 font-semibold text-lg mx-auto btn-dark">
            Discutons de votre projet <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
