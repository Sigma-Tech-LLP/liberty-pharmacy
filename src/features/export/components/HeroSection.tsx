import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-border">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-navy-mid/40 -skew-x-12 translate-x-20 z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 text-xs font-bold tracking-[0.2em] text-teal bg-teal/10 rounded-full animate-fade-up">
            <ShieldCheck size={14} /> WHO-GMP COMPLIANT SOURCING
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-medium text-navy mb-8 animate-fade-up-1 leading-[1.1]">
            From Bandra to the World: <br /> 
            <span className="text-teal italic">Global Pharma Export</span>
          </h1>
          <p className="text-xl text-brand-gray mb-10 animate-fade-up-2 leading-relaxed max-w-2xl">
            Liberty Medical & Super Market is a Government recognized **Two Star Export House**. We bridge the gap between India's world-class manufacturing and global healthcare needs.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-3">
            <button className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-muted transition-all flex items-center gap-2 shadow-lg shadow-navy/20">
              Get Export Quote <ArrowRight size={18} />
            </button>
            <button className="border border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all">
              View Product List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}