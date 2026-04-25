"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ColophonProps {
  tech: SiteContent["colophonTech"];
}

export function Colophon({ tech }: ColophonProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <p className="text-body-sm text-fg-muted max-w-2xl leading-relaxed">
      Built with{" "}
      {tech.map((t, i) => (
        <span
          key={t.name}
          className="relative inline-block"
          onMouseEnter={() => setHovered(t.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <a
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("link-underline", hovered === t.name && "text-accent")}
          >
            {t.name}
          </a>
          <span
            className={cn(
              "pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-surface px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-widest text-fg-muted transition-opacity duration-200",
              hovered === t.name ? "opacity-100" : "opacity-0",
            )}
          >
            v{t.version}
          </span>
          {i < tech.length - 1 && <span className="text-fg-muted/60">{i === tech.length - 2 ? ", and " : ", "}</span>}
        </span>
      ))}
      . Deployed on the edge.
    </p>
  );
}
