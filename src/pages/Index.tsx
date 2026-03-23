import { useState } from "react";
import BootSequence from "@/components/BootSequence";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import VirusShields from "@/components/VirusShields";
import HackEasterEgg from "@/components/HackEasterEgg";

const Index = () => {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <BootSequence onComplete={() => setBooted(true)} />;
  }

  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <VirusShields />
      <Navbar />
      <HackEasterEgg />
      <main className="relative z-[5] pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="relative z-[5] py-6 text-center text-xs text-muted-foreground border-t border-border">
        <p>© 2026 Sriram N | CodeName-R4M — Built with a hacker's precision</p>
      </footer>
    </div>
  );
};

export default Index;
