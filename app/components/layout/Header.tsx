"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/app/components/ui/Logo";
import Button from "@/app/components/ui/Button";

const NAV = [
  { href: "/expertises",      label: "Expertises" },
  { href: "/travaux",         label: "Travaux" },
  { href: "/lumina-education",label: "LUMINA Education" },
  { href: "/equipe",          label: "L'équipe" },
  { href: "/partners",        label: "Partenaires" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/95 backdrop-blur-sm shadow-sm"
          : "bg-surface",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency rounded-lg" aria-label="LUMINA Creative Group — accueil">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">
            {NAV.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150",
                    active
                      ? "text-ink bg-subtle"
                      : "text-muted hover:text-ink hover:bg-subtle",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Button as="a" href="/contact" size="sm">
              Parler de votre projet
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-lg text-ink hover:bg-subtle transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navigation"
        className={[
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  active ? "bg-subtle text-ink" : "text-muted hover:text-ink hover:bg-subtle",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-2 pb-1">
            <Button as="a" href="/contact" size="md" className="w-full justify-center">
              Parler de votre projet
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
