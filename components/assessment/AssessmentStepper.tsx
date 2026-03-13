"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AssessmentStepper = () => {
  const { step } = useAssessmentStore();
  const totalSteps = 4;

  return (
    <div className="w-full max-w-lg mx-auto mb-20 relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="size-8 rounded-lg glass-emerald flex items-center justify-center text-accent text-[10px] font-black shadow-neon-emerald">
            0{step}
          </div>
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
            Diagnostic Stage
          </span>
        </div>
        <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] animate-pulse">
          {Math.round((step / totalSteps) * 100)}% Synchronized
        </span>
      </div>
      
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(step / totalSteps) * 100}%` }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="h-full bg-accent shadow-neon-emerald"
        />
      </div>

      <div className="flex justify-between mt-6">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={cn(
              "h-1 w-12 rounded-full transition-all duration-700",
              s <= step ? "bg-accent shadow-neon-emerald" : "bg-white/10"
            )}
          />
        ))}
      </div>
    </div>
  );
};
