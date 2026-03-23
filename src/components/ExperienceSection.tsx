import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="relative py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 glitch-hover neon-text-green"
      >
        {">"} Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-lg p-6 border-l-2 border-l-primary"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Briefcase size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-1">AI Engineer Intern</h3>
            <p className="text-secondary text-sm mb-3">ThisAI Origin</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Focused on AI-related engineering work, building intelligent systems and 
              exploring the intersection of artificial intelligence with practical applications.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
