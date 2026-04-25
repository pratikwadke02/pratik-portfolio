export type SkillCategory =
  | "CURRENTLY WORKING WITH"
  | "EXPLORING"
  | "PRIOR EXPERIENCE";

export type SkillProvenance = "apollo" | "side-projects" | "academic" | "self-taught";

export interface Skill {
  name: string;
  provenance: SkillProvenance;
  note?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  outcome: string;
  bullets: ExperienceBullet[];
  stack: string[];
  isCurrent?: boolean;
}

export type ProjectKind = "work" | "personal";

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  id: string;
  kind: ProjectKind;
  title: string;
  tagline: string;
  description: string[];
  stack: string[];
  year: string;
  role?: string;
  featured: boolean;
  links?: ProjectLinks;
  monogram?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  note?: string;
  location?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface SocialLink {
  label: "LinkedIn" | "GitHub" | "Email" | "Resume";
  href: string;
  display?: string;
}

export interface SiteContent {
  person: {
    name: string;
    role: string;
    company: { name: string; href?: string };
    location: string;
    availability: string;
    heroTagline: string;
    aboutLede: string;
    aboutBody: string[];
    currentlyBuilding: string;
    email: string;
    phone?: string;
    socials: SocialLink[];
    resumeUrl: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  marqueeKeywords: string[];
  colophonTech: Array<{ name: string; version: string; url?: string }>;
  contactStatement: string;
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    ogImagePath: string;
  };
}
