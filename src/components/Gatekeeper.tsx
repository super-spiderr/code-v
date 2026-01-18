"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSoundEffect } from "../hooks/useSoundEffect";

const CLUE = "MISSION_INTEL: [ I AM THE CORE IDENTIFIER OF THIS PORTAL. ]";
const HINT = "HINT: It's the project's code name.";
const CORRECT_ANSWER = "codev";

export const Gatekeeper = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { playSound } = useSoundEffect();

  useEffect(() => {
    const authStatus = sessionStorage.getItem("codev_auth");
    setTimeout(() => {
      setIsAuthenticated(authStatus === "granted");
    }, 0);
  }, []);

  const handleDecrypt = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() === CORRECT_ANSWER) {
      playSound("CLICK", 0.5);
      sessionStorage.setItem("codev_auth", "granted");
      setIsAuthenticated(true);
    } else {
      setError(true);
      playSound("CLICK", 0.2);
      setTimeout(() => setError(false), 500);
      setInput("");
      setShowHint(true);
    }
  };

  if (isAuthenticated === null)
    return <div className="bg-black min-h-screen" />;

  if (isAuthenticated) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center font-mono overflow-hidden">
      {/* Background Matrix-like Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#10b98122_1px,transparent_1px),linear-gradient(to_bottom,#10b98122_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Scanning Line */}
      <motion.div
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-1 bg-emerald-500/20 shadow-[0_0_20px_#10b981] z-10 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-20 w-full max-w-lg p-8 mx-4"
      >
        <div
          className={`border-2 transition-colors duration-300 ${error ? "border-red-500 shadow-[0_0_50px_rgba(239,44,44,0.3)]" : "border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.2)]"} bg-black/80 backdrop-blur-xl p-8 rounded-2xl`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`w-3 h-3 rounded-full ${error ? "bg-red-500 animate-ping" : "bg-emerald-500 animate-pulse"}`}
            />
            <h2
              className={`text-xs font-black tracking-[0.5em] uppercase ${error ? "text-red-500" : "text-emerald-500"}`}
            >
              {error ? "ACCESS_REFUSED" : "CORE_ENCRYPTION_LAYER_01"}
            </h2>
          </div>

          <p className="text-white/60 text-[10px] mb-8 leading-relaxed tracking-wider italic">
            IDENTITY_VERIFICATION_REQUIRED. TO ACCESS SECTOR_V, PROVIDE THE
            DECRYPTION KEY CORRESPONDING TO THE MISSION_INTEL BELOW.
          </p>

          <div className="mb-8 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
            <p className="text-emerald-400 text-sm font-bold tracking-tight">
              {CLUE}
            </p>
          </div>

          {showHint && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/40 text-[9px] mb-8 uppercase tracking-widest text-center"
            >
              {HINT}
            </motion.p>
          )}

          <form onSubmit={handleDecrypt} className="space-y-4">
            <div className="relative">
              <input
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ENTER_KEY >>"
                className="w-full bg-emerald-500/5 border border-emerald-500/30 rounded-lg px-6 py-4 text-emerald-400 placeholder:text-emerald-900 outline-none focus:border-emerald-500 transition-all uppercase tracking-widest text-sm font-black"
                spellCheck={false}
              />
              {error && (
                <motion.div
                  animate={{ x: [-2, 2, -2, 2, 0] }}
                  className="absolute inset-0 pointer-events-none rounded-lg border-2 border-red-500/50"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-500 text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-lg hover:bg-emerald-400 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              EXECUTE_DECRYPTION
            </button>
          </form>

          <div className="mt-8 flex justify-between items-center opacity-30">
            <div className="text-[8px] tracking-tighter">SEC_LEVEL_04</div>
            <div className="text-[8px] tracking-tighter">PORT_8080_ACTIVE</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
