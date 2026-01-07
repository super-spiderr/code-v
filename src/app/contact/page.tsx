"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-vintage overflow-hidden relative">
      <motion.div
        initial={{ scale: 10, opacity: 0 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 text-white font-black text-[140px] md:text-[240px] opacity-10 uppercase tracking-tight"
      >
        CONTACT
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl flex flex-col items-center md:items-start justify-center text-white px-8 py-24"
      >
        <h1 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter uppercase">
          CONTACT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          {/* Left Column: Context */}
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-xl md:text-3xl font-bold font-courier-tight italic leading-relaxed">
                Got an idea? <br />
                Building something interesting? <br />
                Or just want to talk tech, space, or why dark mode is mandatory?
              </h2>
              <div className="pt-6">
                <span className="bg-white text-[#0a5c36] px-3 py-1 font-black uppercase text-sm tracking-widest">
                  📬 LET’S CONNECT.
                </span>
              </div>
            </section>

            <section className="space-y-6 pt-8 border-t border-white/10">
              <ul className="space-y-4 font-courier-tight text-lg opacity-80 italic">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Open to collaborations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Open to discussions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Always open to good engineering conversations
                </li>
              </ul>
              <p className="font-bold tracking-widest text-sm pt-4">
                Ping me before the next deploy 🚀
              </p>
            </section>
          </div>

          {/* Right Column: Form Interface */}
          <div className="bg-white/5 border border-white/20 p-8 rounded-2xl space-y-8 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold">
                Transmission // Source_Link
              </span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
            </div>

            <form
              className="space-y-6 font-courier-tight"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50 block">
                  Sender ID
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white placeholder:opacity-20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50 block">
                  Origin Signal
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white placeholder:opacity-20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-50 block">
                  Data Payload
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white placeholder:opacity-20 resize-none"
                />
              </div>
              <button className="w-full bg-white text-[#0a5c36] py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
                Transmit Signal
              </button>
            </form>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-16 flex justify-center md:justify-start"
        >
          <Link
            href="/"
            className="text-white/40 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
          >
            ← CANCEL TRANSMISSION
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
