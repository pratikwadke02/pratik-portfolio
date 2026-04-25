import { Container } from "@/components/primitives/Container";
import { StaggerContainer, StaggerItem } from "@/components/primitives/MotionStagger";
import { Section } from "@/components/primitives/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { SkillChip } from "./SkillChip";
import type { SkillGroup } from "@/lib/types";

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader
          id="skills-heading"
          eyebrow="Skills"
          title="What I reach for."
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {groups.map((group, gi) => (
            <div key={group.category}>
              <p className="mono-label mb-5 text-accent">{group.category}</p>
              <StaggerContainer
                as="ul"
                stagger={0.03}
                delay={gi * 0.05}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <StaggerItem as="li" key={skill.name}>
                    <SkillChip skill={skill} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
