import Container from "@/app/components/ui/Container";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="py-20 lg:py-28 border-b border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-24">
          <div className="lg:pt-1">
            <p className="text-[10px] uppercase tracking-widest text-muted">
              Questions fréquentes
            </p>
          </div>
          <div className="max-w-2xl divide-y divide-border">
            {items.map((item) => (
              <div key={item.q} className="py-6 first:pt-0 last:pb-0">
                <p className="font-semibold text-ink mb-3 leading-snug">{item.q}</p>
                <p className="text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
