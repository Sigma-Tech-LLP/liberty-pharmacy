import { Clock, Globe, Heart, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "Global Pharma Export",
    icon: <Globe size={32} />,
    description: "Operating as a premier Indian exporter, bridging WHO-GMP manufacturers with international medical needs.",
    details: ["30+ Countries", "Cold-Chain Expert", "DGFT Certified"],
    color: "bg-navy",
    textColor: "text-white",
    cite: ""
  },
  {
    id: "02",
    title: "24x7 Retail Hub",
    icon: <Clock size={32} />,
    description: "The beating heart of Bandra's healthcare, offering round-the-clock prescription fulfillment and surgical supplies.",
    details: ["Midnight Access", "Acute Care Specialists", "Bandra Legacy"],
    color: "bg-white",
    textColor: "text-navy",
    cite: ""
  },
  {
    id: "03",
    title: "Noble Wellness",
    icon: <Heart size={32} />,
    description: "A curated division for the conscious consumer, focusing on nutraceuticals, Ayurveda, and premium supplements.",
    details: ["Organic Certified", "Ayurvedic Care", "Fitness Nutrition"],
    color: "bg-light-bg",
    textColor: "text-navy",
    cite: ""
  }
];

export default function PillarSection() {
  return (
    <section className="relative py-8 md:py-14 bg-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[20rem] leading-none uppercase tracking-tighter">Strategic</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal">Our Core Verticals</span>
            </div>
            <h3 className="font-serif text-5xl md:text-7xl text-navy leading-none">
              Strategic <br /> <span className="italic font-light">Foundations.</span>
            </h3>
          </div>
          <p className="max-w-xs text-brand-gray text-sm leading-relaxed font-sans border-l border-border pl-6">
            Blending traditional pharmacy values with modern global logistics to redefine healthcare accessibility.[cite: 1]
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-0 border border-border rounded-[32px] overflow-hidden shadow-2xl shadow-navy/5">
          {pillars.map((pillar, idx) => (
            <div 
              key={pillar.id}
              className={`group relative p-12 md:p-16 transition-all duration-700 border-b lg:border-b-0 ${idx !== 2 ? 'lg:border-r border-border' : ''} ${pillar.color} ${pillar.textColor}`}
            >
              {/* Pillar Number */}
              <span className={`absolute top-12 right-12 font-mono text-xs opacity-40 group-hover:text-teal transition-colors`}>
                {pillar.id}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className={`mb-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-teal group-hover:text-white ${pillar.textColor === 'text-white' ? 'bg-white/10 text-teal-light' : 'bg-navy/5 text-teal'}`}>
                  {pillar.icon}
                </div>

                <h4 className="font-serif text-3xl mb-6 group-hover:italic transition-all">
                  {pillar.title}
                </h4>

                <p className={`text-base mb-10 leading-relaxed opacity-80 ${pillar.textColor === 'text-white' ? 'font-light' : 'font-normal'}`}>
                  {pillar.description} {pillar.cite}
                </p>

                {/* Technical Meta-details */}
                <div className="space-y-3 mb-10">
                  {pillar.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3">
                      <div className={`h-1 w-1 rounded-full ${pillar.textColor === 'text-white' ? 'bg-teal-light' : 'bg-teal'}`} />
                      <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">{detail}[cite: 1]</span>
                    </div>
                  ))}
                </div>

                <button className={`flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest transition-all ${pillar.textColor === 'text-white' ? 'hover:text-teal-light' : 'hover:text-teal'}`}>
                  Learn More
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              {/* Hover Background Effect for White Cards */}
              {pillar.color === 'bg-white' && (
                <div className="absolute inset-0 bg-light-bg scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 -z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}