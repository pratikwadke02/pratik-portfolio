import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/global/Nav";
import { ScrollProgress } from "@/components/global/ScrollProgress";
import { MarqueeTicker } from "@/components/global/MarqueeTicker";
import { content } from "@/lib/content";

const Cursor = dynamic(() => import("@/components/global/Cursor").then((m) => m.Cursor), {
  ssr: false,
});

const SnowflakeEasterEgg = dynamic(
  () => import("@/components/global/SnowflakeEasterEgg").then((m) => m.SnowflakeEasterEgg),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <Cursor />
      <SnowflakeEasterEgg />

      <main id="main">
        <Hero person={content.person} />
        <MarqueeTicker keywords={content.marqueeKeywords} />
        <About person={content.person} />
        <Experience items={content.experience} />
        <Projects items={content.projects} />
        <Skills groups={content.skills} />
        <Education education={content.education} certifications={content.certifications} />
        <Contact person={content.person} statement={content.contactStatement} />
      </main>

      <Footer person={content.person} colophonTech={content.colophonTech} />
    </>
  );
}
