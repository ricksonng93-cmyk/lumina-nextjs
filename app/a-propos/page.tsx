import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Faity Rickson NGAKOUA-BOUYA, fondateur et directeur créatif de LUMINA Creative Group.",
  openGraph: {
    url: "https://lumina-cg.com/a-propos",
    title: "À propos | LUMINA Creative Group",
    description: "Faity Rickson NGAKOUA-BOUYA, fondateur et directeur créatif.",
  },
  alternates: { canonical: "https://lumina-cg.com/a-propos" },
};

const VALEURS = [
  {
    label: "Innovation",
    body:  "Toujours à l'affût des nouvelles technologies pour vous offrir les solutions les plus performantes.",
  },
  {
    label: "Exigence",
    body:  "Le détail fait la différence. Chaque pixel compte, chaque ligne de code a un but.",
  },
  {
    label: "Proximité",
    body:  "Un interlocuteur dédié, toujours. Pas de relais entre équipes, pas d'informations perdues.",
  },
  {
    label: "Engagement",
    body:  "Votre réussite est notre fierté. La relation ne s'arrête pas à la mise en ligne.",
  },
];

export default function EquipePage() {
  return (
    <>
      {/* ── Hero avec image ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-end">
        <Image
          src="/hero.png"
          alt="LUMINA Creative Group"
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
          priority
        />
        {/* Gradient overlay — léger en haut, dense en bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

        {/* Content */}
        <div className="relative z-10 w-full pb-20 lg:pb-32">
          <Container>
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-4">
              à propos
            </p>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-2xl">
              Nous construisons des outils qui fonctionnent sur le terrain.
            </h1>
          </Container>
        </div>
      </section>

      {/* ── Le fondateur ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-24 items-start">

            {/* Photo fondateur */}
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full max-w-[260px] mx-auto lg:mx-0 lg:max-w-none">
              <Image
                src="/fondateur.png"
                alt="Faity Rickson NGAKOUA-BOUYA"
                fill
                sizes="(max-width: 1024px) 260px, 300px"
                className="object-cover object-top"
                quality={85}
              />
            </div>

            {/* Bio */}
            <div className="lg:pt-4">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-4">
                fondateur
              </p>
              <h2 className="text-xl lg:text-3xl font-black text-ink leading-tight tracking-tight mb-2">
                Faity Rickson NGAKOUA-BOUYA
              </h2>
              <p className="text-muted text-sm mb-4">Fondateur et directeur créatif</p>
              <a
                href="https://www.linkedin.com/in/faity-rickson-n-8094051bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-agency hover:text-ink transition-colors mb-8"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <div className="space-y-4 text-muted text-lg leading-relaxed max-w-xl">
                <p>
                  Originaire du Congo et diplômé d&apos;un Master en Création Numérique
                  de l&apos;Université Sorbonne Paris Nord, j&apos;ai choisi de mettre
                  mon parcours au service d&apos;une cause : démocratiser l&apos;accès
                  à des solutions numériques de qualité en Afrique.
                </p>
                <p>
                  Mon expérience au sein d&apos;une grande entreprise française
                  spécialisée dans les transactions financières et hypothécaires
                  m&apos;a appris une chose : la rigueur n&apos;est pas négociable.
                  Cette exigence, je l&apos;ai insufflée à toute l&apos;équipe LUMINA.
                </p>
                <p>
                  Aujourd&apos;hui, je coordonne une équipe de talents complémentaires,
                  unis par la même vision : créer des outils numériques qui font
                  vraiment la différence pour nos clients.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Master Création Numérique", "Sorbonne Paris Nord", "Paris & Brazzaville"].map((skill) => (
                  <span key={skill} className="text-xs text-muted border border-border bg-subtle px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Notre force ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-3">notre force</p>
          <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight mb-4">
            Une équipe pluridisciplinaire
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12">
            Chaque projet mobilise les compétences adaptées. Développeurs, designers,
            stratèges : ensemble, nous couvrons tous vos besoins.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Direction & Stratégie", body: "Vision produit, relation client, pilotage des projets" },
              { title: "Développement",         body: "Experts React, Next.js, Node.js et WordPress" },
              { title: "Design & UX",           body: "Interfaces modernes et expériences utilisateur fluides" },
              { title: "Support & Maintenance", body: "Disponibilité et réactivité garanties" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-black text-ink mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Citation ── */}
      <section className="py-20 lg:py-28 border-b border-border overflow-hidden">
        <Container>
          <div className="relative">
            {/* Guillemets géants décoratifs */}
            <span className="absolute -top-8 -left-4 text-[120px] lg:text-[180px] font-black text-border leading-none select-none pointer-events-none">&quot;</span>
            <blockquote className="relative max-w-3xl pl-6 lg:pl-10">
              <p className="text-2xl lg:text-3xl font-black text-ink leading-snug tracking-tight">
                Chaque pixel compte. Chaque ligne de code a un but.
                Nous ne livrons pas des projets, nous créons des outils
                qui travaillent pour vous.
              </p>
              <footer className="mt-6 text-sm text-muted">L&apos;équipe LUMINA</footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ── Notre ADN ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-3">notre adn</p>
          <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight mb-12">
            Ce qui nous rassemble
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALEURS.map((v) => (
              <div
                key={v.label}
                className="bg-white border border-border rounded-2xl p-6 lg:p-8"
              >
                <h3 className="text-lg font-black text-ink mb-3">{v.label}</h3>
                <p className="text-muted leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight">
              Parlons de votre projet.
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Un échange sans engagement pour comprendre votre situation
              et voir si nous pouvons vous aider.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="/contact">Prendre contact</Button>
              <Link
                href="/travaux"
                className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors"
              >
                Voir nos travaux <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
