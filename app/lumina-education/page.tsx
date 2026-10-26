import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";
import BulletinDemo from "@/app/components/home/BulletinDemo";
import PhoneScrollSection from "@/app/components/education/PhoneScrollSection";
import EducationBento from "@/app/components/education/EducationBento";

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

const STEPS = [
  { n: "01", label: "Audit de vos proc\u00e9dures actuelles" },
  { n: "02", label: "Param\u00e9trage sur vos circuits r\u00e9els" },
  { n: "03", label: "Formation de vos \u00e9quipes sur place" },
];

export default function LuminaEducationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <div className="flex-1 max-w-xl">
              <div className="mb-6">
                <ProductIcon product="education" size={52} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-edu mb-3">lumina education</p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                La gestion scolaire, enfin simple.
              </h1>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Notes, bulletins, paiements, emploi du temps et communication.
                Une plateforme complète, avec un espace parent et un espace élève.
              </p>
              <div className="mt-10">
                <Button as="a" href="/contact">Demander un audit</Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center w-full">
              <BulletinDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section signature : scrollytelling ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-16">
            le produit en action
          </p>
          <PhoneScrollSection />
        </Container>
      </section>

      {/* ── Les fonctions ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-10">
            ce que fait lumina education
          </p>
          <EducationBento />
        </Container>
      </section>

      {/* ── Comment nous déployons ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-widest text-muted mb-12 text-center">
              comment nous déployons
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className={[
                    "py-8 md:py-0 text-center md:text-left",
                    i > 0 ? "border-t md:border-t-0 md:border-l border-border md:pl-10" : "",
                    i < STEPS.length - 1 ? "md:pr-10" : "",
                  ].join(" ")}
                >
                  <p className="text-xs font-mono text-muted mb-4">{s.n}</p>
                  <p className="text-ink text-lg font-semibold leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Référence terrain ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-[10px] uppercase tracking-widest text-muted mb-8">
              déjà déployé
            </p>
            {/* Logo : emplacement réservé, fichier à fournir */}
            <div className="w-20 h-20 rounded-2xl border-2 border-border bg-subtle flex items-center justify-center mb-6 mx-auto">
              <span className="text-xl font-black text-muted select-none">SR</span>
            </div>
            <p className="font-black text-ink text-2xl leading-tight">C.S Le Savoir de Rabbin</p>
            <p className="text-muted text-sm mt-1">Brazzaville · Congo</p>
            <p className="text-sm text-muted mt-3">En service depuis la rentrée 2026-2027</p>

            {/* Citation — masquée jusqu'à réception du texte */}
            {/* TODO : décommenter quand Marlyse Safoula fournit sa citation
            <blockquote className="mt-8 max-w-lg mx-auto">
              <p className="text-2xl font-black text-ink leading-snug tracking-tight">
                &ldquo;[Citation de Marlyse Safoula, directrice générale]&rdquo;
              </p>
              <footer className="mt-4">
                <p className="font-semibold text-ink text-sm">Marlyse Safoula</p>
                <p className="text-muted text-sm">Directrice générale, C.S Le Savoir de Rabbin</p>
              </footer>
            </blockquote>
            */}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight">
              Commençons par regarder ce que vous avez déjà.
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Un audit sans engagement. Nous analysons vos procédures et vous
              indiquons ce qui mérite d&apos;être conservé, numérisé ou restructuré.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
