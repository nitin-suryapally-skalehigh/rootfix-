import React from "react";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BiomarkerComparison } from "@/components/ui/BiomarkerComparison";
import { GlassFooter } from "@/components/layout/GlassFooter";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ArrowRight, Activity, Stethoscope, Sprout, ChevronRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 bg-noise pointer-events-none z-[100] opacity-[0.03]" />
      <GlassHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-56 pb-32 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 size-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 size-[600px] bg-emerald-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-3/5 text-center lg:text-left">
                <AnimatedSection>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-dark border-white/5 mb-10">
                    <Zap size={14} className="text-accent" />
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Advanced Metabolic Science</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-7xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-8 md:mb-12 text-gradient">
                    Reclaim your <br />
                    <span className="text-accent italic">biological potential.</span>
                  </h1>
                  
                  <p className="text-white/50 text-lg lg:text-3xl font-medium max-w-2xl mb-10 md:mb-14 leading-relaxed tracking-tight">
                    Beyond symptom management. We address the molecular foundations of chronic illness through cellular medicine.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 justify-center lg:justify-start">
                    <Link href="/assessment">
                      <PremiumButton className="h-12 md:h-16 px-8 md:px-10 text-base md:text-lg group shadow-neon-emerald rounded-full">
                        Begin Assessment
                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform md:size-5" />
                      </PremiumButton>
                    </Link>
                    <Link href="/methodology">
                      <PremiumButton variant="outline" className="h-12 md:h-16 px-8 md:px-10 text-base md:text-lg ring-1 ring-white/10 hover:ring-accent/40 rounded-full">
                        Our Method
                      </PremiumButton>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:w-2/5 w-full">
                <AnimatedSection delay={0.2} variant="roll-in">
                  <div className="glass-dark p-8 rounded-[3rem] border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-2xl font-bold text-white mb-6">Conditions we manage</h3>
                    <div className="grid grid-cols-2 gap-4 text-white/50 text-sm">
                      {["Obesity", "Type-2 Diabetes", "PCOS", "Thyroid Issues", "Autoimmune", "Gut Health", "Fatty Liver", "Hypertension"].map(c => (
                        <div key={c} className="flex items-center gap-2">
                          <div className="size-1.5 bg-accent rounded-full" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-10 relative z-10">
            <AnimatedSection variant="roll-in" className="flex flex-col md:flex-row items-center gap-16 glass-dark p-12 rounded-[4rem] border-white/5">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-[3rem] bg-accent/20 flex items-center justify-center border border-accent/20 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-noise opacity-[0.1]" />
                  <span className="text-accent font-display text-4xl font-black italic">MB</span>
                  {/* Placeholder for Manish Bhagwani's image */}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold text-white mb-6">Our Founder, Manish Bhagwani</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8 font-medium">
                  An IIT Kharagpur graduate, Manish is a Functional Nutritionist and dedicated researcher in reversing chronic and lifestyle health conditions. He and his team work in guiding individuals towards achieving optimal health through root-cause science.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-full glass-emerald text-accent text-xs font-bold uppercase tracking-widest">IIT Kharagpur Alumnus</div>
                  <div className="px-4 py-2 rounded-full glass-dark text-white/40 text-xs font-bold uppercase tracking-widest">Functional Nutritionist</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-48 relative overflow-hidden bg-secondary">
          <div className="absolute inset-0 bg-noise opacity-[0.02]" />
          <div className="max-w-7xl mx-auto px-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Investigation",
                  label: "Phase 01",
                  desc: "Sequencing over 80+ metabolic markers to map the hidden triggers of biological inflammation.",
                  icon: <Activity className="text-accent" />
                },
                {
                  title: "Intervention",
                  label: "Phase 02",
                  desc: "Bio-matched clinical protocols designed to sensitize cellular receptors and normalize signaling.",
                  icon: <Stethoscope className="text-accent" />
                },
                {
                  title: "Independence",
                  label: "Phase 03",
                  desc: "Hardcoding a sustainable framework for biological longevity and complete disease remission.",
                  icon: <Sprout className="text-accent" />
                }
              ].map((phase, i) => (
                <AnimatedSection key={phase.title} delay={i * 0.1}>
                  <div className="group p-14 rounded-[3.5rem] glass-dark hover:bg-white/5 transition-all duration-700 border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                      <span className="text-8xl font-display font-black italic">{phase.label}</span>
                    </div>
                    
                    <div className="size-16 rounded-2xl glass-emerald flex items-center justify-center mb-12 ring-1 ring-accent/20">
                      {phase.icon}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent transition-colors tracking-tight">
                      {phase.title}
                    </h3>
                    
                    <p className="text-white/40 leading-relaxed font-medium text-lg">
                      {phase.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-48 relative bg-primary overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[1000px] bg-accent/5 rounded-full blur-[200px]" />
          
          <div className="max-w-7xl mx-auto px-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-10">
              <AnimatedSection className="max-w-3xl">
                <h2 className="text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-10 text-gradient">
                  Results documented <br /> through <span className="text-accent italic">data.</span>
                </h2>
                <p className="text-white/40 text-2xl font-medium leading-relaxed tracking-tight">
                  No guesswork. Every protocol is validated by rigorous blood work and real-time clinical monitoring.
                </p>
              </AnimatedSection>
              
              <Link href="/success-stories">
                <PremiumButton variant="outline" className="h-16 px-10 group rounded-3xl">
                  Explore Case Studies
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </PremiumButton>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <TestimonialCard 
                quote="HbA1c shifted from 7.4 to 5.2. My insulin sensitivity has been completely restored without generic pharmaceutical intervention."
                author="Sarah J."
                role="Type-2 Remission"
                delay={0.1}
              />
              <TestimonialCard 
                quote="The inflammatory markers finally stopped red-lining. My energy is stable for the first time in a decade."
                author="David L."
                role="Metabolic Reset"
                delay={0.2}
              />
              <TestimonialCard 
                quote="Addressing the root cause of my PCOS changed everything. My hormones are finally in perfect biological sync."
                author="Elena M."
                role="Biomedical Synergy"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-48 relative overflow-hidden bg-secondary/50">
          <div className="absolute inset-0 bg-noise opacity-[0.02]" />
          <div className="max-w-4xl mx-auto px-10 relative z-10">
            <AnimatedSection variant="roll-in" className="text-center mb-20">
              <h2 className="text-5xl font-bold text-white mb-6">Common Questions</h2>
              <p className="text-white/40 text-xl">Everything you need to know about our methodology.</p>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                {
                  q: "What is Root Cause Healing?",
                  a: "Root Cause Healing is a personalized approach that goes beyond symptom management to uncover and address the underlying imbalances driving chronic health issues using detailed blood work and symptom analysis."
                },
                {
                  q: "What can I expect in the 3-month program?",
                  a: "A comprehensive evaluation starting with blood tests, followed by personalized protocols for nutrition, sleep, gut health, and lifestyle, with bi-weekly check-ins and continuous monitoring."
                },
                {
                  q: "Will you prescribe medicine?",
                  a: "No, we use bio-matched clinical protocols, targeted nutrition, and biological signaling normalization rather than generic pharmaceutical intervention."
                }
              ].map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="glass-dark p-10 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                  <p className="text-white/40 leading-relaxed">{faq.a}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-64 relative overflow-hidden bg-primary">
          <div className="max-w-5xl mx-auto px-10 text-center relative z-10">
            <AnimatedSection variant="roll-in">
              <h2 className="text-4xl lg:text-9xl font-display font-bold text-white tracking-tighter mb-8 md:mb-12 text-gradient leading-[0.9]">
                Your reversal <br /> starts <span className="text-accent italic">here.</span>
              </h2>
              
              <p className="text-white/40 text-lg md:text-3xl font-medium max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed tracking-tight px-6 md:px-0">
                Join our clinical intake. Re-sequence your biology and write your own reversal story.
              </p>
              
              <div className="flex justify-center">
                <Link href="/assessment">
                  <PremiumButton className="h-14 md:h-20 px-8 md:px-14 text-lg md:text-2xl group rounded-full md:rounded-[2.5rem] shadow-neon-emerald">
                    Start Assessment
                    <ChevronRight size={24} className="ml-4 group-hover:translate-x-3 transition-transform md:size-8" />
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
