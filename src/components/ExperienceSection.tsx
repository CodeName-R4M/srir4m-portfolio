import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI Intern",
    company: "Ziga Infotech",
    period: "March 2026",
    description: "Worked on AI-focused projects, learning core AI/ML concepts and tools.",
    skills: []
  },
  {
    title: "Software Developer Intern",
    company: "ThisAI Origin",
    period: "Dec 2025 - Present · 8 mos",
    description: "Focused on software development projects, building systems and contributing to full-stack applications.",
    skills: ["TypeORM", "Prisma ORM"]
  },
  {
    title: "Cyber Security Analyst Trainee",
    company: "VISKAMNIX Technology",
    period: "Jun 2025 - Jul 2025 · 2 mos | Chennai, Tamil Nadu, India · Hybrid",
    description: "",
    skills: ["Cybersecurity Incident Response", "Cyber Risk Management"]
  },
  {
    title: "Full Stack Developer",
    company: "PORIYALAN",
    period: "May 2024 - Jul 2024 · 3 mos | Chennai, Tamil Nadu, India · On-site",
    description: "",
    skills: ["Full-Stack Development"]
  }
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold mb-10 glitch-hover neon-text-green"
      >
        {">"} Experience
      </motion.h2>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-lg p-6 border-l-2 border-l-primary"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase size={18} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-semibold mb-1">{exp.title}</h3>
                <p className="text-secondary text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-xs mb-3">{exp.period}</p>
                {exp.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                )}
                {exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="text-[10px] px-2 py-0.5 rounded-full border bg-primary/10 text-primary border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
