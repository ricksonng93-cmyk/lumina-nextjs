import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";

export const metadata: Metadata = {
  title: "Projet Le Savoir de Rabbin",
  description:
    "Déploiement de LUMINA Education au C.S Le Savoir de Rabbin à Brazzaville. Numérisation, formation et maintenance active.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/savoir-de-rabbin",
    title: "C.S Le Savoir de Rabbin | LUMINA Creative Group",
    description: "Déploiement de LUMINA Education au C.S Le Savoir de Rabbin.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/savoir-de-rabbin" },
};

const PHASES = [
  {
    num:   "01",
    title: "Importation et numérisation des données existantes",
    desc:  "Transfert de l'ensemble des données historiques de l'établissement vers la plateforme : élèves, enseignants, classes, dossiers et historique de paiements.",
  },
  {
    num:   "02",
    title: "Création des classes et disciplines",
    desc:  "Paramétrage complet de la structure pédagogique : niveaux, classes, matières, coefficients et emplois du temps adaptés au système scolaire congolais.",
  },
  {
    num:   "03",
    title: "Formation du personnel",
    desc:  "Sessions de formation sur site pour la direction, le secrétariat et les enseignants. Prise en main de l'ensemble des fonctionnalités au quotidien.",
  },
  {
    num:   "04",
    title: "Maintenance active",
    desc:  "Suivi en continu, correctifs, évolutions et support direct auprès des équipes. La plateforme est opérationnelle depuis la rentrée 2026–2027.",
  },
];

export default function ProjetSavoirDeRabbinPage() {
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

            {/* Left: context + headline */}
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Gestion scolaire", "SaaS"].map((tag) => (
                  <span key={tag} className="text-xs text-muted bg-subtle border border-border px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  Actif
                </span>
              </div>

              <div className="mb-6">
                <ProductIcon product="education" size={44} />
              </div>

              <p className="text-[10px] uppercase tracking-widest text-edu mb-3">
                lumina education · premier déploiement
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                C.S Le Savoir de Rabbin
              </h1>
              <p className="mt-4 text-muted text-lg leading-relaxed max-w-md">
                Premier établissement à déployer LUMINA Education.
                En production à Brazzaville depuis la rentrée 2026–2027.
              </p>
            </div>

            {/* Right: logo */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-3xl bg-subtle border border-border flex items-center justify-center p-8">
                <Image
                  src="/logos/savoir-rabbin.png"
                  alt="C.S Le Savoir de Rabbin"
                  width={160}
                  height={160}
                  className="object-contain"
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
              { value: "4",      label: "phases de déploiement" },
              { value: "2026",   label: "année de lancement" },
              { value: "Actif",  label: "statut actuel" },
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
                Passer des cahiers à une plateforme numérique, sans perturber la rentrée.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-5">
                Le C.S Le Savoir de Rabbin gérait notes, bulletins et paiements
                manuellement. La migration vers LUMINA Education devait être
                transparente pour les familles et opérationnelle dès le premier
                jour de rentrée.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                La mission couvrait l&apos;intégralité du déploiement : de
                l&apos;import des données existantes à la formation des équipes,
                jusqu&apos;à la maintenance active en cours d&apos;utilisation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Les 4 phases ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24">
            <div className="lg:pt-1">
              <p className="text-[10px] uppercase tracking-widest text-muted">Les phases</p>
            </div>
            <div className="max-w-2xl">
              <p className="text-muted text-lg leading-relaxed mb-10">
                Un déploiement structuré en quatre phases pour garantir une
                transition sans friction et une adoption rapide par les équipes.
              </p>
              <div className="space-y-4">
                {PHASES.map((phase) => (
                  <div key={phase.num} className="bg-white border border-border rounded-2xl p-6 flex gap-5">
                    <span className="font-mono text-xs text-muted flex-shrink-0 mt-0.5">{phase.num}</span>
                    <div>
                      <p className="font-semibold text-ink text-sm leading-snug mb-2">{phase.title}</p>
                      <p className="text-xs text-muted leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Témoignage ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-12 text-center">
            témoignage
          </p>
          <div className="max-w-2xl mx-auto">
            <blockquote>
              <p className="text-2xl lg:text-3xl font-black text-ink leading-snug tracking-tight mb-10">
                &ldquo;LUMINA Education a transformé notre façon de gérer l&apos;école.
                Les notes, les bulletins, les paiements, tout est centralisé.
                Nos enseignants gagnent un temps précieux et les parents
                sont informés en temps réel.&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-border bg-subtle overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/logos/savoir-rabbin.png"
                    alt="C.S Le Savoir de Rabbin"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-black text-ink text-sm">Marlyse Safoula</p>
                  <p className="text-muted text-xs mt-0.5">Directrice générale · C.S Le Savoir de Rabbin, Brazzaville</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted mb-3">
                déployer lumina education
              </p>
              <Button as="a" href="/contact">Contacter l&apos;équipe</Button>
            </div>
            <Link
              href="/travaux/france-afrique-media"
              className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors flex-shrink-0"
            >
              Projet suivant : France-Afrique Média <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
