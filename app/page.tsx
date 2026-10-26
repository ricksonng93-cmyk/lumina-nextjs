import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";
import VerbRotator from "@/app/components/home/VerbRotator";
import BulletinDemo from "@/app/components/home/BulletinDemo";

export const metadata: Metadata = {
  title: "LUMINA Creative Group | Agence numérique à Paris et Brazzaville",
  description:
    "Nous auditons, concevons, construisons et maintenons les outils numériques des écoles, des administrations et des entreprises. Éditeur de LUMINA Education.",
  openGraph: {
    url: "https://lumina-cg.com",
    title: "LUMINA Creative Group | Agence numérique à Paris et Brazzaville",
    description:
      "Nous auditons, concevons, construisons et maintenons les outils numériques des écoles, des administrations et des entreprises.",
  },
  alternates: { canonical: "https://lumina-cg.com" },
};

/* ─── Data ────────────────────────────────────────────────────────── */

const expertises = [
  {
    label: "Audit",
    title: "Audit de l\u2019existant",
    body: "Nous commençons par analyser ce que vous avez déjà : site, outils, processus, contraintes. Nous rendons un diagnostic écrit avec nos recommandations prioritaires.",
  },
  {
    label: "Construction",
    title: "Conception et développement",
    body: "Nous concevons et développons votre outil sur mesure. Site institutionnel, application métier ou plateforme SaaS.",
  },
  {
    label: "Marque",
    title: "Identité visuelle",
    body: "Nous créons ou consolidons votre identité : logotype, charte graphique, gabarits de communication sur tous les supports.",
  },
  {
    label: "Durée",
    title: "Maintenance et formation",
    body: "Nous assurons la maintenance, les évolutions et la formation de vos équipes. Nous ne livrons pas et disparaissons.",
  },
];

const projects = [
  {
    slug:    "lumina-education",
    num:     "01",
    name:    "LUMINA Education",
    tags:    ["SaaS", "Design", "Développement"],
    image:   null,
    product: "education" as const,
    linked:  true,
  },
  {
    slug:    "france-afrique-media",
    num:     "02",
    name:    "France Afrique Média",
    tags:    ["Site web", "CMS", "Branding"],
    image:   "/projects/france-afrique.png",
    product: null,
    linked:  true,
  },
  {
    slug:    "master-finance",
    num:     "03",
    name:    "Master Finance",
    tags:    ["Application web", "UX"],
    image:   "/projects/master-finance.png",
    product: null,
    linked:  true,
  },
  {
    slug:    null,
    num:     "04",
    name:    "TechCongo",
    tags:    ["Identité visuelle", "2024"],
    image:   "/projects/techcongo.png",
    product: null,
    linked:  false,
  },
];

const products = [
  {
    product:  "education" as const,
    name:     "LUMINA Education",
    body:     "Gestion scolaire pour les établissements privés. Bulletins, paiements, emploi du temps, alertes SMS.",
    href:     "/lumina-education",
    linked:   true,
  },
  {
    product:  "administration" as const,
    name:     "LUMINA Administration",
    body:     "Dématérialisation pour les services administratifs. Formulaires numériques, registres, circuits de validation.",
    href:     null,
    linked:   false,
  },
  {
    product:  "care" as const,
    name:     "LUMINA Care",
    body:     "Gestion de structures médicales. Dossiers patients, rendez-vous, rappels automatiques.",
    href:     null,
    linked:   false,
  },
];

