import { Container } from "@/components/primitives/Container";
import { StaggerContainer, StaggerItem } from "@/components/primitives/MotionStagger";
import { Section } from "@/components/primitives/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import type { Experience as ExperienceT } from "@/lib/types";

interface ExperienceProps {
  items: ExperienceT[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader id="experience-heading" eyebrow="Work" title="Where I've built things." />
        <StaggerContainer stagger={0.07}>
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <ExperienceItem item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
