"use client";

import { Logo } from "./Logo";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";
import { MapPin, Mail, Phone, Globe, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 md:pt-24 pb-8 md:pb-12 px-5 md:px-[60px] relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-teal/5 blur-[80px] md:blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-y-12 md:gap-12 lg:gap-24 mb-12 md:mb-20">
          
          {/* Column 1: The Brand Manifesto */}
          <div className="col-span-12 lg:col-span-5 space-y-6 md:space-y-8">
            <div className="brightness-0 invert opacity-90 max-w-[160px] md:max-w-none">
              <Logo />
            </div>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md font-light">
              Bridging global healthcare gaps through 
              <span className="text-white font-medium italic font-serif ml-1">certified excellence</span> 
              and precision logistics.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                <ShieldCheck size={12} className="text-teal" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/80">WHO-GMP</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                <Globe size={12} className="text-teal" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/80">India Export Hub</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h4 className="text-teal font-black text-[10px] uppercase tracking-[3px] mb-6 md:mb-8">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300 w-fit"
                >
                  <span className="text-sm font-medium">{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 md:opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: The HQ Terminal */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h4 className="text-teal font-black text-[10px] uppercase tracking-[3px] mb-6 md:mb-8">Global HQ</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin size={20} className="text-teal shrink-0" />
                <address className="not-italic text-sm text-white/70 leading-relaxed">
                   Shop No. 7, Comet Building, <br />
                   Opp. Lake View, Bandra West, <br />
                   Mumbai, MH – 400050
                </address>
              </div>
              <div className="flex gap-4 items-center">
                <Phone size={20} className="text-teal shrink-0" />
                <a href={`tel:${COMPANY.phones[0]}`} className="text-lg font-bold tracking-tight text-white/90 hover:text-teal transition-colors">
                  {COMPANY.phones[0]}
                </a>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                 <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                 <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                   Live Dispatch: Operational
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Big Background Text - Fixed for Mobile Wrap */}
        <div className="absolute left-0 bottom-16 md:bottom-12 select-none pointer-events-none opacity-[0.02] overflow-hidden whitespace-nowrap w-full">
          <span className="text-[60px] sm:text-[100px] md:text-[180px] font-black leading-none uppercase tracking-tighter block">
            Liberty Medical India
          </span>
        </div>

        {/* Final Copyright Bar */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <span className="text-[10px] md:text-[11px] font-medium text-white/30 uppercase tracking-[2px]">
              &copy; {currentYear} {COMPANY.name}
            </span>
            <div className="flex gap-6">
               <a href="/privacy" className="text-[10px] md:text-[11px] text-white/30 hover:text-teal transition-colors uppercase tracking-widest">Privacy</a>
               <a href="/terms" className="text-[10px] md:text-[11px] text-white/30 hover:text-teal transition-colors uppercase tracking-widest">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/[0.03] px-4 md:px-5 py-2 rounded-full border border-white/5">
             <span className="text-[8px] md:text-[9px] font-bold text-teal uppercase tracking-widest">QA</span>
             <div className="w-1 h-1 rounded-full bg-white/20" />
             <span className="text-[8px] md:text-[9px] font-bold text-white/60 uppercase tracking-widest italic">ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}