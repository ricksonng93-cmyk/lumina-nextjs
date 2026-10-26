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
          Fond blanc. Titre visible dès le chargement (pas d'animation
          d'entrée). Seul le verbe s'anime.
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-border min-h-[85svh] flex items-center">
        <Container className="py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-widest text-muted mb-8">
              Agence numérique · Paris &amp; Brazzaville
            </p>

            {/* H1 — no entry animation; title is immediately visible */}
            <h1
              className="hero-title text-ink"
              aria-label="Nous auditons, concevons, construisons et maintenons vos outils numériques."
            >
              Nous{" "}
              <VerbRotator aria-hidden={true} />
              <br className="sm:hidden" />
              {" "}vos outils numériques.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-lg text-muted leading-relaxed">
              De l&apos;audit initial à la mise en ligne. Nous accompagnons les
              écoles, les administrations et les entreprises, de Paris à
              Brazzaville.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button as="a" href="/contact">Demander un audit</Button>
              <Button as="a" href="/travaux" variant="secondary">Nos travaux</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. EXPERTISES
          Quatre colonnes nues séparées par un filet fin.
          Labels : Audit · Construction · Marque · Durée
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <p className="reveal reveal-up text-xs uppercase tracking-widest text-muted mb-12">
            nos expertises
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4">
            {expertises.map((e, i) => (
              <div
                key={e.label}
                className={[
                  "reveal reveal-up py-8 lg:py-0",
                  `stagger-${i + 1}`,
                  i > 0
                    ? "border-t lg:border-t-0 lg:border-l border-border lg:pl-10"
                    : "",
                  i < expertises.length - 1
                    ? "lg:pr-10"
                    : "",
                ].join(" ")}
              >
                <p className="text-[11px] uppercase tracking-widest text-muted mb-4">
                  {e.label}
                </p>
                <h3 className="font-bold text-ink mb-3 leading-snug">{e.title}</h3>
                <p className="text-sm text-muted leading-relaxed max-w-[32ch]">{e.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 reveal reveal-up">
            <Link
              href="/expertises"
              className="text-sm text-agency inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Voir toutes nos expertises <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. DÉMONSTRATION EDUCATION
          Bulletin animé. Sans "Plateforme SaaS…", sans fausse fonctionnalité.
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left — product intro */}
            <div className="flex-1 reveal reveal-left">
              <ProductIcon product="education" size={48} />
              <p className="text-[11px] uppercase tracking-widest text-muted mt-4 mb-1">
                lumina education
              </p>
              <h2 className="text-3xl font-black text-ink leading-tight">
                Un bulletin en quelques secondes.
              </h2>
              <p className="mt-4 max-w-md text-muted leading-relaxed">
                Notre plateforme de gestion scolaire calcule les moyennes,
                génère les bulletins PDF et informe les parents par SMS.
              </p>
              <div className="mt-8">
                <Button as="a" href="/lumina-education" variant="edu">
                  Découvrir LUMINA Education
                </Button>
              </div>
            </div>

            {/* Right — live demo */}
            <div className="flex-1 flex justify-center reveal reveal-right">
              <BulletinDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. NOS DERNIERS PROJETS
          Inclut TechCongo (sans lien).
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <p className="reveal reveal-up text-xs uppercase tracking-widest text-muted mb-10">
            nos derniers projets
          </p>

          <div>
            {projects.map((p, i) => {
              const inner = (
                <>
                  <span className="text-muted text-sm font-mono w-8 flex-shrink-0">
                    {p.num}
                  </span>

                  {/* Thumbnail — hidden by default, revealed on hover */}
                  <span className="project-logo w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-subtle flex items-center justify-center">
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

                  <span className="font-semibold text-ink flex-1 group-hover:text-agency transition-colors duration-150">
                    {p.name}
                  </span>

                  <span className="hidden sm:flex gap-1.5 flex-shrink-0">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted bg-subtle px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>

                  <ArrowRight
                    size={15}
                    className={[
                      "flex-shrink-0 transition-all duration-150",
                      p.linked
                        ? "text-muted group-hover:text-agency group-hover:translate-x-1"
                        : "text-border",
                    ].join(" ")}
                  />
                </>
              );

              const rowClass = [
                `reveal reveal-up stagger-${i + 1}`,
                "group flex items-center gap-4 py-5 border-b border-border last:border-0",
                p.linked ? "project-row cursor-pointer" : "cursor-default opacity-80",
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

          <div className="mt-10 reveal reveal-up">
            <Link
              href="/travaux"
              className="text-sm text-agency inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Tous les travaux <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. LA FAMILLE LUMINA
          Les trois produits : Education, Administration, Care.
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <p className="reveal reveal-up text-xs uppercase tracking-widest text-muted mb-12">
            la famille lumina
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {products.map((prod, i) => {
              const content = (
                <>
                  <ProductIcon product={prod.product} size={48} />
                  <h3 className="mt-5 font-black text-ink text-lg leading-tight">
                    {prod.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {prod.body}
                  </p>
                  {!prod.linked && (
                    <p className="mt-3 text-xs text-muted/60 italic">En développement</p>
                  )}
                  {prod.linked && (
                    <p className="mt-4 text-sm text-agency inline-flex items-center gap-1">
                      Découvrir <ArrowRight size={13} />
                    </p>
                  )}
                </>
              );

              const cardClass = [
                `reveal reveal-up stagger-${i + 1}`,
                "p-6 rounded-2xl border border-border",
                prod.linked ? "hover:border-agency/30 transition-colors cursor-pointer" : "",
              ].join(" ");

              return prod.linked && prod.href ? (
                <Link key={prod.name} href={prod.href} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <div key={prod.name} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. TÉMOIGNAGES — CONSTRUITS MAIS MASQUÉS
          Retirer className="hidden" quand les témoignages sont validés.
      ══════════════════════════════════════════════════════════════ */}
      <section className="hidden" aria-hidden="true">
        <Container className="py-20 lg:py-28">
          <p className="text-xs uppercase tracking-widest text-muted mb-10">
            ils nous font confiance
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            <blockquote className="space-y-4">
              <p className="text-lg text-ink leading-relaxed">
                &ldquo;LUMINA a transformé la gestion de notre établissement.
                Les bulletins sont générés en quelques clics, les parents
                reçoivent les informations par SMS.&rdquo;
              </p>
              <footer>
                <p className="font-semibold text-ink">Directeur</p>
                <p className="text-sm text-muted">CS Le Savoir de Rabbin, Brazzaville</p>
              </footer>
            </blockquote>

            <blockquote className="space-y-4">
              <p className="text-lg text-ink leading-relaxed">
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
          Photo d'équipe en grand (non négociable).
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

            {/* Left — text */}
            <div className="lg:w-[38%] flex-shrink-0 reveal reveal-left">
              <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight">
                Nous livrons, puis nous restons.
              </h2>
              <p className="mt-6 text-muted leading-relaxed max-w-md">
                La livraison n&apos;est pas la fin du projet. Nous mettons en
                place un suivi sur mesure : maintenance préventive, mises à
                jour, transfert de compétences. Nous restons joignables quand
                vous en avez besoin.
              </p>
            </div>

            {/* Right — team photo, large */}
            <div className="flex-1 reveal reveal-right w-full">
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "5000/3885" }}>
                <Image
                  src="/team.png"
                  alt="L'équipe LUMINA Creative Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className="object-cover"
                  quality={85}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. APPEL FINAL
          "Commençons par regarder ce que vous avez déjà."
          Bouton : "Demander un audit"
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="reveal reveal-up max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight">
              Commençons par regarder ce que vous avez déjà.
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-lg">
              Un audit sans engagement. Nous analysons votre situation et vous
              indiquons ce qui mérite d&apos;être conservé, amélioré ou
              reconstruit.
            </p>
            <div className="mt-8">
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
