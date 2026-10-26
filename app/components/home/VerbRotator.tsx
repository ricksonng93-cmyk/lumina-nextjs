"use client";
import { useEffect, useRef, useState } from "react";

const VERBS = ["auditons", "concevons", "construisons", "maintenons"];
const INTERVAL = 2800;
const LEAVE_DURATION = 400;
const ENTER_DURATION = 450;

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
      // Phase leaving
      setPhase("leaving");

      setTimeout(() => {
        // Update verb
        const next = (indexRef.current + 1) % VERBS.length;
        indexRef.current = next;
        setIndex(next);
        setPhase("entering");

        setTimeout(() => {
          setPhase("stable");
        }, ENTER_DURATION);
      }, LEAVE_DURATION);
    };

    const id = setInterval(tick, INTERVAL);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (prefersReduced) {
    return (
      <span className="verb-mask text-agency" {...props}>
        <span className="verb-word">construisons</span>
      </span>
    );
  }

  const cls =
    phase === "entering"
      ? "verb-word entering"
      : phase === "leaving"
      ? "verb-word leaving"
      : "verb-word";

  return (
    <span className="verb-mask text-agency" {...props}>
      <span className={cls}>
        {VERBS[index]}
      </span>
    </span>
  );
}
