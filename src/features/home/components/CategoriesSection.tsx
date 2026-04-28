"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, ClipboardList } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories } from "../data/categories";

export function CategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    
    <section id="categories" className="py-24 bg-white px-[60px] max-md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12">
          
          {/* Left Side: Sticky Info */}
          <div className="col-span-4 max-lg:col-span-12 lg:sticky lg:top-32 h-fit">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="font-serif text-5xl font-light text-navy mt-4 leading-tight">
              Therapeutic <br /> 
              <span className="font-bold">Segments</span>
            </h2>
            <p className="text-brand-gray mt-6 text-lg leading-relaxed">
              Precision classification of our pharmaceutical exports. 
              Move your cursor over the segments to preview.
            </p>
          </div>

          {/* Right Side: Fixed-Width Interactive List */}
          <div className="col-span-8 max-lg:col-span-12">
            <div className="border-t border-border">
              {categories.map((cat, idx) => (
                <div
                  key={cat.name}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative border-b border-border py-10 cursor-pointer"
                >
                  {/* Background Hover Glow - Uses LayoutId to animate smoothly between rows */}
                  {hoveredIndex === idx && (
                    <motion.div 
                      layoutId="hoverBg"
                      className="absolute inset-0 bg-light-bg/50 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  {/* Main Row Container - Justify-Between ensures the Icon never moves */}
                  <div className="flex items-center justify-between px-4">
                    
                    {/* Left: Index and Title */}
                    <div className="flex items-center gap-8 shrink-0">
                      <span className="font-mono text-sm text-teal/40 font-bold w-6">
                        0{idx + 1}
                      </span>
                      <h3 className="text-3xl font-serif text-navy transition-all duration-500 group-hover:text-teal group-hover:translate-x-2">
                        {cat.name}
                      </h3>
                    </div>

                    {/* Center: Description (Absolute to prevent pushing the Plus icon) */}
                    <div className="flex-1 px-12 relative hidden xl:block">
                      <AnimatePresence mode="wait">
                        {hoveredIndex === idx && (
                          <motion.p
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-[13px] text-brand-gray leading-relaxed absolute inset-y-0 flex items-center italic"
                          >
                            {cat.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Right: Interaction Icon (Anchored) */}
                    <div className="shrink-0 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-500 transform-gpu ${hoveredIndex === idx ? 'bg-navy border-navy rotate-45 scale-110 shadow-lg shadow-navy/10' : ''}`}>
                        <Plus size={20} className={hoveredIndex === idx ? 'text-white' : 'text-navy'} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Sourcing CTA - Modern full-width bar */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="mt-12 p-10 bg-navy rounded-[2rem] flex items-center justify-between group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-8 relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <ClipboardList className="text-teal" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-2xl tracking-tight">Custom Sourcing Requirements</h4>
                    <p className="text-white/50 text-sm mt-1">Leverage our direct Pan-India manufacturing network.</p>
                  </div>
                </div>
                
                <div className="w-14 h-14 rounded-full bg-white text-navy flex items-center justify-center relative z-10 transition-transform group-hover:translate-x-2">
                  <ArrowUpRight size={24} />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}