"use client";

import React from "react";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { GlassFooter } from "@/components/layout/GlassFooter";
import { CheckCircle2, ArrowRight, Video, MessageSquare, Microscope, Calendar, ShieldCheck, Sparkles, Activity, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PROGRAMS = [
  {
    title: "Clinical Discovery",
    price: "₹1,999",
    duration: "30 Minute Session",
    tag: "Get Clarity",
    cta: "Book Discovery",
    href: "/contact",
    features: [
      "Clinical intake review",
      "Symptom-to-Biomarker map",
      "Protocol eligibility check",
      "Next-steps strategic plan",
    ],
    icon: <Video className="text-accent" />,
    popular: false,
  },
  {
    title: "1:1 Transformation",
    price: "₹29,999",
    duration: "90-Day Intensive",
    tag: "High Intervention",
    cta: "Begin Assessment",
    href: "/assessment",
    features: [
      "6 Precision video consults",
      "Real-time metabolic tracking",
      "Daily WhatsApp concierge",
      "Nutriceutical sequencing",
      "Sleep & Energy architecture",
      "Sustainable exit-framework",
    ],
    icon: <Activity className="text-accent" />,
    popular: true,
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" />
      <GlassHeader />
      
      <main className="flex-1 pt-56 pb-24 px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-32">
            <AnimatedSection>
              <div className="inline-flex items-center gap-4 mb-10 px-6 py-2 rounded-full glass-emerald border-accent/20">
                <Sparkles size={16} className="text-accent animate-pulse" />
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">Investment in Longevity</span>
              </div>
              <h1 className="text-3xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-8 md:mb-10 text-gradient leading-[0.85]">
                Precision <br /> <span className="text-accent italic">Interventions.</span>
              </h1>
              <p className="text-white/40 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed tracking-tight">
                Data-driven protocols designed for those who refuse to manage disease and demand a return to vitality.
              </p>
            </AnimatedSection>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-48">
            {PROGRAMS.map((program, i) => (
              <AnimatedSection key={program.title} delay={i * 0.1}>
                <div className={cn(
                  "h-full relative p-14 rounded-[4rem] flex flex-col transition-all duration-700 hover:translate-y-[-12px] group",
                  program.popular 
                    ? "bg-secondary border border-accent/20 shadow-neon-emerald scale-105 z-10" 
                    : "glass-dark border-white/5"
                )}>
                  {program.popular && (
                    <div className="absolute top-10 right-10 bg-accent text-primary h-8 px-5 rounded-full flex items-center justify-center text-[10px] font-black uppercase tracking-[0.3em] shadow-neon-emerald">
                      Elite Track
                    </div>
                  )}
                  
                  <div className="size-20 rounded-2xl glass-emerald flex items-center justify-center mb-10 ring-1 ring-accent/20 group-hover:scale-110 transition-transform duration-500">
                    {program.icon}
                  </div>

                  <h3 className="text-4xl font-bold mb-3 tracking-tighter text-white">{program.title}</h3>
                  <div className="flex items-baseline gap-3 mb-12">
                    <span className="text-6xl font-display font-bold text-white">{program.price}</span>
                    <span className="font-bold text-sm text-white/30 tracking-widest uppercase">
                      / {program.duration}
                    </span>
                  </div>

                  <div className="space-y-6 mb-16 flex-1">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-5">
                        <CheckCircle2 size={24} className="text-accent flex-shrink-0" />
                        <span className="font-bold text-[11px] uppercase tracking-[0.3em] text-white/60">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href={program.href}>
                    <PremiumButton
                      variant={program.popular ? "primary" : "outline"}
                      className={cn("w-full h-16 rounded-2xl group text-lg", program.popular ? "" : "hover:!bg-white/10")}
                    >
                      {program.cta}
                      <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </PremiumButton>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Comparison */}
          <section className="mt-48 p-16 lg:p-24 rounded-[5rem] glass-dark border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-[0.05]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-5xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-12 leading-[0.9] text-gradient">
                  The Clinical <br /> <span className="text-accent italic">Edge.</span>
                </h2>
                <div className="space-y-12">
                  {[
                    { title: "Root Cause Sequencing", desc: "We don't manage symptoms. We identify the molecular triggers of inflammation.", icon: <Microscope /> },
                    { title: "Personalized Board", desc: "Direct metabolic oversight from a panel of clinical and functional medical experts.", icon: <ShieldCheck /> },
                    { title: "Concierge Bio-syncing", desc: "Expert health coaches available 24/7 on WhatsApp for immediate biological guidance.", icon: <Zap /> }
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-8 group">
                      <div className="size-16 rounded-2xl glass-emerald text-accent flex items-center justify-center shrink-0 shadow-neon-emerald ring-1 ring-accent/20 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">{item.title}</h4>
                        <p className="text-white/40 font-medium text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square glass-dark rounded-[4rem] p-12 flex items-center justify-center group overflow-hidden border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="text-center space-y-10 relative z-10">
                  <div className="size-32 rounded-full glass-emerald flex items-center justify-center text-accent mx-auto shadow-neon-emerald scale-110 border-accent/20 relative">
                    <CheckCircle2 size={56} className="relative z-10" />
                    <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-display font-bold text-white tracking-tighter italic">Protocol Ready</h3>
                    <p className="text-accent font-black uppercase tracking-[0.5em] text-[10px] animate-pulse">98.2% Biological Synergy</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 bg-accent/10 blur-[150px] rounded-full" />
            <div className="max-w-4xl mx-auto relative z-10">
              <AnimatedSection>
                <h2 className="text-3xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-8 md:mb-12 text-gradient leading-[0.85]">
                  Start your clinical <br /> transformation.
                </h2>
                <div className="flex justify-center px-6 md:px-0">
                  <Link href="/assessment" className="w-full sm:w-auto">
                    <PremiumButton className="w-full sm:w-auto h-14 md:h-20 px-8 md:px-14 text-lg md:text-2xl group rounded-full md:rounded-[2.5rem] shadow-neon-emerald">
                      Begin Assessment
                      <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform md:size-7" />
                    </PremiumButton>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </div>
      </main>
      <GlassFooter />
    </div>
  );
}
