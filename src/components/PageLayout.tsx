"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MobileMockup } from "./MobileMockup";
import { TypewriterText } from "./TypewriterText";
import { useSoundEffect } from "../hooks/useSoundEffect";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  iphoneImage: string;
  iphoneTitle?: string;
  iphoneSubtitle?: string;
  showMockup?: boolean;
}

export const PageLayout = ({
  children,
  title,
  subtitle,
  iphoneImage,
  iphoneTitle,
  iphoneSubtitle,
  showMockup = true,
}: PageLayoutProps) => {
  const { playSound } = useSoundEffect();

  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col md:flex-row">
      {/* Top Navigation / Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-[100]"
      >
        <Link
          href="/"
          onClick={() => playSound("CLICK", 0.4)}
          className="group flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] font-mono">
            EXIT_LEVEL
          </span>
        </Link>
      </motion.div>

      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-700/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-emerald-900/10 blur-[120px]" />
      </div>

      {/* Floating Background Section Title */}
      <motion.div
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 text-white font-black text-[60px] sm:text-[120px] md:text-[320px] uppercase tracking-tighter"
        style={{ fontFamily: "var(--font-lexend)" }}
      >
        {title}
      </motion.div>

      <main className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-start px-6 md:px-20 pt-24 pb-8 md:py-0 min-h-screen">
        {/* Floating Mockup/Image Panel */}
        <div className="z-20 md:fixed md:right-20 md:top-1/2 md:-translate-y-1/2 flex justify-center w-full md:w-auto pt-10 md:pt-0 mb-8 md:mb-0">
          {showMockup ? (
            <MobileMockup
              image={iphoneImage}
              title={iphoneTitle}
              subtitle={iphoneSubtitle}
              className="scale-[0.8] md:scale-110 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),0_0_80px_rgba(16,185,129,0.1)] transition-all duration-500 hover:scale-[0.82] md:hover:scale-[1.12] -mt-12 md:mt-0"
            />
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
            >
              <div className="absolute inset-0 bg-emerald-500/10 blur-[50px] rounded-full animate-pulse" />
              <div className="relative w-full h-full border border-white/20 rounded-[2rem] overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                <motion.img
                  src={iphoneImage}
                  alt={title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <p className="text-emerald-400 font-mono text-xs uppercase tracking-[0.4em] mb-2">
                    {iphoneTitle || "NODE_ASSET"}
                  </p>
                  <p className="text-white font-black text-2xl uppercase tracking-tighter italic">
                    {iphoneSubtitle || "PRIMARY_VIEW"}
                  </p>
                </div>
                {/* Decorative border corners */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-emerald-500/50" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-emerald-500/50" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Text Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`flex-1 max-w-5xl text-white relative py-10 md:py-20 ${showMockup ? "md:pr-[400px]" : ""}`}
        >
          {/* Section Breadcrumb */}
          <div className="mb-8 md:mb-16 flex items-center gap-6">
            <div className="w-16 h-[2px] bg-emerald-500" />
            <p className="text-xs md:text-sm font-bold font-mono text-emerald-400 uppercase tracking-[0.5em]">
              [ <TypewriterText text={subtitle} delay={0.8} /> ]
            </p>
          </div>

          <div className="relative space-y-12">
            <h1 className="text-5xl sm:text-7xl md:text-[9vw] lg:text-[10rem] font-black mb-8 md:mb-12 tracking-tighter uppercase leading-[0.8] italic font-lexend text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20 break-words w-full">
              {title}
            </h1>

            <div className="space-y-12 text-white/90">{children}</div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-20 md:pt-32 flex justify-center md:justify-start"
          >
            <Link
              href="/"
              className="group relative px-12 py-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl transition-all hover:bg-white hover:text-black font-black uppercase tracking-[0.4em] text-[10px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="group-hover:-translate-x-2 transition-transform duration-300">
                  ←
                </span>
                RETURN_TO_BASE
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* HUD Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Decorative Elements */}
      <div className="fixed top-10 right-10 md:top-20 md:right-20 z-10 pointer-events-none opacity-20">
        <div className="w-48 h-48 border border-white/10 rounded-full animate-[spin_30s_linear_infinite] border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full shadow-[0_0_30px_rgba(16,185,129,1)]" />
      </div>
    </div>
  );
};
