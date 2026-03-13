"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "neon";
  children: React.ReactNode;
}

export const PremiumButton = ({ 
  variant = "primary", 
  className, 
  children, 
  ...props 
}: PremiumButtonProps) => {
  const variants = {
    primary: "bg-accent text-primary hover:bg-white transition-all shadow-neon-emerald",
    secondary: "bg-elite text-white hover:bg-elite/90 shadow-lg shadow-elite/20",
    outline: "bg-transparent border border-white/10 text-white hover:bg-white/5",
    neon: "glass-emerald text-accent border-accent/20 hover:border-accent/50 shadow-neon-emerald",
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "h-14 px-8 rounded-2xl font-bold flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
};
