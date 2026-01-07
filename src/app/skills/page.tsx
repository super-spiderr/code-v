"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="min-h-screen bg-vintage overflow-hidden relative">
      <motion.div
        initial={{ scale: 10, opacity: 0 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 text-white font-black text-[140px] md:text-[240px] opacity-10 uppercase tracking-tight"
      >
        SKILLS
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl flex flex-col items-center md:items-start justify-center text-white px-8 py-24"
      >
        <h1 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter uppercase">
          SKILLS
        </h1>

        <div className="w-full space-y-16">
          {/* Frontend Section */}
          <section className="space-y-8">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] opacity-40 border-b border-white/10 pb-4">
              Frontend // Mobile
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { n: "React Native", s: "Main Character", i: "react" },
                { n: "React", i: "react" },
                { n: "TypeScript", i: "typescript" },
                { n: "JavaScript", i: "javascript" },
                { n: "Reanimated", i: "framer" },
                { n: "Zustand", i: "redux" },
                { n: "React Query", i: "reactquery" },
              ].map((skill) => (
                <motion.div
                  key={skill.n}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4 transition-colors"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${skill.i}/ffffff`}
                    alt={skill.n}
                    className="w-8 h-8 opacity-80"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{skill.n}</h3>
                    {skill.s && (
                      <p className="text-[10px] uppercase tracking-widest opacity-50 font-courier-tight">
                        {skill.s}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Grid for Native & Backend */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <section className="space-y-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] opacity-40 border-b border-white/10 pb-4">
                Native & Platform
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "iOS (Swift)", i: "swift" },
                  { n: "Android", i: "android" },
                ].map((skill) => (
                  <motion.div
                    key={skill.n}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${skill.i}/ffffff`}
                      alt={skill.n}
                      className="w-6 h-6 opacity-80"
                    />
                    <span className="font-bold">{skill.n}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] opacity-40 border-b border-white/10 pb-4">
                Backend & Tools
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "Node.js", i: "nodedotjs" },
                  { n: "MongoDB", i: "mongodb" },
                  { n: "Firebase", i: "firebase" },
                  { n: "Supabase", i: "supabase" },
                ].map((skill) => (
                  <motion.div
                    key={skill.n}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${skill.i}/ffffff`}
                      alt={skill.n}
                      className="w-5 h-5 opacity-80"
                    />
                    <span className="font-bold text-sm">{skill.n}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Dev Energy Section */}
          <section className="pt-8">
            <div className="bg-white/5 border-l-4 border-white p-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.5em] mb-6 opacity-40 italic">
                {/* System_Energy_Output */}
                SYSTEM_ENERGY_OUTPUT
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  "Clean architecture",
                  "Performance optimization",
                  "Testing (Jest)",
                  "Analytics",
                ].map((energy, idx) => (
                  <div key={energy} className="font-courier-tight">
                    <span className="text-white/30 text-[10px] block mb-1">
                      0{idx + 1}
                    </span>
                    <span className="font-bold italic text-lg">{energy}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 font-courier-tight text-white/60 italic text-center md:text-left">
              Basically: if it ships to users, I care about it.
            </p>
          </section>

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
