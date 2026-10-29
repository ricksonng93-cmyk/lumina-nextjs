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
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            {/* Left: text */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted mb-6">
                contact
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight max-w-lg">
                Parlons de votre projet.
              </h1>
              <p className="mt-6 text-muted text-lg leading-relaxed max-w-md">
                Pas de formulaire à rallonge. Décrivez votre situation,
                nous revenons vers vous sous 24 heures ouvrées.
              </p>
            </div>

            {/* Right: contact info — clean bordered list */}
            <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-subtle transition-colors group"
                >
                  {item.icon === "phone" && (
                    <Phone size={14} className="text-muted flex-shrink-0" />
                  )}
                  {item.icon === "mail" && (
                    <Mail size={14} className="text-muted flex-shrink-0" />
                  )}
                  <span className="text-sm text-ink group-hover:text-agency transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
              <div className="flex items-start gap-4 px-5 py-4 bg-subtle">
                <MapPin size={14} className="text-muted flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted leading-relaxed">
                  Équipe à Paris et à Brazzaville
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
