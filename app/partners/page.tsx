import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

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

// Étape D : contenu complet (formulaire de candidature)
export default function PartnersPage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Partenaires — étape D à venir</p>
    </Container>
  );
}
