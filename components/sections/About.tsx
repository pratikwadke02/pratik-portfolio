import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import type { SiteContent } from "@/lib/types";

interface AboutProps {
  person: SiteContent["person"];
}

export function About({ person }: AboutProps) {
  return (
    <Section id="about">
      <Container>
        <SectionHeader id="about-heading" eyebrow="About" title="Building platforms, not just products." />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="mb-6 font-display text-display-md text-fg leading-[1.2]">
              {person.aboutLede}
            </p>
            <div className="flex flex-col gap-4 text-body-lg text-fg-muted max-w-[60ch]">
              {person.aboutBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 md:pt-12">
            <aside
              aria-label="Currently building"
              className="border-border bg-surface relative rounded-xl border p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 rounded-full bg-accent animate-[pulse_2.5s_ease-in-out_infinite]"
                />
                <p className="mono-label text-accent">Currently</p>
              </div>
              <p className="font-display text-display-md text-fg">{person.currentlyBuilding}</p>
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  );
}
