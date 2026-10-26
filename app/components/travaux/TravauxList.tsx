"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductIcon from "@/app/components/ui/ProductIcon";

const projects = [
  {
    slug:    "lumina-education",
    num:     "01",
    name:    "LUMINA Education",
    tags:    ["SaaS", "Gestion scolaire", "Développement"],
    preview: null,
    product: "education" as const,
    linked:  true,
  },
  {
    slug:    "france-afrique-media",
    num:     "02",
    name:    "France-Afrique Média",
    tags:    ["Logo", "Identité visuelle", "Développement"],
    preview: "/projects/france-afrique.png",
    product: null,
    linked:  true,
  },
  {
    slug:    "master-finance",
    num:     "03",
    name:    "Master Finance",
    tags:    ["Site institutionnel", "Espace partenaire", "Référencement", "Acquisition"],
    preview: "/projects/master-finance.png",
    product: null,
    linked:  true,
  },
  {
    slug:    null,
    num:     "04",
    name:    "TechCongo",
    tags:    ["SaaS", "Développement", "Identité visuelle", "SEO"],
    preview: "/projects/techcongo.png",
    product: null,
    linked:  false,
  },
];

export default function TravauxList() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const previewRef  = useRef<HTMLDivElement>(null);

  /* Mise à jour de position directement dans le DOM — pas de re-render */
  function handleMouseMove(e: React.MouseEvent) {
    if (previewRef.current) {
      previewRef.current.style.left = `${e.clientX + 24}px`;
      previewRef.current.style.top  = `${e.clientY - 110}px`;
    }
  }

  const active = projects.find(p => (p.slug ?? p.name) === hoveredSlug);

  return (
    <div onMouseMove={handleMouseMove}>
      {projects.map(p => {
        const key = p.slug ?? p.name;

        const logo = (
          <span className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-subtle flex items-center justify-center">
            {p.product ? (
              <ProductIcon product={p.product} size={40} />
            ) : p.preview ? (
              <Image
                src={p.preview}
                alt=""
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            ) : null}
          </span>
        );

        const inner = (
          <>
            <span className="text-muted text-xs font-mono w-7 flex-shrink-0 tabular-nums">
              {p.num}
            </span>

            {logo}

            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-ink text-lg group-hover:text-agency transition-colors duration-150">
                {p.name}
              </span>
            </span>

            <span className="hidden sm:flex gap-2 flex-wrap flex-shrink-0">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs text-muted bg-subtle px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </span>

            {p.linked && (
              <ArrowUpRight
                size={16}
                className="flex-shrink-0 text-muted group-hover:text-agency group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
              />
            )}
          </>
        );

        const rowClass = [
          "group flex items-center gap-5 py-5 border-b border-border last:border-0",
          p.linked ? "cursor-pointer" : "cursor-default",
        ].join(" ");

        return p.linked && p.slug ? (
          <Link
            key={key}
            href={`/travaux/${p.slug}`}
            className={rowClass}
            onMouseEnter={() => setHoveredSlug(key)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            {inner}
          </Link>
        ) : (
          <div
            key={key}
            className={rowClass}
            onMouseEnter={() => setHoveredSlug(key)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            {inner}
          </div>
        );
      })}

      {/* ── Prévisualisation flottante (desktop uniquement) ── */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-50 hidden lg:block"
        style={{
          opacity:    hoveredSlug && active?.preview ? 1 : 0,
          transform:  hoveredSlug && active?.preview ? "scale(1)" : "scale(0.96)",
          transition: "opacity 180ms ease, transform 180ms ease",
          top: 0,
          left: 0,
        }}
      >
        {active?.preview && (
          <Image
            src={active.preview}
            alt=""
            width={340}
            height={210}
            className="rounded-xl shadow-2xl object-cover"
            style={{ display: "block" }}
          />
        )}
      </div>
    </div>
  );
}
