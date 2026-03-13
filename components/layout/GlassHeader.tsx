"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PremiumButton } from "@/components/ui/PremiumButton";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const GlassHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { label: "Methodology", href: "/methodology" },
    { label: "Programs", href: "/programs" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-8 py-8",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 flex items-center justify-between px-6 md:px-10 h-16 md:h-20",
          isScrolled ? "glass-dark shadow-2xl border-white/10" : "bg-transparent border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="size-8 md:size-12 bg-accent rounded-lg md:rounded-xl flex items-center justify-center text-primary shadow-neon-emerald group-hover:rotate-12 transition-transform duration-500">
            <ShieldCheck className="size-5 md:size-7" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white">
            Rootfix <span className="text-accent italic">Health</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="font-bold text-[11px] text-white/40 hover:text-accent transition-all tracking-[0.3em] uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/assessment">
            <PremiumButton className="h-12 px-6 text-[10px] rounded-xl tracking-widest uppercase !font-black shadow-none ring-1 ring-white/10 hover:ring-accent/50">
              Start Assessment
            </PremiumButton>
          </Link>
        </nav>

        {/* Mobile Trigger */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-primary z-[200] p-10 flex flex-col"
          >
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
            <div className="flex items-center justify-between mb-20 relative z-10">
              <span className="font-display font-bold text-2xl text-white">Rootfix</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="size-12 rounded-xl glass-dark flex items-center justify-center text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-10 flex-1 relative z-10">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-5xl font-display font-bold text-white group flex items-center gap-4"
                >
                  <span className="group-hover:text-accent transition-all duration-500">
                    {link.label}
                  </span>
                  <div className="h-1 w-0 bg-accent group-hover:w-12 transition-all duration-500" />
                </Link>
              ))}
            </nav>

            <Link href="/assessment" onClick={() => setMobileMenuOpen(false)} className="relative z-10">
              <PremiumButton className="w-full h-20 text-2xl rounded-3xl">
                Start Assessment
              </PremiumButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
