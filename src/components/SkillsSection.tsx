import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const categories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "C++", "Java", "PHP", "Bash/Shell", "Solidity"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Express.js", "Flask", "Django", "Bootstrap", "Socket.io"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Security / Networking",
    skills: [
      { name: "CCNA", certified: true },
      { name: "CCNP", inProgress: true },
      "Web Exploitation",
      "Wireshark",
      "Nmap",
      "Linux",
    ],
  },
  {
    title: "Tools & Other",
    skills: ["OpenCV", "NumPy", "Matplotlib", "Git", "GitHub Actions", "Nginx", "JWT", "Figma", "Self-hosting"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="relative py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 glitch-hover neon-text-green"
      >
        {">"} Skills
      </motion.h2>

      <div className="space-y-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.05 }}
            className="glass-card rounded-lg p-5"
          >
            <p className="text-xs text-secondary font-semibold tracking-widest mb-3 uppercase">{cat.title}</p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const name = typeof skill === "string" ? skill : skill.name;
                const certified = typeof skill !== "string" && "certified" in skill;
                const inProgress = typeof skill !== "string" && "inProgress" in skill;

                return (
                  <motion.span
                    key={name}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,255,136,0.3)" }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border transition-all ${
                      certified
                        ? "border-primary/50 text-primary bg-primary/10"
                        : "border-border text-foreground bg-muted/30 hover:border-primary/30"
                    }`}
                  >
                    {certified && <ShieldCheck size={12} />}
                    {name}
                    {certified && (
                      <span className="ml-1 text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">
                        CERTIFIED
                      </span>
                    )}
                    {inProgress && (
                      <span className="ml-1 text-[10px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded-full">
                        IN PROGRESS
                      </span>
                    )}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
