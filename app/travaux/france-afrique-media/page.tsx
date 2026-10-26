import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "Projet France-Afrique Média",
  description:
    "Charte graphique, logo et identité visuelle conçus pour France-Afrique Média.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/france-afrique-media",
    title: "Projet France-Afrique Média | LUMINA Creative Group",
    description: "Charte graphique, logo et identité visuelle pour France-Afrique Média.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/france-afrique-media" },
};

export default function ProjetFranceAfriqueMediaPage() {
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
          src="/projects/france-afrique.png"
          alt="France-Afrique Média"
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
              {["Logo", "Identité visuelle", "Développement"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/80 border border-white/20 bg-white/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
              France-Afrique Média
            </h1>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-xl">
              Identité de marque et site éditorial pour un média francophone
              couvrant l&apos;actualité africaine.
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
              <p className="text-sm font-semibold text-ink mt-0.5">Identité de marque</p>
            </div>
            <div>
              <p className="text-xs text-muted">Services</p>
              <p className="text-sm font-semibold text-ink mt-0.5">Logo · Développement</p>
            </div>
            <div>
              <p className="text-xs text-muted">Secteur</p>
              <p className="text-sm font-semibold text-ink mt-0.5">Média</p>
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
                France-Afrique Média couvrait l&apos;actualité africaine sans
                identité visuelle cohérente. Le logotype existant n&apos;était
                pas déclinable sur les supports digitaux, et le site ne reflétait
                pas le positionnement éditorial de la rédaction.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                La mission couvrait l&apos;ensemble de l&apos;identité de marque,
                de la refonte du logotype au développement d&apos;un nouveau site
                éditorial.
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
                Nous avons repensé l&apos;intégralité de l&apos;identité visuelle,
                du logotype aux gabarits de publication, puis développé un site
                éditorial structuré, rapide et pensé pour le référencement.
              </p>
              <ul className="space-y-3">
                {[
                  "Logotype et déclinaisons (couleur, monochrome, blanc)",
                  "Charte graphique complète",
                  "Gabarits pour les publications digitales",
                  "Développement du site éditorial",
                  "Optimisation pour le référencement naturel",
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
              href="/travaux/master-finance"
              className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors flex-shrink-0"
            >
              Projet suivant : Master Finance <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
