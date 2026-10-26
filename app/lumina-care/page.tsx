import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";
import CareDemo from "@/app/components/product/CareDemo";
import CareBento from "@/app/components/product/CareBento";

export const metadata: Metadata = {
  title: "LUMINA Care",
  description:
    "Accueil, consultations, examens et facturation, dans un seul outil. Le médecin retrouve l\u2019historique du patient, l\u2019accueil sait ce qui reste à payer.",
  openGraph: {
    url: "https://lumina-cg.com/lumina-care",
    title: "LUMINA Care | Le dossier du patient, enfin complet.",
    description:
      "Accueil, consultations, examens et facturation, dans un seul outil.",
  },
  alternates: { canonical: "https://lumina-cg.com/lumina-care" },
};

const STEPS = [
  { n: "01", label: "Audit de vos procédures actuelles" },
  { n: "02", label: "Paramétrage sur vos circuits réels" },
  { n: "03", label: "Formation de vos équipes sur place" },
];

export default function LuminaCarePage() {
  return (
    <>
      {/* ── En-tête produit ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Texte */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <ProductIcon product="care" size={52} />
                <span className="text-xs font-semibold text-muted bg-subtle border border-border px-3 py-1 rounded-full tracking-wide">
                  Déploiement sur mesure
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-care mb-3">
                lumina care
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                Le dossier du patient, enfin complet.
              </h1>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Accueil, consultations, examens et facturation, dans un seul
                outil. Le médecin retrouve l&apos;historique du patient,
                l&apos;accueil sait ce qui reste à payer.
              </p>
              <div className="mt-10">
                <Button as="a" href="/contact">Demander un audit</Button>
              </div>
            </div>

            {/* Visuel animé */}
            <div className="flex-1 flex justify-center w-full">
              <CareDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Ce que fait LUMINA Care ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-10">
            ce que fait lumina care
          </p>
          <CareBento />
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
                href="/lumina-education"
                className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors"
              >
                Voir LUMINA Education <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
