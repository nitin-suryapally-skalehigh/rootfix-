"use client";

import React from "react";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { GlassFooter } from "@/components/layout/GlassFooter";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { AssessmentStepper } from "@/components/assessment/AssessmentStepper";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Dna, 
  BrainCircuit, 
  FlameKindling,
  HeartPulse,
  ChevronRight,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const Step1 = () => {
  const { data, updateData, nextStep } = useAssessmentStore();
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <div className="size-20 rounded-2xl glass-emerald flex items-center justify-center text-accent mx-auto mb-8 shadow-neon-emerald ring-1 ring-accent/20">
          <Activity size={40} />
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-bold text-white tracking-tighter italic">Identity Protocol.</h2>
        <p className="text-white/40 text-xl font-medium tracking-tight">Initialize your clinical profile for diagnostic analysis.</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-accent uppercase tracking-[0.4em] ml-2">Sequence Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className="w-full h-18 py-5 px-8 rounded-2xl glass-dark border border-white/5 focus:border-accent/40 outline-none font-bold text-lg text-white placeholder:text-white/10 tracking-tight transition-all"
            placeholder="Suryapally Nitin"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-accent uppercase tracking-[0.4em] ml-2">Encryption Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            className="w-full h-18 py-5 px-8 rounded-2xl glass-dark border border-white/5 focus:border-accent/40 outline-none font-bold text-lg text-white placeholder:text-white/10 tracking-tight transition-all"
            placeholder="care@rootfixhealth.com"
          />
        </div>
      </div>
      
      <PremiumButton 
        disabled={!data.name || !data.email}
        onClick={nextStep}
        className="w-full h-16 text-xl rounded-2xl mt-8"
      >
        Initialize Session
        <ArrowRight size={24} className="ml-3" />
      </PremiumButton>
    </motion.div>
  );
};

const Step2 = () => {
  const { data, updateData, nextStep, prevStep } = useAssessmentStore();
  const conditions = [
    { id: "diabetes", label: "Metabolic / Type-2 Reversal", icon: <Dna /> },
    { id: "thyroid", label: "Endocrine / Thyroid Optimization", icon: <BrainCircuit /> },
    { id: "gut", label: "Microbiome / Gut Integrity", icon: <FlameKindling /> },
    { id: "weight", label: "Molecular Weight Management", icon: <HeartPulse /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <div className="size-20 rounded-2xl glass-emerald flex items-center justify-center text-accent mx-auto mb-8 shadow-neon-emerald ring-1 ring-accent/20">
          <Zap size={40} />
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-bold text-white tracking-tighter italic">Primary Objective.</h2>
        <p className="text-white/40 text-xl font-medium tracking-tight">Select the biological system requiring clinical restoration.</p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {conditions.map((item) => (
          <button
            key={item.id}
            onClick={() => updateData({ primaryCondition: item.id })}
            className={cn(
              "flex items-center gap-6 p-8 rounded-[2.5rem] border-2 transition-all text-left group relative overflow-hidden",
              data.primaryCondition === item.id 
                ? "border-accent bg-accent/5" 
                : "border-white/5 glass-dark hover:border-accent/40"
            )}
          >
            <div className={cn(
              "size-18 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10",
              data.primaryCondition === item.id 
                ? "bg-accent text-primary shadow-neon-emerald" 
                : "glass-emerald text-accent/40 group-hover:text-accent group-hover:scale-110"
            )}>
              {item.icon}
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight relative z-10",
              data.primaryCondition === item.id ? "text-white" : "text-white/40 group-hover:text-white"
            )}>{item.label}</span>
            {data.primaryCondition === item.id && (
              <motion.div layoutId="check" className="ml-auto text-accent bg-accent/20 p-2 rounded-full relative z-10 shadow-neon-emerald">
                <CheckCircle2 size={24} />
              </motion.div>
            )}
            <div className="absolute inset-0 bg-noise opacity-[0.05]" />
          </button>
        ))}
      </div>

      <div className="flex gap-6 mt-10">
        <PremiumButton variant="outline" onClick={prevStep} className="w-1/4 h-16 rounded-2xl">
          <ArrowLeft size={24} />
        </PremiumButton>
        <PremiumButton 
          disabled={!data.primaryCondition}
          onClick={nextStep}
          className="flex-1 h-16 text-xl rounded-2xl"
        >
          Confirm Metadata
        </PremiumButton>
      </div>
    </motion.div>
  );
};

