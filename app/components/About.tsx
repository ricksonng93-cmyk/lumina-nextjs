'use client';
import React from 'react';
import {
  Building2, Lightbulb, Heart, Users, Trophy, Target,
  Star, ArrowRight, Linkedin
} from 'lucide-react';
import { useScrollReveal, AnimatedNumber } from './shared';

export default function About({ nav }: { nav: (p: string) => void }) {
  useScrollReveal();
  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'Toujours à l\'affût des nouvelles technologies', color: 'bg-orange-50 text-orange-600' },
    { icon: Heart, title: 'Exigence', desc: 'Le détail fait la différence', color: 'bg-rose-50 text-rose-600' },
    { icon: Users, title: 'Proximité', desc: 'Un interlocuteur dédié, toujours', color: 'bg-blue-50 text-blue-600' },
    { icon: Trophy, title: 'Engagement', desc: 'Votre réussite est notre fierté', color: 'bg-emerald-50 text-emerald-600' },
  ];

  const team = [
    { role: 'Direction & Stratégie', desc: 'Vision produit, relation client, pilotage des projets' },
    { role: 'Développement', desc: 'Experts React, Next.js, Node.js et WordPress' },
    { role: 'Design & UX', desc: 'Interfaces modernes et expériences utilisateur fluides' },
    { role: 'Support & Maintenance', desc: 'Disponibilité et réactivité garanties' },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium mb-6 fade-in-up">
            <Building2 size={16} /> Qui sommes-nous
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 fade-in-up delay-1">Une équipe, une vision</h1>
          <p className="text-xl text-slate-300 fade-in-up delay-2">Des experts passionnés au service de vos ambitions numériques</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-in-left">
              <div className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/fondateur.png" alt="Faity Rickson NGAKOUA-BOUYA" className="w-full h-[500px] object-cover object-top" />
                </div>
                <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-blue-200/60 rounded-3xl" />
              </div>
              <div className="relative -mt-8 mx-6">
                <div className="bg-white rounded-2xl p-5 shadow-xl border border-slate-100 relative z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Faity Rickson NGAKOUA-BOUYA</h3>
                      <p className="text-slate-500 text-sm font-medium">Fondateur & Directeur Créatif</p>
                    </div>
                    <a href="https://www.linkedin.com/in/faity-rickson-n-8094051bb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#004182] transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <Target size={16} /> Le pilote
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Un parcours, une mission</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>Originaire du Congo et diplômé d&apos;un <strong>Master en Création Numérique</strong> de l&apos;<strong>Université Sorbonne Paris Nord</strong>, j&apos;ai choisi de mettre mon parcours au service d&apos;une cause : démocratiser l&apos;accès à des solutions numériques de qualité en Afrique.</p>
                <p className="bg-slate-50 p-5 rounded-xl border-l-4 border-blue-600">
                  Mon expérience au sein d&apos;une grande entreprise française spécialisée dans les <strong>transactions financières et hypothécaires</strong> m&apos;a appris une chose : la rigueur n&apos;est pas négociable. Cette exigence, je l&apos;ai insufflée à toute l&apos;équipe LUMINA.
                </p>
                <p>Aujourd&apos;hui, je coordonne une équipe de talents complémentaires, unis par la même vision : créer des outils numériques qui font vraiment la différence pour nos clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Users size={16} /> Notre force
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Une équipe pluridisciplinaire</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Chaque projet mobilise les compétences adaptées. Développeurs, designers, stratèges : ensemble, nous couvrons tous vos besoins.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{member.role}</h3>
                <p className="text-slate-600 text-sm">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="text-6xl text-blue-400 mb-6">&ldquo;</div>
          <h2 className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">Chaque pixel compte. Chaque ligne de code a un but. Nous ne livrons pas des projets, nous créons des outils qui travaillent pour vous.</h2>
          <p className="text-slate-400 font-medium">— L&apos;équipe LUMINA</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-medium mb-4">
              <Star size={16} /> Notre ADN
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Ce qui nous rassemble</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border-2 border-slate-100 rounded-2xl p-6 card-hover bg-white text-center">
                <div className={`w-16 h-16 rounded-xl ${v.color} flex items-center justify-center mx-auto mb-4`}><v.icon size={28} /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[['50','+','Projets livrés'],['5','/5','Satisfaction client'],['24','h','Temps de réponse']].map(([v,s,l]) => (
              <div key={l} className="p-6 rounded-2xl bg-white border border-slate-200">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2"><AnimatedNumber value={v} suffix={s} /></div>
                <div className="text-slate-600 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Rejoignez nos clients satisfaits</h2>
          <p className="text-lg text-slate-600 mb-8">Découvrez comment notre équipe peut transformer vos idées en réalité.</p>
          <button onClick={() => nav('contact')} className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto font-semibold text-lg btn-dark">
            Parlons de votre projet <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
