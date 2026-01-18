"use client";

import { motion } from "framer-motion";
import { PageLayout } from "../../components";

export default function Skills() {
  const stack = [
    { n: "React Native", s: "Primary", i: "react" },
    { n: "TypeScript", s: "Core", i: "typescript" },
    { n: "framer-motion", s: "Anim", i: "framer" },
    { n: "Node.js", s: "Backend", i: "nodedotjs" },
    { n: "Swift", s: "Native", i: "swift" },
    { n: "Zustand", s: "State", i: "redux" },
  ];

  return (
    <PageLayout
      title="SKILLS"
      subtitle="SYSTEM_COMPONENTS"
      iphoneImage="/assets/images/vignesh3.jpeg"
      iphoneTitle="TECH_SPEC"
      iphoneSubtitle="Runtime // Performance"
      showMockup={false}
    >
      <div className="space-y-16 font-courier-tight">
        <section className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map((skill, idx) => (
              <motion.div
                key={skill.n}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm group transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <img
                    src={`https://cdn.simpleicons.org/${skill.i}/ffffff`}
                    alt={skill.n}
                    className="w-10 h-10 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[10px] font-mono opacity-30">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-black text-2xl mb-1 uppercase tracking-tighter">
                  {skill.n}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-bold">
                  {skill.s}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
          <div className="bg-emerald-950/30 border border-emerald-500/30 p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all" />
            <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-[0.5em] mb-8 font-mono">
              ENGINEERING_DATA
            </h3>
            <div className="space-y-6">
              {[
                "Micro-interactions & Animations",
                "Scalable Mobile Architecture",
                "Native Module Bridging",
                "Performance Benchmarking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-lg md:text-xl font-bold italic text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-white/40 text-xs font-bold uppercase tracking-[0.4em]">
              STATUS_MONITOR
            </h3>
            <p className="text-2xl font-bold leading-relaxed italic">
              Currently optimized for <br />
              <span className="text-emerald-400 underline decoration-white/20 underline-offset-8">
                Production Stability
              </span>{" "}
              <br />
              and <span className="text-white">Seamless UX</span>.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
