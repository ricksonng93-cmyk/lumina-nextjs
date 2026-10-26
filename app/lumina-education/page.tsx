import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "LUMINA Education",
  description:
    "Plateforme de gestion scolaire pour établissements du préscolaire au collège. En service au C.S Le Savoir de Rabbin, à Brazzaville.",
  openGraph: {
    url: "https://lumina-cg.com/lumina-education",
    title: "LUMINA Education | Plateforme de gestion scolaire",
    description:
      "Plateforme de gestion scolaire pour établissements du préscolaire au collège.",
  },
  alternates: { canonical: "https://lumina-cg.com/lumina-education" },
};

// Étape C : contenu complet
export default function LuminaEducationPage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">LUMINA Education — étape C à venir</p>
    </Container>
  );
}
