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

const DELIVERABLES = [
  { num: "01", title: "Site institutionnel", desc: "Conception et développement du site vitrine orienté conversion." },
  { num: "02", title: "Espace partenaire privé", desc: "Accès restreint avec gestion des droits par l'équipe." },
  { num: "03", title: "Formulaires intelligents", desc: "Prise de contact et demandes qualifiées intégrées." },
  { num: "04", title: "SEO on-page", desc: "Structure technique, balises et architecture de contenu." },
  { num: "05", title: "Stratégie d'acquisition", desc: "Contenu éditorial pensé pour le référencement naturel." },
];

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

      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left */}
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Site institutionnel", "Espace partenaire", "SEO"].map((tag) => (
                  <span key={tag} className="text-xs text-muted bg-subtle border border-border px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-agency mb-3">
                site &amp; acquisition
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                Master Finance
              </h1>
              <p className="mt-4 text-muted text-lg leading-relaxed max-w-md">
                Site institutionnel, espace partenaire et stratégie de référencement
                pour une structure financière.
              </p>
            </div>

            {/* Right: project image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-subtle">
                <Image
                  src="/projects/master-finance.png"
                  alt="Master Finance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-border">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-border">
            {[
              { value: "5", label: "livrables" },
              { value: "2", label: "cibles (clients & partenaires)" },
              { value: "1", label: "espace partenaire privé" },
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
                Une structure sérieuse, sans vitrine numérique à la mesure de ses ambitions.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-5">
                Master Finance souhaitait asseoir sa crédibilité en ligne pour
                attirer des clients et des partenaires stratégiques. L&apos;absence
                d&apos;une présence digitale structurée limitait leur capacité à
                générer des opportunités qualifiées.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                La mission couvrait la conception du site institutionnel,
                l&apos;intégration d&apos;un espace partenaire privé et la mise en
                place des fondations SEO nécessaires à l&apos;acquisition organique.
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
                Un site pensé pour convertir deux audiences distinctes : les
                clients potentiels cherchant des services financiers, et les
                partenaires souhaitant accéder à des ressources dédiées.
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
              href="/travaux/techcongo"
              className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors flex-shrink-0"
            >
              Projet suivant : TechCongo <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
