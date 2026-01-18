"use client";

import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export const Marquee = ({
  text,
  speed = 20,
  className = "",
  reverse = false,
}: MarqueeProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        <span className="flex shrink-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`marquee-item-${i}`} className="mx-4">
              {text}
            </span>
          ))}
        </span>
      </motion.div>
    </div>
  );
};
