import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Fixed Left Column */}
      <Hero />

      {/* Main Content - Right Column on Desktop */}
      <main className="lg:ml-[40%] px-8 lg:px-16 lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
