"use client";
import { useState, useEffect, useRef } from "react";

/* ── Hook utilitaire : déclenche une fois à l'entrée dans l'écran ── */
function useReveal() {
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
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, triggered };
}

/* ─── Case 1 : Notes et bulletins ─────────────────────────────── */
/*
  Montre la saisie des 3 notes d'un collégien :
  DC (devoir de classe), DD (devoir départemental), Composition.
  Les notes apparaissent une par une, puis la moyenne s'affiche.
*/
const NOTES = [
  { label: "Devoir de classe",      short: "DC",    val: "15/20" },
  { label: "Devoir départemental",  short: "DD",    val: "12/20" },
  { label: "Composition",           short: "Compo", val: "13/20" },
];
const NOTE_DELAY   = 500;
const NOTE_INIT    = 400;
const FINAL_MOY    = 13.33;
const MOY_DURATION = 900;

function NotesCard() {
  const { ref, triggered } = useReveal();
  const [count,    setCount]    = useState(0);
  const [moy,      setMoy]      = useState<number | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    NOTES.forEach((_, i) => setTimeout(() => setCount(i + 1), NOTE_INIT + i * NOTE_DELAY));
    const after = NOTE_INIT + NOTES.length * NOTE_DELAY + 300;
    setTimeout(() => {
      setMoy(0);
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / MOY_DURATION, 1);
        setMoy(FINAL_MOY * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
        else setMoy(FINAL_MOY);
      };
      requestAnimationFrame(step);
    }, after);
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">Notes et bulletins</p>
        <p className="text-xs font-semibold text-ink">MABIALA Exaucé · 5ème B · Mathématiques</p>
      </div>
      <div className="flex-1 space-y-2">
        {NOTES.slice(0, count).map((n) => (
          <div key={n.short} className="row-in flex items-center justify-between bg-subtle rounded-lg px-3 py-2">
            <span className="text-xs text-muted">{n.label}</span>
            <span className="text-sm font-black text-ink tabular-nums">{n.val}</span>
          </div>
        ))}
      </div>
      {moy !== null && (
        <div className="row-in mt-3 flex items-center justify-between bg-edu/10 rounded-lg px-3 py-2">
          <span className="text-xs font-semibold text-edu">Moyenne calculée</span>
          <span className="text-sm font-black text-edu tabular-nums">{moy.toFixed(2)}/20</span>
        </div>
      )}
    </div>
  );
}

/* ─── Case 2 : Inscriptions ────────────────────────────────────── */
const ELEVES = [
  { name: "BAKALA Grâce",    classe: "CM1",    id: "RAB-031" },
  { name: "MABIALA Exaucé",  classe: "5ème B", id: "RAB-047" },
  { name: "NKOUKA Prisca",   classe: "CE2",    id: "RAB-012" },
];

