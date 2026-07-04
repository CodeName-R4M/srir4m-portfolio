import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Screentime Analyzer (RAW Focus)",
    desc: "Offline-first digital wellness desktop app — tracks screen time, classifies app usage, and includes a local AI chat (via Ollama) with an auto-extracting memory bank. No cloud, no telemetry, fully local.",
    stack: ["Electron", "React", "Vite", "TailwindCSS", "Ollama", "Recharts"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M/screetime-analyzer",
  },
  {
    name: "MedVault",
    desc: "Blockchain-based medical records system — securely stores patient records on-chain and allows authorized viewing via QR code scan.",
    stack: ["Blockchain", "Solidity", "Web3", "QR Code"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M/med-vault",
  },
  {
    name: "Grab-n-Eat",
    desc: "Dynamic canteen management system with admin controls, image uploads, and real-time updates.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M/Grab-n-Eat",
  },
  {
    name: "HAckademy Labs",
    desc: "Learning platform built to host cybersecurity labs and hands-on practice modules.",
    stack: ["Web App", "Labs Framework"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M/HAckademy-Labs",
  },
  {
    name: "Blockchain File Integrity Checker",
    desc: "Tool that verifies file integrity using blockchain-based hashing to detect tampering or unauthorized changes.",
    stack: ["Blockchain", "Python", "Solidity"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M/blockchain-file-integrity-checker",
  },
  {
    name: "Cypherix",
    desc: "Personal cybersecurity-themed web project for department symposium.",
    stack: ["HTML", "Express.js", "EJS"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M/cypherix.info",
  },
];

const stackColors: Record<string, string> = {
  MongoDB: "bg-primary/15 text-primary border-primary/30",
  "Express.js": "bg-secondary/15 text-secondary border-secondary/30",
  React: "bg-secondary/15 text-secondary border-secondary/30",
  "Node.js": "bg-primary/15 text-primary border-primary/30",
  HTML: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  EJS: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  CSS: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  CTF: "bg-destructive/15 text-destructive border-destructive/30",
  Security: "bg-destructive/15 text-destructive border-destructive/30",
  Electron: "bg-blue-400/15 text-blue-300 border-blue-400/30",
  Vite: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  TailwindCSS: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Ollama: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  Recharts: "bg-green-600/15 text-green-300 border-green-600/30",
  Blockchain: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  Solidity: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Web3: "bg-cyan-600/15 text-cyan-300 border-cyan-600/30",
  "QR Code": "bg-gray-500/15 text-gray-300 border-gray-500/30",
  Python: "bg-blue-600/15 text-blue-300 border-blue-600/30",
  "Web App": "bg-slate-500/15 text-slate-300 border-slate-500/30",
  "Labs Framework": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

const ProjectsSection = () => (
  <section id="projects" className="relative py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold mb-10 glitch-hover neon-text-green"
      >
        {">"} Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
            style={{ perspective: 1000 }}
            className="glass-card rounded-lg p-5 flex flex-col hover:neon-glow-green transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-foreground font-semibold text-sm">{p.name}</h3>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  p.label === "PRODUCTION"
                    ? "bg-primary/10 text-primary border-primary/30"
                    : "bg-secondary/10 text-secondary border-secondary/30"
                }`}
              >
                {p.label}
              </span>
            </div>
            <p className="text-muted-foreground text-xs mb-4 flex-1 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className={`text-[10px] px-2 py-0.5 rounded border ${stackColors[s] || "bg-muted text-muted-foreground border-border"}`}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={12} /> Code
              </a>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-secondary transition-colors"
                >
                  <ExternalLink size={12} /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
