"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/* ── Data ──────────────────────────────────────────────────────────── */
const SUBJECTS = [
  { name: "Mathématiques",         note: "11,0" },
  { name: "Français",              note: "14,0" },
  { name: "Sc. de la Vie",         note: "13,0" },
  { name: "Histoire-Géographie",   note: "14,0" },
  { name: "Anglais",               note: "16,0" },
  { name: "Physique-Chimie",       note: "15,0" },
  { name: "Éducation civique",     note: "14,0" },
];

const FINAL_AVG   = 13.81;
const LINE_DELAY  = 210;   // ms between each row
const INIT_DELAY  = 400;   // ms before first row
const AVG_DELAY   = 350;   // ms pause after last row before counter
const AVG_DURATION = 1400; // ms to count from 0 to FINAL_AVG

/* ── Component ─────────────────────────────────────────────────────── */
export default function BulletinDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [avgDisplay,   setAvgDisplay]   = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun       = useRef(false);

  const runAnimation = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // Lines appear one by one
    SUBJECTS.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1),
        INIT_DELAY + i * LINE_DELAY);
    });

    // After all lines: animated average counter
    const summaryAt = INIT_DELAY + SUBJECTS.length * LINE_DELAY + AVG_DELAY;
    setTimeout(() => {
      setAvgDisplay(0);
      const t0 = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - t0) / AVG_DURATION, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setAvgDisplay(FINAL_AVG * eased);
        if (progress < 1) requestAnimationFrame(step);
        else setAvgDisplay(FINAL_AVG);
      };
      requestAnimationFrame(step);
    }, summaryAt);
  }, []);

  useEffect(() => {
    // Skip animation when motion is reduced
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTimeout(() => {
        setVisibleCount(SUBJECTS.length);
        setAvgDisplay(FINAL_AVG);
      }, 0);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          runAnimation();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [runAnimation]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Démonstration d'un bulletin LUMINA Education"
      className="rounded-2xl border border-border bg-white shadow-xl w-full max-w-sm overflow-hidden select-none"
    >
      {/* ── Header ── */}
      <div className="bg-edu px-4 py-3 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/lumina-education.svg" alt="" width={28} height={28} aria-hidden="true" />
        <div>
          <p className="text-white font-bold text-[11px] leading-tight tracking-wide">
            LUMINA Education
          </p>
          <p className="text-white/70 text-[10px] leading-tight">
            CS Le Savoir de Rabbin · 2025–2026
          </p>
        </div>
      </div>

      {/* ── Student ── */}
      <div className="px-4 py-2.5 bg-subtle border-b border-border flex items-center justify-between">
        <div>
          <p className="text-ink font-bold text-xs">MABIALA Exaucé</p>
          <p className="text-muted text-[10px]">5ème B</p>
        </div>
        <span className="text-edu text-[10px] font-semibold bg-edu/10 px-2.5 py-1 rounded-full">
          Trimestre 1
        </span>
      </div>

      {/* ── Grades table ── */}
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-subtle">
            <th className="text-left px-4 py-2 font-semibold text-muted">Matière</th>
            <th className="text-right px-4 py-2 font-semibold text-muted">Note /20</th>
          </tr>
        </thead>
        <tbody>
          {SUBJECTS.slice(0, visibleCount).map((s) => (
            <tr key={s.name} className="row-in border-b border-border/50 last:border-0">
              <td className="px-4 py-2 text-ink">{s.name}</td>
              <td className="px-4 py-2 text-right text-ink font-medium">{s.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── Summary (animated) ── */}
      {avgDisplay !== null && (
        <div className="row-in px-4 py-3 bg-subtle border-t border-border">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-muted uppercase tracking-wide">
              Moyenne générale
            </span>
            <span className="text-sm font-black text-ink tabular-nums">
              {avgDisplay.toFixed(2)}
              <span className="text-xs font-normal text-muted">/20</span>
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-edu rounded-full"
              style={{ width: `${(avgDisplay / 20) * 100}%` }}
            />
          </div>

          <p className="mt-2 text-[10px] text-muted">
            5e sur 28 élèves · mention{" "}
            <span className="font-semibold text-ink">Assez bien</span>
          </p>
        </div>
      )}
    </div>
  );
}
