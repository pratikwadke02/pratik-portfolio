import { Container } from "@/components/primitives/Container";
import type { SiteContent } from "@/lib/types";
import { Colophon } from "./Colophon";

interface FooterProps {
  person: SiteContent["person"];
  colophonTech: SiteContent["colophonTech"];
}

export function Footer({ person, colophonTech }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border border-t py-12">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-display-md text-fg">{person.name}</p>
              <p className="mt-1 mono-label text-fg-muted">{person.role}</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-5">
              {person.socials.map((s) => {
                const isExternal = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="hover:text-accent mono-label text-fg-muted transition-colors"
                  >
                    {s.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <Colophon tech={colophonTech} />

          <div className="border-border flex items-center border-t pt-6">
            <p className="mono-label text-fg-muted">© {year} · {person.name}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
