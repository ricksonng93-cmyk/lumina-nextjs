import type { Metadata } from "next";
import Container from "@/app/components/ui/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales et confidentialité",
  description:
    "Mentions légales, éditeur du site et politique de confidentialité de LUMINA Creative Group.",
  openGraph: {
    url: "https://lumina-cg.com/mentions-legales",
    title: "Mentions légales | LUMINA Creative Group",
    description: "Mentions légales et politique de confidentialité.",
  },
  alternates: { canonical: "https://lumina-cg.com/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-ink text-white py-16 lg:py-20">
        <Container className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            Mentions légales et confidentialité
          </h1>
          <p className="text-white/60 text-sm">Dernière mise à jour : octobre 2026</p>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12 text-sm leading-relaxed text-ink/80">

            {/* ── Mentions légales ── */}
            <div>
              <h2 className="text-xl font-bold text-ink mb-6">Mentions légales</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-ink mb-1">Éditeur du site</h3>
                  <p>
                    LUMINA Creative Group<br />
                    Directeur de la publication : Faity Rickson NGAKOUA-BOUYA<br />
                    Contact :{" "}
                    <a href="mailto:contact@lumina-cg.com" className="text-agency underline underline-offset-2 hover:text-agency/80">
                      contact@lumina-cg.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-1">Hébergeur</h3>
                  <p>
                    Vercel Inc.<br />
                    340 Pine Street, Suite 800<br />
                    San Francisco, CA 94104, États-Unis<br />
                    {/* Source : https://vercel.com/legal/privacy-policy */}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-agency underline underline-offset-2 hover:text-agency/80"
                    >
                      vercel.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* ── Politique de confidentialité ── */}
            <div>
              <h2 className="text-xl font-bold text-ink mb-6">Politique de confidentialité</h2>

              <div className="space-y-8">

                <div>
                  <h3 className="font-semibold text-ink mb-2">Données collectées</h3>
                  <p className="mb-3">
                    Nous collectons uniquement les données nécessaires pour répondre à vos demandes.
                    Elles comprennent :
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nom, prénom, adresse email, téléphone (via le formulaire de contact)</li>
                    <li>Nom de l&apos;entreprise, poste, description du projet</li>
                    <li>Adresse IP et type de navigateur (à des fins de sécurité)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-2">Utilisation des données</h3>
                  <p className="mb-3">Vos données servent à :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Répondre à vos demandes de devis et questions</li>
                    <li>Exécuter et facturer les prestations convenues</li>
                    <li>Vous envoyer les actualités auxquelles vous vous êtes inscrit</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-2">Cookies et traceurs</h3>
                  <p>
                    Ce site ne dépose aucun cookie de mesure d&apos;audience, de publicité ou de
                    réseaux sociaux. Aucun bandeau de consentement n&apos;est donc nécessaire.
                    Si nous intégrons un outil d&apos;analyse à l&apos;avenir, cette page sera mise à jour.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-2">Sécurité</h3>
                  <p>
                    Les données sont stockées sur les serveurs de Vercel Inc. (voir hébergeur
                    ci-dessus), protégées par HTTPS. L&apos;accès est limité aux membres de l&apos;équipe
                    qui en ont besoin pour répondre à vos demandes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-2">Sous-traitants</h3>
                  <p>
                    Les formulaires de contact, de candidature et d&apos;inscription à la newsletter
                    sont traités par{" "}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-agency underline underline-offset-2 hover:text-agency/80"
                    >
                      Formspree Inc.
                    </a>{" "}
                    (États-Unis), sous-traitant de traitement au sens du RGPD.
                    Nous ne vendons pas vos données et ne les partageons avec aucun autre tiers.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-ink mb-2">Vos droits</h3>
                  <p className="mb-3">
                    Vous avez le droit d&apos;accéder à vos données, de les rectifier, de les supprimer
                    ou d&apos;en demander la portabilité.
                    Pour exercer ces droits, écrivez-nous à :
                  </p>
                  <Link
                    href="mailto:contact@lumina-cg.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-ink/90 transition-colors"
                  >
                    contact@lumina-cg.com
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
