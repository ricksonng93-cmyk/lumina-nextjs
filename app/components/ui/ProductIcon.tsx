/**
 * ProductIcon — icône d'application pour chaque produit LUMINA.
 *
 * SVG files expected in public/logos/ :
 *   lumina-education.svg       lumina-education-mono.svg
 *   lumina-administration.svg  lumina-administration-mono.svg
 *   lumina-care.svg            lumina-care-mono.svg
 *
 * Until the files are provided, an initials placeholder is shown.
 * Replace <span className="placeholder"> with <img> when SVGs are ready.
 */

type Product = "education" | "administration" | "care";

interface Props {
  product: Product;
  /** "app" = carré arrondi coloré. "mono" = currentColor. */
  variant?: "app" | "mono";
  size?: number; // px
  className?: string;
}

const config: Record<Product, { label: string; bg: string; initials: string }> = {
  education:     { label: "LUMINA Education",     bg: "bg-edu",   initials: "Ed" },
  administration:{ label: "LUMINA Administration", bg: "bg-admin", initials: "Ad" },
  care:          { label: "LUMINA Care",           bg: "bg-care",  initials: "Ca" },
};

export default function ProductIcon({
  product,
  variant = "app",
  size = 40,
  className = "",
}: Props) {
  const { label, bg, initials } = config[product];
  const radius = Math.round(size * 0.25);

  return (
    <span
      title={label}
      className={[
        "inline-flex items-center justify-center select-none",
        variant === "app" ? `${bg} text-white` : "border-2 border-current",
        className,
      ].join(" ")}
      style={{ width: size, height: size, borderRadius: radius, fontSize: size * 0.35 }}
    >
      {/* TODO: replace with:
            <img src={`/logos/lumina-${product}${variant === "mono" ? "-mono" : ""}.svg`}
                 alt={label} width={size} height={size} />
      */}
      <span aria-hidden="true" className="font-bold leading-none">{initials}</span>
    </span>
  );
}
