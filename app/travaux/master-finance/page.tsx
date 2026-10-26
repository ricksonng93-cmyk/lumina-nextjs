import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Projet Master Finance",
  description: "Développement et identité visuelle réalisés pour Master Finance.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/master-finance",
    title: "Projet Master Finance | LUMINA Creative Group",
    description: "Développement et identité visuelle pour Master Finance.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/master-finance" },
};

// Étape E : contenu complet
export default function ProjetMasterFinancePage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Projet Master Finance — étape E à venir</p>
    </Container>
  );
}
