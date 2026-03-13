"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "roll-in";
}

export const AnimatedSection = ({ children, className, delay = 0, variant = "fade-up" }: AnimatedSectionProps) => {
  const animations = {
    "fade-up": {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    "roll-in": {
      initial: { opacity: 0, y: 40, rotate: -2, scale: 0.95 },
      animate: { opacity: 1, y: 0, rotate: 0, scale: 1 },
    }
  };

  return (
    <motion.div
      initial={animations[variant].initial}
      whileInView={animations[variant].animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
