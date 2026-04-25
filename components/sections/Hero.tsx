"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { MaskedReveal } from "@/components/primitives/MaskedReveal";
import { StatusPill } from "@/components/primitives/StatusPill";
import type { SiteContent } from "@/lib/types";

interface HeroProps {
  person: SiteContent["person"];
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Hero({ person }: HeroProps) {
  const { scrollY } = useScroll();
  const opsz = useTransform(scrollY, [0, 200], [144, 96], { clamp: true });
  // Bind opsz directly into a style template — Framer subscribes the DOM node
  // to the motion value, so no manual setProperty per frame.
  const fontVariationSettings = useMotionTemplate`'opsz' ${opsz}, 'SOFT' 50`;

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center pt-28"
    >
      <Container>
        <motion.div
          className="flex flex-col items-start gap-8 md:gap-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          <motion.div variants={item}>
            <StatusPill>
              {person.location} · {person.availability}
            </StatusPill>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.p className="mono-label text-fg-muted" variants={item}>
              {person.role}
            </motion.p>
            <motion.h1
              className="font-display text-hero text-fg"
              style={{ fontVariationSettings }}
              aria-label={person.name}
            >
              <MaskedReveal as="span" text={person.name} delay={350} />
            </motion.h1>
          </div>

          <motion.p
            className="max-w-2xl font-display text-display-md italic text-fg-muted"
            variants={item}
          >
            &ldquo;{person.heroTagline}&rdquo;
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2"
            variants={item}
          >
            <a
              href="#about"
              className="group flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-fg-muted hover:text-fg transition-colors"
            >
              <span>Scroll</span>
              <span className="relative inline-block h-6 w-px bg-fg-muted overflow-hidden">
                <span className="absolute inset-0 bg-accent origin-top animate-[scrollHint_2s_ease-in-out_infinite]" />
              </span>
              <ArrowDown
                size={12}
                aria-hidden="true"
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>

            {/* Desktop: keyboard shortcut + typed easter egg. */}
            <p className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-fg-muted md:block">
              <span className="text-fg-muted/70">Pro tip&nbsp;·&nbsp;</span>
              Press <span className="text-accent">⌘K</span> /{" "}
              <span className="text-accent">Ctrl+K</span> for commands · or type{" "}
              <span className="text-accent">&ldquo;snowflake&rdquo;</span>
            </p>
            {/* Mobile: tap the menu to jump between sections. */}
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-fg-muted md:hidden">
              <span className="text-fg-muted/70">Tip&nbsp;·&nbsp;</span>
              Tap <span className="text-accent">☰</span> for quick jumps
            </p>
          </motion.div>
        </motion.div>
      </Container>

      <style jsx>{`
        @keyframes scrollHint {
          0% { transform: scaleY(0); transform-origin: top; }
          45% { transform: scaleY(1); transform-origin: top; }
          55% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
