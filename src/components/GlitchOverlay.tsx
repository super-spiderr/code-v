"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const GlitchOverlay = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const triggerGlitch = useCallback(() => {
    // Randomly trigger a glitch every 2-6 seconds
    const nextGlitch = Math.random() * 4000 + 2000;

    const timer = setTimeout(() => {
      setIsGlitching(true);

      // Glitch duration 200-500ms
      const duration = Math.random() * 300 + 200;
      setTimeout(() => {
        setIsGlitching(false);
      }, duration);
    }, nextGlitch);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const run = () => {
      cleanup = triggerGlitch();
    };

    // Initial run
    run();

    // Set up interval or just chain the calls
    const interval = setInterval(() => {
      if (!isGlitching) {
        run();
      }
    }, 3000);

    return () => {
      cleanup?.();
      clearInterval(interval);
    };
  }, [triggerGlitch, isGlitching]);

  return (
    <>
      <AnimatePresence mode="popLayout">
        {isGlitching && (
          <motion.div
            key="glitch-active-element"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.2, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="fixed inset-0 z-[999] pointer-events-none"
          >
            {/* Static/Noise layer */}
            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uWUicv7qfBBRB0/giphy.gif')] opacity-20 mix-blend-overlay" />

            {/* RGB Shift layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 mix-blend-screen animate-pulse" />

            {/* Displacement bars */}
            <div className="absolute top-[20%] left-0 w-full h-1 bg-white/20 blur-sm" />
            <div className="absolute top-[60%] left-0 w-full h-2 bg-emerald-500/20 blur-md" />
            <div className="absolute top-[85%] left-0 w-full h-[0.5px] bg-red-500/30 shadow-[0_0_10px_red]" />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Constant subtle scanlines - Outside AnimatePresence to avoid key issues */}
      <div className="glitch-overlay opacity-30 pointer-events-none z-[998]" />
    </>
  );
};
