"use client";

import { motion } from "framer-motion";

interface TiltTextProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function TiltText({ text, onClick, isActive }: TiltTextProps) {
  return (
    <div className="perspective-[1900px]">
      {/* FIXED WIDTH ALIGNMENT PLANE */}

      <motion.div
        initial={{ rotateY: -50, rotateX: 0 }}
        animate={
          isActive ? { rotateY: 0, rotateX: 0 } : { rotateY: -50, rotateX: 0 }
        }
        whileHover={{ rotateY: 0, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        onClick={onClick}
        className="
            transform-style-preserve-3d
            origin-right
            cursor-pointer
          "
      >
        <motion.h1
          animate={{ translateZ: isActive ? 50 : 15 }}
          whileHover={{ translateZ: 5 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="
              text-white
              font-black
              uppercase
              tracking-tighter
              leading-[1]
              text-[80px]
              md:text-[120px]
              select-none
              whitespace-nowrap
              text-center
              md:text-right
              transition-all
              duration-500
              hover:text-transparent
              hover:[text-shadow:none]
              [text-shadow:0_20px_40px_rgba(0,0,0,0.3)]
            "
          style={{
            opacity: isActive ? 1 : 0.45,
            WebkitTextStroke: "2px white",
          }}
        >
          {text}
        </motion.h1>
      </motion.div>
    </div>
  );
}
