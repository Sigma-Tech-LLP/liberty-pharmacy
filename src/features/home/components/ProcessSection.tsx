"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { processSteps } from "../data/process-steps";
import { CheckCircle2, Zap, PackageCheck, Ship } from "lucide-react";

const stepIcons = [Zap, CheckCircle2, PackageCheck, Ship];

export function ProcessSection() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="px-[60px] py-[100px] bg-white max-md:px-6 max-md:py-[80px] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header - More Compact */}
        <div className="flex flex-col items-center text-center mb-20">
          <SectionLabel>The Liberty Standard</SectionLabel>
          <SectionTitle>
            <p className="text-navy">
              Seamless <strong>Export Logic</strong>
            </p>
          </SectionTitle>
        </div>

        <div className="relative">
          {/* CENTRAL LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-100 -translate-x-1/2 max-lg:left-6">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-teal via-navy to-teal w-full"
            />
          </div>

          {/* Reduced vertical spacing from space-y-32 to space-y-16 */}
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index] || CheckCircle2;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`flex items-center justify-between w-full max-lg:flex-col max-lg:items-start ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Card - Narrower width (40%) and tighter padding */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[40%] max-lg:w-full max-lg:pl-16 relative group"
                  >
                    <div className="bg-white p-7 rounded-[24px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 hover:border-teal/20 relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-navy/5 rounded-xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-teal font-bold tracking-widest text-[11px]">
                          STEP 0{step.num}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-brand-gray leading-relaxed text-sm">
                        {step.desc}
                      </p>
                    </div>

                    {/* Smaller decorative number */}
                    <span className="absolute -top-6 -right-4 text-[80px] font-black text-slate-50 -z-0 pointer-events-none select-none group-hover:text-teal/5 transition-colors">
                      {step.num}
                    </span>
                  </motion.div>

                  {/* Central Node - Smaller and tighter */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 max-lg:left-6">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-full h-full bg-white border-2 border-slate-100 rounded-full flex items-center justify-center relative z-20 shadow-lg"
                    >
                      <div className="w-2 h-2 bg-teal rounded-full" />
                    </motion.div>
                  </div>

                  <div className="w-[40%] max-lg:hidden" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Lead Time - Tighter margin */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4 bg-navy px-6 py-4 rounded-xl shadow-xl">
            <Zap size={18} className="text-teal" />
            <div>
              <p className="text-white font-bold text-xs tracking-wide">
                10-14 Days Lead Time
              </p>
              <p className="text-teal/70 text-[10px] font-medium uppercase tracking-[1px]">
                End-to-End Delivery
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}