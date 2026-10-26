"use client";
import { useState, useEffect, useRef } from "react";

/* ── Données ── */
const CHAPTERS = [
  {
    id: "parent",
    title: "Espace parent",
    body: "Les familles suivent les notes, les bulletins et les paiements de leur enfant depuis leur téléphone.",
  },
  {
    id: "eleve",
    title: "Espace élève",
    body: "L\u2019élève consulte ses notes, ses bulletins et son emploi du temps.",
  },
  {
    id: "paiements",
    title: "Scolarité et paiements",
    body: "Suivi des paiements, reçus numérotés, relances des familles, export Excel.",
  },
] as const;

/* ── Phone frame (CSS, sans marque) ── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden bg-white select-none"
      style={{
        width: 224,
        height: 432,
        border: "8px solid #0f172a",
        borderRadius: 38,
        boxShadow: "0 24px 64px rgba(15,23,42,0.16), inset 0 0 0 1px rgba(15,23,42,0.06)",
      }}
    >
      {/* Caméra */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-ink z-10"
        style={{ width: 60, height: 18, borderRadius: "0 0 12px 12px" }}
      />
      <div className="absolute inset-0 overflow-hidden">{children}</div>
    </div>
  );
}

/* ── Écran Parent ── */
/* 3 états qui se succèdent automatiquement (fade out/in) */
function ParentScreen({ active }: { active: boolean }) {
  const [state, setState] = useState(0);
  const [vis, setVis] = useState(true);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setVis(false);
      setTimeout(() => { setState(s => (s + 1) % 3); setVis(true); }, 300);
    }, 3000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div
      className="h-full pt-6 px-3 pb-3 flex flex-col text-[9px] transition-opacity duration-300"
      style={{ opacity: vis ? 1 : 0 }}
    >
      {state === 0 && (
        /* Notification */
        <div className="flex-1 flex flex-col justify-center gap-2">
          <p className="text-center text-[8px] text-muted mb-2">14:32</p>
          <div className="bg-subtle rounded-xl p-2.5 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-md bg-edu flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[7px]">LE</span>
              </div>
              <span className="text-[8px] font-semibold text-ink">LUMINA Education</span>
            </div>
            <p className="text-ink text-[9px] font-medium leading-tight">
              Le bulletin de Grâce est disponible
            </p>
            <p className="text-muted text-[8px] mt-0.5">il y a 1 min</p>
          </div>
        </div>
      )}

      {state === 1 && (
        /* Bulletin */
        <div className="flex-1 flex flex-col">
          <div className="bg-edu rounded-xl px-2.5 py-2 mb-2">
            <p className="text-white font-bold text-[9px]">LUMINA Education</p>
            <p className="text-white/70 text-[8px]">Bulletin d&apos;octobre</p>
          </div>
          <div className="bg-subtle rounded-lg px-2 py-1.5 mb-1.5">
            <p className="font-bold text-ink text-[9px]">BAKALA Grâce</p>
            <p className="text-muted text-[8px]">CM1 · Trimestre 1</p>
          </div>
          {[["Lecture","7,5/10"],["Maths","16/20"],["Expression","6,5/10"]].map(([m,n]) => (
            <div key={m} className="flex justify-between py-1 border-b border-border/50 last:border-0">
              <span className="text-ink">{m}</span>
              <span className="font-semibold text-ink">{n}</span>
            </div>
          ))}
          <div className="mt-auto pt-1.5 bg-subtle rounded-lg px-2 py-1.5">
            <div className="flex justify-between">
              <span className="text-muted">Moyenne</span>
              <span className="font-black text-edu">9,38/20</span>
            </div>
            <p className="text-muted text-[8px] mt-0.5">3e sur 24 élèves</p>
          </div>
        </div>
      )}

      {state === 2 && (
        /* Paiement */
        <div className="flex-1 flex flex-col">
          <p className="font-bold text-ink mb-2">BAKALA Grâce</p>
          <div className="space-y-1.5 mb-3">
            <div className="flex justify-between items-center">
              <span className="text-muted">Octobre 2026</span>
              <span className="text-care font-semibold">✓ Payée</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Novembre 2026</span>
              <span className="text-muted">En attente</span>
            </div>
          </div>
          <div className="bg-subtle rounded-lg p-2">
            <p className="text-[8px] text-muted uppercase tracking-wide mb-0.5">Reçu émis</p>
            <p className="font-mono text-ink font-semibold">REC-2026-0142</p>
            <p className="text-muted text-[8px] mt-0.5">45 000 FCFA · 26/10/2026</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Écran Élève ── */
function EleveScreen({ active }: { active: boolean }) {
  const [state, setState] = useState(0);
  const [vis, setVis] = useState(true);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setVis(false);
      setTimeout(() => { setState(s => (s + 1) % 3); setVis(true); }, 300);
    }, 3000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div
      className="h-full pt-6 px-3 pb-3 flex flex-col text-[9px] transition-opacity duration-300"
      style={{ opacity: vis ? 1 : 0 }}
    >
      {state === 0 && (
        /* Emploi du temps */
        <div className="flex-1">
          <p className="font-bold text-ink mb-2">Aujourd&apos;hui — Lundi</p>
          {[["08:00","Mathématiques","M. NGOUABI"],["10:00","Français","Mme LOUBOTA"],["14:00","SVT","M. MAFOUTA"]].map(([h,m,p]) => (
            <div key={h} className="flex gap-2 py-1.5 border-b border-border/50 last:border-0 items-start">
              <span className="text-muted font-mono w-8 flex-shrink-0">{h}</span>
              <div>
                <p className="font-semibold text-ink">{m}</p>
                <p className="text-muted text-[8px]">{p}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {state === 1 && (
        /* Nouvelle note */
        <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
          <p className="text-muted">Dernière note</p>
          <p className="font-bold text-ink text-[11px]">Mathématiques</p>
          <p className="text-edu font-black" style={{ fontSize: 36 }}>16</p>
          <p className="text-muted text-[10px]">/ 20 · M. NGOUABI</p>
          <div className="bg-edu/10 rounded-full px-2 py-0.5 mt-1">
            <span className="text-edu font-semibold text-[8px]">MABIALA Exaucé · 5ème B</span>
          </div>
        </div>
      )}

      {state === 2 && (
        /* Bulletins */
        <div className="flex-1">
          <p className="font-bold text-ink mb-2">Mes bulletins</p>
          <div className="space-y-1.5">
            <div className="bg-edu/10 rounded-lg p-2 flex justify-between items-center">
              <div>
                <p className="font-semibold text-edu text-[9px]">Trimestre 1</p>
                <p className="text-muted text-[8px]">Disponible</p>
              </div>
              <span className="text-edu font-black">13,81/20</span>
            </div>
            <div className="rounded-lg p-2 flex justify-between items-center border border-border">
              <div>
                <p className="font-semibold text-muted text-[9px]">Trimestre 2</p>
                <p className="text-muted text-[8px]">Bientôt</p>
              </div>
              <span className="text-muted">—</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Écran Paiements ── */
function PaiementsScreen({ active }: { active: boolean }) {
  const [state, setState] = useState(0);
  const [vis, setVis] = useState(true);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setVis(false);
      setTimeout(() => { setState(s => (s + 1) % 3); setVis(true); }, 300);
    }, 3000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div
      className="h-full pt-6 px-3 pb-3 flex flex-col text-[9px] transition-opacity duration-300"
      style={{ opacity: vis ? 1 : 0 }}
    >
      {state === 0 && (
        /* Liste mensualités */
        <div className="flex-1">
          <p className="font-bold text-ink mb-2">Mensualités — Classe de CM1</p>
          {[
            ["Oct","Payée","care"],["Nov","Payée","care"],
            ["Déc","Payée","care"],["Jan","Payée","care"],
            ["Fév","En attente","muted"],["Mar","En attente","muted"],
          ].map(([m,s,c]) => (
            <div key={m} className="flex justify-between py-1 border-b border-border/50 last:border-0">
              <span className="text-muted">{m} 2026</span>
              <span className={`font-semibold text-${c}`}>{s}</span>
            </div>
          ))}
        </div>
      )}

      {state === 1 && (
        /* Reçu */
        <div className="flex-1 flex flex-col justify-center">
          <div className="border-2 border-edu rounded-xl p-3 text-center">
            <p className="text-[8px] text-muted uppercase tracking-wide mb-1">Reçu de paiement</p>
            <p className="font-mono font-black text-ink text-[10px]">REC-2026-0142</p>
            <div className="my-2 border-t border-dashed border-border" />
            <p className="text-muted text-[8px]">BAKALA Grâce · CM1</p>
            <p className="font-black text-edu mt-1" style={{ fontSize: 18 }}>45 000</p>
            <p className="text-muted text-[8px]">FCFA · 26/10/2026</p>
          </div>
        </div>
      )}

      {state === 2 && (
        /* SMS relance */
        <div className="flex-1 flex flex-col justify-end gap-2">
          <p className="text-muted text-[8px]">Relance automatique</p>
          <div className="bg-edu/10 rounded-2xl rounded-bl-sm px-2.5 py-2 max-w-[80%]">
            <p className="text-ink leading-tight">
              Cher parent, la mensualité de Fév 2026 (45 000 FCFA) est en attente.
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-[8px] text-care font-semibold bg-care/10 px-2 py-0.5 rounded-full">
              ✓ 234 familles notifiées
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Composant principal ── */
export default function PhoneScrollSection() {
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = chapterRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  const screens = [
    <ParentScreen   key="p" active={active === 0} />,
    <EleveScreen    key="e" active={active === 1} />,
    <PaiementsScreen key="pa" active={active === 2} />,
  ];

  return (
    <>
      {/* ── Desktop : téléphone sticky ── */}
      <div className="hidden lg:flex gap-24 items-start">
        {/* Téléphone — self-stretch pour que sticky fonctionne */}
        <div className="w-64 flex-shrink-0 self-stretch">
          <div className="sticky" style={{ top: "calc(50vh - 216px)" }}>
            <PhoneFrame>
              <div className="relative h-full">
                {screens.map((screen, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
                  >
                    {screen}
                  </div>
                ))}
              </div>
            </PhoneFrame>
            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-6">
              {CHAPTERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={[
                    "h-1.5 rounded-full transition-all duration-300",
                    active === i ? "w-6 bg-edu" : "w-1.5 bg-border",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Chapitres */}
        <div className="flex-1 py-24 space-y-48">
          {CHAPTERS.map((ch, i) => (
            <div
              key={ch.id}
              ref={el => { chapterRefs.current[i] = el; }}
              className="min-h-[50vh] flex flex-col justify-center"
            >
              <span className="text-[10px] uppercase tracking-widest text-muted mb-3 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-black text-ink leading-tight mb-4">{ch.title}</h3>
              <p className="text-muted text-lg leading-relaxed max-w-sm">{ch.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile : écran + texte empilés ── */}
      <div className="lg:hidden space-y-16">
        {CHAPTERS.map((ch, i) => (
          <div key={ch.id} className="flex flex-col items-center gap-6">
            <PhoneFrame>
              {i === 0 ? <ParentScreen active /> :
               i === 1 ? <EleveScreen active /> :
               <PaiementsScreen active />}
            </PhoneFrame>
            <div className="text-center">
              <h3 className="text-2xl font-black text-ink mb-3">{ch.title}</h3>
              <p className="text-muted text-lg leading-relaxed">{ch.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
