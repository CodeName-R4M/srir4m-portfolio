import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const secretTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (logoClicks === 5) {
      setShowSecret(true);
      setLogoClicks(0);
      if (secretTimeout.current) clearTimeout(secretTimeout.current);
      secretTimeout.current = setTimeout(() => setShowSecret(false), 5000);
    }
  }, [logoClicks]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjusted to detect section when it's mostly in view
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const navItem = navItems.find((item) => item.toLowerCase() === id);
          if (navItem) {
            setActive(navItem);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (secretTimeout.current) clearTimeout(secretTimeout.current);
    };
  }, []);

  const handleClick = (item: string) => {
    setActive(item);
    const el = document.getElementById(item.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center overflow-hidden pointer-events-none"
          >
            <div className="absolute inset-0 glitch-bg opacity-20" />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1.2, 1],
                opacity: 1,
                x: [0, -10, 10, -5, 5, 0],
              }}
              transition={{ duration: 0.5 }}
              className="text-primary font-mono text-2xl md:text-4xl font-bold text-center px-4"
            >
              <span className="block mb-4 neon-text-green">{">"} ACCESS GRANTED</span>
              <span className="text-secondary text-lg md:text-xl">// you found me.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-navbar" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLogoClicks(prev => prev + 1)}
            title="System Status: Stable (Click for diagnostic)"
            className="neon-text-green font-bold text-lg tracking-wider cursor-pointer select-none"
          >
            {"<R4M />"}
          </motion.span>
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`relative px-3 py-1.5 text-sm transition-colors ${
                  active === item
                    ? "neon-text-green"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {active === item && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
