import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import FAQ from "@/app/components/ui/FAQ";
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left: headline + body + CTA */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-agency mb-6">
                nos expertises
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-ink leading-none tracking-tight mb-6">
                Quatre<br />domaines.
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-10 max-w-md">
                Du diagnostic initial à la maintenance long terme, nous couvrons
                l&apos;ensemble du cycle de vie d&apos;un projet numérique.
              </p>
              <Button as="a" href="/contact">Demander un audit</Button>
            </div>

            {/* Right: stacked expertise list */}
            <div className="border-t border-border">
              {HERO_CARDS.map((card) => (
                <a
                  key={card.id}
                  href={`#${card.id}`}
                  className="group flex items-center justify-between py-5 border-b border-border hover:bg-subtle -mx-2 px-2 rounded-lg transition-colors duration-150"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-muted w-6 flex-shrink-0">{card.num}</span>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-agency mb-1">{card.label}</span>
                      <span className="font-semibold text-ink text-base group-hover:text-agency transition-colors duration-150">{card.title}</span>
                    </div>
                  </div>
                  <ArrowRight size={14} className="flex-shrink-0 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-150" />
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

      {/* ── FAQ ── */}
      <FAQ items={[
        {
          q: "Nous avons déjà des outils en place. Est-ce qu'on doit tout recommencer ?",
          a: "Non. L'audit commence justement par analyser ce qui existe. On identifie ce qui fonctionne, ce qui bloque, et ce qui peut être amélioré sans tout reconstruire. Beaucoup de projets se règlent sans repartir de zéro.",
        },
        {
          q: "On est basés à Brazzaville. Travaillez-vous avec des clients au Congo ?",
          a: "Oui. Nous travaillons avec des structures à Brazzaville, Pointe-Noire et dans la diaspora depuis Paris. Les projets se pilotent à distance avec des points réguliers. Pour les phases de formation et de déploiement, nous nous déplaçons sur place.",
        },
        {
          q: "On ne sait pas exactement ce dont on a besoin. Par où commencer ?",
          a: "Par un échange. Décrivez-nous votre situation et ce qui bloque aujourd'hui. Nous identifions ensemble les priorités et proposons un plan adapté à votre réalité, pas à un modèle type.",
        },
        {
          q: "Combien de temps dure un projet en moyenne ?",
          a: "Cela dépend du périmètre et des spécificités de votre projet. Nous posons un calendrier réaliste dès le départ.",
        },
        {
          q: "Comment se passe la collaboration une fois le projet lancé ?",
          a: "Vous avez un interlocuteur direct, joignable par WhatsApp et email. Des points d'étape réguliers permettent de suivre l'avancement, d'ajuster le cap et de répondre à vos questions sans délai.",
        },
      ]} />

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
