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
          className="fixed bottom-6 right-6 z-[200] w-auto max-w-[220px]"
        >
          <div className="relative group overflow-hidden bg-black/60 backdrop-blur-xl border border-emerald-500/20 p-2 rounded-lg flex items-center gap-3 shadow-2xl">
            {/* Warning Icon */}
            <div className="relative flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
              <span className="text-emerald-400 font-bold text-[10px] animate-pulse">
                !
              </span>
            </div>

            {/* Content */}
            <div className="relative pr-2">
              <p className="text-white/40 font-mono text-[7px] uppercase tracking-wider leading-none">
                Modules under construction.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="relative w-4 h-4 rounded-full hover:bg-white/5 flex items-center justify-center text-white/20 hover:text-white/50 transition-colors text-[8px]"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
