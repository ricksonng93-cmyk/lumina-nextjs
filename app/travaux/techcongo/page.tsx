import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "Projet TechCongo",
  description:
    "Identité visuelle, plateforme SaaS et stratégie SEO réalisées pour TechCongo.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/techcongo",
    title: "Projet TechCongo | LUMINA Creative Group",
    description: "Identité visuelle, SaaS et SEO pour TechCongo.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/techcongo" },
};

export default function ProjetTechCongoPage() {
  return (
    <>
      {/* ── Navigation ── */}
      <section className="bg-white border-b border-border py-5">
        <Container>
          <Link
            href="/travaux"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} /> Tous les travaux
          </Link>
        </Container>
      </section>

      {/* ── Hero avec image ── */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-end">
        <Image
          src="/projects/techcongo.png"
          alt="TechCongo"
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-ink/75" />

        <div className="relative z-10 w-full pb-16 lg:pb-20">
          <Container>
            <div className="flex flex-wrap gap-2 mb-6">
              {["SaaS", "Développement", "Identité visuelle", "SEO"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/80 border border-white/20 bg-white/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
              TechCongo
            </h1>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-xl">
              Plateforme SaaS, identité de marque et référencement pour un acteur
              de l&apos;écosystème numérique congolais.
            </p>
          </Container>
        </div>
      </section>

      {/* ── Metadata bar ── */}
      <section className="border-b border-border bg-subtle py-6">
        <Container>
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs text-muted">Type</p>
              <p className="text-sm font-semibold text-ink mt-0.5">Plateforme SaaS</p>
            </div>
            <div>
              <p className="text-xs text-muted">Services</p>
              <p className="text-sm font-semibold text-ink mt-0.5">Développement · Identité · SEO</p>
            </div>
            <div>
              <p className="text-xs text-muted">Secteur</p>
              <p className="text-sm font-semibold text-ink mt-0.5">Technologie</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Contexte ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24">
            <div className="lg:pt-1">
              <p className="text-[10px] uppercase tracking-widest text-muted">Le contexte</p>
            </div>
            <div className="max-w-2xl">
              <p className="text-muted text-lg leading-relaxed mb-5">
                TechCongo souhaitait se positionner comme la référence de
                l&apos;écosystème technologique au Congo. L&apos;absence d&apos;une
                identité visuelle forte et d&apos;une plateforme structurée limitait
                leur capacité à attirer des partenaires et à fidéliser leur
                communauté.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                La mission couvrait la création de l&apos;identité de marque, le
                développement de la plateforme SaaS et la mise en place d&apos;une
                stratégie de référencement pour asseoir leur visibilité en ligne.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Ce que nous avons fait ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24">
            <div className="lg:pt-1">
              <p className="text-[10px] uppercase tracking-widest text-muted">Ce que nous avons fait</p>
            </div>
            <div className="max-w-2xl">
              <p className="text-muted text-lg leading-relaxed mb-10">
                Nous avons conçu l&apos;identité visuelle complète, développé la
                plateforme et structuré la présence en ligne de TechCongo pour
                en faire un repère crédible dans l&apos;écosystème tech congolais.
              </p>
              <ul className="space-y-3">
                {[
                  "Logotype et charte graphique complète",
                  "Développement de la plateforme SaaS",
                  "Gestion des contenus et des membres",
                  "Optimisation SEO technique et on-page",
                  "Stratégie de contenu pour le référencement naturel",
                  "Intégration des outils de communication et de newsletter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agency flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted mb-3">
                un projet similaire
              </p>
              <Button as="a" href="/contact">Demander un audit</Button>
            </div>
            <Link
              href="/travaux/lumina-education"
              className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors flex-shrink-0"
            >
              Voir LUMINA Education <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
