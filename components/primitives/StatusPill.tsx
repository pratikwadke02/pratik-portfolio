import { cn } from "@/lib/utils";

interface StatusPillProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusPill({ children, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "border-border inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.6875rem] font-medium tracking-wider text-fg-muted",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="status-dot block h-2 w-2 rounded-full bg-accent"
        style={{ boxShadow: "inset 0 0 1px 0 rgba(0,0,0,0.25)" }}
      />
      {children}
    </span>
  );
}