const Step4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-12"
    >
      <div className="size-32 bg-accent text-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-neon-emerald ring-4 ring-accent/20 animate-float scale-110">
        <CheckCircle2 size={64} />
      </div>
      
      <div className="space-y-6">
        <h2 className="text-6xl font-display font-bold text-white tracking-tighter italic">Sequence Logged.</h2>
        <p className="text-white/40 text-2xl font-medium max-w-lg mx-auto leading-relaxed tracking-tight">
          Your biological profile is matched with our <span className="text-accent underline underline-offset-8">Precision Reversal Protocol</span>.
        </p>
      </div>
      
      <div className="p-14 rounded-[4rem] glass-dark border border-white/10 text-left space-y-10 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-noise opacity-[0.05]" />
        <div className="relative z-10">
          <h4 className="font-black text-accent uppercase tracking-[0.5em] text-[10px] mb-6">Protocol Verification Required</h4>
          <p className="font-medium text-white/80 text-xl leading-relaxed mb-8">
            Complete your clinical intake. Secure a 30-minute Discovery Call to review biomarker projections with our medical board.
          </p>
          <PremiumButton className="w-full h-16 rounded-2xl text-xl shadow-neon-emerald">
            Book Discovery Call
            <ChevronRight size={24} className="ml-3" />
          </PremiumButton>
        </div>
      </div>
    </motion.div>
  );
};

export default function AssessmentPage() {
  const { step } = useAssessmentStore();

  return (
    <div className="min-h-screen bg-primary flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" />
      <GlassHeader />
      
      <main className="flex-1 flex flex-col justify-center pt-56 pb-24 px-10 relative z-10">
        <div className="max-w-2xl w-full mx-auto">
          <AssessmentStepper />
          
          <div className="glass-dark p-14 lg:p-20 rounded-[4rem] shadow-2xl border border-white/5 overflow-hidden relative group">
             <div className="absolute inset-0 bg-noise opacity-[0.05]" />
             <div className="absolute -top-40 -left-40 size-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
             
            <AnimatePresence mode="wait">
              {step === 1 && <Step1 key="step1" />}
              {step === 2 && <Step2 key="step2" />}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-12 text-center py-10"
                >
                  <h2 className="text-3xl lg:text-5xl font-display font-bold text-white tracking-tighter italic">Running Diagnostics...</h2>
                  <div className="size-48 mx-auto relative flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-[6px] border-accent/10 border-t-accent rounded-full shadow-neon-emerald"
                    />
                    <motion.div
                       animate={{ 
                         scale: [1, 1.2, 1],
                         opacity: [0.5, 1, 0.5]
                       }}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="text-accent"
                    >
                      <HeartPulse size={80} />
                    </motion.div>
                  </div>
                  <p className="text-white/40 font-medium text-xl leading-relaxed tracking-tight">Mapping metadata to clinical biomarker database (12,400+ entries)...</p>
                  
                  <div className="flex justify-center gap-1.5 pt-10">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          height: [10, 30, 10], 
                          opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.1 
                        }}
                        className="w-1.5 bg-accent rounded-full "
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 4 && <Step4 key="step4" />}
            </AnimatePresence>
          </div>
          
          {step < 4 && (
            <div className="flex items-center justify-center gap-3 mt-12 opacity-40">
               <ShieldCheck size={14} className="text-accent" />
               <p className="text-center text-white text-[10px] font-black uppercase tracking-[0.4em]">
                 Military-Grade Encryption & HIPAA Compliant Engine
               </p>
            </div>
          )}
        </div>
      </main>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 size-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-[600px] bg-emerald-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <GlassFooter />
    </div>
  );
}
