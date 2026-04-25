"use client";

import { motion } from "framer-motion";
import { MaskedReveal } from "./MaskedReveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  id: string;
  rule?: boolean;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  id,
  rule = true,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.header
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {rule && (
        <motion.div
          className="bg-border mb-8 h-px w-full origin-left"
          aria-hidden="true"
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.8, ease: [0.2, 0.7, 0.25, 1] } },
          }}
        />
      )}
      <motion.p
        className="mono-label mb-4 text-accent"
        variants={{
          hidden: { opacity: 0, y: 6 },
          show: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.15 } },
        }}
      >
        {eyebrow}
      </motion.p>
      <MaskedReveal
        as="h2"
        id={id}
        text={title}
        autoplay={false}
        className="font-display text-display-xl text-fg"
      />
    </motion.header>
  );
}
