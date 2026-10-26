import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Projet France-Afrique Média",
  description:
    "Charte graphique, logo et identité visuelle conçus pour France-Afrique Média.",
  openGraph: {
    url: "https://lumina-cg.com/travaux/france-afrique-media",
    title: "Projet France-Afrique Média | LUMINA Creative Group",
    description: "Charte graphique, logo et identité visuelle pour France-Afrique Média.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux/france-afrique-media" },
};

// Étape E : contenu complet
export default function ProjetFranceAfriqueMediaPage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Projet France-Afrique Média — étape E à venir</p>
    </Container>
  );
}
