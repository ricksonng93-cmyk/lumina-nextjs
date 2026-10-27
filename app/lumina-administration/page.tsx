import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import ProductIcon from "@/app/components/ui/ProductIcon";
import AdminDemo from "@/app/components/product/AdminDemo";
import AdminBento from "@/app/components/product/AdminBento";
import FAQ from "@/app/components/ui/FAQ";

export const metadata: Metadata = {
  title: "LUMINA Administration",
  description:
    "Dossiers des usagers, courriers, validations et archives, au même endroit. Chaque document est retrouvé en quelques secondes, chaque étape est tracée.",
  openGraph: {
    url: "https://lumina-cg.com/lumina-administration",
    title: "LUMINA Administration | Vos services publics, sans papier.",
    description:
      "Dossiers des usagers, courriers, validations et archives, au même endroit.",
  },
  alternates: { canonical: "https://lumina-cg.com/lumina-administration" },
};

const STEPS = [
  { n: "01", label: "Audit de vos procédures actuelles" },
  { n: "02", label: "Paramétrage sur vos circuits réels" },
  { n: "03", label: "Formation de vos agents sur place" },
];

export default function LuminaAdministrationPage() {
  return (
    <>
      {/* ── En-tête produit ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Texte */}
            <div className="flex-1 max-w-xl">
              <div className="mb-6">
                <ProductIcon product="administration" size={52} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-admin mb-3">
                lumina administration
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                Vos services publics, sans papier.
              </h1>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Dossiers des usagers, courriers, validations et archives, au
                même endroit. Chaque document est retrouvé en quelques
                secondes, chaque étape est tracée.
              </p>
              <div className="mt-10">
                <Button as="a" href="/contact">Demander un audit</Button>
              </div>
            </div>

            {/* Visuel animé */}
            <div className="flex-1 flex justify-center w-full">
              <AdminDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Ce que fait LUMINA Administration ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-10">
            ce que fait lumina administration
          </p>
          <AdminBento />
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

      {/* ── FAQ ── */}
      <FAQ accent="administration" items={[
        {
          q: "Peut-on numériser et importer nos archives papier existantes ?",
          a: "Oui. L'importation et la numérisation des données existantes font partie du déploiement. Vos archives historiques deviennent consultables et cherchables depuis la plateforme, sans tout ressaisir manuellement.",
        },
        {
          q: "Comment la plateforme gère-t-elle les coupures d'électricité et de réseau ?",
          a: "Les données sont hébergées sur des serveurs sécurisés. À la reconnexion, chaque agent retrouve son travail exactement où il l'avait laissé, sans perte. Nous recommandons un accès mobile comme solution de continuité.",
        },
        {
          q: "Qui contrôle les accès au sein de notre structure ?",
          a: "L'administrateur principal gère les droits de chaque agent. Chaque utilisateur n'accède qu'aux dossiers relevant de sa fonction. Tout est traçable : qui a consulté quoi, à quelle heure.",
        },
        {
          q: "Peut-on adapter les circuits de validation à notre organisation ?",
          a: "Oui. Chaque structure a ses propres processus. Nous configurons LUMINA Administration selon vos circuits réels : niveaux hiérarchiques, signatures requises, délais et notifications automatiques.",
        },
      ]} />

      {/* ── Appel à l'action ── */}
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
