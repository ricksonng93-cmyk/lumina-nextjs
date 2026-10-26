import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import PartnersForm from "@/app/components/contact/PartnersForm";

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Devenez apporteur d'affaires ou rejoignez l'équipe LUMINA Creative Group.",
  openGraph: {
    url: "https://lumina-cg.com/partners",
    title: "Partenaires | LUMINA Creative Group",
    description: "Devenez apporteur d'affaires ou rejoignez l'équipe.",
  },
  alternates: { canonical: "https://lumina-cg.com/partners" },
};

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-widest text-muted mb-6">
              partenaires
            </p>
            <h1 className="text-5xl lg:text-6xl font-black text-ink leading-tight tracking-tight">
              Travaillons ensemble.
            </h1>
            <p className="mt-6 text-muted text-xl leading-relaxed max-w-xl">
              Deux façons de collaborer avec LUMINA Creative Group :
              devenir apporteur d&apos;affaires ou rejoindre l&apos;équipe.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Deux voies ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Apporteur d'affaires */}
            <div className="border border-border rounded-2xl p-8 lg:p-10">
              <p className="font-mono text-xs text-muted mb-6">01</p>
              <h2 className="text-2xl font-black text-ink leading-tight mb-4">
                Apporteur d&apos;affaires
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Vous avez un réseau et identifiez des opportunités dans des
                établissements scolaires, des services administratifs ou des
                entreprises. Vous nous mettez en relation, nous prenons en
                charge la suite et vous reversons une commission sur chaque
                projet signé.
              </p>
              <ul className="space-y-3">
                {[
                  "Commission sur chaque projet signé",
                  "Pas d'investissement de votre part",
                  "Vous gardez le lien avec votre client",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agency flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Rejoindre l'équipe */}
            <div className="bg-ink rounded-2xl p-8 lg:p-10">
              <p className="font-mono text-xs text-white/40 mb-6">02</p>
              <h2 className="text-2xl font-black text-white leading-tight mb-4">
                Rejoindre l&apos;équipe
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Vous êtes développeur, designer ou chef de projet, et le travail
                que nous faisons vous correspond. Envoyez-nous un message avec
                votre profil et ce qui vous attire dans ce projet.
              </p>
              <ul className="space-y-3">
                {[
                  "Projets variés : SaaS, sites, identités",
                  "Équipe à taille humaine",
                  "Présence Paris et Brazzaville",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Ce que ça implique ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-4">comment ça marche</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Vous signalez",
                  body: "Un prospect, un besoin identifié. Un message suffit.",
                },
                {
                  num: "02",
                  title: "Nous prenons le relais",
                  body: "Nous contactons, analysons, proposons et signons.",
                },
                {
                  num: "03",
                  title: "Vous êtes rémunéré",
                  body: "Une commission versée à chaque projet signé grâce à vous.",
                },
              ].map((step) => (
                <div key={step.num} className="border border-border rounded-xl p-5 bg-white">
                  <p className="font-mono text-xs text-muted mb-3">{step.num}</p>
                  <p className="font-bold text-ink text-sm mb-2">{step.title}</p>
                  <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Formulaire ── */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-widest text-muted mb-6">
              nous écrire
            </p>
            <PartnersForm />
          </div>
        </Container>
      </section>
    </>
  );
}
