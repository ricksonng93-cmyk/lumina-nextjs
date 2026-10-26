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

const CONTACT_ITEMS = [
  { type: "phone", icon: "phone", href: "tel:+242069121311", label: "+242 06 912 13 11" },
  { type: "phone", icon: "phone", href: "tel:+242067393874", label: "+242 06 739 38 74" },
  { type: "phone", icon: "phone", href: "tel:+330758172693", label: "+33 07 58 17 26 93" },
  { type: "email", icon: "mail",  href: "mailto:contact@lumina-cg.com", label: "contact@lumina-cg.com" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-ink py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left: text */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">
                contact
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-lg">
                Parlons de votre projet.
              </h1>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-md">
                Pas de formulaire à rallonge. Décrivez votre situation,
                nous revenons vers vous sous 24 heures ouvrées.
              </p>
            </div>

            {/* Right: contact info cards */}
            <div className="space-y-3">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3 group"
                >
                  {item.icon === "phone" && (
                    <Phone size={15} className="text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  )}
                  {item.icon === "mail" && (
                    <Mail size={15} className="text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                  )}
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
              <div className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                <MapPin size={15} className="text-white/40 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-relaxed">
                  Paris, France<br />Brazzaville, Congo
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Formulaire ── */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-widest text-muted mb-8">
              votre message
            </p>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
