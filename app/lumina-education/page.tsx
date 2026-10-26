import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";
import EducationDemo from "@/app/components/product/EducationDemo";

export const metadata: Metadata = {
  title: "LUMINA Education",
  description:
    "Notes, bulletins, absences et paiements de scolarité, dans un seul outil. Les parents suivent la scolarité de leur enfant depuis leur téléphone.",
  openGraph: {
    url: "https://lumina-cg.com/lumina-education",
    title: "LUMINA Education | La gestion scolaire, enfin simple.",
    description:
      "Notes, bulletins, absences et paiements de scolarité, dans un seul outil.",
  },
  alternates: { canonical: "https://lumina-cg.com/lumina-education" },
};

const FEATURES = [
  "Notes et bulletins, générés automatiquement",
  "Absences et retards, saisis par les enseignants",
  "Paiements de scolarité et suivi des soldes",
  "Accès parent\u00a0: bulletin et absences depuis le téléphone",
  "Accès par rôle\u00a0: direction, enseignants, administration, parents",
];

const STEPS = [
  { n: "01", label: "Audit de vos procédures actuelles" },
  { n: "02", label: "Paramétrage sur vos circuits réels" },
  { n: "03", label: "Formation de vos équipes sur place" },
];

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
                Notes, bulletins, absences et paiements de scolarité, dans un
                seul outil. Les parents suivent la scolarité de leur enfant
                depuis leur téléphone.
              </p>
              <div className="mt-10">
                <Button as="a" href="/contact">Demander un audit</Button>
              </div>
            </div>

            {/* Visuel animé */}
            <div className="flex-1 flex justify-center w-full">
              <EducationDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Ce que nous mettons en place ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-widest text-muted mb-10">
              ce que nous mettons en place
            </p>
            <ul className="space-y-5">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-edu/10 flex items-center justify-center">
                    <Check size={11} className="text-edu" strokeWidth={2.5} />
                  </span>
                  <span className="text-ink leading-snug">{f}</span>
                </li>
              ))}
            </ul>
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

      {/* ── Preuve terrain ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-widest text-muted mb-6">
              déjà déployé
            </p>
            <blockquote className="text-2xl font-black text-ink leading-snug tracking-tight">
              &ldquo;Les enseignants saisissent les notes directement depuis leur
              téléphone. Les bulletins sont prêts le jour même.&rdquo;
            </blockquote>
            <p className="mt-4 text-muted text-sm">
              C.S Le Savoir de Rabbin &mdash; Brazzaville
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
