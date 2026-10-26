"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Check } from "lucide-react";

/* ── Données ─────────────────────────────────────────────────────── */
const STEPS = [
  { label: "Dépôt du dossier",            agent: "MOUKENGUE Sarah",    time: "09:14" },
  { label: "Vérification des pièces",     agent: "NGOMA Robert",       time: "10:32" },
  { label: "Validation chef de service",  agent: "LOUZOLO Christine",  time: "14:15" },
  { label: "Signature",                   agent: "MOUKENGUE André",    time: "14:48" },
  { label: "Délivrance",                  agent: "MAKAYA Paul",        time: "15:03" },
];

const STEP_DELAY = 650;
const INIT_DELAY = 350;

/* ── Composant ───────────────────────────────────────────────────── */
export default function AdminDemo() {
  const [completed, setCompleted] = useState(0);
  const [badge,     setBadge]     = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRun       = useRef(false);

  const runAnimation = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    STEPS.forEach((_, i) => {
      setTimeout(() => setCompleted(i + 1), INIT_DELAY + i * STEP_DELAY);
    });
    setTimeout(() => setBadge(true), INIT_DELAY + STEPS.length * STEP_DELAY + 400);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTimeout(() => { setCompleted(STEPS.length); setBadge(true); }, 0);
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
      <div className="bg-admin px-4 py-3">
        <p className="text-white font-bold text-[11px] leading-tight">
          Dossier n° ADM-2026-0418
        </p>
        <p className="text-white/70 text-[10px] mt-0.5">
          Demande d&apos;acte de naissance
        </p>
      </div>

      {/* Usager */}
      <div className="px-4 py-2.5 bg-subtle border-b border-border flex items-center justify-between">
        <div>
          <p className="text-ink font-bold text-xs">NKOUKA Prisca</p>
          <p className="text-muted text-[10px]">Déposé le 26/10/2026</p>
        </div>
        {badge && (
          <span className="row-in text-[10px] font-semibold text-admin bg-admin/10 px-2.5 py-1 rounded-full">
            Prêt à retirer
          </span>
        )}
      </div>

      {/* Circuit */}
      <div className="px-4 py-3">
        {STEPS.map((s, i) => {
          const done = i < completed;
          return (
            <div key={s.label} className="flex gap-3">
              {/* Colonne verticale */}
              <div className="flex flex-col items-center flex-shrink-0 w-5">
                <div className={[
                  "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                  "transition-colors duration-300",
                  done ? "bg-admin" : "bg-border",
                ].join(" ")}>
                  {done && <Check size={10} className="text-white" strokeWidth={3} />}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={[
                    "w-px flex-1 min-h-[14px] my-0.5 transition-colors duration-300",
                    i < completed - 1 ? "bg-admin/40" : "bg-border",
                  ].join(" ")} />
                )}
              </div>

              {/* Contenu */}
              <div className={`pb-3 flex-1 ${i === STEPS.length - 1 ? "pb-0" : ""}`}>
                <p className={`text-[11px] font-semibold leading-tight transition-colors duration-200 ${done ? "text-ink" : "text-muted"}`}>
                  {s.label}
                </p>
                <div className={[
                  "overflow-hidden transition-all duration-300",
                  done ? "max-h-5 opacity-100 mt-0.5" : "max-h-0 opacity-0",
                ].join(" ")}>
                  <p className="text-[10px] text-muted tabular-nums">
                    {s.time} · {s.agent}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
