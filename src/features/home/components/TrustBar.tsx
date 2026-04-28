"use client";

import { motion } from "framer-motion";
import { trustItems } from "../data/trust-items";

export function TrustBar() {
  // We duplicate the items to ensure there's no "gap" during the loop
  const duplicatedItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="bg-[#F8FAFC] border-y border-slate-200 py-8 overflow-hidden relative">
      {/* Edge fade gradients - Premium Softness */}
      <div className="absolute inset-y-0 left-0 w-40 z-[2] pointer-events-none bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 z-[2] pointer-events-none bg-gradient-to-l from-[#F8FAFC] to-transparent" />
      
      <motion.div 
        className="flex items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center gap-6 px-12 whitespace-nowrap group cursor-default"
            >
              {/* Icon Container - Clean Apothecary Style */}
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm transition-all duration-500 group-hover:border-teal/30 group-hover:shadow-teal/5">
                <Icon className="w-5 h-5 text-[#0F172A] group-hover:text-teal transition-colors" />
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] text-teal font-black uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                  Verified
                </span>
                <span className="text-[13px] text-[#475569] font-bold tracking-[1px] uppercase group-hover:text-[#0F172A] transition-colors">
                  {item.label}
                </span>
              </div>
              
              {/* Subtle Dot Separator instead of a hard line */}
              <div className="ml-12 w-1.5 h-1.5 rounded-full bg-slate-200" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}