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

const DELIVERABLES = [
  { num: "01", title: "Logotype & charte graphique", desc: "Identité visuelle complète avec guide d'usage." },
  { num: "02", title: "Plateforme SaaS", desc: "Développement de la plateforme de bout en bout." },
  { num: "03", title: "Gestion des membres", desc: "Espace membres avec profils, accès et contenus dédiés." },
  { num: "04", title: "SEO technique", desc: "Architecture, vitesse de chargement et balises structurées." },
  { num: "05", title: "Stratégie de contenu", desc: "Plan éditorial pour asseoir l'autorité dans l'écosystème tech." },
  { num: "06", title: "Outils de communication", desc: "Intégration newsletter et outils d'engagement communauté." },
];

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
              Plateforme SaaS, identité de marque et référencement pour le
              repère de l&apos;écosystème numérique congolais.
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
              { value: "1", label: "plateforme SaaS" },
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
                Devenir la référence tech au Congo. Le potentiel était là, l&apos;outil manquait.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-5">
                TechCongo souhaitait se positionner comme la référence de
                l&apos;écosystème technologique au Congo. L&apos;absence d&apos;une
                identité visuelle forte et d&apos;une plateforme structurée limitait
                leur capacité à attirer des partenaires et à fédérer leur communauté.
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
                De l&apos;identité à la plateforme, en passant par le contenu et
                le référencement. Un projet complet mené en trois expertises
                coordonnées pour livrer un résultat cohérent de bout en bout.
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
