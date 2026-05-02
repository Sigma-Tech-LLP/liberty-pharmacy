"use client";

import { useState, useEffect } from "react";
import { Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

const HERO_SLIDES = [
  {
    image: "https://plus.unsplash.com/premium_photo-1682310231531-148748e7684f?q=80&w=1812&auto=format&fit=crop",
    title: "Global Merchant Exporter of",
    highlight: "WHO‑GMP Pharmaceuticals",
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1740&auto=format&fit=crop",
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
    // Changed pt-[80px] to a responsive pt and ensured min-h-screen works with mobile address bars
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-24">
      
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
            {/* Improved Gradient Overlays for Mobile Readability */}
            <div className="absolute inset-0 bg-white/30 md:bg-white/10" /> 
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* STABLE CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-5 md:px-6 flex flex-col items-center text-center">
        
        {/* Badge - Adjusted size for mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-10 text-[10px] md:text-[11px] font-bold tracking-[1.5px] md:tracking-[2px] uppercase text-navy"
        >
          <Globe className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal" />
          India&apos;s Trusted Export Partner
        </motion.div>

        {/* Headline Box - Height adjusted for smaller screens */}
        <div className="min-h-[140px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-center items-center w-full max-w-[950px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <h1 className="font-serif text-[clamp(28px,8vw,72px)] font-light leading-[1.1] text-navy">
                {HERO_SLIDES[current].title} <br />
                <span className="font-bold text-teal block mt-1 md:mt-2 tracking-tight">
                  {HERO_SLIDES[current].highlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description - Adjusted margin and text size */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-xl text-brand-gray leading-relaxed max-w-[700px] mt-6 md:mt-8 mb-8 md:mb-12"
        >
          Sourcing high-quality medicines from India’s top 
          <span className="text-navy font-semibold"> WHO‑GMP & FDA facilities</span>. 
          <span className="hidden sm:inline"> Global delivery with complete regulatory compliance.</span>
        </motion.p>

        {/* Buttons - Stacked on mobile, side-by-side on tablet/desktop */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#inquiry"
            className="bg-navy text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm tracking-[1px] uppercase no-underline transition-all hover:bg-teal hover:shadow-xl flex items-center justify-center gap-2"
          >
            Get Quote <ArrowRight size={18} />
          </a>
          <a
            href={WHATSAPP_URL}
            className="bg-white/80 backdrop-blur-sm border border-border text-navy px-8 py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase no-underline flex items-center justify-center gap-2.5 transition-all hover:bg-white active:scale-95"
          >
            <WhatsAppIcon size={20} />
            WhatsApp Us
          </a>
        </div>

        {/* Indicators - Scaled down for mobile */}
        <div className="flex gap-2.5 md:gap-3 mt-12 md:mt-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === idx ? "w-8 md:w-12 bg-navy" : "w-2 md:w-3 bg-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}