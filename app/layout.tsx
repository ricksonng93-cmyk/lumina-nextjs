import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina-cg.com"),
  title: "LUMINA Creative Group — Agence numérique, Paris & Brazzaville",
  description: "Nous auditons, concevons, construisons et maintenons les outils numériques des écoles, des administrations et des entreprises. Éditeur de LUMINA Education.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "LUMINA Creative Group",
    url: "https://lumina-cg.com",
    title: "LUMINA Creative Group — Agence numérique, Paris & Brazzaville",
    description: "Nous auditons, concevons, construisons et maintenons les outils numériques des écoles, des administrations et des entreprises. Éditeur de LUMINA Education.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}