import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-heading`}
      className={cn(
        "scroll-mt-24 py-[clamp(4rem,12vw,8rem)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
