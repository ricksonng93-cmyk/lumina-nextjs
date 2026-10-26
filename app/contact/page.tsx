import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/app/components/ui/Container";
import ContactForm from "@/app/components/contact/ContactForm";

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

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-4">contact</p>
          <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight max-w-xl">
            Parlons de votre projet.
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed max-w-md">
            Pas de formulaire à rallonge. Décrivez votre situation,
            nous revenons vers vous sous 24 heures ouvrées.
          </p>
        </Container>
      </section>

      {/* ── Formulaire + infos ── */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24 items-start">

            {/* Formulaire */}
            <div>
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>

            {/* Infos de contact */}
            <div className="space-y-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted mb-5">
                  nous joindre
                </p>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+242069121311"
                      className="flex items-start gap-3 text-sm text-ink hover:text-agency transition-colors group"
                    >
                      <Phone size={14} className="mt-0.5 flex-shrink-0 text-muted group-hover:text-agency transition-colors" />
                      +242 06 912 13 11
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+242067393874"
                      className="flex items-start gap-3 text-sm text-ink hover:text-agency transition-colors group"
                    >
                      <Phone size={14} className="mt-0.5 flex-shrink-0 text-muted group-hover:text-agency transition-colors" />
                      +242 06 739 38 74
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+330758172693"
                      className="flex items-start gap-3 text-sm text-ink hover:text-agency transition-colors group"
                    >
                      <Phone size={14} className="mt-0.5 flex-shrink-0 text-muted group-hover:text-agency transition-colors" />
                      +33 07 58 17 26 93
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@lumina-cg.com"
                      className="flex items-start gap-3 text-sm text-ink hover:text-agency transition-colors group"
                    >
                      <Mail size={14} className="mt-0.5 flex-shrink-0 text-muted group-hover:text-agency transition-colors" />
                      contact@lumina-cg.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                    <span>Paris, France<br />Brazzaville, Congo</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-[10px] uppercase tracking-widest text-muted mb-3">
                  délai de réponse
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Nous lisons chaque message et répondons sous 24 heures
                  ouvrées. Pour les urgences, appelez directement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
