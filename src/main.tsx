import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Console Easter Egg
console.log(
  "%c💀 WELCOME TO THE UNDERGROUND 💀",
  "color: #00ff88; font-size: 18px; font-weight: bold; text-shadow: 0 0 10px #00ff88;"
);

console.log(
  "%c┌─────────────────────────────────────────┐\n│         CodeName-R4M :: Portfolio       │\n└─────────────────────────────────────────┘",
  "color: #00ff88; font-family: monospace;"
);

console.log(
  "%c whoami ",
  "background: #00ff88; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

console.log(
  "%cSriram N — Offensive Security Engineer\nBuilder. Breaker. Defender.",
  "color: #00bfff; font-family: monospace;"
);

console.log(
  "%c stack ",
  "background: #00bfff; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

console.log(
  "%cReact + Vite + Tailwind + Framer Motion",
  "color: #888; font-family: monospace;"
);

console.log(
  "%c flag ",
  "background: #ff4444; color: #fff; font-weight: bold; padding: 2px 6px; border-radius: 3px;"
);

console.log(
  "%cFLAG{c0ns0le_h4ck3r_f0und_r4m}",
  "color: #ff4444; font-family: monospace; font-size: 13px;"
);

console.log(
  "%c\n👀 Curious? Hire me or connect:\n  github  → github.com/CodeName-R4M\n  linkedin → linkedin.com/in/sriram-offsec\n  email   → sriramn20060126@gmail.com\n",
  "color: #888; font-family: monospace; line-height: 1.8;"
);

console.log(
  "%c⚠️  No vulnerabilities here — but props for looking.",
  "color: #f59e0b; font-style: italic;"
);

createRoot(document.getElementById("root")!).render(<App />);
