import { Container } from "@/components/primitives/Container";
import { StaggerContainer, StaggerItem } from "@/components/primitives/MotionStagger";
import { Section } from "@/components/primitives/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { CertificationsPlaceholder } from "./CertificationsPlaceholder";
import type { Certification, Education as EducationT } from "@/lib/types";

interface EducationProps {
  education: EducationT[];
  certifications: Certification[];
}

export function Education({ education, certifications }: EducationProps) {
  return (
    <Section id="education">
      <Container>
        <SectionHeader
          id="education-heading"
          eyebrow="Education & Credentials"
          title="Where I learned and verified things."
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <StaggerContainer as="ul" stagger={0.08} className="flex flex-col gap-8">
              {education.map((e) => (
                <StaggerItem
                  as="li"
                  key={e.institution}
                  className="border-border border-b pb-8 last:border-b-0"
                >
                  <p className="mono-label tabular-nums mb-2 text-fg-muted">
                    {e.startYear} – {e.endYear}
                  </p>
                  <h3 className="font-display text-display-md text-fg">{e.institution}</h3>
                  <p className="mt-1 text-body text-fg-muted">{e.degree}</p>
                  {e.note && (
                    <p className="mt-1 font-display italic text-body text-fg">{e.note}</p>
                  )}
                  {e.location && (
                    <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-widest text-fg-muted/70">
                      {e.location}
                    </p>
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <div className="md:col-span-5">
            <CertificationsPlaceholder items={certifications} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
