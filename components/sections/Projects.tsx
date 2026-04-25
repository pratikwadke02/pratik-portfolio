import { Container } from "@/components/primitives/Container";
import { StaggerContainer, StaggerItem } from "@/components/primitives/MotionStagger";
import { Section } from "@/components/primitives/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";

interface ProjectsProps {
  items: Project[];
}

export function Projects({ items }: ProjectsProps) {
  const featured = items.find((p) => p.featured);
  const secondaries = items.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <Container>
        <SectionHeader
          id="projects-heading"
          eyebrow="Selected Work"
          title="Projects I've shipped."
        />
        <StaggerContainer
          stagger={0.08}
          className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8"
        >
          {featured && (
            <StaggerItem className="md:col-span-8 md:row-span-2">
              <ProjectCard project={featured} variant="featured" />
            </StaggerItem>
          )}
          {secondaries.map((p) => (
            <StaggerItem key={p.id} className="md:col-span-4">
              <ProjectCard project={p} variant="secondary" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
