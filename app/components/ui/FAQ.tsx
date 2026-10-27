"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Container from "@/app/components/ui/Container";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items, accent = "text-muted" }: { items: FAQItem[]; accent?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 border-b border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24">
          <div className="lg:pt-1">
            <p className={`text-[10px] uppercase tracking-widest ${accent}`}>
              Questions fréquentes
            </p>
          </div>

          <div className="max-w-2xl">
            {items.map((item, i) => (
              <div key={i} className="border-b border-border last:border-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between py-5 text-left gap-6 group"
                >
                  <span
                    className={[
                      "font-semibold text-sm leading-snug transition-colors duration-150",
                      open === i ? "text-ink" : "text-ink/70 group-hover:text-ink",
                    ].join(" ")}
                  >
                    {item.q}
                  </span>
                  <span
                    className={[
                      "flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200",
                      open === i
                        ? "bg-ink border-ink"
                        : "border-border group-hover:border-ink",
                    ].join(" ")}
                  >
                    <Plus
                      size={12}
                      className={[
                        "transition-transform duration-200",
                        open === i ? "rotate-45 text-white" : "text-muted",
                      ].join(" ")}
                    />
                  </span>
                </button>

                <div
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted text-sm leading-relaxed pb-5 max-w-xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
