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
    icon: <Activity />,
    features: ["Cytotoxics", "Targeted Therapy"],
    stats: { capacity: "500k units/mo", compliance: "EU-GMP" }
  },
  {
    id: "vac",
    title: "Vaccines",
    desc: "Validated cold chain logistics for EPI and specialty vaccines (+2°C to +8°C).",
    icon: <ThermometerSnowflake />,
    features: ["EPI Vaccines", "Validated Packing"],
    stats: { capacity: "200k vials/mo", compliance: "WHO-PQ" }
  },
  {
    id: "chr",
    title: "Chronic Care",
    desc: "High-volume cardiovascular and diabetic management formulations.",
    icon: <Beaker />,
    features: ["Statins", "Antidiabetics"],
    stats: { capacity: "1M+ tablets/mo", compliance: "ISO 9001" }
  }
];

export default function TabularExportExplorer() {
  const [activeId, setActiveId] = useState(categoryData[0].id);
  const activeData = categoryData.find(c => c.id === activeId) || categoryData[0];

  return (
    <section className="py-12 md:py-24 bg-white px-4 md:px-[60px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-teal text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">Supply Verticals</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy">Export Portfolio</h2>
        </div>

        {/* TABULAR BUTTON BAR */}
        /* --- UPDATED TABULAR BUTTON BAR --- */
<div className="flex flex-nowrap w-full border border-slate-200 rounded-t-[20px] md:rounded-t-[30px] overflow-x-auto no-scrollbar bg-slate-50/50">
  {categoryData.map((cat) => (
    <button
      key={cat.id}
      onClick={() => setActiveId(cat.id)}
      className={`flex-none md:flex-1 flex items-center justify-start gap-3 md:gap-4 p-4 md:p-8 transition-all relative border-r border-slate-200 last:border-0 min-w-[140px] md:min-w-0
        ${activeId === cat.id ? 'bg-white' : 'hover:bg-white/50'}
      `}
    >
      <div className={`p-2 md:p-2.5 rounded-lg transition-colors shrink-0 ${
        activeId === cat.id ? 'bg-teal text-white' : 'bg-slate-200 text-slate-500'
      }`}>
        {React.cloneElement(cat.icon as React.ReactElement, { size: 16 })}
      </div>
      
      <div className="text-left">
        <p className={`text-xs md:text-base font-bold whitespace-nowrap ${
          activeId === cat.id ? 'text-navy' : 'text-slate-400'
        }`}>
          {cat.title}
        </p>
        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 mt-0.5">
          Segment
        </p>
      </div>

      {/* Bottom Line Indicator */}
      {activeId === cat.id && (
        <motion.div 
          layoutId="activeTabBorder" 
          className="absolute bottom-0 left-0 right-0 h-1 bg-teal" 
        />
      )}
    </button>
  ))}
</div>

        {/* CONTENT STAGE */}
        <div className="border-x border-b border-white/10 rounded-b-[20px] md:rounded-b-[30px] p-6 md:p-12 bg-[#0F1E35] min-h-[400px] relative overflow-hidden">
  {/* Subtle Background Glow */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 blur-[100px] rounded-full pointer-events-none" />
  
  <AnimatePresence mode="wait">
    <motion.div
      key={activeId}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10"
    >
      {/* Info Side */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-4xl font-serif text-white leading-tight italic">
          {activeData.title} <span className="font-sans not-italic font-light text-white/30">Supply</span>
        </h3>
        <p className="text-white/60 text-base md:text-lg leading-relaxed">
          {activeData.desc}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {activeData.features.map(f => (
            <span key={f} className="text-[10px] font-black uppercase px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-teal">
              {f}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
          <div>
            <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-2">MoQ / Capacity</p>
            <p className="text-white font-bold">{activeData.stats.capacity}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-2">Certification</p>
            <p className="text-teal font-bold flex items-center gap-1.5">
              <ShieldCheck size={16} /> {activeData.stats.compliance}
            </p>
          </div>
        </div>
      </div>

      {/* Aesthetic Card Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CapabilityCard title="Bulk Export" label="Institutional" icon={<BarChart3 />} />
        <CapabilityCard title="Cold Chain" label="Validated" icon={<ThermometerSnowflake />} />
        <CapabilityCard title="Dossiers" label="CTD / ACTD" icon={<FileText />} />
        <CapabilityCard title="Global Ops" label="Pan-India" icon={<Users />} />
      </div>
    </motion.div>
  </AnimatePresence>
</div>

      </div>
    </section>
  );
}

function CapabilityCard({ title, label, icon }: { title: string, label: string, icon: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-teal/50 hover:bg-white/[0.06] transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:bg-teal group-hover:text-[#0F1E35] transition-all duration-300">
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </div>
      <p className="text-white font-bold text-sm">{title}</p>
      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1 group-hover:text-teal/80 transition-colors">
        {label}
      </p>
    </div>
  );
}