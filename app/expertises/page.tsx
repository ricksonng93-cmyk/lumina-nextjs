import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

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

// Étape E : contenu complet
export default function ExpertisesPage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Expertises — étape E à venir</p>
    </Container>
  );
}
