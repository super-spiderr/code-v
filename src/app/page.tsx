"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { TiltText } from "../components";

const WORDS = ["ABOUT", "SKILLS", "WORKS", "CONTACT"];

const CONTENT: Record<string, string> = {
  WELCOME:
    "Welcome to Code-V. A premium digital showcase where code meets creativity. Select a category to explore.",
  ABOUT:
    "Mobile app developer fluent in React Native. I build smooth, scalable products that live at the intersection of performance and sci-fi aesthetics.",
  SKILLS:
    "React Native (my main character), TypeScript, and a whole squad of tools focused on performance and sanity.",
  WORKS:
    "A curated set of production-grade applications and experiments that survived real users and real traffic.",
  CONTACT:
    "Open for collaborations, tech talk, or why dark mode is mandatory. Ping me before the next deploy 🚀",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: -150, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Home() {
  const [selectedWord, setSelectedWord] = useState<string>("WELCOME");
  const [navigatingTo, setNavigatingTo] = useState<{
    word: string;
    y: number;
  } | null>(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWordClick = (word: string) => {
    if (navigatingTo) return;
    setSelectedWord(selectedWord === word ? "WELCOME" : word);
  };

  const handleExplore = (word: string) => {
    const element = document.getElementById(`word-${word}`);
    const y = element
      ? element.getBoundingClientRect().top -
        window.innerHeight / 2 +
        element.getBoundingClientRect().height / 2
      : 0;

    setNavigatingTo({ word, y });
    setTimeout(() => {
      router.push(`/${word.toLowerCase()}`);
    }, 800);
  };

  const getSubheading = () => {
    if (selectedWord === "ABOUT") return "Vignesh Balasubramaniyan";
    if (selectedWord === "WELCOME") return "PROJECT CODE-V";
    return selectedWord;
  };

  return (
    <div className="relative h-[100dvh] w-full bg-vintage flex flex-col md:flex-row md:justify-end overflow-hidden">
      {/* Entrance / Exit Zoom Overlay */}
      <AnimatePresence>
        {(navigatingTo || isFirstLoad) && (
          <motion.div
            key="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-transparent flex items-center justify-center pointer-events-none"
          >
            <motion.h1
              initial={
                isFirstLoad
                  ? { scale: 5, opacity: 1, y: 0 }
                  : {
                      scale: 1,
                      opacity: 1,
                      y: navigatingTo?.y || 0,
                      x: window.innerWidth > 768 ? 200 : 0,
                    }
              }
              animate={
                navigatingTo
                  ? { scale: [1, 1.2, 10], opacity: [1, 1, 0], y: 0, x: 0 }
                  : { scale: 1, opacity: 0, y: 0, x: 0 }
              }
              transition={
                {
                  duration: navigatingTo ? 0.8 : 0.6,
                  times: navigatingTo ? [0, 0.4, 1] : undefined,
                  ease: "easeInOut",
                } as any
              }
              className="text-white font-black text-[140px] md:text-[240px] uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              {navigatingTo?.word || "VB"}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start px-6 md:px-20 pointer-events-none">
        <AnimatePresence mode="wait">
          {!navigatingTo && !isFirstLoad && selectedWord && (
            <motion.div
              key={selectedWord}
              initial={{ opacity: 0, y: 30, x: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: [1, 1.01, 1],
              }}
              exit={{ opacity: 0, y: -30, x: 0 }}
              transition={{
                opacity: { duration: 0.5 },
                y: { duration: 0.5 },
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="max-w-2xl text-center md:text-left pointer-events-auto"
            >
              <h2 className="text-white text-xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-[0.2em] opacity-40">
                {getSubheading()}
              </h2>

              {selectedWord === "WELCOME" ? (
                <div className="space-y-8">
                  <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                    Welcome to <span className="italic">Project Code-V</span>
                  </h1>
                  <p className="text-white text-xl md:text-2xl font-bold font-courier-tight italic leading-relaxed opacity-90">
                    A personal mission log from a React Native engineer
                    navigating code, coffee, and the cosmos.
                  </p>
                  <div className="space-y-4 py-6 border-y border-white/10">
                    <p className="text-white text-lg md:text-xl font-medium font-courier-tight leading-relaxed">
                      This isn’t just a portfolio — it’s a{" "}
                      <span className="bg-white text-[#0a4d34] px-2">
                        control panel
                      </span>{" "}
                      of my work, ideas, and experiments. Built with clean
                      logic, smooth animations, and just enough chaos to keep
                      things interesting.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-courier-tight text-sm uppercase tracking-widest">
                    <div>
                      <span className="opacity-50 block mb-1">Status:</span>
                      <span className="font-bold">Shipping apps.</span>
                    </div>
                    <div>
                      <span className="opacity-50 block mb-1">Fuel:</span>
                      <span className="font-bold">JavaScript.</span>
                    </div>
                    <div>
                      <span className="opacity-50 block mb-1">
                        Destination:
                      </span>
                      <span className="font-bold">Scalable, performant.</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-white text-xl md:text-2xl font-bold tracking-tight leading-snug mb-12 font-courier-tight">
                    {CONTENT[selectedWord]}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      onClick={() => handleExplore(selectedWord)}
                      className="inline-block px-12 py-5 border-2 border-white text-white hover:bg-white hover:text-[#0a4d34] transition-all duration-300 font-bold uppercase tracking-widest rounded-full text-base md:text-lg cursor-pointer"
                    >
                      Explore {selectedWord}
                    </button>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll container (Categories) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={
          navigatingTo
            ? "hidden"
            : {
                opacity: 1,
                scale: [1, 1.02, 1],
                y: [0, -10, 0],
              }
        }
        transition={{
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-30 w-full md:w-auto h-full overflow-y-auto py-24 px-6 md:px-10 text-center md:text-right scrollbar-hide flex flex-col justify-center pointer-events-none"
      >
        {WORDS.map((word, index) => (
          <motion.div
            id={`word-${word}`}
            key={word}
            variants={itemVariants}
            className="pointer-events-auto"
            animate={
              navigatingTo
                ? {
                    x: 300,
                    opacity: 0,
                    transition: {
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: "easeIn",
                    },
                  }
                : ""
            }
          >
            <TiltText
              text={word}
              isActive={selectedWord === word}
              onClick={() => handleWordClick(word)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
