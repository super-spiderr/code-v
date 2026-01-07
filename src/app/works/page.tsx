"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Works() {
  return (
    <div className="min-h-screen bg-vintage overflow-hidden relative">
      <motion.div
        initial={{ scale: 10, opacity: 0 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 text-white font-black text-[140px] md:text-[240px] opacity-10 uppercase tracking-tight"
      >
        WORKS
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl flex flex-col items-center md:items-start justify-center text-white px-8 py-24"
      >
        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase">
          WORKS
        </h1>
        <p className="text-xl md:text-2xl font-bold font-courier-tight italic mb-16 max-w-3xl opacity-80">
          Mission Logs from Project Code-V: A curated set of applications that
          survived real users, real traffic, and real deadlines.
        </p>

        <div className="grid grid-cols-1 gap-20 w-full">
          {[
            {
              id: "01",
              title: "Montra Connect",
              subtitle: "EV Command Center",
              stack:
                "React Native · TypeScript · Redux Toolkit · Firebase · REST APIs · Google Maps · Swift (iOS)",
              points: [
                "Real-time vehicle tracking with live map updates",
                "Battery performance insights & charging discovery",
                "iOS native speech-to-text module (Swift)",
                "Zustand + React Query for efficient state",
              ],
              why: "This app runs in the real world — tracking real vehicles, serving real businesses, and scaling without flinching.",
              status: "Deployed · Production hardened",
            },
            {
              id: "02",
              title: "iSportz",
              subtitle: "Sports Fan Engagement Platform",
              stack: "React Native · React JS",
              points: [
                "Live scores, news, and team updates",
                "Personalized sports feeds and schedules",
                "Fan-to-fan interaction & community features",
                "Performance optimizations for smoother UX",
              ],
              why: "Built for fans who don’t just watch — they react. Turned passive viewers into active participants.",
              status: "Production // Social Engine",
            },
            {
              id: "03",
              title: "Invafresh",
              subtitle: "Retail Demand Forecasting App",
              stack: "React Native",
              points: [
                "Demand forecasting workflows for merchandising",
                "Inventory visibility across processes",
                "Performance and UI friction reduction",
              ],
              metrics: "📉 25% improvement in process accuracy",
              why: "Quietly powerful. Business-critical. No unnecessary drama.",
              status: "Enterprise Operation",
            },
            {
              id: "04",
              title: "HBCU Spark",
              subtitle: "College Discovery Platform",
              stack: "React Native · React JS",
              points: [
                "Advanced search and filtering experiences",
                "Clean, accessible UI for faster discovery",
                "Performance improvements for usability",
              ],
              metrics: "📈 40% increase in user engagement",
              why: "Helping users make life decisions — no pressure 😄",
              status: "Scaling // Education Tech",
            },
            {
              id: "05",
              title: "GoRedeem",
              subtitle: "Merchant Ticket Redemption",
              stack: "Ionic 5 · AngularJS",
              points: [
                "Smooth redemption workflows",
                "Reduced processing time",
                "Merchant-friendly UI",
              ],
              metrics: "⚡ 25% faster redemption process",
              why: "Improved merchant satisfaction and operational flow.",
              status: "Active Ops",
            },
            {
              id: "06",
              title: "Espresso",
              subtitle: "Internal Data Storytelling",
              stack: "Ionic 5 · AngularJS",
              points: [
                "Simple, fast information sharing",
                "Team-based collaboration features",
                "Clean UX focused on clarity",
              ],
              metrics: "📈 30% increase in internal engagement",
              why: "Proof that good tools make good teams better.",
              status: "Internal Node",
            },
          ].map((project) => (
            <motion.section
              key={project.id}
              whileHover={{ x: 20 }}
              className="group border-l-2 border-white/10 pl-8 md:pl-16 space-y-6 relative"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-white -translate-x-1/2 rounded-full group-hover:bg-green-400 group-hover:scale-150 transition-all"></div>

              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-[0.5em] opacity-30 font-courier-tight">
                  ENTRY_FILE_{project.id}
                </span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                  {project.title}
                </h2>
                <h3 className="text-lg md:text-xl font-bold italic opacity-60 font-courier-tight">
                  {project.subtitle}
                </h3>
              </div>

              <div className="bg-white/5 p-4 rounded-lg inline-block">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest font-mono text-white/50">
                  Tech Stack:{" "}
                  <span className="text-white">{project.stack}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="space-y-2 font-courier-tight text-white/80">
                  {project.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="opacity-30 mt-1">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                  {project.metrics && (
                    <li className="pt-4">
                      <span className="bg-white text-[#0a5c36] px-2 py-1 font-black text-sm uppercase">
                        {project.metrics}
                      </span>
                    </li>
                  )}
                </ul>
                <div className="space-y-4">
                  <div className="p-4 border border-white/10 rounded-xl space-y-2">
                    <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
                      Analysis:
                    </span>
                    <p className="font-courier-tight italic text-sm md:text-base leading-relaxed">
                      {project.why}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-24 flex justify-center md:justify-start w-full"
        >
          <Link
            href="/"
            className="text-[#0a5c36] bg-white px-10 py-5 rounded-full transition-all hover:scale-105 font-bold uppercase tracking-widest text-sm"
          >
            ← RETURN TO CONTROL PANEL
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
