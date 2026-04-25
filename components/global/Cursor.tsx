"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotionSafe } from "@/components/providers/MotionProvider";

export function Cursor() {
  const reduced = useReducedMotionSafe();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 500, mass: 0.2 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    const fineMq = window.matchMedia("(pointer: fine)");
    const wideMq = window.matchMedia("(min-width: 1024px)");
    const compute = () => setEnabled(fineMq.matches && wideMq.matches);
    compute();
    fineMq.addEventListener("change", compute);
    wideMq.addEventListener("change", compute);
    return () => {
      fineMq.removeEventListener("change", compute);
      wideMq.removeEventListener("change", compute);
    };
  }, []);

  useEffect(() => {
    if (!enabled || reduced) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("[data-cursor]");
      if (interactive) {
        setLabel(interactive.getAttribute("data-cursor"));
      } else {
        setLabel(null);
      }
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, reduced, x, y, visible]);

  if (!enabled || reduced) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[55] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
      />
      {label && (
        <motion.div
          aria-hidden="true"
          className="cursor-pill pointer-events-none fixed left-0 top-0 z-[55] -translate-x-1/2 translate-y-6 rounded-full border border-white bg-black px-3 py-1 font-mono text-[0.625rem] uppercase tracking-widest text-white"
          style={{ x: sx, y: sy }}
        >
          {label}
        </motion.div>
      )}
    </>
  );
}
