"use client";

import React from "react";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { GlassFooter } from "@/components/layout/GlassFooter";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Zap, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" />
      <GlassHeader />
      
      <main className="flex-1 pt-56 pb-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left: Info and Form */}
            <div className="space-y-16">
              <AnimatedSection>
                <div className="inline-flex items-center gap-4 mb-10 px-6 py-2 rounded-full glass-emerald border-accent/20">
                  <Zap size={14} className="text-accent animate-float" />
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em]">Direct Medical Concierge</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter leading-[0.8] mb-12 text-gradient">
                  Initiate <br /><span className="text-accent italic">Contact.</span>
                </h1>
                <p className="text-white/40 text-2xl font-medium max-w-xl leading-relaxed tracking-tight">
                  Have questions about our clinical protocols or your health assessment? Our medical concierge team is ready to assist.
                </p>
              </AnimatedSection>

              <div className="space-y-8">
                <AnimatedSection delay={0.1}>
                  <div className="flex items-center gap-8 p-10 rounded-[3rem] glass-dark group hover:bg-white/5 transition-all duration-700 relative overflow-hidden border-white/5">
                    <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                    <div className="size-20 rounded-2xl glass-emerald flex items-center justify-center text-accent shadow-neon-emerald ring-1 ring-accent/20 group-hover:scale-110 transition-transform">
                      <Mail size={32} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-black text-accent uppercase tracking-[0.4em] text-[10px] mb-3">Secure Transmission</h4>
                      <p className="font-bold text-white text-xl md:text-2xl tracking-tight">care@rootfixhealth.com</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <div className="flex items-center gap-8 p-10 rounded-[3rem] glass-dark group hover:bg-white/5 transition-all duration-700 relative overflow-hidden border-white/5">
                    <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                    <div className="size-20 rounded-2xl glass-emerald flex items-center justify-center text-accent shadow-neon-emerald ring-1 ring-accent/20 group-hover:scale-110 transition-transform">
                      <Phone size={32} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-black text-accent uppercase tracking-[0.4em] text-[10px] mb-3">Concierge Line</h4>
                      <p className="font-bold text-white text-xl md:text-2xl tracking-tight">+91 98765 43210</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <AnimatedSection delay={0.3}>
                <div className="p-14 rounded-[4rem] glass-dark border border-white/5 space-y-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                  <div className="flex items-center gap-4 relative z-10">
                    <MessageCircle size={32} className="text-accent" />
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter">Clinical Inquiry</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <input type="text" placeholder="Full Name" className="h-16 px-8 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-white/20 focus:border-accent/40 outline-none font-bold uppercase text-[11px] tracking-widest transition-all" />
                    <input type="email" placeholder="Email Address" className="h-16 px-8 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-white/20 focus:border-accent/40 outline-none font-bold uppercase text-[11px] tracking-widest transition-all" />
                  </div>
                  <textarea placeholder="Clinical context or health concern..." rows={4} className="w-full relative z-10 p-8 rounded-2xl bg-white/5 border border-white/5 text-white placeholder:text-white/20 focus:border-accent/40 outline-none font-medium text-lg transition-all resize-none"></textarea>
                  
                  <PremiumButton className="w-full h-14 md:h-16 rounded-xl md:rounded-2xl relative z-10 text-base md:text-lg font-black uppercase tracking-[0.2em]">
                    Submit Transmission
                  </PremiumButton>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Calendar */}
            <div className="lg:sticky lg:top-40 h-fit">
              <AnimatedSection delay={0.4}>
                <div className="rounded-[4rem] overflow-hidden shadow-2xl glass-dark border border-white/10 relative group">
                  <div className="absolute inset-0 bg-noise opacity-[0.05]" />
                  <div className="bg-secondary p-12 text-center relative z-10 space-y-4 border-b border-white/5">
                    <div className="size-20 rounded-full glass-emerald flex items-center justify-center text-accent mx-auto mb-6 shadow-neon-emerald ring-1 ring-accent/20 group-hover:scale-110 transition-transform duration-700">
                      <Calendar size={40} />
                    </div>
                    <h3 className="text-4xl font-display font-bold text-white tracking-tighter italic">Discovery Call</h3>
                    <p className="text-white/40 text-lg font-medium tracking-tight">Select your clinical intake window.</p>
                  </div>
                  
                  <div className="aspect-[4/5] bg-[#050505]/50 flex flex-col items-center justify-center p-16 text-center space-y-10 relative z-10">
                    <div className="size-64 rounded-full border-4 border-dashed border-accent/10 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                      <span className="text-accent/20 font-black uppercase tracking-[0.5em] text-[10px] relative z-20">Calendar Interface Syncing</span>
                    </div>
                    <div className="space-y-4">
                      <p className="text-white/30 text-lg font-medium italic tracking-tight">
                        Calls are technical clinical intakes to review biomarker data and confirm protocol eligibility.
                      </p>
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="size-1.5 rounded-full bg-accent/20" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      <GlassFooter />
    </div>
  );
}
