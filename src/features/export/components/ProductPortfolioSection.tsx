"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ThermometerSnowflake, BarChart3, FileText, Users, 
  ChevronRight, Activity, Beaker, ShieldCheck 
} from 'lucide-react';

const categoryData = [
  {
    id: "onc",
    title: "Oncology",
    desc: "Global supply of cytotoxic drugs and biosimilars for regulated markets.",
    icon: <Activity className="w-5 h-5" />,
    features: ["Cytotoxics", "Targeted Therapy"],
    stats: { capacity: "500k units/mo", compliance: "EU-GMP" }
  },
  {
    id: "vac",
    title: "Vaccines",
    desc: "Validated cold chain logistics for EPI and specialty vaccines (+2°C to +8°C).",
    icon: <ThermometerSnowflake className="w-5 h-5" />,
    features: ["EPI Vaccines", "Validated Packing"],
    stats: { capacity: "200k vials/mo", compliance: "WHO-PQ" }
  },
  {
    id: "chr",
    title: "Chronic Care",
    desc: "High-volume cardiovascular and diabetic management formulations.",
    icon: <Beaker className="w-5 h-5" />,
    features: ["Statins", "Antidiabetics"],
    stats: { capacity: "1M+ tablets/mo", compliance: "ISO 9001" }
  }
];

const capabilities = [
  { title: "Bulk Export", icon: <BarChart3 size={18} />, label: "High Volume" },
  { title: "Dossiers", icon: <FileText size={18} />, label: "CTD/ACTD" },
  { title: "Partners", icon: <Users size={18} />, label: "Global" },
];

export default function CompactExportExplorer() {
  const [activeId, setActiveId] = useState(categoryData[0].id);
  const activeData = categoryData.find(c => c.id === activeId) || categoryData[0];

  return (
    <section className="py-20 bg-navy overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Minimalist */}
        <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <span className="text-teal text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Supply Verticals</span>
            <h2 className="text-4xl font-serif text-white">Export Portfolio</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs text-right hidden md:block">
            Streamlined procurement for international distributors and hospital groups.
          </p>
        </div>

        {/* Explorer Container */}
        <div className="grid lg:grid-cols-[380px,1fr] gap-0 border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-md">
          
          {/* LEFT: Side Navigation (The List) */}
          <div className="border-r border-white/10 bg-white/[0.02]">
            {categoryData.map((cat) => (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveId(cat.id)}
                className={`w-full flex items-center gap-4 p-8 transition-all duration-500 relative group
                  ${activeId === cat.id ? 'bg-teal/10' : 'hover:bg-white/[0.05]'}
                `}
              >
                {/* Active Indicator Bar */}
                {activeId === cat.id && (
                  <motion.div 
                    layoutId="activeBar" 
                    className="absolute left-0 w-1 h-full bg-teal" 
                  />
                )}
                
                <div className={`p-3 rounded-xl transition-colors duration-500 ${activeId === cat.id ? 'bg-teal text-navy' : 'bg-white/5 text-slate-500'}`}>
                  {cat.icon}
                </div>
                
                <div className="text-left">
                  <h3 className={`font-bold transition-colors ${activeId === cat.id ? 'text-white' : 'text-slate-500'}`}>
                    {cat.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">Pharmaceuticals</p>
                </div>

                <ChevronRight className={`ml-auto w-4 h-4 transition-all duration-300 ${activeId === cat.id ? 'translate-x-0 opacity-100 text-teal' : '-translate-x-2 opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* RIGHT: Dynamic Stage */}
          <div className="p-12 relative flex flex-col justify-between min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12"
              >
                {/* Content info */}
                <div>
                  <h3 className="text-3xl font-serif text-white mb-6 italic">{activeData.title} Supply Details</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {activeData.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeData.features.map(f => (
                      <span key={f} className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 text-teal-light">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">MoQ / Capacity</p>
                      <p className="text-white font-medium">{activeData.stats.capacity}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Standard</p>
                      <p className="text-teal font-medium flex items-center gap-1">
                        <ShieldCheck size={14} /> {activeData.stats.compliance}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro-Cards (Right Side of Stage) */}
                <div className="grid gap-4">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-teal/30 transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-navy transition-all">
                        {cap.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{cap.title}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{cap.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Footer of Explorer */}
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
               <button className="text-xs font-bold text-teal flex items-center gap-2 group">
                 DOWNLOAD TECHNICAL SPECIFICATIONS 
                 <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <span className="text-[10px] font-mono text-slate-600">ID: EXP_REF_{activeId.toUpperCase()}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}