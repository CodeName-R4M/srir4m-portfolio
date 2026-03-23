import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, X, Terminal } from "lucide-react";
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
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>(["Welcome to R4M-OS v1.0.0", "Type 'help' for available commands"]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case "help":
        response = "Available commands: about, skills, contact, clear, whoami";
        break;
      case "about":
        response = "Sriram N - Offensive Security Engineer & Full-Stack Developer.";
        break;
      case "skills":
        response = "Python, JS, C++, Security, Networking, React, Node.js...";
        break;
      case "contact":
        response = "Redirecting to contact section...";
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      case "whoami":
        response = "guest@r4m-portfolio";
        break;
      case "":
        break;
      default:
        response = `Command not found: ${cmd}. Type 'help' for assistance.`;
    }

    setTerminalLogs(prev => [...prev, `> ${terminalInput}`, response].filter(Boolean));
    setTerminalInput("");
  };

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
            <span className="ml-2 text-xs text-muted-foreground uppercase tracking-widest">Interactive Shell</span>
          </div>
          <div className="p-4 text-xs leading-relaxed font-mono">
            <p className="text-muted-foreground">$ whoami</p>
            <p className="neon-text-green">sriram@offsec — builder, breaker, defender</p>
            <p className="text-muted-foreground mt-2">$ nmap -sV portfolio.local</p>
            <p className="text-muted-foreground">PORT    STATE  SERVICE</p>
            <p className="neon-text-cyan">443/tcp open   https</p>
            <p className="neon-text-cyan">22/tcp  open   ssh</p>
            <p className="text-muted-foreground mt-1 cursor-pointer group" onClick={() => setShowTerminal(true)}>
              $ <span className="animate-pulse bg-primary/30 px-1 rounded group-hover:bg-primary/50 transition-colors">_</span>
              <span className="ml-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-primary italic">(Click cursor to open interactive terminal)</span>
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <div className="w-full max-w-2xl bg-black border border-primary/30 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[400px]">
              <div className="bg-muted/50 px-4 py-2 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-primary" />
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">r4m@portfolio: ~</span>
                </div>
                <button onClick={() => setShowTerminal(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-primary/20">
                {terminalLogs.map((log, i) => (
                  <div key={i} className={log.startsWith(">") ? "text-primary" : "text-muted-foreground"}>
                    {log}
                  </div>
                ))}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  <input
                    autoFocus
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-foreground"
                    spellCheck={false}
                  />
                </form>
                <div ref={terminalEndRef} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
