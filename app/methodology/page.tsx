"use client";

import React, { useEffect, useRef } from "react";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { GlassFooter } from "@/components/layout/GlassFooter";
import { 
  Activity, 
  Microscope, 
  ShieldCheck, 
  Utensils, 
  Moon,
  Zap,
  ArrowRight
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    title: "Precision Nutrition",
    desc: "Targeted therapeutic protocols using biological data to silence systemic inflammation.",
    icon: <Utensils size={32} />,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-900/20"
  },
  {
    title: "Metabolic Monitoring",
    desc: "Real-time tracking of glucose, insulin sensitivity, and oxidative stress biomarkers.",
    icon: <Activity size={32} />,
    color: "bg-accent",
    shadow: "shadow-neon-emerald"
  },
  {
    title: "Circadian Syncing",
    desc: "Optimizing cortisol and melatonin cycles to restore cellular repair mechanisms.",
    icon: <Moon size={32} />,
    color: "bg-indigo-500",
    shadow: "shadow-indigo-900/20"
  },
  {
    title: "Genetic Signaling",
    desc: "Using lifestyle intervention to influence gene expression and silence disease triggers.",
    icon: <Zap size={32} />,
    color: "bg-elite",
    shadow: "shadow-elite/20"
  }
];

const STEPS = [
  {
    num: "01",
    title: "The Evaluation",
    desc: "Deep biomarker diagnostic involving 80+ markers to map your metabolic landscape.",
    details: ["Nutrient Panel", "Toxic Load", "Hormonal Panel"]
  },
  {
    num: "02",
    title: "The Transformation",
    desc: "90-day intensive involving clinical nutrition, daily monitoring and medical oversight.",
    details: ["1:1 Consults", "Clinical Support", "Protocol Updates"]
  },
  {
    num: "03",
    title: "The Autonomy",
    desc: "Transitioning to a maintenance framework that keeps you in the reversal zone for life.",
    details: ["Exit Labs", "Longevity Playbook", "Alumni Access"]
  }
];

export default function MethodologyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Removed GSAP ScrollTrigger logic for AnimatedSection consistency

  return (
    <div ref={containerRef} className="min-h-screen bg-primary flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" />
      <GlassHeader />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-56 pb-24 px-10 relative">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-6 mb-12">
                <div className="h-px w-16 bg-white/10" />
                <span className="text-[11px] font-black text-accent uppercase tracking-[0.5em]">The Biological Blueprint</span>
                <div className="h-px w-16 bg-white/10" />
              </div>
              <h1 className="text-3xl lg:text-7xl font-display font-bold text-white tracking-tighter leading-[0.85] mb-8 md:mb-12 text-gradient">
                Clinical Precision. <br /><span className="text-accent italic">Biological Autonomy.</span>
              </h1>
              <p className="text-white/40 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed tracking-tight">
                Symptoms are just data points. We address the molecular foundations of metabolic health to drive systemic reversal.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="pt-32 pb-12 px-10 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PILLARS.map((pillar, i) => (
                <AnimatedSection key={pillar.title} delay={i * 0.1}>
                  <div className="p-12 rounded-[3.5rem] glass-dark h-full space-y-8 group hover:translate-y-[-10px] transition-all duration-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                    <div className={cn("size-20 rounded-2xl flex items-center justify-center text-white shadow-2xl relative z-10", pillar.color, pillar.shadow)}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight relative z-10">{pillar.title}</h3>
                    <p className="text-white/40 font-medium leading-relaxed text-lg relative z-10">
                      {pillar.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Protocol Architecture */}
        <section className="pt-24 pb-12 px-10 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.02]" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-24 items-center mb-24">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-6 md:mb-8 leading-[0.85] text-gradient">
                  The Protocol <br /> <span className="text-accent italic italic opacity-60">Architecture.</span>
                </h2>
                <p className="text-white/30 text-lg md:text-2xl font-medium max-w-xl leading-relaxed tracking-tight">
                  A three-phase clinical framework designed to maximize metabolic flexibility and restore endocrine signaling.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="size-80 rounded-full border border-white/5 flex items-center justify-center relative bg-primary/50 backdrop-blur-3xl shadow-2xl">
                  <div className="size-60 rounded-full border border-accent/10 flex items-center justify-center animate-float">
                    <Microscope size={80} className="text-accent shadow-neon-emerald" />
                  </div>
                  <div className="absolute top-0 right-0 size-16 rounded-full bg-accent animate-pulse blur-3xl opacity-20" />
                </div>
              </div>
            </div>

            <div className="steps-container grid grid-cols-1 md:grid-cols-3 gap-8">
              {STEPS.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1}>
                  <div className="step-card group h-full space-y-8 p-10 rounded-[2.5rem] glass-dark border-white/5 hover:bg-white/5 transition-all duration-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                    <span className="text-9xl font-display font-black text-white/5 group-hover:text-accent/20 transition-colors relative z-10 leading-none">
                      {step.num}
                    </span>
                    <div className="space-y-4 relative z-10">
                      <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors">{step.title}</h3>
                      <p className="text-white/40 font-medium text-base leading-relaxed">{step.desc}</p>
                    </div>
                    <ul className="space-y-4 relative z-10 pt-8 border-t border-white/5">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-white/80 font-black text-[9px] uppercase tracking-[0.4em]">
                          <ShieldCheck size={16} className="text-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-12 pb-32 px-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 bg-accent/10 blur-[150px] rounded-full" />
          <div className="max-w-4xl mx-auto relative z-10">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-8xl font-display font-bold text-white tracking-tighter mb-6 md:mb-8 text-gradient leading-[0.85]">
                Ready to data-map <br /> your biology?
              </h2>
              <p className="text-white/40 text-base lg:text-2xl font-medium max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed tracking-tight px-6 md:px-0">
                Join the precision movement. Standardize your bio-markers and reclaim your metabolic autonomy.
              </p>
              <div className="flex justify-center">
                <Link href="/assessment">
                  <PremiumButton className="h-14 md:h-20 px-8 md:px-14 text-lg md:text-2xl group rounded-full md:rounded-[2.5rem] shadow-neon-emerald">
                    Start Your Assessment
                    <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform md:size-7" />
                  </PremiumButton>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <GlassFooter />
    </div>
  );
}
