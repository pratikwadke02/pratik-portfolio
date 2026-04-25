"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

const ReducedMotionContext = createContext<boolean>(false);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <ReducedMotionContext.Provider value={reduced}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>
    </ReducedMotionContext.Provider>
  );
}

export function useReducedMotionSafe() {
  return useContext(ReducedMotionContext);
}
