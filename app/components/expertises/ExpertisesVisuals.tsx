"use client";
import { useState, useEffect, useRef } from "react";

/* ── useReveal hook ──────────────────────────────────────────────────── */
function useReveal(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTimeout(() => setTriggered(true), 0);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, triggered };
}

/* ── AuditVisual ─────────────────────────────────────────────────────── */
const AUDIT_ITEMS = [
  "Cartographie des processus existants",
  "Identification des blocages prioritaires",
  "Estimation des efforts par chantier",
  "Plan de déploiement progressif",
];

export function AuditVisual() {
  const { ref, triggered } = useReveal();
  const [visibleCount, setVisibleCount] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered) return;
    if (hasRun.current) return;
    hasRun.current = true;

    AUDIT_ITEMS.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), 300 + i * 400);
    });
    setTimeout(() => setShowFooter(true), 300 + AUDIT_ITEMS.length * 400 + 400);
  }, [triggered]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Démonstration d'un audit LUMINA"
      className="bg-white border border-border rounded-2xl p-5 w-full max-w-sm select-none"
    >
      <p className="text-[10px] uppercase tracking-widest text-muted mb-4">
        Rapport d&apos;audit
      </p>
      <ul className="space-y-3">
        {AUDIT_ITEMS.slice(0, visibleCount).map((item) => (
          <li key={item} className="row-in flex items-start gap-3">
            <span className="mt-1.5 w-4 h-4 rounded-full bg-agency/10 border border-agency/30 flex-shrink-0 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M1.5 4L3 5.5L6.5 2" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-sm text-ink leading-snug">{item}</span>
          </li>
        ))}
      </ul>
      {showFooter && (
        <div className="row-in mt-5 pt-4 border-t border-border flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-ink">4 recommandations</p>
            <p className="text-[10px] text-muted mt-0.5">Rapport prêt</p>
          </div>
          <span className="text-[10px] bg-agency/10 text-agency font-semibold px-2.5 py-1 rounded-full">
            Terminé
          </span>
        </div>
      )}
    </div>
  );
}

/* ── ConceptionVisual ────────────────────────────────────────────────── */
const SKELETON_BLOCKS = [
  { w: "w-3/4", h: "h-6",   color: "bg-ink/10" },
  { w: "w-full", h: "h-2",  color: "bg-border" },
  { w: "w-5/6", h: "h-2",  color: "bg-border" },
  { w: "w-full", h: "h-24", color: "bg-subtle" },
  { w: "w-1/2", h: "h-3",  color: "bg-border" },
  { w: "w-2/3", h: "h-3",  color: "bg-border" },
];

export function ConceptionVisual() {
  const { ref, triggered } = useReveal();
  const [visibleCount, setVisibleCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered) return;
    if (hasRun.current) return;
    hasRun.current = true;

    SKELETON_BLOCKS.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), 200 + i * 250);
    });
  }, [triggered]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Maquette d'un site en construction"
      className="bg-white rounded-2xl border border-border overflow-hidden w-full max-w-sm select-none"
    >
      {/* Browser chrome */}
      <div className="bg-subtle border-b border-border px-3 py-2.5 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white border border-border rounded-md px-2.5 py-1 mx-2">
          <p className="text-[10px] text-muted font-mono">lumina-cg.com</p>
        </div>
      </div>

      {/* Page being built */}
      <div className="p-4 space-y-3 min-h-[180px]">
        {SKELETON_BLOCKS.slice(0, visibleCount).map((block, i) => (
          <div
            key={i}
            className={["row-in rounded", block.w, block.h, block.color].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

/* ── IdentiteVisual ──────────────────────────────────────────────────── */
const SWATCHES = [
  { bg: "bg-ink",    hex: "#0F172A", name: "Encre",  border: false },
  { bg: "bg-agency", hex: "#2563EB", name: "Agence", border: false },
  { bg: "bg-subtle", hex: "#F8FAFC", name: "Fond",   border: true  },
];

export function IdentiteVisual() {
  const { ref, triggered } = useReveal();
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTypo, setShowTypo] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered) return;
    if (hasRun.current) return;
    hasRun.current = true;

    SWATCHES.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), 200 + i * 300);
    });
    setTimeout(() => setShowTypo(true), 200 + SWATCHES.length * 300 + 300);
  }, [triggered]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Palette de couleurs et typographie"
      className="bg-white border border-border rounded-2xl p-5 w-full max-w-sm select-none"
    >
      <p className="text-[10px] uppercase tracking-widest text-muted mb-4">
        Palette de couleurs
      </p>
      <div className="flex gap-3 mb-5">
        {SWATCHES.slice(0, visibleCount).map((s) => (
          <div key={s.name} className="row-in flex flex-col items-center gap-2 flex-1">
            <div
              className={[
                "w-full h-14 rounded-xl",
                s.bg,
                s.border ? "border border-border" : "",
              ].join(" ")}
            />
            <p className="text-[10px] font-mono text-muted">{s.hex}</p>
            <p className="text-[10px] font-semibold text-ink">{s.name}</p>
          </div>
        ))}
      </div>
      {showTypo && (
        <div className="row-in border-t border-border pt-4">
          <p className="text-[10px] uppercase tracking-widest text-muted mb-2">
            Typographie
          </p>
          <p className="text-2xl font-black text-ink tracking-tight leading-none">
            Aa
          </p>
          <p className="text-[10px] text-muted mt-1">Plus Jakarta Sans</p>
        </div>
      )}
    </div>
  );
}

/* ── MaintenanceVisual ───────────────────────────────────────────────── */
const MAINTENANCE_ITEMS = [
  { label: "Sauvegardes", value: "Quotidiennes" },
  { label: "Correctifs",  value: "Sous 24 h" },
  { label: "Formation",   value: "Sur site" },
];

const UPTIME_TARGET = 99.9;
const UPTIME_DURATION = 1200;

export function MaintenanceVisual() {
  const { ref, triggered } = useReveal();
  const [uptime, setUptime] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered) return;
    if (hasRun.current) return;
    hasRun.current = true;

    // Start uptime counter
    setTimeout(() => {
      setUptime(0);
      const t0 = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - t0) / UPTIME_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setUptime(UPTIME_TARGET * eased);
        if (progress < 1) requestAnimationFrame(step);
        else setUptime(UPTIME_TARGET);
      };
      requestAnimationFrame(step);
    }, 200);

    // Show items after 800ms
    MAINTENANCE_ITEMS.forEach((_, i) => {
      setTimeout(() => setVisibleCount(i + 1), 800 + i * 300);
    });
  }, [triggered]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Tableau de bord de maintenance"
      className="bg-white border border-border rounded-2xl p-5 w-full max-w-sm select-none"
    >
      {/* Status header */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] uppercase tracking-widest text-muted">
          Statut du serveur
        </p>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[10px] font-semibold text-green-600">En ligne</span>
        </div>
      </div>

      {/* Uptime counter */}
      <div className="mb-5">
        <p className="text-[10px] text-muted mb-1">Disponibilité</p>
        <p className="text-3xl font-black text-ink tabular-nums leading-none">
          {uptime !== null ? uptime.toFixed(1) : "0.0"}
          <span className="text-base font-normal text-muted">%</span>
        </p>
      </div>

      {/* Items */}
      <ul className="space-y-3">
        {MAINTENANCE_ITEMS.slice(0, visibleCount).map((item) => (
          <li key={item.label} className="row-in flex items-center justify-between border-t border-border pt-3 first:border-t-0 first:pt-0">
            <p className="text-sm text-muted">{item.label}</p>
            <p className="text-sm font-semibold text-ink">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
