"use client";

import { Clock, Bike, Stethoscope, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

export function RetailSection() {
  return (
    <section id="retail" className="pt-0 pb-32 bg-[#FAF9F6] px-[60px] max-md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel>Local Care • Global Standards</SectionLabel>
            <SectionTitle>
              <p className="mt-4">
              <span className="text-navy block">Your Personal Pharmacy in</span>
              <span className="text-teal font-serif italic">Bandra West</span>
              </p>
            </SectionTitle>
          </div>
          <div className="col-span-12 lg:col-span-5 pb-2">
            <p className="text-brand-gray text-lg border-l-2 border-teal/20 pl-6">
              Experience a blend of traditional expertise and modern convenience. 
              From rare life-saving drugs to daily wellness, we bring the pharmacy to your door.
            </p>
          </div>
        </div>

        {/* The "Experience" Grid */}
        <div className="grid grid-cols-12 gap-6 mb-24">
          
          {/* Main Visual Card - The Storefront Feel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-8 bg-navy rounded-[40px] p-12 text-white relative overflow-hidden group min-h-[400px] flex flex-col justify-between shadow-2xl"
          >
            {/* Architectural Grid Decor */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Store Status: Open 24/7</span>
              </div>
              <MapPin className="text-teal/40 group-hover:text-teal transition-colors" size={32} />
            </div>

            <div className="relative z-10 max-w-lg">
              <h3 className="text-4xl font-serif mb-6 leading-tight">
                Swift Delivery Across <br />
                <span className="text-teal italic">The Queen of Suburbs</span>
              </h3>
              <div className="flex gap-4">
                <a href={WHATSAPP_URL} className="bg-teal text-navy px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                  Instant Order
                </a>
                <div className="flex -space-x-3 items-center ml-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-slate-200 flex items-center justify-center text-[10px] text-navy font-bold">
                            PH
                        </div>
                    ))}
                    <span className="ml-6 text-xs text-white/60 font-medium">Verified Pharmacists On-Call</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Features - Vertical Stack */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <FeatureCard 
              icon={<Bike className="text-teal" size={24} />}
              title="Express Logistics"
              desc="Free doorstep delivery within 5km of Bandra West."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-teal" size={24} />}
              title="Rare Medicine Finder"
              desc="Specialized sourcing for hard-to-find life-saving drugs."
            />
          </div>
        </div>

        {/* The "Location Console" */}
        <div className="bg-white rounded-[40px] border border-slate-100 p-8 lg:p-4 shadow-xl shadow-navy/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 lg:pl-8">
              <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center text-navy shrink-0 border border-slate-100">
                <Clock size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-teal uppercase tracking-widest mb-1">Standard Availability</p>
                <p className="text-xl font-bold text-navy">Open 365 Days • 24 Hours</p>
              </div>
            </div>

            <div className="h-12 w-px bg-slate-200 hidden lg:block" />

            <div className="text-center lg:text-left">
              <p className="text-[11px] font-bold text-brand-gray/60 uppercase tracking-widest mb-1">Visit Flagship Store</p>
              <p className="text-sm font-medium text-navy leading-relaxed">
                Shop No. 7, Comet Building, Opp. Lake View, <br />
                Guru Nanak Road, Bandra West, Mumbai 400050
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://maps.google.com" 
                target="_blank"
                className="flex items-center gap-3 bg-navy text-white px-8 py-5 rounded-[24px] font-bold text-xs uppercase tracking-widest hover:bg-teal transition-all group"
              >
                Get Directions <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-[35px] border border-slate-100 shadow-sm flex flex-col justify-between h-full group transition-all hover:shadow-lg hover:border-teal/20"
    >
      <div className="w-12 h-12 bg-light-bg rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-navy mb-2">{title}</h4>
        <p className="text-sm text-brand-gray leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}