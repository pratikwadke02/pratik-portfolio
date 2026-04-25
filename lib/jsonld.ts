import { content } from "./content";

export function buildPersonJsonLd() {
  const sameAs = content.person.socials
    .filter((s) => s.label === "LinkedIn" || s.label === "GitHub")
    .map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.person.name,
    jobTitle: "Software Developer, Data Engineering",
    worksFor: {
      "@type": "Organization",
      name: content.person.company.name,
      url: content.person.company.href,
    },
    url: content.seo.siteUrl,
    email: `mailto:${content.person.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: content.person.location,
      addressCountry: "IN",
    },
    sameAs,
  };
}
