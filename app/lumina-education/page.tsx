import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";
import BulletinDemo from "@/app/components/home/BulletinDemo";

export const metadata: Metadata = {
  title: "LUMINA Education",
  description:
    "Notes, bulletins, paiements, emploi du temps et communication. Une plateforme complète pour les établissements scolaires, avec un espace parent et un espace élève.",
  openGraph: {
    url: "https://lumina-cg.com/lumina-education",
    title: "LUMINA Education | La gestion scolaire, enfin simple.",
    description:
      "Notes, bulletins, paiements, emploi du temps et communication. Une plateforme complète pour les établissements scolaires.",
  },
  alternates: { canonical: "https://lumina-cg.com/lumina-education" },
};

/* ── Fonctions présentées ─────────────────────────────────────────── */
/* Textes fournis par le client. */

const HIGHLIGHT_FEATURES = [
  {
    title: "Espace parent",
    body: "Les familles suivent les notes, les bulletins et les paiements de leur enfant depuis leur téléphone.",
  },
  {
    title: "Espace élève",
    body: "L\u2019élève consulte ses notes, ses bulletins et son emploi du temps.",
  },
];

const FEATURES = [
  {
    title: "Notes et bulletins",
    body: "Bulletins générés en un clic, moyennes et rangs calculés. Au collège, trois notes par matière et par trimestre (devoir de classe, devoir départemental, composition). Au primaire, des notes mensuelles sur\u00a010 ou sur\u00a020 selon la discipline.",
  },
  {
    title: "Scolarité et paiements",
    body: "Suivi des paiements, reçus numérotés, relances des familles, export Excel.",
  },
  {
    title: "Inscriptions",
    body: "Dossiers des élèves, import depuis Excel, classes.",
  },
  {
    title: "Emplois du temps",
    body: "Construits par l\u2019école, affichables au mur.",
  },
  {
    title: "Comptes par rôle",
    body: "Direction, secrétariat, enseignants, parents, élèves\u00a0: chacun voit ce qui le concerne.",
  },
  {
    title: "Communication",
    body: "Messages et SMS aux familles.",
  },
];

const STEPS = [
  { n: "01", label: "Audit de vos proc\u00e9dures actuelles" },
  { n: "02", label: "Param\u00e9trage sur vos circuits r\u00e9els" },
  { n: "03", label: "Formation de vos \u00e9quipes sur place" },
];

/* ── Page ─────────────────────────────────────────────────────────── */

export default function LuminaEducationPage() {
  return (
    <>
      {/* ── En-tête produit ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Texte */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <ProductIcon product="education" size={52} />
                <span className="text-xs font-semibold text-muted bg-subtle border border-border px-3 py-1 rounded-full tracking-wide">
                  Déploiement sur mesure
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-edu mb-3">
                lumina education
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                La gestion scolaire, enfin simple.
              </h1>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Notes, bulletins, paiements, emploi du temps et communication.
                Une plateforme complète, avec un espace parent et un espace
                élève.
              </p>
              <div className="mt-10">
                <Button as="a" href="/contact">Demander un audit</Button>
              </div>
            </div>

            {/* Visuel animé */}
            <div className="flex-1 flex justify-center w-full">
              <BulletinDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Espace parent & élève — mis en avant ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-10">
            pour les familles et les élèves
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {HIGHLIGHT_FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={[
                  "py-10 md:py-0",
                  i > 0 ? "border-t md:border-t-0 md:border-l border-border md:pl-10" : "md:pr-10",
                ].join(" ")}
              >
                <h3 className="text-lg font-black text-ink mb-3">{f.title}</h3>
                <p className="text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Ce que nous mettons en place ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-10">
            ce que nous mettons en place
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-4xl">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <h3 className="text-sm font-bold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Comment nous déployons ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-12">
            comment nous déployons
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={[
                  "py-8 md:py-0",
                  i > 0 ? "border-t md:border-t-0 md:border-l border-border md:pl-10" : "",
                  i < STEPS.length - 1 ? "md:pr-10" : "",
                ].join(" ")}
              >
                <p className="text-xs font-mono text-muted mb-4">{s.n}</p>
                <p className="text-ink font-semibold leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Déjà déployé ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-8">
            déjà déployé
          </p>
          <div className="max-w-xs">
            <p className="text-ink font-bold text-sm leading-snug">
              C.S Le Savoir de Rabbin
            </p>
            <p className="text-muted text-[11px] mt-0.5">Brazzaville</p>
            <p className="mt-3 text-xs text-muted">
              En service depuis la rentrée 2026-2027
            </p>
          </div>
        </Container>
      </section>

      {/* ── Appel à l'action ── */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight">
              Commençons par regarder ce que vous avez déjà.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Un audit sans engagement. Nous analysons vos procédures et vous
              indiquons ce qui mérite d&apos;être conservé, numérisé ou restructuré.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button as="a" href="/contact">Demander un audit</Button>
              <Link
                href="/lumina-administration"
                className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors"
              >
                Voir LUMINA Administration <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
