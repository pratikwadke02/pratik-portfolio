import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant: "featured" | "secondary";
}

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const href = project.links?.live ?? project.links?.github;

  const Card = (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200",
        "hover:border-border-strong",
        isFeatured ? "p-8 md:p-10" : "p-6 md:p-7",
      )}
    >
      <div
        className={cn(
          "grain bg-surface-muted relative mb-6 flex items-center justify-center overflow-hidden rounded-md border border-border",
          isFeatured ? "h-64 md:h-80" : "h-40",
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "monogram-bounce font-display text-accent",
            isFeatured ? "text-[11rem] leading-none" : "text-[5rem] leading-none",
          )}
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
        >
          {project.monogram ?? project.title[0]}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="mono-label text-fg-muted">
            {project.kind === "work" ? "WORK" : "PERSONAL"} · {project.year}
          </p>
          {project.role && (
            <span className="font-mono text-[0.625rem] uppercase tracking-widest text-fg-muted">
              {project.role}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "font-display text-fg",
            isFeatured ? "text-display-lg mb-4" : "text-display-md mb-3",
          )}
        >
          {project.title}
        </h3>

        <p className={cn("text-fg-muted", isFeatured ? "text-body-lg mb-6 max-w-[60ch]" : "text-body-sm mb-4")}>
          {isFeatured ? project.description[0] : project.tagline}
        </p>

        {isFeatured && project.description.length > 1 && (
          <div className="mb-6 flex flex-col gap-3 text-body-sm text-fg-muted max-w-[60ch]">
            {project.description.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        <ul className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, isFeatured ? 8 : 4).map((s) => (
            <li key={s} className="tech-chip">
              {s}
            </li>
          ))}
        </ul>

        {href && (
          <div className="mt-6 flex items-center gap-4">
            {project.links?.live && (
              <span className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-widest text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                View project <ArrowUpRight size={12} />
              </span>
            )}
            {project.links?.github && (
              <span className="text-fg-muted inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-widest opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Github size={12} /> Source
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-xl"
        data-cursor="VIEW →"
      >
        {Card}
      </a>
    );
  }

  return Card;
}
