"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/components/providers/MotionProvider";

const TRIGGER = "snowflake";

export function SnowflakeEasterEgg() {
  const reduced = useReducedMotionSafe();
  const [flakes, setFlakes] = useState<Array<{ id: number; x: number; size: number; delay: number }>>([]);
  const bufferRef = useRef("");
  const idRef = useRef(0);

  useEffect(() => {
    if (reduced) return;

    const onKey = (e: KeyboardEvent) => {
      const active = document.activeElement as HTMLElement | null;
      if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
        return;
      }
      if (e.key.length !== 1) return;
      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-TRIGGER.length);
      if (bufferRef.current === TRIGGER) {
        bufferRef.current = "";
        const count = 18;
        const batch = Array.from({ length: count }, () => ({
          id: idRef.current++,
          x: Math.random() * 100,
          size: 14 + Math.random() * 18,
          delay: Math.random() * 0.6,
        }));
        setFlakes(batch);
        setTimeout(() => setFlakes([]), 3200);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reduced]);

  if (flakes.length === 0) return null;

  return (
    <>
      {flakes.map((f) => (
        <svg
          key={f.id}
          className="snowflake"
          style={{ left: `${f.x}vw`, animationDelay: `${f.delay}s` }}
          width={f.size}
          height={f.size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07l14.14-14.14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </>
  );
}
