import { ChevronRight, Shield, Globe2, Activity, MapPin } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-off-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* ─── Left Column: Content & Stats ─── */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 border border-navy/10 mb-6 animate-fade-up">
              <MapPin className="w-3 h-3 text-teal" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-navy-muted">Bandra to the World</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-navy mb-8 leading-[1.15] animate-fade-up-1 text-balance">
              The Heritage of Trust, <br />
              <span className="italic text-teal font-light">Evolved for Global Care.</span>
            </h2>

            <div className="space-y-6 text-brand-gray text-lg leading-relaxed animate-fade-up-2">
              <p>
                For decades, Liberty Medical has been a cornerstone of the Bandra community, 
                revered for its <span className="text-navy font-medium underline decoration-teal/30 underline-offset-4">24x7 dedication</span> and exhaustive product range. 
              </p>
              <p>
                Today, we bridge the gap between India's world-class pharmaceutical manufacturing 
                and global healthcare needs, serving as a <span className="text-navy font-medium">DGFT registered exporter</span>.
              </p>
            </div>

            {/* Micro-Trust Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12 py-8 border-y border-border animate-fade-up-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-teal">
                  <Globe2 className="w-4 h-4" />
                  <span className="font-sans font-bold text-navy text-2xl">30+</span>
                </div>
                <p className="text-xs font-mono uppercase tracking-tighter text-brand-gray">Countries Served[cite: 1]</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-teal">
                  <Activity className="w-4 h-4" />
                  <span className="font-sans font-bold text-navy text-2xl">24/7</span>
                </div>
                <p className="text-xs font-mono uppercase tracking-tighter text-brand-gray">Community Support[cite: 1]</p>
              </div>
            </div>
            
            <div className="mt-12 animate-fade-up-4">
              <button className="group relative h-14 px-8 rounded-full bg-navy text-white font-sans font-bold text-sm transition-all duration-500 flex items-center gap-3 overflow-hidden shadow-2xl shadow-navy/20">
                <span className="relative z-10">Explore Our Export Vision[cite: 1]</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* ─── Right Column: Premium Visual ─── */}
          <div className="relative animate-fade-up-2 group">
            {/* Background Decorative Rings */}
            <div className="absolute -inset-4 border border-navy/5 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute -inset-8 border border-navy/5 rounded-3xl -z-20 group-hover:scale-110 transition-transform duration-1000 delay-75" />

            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-navy-mid border border-border flex items-center justify-center relative shadow-2xl">
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 via-transparent to-teal/5" />
              
              <div className="text-center">
                <div className="font-serif italic text-navy/10 text-6xl md:text-8xl select-none leading-none">Liberty</div>
                <div className="font-serif italic text-navy/10 text-6xl md:text-8xl select-none leading-none -mt-4">Legacy</div>
              </div>
              
              {/* Premium Floating Trust Card */}
              <div className="glass absolute bottom-10 left-10 right-10 p-8 rounded-2xl border-white/40 shadow-[0_32px_64px_-15px_rgba(2,6,23,0.2)] animate-fade-up-5 translate-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-lg shadow-teal/30 shrink-0">
                    <Shield size={32} strokeWidth={1.5} />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="font-serif text-2xl text-navy mb-1 leading-tight">Accredited Excellence</h4>
                    <p className="text-[10px] font-mono text-brand-gray uppercase tracking-[0.2em] mb-3 leading-none">
                       IEC & DGFT Registered[cite: 1]
                    </p>
                    <div className="h-1 w-12 bg-teal/30 mx-auto md:mx-0 rounded-full" />
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-navy/5 flex justify-between items-center">
                   <span className="text-[10px] font-mono text-brand-gray uppercase tracking-widest">Compliant[cite: 1]</span>
                   <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="w-1 h-1 rounded-full bg-teal" />
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}