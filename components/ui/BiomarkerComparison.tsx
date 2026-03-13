"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BiomarkerComparison = () => {
  const markers = [
    { label: "Insulin Sensitivity", value: 88, color: "bg-accent" },
    { label: "Metabolic rate", value: 72, color: "bg-emerald-400" },
    { label: "Cellular repair", value: 94, color: "bg-accent" },
  ];

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Live Diagnostics</h4>
        <div className="flex items-center gap-2">
          <div className="size-2 bg-accent rounded-full animate-pulse shadow-neon-emerald" />
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Syncing</span>
        </div>
      </div>

      <div className="space-y-6">
        {markers.map((marker, i) => (
          <div key={marker.label} className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{marker.label}</span>
              <span className="text-sm font-display font-black text-white">{marker.value}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${marker.value}%` }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }}
                className={cn("h-full rounded-full shadow-neon-emerald", marker.color)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-white/5 mt-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Biological Age</p>
            <p className="text-2xl font-display font-black text-white">-8.4 <span className="text-accent text-xs">Years</span></p>
          </div>
          <div className="size-16 rounded-2xl glass-emerald flex items-center justify-center">
            <div className="size-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
};
