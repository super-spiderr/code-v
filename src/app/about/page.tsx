"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b3200] overflow-hidden relative">
      {/* Zoom-out Entry Layer */}
      <motion.div
        initial={{ scale: 10, opacity: 0 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 text-white font-black text-[140px] md:text-[240px] opacity-10 uppercase tracking-tight"
      >
        ABOUT
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white p-8"
      >
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">
          ABOUT
        </h1>
        <p className="max-w-2xl text-center text-xl md:text-2xl text-[#4b7749] font-bold mb-12">
          I am a creative developer specialized in building premium web
          experiences with smooth animations and bold designs.
        </p>
        <Link
          href="/"
          className="text-white bg-[#4b7749] px-10 py-4 rounded-full transition-all hover:scale-105 font-bold"
        >
          ← BACK TO HOME
        </Link>
      </motion.div>
    </div>
  );
}
