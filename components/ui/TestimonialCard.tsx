"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

export const TestimonialCard = ({ quote, author, role, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="p-12 rounded-[3rem] glass-dark border border-white/5 relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="size-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-10 group-hover:scale-110 transition-transform duration-500 shadow-neon-emerald ring-1 ring-accent/20">
          <Quote size={28} />
        </div>
        
        <p className="text-xl font-medium text-white/80 mb-10 leading-relaxed italic">
          "{quote}"
        </p>
        
        <div className="flex items-center gap-5">
          <div className="size-12 rounded-full bg-white/5 border border-white/10" />
          <div>
            <h4 className="font-bold text-white text-lg">{author}</h4>
            <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] leading-none">
              {role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
