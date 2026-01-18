"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { MobileMockup, TypewriterText } from "../components";
import { useSoundEffect } from "../hooks/useSoundEffect";

const WORDS = ["ABOUT", "SKILLS", "WORKS", "CONTACT"];

const CONTENT: Record<string, string> = {
  WELCOME:
    "Mobile app developer fluent in React Native. I build smooth, scalable products that live at the intersection of performance and sci-fi aesthetics.",
  ABOUT:
    "Specialized in high-performance cross-platform applications, focusing on architectural integrity and smooth user experiences.",
  SKILLS:
    "Engineering robust systems with TypeScript and React Native. Expert in animation, state management, and native module integration.",
  WORKS:
    "A journey through production-grade applications that solve real-world problems for global users.",
  CONTACT:
    "Available for strategic collaborations or high-impact engineering roles. Let's build the future of mobile together.",
};

const SECTION_IMAGES: Record<string, string> = {
  WELCOME: "/assets/images/vignesh1.jpeg",
  ABOUT: "/assets/images/vignesh2.jpeg",
  SKILLS: "/assets/images/vignesh3.jpeg",
  WORKS: "/assets/images/vignesh4.jpeg",
  CONTACT: "/assets/images/vignesh1.jpeg",
};

export default function Home() {
  const [selectedWord, setSelectedWord] = useState<string>("WELCOME");
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const { playSound } = useSoundEffect();

  useEffect(() => {
    // Open menu automatically on desktop after mount to avoid cascading render
    const menuTimer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      }
    }, 100);

    const firstLoadTimer = setTimeout(() => setIsFirstLoad(false), 1000);
    return () => {
      clearTimeout(menuTimer);
      clearTimeout(firstLoadTimer);
    };
  }, []);

  const handleWordClick = (word: string) => {
    if (navigatingTo) return;
    playSound("CLICK", 0.3);
    setSelectedWord(selectedWord === word ? "WELCOME" : word);
  };

  const handleExplore = (word: string) => {
    playSound("CLICK", 0.5);
    setNavigatingTo(word);
    setTimeout(() => {
      router.push(`/${word.toLowerCase()}`);
    }, 800);
  };

  return (
    <div className="relative h-[100dvh] w-full flex flex-col md:flex-row overflow-hidden font-lexend">
      {/* Background HUD Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white/10 rounded-full animate-pulse" />
      </div>

      {/* Main Content Viewport */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-start md:justify-center p-6 md:p-20 pt-24 md:pt-20 gap-8 md:gap-24 overflow-y-auto md:overflow-hidden scrollbar-hide">
        <AnimatePresence mode="wait">
          {!navigatingTo && (
            <motion.div
              key={selectedWord}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24"
            >
              {/* Profile Mockup - Hero Element */}
              <div className="flex-shrink-0 order-first md:order-last">
                <MobileMockup
                  key={selectedWord}
                  image={SECTION_IMAGES[selectedWord]}
                  className="scale-[0.8] md:scale-105 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] -mt-12 md:mt-0"
                />
              </div>

              {/* Text Information */}
              <div className="flex-1 max-w-2xl text-center md:text-left space-y-8 md:space-y-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="text-white/40 text-sm md:text-base font-bold uppercase tracking-[0.5em] font-mono italic h-6">
                    <TypewriterText
                      key={selectedWord}
                      text={
                        selectedWord === "WELCOME"
                          ? "SYSTEM_INITIATED"
                          : `LOG_${selectedWord}`
                      }
                      delay={0.5}
                    />
                  </h2>
                  <h1 className="text-white text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] italic">
                    <span
                      className="glitch"
                      data-text={
                        selectedWord === "WELCOME" ? "CODE-V" : selectedWord
                      }
                    >
                      {selectedWord === "WELCOME" ? "CODE-V" : selectedWord}
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white text-base md:text-2xl font-bold font-courier-tight italic leading-relaxed opacity-90 max-w-xl"
                >
                  {CONTENT[selectedWord]}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button
                    onClick={() =>
                      handleExplore(
                        selectedWord === "WELCOME" ? "ABOUT" : selectedWord,
                      )
                    }
                    className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] rounded-full text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                  >
                    ACCESS_NODE <span className="text-xl">→</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => {
          playSound("CLICK", 0.4);
          setIsMenuOpen(!isMenuOpen);
        }}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[60] group flex items-center gap-4 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 px-6 py-3 rounded-full hover:bg-emerald-500/30 hover:border-emerald-400/50 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] active:scale-95"
      >
        <div className="flex flex-col gap-1.5 overflow-hidden">
          <motion.div
            animate={{ width: isMenuOpen ? 24 : 16 }}
            className="h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
          <motion.div
            animate={{ width: 24 }}
            className="h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
          <motion.div
            animate={{ width: isMenuOpen ? 16 : 24 }}
            className="h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
          />
        </div>
        <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em] font-mono hidden md:block">
          {isMenuOpen ? "CLOSE_HUD" : "ACCESS_HUD"}
        </span>
      </motion.button>

      {/* Control Panel (Side Nav) */}
      <motion.nav
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: isMenuOpen ? 0 : "100%",
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
          opacity: { duration: 0.3 },
        }}
        className="fixed md:relative z-50 right-0 top-0 w-full md:w-96 h-screen md:h-full bg-black/90 md:bg-emerald-950/20 backdrop-blur-3xl md:backdrop-blur-2xl md:border-l border-emerald-500/30 flex flex-col justify-center p-10 md:p-12 gap-4 md:gap-6 shadow-[-20px_0_80px_rgba(0,0,0,0.8),-1px_0_0_rgba(16,185,129,0.2)]"
      >
        <div className="absolute top-10 left-10 border-l border-emerald-500/20 pl-4 py-1">
          <p className="text-emerald-500/40 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] mb-1 font-bold select-none animate-pulse">
            HUD_INTERFACE_v2.5
          </p>
          <p className="text-white/20 font-mono text-[6px] uppercase tracking-[0.3em]">
            Scanning for active nodes...
          </p>
        </div>

        {WORDS.map((word) => (
          <motion.button
            key={word}
            onClick={() => {
              handleWordClick(word);
              if (window.innerWidth < 768) setIsMenuOpen(false);
            }}
            className={`group relative text-left py-4 px-0 md:py-8 transition-all duration-500 ${
              selectedWord === word
                ? "opacity-100 scale-105"
                : "opacity-60 hover:opacity-100 hover:translate-x-4"
            }`}
          >
            <div className="flex items-center gap-6">
              <span
                className={`hidden md:block w-12 h-[2px] transition-all duration-700 ${
                  selectedWord === word
                    ? "bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    : "bg-white/20"
                }`}
              />
              <div>
                <span
                  className={`font-black text-sm md:text-5xl tracking-tighter uppercase italic md:not-italic block transition-colors duration-500 ${
                    selectedWord === word
                      ? "text-emerald-400"
                      : "text-white group-hover:text-emerald-300"
                  }`}
                >
                  {word}
                </span>
                <span className="hidden md:block text-[8px] font-mono text-emerald-500/50 mt-1 tracking-[0.4em] font-bold">
                  {selectedWord === word ? "ACTIVE_STREAM" : "STANDBY_NODE"}
                </span>
              </div>
            </div>
          </motion.button>
        ))}

        <div className="absolute bottom-10 left-10">
          <div className="opacity-20 mb-4">
            <div className="flex gap-1.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-[3px] h-3 bg-emerald-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="text-white/40 font-mono text-[8px] uppercase tracking-[0.2em] font-bold">
              AUTH_LEVEL: LEVEL_4_ACCESS
            </p>
          </div>
          <button
            onClick={() => {
              playSound("CLICK", 0.3);
              sessionStorage.removeItem("codev_auth");
              globalThis.location.reload();
            }}
            className="flex items-center gap-2 text-[10px] font-mono text-red-500/80 hover:text-red-400 uppercase tracking-[0.3em] font-black transition-all group"
          >
            <span className="group-hover:translate-x-1 transition-transform underline decoration-red-500/20 underline-offset-4">
              Terminate_session
            </span>
            <span className="text-base">×</span>
          </button>
        </div>
      </motion.nav>

      {/* Transition Overlay */}
      <AnimatePresence>
        {(navigatingTo || isFirstLoad) && (
          <motion.div
            key="boot-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.h1
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 15, opacity: 0 }}
              transition={{ duration: 0.8, ease: "circInOut" }}
              className="text-white font-black text-[60px] md:text-[150px] uppercase tracking-tighter italic text-center"
            >
              <div className="flex flex-col items-center text-[0.3em] leading-[0.9]">
                {navigatingTo || (
                  <>
                    <span className="text-emerald-500/50 text-[0.4em] tracking-[0.8em] font-mono mb-2">
                      SYSTEM_BOOT
                    </span>
                    <span>Vignesh</span>
                    <span>Balasubramaniyan</span>
                  </>
                )}
              </div>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
