"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Box } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { features } from "../data/features";
import { certifications } from "../data/countries";
import { WorldGlobe } from "@/components/ui/WorldGlobe";

const cardVariants = {
  hidden: { opacity: 0, y: 30, x: -15, rotate: -1 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      delay: i * 0.15,
    },
  }),
};
export function WhyChooseSection() {

  return (
    <section id="why" className="py-24 bg-white px-[60px] max-md:px-6 overflow-visible relative">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header - Scaled down slightly */}
        <div className="mb-16 lg:pl-8">
          <SectionLabel>Institutional Strength</SectionLabel>
          <SectionTitle>
            <p className="text-4xl lg:text-5xl">

            <span className="text-navy font-bold">The Infrastructure of </span>
            <span className="text-teal font-serif italic block">Global Trust</span>
            </p>
          </SectionTitle>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-0">
          
          {/* LEFT: Compressed Stack */}
          <div className="w-full lg:w-[45%] z-30 lg:space-y-[-25px] relative">
            {features.slice(0, 3).map((feat, index) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  // @ts-ignore
                  variants={cardVariants}
                  whileHover={{ y: -5, zIndex: 50 }}
                  className={`
                    group p-6 bg-white border border-slate-100 rounded-[32px] 
                    shadow-[0_15px_45px_rgba(15,76,129,0.05)] transition-all
                    lg:max-w-[420px] relative
                    ${index === 1 ? "lg:ml-16" : "lg:ml-0"} 
                    ${index === 2 ? "lg:ml-8" : ""}
                    max-lg:mb-4
                  `}
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 bg-light-bg rounded-2xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-500">
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-teal transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-[13px] text-brand-gray leading-relaxed opacity-90">
                        {feat.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Compact Globe Container */}
          <div className="w-full lg:w-[55%] lg:absolute lg:-right-8 lg:top-[-20px] z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              // Reduced Height from 800px to 580px
              className="relative h-[450px] lg:h-[580px] w-full bg-navy rounded-[48px] overflow-hidden border-[10px] border-white shadow-xl shadow-navy/10"
            >
              {/* Globe Visualization - Reduced Scale from 1.5 to 1.1 */}
              <div className="absolute inset-0 flex items-center justify-center translate-y-6 scale-[1.0] lg:scale-[1.1]">
                <WorldGlobe />
              </div>

              {/* Status HUD - Smaller padding */}
              <div className="absolute top-8 left-8 z-20">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-[2px]">
                    Network Active
                  </span>
                </div>
              </div>

              {/* Compact Bottom Dock */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[28px] p-5 flex justify-between items-center gap-4">
                  <div className="flex gap-6 overflow-x-auto no-scrollbar">
                    {certifications.map((cert) => (
                      <div key={cert} className="flex flex-col">
                        <span className="text-[8px] font-bold text-teal/60 uppercase">Standard</span>
                        <span className="text-[12px] font-bold text-white whitespace-nowrap">{cert}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-white text-navy px-6 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider whitespace-nowrap">
                    Intel
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Float-over Stats - Scaled down */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.6 }}
               className="absolute top-6 -right-2 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-50 z-40 max-lg:hidden"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <Activity size={18} className="text-teal" />
                  <div>
                    <p className="text-navy font-black text-2xl leading-none">500+</p>
                    <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest mt-0.5">SKUs</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 w-full" />
                <div className="flex items-center gap-4">
                  <Box size={18} className="text-navy" />
                  <div>
                    <p className="text-navy font-black text-2xl leading-none">50+</p>
                    <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest mt-0.5">Markets</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}