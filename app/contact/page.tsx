import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrivez-nous ou appelez-nous. Réponse sous 24 heures.",
  openGraph: {
    url: "https://lumina-cg.com/contact",
    title: "Contact | LUMINA Creative Group",
    description: "Écrivez-nous ou appelez-nous. Réponse sous 24 heures.",
  },
  alternates: { canonical: "https://lumina-cg.com/contact" },
};

// Étape D : contenu complet (formulaire de contact)
export default function ContactPage() {
  return (
    <Container className="py-32 text-center">
      <p className="text-muted text-sm">Contact — étape D à venir</p>
    </Container>
  );
}
