import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "Projet Master Finance",
  description: "Développement et identité visuelle réalisés pour Master Finance.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/master-finance",
    title: "Projet Master Finance | LUMINA Creative Group",
    description: "Développement et identité visuelle pour Master Finance.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/master-finance" },
};

export default function ProjetMasterFinancePage() {
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
          src="/projects/master-finance.png"
          alt="Master Finance"
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/75" />

        {/* Overlaid content */}
        <div className="relative z-10 w-full pb-16 lg:pb-20">
          <Container>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Site institutionnel", "Espace partenaire", "Référencement", "Acquisition"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/80 border border-white/20 bg-white/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
              Master Finance
            </h1>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-xl">
              Site institutionnel, espace partenaire et stratégie de référencement.
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
              <p className="text-sm font-semibold text-ink mt-0.5">Site institutionnel</p>
            </div>
            <div>
              <p className="text-xs text-muted">Services</p>
              <p className="text-sm font-semibold text-ink mt-0.5">SEO · Acquisition</p>
            </div>
            <div>
              <p className="text-xs text-muted">Secteur</p>
              <p className="text-sm font-semibold text-ink mt-0.5">Finance</p>
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
                Master Finance avait besoin d&apos;une présence en ligne crédible
                pour attirer des partenaires et des clients. La mission couvrait
                la conception du site, l&apos;intégration d&apos;un espace partenaire
                privé et une stratégie de référencement pour générer des
                opportunités qualifiées.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                L&apos;espace partenaire devait permettre à des tiers d&apos;accéder
                à des ressources et des informations réservées, avec des accès
                gérés par l&apos;équipe.
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
                Nous avons conçu et développé le site institutionnel, intégré
                l&apos;espace partenaire avec gestion des accès, puis mis en place
                les fondations SEO nécessaires à l&apos;acquisition organique.
              </p>
              <ul className="space-y-3">
                {[
                  "Conception et développement du site institutionnel",
                  "Espace partenaire avec accès restreint et gestion des droits",
                  "Optimisation SEO on-page",
                  "Stratégie de contenu pour l'acquisition organique",
                  "Intégration des formulaires de contact et de demande",
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
