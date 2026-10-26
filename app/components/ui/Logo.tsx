import Image from "next/image";

/**
 * Logo component — LUMINA signe + wordmark.
 *
 * SVG files in public/logos/ :
 *   lumina-signe-app.svg    (carré arrondi coloré, icône d'application)
 *   lumina-signe-mono.svg   (monochrome, prend currentColor)
 */

interface LogoProps {
  /** "app" = carré arrondi coloré (header). "mono" = currentColor (footer, fond sombre). */
  variant?: "app" | "mono";
  /** Show the wordmark "LUMINA" next to the signe. */
  wordmark?: boolean;
  className?: string;
}

export default function Logo({
  variant = "app",
  wordmark = true,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* ── Signe ── */}
      <Image
        src={variant === "app" ? "/logos/lumina-signe-app.svg" : "/logos/lumina-signe-mono.svg"}
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
