"use client";
import { useState, useEffect, useRef } from "react";

/* ── Hook révélation ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTimeout(() => setTriggered(true), 0); return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, triggered };
}

/* ─── Case 1 : Agenda des rendez-vous (grande) ─────────────────── */
const APPOINTMENTS = [
  { time: "08:30", patient: "NKOUKA Prisca",     motif: "Consultation",              medecin: "Dr NKOUNGA",  status: "done" },
  { time: "09:15", patient: "MABIALA Exaucé",    motif: "Suivi croissance",          medecin: "Dr NKOUNGA",  status: "done" },
  { time: "10:00", patient: "MOUKOKO Jean-Paul", motif: "Suivi diabète",             medecin: "Dr MBEMBA",   status: "active" },
  { time: "11:30", patient: "BAKALA Grâce",      motif: "Visite de contrôle",        medecin: "Dr NKOUNGA",  status: "upcoming" },
  { time: "14:00", patient: "LOUZOLO Christine", motif: "Renouvellement ordonnance", medecin: "Dr MBEMBA",   status: "upcoming" },
];

function AgendaCard() {
  const { ref, triggered } = useReveal();
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    APPOINTMENTS.forEach((_, i) =>
      setTimeout(() => setCount(i + 1), 300 + i * 400)
    );
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">Agenda du jour</p>
        <p className="text-xs text-muted">Lundi 26/10/2026 · 5 rendez-vous</p>
      </div>
      <div className="flex-1 space-y-1.5">
        {APPOINTMENTS.slice(0, count).map((a) => {
          const statusStyle =
            a.status === "done"   ? "bg-subtle text-muted" :
            a.status === "active" ? "bg-care text-white"   :
                                    "bg-subtle text-ink border border-border";
          return (
            <div
              key={a.time}
              className={`row-in flex items-center gap-3 rounded-xl px-3 py-2 ${statusStyle}`}
            >
              <span className="font-mono text-[10px] w-10 flex-shrink-0 font-semibold">{a.time}</span>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-semibold leading-tight ${a.status === "active" ? "text-white" : "text-ink"}`}>
                  {a.patient}
                </p>
                <p className={`text-[10px] leading-tight ${a.status === "active" ? "text-white/70" : "text-muted"}`}>
                  {a.motif}
                </p>
              </div>
              <span className={`text-[10px] flex-shrink-0 ${a.status === "active" ? "text-white/80" : "text-muted"}`}>
                {a.medecin}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Case 2 : Dossier patient ─────────────────────────────────── */
const CONSULTS = [
  { date: "12/03/2026", motif: "Suivi diabète",              medecin: "Dr MBEMBA" },
  { date: "28/01/2026", motif: "Renouvellement ordonnance",  medecin: "Dr MBEMBA" },
  { date: "05/12/2025", motif: "Consultation initiale",      medecin: "Dr NKOUNGA" },
];

function DossierCard() {
  const { ref, triggered } = useReveal();
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    CONSULTS.forEach((_, i) =>
      setTimeout(() => setCount(i + 1), 400 + i * 500)
    );
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <div className="mb-3">
        <p className="text-[10px] uppercase tracking-widest text-muted mb-1">Dossier patient</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xs font-bold text-ink">MOUKOKO Jean-Paul</p>
          <span className="text-[10px] text-muted">54 ans</span>
        </div>
      </div>
      <div className="flex-1 space-y-1.5">
        {CONSULTS.slice(0, count).map((c) => (
          <div key={c.date} className="row-in flex items-start justify-between py-1.5 border-b border-border/50 last:border-0 gap-2">
            <div>
              <p className="text-[11px] font-medium text-ink leading-tight">{c.motif}</p>
              <p className="text-[10px] text-muted">{c.medecin}</p>
            </div>
            <span className="text-[10px] text-muted font-mono flex-shrink-0">{c.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Case 3 : Résultat d'examen ───────────────────────────────── */
function ExamenCard() {
  const { ref, triggered } = useReveal();
  const [showNotif, setShowNotif] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    setTimeout(() => setShowNotif(true), 400);
    setTimeout(() => setShowResult(true), 1200);
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col gap-3">
      <p className="text-[10px] uppercase tracking-widest text-muted">Résultat d&apos;examen</p>

      {showNotif && (
        <div className="row-in flex items-center gap-2 bg-care/10 rounded-xl px-3 py-2">
          <div className="w-2 h-2 rounded-full bg-care flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="text-[11px] font-semibold text-ink">Bilan sanguin</p>
            <p className="text-[10px] text-care font-medium">Résultats disponibles</p>
          </div>
        </div>
      )}

      {showResult && (
        <div className="row-in flex-1 bg-subtle rounded-xl p-3 space-y-1.5">
          <p className="text-[10px] text-muted uppercase tracking-wide">MOUKOKO Jean-Paul · 26/10/2026</p>
          {[
            { label: "Glycémie",    val: "1,42 g/L",   alert: true },
            { label: "Hémoglobine", val: "14,2 g/dL",  alert: false },
            { label: "Créatinine",  val: "82 µmol/L",  alert: false },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between">
              <span className="text-[11px] text-muted">{r.label}</span>
              <span className={`text-[11px] font-semibold tabular-nums ${r.alert ? "text-amber-600" : "text-ink"}`}>
                {r.val}
                {r.alert && <span className="ml-1 text-[9px]" aria-hidden="true">▲</span>}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Case 4 : Accès par rôle ──────────────────────────────────── */
const CARE_ROLES = [
  { role: "Direction",  actions: [true, true, true] },
  { role: "Soignants",  actions: [true, true, false] },
  { role: "Accueil",    actions: [true, false, false] },
];
const CARE_ACTIONS = ["Consulter", "Modifier", "Facturer"];

function RolesCard() {
  const { ref, triggered } = useReveal();
  const [step, setStep] = useState(0);
  const hasRun = useRef(false);
  const total = CARE_ROLES.reduce((a, r) => a + r.actions.length, 0);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    Array.from({ length: total }).forEach((_, i) =>
      setTimeout(() => setStep(i + 1), 400 + i * 160)
    );
  }, [triggered]); // eslint-disable-line react-hooks/exhaustive-deps

  let cellIdx = 0;
  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3">Accès par rôle</p>
      <table className="w-full text-[10px] flex-1">
        <thead>
          <tr>
            <th className="text-left text-muted font-normal pb-2 w-20">Rôle</th>
            {CARE_ACTIONS.map(a => (
              <th key={a} className="text-center text-muted font-normal pb-2">{a}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CARE_ROLES.map((r) => (
            <tr key={r.role} className="border-t border-border/50">
              <td className="py-1.5 font-medium text-ink">{r.role}</td>
              {r.actions.map((allowed, j) => {
                const ci = cellIdx++;
                return (
                  <td key={j} className="text-center py-1.5">
                    <span className={[
                      "inline-flex w-5 h-5 rounded-md items-center justify-center text-[9px] font-black transition-all duration-300",
                      ci < step
                        ? allowed ? "bg-care/10 text-care" : "bg-border/50 text-muted"
                        : "opacity-0",
                    ].join(" ")}
                    aria-hidden="true">
                      {allowed ? "✓" : "—"}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Bento principal ──────────────────────────────────────────── */
export default function CareBento() {
  return (
    <div aria-hidden="true" className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* Agenda pleine largeur */}
      <div className="md:col-span-2 rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[220px]">
        <AgendaCard />
      </div>
      {/* Dossier */}
      <div className="rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[200px]">
        <DossierCard />
      </div>
      {/* Examen */}
      <div className="rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[200px]">
        <ExamenCard />
      </div>
      {/* Rôles */}
      <div className="md:col-span-2 rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[160px]">
        <RolesCard />
      </div>
    </div>
  );
}
