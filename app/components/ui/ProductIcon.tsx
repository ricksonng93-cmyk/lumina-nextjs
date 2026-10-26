/**
 * ProductIcon — icône d'application pour chaque produit LUMINA.
 *
 * SVG files in public/logos/ :
 *   lumina-education.svg
 *   lumina-administration.svg
 *   lumina-care.svg
 */

import Image from "next/image";

type Product = "education" | "administration" | "care";

interface Props {
  product: Product;
  size?: number; // px
  className?: string;
}

const config: Record<Product, { label: string; src: string }> = {
  education:      { label: "LUMINA Education",      src: "/logos/lumina-education.svg" },
  administration: { label: "LUMINA Administration", src: "/logos/lumina-administration.svg" },
  care:           { label: "LUMINA Care",            src: "/logos/lumina-care.svg" },
};

export default function ProductIcon({
  product,
  size = 40,
  className = "",
}: Props) {
  const { label, src } = config[product];

  return (
    <Image
      src={src}
      alt={label}
      width={size}
      height={size}
      className={className}
      title={label}
    />
  );
}
