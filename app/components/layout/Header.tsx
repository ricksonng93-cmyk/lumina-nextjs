"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/app/components/ui/Logo";
import Button from "@/app/components/ui/Button";

const NAV = [
  { href: "/expertises",       label: "Expertises" },
  { href: "/travaux",          label: "Travaux" },
  { href: "/lumina-education", label: "LUMINA Education" },
  { href: "/equipe",           label: "L'équipe" },
  { href: "/partners",         label: "Partenaires" },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden]   = useState(false);
  const pathname              = usePathname();
  const lastScrollY           = useRef(0);
  const menuRef               = useRef<HTMLDivElement>(null);
  const burgerRef             = useRef<HTMLButtonElement>(null);

  /* ── Scroll: shadow + hide-on-scroll-down ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      setScrolled(y > 16);

      if (y < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
        setOpen(false);
      } else if (delta < -4) {
        setHidden(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Focus trap + Escape when mobile menu opens ── */
  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        if (focusable.length === 0) { e.preventDefault(); return; }
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-[transform,background-color,box-shadow] duration-300",
        scrolled
          ? "bg-surface/95 backdrop-blur-sm shadow-sm"
          : "bg-surface",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">

          {/* Logo */}
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency rounded-lg"
            aria-label="LUMINA Creative Group — accueil"
          >
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
            ref={burgerRef}
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
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navigation"
        aria-modal={open ? "true" : undefined}
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
                onClick={() => setOpen(false)}
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
