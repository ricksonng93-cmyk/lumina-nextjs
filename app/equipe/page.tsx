import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "L'équipe",
  description:
    "Faity Rickson NGAKOUA-BOUYA, fondateur et directeur créatif de LUMINA Creative Group.",
  openGraph: {
    url: "https://lumina-cg.com/equipe",
    title: "L'équipe | LUMINA Creative Group",
    description: "Faity Rickson NGAKOUA-BOUYA, fondateur et directeur créatif.",
  },
  alternates: { canonical: "https://lumina-cg.com/equipe" },
};

const VALEURS = [
  {
    label: "L'audit avant tout",
    body:  "Nous ne proposons jamais de solution avant d'avoir compris le problème. Chaque engagement commence par une analyse de l'existant.",
  },
  {
    label: "Le terrain, pas le bureau",
    body:  "Nous travaillons avec les vrais utilisateurs, dans leurs conditions réelles. Nos outils sont conçus pour fonctionner là où ils seront utilisés.",
  },
  {
    label: "Un interlocuteur, pas une chaîne",
    body:  "Le même interlocuteur suit le projet de l'audit à la livraison. Pas de relais entre équipes, pas d'informations perdues.",
  },
  {
    label: "Présents après la livraison",
    body:  "Nous formons les équipes, assurons la maintenance et restons disponibles. La relation ne s'arrête pas à la mise en ligne.",
  },
];

export default function EquipePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-20 lg:py-28">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-4">
            l&apos;équipe
          </p>
          <h1 className="text-4xl lg:text-5xl font-black text-ink leading-tight tracking-tight max-w-2xl">
            Nous construisons des outils qui fonctionnent sur le terrain.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            LUMINA Creative Group est une agence numérique qui travaille avec
            des établissements scolaires, des services administratifs et des
            entreprises. Nous concevons des outils sur mesure, adaptés aux
            contraintes réelles de chaque organisation.
          </p>
        </Container>
      </section>

      {/* ── Photo équipe ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "12473/9824" }}>
            <Image
              src="/about.png"
              alt="L'équipe LUMINA Creative Group"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
              quality={85}
              priority
            />
          </div>
        </Container>
      </section>

      {/* ── Le fondateur ── */}
      <section className="py-20 lg:py-28 border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-24 items-start">

            {/* Photo fondateur */}
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full max-w-xs">
              <Image
                src="/fondateur.png"
                alt="Faity Rickson NGAKOUA-BOUYA"
                fill
                sizes="320px"
                className="object-cover object-top"
                quality={85}
              />
            </div>

            {/* Bio */}
            <div className="lg:pt-4">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-4">
                fondateur
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight mb-2">
                Faity Rickson NGAKOUA-BOUYA
              </h2>
              <p className="text-muted text-sm mb-8">Fondateur et directeur créatif</p>
              <div className="space-y-4 text-muted text-lg leading-relaxed max-w-xl">
                <p>
                  Rickson dirige LUMINA Creative Group depuis sa création. Il supervise
                  chaque projet, de l&apos;audit initial à la formation des équipes sur place,
                  et reste l&apos;interlocuteur principal de chaque client tout au long de
                  la relation.
                </p>
                <p>
                  L&apos;agence est implantée à Paris et à Brazzaville, ce qui nous permet
                  d&apos;intervenir rapidement sur le terrain, en Afrique centrale comme
                  en Europe.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Nos valeurs ── */}
      <section className="py-20 lg:py-28 border-b border-border bg-subtle">
        <Container>
          <p className="text-[10px] uppercase tracking-widest text-muted mb-12">
            notre approche
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {VALEURS.map((v, i) => (
              <div
                key={v.label}
                className={[
                  "py-10 md:py-10",
                  i % 2 === 1 ? "md:pl-12 md:border-l border-border" : "md:pr-12",
                  i >= 2 ? "border-t border-border" : "",
                ].join(" ")}
              >
                <h3 className="text-lg font-black text-ink mb-3">{v.label}</h3>
                <p className="text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-ink leading-tight tracking-tight">
              Parlons de votre projet.
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Un échange sans engagement pour comprendre votre situation
              et voir si nous pouvons vous aider.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="/contact">Prendre contact</Button>
              <Link
                href="/travaux"
                className="text-sm text-muted inline-flex items-center gap-1 hover:text-ink transition-colors"
              >
                Voir nos travaux <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
