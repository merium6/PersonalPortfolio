import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function BentoGrid() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
    </div>
  );
}