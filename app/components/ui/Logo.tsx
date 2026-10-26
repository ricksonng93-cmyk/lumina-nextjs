import Image from "next/image";

/**
 * Logo component — LUMINA signe + wordmark.
 *
 * SVG files in public/logos/ :
 *   lumina-signe.svg      (cercle contour encre, fond blanc — en-tête)
 *   lumina-signe-app.svg  (carré arrondi coloré, icône d'application)
 *   lumina-signe-mono.svg (monochrome, prend currentColor — footer)
 */

interface LogoProps {
  /** "light" = cercle encre sur fond blanc (header). "app" = carré coloré. "mono" = currentColor. */
  variant?: "light" | "app" | "mono";
  /** Show the wordmark "LUMINA" next to the signe. */
  wordmark?: boolean;
  className?: string;
}

export default function Logo({
  variant = "light",
  wordmark = true,
  className = "",
}: LogoProps) {
  const src =
    variant === "light" ? "/logos/originaux/lumina-logo-black-white.svg" :
    variant === "app"   ? "/logos/lumina-signe-app.svg" :
    "/logos/lumina-signe-mono.svg";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* ── Signe ── */}
      <Image
        src={src}
        alt=""
        width={36}
        height={36}
        aria-hidden
      />

      {/* ── Wordmark ── */}
      {wordmark && (
        <span
          className="font-black text-[1.1rem] leading-none tracking-[0.09em] uppercase select-none"
          style={{ fontWeight: 800 }}
        >
          LUMINA
        </span>
      )}
    </span>
  );
}
