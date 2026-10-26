import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Travaux",
  description:
    "Nos projets réalisés : LUMINA Education, France-Afrique Média, Master Finance, TechCongo.",
  openGraph: {
    url: "https://lumina-cg.com/travaux",
    title: "Travaux | LUMINA Creative Group",
    description:
      "Nos projets réalisés : LUMINA Education, France-Afrique Média, Master Finance, TechCongo.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux" },
};

// Étape E : contenu complet
export default function TravauxPage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Travaux — étape E à venir</p>
    </Container>
  );
}
