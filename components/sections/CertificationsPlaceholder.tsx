import type { Certification } from "@/lib/types";

interface CertificationsPlaceholderProps {
  items: Certification[];
}

export function CertificationsPlaceholder({ items }: CertificationsPlaceholderProps) {
  if (items.length === 0) {
    return (
      <aside
        aria-label="Certifications placeholder"
        className="rounded-xl border-2 border-dashed border-accent/40 p-6"
      >
        <p className="mono-label mb-3 text-accent">Certifications</p>
        <p className="font-mono text-[0.75rem] leading-relaxed text-fg-muted">
          {"// CERTIFICATIONS_PLACEHOLDER"}
          <br />
          {"// Edit lib/content.ts → certifications[] to fill this section."}
        </p>
      </aside>
    );
  }

  return (
    <aside aria-label="Certifications" className="border-border rounded-xl border p-6">
      <p className="mono-label mb-4 text-accent">Certifications</p>
      <ul className="flex flex-col gap-3">
        {items.map((c) => (
          <li key={`${c.name}-${c.year}`} className="flex items-baseline justify-between gap-4">
            <div>
              <p className="font-display text-fg">{c.name}</p>
              <p className="text-body-sm text-fg-muted">{c.issuer}</p>
            </div>
            <span className="font-mono text-[0.6875rem] tabular-nums text-fg-muted">
              {c.year}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
