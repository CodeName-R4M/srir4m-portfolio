import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Grab-n-Eat",
    desc: "Dynamic canteen management system with admin controls, image uploads, and real-time updates.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M",
  },
  {
    name: "Cypherix",
    desc: "Personal cybersecurity-themed web project with custom styling and dynamic content.",
    stack: ["HTML", "Express.js", "EJS"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M/Cypherix-using-express-js",
  },
  {
    name: "Webb",
    desc: "Internship web project showcasing front-end development skills.",
    stack: ["HTML", "CSS"],
    label: "LEARNING PROJECT",
    github: "https://github.com/CodeName-R4M",
  },
  {
    name: "MongoDB-Server",
    desc: "Backend server project with MongoDB integration for data management.",
    stack: ["JavaScript", "MongoDB"],
    label: "LEARNING PROJECT",
    github: "https://github.com/CodeName-R4M",
  },
  {
    name: "SRM CTF Questions",
    desc: "CTF challenge repository created for SRM college cybersecurity events.",
    stack: ["CTF", "Security"],
    label: "PRODUCTION",
    github: "https://github.com/CodeName-R4M",
  },
  {
    name: "Full-Stack Bootcamp",
    desc: "Full-stack web development learning archive covering modern web technologies.",
    stack: ["JavaScript", "React", "Node.js"],
    label: "LEARNING PROJECT",
    github: "https://github.com/CodeName-R4M",
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
