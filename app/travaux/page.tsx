import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import ProductIcon from "@/app/components/ui/ProductIcon";

export const metadata: Metadata = {
  title: "Travaux",
  description:
    "Nos projets réalisés\u00a0: LUMINA Education, France-Afrique Média, Master Finance, TechCongo.",
  openGraph: {
    url: "https://lumina-cg.com/travaux",
    title: "Travaux | LUMINA Creative Group",
    description:
      "Nos projets réalisés\u00a0: LUMINA Education, France-Afrique Média, Master Finance, TechCongo.",
  },
  alternates: { canonical: "https://lumina-cg.com/travaux" },
};

const projects = [
  {
    slug:    "lumina-education",
    num:     "01",
    name:    "LUMINA Education",
    tags:    ["SaaS", "Gestion scolaire", "Développement"],
    image:   null,
    product: "education" as const,
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
    slug:    null,
    num:     "04",
    name:    "TechCongo",
    tags:    ["SaaS", "Développement", "Identité visuelle", "SEO"],
    image:   "/projects/techcongo.png",
    product: null,
    linked:  false,
  },
];

export default function TravauxPage() {
  return (
    <>
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight mb-16">
            Travaux
          </h1>

          <div>
            {projects.map((p, i) => {
              const logo = (
                <span className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-subtle flex items-center justify-center">
                  {p.product ? (
                    <ProductIcon product={p.product} size={40} />
                  ) : p.image ? (
                    <Image
                      src={p.image}
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
                    <span className="block font-semibold text-ink text-base group-hover:text-agency transition-colors duration-150">
                      {p.name}
                    </span>
                  </span>

                  <span className="hidden sm:flex gap-2 flex-wrap flex-shrink-0">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted bg-subtle px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>

                  {p.linked && (
                    <ArrowRight
                      size={15}
                      className="flex-shrink-0 text-muted group-hover:text-agency group-hover:translate-x-1 transition-all duration-150"
                    />
                  )}
                </>
              );

              const rowClass = [
                "group flex items-center gap-5 py-5 border-b border-border last:border-0",
                p.linked ? "project-row cursor-pointer" : "cursor-default",
              ].join(" ");

              return p.linked && p.slug ? (
                <Link key={p.slug} href={`/travaux/${p.slug}`} className={rowClass}>
                  {inner}
                </Link>
              ) : (
                <div key={p.name} className={rowClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
