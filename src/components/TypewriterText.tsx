"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterText = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const controls = animate(0, text.length, {
      duration: text.length * 0.08,
      delay: delay,
      ease: "linear",
      onUpdate: (latest) => {
        setDisplayText(text.slice(0, Math.floor(latest)));
      },
    });

    return () => controls.stop();
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-emerald-500 ml-1 align-middle"
      />
    </span>
  );
};
