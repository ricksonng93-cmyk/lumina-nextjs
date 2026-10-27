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

const DELIVERABLES = [
  { num: "01", title: "Logotype principal", desc: "Création du logo, variantes couleur, monochrome et blanc." },
  { num: "02", title: "Charte graphique", desc: "Palette, typographie, règles d'usage et gabarits." },
  { num: "03", title: "Gabarits éditoriaux", desc: "Templates publication web, social media et newsletter." },
  { num: "04", title: "Site éditorial", desc: "Développement du site avec CMS intégré pour l'équipe rédactionnelle." },
  { num: "05", title: "Optimisation SEO", desc: "Structure technique, balises et maillage interne." },
  { num: "06", title: "Manuel de marque", desc: "Guide complet remis aux équipes pour une utilisation autonome." },
];

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
        <div className="absolute inset-0 bg-ink/75" />

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
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
              France-Afrique Média
            </h1>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-xl">
              Identité de marque et site éditorial pour un média francophone
              couvrant l&apos;actualité africaine.
            </p>
          </Container>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-border">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-border">
            {[
              { value: "6", label: "livrables" },
              { value: "3", label: "expertises mobilisées" },
              { value: "1", label: "identité de marque" },
            ].map((s) => (
              <div key={s.label} className="py-8 px-4 lg:px-8 text-center">
                <p className="text-3xl lg:text-4xl font-black text-ink">{s.value}</p>
                <p className="text-xs text-muted mt-1">{s.label}</p>
              </div>
            ))}
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
              <p className="text-2xl lg:text-3xl font-black text-ink leading-snug tracking-tight mb-8">
                Un média sérieux, sans identité à la hauteur de ses ambitions.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-5">
                France-Afrique Média couvrait une actualité de qualité, mais son
                identité visuelle fragmentée nuisait à sa crédibilité face aux
                annonceurs et aux lecteurs. Aucune cohérence entre les supports,
                aucun guide pour les équipes.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                La mission : créer une identité forte, déclinable sur l&apos;ensemble
                des formats éditoriaux, et développer le site qui la mette en valeur.
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
                De la page blanche à un système de marque complet. Chaque livrable
                a été conçu pour fonctionner seul et dans l&apos;ensemble, du logo
                au site en passant par les gabarits utilisés au quotidien.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DELIVERABLES.map((d) => (
                  <div key={d.num} className="bg-white border border-border rounded-2xl p-5">
                    <p className="font-mono text-xs text-muted mb-3">{d.num}</p>
                    <p className="font-semibold text-ink text-sm leading-snug mb-1.5">{d.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
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
