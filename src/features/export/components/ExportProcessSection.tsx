"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, FileSearch, CheckSquare, 
  Settings2, Ship, ArrowRight 
} from 'lucide-react';

const stepsData = [
  {
    title: "Requirement",
    detail: "Submit product list & quantities.",
    icon: <ClipboardList size={20} />,
    color: "from-blue-500 to-navy"
  },
  {
    title: "Quotation",
    detail: "Get competitive bulk pricing.",
    icon: <FileSearch size={20} />,
    color: "from-teal to-emerald-600"
  },
  {
    title: "Order Terms",
    detail: "Finalize Proforma & payments.",
    icon: <CheckSquare size={20} />,
    color: "from-navy to-navy-muted"
  },
  {
    title: "Compliance",
    detail: "Regulatory & COA processing.",
    icon: <Settings2 size={20} />,
    color: "from-teal-light to-teal"
  },
  {
    title: "Logistics",
    detail: "Air/Sea global dispatch.",
    icon: <Ship size={20} />,
    color: "from-navy-muted to-navy"
  }
];

export default function ExportProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-teal font-mono text-[10px] tracking-[0.3em] uppercase mb-4 block">
            Operational Workflow
          </span>
          <h2 className="text-4xl font-serif text-navy">
            A Structured Path to <span className="text-teal italic">Global Supply</span>
          </h2>
        </div>

        <div className="relative">
          {/* Animated Background Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-border z-0">
            <motion.div 
              className="h-full bg-teal"
              initial={{ width: "0%" }}
              animate={{ width: hoveredIndex !== null ? `${(hoveredIndex / (stepsData.length - 1)) * 100}%` : "0%" }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {stepsData.map((step, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group cursor-default"
              >
                <div className="flex flex-col items-center lg:items-start">
                  {/* Step Circle */}
                  <motion.div 
                    animate={{ 
                      scale: hoveredIndex === i ? 1.1 : 1,
                      backgroundColor: hoveredIndex === i ? "#0d9488" : "#020617" 
                    }}
                    className="w-24 h-24 rounded-3xl flex items-center justify-center text-white mb-8 relative transition-all duration-500 shadow-xl group-hover:shadow-teal/20"
                  >
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-navy text-navy flex items-center justify-center text-xs font-black">
                      0{i + 1}
                    </div>
                    {step.icon}
                  </motion.div>

                  {/* Content Box */}
                  <div className="text-center lg:text-left lg:pr-6">
                    <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${hoveredIndex === i ? 'text-teal' : 'text-navy'}`}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-brand-gray leading-relaxed mb-4">
                      {step.detail}
                    </p>
                    
                    {/* Subtle "Next" Indicator for Desktop */}
                    {i < stepsData.length - 1 && (
                      <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-slate-300 group-hover:text-teal transition-colors">
                        NEXT STEP <ArrowRight size={10} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Summary Bar */}
        <div className="mt-14 p-6 bg-light-bg rounded-2xl border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <p className="text-sm font-medium text-navy-muted">
              Current Lead Time: <span className="text-navy font-bold">48 Hours for Quotation</span>
            </p>
          </div>
          <div className="flex gap-8">
             <div className="text-center">
               <p className="text-[10px] text-slate-400 uppercase font-bold">Avg. Dispatch</p>
               <p className="text-sm font-bold text-navy">7-10 Days</p>
             </div>
             <div className="text-center">
               <p className="text-[10px] text-slate-400 uppercase font-bold">Doc Turnaround</p>
               <p className="text-sm font-bold text-navy">3-5 Days</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}