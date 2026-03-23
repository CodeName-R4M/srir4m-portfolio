import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import NetworkGlobe from "./NetworkGlobe";

const roles = [
  "Offensive Security Engineer",
  "Full-Stack Developer",
  "CTF Player",
  "Network Defender",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkGlobe />
      <div className="scanline absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-sm mb-2 tracking-widest uppercase">Welcome to my terminal</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="neon-text-green glitch-hover">Sriram N</span>
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-6 tracking-wider">
            CodeName-R4M
          </p>

          <div className="h-8 mb-6">
            <span className="neon-text-cyan text-lg md:text-xl font-mono">
              {">"} {displayed}
              <span className="animate-pulse">_</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm md:text-base">
            Engineering mind with a hacker's spirit — always building, breaking, and learning
          </p>

          <div className="flex gap-4 justify-center mb-8">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded neon-glow-green text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded neon-glow-cyan text-secondary font-semibold text-sm hover:bg-secondary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 justify-center">
            {[
              { icon: Github, href: "https://github.com/CodeName-R4M", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/sriram-offsec", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sriramn20060126@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 max-w-md mx-auto glass-card rounded-lg overflow-hidden text-left"
        >
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            <span className="ml-2 text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="p-4 text-xs leading-relaxed">
            <p className="text-muted-foreground">$ whoami</p>
            <p className="neon-text-green">sriram@offsec — builder, breaker, defender</p>
            <p className="text-muted-foreground mt-2">$ nmap -sV portfolio.local</p>
            <p className="text-muted-foreground">PORT    STATE  SERVICE</p>
            <p className="neon-text-cyan">443/tcp open   https</p>
            <p className="neon-text-cyan">22/tcp  open   ssh</p>
            <p className="text-muted-foreground mt-1">$ <span className="animate-pulse">_</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
