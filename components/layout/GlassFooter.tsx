import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const GlassFooter = () => {
  return (
    <footer className="bg-secondary py-20 px-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex flex-col items-center md:items-start gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-10 bg-accent rounded-xl flex items-center justify-center text-primary shadow-neon-emerald">
              <ShieldCheck size={24} />
            </div>
            <span className="font-display text-white text-2xl font-bold tracking-tighter">Rootfix</span>
          </Link>
          <p className="text-white/20 text-sm font-medium text-center md:text-left max-w-sm leading-relaxed">
            Precision disease reversal through functional metabolic science. A new standard in clinical medicine.
          </p>
        </div>
        
        <div className="flex gap-12 text-[10px] font-black text-white/40 tracking-[0.4em] uppercase">
          <Link href="/programs" className="hover:text-accent transition-all">Programs</Link>
          <Link href="/methodology" className="hover:text-accent transition-all">Methodology</Link>
          <Link href="/contact" className="hover:text-accent transition-all">Contact</Link>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3 text-right">
          <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.5em]">
            © 2024 Rootfix Health Premium
          </p>
          <div className="flex gap-3 items-center">
            <div className="size-1 bg-accent rounded-full animate-pulse shadow-neon-emerald" />
            <p className="text-[9px] text-accent font-black uppercase tracking-[0.4em]">Engine Active</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
