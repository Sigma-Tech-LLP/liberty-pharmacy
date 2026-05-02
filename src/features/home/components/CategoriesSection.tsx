"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, ClipboardList } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories } from "../data/categories";

export function CategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="categories" className="py-16 md:py-24 bg-white px-5 md:px-[60px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Side: Sticky Info (Moves to top on mobile) */}
          <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mt-4 leading-tight">
              Therapeutic <br className="hidden md:block" /> 
              <span className="font-bold">Segments</span>
            </h2>
            <p className="text-brand-gray mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-md">
              Precision classification of our pharmaceutical exports. 
              <span className="hidden md:inline"> Move your cursor over the segments to preview.</span>
            </p>
          </div>

          {/* Right Side: Interactive List */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-border">
              {categories.map((cat, idx) => (
                <div
                  key={cat.name}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative border-b border-border py-8 md:py-10 cursor-pointer"
                >
                  {/* Background Hover Glow (Desktop Only) */}
                  <div className="hidden md:block">
                    {hoveredIndex === idx && (
                      <motion.div 
                        layoutId="hoverBg"
                        className="absolute inset-0 bg-light-bg/50 -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between px-2 md:px-4 gap-4">
                    
                    {/* Left: Index and Title */}
                    <div className="flex items-center gap-5 md:gap-8 shrink-0">
                      <span className="font-mono text-xs md:text-sm text-teal/40 font-bold w-4 md:w-6">
                        0{idx + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif text-navy transition-all duration-500 group-hover:text-teal group-hover:translate-x-1 md:group-hover:translate-x-2">
                        {cat.name}
                      </h3>
                    </div>

                    {/* Center: Description - Visible on Mobile, Hover on Desktop */}
                    <div className="flex-1 md:px-12 relative block md:hidden xl:block">
                      <div className="md:absolute md:inset-y-0 md:flex md:items-center">
                        <AnimatePresence mode="wait">
                          {(hoveredIndex === idx || typeof window !== 'undefined' && window.innerWidth < 768) && (
                            <motion.p
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-[13px] md:text-[13px] text-brand-gray leading-relaxed italic"
                            >
                              {cat.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Right: Interaction Icon */}
                    <div className="absolute right-2 top-8 md:relative md:top-0 shrink-0 flex items-center justify-center">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center transition-all duration-500 transform-gpu ${hoveredIndex === idx ? 'bg-navy border-navy rotate-45 scale-110' : ''}`}>
                        <Plus size={18} className={hoveredIndex === idx ? 'text-white' : 'text-navy'} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Sourcing CTA - Responsive full-width bar */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 p-6 md:p-10 bg-navy rounded-[1.5rem] md:rounded-[2rem] flex flex-col md:flex-row items-start md:items-center justify-between group cursor-pointer overflow-hidden relative gap-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-5 md:gap-8 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                    <ClipboardList className="text-teal" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl md:text-2xl tracking-tight">Custom Sourcing Requirements</h4>
                    <p className="text-white/50 text-xs md:text-sm mt-1">Direct access to Pan-India manufacturing network.</p>
                  </div>
                </div>
                
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-navy flex items-center justify-center relative z-10 transition-transform md:group-hover:translate-x-2 self-end md:self-auto">
                  <ArrowUpRight size={20}  />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}