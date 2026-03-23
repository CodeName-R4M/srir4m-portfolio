import { motion } from "framer-motion";
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useHacked } from "../context/HackedContext";

const shields = [
  { id: 1, type: "safe", label: "Firewall Active", hackedLabel: "FIREWALL BREACHED", top: "15%", left: "5%", delay: 0 },
  { id: 2, type: "threat", label: "XSS Blocked", hackedLabel: "XSS PAYLOAD RUNNING", top: "25%", right: "8%", delay: 1 },
  { id: 3, type: "safe", label: "Threat Neutralized", hackedLabel: "ROOT EXPLOITED", top: "55%", left: "3%", delay: 2 },
  { id: 4, type: "threat", label: "SQL Injection Blocked", hackedLabel: "SQL INJECTION SUCCESS", top: "70%", right: "5%", delay: 0.5 },
  { id: 5, type: "safe", label: "Encryption Active", hackedLabel: "ENCRYPTION CRACKED", top: "40%", right: "2%", delay: 1.5 },
  { id: 6, type: "safe", label: "Port Secured", hackedLabel: "BACKDOOR OPENED", top: "85%", left: "7%", delay: 3 },
];

const VirusShields = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { isHacked } = useHacked();

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {shields.map((s) => {
        const isActuallySafe = s.type === "safe" && !isHacked;
        const Icon = isActuallySafe ? ShieldCheck : ShieldAlert;
        const style: React.CSSProperties = { top: s.top };
        if ("left" in s) style.left = s.left;
        if ("right" in s) style.right = s.right;

        const label = isHacked ? s.hackedLabel : s.label;

        return (
          <motion.div
            key={s.id}
            className={`absolute pointer-events-auto cursor-default ${
              isActuallySafe ? "threat-pulse-green" : "threat-pulse-red"
            }`}
            style={style}
            animate={{ y: [0, -8, 0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
            onMouseEnter={() => setHoveredId(s.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative p-2 rounded-lg">
              <Icon
                size={24}
                className={isActuallySafe ? "text-primary opacity-30" : "text-destructive opacity-50 shadow-[0_0_10px_rgba(255,0,0,0.5)]"}
              />
              {hoveredId === s.id && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 glass-card rounded text-xs whitespace-nowrap ${
                    isActuallySafe ? "neon-text-green" : "text-destructive font-bold animate-pulse"
                  }`}
                >
                  {label}
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default VirusShields;
