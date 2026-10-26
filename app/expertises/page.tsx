import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import {
  AuditVisual,
  ConceptionVisual,
  IdentiteVisual,
  MaintenanceVisual,
} from "@/app/components/expertises/ExpertisesVisuals";

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
    id:      "audit",
    num:     "01",
    label:   "Audit",
    title:   "Audit de l\u2019existant",
    body:    "Nous ne démarrons jamais sans regarder ce qui existe déjà. Trop de projets échouent parce que personne n'a pris le temps d'analyser ce qui fonctionne, ce qui bloque, et ce qui peut être amélioré plutôt que reconstruit. L'audit est notre point de départ systématique. Nous remettons un diagnostic écrit avec nos recommandations, classées par ordre de priorité.",
    items:   [
      "Diagnostic écrit avec recommandations prioritaires",
      "Cartographie des processus existants",
      "Estimation des efforts et des coûts par chantier",
      "Plan de déploiement progressif proposé",
    ],
    Visual: AuditVisual,
  },
  {
    id:      "conception",
    num:     "02",
    label:   "Construction",
    title:   "Conception et développement",
    body:    "De la maquette à la mise en production. Nous ne séparons jamais la conception du développement : les interfaces que nous dessinons, nous les construisons nous-mêmes, avec les mêmes équipes. Cela garantit que ce qui a été promis est exactement ce qui est livré. Sites institutionnels, plateformes métier, applications SaaS.",
    items:   [
      "Maquettes et prototypes interactifs",
      "Développement frontend et backend",
      "Intégrations tierces : paiement, SMS, authentification",
      "Tests, recette et mise en production",
    ],
    Visual: ConceptionVisual,
  },
  {
    id:      "identite",
    num:     "03",
    label:   "Marque",
    title:   "Identité visuelle",
    body:    "Votre marque est la première impression que vous donnez et la dernière chose que vos clients oublient. Nous créons des identités cohérentes, déclinables sur tous les supports, du web à l'impression. Tout est livré en fichiers sources avec un guide d'utilisation pour votre équipe.",
    items:   [
      "Logotype et déclinaisons (couleur, monochrome, blanc)",
      "Charte graphique complète",
      "Gabarits print et digital",
      "Manuel de marque et guide d'utilisation",
    ],
    Visual: IdentiteVisual,
  },
  {
    id:      "maintenance",
    num:     "04",
    label:   "Durée",
    title:   "Maintenance et formation",
    body:    "La livraison n'est pas la fin du projet. Nous assurons l'hébergement, les mises à jour de sécurité, les sauvegardes et les correctifs. Nous formons également vos équipes sur place pour qu'elles soient autonomes sur l'outil au quotidien.",
    items:   [
      "Hébergement et surveillance continue",
      "Mises à jour de sécurité et fonctionnelles",
      "Sessions de formation sur site",
      "Documentation technique transmise à l'équipe",
    ],
    Visual: MaintenanceVisual,
  },
];

const HERO_CARDS = EXPERTISES.map((e) => ({
  num:   e.num,
  label: e.label,
  title: e.title,
  id:    e.id,
}));

export default function ExpertisesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Left: text + CTA */}
            <div className="flex-1 max-w-xl">
              <p className="text-[10px] uppercase tracking-widest text-agency mb-3">
                nos expertises
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight">
                Quatre domaines.<br />Un seul interlocuteur.
              </h1>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Du diagnostic initial à la maintenance long terme, nous couvrons
                l&apos;ensemble du cycle de vie d&apos;un projet numérique.
              </p>
              <div className="mt-10">
                <Button as="a" href="/contact">Demander un audit</Button>
              </div>
            </div>

            {/* Right: 2x2 expertise cards */}
            <div className="flex-1 w-full grid grid-cols-2 gap-3 max-w-sm lg:max-w-none">
              {HERO_CARDS.map((card) => (
                <a
                  key={card.id}
                  href={`#${card.id}`}
                  className="group border border-border rounded-2xl p-5 lg:p-6 hover:border-agency hover:bg-subtle transition-all duration-200"
                >
                  <p className="font-mono text-xs text-muted mb-3">{card.num}</p>
                  <p className="text-[10px] uppercase tracking-widest text-agency mb-2">{card.label}</p>
                  <p className="font-semibold text-ink text-sm leading-snug group-hover:text-agency transition-colors">
                    {card.title}
                  </p>
                  <ArrowRight size={12} className="mt-3 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Les quatre expertises ── */}
      {EXPERTISES.map((e, i) => {
        const Visual = e.Visual;
        const textFirst = i % 2 === 0;
        return (
          <section
            key={e.id}
            id={e.id}
            className={[
              "py-20 lg:py-28 border-b border-border",
              i % 2 === 1 ? "bg-subtle" : "bg-white",
            ].join(" ")}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text column */}
                <div className={textFirst ? "" : "lg:order-2"}>
                  <p className="font-mono text-xs text-muted mb-4">{e.num}</p>
                  <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight mb-6">
                    {e.title}
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-8 max-w-xl">
                    {e.body}
                  </p>
                  <ul className="space-y-3">
                    {e.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agency flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual column */}
                <div className={["flex justify-center", textFirst ? "" : "lg:order-1"].join(" ")}>
                  <Visual />
                </div>
              </div>
            </Container>
          </section>
        );
      })}

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
