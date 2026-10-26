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

/* ─── Case 1 : Registre des courriers (grande) ──────────────────── */
/*
  Lignes de courrier apparaissent une par une.
  Données numériques uniquement — aucun formulaire papier.
*/
const COURRIERS = [
  { ref: "CRR-2026-0341", objet: "Demande de certificat de résidence", statut: "Reçu",     color: "text-admin bg-admin/10" },
  { ref: "CRR-2026-0342", objet: "Signalement travaux voirie",          statut: "En cours", color: "text-agency bg-agency/10" },
  { ref: "CRR-2026-0343", objet: "Acte de naissance numérique",         statut: "Clôturé",  color: "text-care bg-care/10" },
];

function CourriersCard() {
  const { ref, triggered } = useReveal();
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    COURRIERS.forEach((_, i) =>
      setTimeout(() => setCount(i + 1), 400 + i * 550)
    );
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <div className="mb-4">
        <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">Registre des courriers</p>
        <p className="text-xs text-muted">Lundi 26/10/2026 · 12 courriers</p>
      </div>
      <div className="flex-1 space-y-2">
        <div className="grid grid-cols-[3fr_auto] text-[10px] text-muted pb-1 border-b border-border gap-3">
          <span>Référence · Objet</span>
          <span>Statut</span>
        </div>
        {COURRIERS.slice(0, count).map((c) => (
          <div key={c.ref} className="row-in grid grid-cols-[3fr_auto] gap-3 items-start">
            <div>
              <p className="font-mono text-[10px] text-muted">{c.ref}</p>
              <p className="text-xs font-medium text-ink">{c.objet}</p>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${c.color}`}>
              {c.statut}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Case 2 : Recherche archives ──────────────────────────────── */
/*
  Frappe "acte de naissance 2019" → résultats numériques apparaissent.
  NKOUKA Prisca : cohérent avec ADM-2026-0418 dans AdminDemo.
*/
const QUERY   = "acte de naissance 2019";
const RESULTS = [
  { name: "NKOUKA Prisca",  date: "12/03/2019", ref: "ARC-2019-0341" },
  { name: "MOUKENGUE Léa",  date: "07/08/2019", ref: "ARC-2019-0412" },
  { name: "BAKALA Joël",    date: "25/11/2019", ref: "ARC-2019-0589" },
];

function RechercheCard() {
  const { ref, triggered } = useReveal();
  const [typed,   setTyped]   = useState("");
  const [results, setResults] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;

    QUERY.split("").forEach((_, i) => {
      setTimeout(() => setTyped(QUERY.slice(0, i + 1)), 400 + i * 65);
    });
    setTimeout(() => setResults(true), 400 + QUERY.length * 65 + 400);
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3">Recherche archives</p>
      <div
        className="flex items-center gap-2 bg-subtle border border-border rounded-lg px-3 py-2 mb-3"
        aria-hidden="true"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-muted flex-shrink-0">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span className="text-xs text-ink flex-1 min-h-[1em]">
          {typed}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <div className="flex-1 space-y-1.5">
        {results && RESULTS.map((r) => (
          <div key={r.ref} className="row-in flex flex-col gap-0 bg-subtle rounded-lg px-2.5 py-2">
            <p className="text-xs font-semibold text-ink">{r.name}</p>
            <p className="text-[10px] text-muted">{r.date} · <span className="font-mono">{r.ref}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Case 3 : Circuit de validation ───────────────────────────── */
/*
  Dossier ADM-2026-0418 (NKOUKA Prisca) — cohérent avec AdminDemo.
  Agents : MOUKENGUE Sarah (Dépôt), LOUZOLO Christine (chef de service).
  "Dépôt numérique" — pas de dépôt papier.
*/
const V_STEPS = [
  { label: "Dépôt numérique",     agent: "MOUKENGUE Sarah" },
  { label: "Vérification pièces", agent: "NGOMA Robert" },
  { label: "Visa chef de service", agent: "LOUZOLO Christine" },
];

function CircuitCard() {
  const { ref, triggered } = useReveal();
  const [done, setDone] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    V_STEPS.forEach((_, i) =>
      setTimeout(() => setDone(i + 1), 400 + i * 600)
    );
  }, [triggered]);

  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-1">Circuit de validation</p>
      <p className="text-[10px] text-muted mb-3">ADM-2026-0418</p>
      <div className="flex-1 space-y-0">
        {V_STEPS.map((s, i) => (
          <div key={s.label} className="flex gap-2.5">
            <div className="flex flex-col items-center w-4 flex-shrink-0">
              <div
                className={[
                  "w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                  i < done ? "bg-admin" : "bg-border",
                ].join(" ")}
                aria-hidden="true"
              >
                {i < done && (
                  <span className="text-white text-[8px] font-black">✓</span>
                )}
              </div>
              {i < V_STEPS.length - 1 && (
                <div
                  className={`w-px flex-1 min-h-[12px] my-0.5 transition-colors duration-300 ${i < done - 1 ? "bg-admin/40" : "bg-border"}`}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="pb-3 flex-1">
              <p className={`text-xs font-semibold transition-colors duration-200 ${i < done ? "text-ink" : "text-muted"}`}>
                {s.label}
              </p>
              <div className={`overflow-hidden transition-all duration-300 ${i < done ? "max-h-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-[10px] text-muted">{s.agent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Case 4 : Droits par rôle ─────────────────────────────────── */
const ROLE_MATRIX = [
  { role: "Direction",    actions: [true,  true,  true]  },
  { role: "Agents",       actions: [true,  true,  false] },
  { role: "Consultation", actions: [true,  false, false] },
];
const ACTION_LABELS = ["Lire", "Modifier", "Valider"];

function RolesCard() {
  const { ref, triggered } = useReveal();
  const [step, setStep] = useState(0);
  const hasRun = useRef(false);

  const totalCells = ROLE_MATRIX.reduce((a, r) => a + r.actions.length, 0);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    Array.from({ length: totalCells }).forEach((_, i) =>
      setTimeout(() => setStep(i + 1), 400 + i * 150)
    );
  }, [triggered]); // eslint-disable-line react-hooks/exhaustive-deps

  let cellIndex = 0;
  return (
    <div ref={ref} className="p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3">Droits par rôle</p>
      <table className="w-full text-[10px] flex-1">
        <thead>
          <tr>
            <th className="text-left text-muted font-normal pb-2 w-24">Rôle</th>
            {ACTION_LABELS.map((a) => (
              <th key={a} className="text-center text-muted font-normal pb-2">{a}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROLE_MATRIX.map((r) => (
            <tr key={r.role} className="border-t border-border/50">
              <td className="py-1.5 font-medium text-ink">{r.role}</td>
              {r.actions.map((allowed, j) => {
                const ci = cellIndex++;
                return (
                  <td key={j} className="text-center py-1.5">
                    <span
                      className={[
                        "inline-flex w-5 h-5 rounded-md items-center justify-center text-[9px] font-black transition-all duration-300",
                        ci < step
                          ? allowed
                            ? "bg-admin/10 text-admin"
                            : "bg-border/50 text-muted"
                          : "opacity-0",
                      ].join(" ")}
                      aria-hidden="true"
                    >
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
export default function AdminBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {/* Courriers : pleine largeur */}
      <div className="md:col-span-2 rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[200px]">
        <CourriersCard />
      </div>
      {/* Recherche */}
      <div className="rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[200px]">
        <RechercheCard />
      </div>
      {/* Circuit */}
      <div className="rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[200px]">
        <CircuitCard />
      </div>
      {/* Droits : pleine largeur */}
      <div className="md:col-span-2 rounded-2xl border border-border bg-white overflow-hidden select-none min-h-[180px]">
        <RolesCard />
      </div>
    </div>
  );
}
