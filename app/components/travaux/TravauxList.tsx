import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductIcon from "@/app/components/ui/ProductIcon";

const projects = [
  {
    slug:    "savoir-de-rabbin",
    num:     "01",
    name:    "Le Savoir de Rabbin",
    tags:    ["Gestion scolaire", "SaaS", "Actif"],
    image:   "/logos/savoir-rabbin.png",
    product: null,
    linked:  true,
  },
  {
    slug:    "france-afrique-media",
    num:     "02",
    name:    "France-Afrique Média",
    tags:    ["Logo", "Identité visuelle", "Développement"],
    image:   "/projects/france-afrique.png",
    product: null,
    linked:  true,
  },
  {
    slug:    "master-finance",
    num:     "03",
    name:    "Master Finance",
    tags:    ["Site institutionnel", "Espace partenaire", "Référencement", "Acquisition"],
    image:   "/projects/master-finance.png",
    product: null,
    linked:  true,
  },
  {
    slug:    "techcongo",
    num:     "04",
    name:    "TechCongo",
    tags:    ["SaaS", "Développement", "Identité visuelle", "SEO"],
    image:   "/projects/techcongo.png",
    product: null,
    linked:  true,
  },
];

export default function TravauxList() {
  return (
    <div>
      {projects.map(p => {
        const key = p.slug ?? p.name;

        const logo = (
          <span className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-subtle flex items-center justify-center">
            {p.product ? (
              <ProductIcon product={p.product} size={40} />
            ) : p.image ? (
              <Image src={p.image} alt="" width={40} height={40} className="object-cover w-full h-full" />
            ) : null}
          </span>
        );

        const inner = (
          <>
            <span className="text-muted text-xs font-mono w-7 flex-shrink-0 tabular-nums">{p.num}</span>
            {logo}
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-ink text-lg group-hover:text-agency transition-colors duration-150">
                {p.name}
              </span>
            </span>
            <span className="hidden sm:flex gap-2 flex-wrap flex-shrink-0">
              {p.tags.map(tag =>
                tag === "Actif" ? (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {tag}
                  </span>
                ) : (
                  <span key={tag} className="text-xs text-muted bg-subtle px-2.5 py-1 rounded-full">{tag}</span>
                )
              )}
            </span>
            {p.linked && (
              <ArrowRight size={15} className="flex-shrink-0 text-muted group-hover:text-agency group-hover:translate-x-1 transition-all duration-150" />
            )}
          </>
        );

        const rowClass = [
          "group flex items-center gap-5 py-5 border-b border-border last:border-0",
          p.linked ? "cursor-pointer" : "cursor-default",
        ].join(" ");

        return p.linked && p.slug ? (
          <Link key={key} href={`/travaux/${p.slug}`} className={rowClass}>{inner}</Link>
        ) : (
          <div key={key} className={rowClass}>{inner}</div>
        );
      })}
    </div>
  );
}
