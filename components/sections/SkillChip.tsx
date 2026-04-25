"use client";

import { useId, useState } from "react";
import type { Skill } from "@/lib/types";

const PROVENANCE_LABELS: Record<Skill["provenance"], string> = {
  apollo: "Used at Apollo",
  "side-projects": "Side projects",
  academic: "Academic",
  "self-taught": "Self-taught",
};

interface SkillChipProps {
  skill: Skill;
}

export function SkillChip({ skill }: SkillChipProps) {
  const [hovered, setHovered] = useState(false);
  const tipId = useId();
  const label = skill.note ?? PROVENANCE_LABELS[skill.provenance];

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        aria-describedby={hovered ? tipId : undefined}
        className="tech-chip cursor-default"
      >
        {skill.name}
      </span>
      {hovered && (
        <span
          id={tipId}
          role="tooltip"
          className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-widest text-fg-muted shadow-sm"
        >
          {label}
        </span>
      )}
    </span>
  );
}
