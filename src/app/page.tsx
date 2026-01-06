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
    "I am a creative developer specialized in building premium web experiences with smooth animations and bold designs.",
  SKILLS:
    "Next.js, React, Framer Motion, TypeScript, Tailwind CSS, and Modern UI/UX Design.",
  WORKS:
    "Showcasing a collection of high-end interfaces and interactive motion design projects.",
  CONTACT:
    "Let's collaborate on your next big project. Reach out for premium web solutions.",
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

  return (
    <div className="relative h-screen bg-[#0b3200] flex flex-col md:flex-row md:justify-end overflow-hidden">
      {/* Entrance / Exit Zoom Overlay */}
      <AnimatePresence>
        {(navigatingTo || isFirstLoad) && (
          <motion.div
            key="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0b3200] flex items-center justify-center pointer-events-none"
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
            >
              {navigatingTo?.word || "VB"}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Content Layer */}
      <div className="absolute inset-0 z-20 flex items-start md:items-center justify-center md:justify-start px-6 md:px-20 pointer-events-none pt-20 md:pt-0">
        <AnimatePresence mode="wait">
          {!navigatingTo && !isFirstLoad && selectedWord && (
            <motion.div
              key={selectedWord}
              initial={{ opacity: 0, y: 20, x: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: [1, 1.03, 1],
              }}
              exit={{ opacity: 0, y: -20, x: 0 }}
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
              <h2 className="text-[#4b7749] text-lg md:text-2xl font-bold mb-2 md:mb-4 opacity-50 uppercase tracking-widest">
                {selectedWord === "WELCOME" ? "CODE-V" : selectedWord}
              </h2>
              <p className="text-white text-2xl md:text-6xl font-black leading-tight mb-8">
                {CONTENT[selectedWord]}
              </p>

              {selectedWord !== "WELCOME" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => handleExplore(selectedWord)}
                    className="inline-block px-8 py-4 border-2 border-[#4b7749] text-[#4b7749] hover:bg-[#4b7749] hover:text-white transition-all duration-300 font-bold uppercase tracking-widest rounded-full text-sm md:text-base cursor-pointer"
                  >
                    Explore {selectedWord}
                  </button>
                </motion.div>
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
        className="relative z-30 w-full md:w-auto h-full overflow-y-auto py-24 px-6 md:px-10 text-center md:text-right scrollbar-hide flex flex-col justify-end md:justify-center pointer-events-none"
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
