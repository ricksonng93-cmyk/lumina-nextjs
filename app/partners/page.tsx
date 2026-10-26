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
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-4">partenaires</p>
          <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight max-w-2xl">
            Travaillons ensemble.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            Deux façons de collaborer avec LUMINA Creative Group :
            devenir apporteur d&apos;affaires ou rejoindre l&apos;équipe.
          </p>
        </Container>
      </section>

      {/* ── Deux voies ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Apporteur d'affaires */}
            <div className="md:pr-12 pb-12 md:pb-0">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-5">01</p>
              <h2 className="text-2xl font-black text-ink leading-tight mb-4">
                Apporteur d&apos;affaires
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Vous avez un réseau et identifiez des opportunités dans des
                établissements scolaires, des services administratifs ou des
                entreprises. Vous nous mettez en relation, nous prenons en
                charge la suite et vous reversons une commission sur chaque
                projet signé.
              </p>
              <ul className="space-y-2">
                {[
                  "Commission sur chaque projet signé",
                  "Pas d'investissement de votre part",
                  "Vous gardez le lien avec votre client",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agency flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rejoindre l'équipe */}
            <div className="border-t md:border-t-0 md:border-l border-border pt-12 md:pt-0 md:pl-12">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-5">02</p>
              <h2 className="text-2xl font-black text-ink leading-tight mb-4">
                Rejoindre l&apos;équipe
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Vous êtes développeur, designer ou chef de projet, et le travail
                que nous faisons vous correspond. Envoyez-nous un message avec
                votre profil et ce qui vous attire dans ce projet.
              </p>
              <ul className="space-y-2">
                {[
                  "Projets variés : SaaS, sites, identités",
                  "Équipe à taille humaine",
                  "Présence Paris et Brazzaville",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agency flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
