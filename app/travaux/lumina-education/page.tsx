import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";
import BulletinDemo from "@/app/components/home/BulletinDemo";

export const metadata: Metadata = {
  title: "Projet LUMINA Education",
  description:
    "Conception et développement de LUMINA Education, plateforme de gestion scolaire en service au C.S Le Savoir de Rabbin à Brazzaville.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/lumina-education",
    title: "Projet LUMINA Education | LUMINA Creative Group",
    description:
      "Conception et développement de LUMINA Education, plateforme de gestion scolaire.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/lumina-education" },
};

export default function ProjetLuminaEducationPage() {
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
                {["SaaS", "Gestion scolaire", "Développement"].map((tag) => (
                  <span key={tag} className="text-xs text-muted bg-subtle border border-border px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mb-6">
                <ProductIcon product="education" size={44} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-edu mb-3">
                lumina education
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                LUMINA Education
              </h1>
              <p className="mt-4 text-muted text-lg leading-relaxed max-w-md">
                Notre propre plateforme SaaS de gestion scolaire, conçue pour les
                établissements privés d&apos;Afrique centrale.
              </p>
              <div className="mt-8">
                <Button as="a" href="/lumina-education" variant="edu">
                  Découvrir le produit
                </Button>
              </div>
            </div>

            {/* Right: demo visual */}
            <div className="flex justify-center">
              <BulletinDemo />
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
                Les établissements scolaires privés en Afrique centrale géraient
                encore leurs notes sur des cahiers, leurs bulletins à la main et
                leurs paiements sur des feuilles Excel. Les parents recevaient
                les informations en retard, et les directeurs n&apos;avaient pas
                de vue en temps réel sur les paiements en attente.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Aucun outil du marché n&apos;était adapté aux spécificités du
                système scolaire congolais : structure des notes, bulletins
                trimestriels, devoirs de classe et de composition, scolarités
                payées en mensualités.
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
                Nous avons conçu et développé LUMINA Education de zéro : une
                plateforme web accessible depuis n&apos;importe quel appareil,
                couvrant l&apos;ensemble des besoins de gestion scolaire. Premier
                déploiement au C.S Le Savoir de Rabbin à Brazzaville pour la
                rentrée 2026-2027.
              </p>
              <ul className="space-y-3">
                {[
                  "Saisie des notes et calcul automatique des moyennes",
                  "Génération des bulletins trimestriels en PDF",
                  "Suivi des paiements et émission de reçus numérotés",
                  "Emplois du temps par classe et par enseignant",
                  "Alertes SMS aux parents (notes, bulletins, paiements)",
                  "Espace parent et espace élève sur mobile",
                  "Gestion des inscriptions et des dossiers élèves",
                  "Comptes séparés par rôle : direction, secrétariat, enseignants, parents, élèves",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-edu flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Témoignage ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
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
                <div className="w-12 h-12 rounded-xl border border-border bg-white overflow-hidden flex-shrink-0 flex items-center justify-center">
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
                à propos de ce produit
              </p>
              <Button as="a" href="/lumina-education" variant="edu">
                Découvrir LUMINA Education
              </Button>
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
