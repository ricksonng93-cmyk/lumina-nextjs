/**
 * Logo component — LUMINA signe + wordmark.
 *
 * SVG files expected in public/logos/ :
 *   lumina-signe-app.svg    (carré arrondi coloré, icône d'application)
 *   lumina-signe-mono.svg   (monochrome, prend currentColor)
 *
 * Until the files are provided, a CSS-drawn placeholder is shown.
 * Replace <div className="logo-placeholder"> with <img> or inline SVG.
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
      {/* TODO: replace this placeholder with:
            variant === "app"
              ? <img src="/logos/lumina-signe-app.svg" alt="" width={36} height={36} />
              : <img src="/logos/lumina-signe-mono.svg" alt="" width={36} height={36} className="text-current" />
      */}
      <span
        aria-hidden="true"
        className={[
          "flex items-center justify-center rounded-[10px] select-none",
          "w-9 h-9 text-base font-black leading-none",
          variant === "app"
            ? "bg-ink text-white"
            : "border-2 border-current",
        ].join(" ")}
        style={{ letterSpacing: "-0.02em" }}
      >
        L
      </span>

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
