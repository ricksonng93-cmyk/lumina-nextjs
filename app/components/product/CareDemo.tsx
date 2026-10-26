"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/* ── Données ─────────────────────────────────────────────────────── */
const CONSULTATIONS = [
  { date: "12/03/2026", motif: "Suivi diabète",              medecin: "Dr MBEMBA" },
  { date: "28/01/2026", motif: "Renouvellement ordonnance",  medecin: "Dr MBEMBA" },
  { date: "05/12/2025", motif: "Consultation initiale",      medecin: "Dr NKOUNGA" },
];

const TOTAL       = 45000;
const LINE_DELAY  = 550;
const INIT_DELAY  = 300;
const PAY_DURATION = 1200;

/* ── Composant ───────────────────────────────────────────────────── */
export default function CareDemo() {
  const [consultCount, setConsultCount]   = useState(0);
  const [examVisible,  setExamVisible]    = useState(false);
  const [factVisible,  setFactVisible]    = useState(false);
  const [remaining,    setRemaining]      = useState<number | null>(null);
  const [solde,        setSolde]          = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun       = useRef(false);

  const runAnimation = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // Consultations une par une
    CONSULTATIONS.forEach((_, i) => {
      setTimeout(() => setConsultCount(i + 1), INIT_DELAY + i * LINE_DELAY);
    });

    const afterConsults = INIT_DELAY + CONSULTATIONS.length * LINE_DELAY;

    // Examens
    setTimeout(() => setExamVisible(true), afterConsults + 400);

    // Facturation + compteur
    setTimeout(() => {
      setFactVisible(true);
      setTimeout(() => {
        setRemaining(TOTAL);
        const t0 = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - t0) / PAY_DURATION, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          setRemaining(Math.round(TOTAL * (1 - eased)));
          if (progress < 1) requestAnimationFrame(step);
          else {
            setRemaining(0);
            setTimeout(() => setSolde(true), 250);
          }
        };
        requestAnimationFrame(step);
      }, 300);
    }, afterConsults + 1000);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTimeout(() => {
        setConsultCount(CONSULTATIONS.length);
        setExamVisible(true);
        setFactVisible(true);
        setRemaining(0);
        setSolde(true);
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

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR").format(n);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="rounded-2xl border border-border bg-white shadow-xl w-full max-w-sm overflow-hidden select-none"
    >
      {/* En-tête */}
      <div className="bg-care px-4 py-3">
        <p className="text-white font-bold text-[11px] leading-tight">
          Dossier patient
        </p>
        <p className="text-white/70 text-[10px] mt-0.5">
          MOUKOKO Jean-Paul · 54 ans
        </p>
      </div>

      {/* Consultations */}
      <div className="px-4 pt-3 pb-2 border-b border-border">
        <p className="text-[10px] uppercase tracking-widest text-muted mb-2">
          Consultations
        </p>
        {CONSULTATIONS.slice(0, consultCount).map((c) => (
          <div key={c.date} className="row-in flex items-baseline justify-between py-1.5 border-b border-border/40 last:border-0">
            <div>
              <span className="text-[11px] font-medium text-ink">{c.motif}</span>
              <span className="text-[10px] text-muted ml-2">{c.medecin}</span>
            </div>
            <span className="text-[10px] text-muted tabular-nums flex-shrink-0 ml-2">{c.date}</span>
          </div>
        ))}
      </div>

      {/* Examens */}
      <div className={[
        "px-4 py-3 border-b border-border transition-all duration-300 overflow-hidden",
        examVisible ? "max-h-20 opacity-100" : "max-h-0 opacity-0 py-0",
      ].join(" ")}>
        <p className="text-[10px] uppercase tracking-widest text-muted mb-2">
          Examens
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-ink">Bilan sanguin</span>
          <span className="text-[10px] font-semibold text-care bg-care/10 px-2 py-0.5 rounded-full">
            Résultats disponibles
          </span>
        </div>
      </div>

      {/* Facturation */}
      <div className={[
        "px-4 py-3 bg-subtle transition-all duration-300 overflow-hidden",
        factVisible ? "max-h-28 opacity-100" : "max-h-0 opacity-0 py-0",
      ].join(" ")}>
        <p className="text-[10px] uppercase tracking-widest text-muted mb-2">
          Facturation
        </p>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] text-muted">Total</span>
          <span className="text-[11px] font-semibold text-ink tabular-nums">
            {fmt(TOTAL)} FCFA
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-muted">Reste à payer</span>
          <div className="flex items-center gap-2">
            {solde && (
              <span className="row-in text-[10px] font-black text-care bg-care/10 px-2 py-0.5 rounded-full">
                Soldé
              </span>
            )}
            <span className="text-sm font-black text-ink tabular-nums">
              {remaining !== null ? fmt(remaining) : "—"} FCFA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
