import { motion } from "framer-motion";
import { ShieldCheck, Terminal } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="relative py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 glitch-hover neon-text-green"
      >
        {">"} About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-lg p-6"
        >
          <p className="text-sm text-secondary mb-4 font-semibold tracking-wide">PERSONALITY</p>
          <p className="text-foreground mb-4 text-sm leading-relaxed">
            INTJ | Always 10 steps ahead, even when silent.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🎯 Interests: CTF competitions, web exploitation, self-hosting, infrastructure setup</p>
            <p>📚 Currently learning: CCNP, advanced web exploitation</p>
            <p className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-primary" />
              <span className="neon-text-green text-xs">CCNA CERTIFIED ✅</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-lg overflow-hidden"
        >
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
            <Terminal size={12} className="text-primary" />
            <span className="text-xs text-muted-foreground">about.sh</span>
          </div>
          <div className="p-4 text-xs leading-relaxed font-mono">
            <p className="text-muted-foreground">$ cat /etc/sriram/profile</p>
            <p className="mt-2"><span className="text-secondary">name:</span> <span className="text-foreground">Sriram N</span></p>
            <p><span className="text-secondary">alias:</span> <span className="neon-text-green">CodeName-R4M</span></p>
            <p><span className="text-secondary">role:</span> <span className="text-foreground">Offensive Security Engineer</span></p>
            <p><span className="text-secondary">location:</span> <span className="text-foreground">India 🇮🇳</span></p>
            <p><span className="text-secondary">status:</span> <span className="neon-text-green">Active</span></p>
            <p className="mt-2 text-muted-foreground">$ <span className="animate-pulse">_</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
