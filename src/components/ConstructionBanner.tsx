"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const ConstructionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide after some time or just keep it persistent but toggleable
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="construction-banner"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[200] w-[80%] max-w-[280px]"
        >
          <div className="relative group overflow-hidden bg-emerald-950/40 backdrop-blur-xl border border-emerald-500/30 p-2.5 rounded-xl flex items-center gap-3 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
            {/* Animated Background Pulse */}
            <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />

            {/* Warning Icon */}
            <div className="relative flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
              <span className="text-emerald-400 font-black animate-bounce text-sm">
                !
              </span>
            </div>

            {/* Content */}
            <div className="relative flex-1">
              <p className="text-emerald-400 font-mono text-[8px] font-black uppercase tracking-[0.1em]">
                SYS_DEV: ACTIVE
              </p>
              <p className="text-white/60 font-mono text-[7px] leading-tight uppercase">
                Modules under construction.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="relative w-5 h-5 rounded hover:bg-white/10 flex items-center justify-center text-white/30 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Scanning line effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-20 bg-emerald-400/10 skew-x-[45deg] pointer-events-none"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
