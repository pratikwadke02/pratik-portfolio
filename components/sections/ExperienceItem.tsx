"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { Experience } from "@/lib/types";
import { cn, formatDateRange, yearRangeShort } from "@/lib/utils";

interface ExperienceItemProps {
  item: Experience;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  const [open, setOpen] = useState(Boolean(item.isCurrent));
  const panelId = `exp-panel-${item.id}`;

  return (
    <article className="border-border border-b py-8 md:py-10">
      {/*
        ARIA APG disclosure-with-heading pattern: <h3> wraps the <button>.
        This keeps the heading in the document outline (so screen readers can
        navigate by heading) while the button itself owns aria-expanded /
        aria-controls. Button content must be phrasing-only — that's why every
        line of metadata is a <span>, not a <p>.
      */}
      <h3 className="font-display">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group grid w-full grid-cols-12 items-start gap-4 text-left md:gap-8"
        >
          <span className="col-span-12 md:col-span-3 md:text-right">
            <span className="mono-label tabular-nums block text-fg-muted">
              {yearRangeShort(item.startDate, item.endDate)}
            </span>
            <span
              aria-hidden="true"
              className="mt-1 block font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-fg-muted/70"
            >
              {formatDateRange(item.startDate, item.endDate)}
            </span>
          </span>

          <span className="col-span-12 md:col-span-9">
            <span className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-display-md text-fg leading-[1.2]">
                  {item.role}
                </span>
                <span className="mt-1 block font-sans text-body-sm font-normal text-fg-muted">
                  {item.company}
                  {item.location && (
                    <>
                      <span className="mx-2 text-fg-muted/50">·</span>
                      {item.location}
                    </>
                  )}
                  {item.isCurrent && (
                    <>
                      <span className="mx-2 text-fg-muted/50">·</span>
                      <span className="text-accent">Current</span>
                    </>
                  )}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted transition-all duration-200",
                  "group-hover:border-accent group-hover:text-accent",
                  open && "rotate-45",
                )}
              >
                <Plus size={13} />
              </span>
            </span>

            <span className="mt-3 block max-w-[60ch] font-sans text-body font-normal text-fg-muted">
              {item.outcome}
            </span>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${item.role} — ${item.company} details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-3" aria-hidden="true" />
              <div className="col-span-12 md:col-span-9">
                <motion.ul
                  className="flex flex-col gap-3 border-l border-border pl-5 max-w-[65ch]"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
                  }}
                >
                  {item.bullets.map((b) => (
                    <motion.li
                      key={b.text}
                      className="text-body text-fg"
                      variants={{
                        hidden: { opacity: 0, x: -6 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
                      }}
                    >
                      <span aria-hidden="true" className="text-accent mr-2 font-mono text-[0.6875rem]">→</span>
                      {b.text}
                    </motion.li>
                  ))}
                </motion.ul>
                {item.stack.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <li key={s} className="tech-chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
