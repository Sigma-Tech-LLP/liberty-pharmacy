"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const regions = [
  { name: "CIS Countries", desc: "Oncology, antivirals, and specialty meds for Central Asia." },
  { name: "African Countries", desc: "Bulk supply for West, East, and Central Africa with documentation." },
  { name: "Latin America", desc: "Branded and generic formulations for distributors and agencies." },
  { name: "South East Asia", desc: "Competitively priced bulk pharmaceutical supplies for wholesalers." },
  { name: "Middle East", desc: "Chronic care, oncology, and vaccines for GCC and surrounding countries." }
];

export default function GlobalNetworkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          {/* --- LEFT SECTION --- */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32">
            <div className="flex items-center gap-3 text-teal mb-6">
              <div className="w-10 h-[1.5px] bg-teal" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Global Reach</span>
            </div>
            
            <h2 className="text-4xl xl:text-5xl font-serif text-navy leading-[1.1] mb-8">
              Our Pharmaceutical <br /> 
              <span className="text-teal italic">Export Network</span>
            </h2>
            
            <p className="text-brand-gray text-lg leading-relaxed max-w-md">
              Supplying essential medicines across regulated and semi-regulated markets with complete regulatory compliance.
            </p>
          </div>

          {/* --- RIGHT SECTION --- */}
          {/* We use motion.div here with layout to ensure sibling items slide smoothly */}
          <motion.div layout className="w-full lg:w-[60%] border-t border-navy/10">
            {regions.map((region, i) => (
              <motion.div
                layout // This is the magic key: it animates the container resize
                key={region.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-b border-navy/10 cursor-pointer"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start justify-between py-8 px-4 lg:px-8 transition-colors duration-500 group-hover:bg-slate-50 min-h-[100px]">
                  <div className="flex gap-6 lg:gap-8">
                    <span className={`font-mono text-xs mt-2 transition-colors duration-300 ${hoveredIndex === i ? 'text-teal' : 'text-slate-300'}`}>
                      0{i + 1}
                    </span>
                    
                    <div className="space-y-3">
                      <h4 className={`text-xl lg:text-2xl font-bold transition-all duration-500 ${hoveredIndex === i ? 'text-navy translate-x-1' : 'text-slate-400'}`}>
                        {region.name}
                      </h4>
                      
                      <AnimatePresence mode="wait">
                        {hoveredIndex === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <p className="text-brand-gray text-sm max-w-md leading-relaxed pb-2">
                              {region.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className={`mt-2 shrink-0 transition-all duration-500 ${hoveredIndex === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shadow-lg group-hover:bg-teal">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                {/* Accent Bar */}
                {hoveredIndex === i && (
                  <motion.div 
                    layoutId="activeNetworkBar"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-teal z-20"
                    transition={{ type: "spring", stiffness: 300, damping: 35 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}