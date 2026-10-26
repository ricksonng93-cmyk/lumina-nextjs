"use client";
import { useEffect, useRef, useState } from "react";

const VERBS = ["auditons", "concevons", "construisons", "maintenons"];
const INTERVAL       = 1200;  // ms between rotations
const LEAVE_DURATION = 280;   // ms out animation
const ENTER_DURATION = 350;   // ms in animation

type Phase = "stable" | "leaving" | "entering";

interface Props {
  "aria-hidden"?: boolean | "true" | "false";
}

export default function VerbRotator(props: Props) {
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const [index, setIndex] = useState(2); // start on "construisons"
  const [phase, setPhase] = useState<Phase>("stable");
  const indexRef = useRef(2);

  useEffect(() => {
    if (prefersReduced) return;

    const tick = () => {
      setPhase("leaving");
      setTimeout(() => {
        const next = (indexRef.current + 1) % VERBS.length;
        indexRef.current = next;
        setIndex(next);
        setPhase("entering");
        setTimeout(() => setPhase("stable"), ENTER_DURATION);
      }, LEAVE_DURATION);
    };

    const id = setInterval(tick, INTERVAL);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cls =
    phase === "entering" ? "verb-word entering"
    : phase === "leaving"  ? "verb-word leaving"
    : "verb-word";

  if (prefersReduced) {
    return (
      <span className="verb-mask text-agency" {...props}>
        {/* Spacer keeps the container at "construisons" width */}
        <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
          construisons
        </span>
        <span className="verb-word">construisons</span>
      </span>
    );
  }

  return (
    <span className="verb-mask text-agency" {...props}>
      {/* Invisible spacer — fixes width to the longest verb so the title never shifts */}
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        construisons
      </span>
      <span className={cls}>{VERBS[index]}</span>
    </span>
  );
}
