import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import TravauxList from "@/app/components/travaux/TravauxList";

export const metadata: Metadata = {
  title: "Travaux",
  description:
    "Nos projets réalisés\u00a0: LUMINA Education, France-Afrique Média, Master Finance, TechCongo.",
  openGraph: {
    url: "https://lumina-cg.com/travaux",
    title: "Travaux | LUMINA Creative Group",
    description:
      "Nos projets réalisés\u00a0: LUMINA Education, France-Afrique Média, Master Finance, TechCongo.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux" },
};

export default function TravauxPage() {
  return (
    <>
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-4">
            travaux récents
          </p>
          <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight mb-3">
            Une sélection de nos dernières réalisations.
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-16 max-w-xl">
            Plateformes métier, identités de marque et sites institutionnels,
            conçus et déployés par notre équipe.
          </p>

          <TravauxList />
        </Container>
      </section>
    </>
  );
}
