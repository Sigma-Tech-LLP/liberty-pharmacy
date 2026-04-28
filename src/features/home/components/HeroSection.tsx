"use client";

import React, { useState, useEffect } from "react";
import { Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=90&w=2000&auto=format&fit=crop",
    title: "Global Merchant Exporter of",
    highlight: "WHO‑GMP Pharmaceuticals",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173aaf999ef?q=90&w=2000&auto=format&fit=crop",
    title: "Bridging the Gap in",
    highlight: "Global Healthcare Supply",
  },
  {
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=90&w=2000&auto=format&fit=crop",
    title: "Advanced Logistics for",
    highlight: "Medical & Surgical Exports",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Added pt-[80px] to account for the fixed Navbar height
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-[80px]">
      
      {/* BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] scale-110"
              style={{ backgroundImage: `url(${HERO_SLIDES[current].image})` }}
            />
            {/* High-visibility clinical overlays */}
            <div className="absolute inset-0 bg-white/40" /> 
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* STABLE CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge - Now properly spaced from Navbar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 mb-10 text-[11px] font-bold tracking-[2px] uppercase text-navy"
        >
          <Globe className="w-3.5 h-3.5 text-teal" />
          India&apos;s Trusted Export Partner
        </motion.div>

        {/* Headline Box with Fixed Height (Prevents jumping buttons) */}
        <div className="min-h-[160px] md:min-h-[200px] flex flex-col justify-center items-center w-full max-w-[950px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <h1 className="font-serif text-[clamp(32px,6vw,72px)] font-light leading-[1.1] text-navy">
                {HERO_SLIDES[current].title} <br />
                <span className="font-bold text-teal block mt-2 tracking-tight">
                  {HERO_SLIDES[current].highlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description - Locked below the headline box */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-brand-gray leading-relaxed max-w-[750px] mt-8 mb-12"
        >
          Sourcing high-quality medicines from India’s top 
          <span className="text-navy font-semibold"> WHO‑GMP & FDA facilities</span>. 
          Global delivery with complete regulatory compliance.
        </motion.p>

        {/* Buttons - These will no longer "jump" */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#inquiry"
            className="bg-navy text-white px-10 py-4 rounded-xl font-bold text-sm tracking-[1px] uppercase no-underline transition-all hover:bg-teal hover:shadow-2xl hover:shadow-navy/20 flex items-center gap-2"
          >
            Get Quote <ArrowRight size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            className="bg-white border border-border text-navy px-8 py-4 rounded-xl font-bold text-sm uppercase no-underline flex items-center gap-2.5 transition-all hover:bg-light-bg active:scale-95"
          >
            <WhatsAppIcon size={20} />
            WhatsApp Us
          </a>
        </div>

        {/* Indicators */}
        <div className="flex gap-3 mt-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === idx ? "w-12 bg-navy" : "w-3 bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}