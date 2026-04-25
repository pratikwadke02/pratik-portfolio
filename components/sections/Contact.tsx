"use client";

import { ArrowUpRight, Copy, Download, Mail } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import type { SiteContent } from "@/lib/types";
import { cn, copyToClipboard } from "@/lib/utils";

interface ContactProps {
  person: SiteContent["person"];
  statement: string;
}

export function Contact({ person, statement }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const onCopyEmail = async () => {
    if (await copyToClipboard(person.email)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const linkedin = person.socials.find((s) => s.label === "LinkedIn");
  const github = person.socials.find((s) => s.label === "GitHub");

  return (
    <Section id="contact" className="border-border border-t">
      <Container>
        <SectionHeader id="contact-heading" eyebrow="Contact" title="Let's talk." />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="font-display text-display-md text-fg max-w-[32ch] leading-[1.25]">
              {statement}
            </p>
            <p className="mt-6 text-body-sm text-fg-muted">
              Based in {person.location}. Currently at{" "}
              <a
                href={person.company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {person.company.name}
              </a>
              .
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${person.email}`}
                className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-sans text-[0.9375rem] font-medium text-bg hover:bg-accent-hover cursor-pointer"
                data-cursor="EMAIL →"
              >
                <Mail size={15} aria-hidden="true" />
                Send email
              </a>
              <button
                type="button"
                onClick={onCopyEmail}
                aria-label="Copy email address"
                className="btn-press inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 font-sans text-[0.9375rem] font-medium text-fg hover:border-fg cursor-pointer"
                data-cursor="COPY"
              >
                <Copy size={14} aria-hidden="true" />
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <ContactRow
                label={person.email}
                href={`mailto:${person.email}`}
                caption="email"
              />
              {person.phone && (
                <ContactRow
                  label={person.phone}
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  caption="phone"
                />
              )}
              {linkedin && (
                <ContactRow
                  label={linkedin.display ?? linkedin.href}
                  href={linkedin.href}
                  caption="linkedin"
                  external
                />
              )}
              {github && (
                <ContactRow
                  label={github.display ?? github.href}
                  href={github.href}
                  caption="github"
                  external
                />
              )}
              <a
                href={person.resumeUrl}
                download
                className="group border-border hover:border-fg flex items-center justify-between gap-3 border-t py-3 transition-colors duration-200"
                data-cursor="DOWNLOAD"
              >
                <span className="flex items-center gap-3">
                  <Download
                    size={13}
                    className="text-fg-muted group-hover:text-accent transition-colors"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-[0.9375rem] text-fg">Download resume</span>
                </span>
                <span className="mono-label text-fg-muted">resume.pdf</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ContactRow({
  label,
  href,
  caption,
  external,
}: {
  label: string;
  href: string;
  caption: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group border-border hover:border-fg flex items-center justify-between gap-3 border-t py-3 transition-colors duration-200",
      )}
    >
      <span className="flex items-center gap-3">
        <span className="mono-label text-fg-muted">{caption}</span>
        <span className="font-sans text-[0.9375rem] text-fg">{label}</span>
      </span>
      {external && (
        <ArrowUpRight
          size={13}
          className="text-fg-muted group-hover:text-accent transition-colors"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
