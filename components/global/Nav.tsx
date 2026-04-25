"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useCommandPalette } from "@/components/providers/CommandPaletteProvider";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { toggle: togglePalette } = useCommandPalette();

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    // Hysteresis: enter condensed at 140px, exit back at 60px. Avoids
    // "flickering" near the threshold on small scroll nudges.
    setCondensed((prev) => (prev ? y > 60 : y > 140));
  });

  // Esc closes the mobile menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Move focus into the menu when it opens; restore to the toggle on close.
  useEffect(() => {
    if (menuOpen) {
      firstMenuLinkRef.current?.focus();
    } else {
      // Only restore if focus was inside the menu (avoid stealing focus on initial mount).
      const active = document.activeElement;
      if (active && active.closest("#mobile-menu")) {
        menuToggleRef.current?.focus();
      }
    }
  }, [menuOpen]);

  return (
    <motion.header
      role="banner"
      className="fixed left-1/2 top-4 z-30 -translate-x-1/2"
      style={{ willChange: "width" }}
      animate={{
        width: condensed ? "min(680px, calc(100% - 24px))" : "calc(100% - 24px)",
      }}
      initial={false}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "flex items-center justify-between gap-3 rounded-full border border-border bg-surface/80 px-3 py-2 backdrop-blur-md transition-[border-color] duration-700 ease-out md:gap-6 md:px-5",
          condensed && "border-border-strong",
        )}
      >
        <a
          href="#top"
          className="hover:text-accent font-display text-base text-fg transition-colors duration-200 pl-1"
          aria-label="Home"
        >
          Pratik <span className="text-fg-muted">Wadke</span>
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="hover:text-fg font-sans text-sm text-fg-muted transition-colors duration-200"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            type="button"
            onClick={togglePalette}
            aria-label="Open command palette"
            className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[0.6875rem] text-fg-muted transition-colors duration-200 hover:border-border-strong hover:text-fg md:inline-flex cursor-pointer"
            data-cursor="⌘K"
          >
            <Command size={11} aria-hidden="true" />
            <span>K</span>
          </button>
          <ThemeToggle />
          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="border-border hover:border-fg inline-flex h-11 w-11 items-center justify-center rounded-full border text-fg transition-colors duration-200 cursor-pointer md:hidden"
          >
            {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-2 overflow-hidden rounded-2xl border border-border bg-surface/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col divide-y divide-border">
              {SECTIONS.map((s, i) => (
                <li key={s.href}>
                  <a
                    ref={i === 0 ? firstMenuLinkRef : undefined}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-5 py-4 font-display text-xl text-fg transition-colors hover:text-accent"
                  >
                    <span>{s.label}</span>
                    <span className="mono-label text-fg-muted">→</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    togglePalette();
                  }}
                  className="flex w-full items-center justify-between px-5 py-4 font-mono text-[0.75rem] uppercase tracking-widest text-fg-muted transition-colors hover:text-accent cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Command size={12} aria-hidden="true" />
                    Command palette
                  </span>
                  <span>⌘K</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
