import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "$ INITIALIZING SYSTEM...",
  "$ LOADING SECURITY MODULES...",
  "$ CONNECTING TO NETWORK...",
  "$ SCANNING PORTS...",
  "$ FIREWALL ACTIVE",
  "$ ENCRYPTION ENABLED",
  "$ ACCESS GRANTED",
];

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(onComplete, 600);
      return;
    }

    const line = lines[currentLine];
    if (charIndex < line.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + line[charIndex]);
        setCharIndex(charIndex + 1);
      }, 20);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setCurrentLine(currentLine + 1);
        setCharIndex(0);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentLine, charIndex, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-lg w-full px-6">
          <pre className="neon-text-green text-sm leading-relaxed whitespace-pre-wrap">
            {displayedText}
            <span className="animate-pulse">█</span>
          </pre>
          {currentLine >= lines.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center neon-text-cyan text-lg font-bold"
            >
              PORTFOLIO LOADED
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootSequence;
