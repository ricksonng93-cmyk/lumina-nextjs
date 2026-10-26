import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Projet LUMINA Education",
  description:
    "Conception et développement de LUMINA Education, plateforme de gestion scolaire en service au C.S Le Savoir de Rabbin à Brazzaville.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/lumina-education",
    title: "Projet LUMINA Education | LUMINA Creative Group",
    description:
      "Conception et développement de LUMINA Education, plateforme de gestion scolaire.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/lumina-education" },
};

// Étape E : contenu complet
export default function ProjetLuminaEducationPage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Projet LUMINA Education — étape E à venir</p>
    </Container>
  );
}
