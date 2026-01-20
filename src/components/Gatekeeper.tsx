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

  const [isKeyRevealed, setIsKeyRevealed] = useState(false);

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
    <div className="fixed inset-0 z-[1000] bg-transparent flex items-center justify-center font-mono overflow-hidden">
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
        className="relative z-20 w-full max-w-lg px-4 sm:p-8"
      >
        <div
          className={`border-2 transition-colors duration-300 ${error ? "border-red-500 shadow-[0_0_50px_rgba(239,44,44,0.3)]" : "border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.2)]"} bg-black/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl`}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${error ? "bg-red-500 animate-ping" : "bg-emerald-500 animate-pulse"}`}
            />
            <h2
              className={`text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase ${error ? "text-red-500" : "text-emerald-500"}`}
            >
              {error ? "ACCESS_REFUSED" : "CORE_ENCRYPTION_LAYER_01"}
            </h2>
          </div>

          <p className="text-white/60 text-[9px] sm:text-[10px] mb-6 sm:mb-8 leading-relaxed tracking-wider italic">
            IDENTITY_VERIFICATION_REQUIRED. TO ACCESS CODE_V, PROVIDE THE
            DECRYPTION KEY CORRESPONDING TO THE MISSION_INTEL BELOW.
          </p>

          <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
            <p className="text-emerald-400 text-xs sm:text-sm font-bold tracking-tight leading-normal">
              {CLUE}
            </p>
          </div>

          {showHint && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/40 text-[8px] sm:text-[9px] mb-6 sm:mb-8 uppercase tracking-widest text-center"
            >
              {HINT}
            </motion.p>
          )}

          <form onSubmit={handleDecrypt} className="space-y-3 sm:space-y-4">
            <div className="relative">
              <input
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ENTER_KEY >>"
                className="w-full bg-emerald-500/5 border border-emerald-500/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-emerald-400 placeholder:text-emerald-900 outline-none focus:border-emerald-500 transition-all uppercase tracking-widest text-xs sm:text-sm font-black"
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
              className="w-full py-3 sm:py-4 bg-emerald-500 text-black font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] rounded-lg hover:bg-emerald-400 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              EXECUTE_DECRYPTION
            </button>
          </form>

          {/* Blurred Decryption Key Source */}
          <div className="mt-8 flex flex-col items-center gap-2 relative">
            <span className="text-[7px] sm:text-[8px] text-white/30 tracking-widest uppercase italic pointer-events-none text-center px-4">
              Found decrypted sequence in logs:
            </span>
            <div className="relative mt-1 sm:mt-0">
              <motion.button
                type="button"
                onClick={() => {
                  setIsKeyRevealed(true);
                  playSound("CLICK", 0.3);
                }}
                className={`text-[9px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.5em] transition-all duration-1000 cursor-pointer ${
                  isKeyRevealed
                    ? "text-emerald-400 blur-0"
                    : "text-emerald-500/20 blur-[3px] hover:blur-[1px] hover:text-emerald-500/40"
                }`}
              >
                {CORRECT_ANSWER.toUpperCase()}
              </motion.button>

              {!isKeyRevealed && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: [0, -4, 0],
                    scale: 1,
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.5 },
                  }}
                  onClick={() => {
                    setIsKeyRevealed(true);
                    playSound("CLICK", 0.3);
                  }}
                  className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-500 text-black text-[7px] sm:text-[8px] font-bold rounded-md whitespace-nowrap shadow-[0_0_15px_rgba(16,185,129,0.5)] z-30 cursor-pointer active:scale-95 transition-transform"
                >
                  <div className="relative">
                    CLICK TO REVEAL KEY
                    <div className="absolute -bottom-1.5 sm:-bottom-2 w-0 h-0 border-l-[3px] sm:border-l-[4px] border-l-transparent border-r-[3px] sm:border-r-[4px] border-r-transparent border-t-[3px] sm:border-t-[4px] border-t-emerald-500 left-1/2 -translate-x-1/2" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex justify-between items-center opacity-30 px-1">
            <div className="text-[7px] sm:text-[8px] tracking-tighter">
              SEC_LEVEL_04
            </div>
            <div className="text-[7px] sm:text-[8px] tracking-tighter">
              PORT_8080_ACTIVE
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
