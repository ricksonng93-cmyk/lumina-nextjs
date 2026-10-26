import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "L'équipe",
  description:
    "Faity Rickson NGAKOUA-BOUYA, fondateur et directeur créatif de LUMINA Creative Group.",
  openGraph: {
    url: "https://lumina-cg.com/equipe",
    title: "L'équipe | LUMINA Creative Group",
    description: "Faity Rickson NGAKOUA-BOUYA, fondateur et directeur créatif.",
  },
  alternates: { canonical: "https://lumina-cg.com/equipe" },
};

// Étape E : contenu complet
export default function EquipePage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">L&apos;équipe — étape E à venir</p>
    </Container>
  );
}
