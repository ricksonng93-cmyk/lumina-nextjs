import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import ScrollInit from "@/app/components/ui/ScrollInit";

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina-cg.com"),
  title: {
    default: "LUMINA Creative Group | Agence numérique à Paris et Brazzaville",
    template: "%s | LUMINA Creative Group",
  },
  description:
    "Nous auditons, concevons, construisons et maintenons les outils numériques des écoles, des administrations et des entreprises. Éditeur de LUMINA Education.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "LUMINA Creative Group",
    url: "https://lumina-cg.com",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={pjs.variable}>
      <body className="font-sans bg-surface text-ink antialiased">
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollInit />
      </body>
    </html>
  );
}
