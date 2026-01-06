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
          animate={{ translateZ: isActive ? 20 : 10 }}
          whileHover={{ translateZ: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
              text-[#4b7749]
              font-black
              uppercase
              tracking-tight
              leading-[0.9]
              text-[72px]
              md:text-[140px]
              select-none
              whitespace-nowrap
              text-center
              md:text-right
              transition-colors
              duration-300
            "
          style={{ color: isActive ? "#ffffff" : "#4b7749" }}
        >
          {text}
        </motion.h1>
      </motion.div>
    </div>
  );
}
