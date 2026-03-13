"use client";

import React, { useState } from "react";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { GlassFooter } from "@/components/layout/GlassFooter";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { cn } from "@/lib/utils";
import { Search, Filter, PlayCircle, Star, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  "All Results",
  "Diabetes",
  "Thyroid",
  "Gut Health",
  "Fatigue",
  "Weight Loss"
];

const STORIES = [
  {
    quote: "HbA1c shifted from 7.4 to 5.2. My insulin sensitivity has been completely restored without generic pharmaceutical intervention.",
    author: "Sarah J.",
    role: "Type-2 Remission",
    category: "Diabetes"
  },
  {
    quote: "The inflammatory markers finally stopped red-lining. My energy is stable for the first time in a decade.",
    author: "David L.",
    role: "Metabolic Reset",
    category: "Weight Loss"
  },
  {
    quote: "Addressing the root cause of my PCOS changed everything. My hormones are finally in perfect biological sync.",
    author: "Elena M.",
    role: "Biomedical Synergy",
    category: "Thyroid"
  },
  {
    quote: "After 5 years of IBS, I finally found a protocol that actually restored my gut lining. I can eat normally again.",
    author: "Amit R.",
    role: "Gut Restoration",
    category: "Gut Health"
  },
  {
    quote: "My thyroid markers have standardized and I've been able to reduce my cellular stress markers significantly.",
    author: "Kavya S.",
    role: "Endocrine Repair",
    category: "Thyroid"
  },
  {
    quote: "The weight loss was just a side effect of the metabolic repair. The real win was the 24/7 mental clarity.",
    author: "Mark T.",
    role: "Cognitive Synergy",
    category: "Fatigue"
  }
];

export default function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All Results");

  const filteredStories = STORIES.filter(
    (story) => activeCategory === "All Results" || story.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-primary flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" />
      <GlassHeader />
      
      <main className="flex-1 pt-56 pb-24 px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-emerald border-accent/20 mb-10">
                <Star size={14} className="text-accent fill-accent" />
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">Clinically Documented</span>
              </div>
              <h1 className="text-3xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-8 md:mb-10 text-gradient leading-[0.85]">
                Biological <span className="text-accent italic">Proof.</span>
              </h1>
              <p className="text-white/40 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed tracking-tight px-6 md:px-0">
                Real transformations documented through rigorous biomarker analysis and persistent patient excellence.
              </p>
            </AnimatedSection>
          </div>

          {/* Filters */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
              <div className="flex items-center gap-3 mr-6 text-white/20 font-black uppercase tracking-[0.4em] text-[9px]">
                <Filter size={14} className="text-accent" />
                Filter Dataset:
              </div>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-10 py-3.5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all border",
                    activeCategory === cat
                      ? "bg-accent text-primary border-accent shadow-neon-emerald"
                      : "glass-dark text-white/40 border-white/5 hover:border-white/20 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredStories.map((story, i) => (
              <TestimonialCard 
                key={story.author}
                quote={story.quote}
                author={story.author}
                role={story.role}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Call-to-action */}
          <AnimatedSection delay={0.4} className="mt-48 p-16 lg:p-24 rounded-[4rem] bg-secondary border border-white/5 text-center overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-noise opacity-5" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="size-24 rounded-3xl glass-emerald flex items-center justify-center text-accent mb-12 shadow-neon-emerald ring-1 ring-accent/20 animate-float">
                <Sparkles size={48} />
              </div>
              <h2 className="text-3xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-8 md:mb-10 text-gradient leading-[0.85]">
                Your journey could <br /> be <span className="text-accent italic">documented next.</span>
              </h2>
              <div className="flex justify-center w-full px-6 md:px-0">
                <Link href="/assessment" className="w-full sm:w-auto">
                  <PremiumButton className="w-full sm:w-auto h-14 md:h-20 px-8 md:px-14 text-lg md:text-2xl group rounded-full md:rounded-[2.5rem] shadow-neon-emerald">
                    Start Your Assessment
                    <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform md:size-7" />
                  </PremiumButton>
                </Link>
              </div>
            </div>
            
            {/* Background art */}
            <div className="absolute top-0 right-0 size-[600px] bg-accent/5 opacity-40 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 size-[600px] bg-white opacity-5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </AnimatedSection>
        </div>
      </main>
      <GlassFooter />
    </div>
  );
}
