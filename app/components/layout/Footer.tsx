"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2, Shield } from "lucide-react";
import Logo from "@/app/components/ui/Logo";

const NAV_SERVICES = [
  { href: "/expertises",              label: "Expertises" },
  { href: "/expertises#audit",        label: "Audit de l'existant" },
  { href: "/expertises#conception",   label: "Conception et développement" },
  { href: "/expertises#identite",     label: "Identité visuelle" },
  { href: "/expertises#maintenance",  label: "Maintenance et formation" },
];

const NAV_ENTREPRISE = [
  { href: "/lumina-education", label: "LUMINA Education" },
  { href: "/travaux",          label: "Travaux" },
  { href: "/a-propos",           label: "À propos" },
  { href: "/partners",         label: "Partenaires" },
  { href: "/contact",          label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgoljvnw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "Newsletter", email }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div>
            <Logo variant="mono" className="mb-4 text-white" />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Nous auditons, concevons, construisons et maintenons les outils
              numériques des écoles, des administrations et des entreprises.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
              <Shield size={12} /> Données protégées
            </span>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {NAV_SERVICES.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Entreprise */}
          <div>
            <h3 className="text-sm font-semibold mb-4">LUMINA Creative Group</h3>
            <ul className="space-y-2">
              {NAV_ENTREPRISE.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Rester informé</h3>
            <p className="text-sm text-white/60 mb-4">
              Actualités, nouvelles fonctionnalités LUMINA Education, conseils numériques.
            </p>
            {status === "done" ? (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} /> Inscription confirmée.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-agency focus:ring-1 focus:ring-agency"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-2 rounded-lg bg-agency hover:bg-agency/90 text-white text-sm font-semibold transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Inscription…" : "S'inscrire"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-red-400">Une erreur s&apos;est produite. Réessayez.</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <a href="tel:+242069121311" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
              <Phone size={13} /> +242 06 912 13 11
            </a>
            <a href="tel:+242067393874" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
              <Phone size={13} /> +242 06 739 38 74
            </a>
            <a href="tel:+330758172693" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
              <Phone size={13} /> +33 07 58 17 26 93
            </a>
            <a href="mailto:contact@lumina-cg.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
              <Mail size={13} /> contact@lumina-cg.com
            </a>
            <span className="flex items-center gap-2 text-sm text-white/40">
              <MapPin size={13} /> Brazzaville, Congo
            </span>
          </div>
          <p className="text-center text-xs text-white/30">
            © {new Date().getFullYear()} LUMINA Creative Group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
