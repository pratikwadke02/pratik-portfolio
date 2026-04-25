"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/components/providers/MotionProvider";

export function ScrollProgress() {
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.2,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-40 h-px origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
