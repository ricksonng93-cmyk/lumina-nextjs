import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "LUMINA Creative Group | Agence numérique à Paris et Brazzaville",
  description:
    "Nous auditons, concevons, construisons et maintenons les outils numériques des écoles, des administrations et des entreprises. Éditeur de LUMINA Education.",
  openGraph: {
    url: "https://lumina-cg.com",
    title: "LUMINA Creative Group | Agence numérique à Paris et Brazzaville",
    description:
      "Nous auditons, concevons, construisons et maintenons les outils numériques des écoles, des administrations et des entreprises. Éditeur de LUMINA Education.",
  },
  alternates: { canonical: "https://lumina-cg.com" },
};

// Étape B : contenu complet de l'accueil
export default function HomePage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Accueil — étape B à venir</p>
    </Container>
  );
}
