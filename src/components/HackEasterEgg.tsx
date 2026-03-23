import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";
import { useHacked } from "../context/HackedContext";

const HackEasterEgg = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isHacked, setIsHacked } = useHacked();

  const hackSequence = "hack";
  const fixSequence = "fix";

  useEffect(() => {
    // Add console command for "fix"
    (window as any).fix = () => {
      setIsHacked(false);
      console.log("%c[SYSTEM RECOVERY] All protocols restored. Background returning to green.", "color: #00ff88; font-weight: bold;");
      return "Recovery initiated...";
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      // Handle "hack" sequence
      const nextHackInput = (input + key).slice(-hackSequence.length);
      if (nextHackInput === hackSequence) {
        setShow(true);
        setIsHacked(true);
        startHack();
      }

      // Handle "fix" sequence
      const nextFixInput = (input + key).slice(-fixSequence.length);
      if (nextFixInput === fixSequence) {
        setIsHacked(false);
        setShow(false);
        console.log("%c[RECOVERY] System restored via keyboard shortcut.", "color: #00ff88;");
      }

      setInput((input + key).slice(-10)); // Keep a small buffer of recent keys
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      delete (window as any).fix;
    };
  }, [input, setIsHacked]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const startHack = () => {
    setLogs(["$ initializing breach...", "$ bypassing firewall..."]);
    
    const commands = [
      "connecting to backbone...",
      "exploiting buffer overflow...",
      "injecting payload...",
      "elevating privileges...",
      "accessing root...",
      "dumping database...",
      "ACCESS GRANTED",
      "--------------------------",
      "Welcome, CodeName-R4M",
      "You just triggered the HACK easter egg!",
      "--------------------------",
    ];

    commands.forEach((cmd, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, `$ ${cmd}`]);
      }, (i + 1) * 600);
    });
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="fixed bottom-10 right-10 z-[100] w-[320px] md:w-[400px] h-[300px] bg-black border border-primary rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono"
      >
        <div className="bg-muted/50 px-3 py-1.5 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-primary" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">System Hijack</span>
          </div>
          <button onClick={() => setShow(false)} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={14} />
          </button>
        </div>
        <div 
          ref={scrollRef}
          className="flex-1 p-4 overflow-y-auto text-xs space-y-1.5 scrollbar-thin scrollbar-thumb-primary/20"
        >
          {logs.map((log, i) => (
            <div key={i} className={log.includes("GRANTED") || log.includes("Welcome") ? "text-primary font-bold" : "text-muted-foreground"}>
              {log}
            </div>
          ))}
          <div className="flex items-center gap-1 text-primary">
            <span>$</span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HackEasterEgg;
