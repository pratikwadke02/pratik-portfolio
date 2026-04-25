import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-container px-[clamp(1.5rem,4vw,4rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
