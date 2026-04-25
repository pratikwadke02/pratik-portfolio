import type { Metadata } from "next";
import { content } from "./content";

export const rootMetadata: Metadata = {
  metadataBase: new URL(content.seo.siteUrl),
  title: {
    default: content.seo.title,
    template: `%s · ${content.person.name}`,
  },
  description: content.seo.description,
  keywords: [
    "data engineering",
    "software developer",
    "Apollo Global Management",
    "Snowflake",
    "Azure",
    "Temporal",
    "Spring Boot",
    "Kotlin",
    "vector search",
    "AI-native data platforms",
    content.person.name,
  ],
  authors: [{ name: content.person.name, url: content.seo.siteUrl }],
  creator: content.person.name,
  openGraph: {
    type: "website",
    url: content.seo.siteUrl,
    siteName: content.person.name,
    title: content.seo.title,
    description: content.seo.description,
    images: [
      {
        url: content.seo.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${content.person.name} — ${content.person.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
    images: [content.seo.ogImagePath],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};
