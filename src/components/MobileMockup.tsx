"use client";

import { motion } from "framer-motion";

interface MobileMockupProps {
  image?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const MobileMockup = ({
  image,
  className = "",
  title = "Vignesh",
  subtitle = "Mobile Engineer",
}: MobileMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -10, y: 20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      className={`relative w-[230px] h-[480px] md:w-[320px] md:h-[650px] bg-neutral-900 rounded-[3rem] p-2.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] border-[6px] border-neutral-800 ${className}`}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center overflow-hidden">
        <div className="w-2.5 h-2.5 bg-[#1a1a1a] rounded-full absolute left-4 shadow-inner" />
        <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full absolute right-4 shadow-inner" />
      </div>

      {/* Screen */}
      <div className="relative w-full h-full bg-[#050505] rounded-[2.8rem] overflow-hidden border border-white/5">
        {/* Profile Content */}
        <div className="relative w-full h-full group">
          {image ? (
            <motion.img
              key={image}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={image}
              alt="Profile"
              className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-white/5 mb-6 animate-pulse border border-white/10" />
              <div className="w-40 h-3 bg-white/10 rounded-full mb-3" />
              <div className="w-28 h-2 bg-white/5 rounded-full" />
            </div>
          )}

          {/* Interface Overlay - Premium Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />

          {/* Status Bar */}
          <div className="absolute top-5 w-full px-10 flex justify-between items-center text-[11px] text-white/50 font-bold tracking-tight pointer-events-none">
            <span>9:41</span>
            <div className="flex gap-2 items-center">
              <div className="flex gap-0.5 items-end h-3">
                <div className="w-[3px] h-1.5 bg-white/60 rounded-full" />
                <div className="w-[3px] h-2 bg-white/60 rounded-full" />
                <div className="w-[3px] h-2.5 bg-white/60 rounded-full" />
                <div className="w-[3px] h-3 bg-white/20 rounded-full" />
              </div>
              <div className="w-6 h-3 border border-white/30 rounded-[3px] p-[1.5px] flex items-center">
                <div className="h-full bg-emerald-500 w-[70%] rounded-[1px] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>
            </div>
          </div>

          {/* Profile Name Overlay (Sci-fi styled) */}
          <div className="absolute bottom-10 left-0 right-0 px-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-3xl font-black tracking-tighter uppercase leading-tight mb-0.5 drop-shadow-lg">
                  {title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  <p className="text-[10px] font-mono text-emerald-400/90 uppercase tracking-[0.25em] font-bold">
                    {subtitle}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-[1px] flex-1 bg-white/10" />
                <div className="h-[1px] w-12 bg-emerald-500/50" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Glossy Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
      </div>

      {/* Hardware Buttons - More realistic */}
      <div className="absolute -left-[7px] top-32 w-[3px] h-10 bg-neutral-800 rounded-l shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
      <div className="absolute -left-[7px] top-48 w-[3px] h-16 bg-neutral-800 rounded-l shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
      <div className="absolute -left-[7px] top-66 w-[3px] h-16 bg-neutral-800 rounded-l shadow-[-2px_0_4px_rgba(0,0,0,0.5)]" />
      <div className="absolute -right-[7px] top-44 w-[4px] h-24 bg-neutral-800 rounded-r shadow-[2px_0_4px_rgba(0,0,0,0.5)]" />
    </motion.div>
  );
};
