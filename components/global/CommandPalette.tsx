"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Download,
  FileText,
  Github,
  Home,
  Layers,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  Sun,
  User,
} from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { content } from "@/lib/content";
import { copyToClipboard } from "@/lib/utils";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const { theme, toggle } = useTheme();
  const triggerRef = useRef<HTMLElement | null>(null);
  const wasOpen = useRef(open);

  useEffect(() => {
    // Capture the previously-focused element on the *transition* into open,
    // before cmdk autofocuses its input. Restore focus on close.
    if (open && !wasOpen.current) {
      triggerRef.current = document.activeElement as HTMLElement;
    } else if (!open && wasOpen.current) {
      triggerRef.current?.focus?.();
    }
    wasOpen.current = open;
  }, [open]);

  const linkedin = content.person.socials.find((s) => s.label === "LinkedIn");
  const github = content.person.socials.find((s) => s.label === "GitHub");

  const run = useCallback(
    (fn: () => unknown) => () => {
      void Promise.resolve(fn()).finally(() => onOpenChange(false));
    },
    [onOpenChange],
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[18vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 w-full max-w-[640px]"
          >
            <Command label="Command palette">
              <Command.Input placeholder="Search sections, actions, links…" autoFocus />
              <Command.List>
                <Command.Empty>No results.</Command.Empty>

                <Command.Group heading="Jump to">
                  <Command.Item onSelect={run(() => scrollToSection("top"))}>
                    <Home size={15} /> Home
                  </Command.Item>
                  <Command.Item onSelect={run(() => scrollToSection("about"))}>
                    <User size={15} /> About
                  </Command.Item>
                  <Command.Item onSelect={run(() => scrollToSection("experience"))}>
                    <Layers size={15} /> Work
                  </Command.Item>
                  <Command.Item onSelect={run(() => scrollToSection("projects"))}>
                    <Sparkles size={15} /> Projects
                  </Command.Item>
                  <Command.Item onSelect={run(() => scrollToSection("skills"))}>
                    <Layers size={15} /> Skills
                  </Command.Item>
                  <Command.Item onSelect={run(() => scrollToSection("contact"))}>
                    <Mail size={15} /> Contact
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Actions">
                  <Command.Item onSelect={run(() => copyToClipboard(content.person.email))}>
                    <Copy size={15} /> Copy email
                  </Command.Item>
                  <Command.Item onSelect={run(() => window.open(content.person.resumeUrl, "_blank", "noopener"))}>
                    <Download size={15} /> Download resume
                  </Command.Item>
                  <Command.Item onSelect={run(toggle)}>
                    {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                    Toggle {theme === "dark" ? "light" : "dark"} theme
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Links">
                  {linkedin && (
                    <Command.Item onSelect={run(() => window.open(linkedin.href, "_blank", "noopener,noreferrer"))}>
                      <Linkedin size={15} /> Open LinkedIn <ArrowUpRight size={13} className="ml-auto" />
                    </Command.Item>
                  )}
                  {github && (
                    <Command.Item onSelect={run(() => window.open(github.href, "_blank", "noopener,noreferrer"))}>
                      <Github size={15} /> Open GitHub <ArrowUpRight size={13} className="ml-auto" />
                    </Command.Item>
                  )}
                  <Command.Item onSelect={run(() => window.open(content.person.resumeUrl, "_blank", "noopener"))}>
                    <FileText size={15} /> View resume <ArrowUpRight size={13} className="ml-auto" />
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
