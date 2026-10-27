"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/app/components/ui/Logo";
import ProductIcon from "@/app/components/ui/ProductIcon";
import Button from "@/app/components/ui/Button";

const PLATFORMS = [
  {
    product: "education" as const,
    name:    "Education",
    desc:    "Notes, bulletins, scolarité et espace parent.",
    href:    "/lumina-education",
    color:   "text-edu",
  },
  {
    product: "administration" as const,
    name:    "Administration",
    desc:    "Dossiers, courriers et archives, sans papier.",
    href:    "/lumina-administration",
    color:   "text-admin",
  },
  {
    product: "care" as const,
    name:    "Care",
    desc:    "Patients, consultations et facturation.",
    href:    "/lumina-care",
    color:   "text-care",
  },
];

export default function Header() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [hidden, setHidden]       = useState(false);
  const [platOpen, setPlatOpen]   = useState(false);    // desktop dropdown
  const [platExpand, setPlatExpand] = useState(false);  // mobile accordion
  const pathname                  = usePathname();
  const lastScrollY               = useRef(0);
  const menuRef                   = useRef<HTMLDivElement>(null);
  const burgerRef                 = useRef<HTMLButtonElement>(null);
  const platBtnRef                = useRef<HTMLButtonElement>(null);
  const platWrapRef               = useRef<HTMLDivElement>(null);
  const platItemRefs              = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimer                = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Scroll: shadow + hide on scroll down ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;
      setScrolled(y > 16);
      if (y < 80)          { setHidden(false); }
      else if (delta > 4)  { if (window.innerWidth >= 1024) setHidden(true); setOpen(false); setPlatOpen(false); }
      else if (delta < -4) { setHidden(false); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Click outside closes desktop dropdown ── */
  useEffect(() => {
    if (!platOpen) return;
    const handle = (e: MouseEvent) => {
      if (platWrapRef.current && !platWrapRef.current.contains(e.target as Node)) {
        setPlatOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [platOpen]);

  /* ── Focus trap + Escape in mobile menu ── */
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
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
        if (!focusable.length) { e.preventDefault(); return; }
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
        } else {
          if (document.activeElement === last)  { e.preventDefault(); first?.focus(); }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, platExpand]);

  /* ── Hover delay helpers ── */
  const openPlatforms = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPlatOpen(true);
  }, []);
  const closePlatforms = useCallback(() => {
    closeTimer.current = setTimeout(() => setPlatOpen(false), 180);
  }, []);

  const isPlatActive = pathname.startsWith("/lumina-");

  return (
    <header
      className={[
        "relative lg:sticky lg:top-0 z-50 transition-[transform,background-color,box-shadow] duration-300",
        scrolled ? "bg-surface/95 backdrop-blur-sm shadow-sm" : "bg-surface",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency rounded-lg"
            aria-label="LUMINA Creative Group — accueil"
          >
            <Logo variant="light" />
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-1">

            {/* Expertises */}
            <Link
              href="/expertises"
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150",
                pathname === "/expertises"
                  ? "text-ink bg-subtle"
                  : "text-muted hover:text-ink hover:bg-subtle",
              ].join(" ")}
            >
              Expertises
            </Link>

            {/* Plateformes ▾ */}
            <div
              ref={platWrapRef}
              className="relative"
              onMouseEnter={openPlatforms}
              onMouseLeave={closePlatforms}
            >
              <button
                ref={platBtnRef}
                onClick={() => setPlatOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setPlatOpen(true);
                    setTimeout(() => platItemRefs.current[0]?.focus(), 50);
                  }
                  if (e.key === "Escape") setPlatOpen(false);
                }}
                aria-expanded={platOpen}
                aria-haspopup="true"
                aria-controls="platforms-menu"
                className={[
                  "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150",
                  isPlatActive ? "text-ink bg-subtle" : "text-muted hover:text-ink hover:bg-subtle",
                ].join(" ")}
              >
                Plateformes
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${platOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                id="platforms-menu"
                role="menu"
                aria-label="Plateformes LUMINA"
                onMouseEnter={openPlatforms}
                onMouseLeave={closePlatforms}
                className={[
                  "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72",
                  "bg-surface rounded-2xl border border-border shadow-xl py-2",
                  "transition-all duration-150 origin-top",
                  platOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none",
                ].join(" ")}
              >
                {PLATFORMS.map((p, i) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    role="menuitem"
                    ref={(el) => { platItemRefs.current[i] = el; }}
                    onClick={() => setPlatOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        platItemRefs.current[(i + 1) % PLATFORMS.length]?.focus();
                      }
                      if (e.key === "ArrowUp") {
                        e.preventDefault();
                        if (i === 0) platBtnRef.current?.focus();
                        else platItemRefs.current[i - 1]?.focus();
                      }
                      if (e.key === "Escape") {
                        setPlatOpen(false);
                        platBtnRef.current?.focus();
                      }
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-subtle transition-colors focus-visible:outline-none focus-visible:bg-subtle"
                  >
                    <span className="flex-shrink-0">
                      <ProductIcon product={p.product} size={36} />
                    </span>
                    <span>
                      <span className="block text-sm leading-tight">
                        <span className="font-black text-ink">LUMINA </span>
                        <span className={`font-medium ${p.color}`}>{p.name}</span>
                      </span>
                      <span className="block text-xs text-muted mt-0.5">{p.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Travaux */}
            <Link
              href="/travaux"
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150",
                pathname === "/travaux" || pathname.startsWith("/travaux/")
                  ? "text-ink bg-subtle"
                  : "text-muted hover:text-ink hover:bg-subtle",
              ].join(" ")}
            >
              Travaux
            </Link>

            {/* À propos */}
            <Link
              href="/a-propos"
              className={[
                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150",
                pathname === "/a-propos" ? "text-ink bg-subtle" : "text-muted hover:text-ink hover:bg-subtle",
              ].join(" ")}
            >
              À propos
            </Link>
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:block flex-shrink-0">
            <Button as="a" href="https://app.lumina-cg.com" size="sm" target="_blank" rel="noopener noreferrer">Connexion</Button>
          </div>

          {/* ── Mobile burger ── */}
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

      {/* ── Mobile menu ── */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navigation"
        aria-modal={open ? "true" : undefined}
        className={[
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border",
          open ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">

          <Link
            href="/expertises"
            onClick={() => setOpen(false)}
            className={[
              "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
              pathname === "/expertises" ? "bg-subtle text-ink" : "text-muted hover:text-ink hover:bg-subtle",
            ].join(" ")}
          >
            Expertises
          </Link>

          {/* Plateformes accordion */}
          <div>
            <button
              onClick={() => setPlatExpand((v) => !v)}
              aria-expanded={platExpand}
              className={[
                "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                isPlatActive ? "bg-subtle text-ink" : "text-muted hover:text-ink hover:bg-subtle",
              ].join(" ")}
            >
              Plateformes
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${platExpand ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${platExpand ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {PLATFORMS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => { setOpen(false); setPlatExpand(false); }}
                  className="flex items-center gap-3 pl-8 pr-4 py-2.5 rounded-xl hover:bg-subtle transition-colors"
                >
                  <ProductIcon product={p.product} size={28} />
                  <span className="text-sm">
                    <span className="font-black text-ink">LUMINA </span>
                    <span className={`font-medium ${p.color}`}>{p.name}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/travaux"
            onClick={() => setOpen(false)}
            className={[
              "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
              pathname === "/travaux" || pathname.startsWith("/travaux/")
                ? "bg-subtle text-ink"
                : "text-muted hover:text-ink hover:bg-subtle",
            ].join(" ")}
          >
            Travaux
          </Link>

          <Link
            href="/a-propos"
            onClick={() => setOpen(false)}
            className={[
              "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
              pathname === "/a-propos" ? "bg-subtle text-ink" : "text-muted hover:text-ink hover:bg-subtle",
            ].join(" ")}
          >
            À propos
          </Link>

          <div className="pt-2 pb-1">
            <Button as="a" href="https://app.lumina-cg.com" size="md" className="w-full justify-center" target="_blank" rel="noopener noreferrer">
              Connexion
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
