"use client";
import { useState, useEffect, useRef } from "react";

const VERBS = ["AUDITONS", "CONCEVONS", "CONSTRUISONS", "MAINTENONS"];
const HOLD      = 1400;  // ms word stays static before exit
const STAGGER   = 26;    // ms between each letter
const LETTER_MS = 360;   // ms per letter animation

export default function VerbRotator() {
  const idxRef   = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [display, setDisplay] = useState(0);
  const [phase,   setPhase]   = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cycle = () => {
      const cur  = idxRef.current;
      const word = VERBS[cur];
      const outMs = word.length * STAGGER + LETTER_MS;

      setPhase("out");

      timerRef.current = setTimeout(() => {
        const next = (cur + 1) % VERBS.length;
        idxRef.current = next;
        setDisplay(next);
        setPhase("in");
        const inMs = VERBS[next].length * STAGGER + LETTER_MS + 80;
        timerRef.current = setTimeout(() => {
          setPhase("idle");
          timerRef.current = setTimeout(cycle, HOLD);
        }, inMs);
      }, outMs);
    };

    timerRef.current = setTimeout(cycle, HOLD);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const word = VERBS[display];

  return (
    <span
      aria-hidden="true"
      className="relative block overflow-hidden"
      style={{ lineHeight: "inherit" }}
    >
      {/* Invisible sizer — keeps the block the height of one line */}
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        &nbsp;
      </span>
      {/* Animated letters — absolutely centered */}
      <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap">
        {word.split("").map((ch, i) => {
          const delay = `${i * STAGGER}ms`;
          const anim =
            phase === "out"
              ? `verb-leave ${LETTER_MS}ms cubic-bezier(0.4,0,1,1) ${delay} both`
              : phase === "in"
              ? `verb-enter ${LETTER_MS}ms cubic-bezier(0.22,1,0.36,1) ${delay} both`
              : "none";
          return (
            <span
              key={`${display}-${i}`}
              className="inline-block"
              style={{ animation: anim }}
            >
              {ch}
            </span>
          );
        })}
      </span>
    </span>
  );
}
