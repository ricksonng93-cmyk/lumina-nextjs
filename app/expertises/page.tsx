import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "Nos expertises",
  description:
    "Audit de l'existant, conception et développement, identité visuelle, maintenance et formation. Découvrez nos quatre domaines d'expertise.",
  openGraph: {
    url: "https://lumina-cg.com/expertises",
    title: "Nos expertises | LUMINA Creative Group",
    description:
      "Audit de l'existant, conception et développement, identité visuelle, maintenance et formation.",
  },
  alternates: { canonical: "https://lumina-cg.com/expertises" },
};

const EXPERTISES = [
  {
    id:    "audit",
    num:   "01",
    label: "Audit",
    title: "Audit de l\u2019existant",
    body:  "Nous ne démarrons jamais sans regarder ce qui existe déjà. Trop de projets échouent parce que personne n'a pris le temps d'analyser ce qui fonctionne, ce qui bloque, et ce qui peut être amélioré plutôt que reconstruit. L'audit est notre point de départ systématique. Nous remettons un diagnostic écrit avec nos recommandations, classées par ordre de priorité.",
    items: [
      "Diagnostic écrit avec recommandations prioritaires",
      "Cartographie des processus existants",
      "Estimation des efforts et des coûts par chantier",
      "Plan de déploiement progressif proposé",
    ],
  },
  {
    id:    "conception",
    num:   "02",
    label: "Construction",
    title: "Conception et développement",
    body:  "De la maquette à la mise en production. Nous ne séparons jamais la conception du développement : les interfaces que nous dessinons, nous les construisons nous-mêmes, avec les mêmes équipes. Cela garantit que ce qui a été promis est exactement ce qui est livré. Sites institutionnels, plateformes métier, applications SaaS.",
    items: [
      "Maquettes et prototypes interactifs",
      "Développement frontend et backend",
      "Intégrations tierces : paiement, SMS, authentification",
      "Tests, recette et mise en production",
    ],
  },
  {
    id:    "identite",
    num:   "03",
    label: "Marque",
    title: "Identité visuelle",
    body:  "Votre marque est la première impression que vous donnez et la dernière chose que vos clients oublient. Nous créons des identités cohérentes, déclinables sur tous les supports, du web à l'impression. Tout est livré en fichiers sources avec un guide d'utilisation pour votre équipe.",
    items: [
      "Logotype et déclinaisons (couleur, monochrome, blanc)",
      "Charte graphique complète",
      "Gabarits print et digital",
      "Manuel de marque et guide d'utilisation",
    ],
  },
  {
    id:    "maintenance",
    num:   "04",
    label: "Durée",
    title: "Maintenance et formation",
    body:  "La livraison n'est pas la fin du projet. Nous assurons l'hébergement, les mises à jour de sécurité, les sauvegardes et les correctifs. Nous formons également vos équipes sur place pour qu'elles soient autonomes sur l'outil au quotidien.",
    items: [
      "Hébergement et surveillance continue",
      "Mises à jour de sécurité et fonctionnelles",
      "Sessions de formation sur site",
      "Documentation technique transmise à l'équipe",
    ],
  },
];

export default function ExpertisesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-4">
            nos expertises
          </p>
          <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight max-w-2xl">
            Quatre domaines. Un seul interlocuteur.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            Du diagnostic initial à la maintenance long terme, nous couvrons
            l&apos;ensemble du cycle de vie d&apos;un projet numérique.
          </p>
        </Container>
      </section>

      {/* ── Les quatre expertises ── */}
      {EXPERTISES.map((e, i) => (
        <section
          key={e.id}
          id={e.id}
          className={[
            "py-20 lg:py-28 border-b border-border",
            i % 2 === 1 ? "bg-subtle" : "bg-white",
          ].join(" ")}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24">

              {/* Étiquette */}
              <div className="lg:pt-1.5">
                <p className="text-xs font-mono text-muted mb-1">{e.num}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted">{e.label}</p>
              </div>

              {/* Contenu */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight mb-6">
                  {e.title}
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-10 max-w-2xl">
                  {e.body}
                </p>
                <ul className="space-y-3">
                  {e.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agency flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight">
              Commençons par regarder ce que vous avez déjà.
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Un audit sans engagement. Nous analysons votre situation et vous
              indiquons ce qui mérite d&apos;être conservé, amélioré ou reconstruit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="/contact">Demander un audit</Button>
              <Link
                href="/travaux"
                className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors"
              >
                Voir nos travaux <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