/* ─── Page ────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          1. HERO
          Fond blanc. Titre centré, visible immédiatement.
          Seul le verbe s'anime. Pas de mention de ville.
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-border min-h-[90svh] flex items-center">
        <Container className="py-28 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">

            {/* H1 — visible dès le chargement, aucune animation d'entrée */}
            <h1
              className="hero-title text-ink"
              aria-label="Nous auditons, concevons, construisons et maintenons vos outils numériques."
            >
              Nous{" "}
              <VerbRotator aria-hidden={true} />
              <br />
              vos outils numériques.
            </h1>

            {/* Sous-titre */}
            <p className="mt-8 mx-auto max-w-xl text-muted text-lg leading-relaxed">
              Plateformes métier, sites et identités de marque.
              Une équipe professionnelle, un seul interlocuteur.
            </p>

            {/* CTA */}
            <div className="mt-12">
              <Button as="a" href="/contact" size="lg">
                Parler d&apos;un projet
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. EXPERTISES
          Quatre colonnes nues séparées par un filet fin.
          Pas de cartes, pas d'icônes.
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 border-b border-border">
        <Container>
          <p className="reveal reveal-up text-[11px] uppercase tracking-widest text-muted mb-16">
            nos expertises
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4">
            {expertises.map((e, i) => (
              <div
                key={e.label}
                className={[
                  "reveal reveal-up py-10 lg:py-0",
                  `stagger-${i + 1}`,
                  i > 0
                    ? "border-t lg:border-t-0 lg:border-l border-border lg:pl-10"
                    : "",
                  i < expertises.length - 1
                    ? "lg:pr-10"
                    : "",
                ].join(" ")}
              >
                <p className="text-[10px] uppercase tracking-widest text-muted mb-5">
                  {e.label}
                </p>
                <h3 className="text-lg font-bold text-ink mb-4 leading-snug">
                  {e.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {e.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 reveal reveal-up">
            <Link
              href="/expertises"
              className="text-sm text-agency inline-flex items-center gap-1.5 hover:gap-3 transition-all"
            >
              Voir toutes nos expertises <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. DÉMONSTRATION LUMINA EDUCATION
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 border-b border-border">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Gauche — présentation produit */}
            <div className="flex-1 reveal reveal-left">
              <ProductIcon product="education" size={52} />
              <p className="text-[10px] uppercase tracking-widest text-muted mt-5 mb-2">
                lumina education
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                Un bulletin en quelques secondes.
              </h2>
              <p className="mt-6 max-w-md text-muted leading-relaxed">
                Notre plateforme de gestion scolaire calcule les moyennes,
                génère les bulletins PDF et informe les parents par SMS.
              </p>
              <div className="mt-10">
                <Button as="a" href="/lumina-education" variant="edu">
                  Découvrir LUMINA Education
                </Button>
              </div>
            </div>

            {/* Droite — démo bulletin */}
            <div className="flex-1 flex justify-center reveal reveal-right">
              <BulletinDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. NOS DERNIERS PROJETS
          Logos toujours visibles. TechCongo sans lien.
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 border-b border-border">
        <Container>
          <p className="reveal reveal-up text-[11px] uppercase tracking-widest text-muted mb-16">
            nos derniers projets
          </p>

          <div>
            {projects.map((p, i) => {
              const logo = (
                <span className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-subtle flex items-center justify-center">
                  {p.product ? (
                    <ProductIcon product={p.product} size={40} />
                  ) : p.image ? (
                    <Image
                      src={p.image}
                      alt=""
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  ) : null}
                </span>
              );

              const inner = (
                <>
                  <span className="text-muted text-xs font-mono w-7 flex-shrink-0 tabular-nums">
                    {p.num}
                  </span>

                  {logo}

                  <span className="font-semibold text-ink flex-1 text-base group-hover:text-agency transition-colors duration-150">
                    {p.name}
                  </span>

                  <span className="hidden sm:flex gap-2 flex-shrink-0">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted bg-subtle px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>

                  {p.linked && (
                    <ArrowRight
                      size={15}
                      className="flex-shrink-0 text-muted group-hover:text-agency group-hover:translate-x-1 transition-all duration-150"
                    />
                  )}
                </>
              );

              const rowClass = [
                `reveal reveal-up stagger-${i + 1}`,
                "group flex items-center gap-5 py-5 border-b border-border last:border-0",
                p.linked ? "project-row cursor-pointer" : "cursor-default",
              ].join(" ");

              return p.linked && p.slug ? (
                <Link key={p.slug} href={`/travaux/${p.slug}`} className={rowClass}>
                  {inner}
                </Link>
              ) : (
                <div key={p.name} className={rowClass}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-14 reveal reveal-up">
            <Link
              href="/travaux"
              className="text-sm text-agency inline-flex items-center gap-1.5 hover:gap-3 transition-all"
            >
              Tous les travaux <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. LA FAMILLE LUMINA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 border-b border-border">
        <Container>
          <p className="reveal reveal-up text-[11px] uppercase tracking-widest text-muted mb-16">
            la famille lumina
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden">
            {products.map((prod, i) => {
              const content = (
                <div className={[
                  "p-8 lg:p-10 h-full",
                  i > 0 ? "border-t sm:border-t-0 sm:border-l border-border" : "",
                ].join(" ")}>
                  <ProductIcon product={prod.product} size={52} />
                  <h3 className="mt-6 text-xl font-black text-ink leading-tight">
                    {prod.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {prod.body}
                  </p>
                  {!prod.linked && (
                    <p className="mt-4 text-xs text-muted/60 tracking-wide">En développement</p>
                  )}
                  {prod.linked && (
                    <p className="mt-5 text-sm text-agency inline-flex items-center gap-1.5">
                      Découvrir <ArrowRight size={13} />
                    </p>
                  )}
                </div>
              );

              const wrapClass = [
                `reveal reveal-up stagger-${i + 1}`,
                prod.linked ? "hover:bg-subtle transition-colors cursor-pointer" : "",
              ].join(" ");

              return prod.linked && prod.href ? (
                <Link key={prod.name} href={prod.href} className={wrapClass}>
                  {content}
                </Link>
              ) : (
                <div key={prod.name} className={wrapClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. TÉMOIGNAGES — CONSTRUITS MAIS MASQUÉS
      ══════════════════════════════════════════════════════════════ */}
      <section className="hidden" aria-hidden="true">
        <Container className="py-24 lg:py-36">
          <p className="text-[11px] uppercase tracking-widest text-muted mb-14">
            ils nous font confiance
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            <blockquote className="space-y-5">
              <p className="text-xl text-ink leading-relaxed">
                &ldquo;LUMINA a transformé la gestion de notre établissement.
                Les bulletins sont générés en quelques clics, les parents
                reçoivent les informations par SMS.&rdquo;
              </p>
              <footer>
                <p className="font-semibold text-ink">Directeur</p>
                <p className="text-sm text-muted">CS Le Savoir de Rabbin, Brazzaville</p>
              </footer>
            </blockquote>

            <blockquote className="space-y-5">
              <p className="text-xl text-ink leading-relaxed">
                &ldquo;Une équipe sérieuse, qui comprend les contraintes du
                terrain et livre ce qu&apos;elle promet.&rdquo;
              </p>
              <footer>
                <p className="font-semibold text-ink">Responsable communication</p>
                <p className="text-sm text-muted">France Afrique Média</p>
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. NOUS LIVRONS, PUIS NOUS RESTONS
          Photo d'équipe en grand. Non négociable.
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 border-b border-border">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

            {/* Gauche — texte */}
            <div className="lg:w-[36%] flex-shrink-0 reveal reveal-left">
              <h2 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                Nous livrons, puis nous restons.
              </h2>
              <p className="mt-8 text-muted leading-relaxed">
                La livraison n&apos;est pas la fin du projet. Nous mettons en
                place un suivi sur mesure : maintenance préventive, mises à
                jour, transfert de compétences. Nous restons joignables
                quand vous en avez besoin.
              </p>
            </div>

            {/* Droite — photo équipe */}
            <div className="flex-1 reveal reveal-right w-full">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: "5000/3885" }}
              >
                <Image
                  src="/team.png"
                  alt="L'équipe LUMINA Creative Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 64vw"
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. APPEL FINAL
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40">
        <Container>
          <div className="reveal reveal-up max-w-3xl">
            <h2 className="text-4xl lg:text-6xl font-black text-ink leading-tight tracking-tight">
              Commençons par regarder ce que vous avez déjà.
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
              Un audit sans engagement. Nous analysons votre situation et vous
              indiquons ce qui mérite d&apos;être conservé, amélioré ou
              reconstruit.
            </p>
            <div className="mt-10">
              <Button as="a" href="/contact" size="lg">
                Demander un audit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
