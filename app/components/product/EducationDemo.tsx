"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/* ── Données ─────────────────────────────────────────────────────── */
const SUBJECTS = [
  { name: "Lecture",            note: "7,5",  max: "10" },
  { name: "Mathématiques",      note: "16",   max: "20" },
  { name: "Expression écrite",  note: "6,5",  max: "10" },
];

const FINAL_AVG     = 9.38;
const LINE_DELAY    = 500;   // ms entre chaque ligne
const INIT_DELAY    = 300;   // ms avant la première ligne
const AVG_DELAY     = 450;   // pause après la dernière ligne
const AVG_DURATION  = 1100;  // durée du compteur

/* ── Composant ───────────────────────────────────────────────────── */
export default function EducationDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [avgDisplay,   setAvgDisplay]   = useState<number | null>(null);
  const [rankVisible,  setRankVisible]  = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun       = useRef(false);

  const runAnimation = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    SUBJECTS.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), INIT_DELAY + i * LINE_DELAY);
    });

    const summaryAt = INIT_DELAY + SUBJECTS.length * LINE_DELAY + AVG_DELAY;
    setTimeout(() => {
      setAvgDisplay(0);
      const t0 = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - t0) / AVG_DURATION, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        setAvgDisplay(FINAL_AVG * eased);
        if (progress < 1) requestAnimationFrame(step);
        else {
          setAvgDisplay(FINAL_AVG);
          setTimeout(() => setRankVisible(true), 280);
        }
      };
      requestAnimationFrame(step);
    }, summaryAt);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTimeout(() => {
        setVisibleCount(SUBJECTS.length);
        setAvgDisplay(FINAL_AVG);
        setRankVisible(true);
      }, 0);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { observer.disconnect(); runAnimation(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [runAnimation]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="rounded-2xl border border-border bg-white shadow-xl w-full max-w-sm overflow-hidden select-none"
    >
      {/* En-tête */}
      <div className="bg-edu px-4 py-3">
        <p className="text-white font-bold text-[11px] leading-tight tracking-wide">
          LUMINA Education
        </p>
        <p className="text-white/70 text-[10px] leading-tight mt-0.5">
          C.S Le Savoir de Rabbin · Brazzaville · Bulletin d&apos;octobre
        </p>
      </div>

      {/* Élève */}
      <div className="px-4 py-2.5 bg-subtle border-b border-border flex items-center justify-between">
        <div>
          <p className="text-ink font-bold text-xs">BAKALA Grâce</p>
          <p className="text-muted text-[10px]">CM1 · RAB-2026-031</p>
        </div>
        <span className="text-edu text-[10px] font-semibold bg-edu/10 px-2.5 py-1 rounded-full">
          Trimestre 1
        </span>
      </div>

      {/* Tableau des notes */}
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-subtle">
            <th className="text-left px-4 py-2 font-semibold text-muted">Matière</th>
            <th className="text-right px-4 py-2 font-semibold text-muted">Note</th>
          </tr>
        </thead>
        <tbody>
          {SUBJECTS.slice(0, visibleCount).map((s) => (
            <tr key={s.name} className="row-in border-b border-border/50 last:border-0">
              <td className="px-4 py-2 text-ink">{s.name}</td>
              <td className="px-4 py-2 text-right font-medium tabular-nums text-ink">
                {s.note}
                <span className="text-muted font-normal">/{s.max}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Résumé animé */}
      {avgDisplay !== null && (
        <div className="row-in px-4 py-3 bg-subtle border-t border-border">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-muted uppercase tracking-wide">
              Moyenne générale
            </span>
            <div className="flex items-center gap-2">
              {rankVisible && (
                <span className="row-in text-[10px] font-black text-edu bg-edu/10 px-2 py-0.5 rounded-full tabular-nums">
                  3e
                </span>
              )}
              <span className="text-sm font-black text-ink tabular-nums">
                {avgDisplay.toFixed(2)}
                <span className="text-xs font-normal text-muted">/20</span>
              </span>
            </div>
          </div>
          <div className="h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-edu rounded-full"
              style={{ width: `${(avgDisplay / 20) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-[10px] text-muted">3e sur 24 élèves</p>
        </div>
      )}
    </div>
  );
}