function InscriptionsCard() {
  const { ref, triggered } = useReveal();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    ELEVES.forEach((_, i) => setTimeout(() => setCount(i + 1), 400 + i * 450));
    const after = 400 + ELEVES.length * 450 + 200;
    setTimeout(() => {
      const t0 = performance.now();
      const TARGET = 847;
      const DURATION = 1200;
      const step = (now: number) => {
        const p = Math.min((now - t0) / DURATION, 1);
        setTotal(Math.round(TARGET * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
        else setTotal(TARGET);
      };
      requestAnimationFrame(step);
    }, after);
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3">Inscriptions</p>
      <div className="flex-1 space-y-1.5 text-xs">
        {count > 0 && (
          <div className="grid grid-cols-3 text-muted text-[10px] pb-1 border-b border-border">
            <span>Élève</span><span>Classe</span><span>ID</span>
          </div>
        )}
        {ELEVES.slice(0, count).map((e) => (
          <div key={e.id} className="row-in grid grid-cols-3 text-ink">
            <span className="font-medium truncate">{e.name}</span>
            <span className="text-muted">{e.classe}</span>
            <span className="font-mono text-muted">{e.id}</span>
          </div>
        ))}
      </div>
      {total > 0 && (
        <div className="mt-auto pt-2 border-t border-border">
          <span className="text-[11px] text-muted tabular-nums">
            <span className="font-black text-ink text-sm">{total.toLocaleString("fr-FR")}</span> élèves importés
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Case 3 : Emplois du temps ─────────────────────────────────── */
const SLOTS = [
  { row: 0, col: 0, label: "Maths",    color: "bg-edu/10 text-edu" },
  { row: 0, col: 1, label: "Français", color: "bg-agency/10 text-agency" },
  { row: 1, col: 0, label: "SVT",      color: "bg-care/10 text-care" },
  { row: 1, col: 1, label: "Anglais",  color: "bg-admin/10 text-admin" },
  { row: 2, col: 0, label: "Histoire", color: "bg-subtle text-muted border border-border" },
  { row: 2, col: 1, label: "EPS",      color: "bg-subtle text-muted border border-border" },
];

function EmploisCard() {
  const { ref, triggered } = useReveal();
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    SLOTS.forEach((_, i) => setTimeout(() => setCount(i + 1), 300 + i * 250));
  }, [triggered]);

  const hours = ["08h", "10h", "14h"];

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3">Emplois du temps</p>
      <div className="flex-1 grid grid-rows-3 gap-1">
        {hours.map((h, row) => (
          <div key={h} className="grid grid-cols-[28px_1fr_1fr] gap-1 items-center">
            <span className="text-[9px] text-muted font-mono">{h}</span>
            {[0, 1].map(col => {
              const slot = SLOTS.find(s => s.row === row && s.col === col);
              const idx  = SLOTS.indexOf(slot!);
              return (
                <div
                  key={col}
                  className={[
                    "rounded-md px-1.5 py-1 text-[9px] font-semibold text-center transition-all duration-300",
                    slot && idx < count ? slot.color : "bg-border/30",
                  ].join(" ")}
                  style={{
                    opacity: slot && idx < count ? 1 : 0.3,
                  }}
                >
                  {slot && idx < count ? slot.label : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Case 4 : Comptes par rôle ─────────────────────────────────── */
const ROLES = [
  { label: "Direction",     icon: "◆", color: "text-ink bg-ink/10" },
  { label: "Secrétariat",   icon: "▲", color: "text-admin bg-admin/10" },
  { label: "Enseignants",   icon: "●", color: "text-agency bg-agency/10" },
  { label: "Parents",       icon: "●", color: "text-edu bg-edu/10" },
  { label: "Élèves",        icon: "●", color: "text-care bg-care/10" },
];

function RolesCard() {
  const { ref, triggered } = useReveal();
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    ROLES.forEach((_, i) => setTimeout(() => setCount(i + 1), 300 + i * 300));
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3">Comptes par rôle</p>
      <div className="flex-1 space-y-2">
        {ROLES.map((r, i) => (
          <div
            key={r.label}
            className={[
              "flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-all duration-400",
              i < count ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2",
            ].join(" ")}
          >
            <span className={`text-[10px] w-5 h-5 rounded-md flex items-center justify-center font-black flex-shrink-0 ${r.color}`}>
              {r.icon}
            </span>
            <span className="text-xs font-medium text-ink">{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Case 5 : Communication ─────────────────────────────────────── */
function CommunicationCard() {
  const { ref, triggered } = useReveal();
  const [showBubble, setShowBubble] = useState(false);
  const [showCount,  setShowCount]  = useState(false);
  const [count,      setCount]      = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    setTimeout(() => setShowBubble(true), 400);
    setTimeout(() => {
      setShowCount(true);
      const t0 = performance.now();
      const TARGET = 234;
      const DURATION = 800;
      const step = (now: number) => {
        const p = Math.min((now - t0) / DURATION, 1);
        setCount(Math.round(TARGET * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
        else setCount(TARGET);
      };
      requestAnimationFrame(step);
    }, 1400);
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col justify-between">
      <p className="text-[10px] uppercase tracking-widest text-muted">Communication</p>
      <div className="flex-1 flex flex-col justify-end gap-2 py-3">
        {showBubble && (
          <div
            className="row-in bg-edu/10 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%]"
          >
            <p className="text-xs text-ink leading-snug">
              Cher parent, le bulletin de Grâce est disponible.
            </p>
          </div>
        )}
      </div>
      {showCount && (
        <div className="row-in text-center">
          <p className="text-2xl font-black text-ink tabular-nums">{count}</p>
          <p className="text-[10px] text-muted">SMS envoyés ce jour</p>
        </div>
      )}
    </div>
  );
}

/* ─── Bento principal ──────────────────────────────────────────── */
export default function EducationBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {/* Notes : large (2 cols + 2 rows sur desktop) */}
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[260px] rounded-2xl border border-border bg-white overflow-hidden select-none">
        <NotesCard />
      </div>

      {/* Inscriptions */}
      <div className="min-h-[220px] rounded-2xl border border-border bg-white overflow-hidden select-none">
        <InscriptionsCard />
      </div>

      {/* Emplois du temps */}
      <div className="min-h-[220px] rounded-2xl border border-border bg-white overflow-hidden select-none">
        <EmploisCard />
      </div>

      {/* Comptes par rôle */}
      <div className="min-h-[200px] rounded-2xl border border-border bg-white overflow-hidden select-none">
        <RolesCard />
      </div>

      {/* Communication */}
      <div className="md:col-span-1 min-h-[200px] rounded-2xl border border-border bg-white overflow-hidden select-none">
        <CommunicationCard />
      </div>
    </div>
  );
}
