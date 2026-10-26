import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Search, Lightbulb, Code2, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
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

/* ─── Project data ───────────────────────────────────────────────── */
const projects = [
  {
    slug: "lumina-education",
    num: "01",
    name: "LUMINA Education",
    tags: ["SaaS", "Design", "Développement"],
    image: null,
    product: "education" as const,
  },
  {
    slug: "france-afrique-media",
    num: "02",
    name: "France Afrique Média",
    tags: ["Site web", "CMS", "Branding"],
    image: "/projects/france-afrique.png",
    product: null,
  },
  {
    slug: "master-finance",
    num: "03",
    name: "Master Finance",
    tags: ["Application web", "UX"],
    image: "/projects/master-finance.png",
    product: null,
  },
];

/* ─── Expertise cards ────────────────────────────────────────────── */
const expertises = [
  {
    icon: <Search className="text-agency mb-4 size-6" />,
    title: "Audit",
    body: "Diagnostic complet de votre présence et de vos outils numériques.",
    href: "/expertises#audit",
  },
  {
    icon: <Lightbulb className="text-agency mb-4 size-6" />,
    title: "Conception",
    body: "Architecture UX, maquettes interactives et systèmes de design sur mesure.",
    href: "/expertises#conception",
  },
  {
    icon: <Code2 className="text-agency mb-4 size-6" />,
    title: "Développement",
    body: "Sites web, applications métier et plateformes SaaS construits avec soin.",
    href: "/expertises#developpement",
  },
  {
    icon: <Wrench className="text-agency mb-4 size-6" />,
    title: "Maintenance",
    body: "Suivi, évolutions et transfert de compétences après la mise en ligne.",
    href: "/expertises#maintenance",
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="bg-ink text-white min-h-[85svh] flex items-center">
        <Container className="py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="hero-in hero-in-1 inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-4 py-2 rounded-full mb-8">
              Agence numérique · Paris &amp; Brazzaville
            </p>

            {/* H1 */}
            <h1
              className="hero-title hero-in hero-in-2 text-white"
              aria-label="Nous auditons, concevons, construisons et maintenons vos outils numériques."
            >
              Nous{" "}
              <VerbRotator aria-hidden={true} />
              <br className="sm:hidden" />
              {" "}vos outils numériques.
            </h1>

            {/* Sub */}
            <p className="hero-in hero-in-3 mt-6 text-white/70 max-w-lg leading-relaxed">
              De l&apos;audit initial à la mise en ligne. Nous accompagnons les écoles,
              les administrations et les entreprises, de Paris à Brazzaville.
            </p>

            {/* CTAs */}
            <div className="hero-in hero-in-4 mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-white text-ink hover:bg-white/90 px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-colors"
              >
                Demander un audit
              </a>
              <a
                href="/travaux"
                className="border-2 border-white/30 text-white hover:border-white px-6 py-3 rounded-full font-semibold text-sm inline-flex items-center gap-2 transition-colors"
              >
                Nos travaux
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — EXPERTISES
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          {/* Header */}
          <div className="reveal reveal-up">
            <p className="text-muted text-xs uppercase tracking-widest">
              nos expertises
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10">
            {expertises.map((e, i) => (
              <Link
                key={e.href}
                href={e.href}
                className={`expertise-card group rounded-2xl border border-border p-6 cursor-pointer hover:border-agency/30 reveal reveal-up stagger-${i + 1}`}
              >
                {e.icon}
                <p className="font-bold text-ink mb-2 text-sm">{e.title}</p>
                <p className="text-muted text-xs leading-relaxed">{e.body}</p>
              </Link>
            ))}
          </div>

          {/* Footer link */}
          <div className="mt-10 text-center">
            <Link
              href="/expertises"
              className="text-sm text-agency underline underline-offset-2"
            >
              → Voir toutes nos expertises
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — LUMINA EDUCATION
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-subtle">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left — text */}
            <div className="flex-1 reveal reveal-left">
              <ProductIcon product="education" size={48} />
              <p className="text-xs uppercase tracking-widest text-muted mt-4">
                notre produit
              </p>
              <h2 className="text-3xl font-black text-ink mt-1">
                LUMINA Education
              </h2>
              <p className="mt-4 max-w-md text-muted leading-relaxed">
                Plateforme SaaS de gestion scolaire pour les établissements privés.
                Bulletins numériques, suivi des paiements, emploi du temps et alertes
                SMS. Tout en un.
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {[
                  "Bulletins PDF générés en un clic",
                  "Paiements et relances automatisées",
                  "Espace parent accessible par SMS",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-ink">
                    <CheckCircle2 className="text-edu shrink-0" size={18} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button as="a" href="/lumina-education" variant="edu">
                  Découvrir le produit
                </Button>
              </div>
            </div>

            {/* Right — demo */}
            <div className="flex-1 flex justify-center reveal reveal-right">
              <BulletinDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — TRAVAUX
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          {/* Header */}
          <div className="reveal reveal-up">
            <p className="text-muted text-xs uppercase tracking-widest">
              travaux récents
            </p>
          </div>

          {/* Project rows */}
          <div className="mt-10">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/travaux/${p.slug}`}
                className={`project-row group flex items-center gap-4 py-5 border-b border-border cursor-pointer reveal reveal-up stagger-${i + 1}`}
              >
                {/* Number */}
                <span className="text-muted text-sm font-mono w-8 flex-shrink-0">
                  {p.num}
                </span>

                {/* Logo */}
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

                {/* Name */}
                <span className="font-semibold text-ink group-hover:text-agency transition-colors flex-1">
                  {p.name}
                </span>

                {/* Tags */}
                <span className="hidden sm:flex gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted bg-subtle px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </span>

                {/* Arrow */}
                <ArrowRight
                  className="text-muted group-hover:text-agency group-hover:translate-x-1 transition-all"
                  size={16}
                />
              </Link>
            ))}
          </div>

          {/* Footer link */}
          <div className="mt-10 text-center">
            <Link
              href="/travaux"
              className="text-sm text-agency underline underline-offset-2"
            >
              → Tous les travaux
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CTA FINALE
      ══════════════════════════════════════════════════════ */}
      <section className="bg-ink text-white py-20 lg:py-28">
        <Container>
          <div className="reveal reveal-up text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black">Parlons de votre projet.</h2>
            <p className="text-white/70 mt-4">
              Décrivez-nous votre besoin. Nous répondons sous 48 heures.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-ink hover:bg-white/90 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Prendre contact →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
