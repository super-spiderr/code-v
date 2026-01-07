"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-vintage overflow-hidden relative">
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
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center md:items-start justify-center text-white px-8 py-24"
      >
        <h1 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter uppercase">
          ABOUT
        </h1>

        <div className="space-y-12 w-full">
          {/* Bio Section */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] opacity-50 border-b border-white/10 pb-4">
              [ PERSONA_IDENTIFIED ]
            </h2>
            <p className="text-2xl md:text-4xl font-bold font-courier-tight leading-snug">
              I’m a <span className="italic">mobile app developer</span> who
              speaks fluent{" "}
              <span className="bg-white text-[#0a5c36] px-2 uppercase">
                React Native
              </span>
              , thinks in components, and debugs faster after coffee ☕.
            </p>
            <p className="text-xl md:text-2xl font-medium font-courier-tight opacity-80 italic">
              My work lives at the intersection of performance, clean UI, and
              real-world impact.
            </p>
          </section>

          {/* Interests Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-40">
                Core Passions
              </h3>
              <ul className="space-y-3 font-courier-tight text-lg md:text-xl font-bold italic">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Feel smooth
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Scale without drama
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Don’t explode (mostly)
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-40">
                Obsessions
              </h3>
              <p className="font-courier-tight text-lg md:text-xl leading-relaxed">
                Low-key obsessed with{" "}
                <span className="underline decoration-white/30 underline-offset-4">
                  space
                </span>
                , futuristic tech, and anything that belongs in a
                <span className="italic"> sci-fi dashboard</span>.
              </p>
            </div>
          </section>

          {/* Philosophy Section */}
          <div className="pt-12">
            <div className="bg-white/5 border-l-4 border-white p-8 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 block mb-2">
                User_Philosophy // v.2.0
              </span>
              <p className="text-xl md:text-2xl font-bold font-courier-tight italic">
                &quot;Write code like future-you will read it at 2 AM.&quot;
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12 flex justify-center md:justify-start"
          >
            <Link
              href="/"
              className="text-[#0a5c36] bg-white px-10 py-4 rounded-full transition-all hover:scale-105 font-bold uppercase tracking-widest text-sm"
            >
              ← RETURN TO CONTROL PANEL
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
