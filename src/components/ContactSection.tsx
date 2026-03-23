import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "918015916569"; // User's WhatsApp number (inferred or placeholder - using common India prefix based on previous context)
    const text = `*New Portfolio Message*%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold mb-10 glitch-hover neon-text-green"
        >
          {">"} Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card rounded-lg p-6"
          >
            <p className="text-foreground text-sm mb-6">Let's connect and build something amazing.</p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "sriramn20060126@gmail.com", href: "mailto:sriramn20060126@gmail.com" },
                { icon: Github, label: "github.com/CodeName-R4M", href: "https://github.com/CodeName-R4M" },
                { icon: Linkedin, label: "linkedin.com/in/sriram-offsec", href: "https://linkedin.com/in/sriram-offsec" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-lg p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/30 border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted/30 border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/30 border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded neon-glow-green text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              <Send size={14} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
