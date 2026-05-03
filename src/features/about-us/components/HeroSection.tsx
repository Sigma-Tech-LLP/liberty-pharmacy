"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const carouselMedia = [
  {
    type: 'video',
    src: '/assets/hero-supply-chain.mp4',
    fallback: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1579165466541-74e24690554a?auto=format&fit=crop&q=80',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80',
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselMedia.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden bg-slate-50 text-slate-900">
      {/* ─── Background Layer (Light Mode) ─── */}
      <div className="absolute inset-0 z-0">
        {carouselMedia.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-30 md:opacity-40' : 'opacity-0'
            }`}
          >
            {media.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover scale-105"
                poster={media.fallback}
              >
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={media.src}
                alt="Liberty Medical Supply"
                className="h-full w-full object-cover scale-105"
              />
            )}
          </div>
        ))}
        {/* Adjusted Overlays for Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/40 to-slate-50 z-10 md:bg-gradient-to-r md:from-slate-50 md:via-slate-50/50 md:to-transparent" />
      </div>

      {/* ─── Foreground Content ─── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-28 pb-40 md:py-32">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          {/* Tagline */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            <span className="font-mono text-teal-700 uppercase tracking-widest text-[10px] md:text-xs font-bold">
              Established 24x7 Pharmacy
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 text-slate-900 leading-[1.1] tracking-tight">
            From Bandra to <br className="hidden md:block" />
            <span className="italic text-teal-600 font-light">
              the World.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-xl lg:max-w-2xl mb-8 md:mb-12 mx-auto md:mx-0">
            Liberty Medical & Super Market is expanding its vision from a trusted neighborhood 
            pharmacy to a recognized global exporter, supplying 30+ countries.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white h-12 md:h-14 px-8 md:px-10 rounded-full font-sans text-sm font-bold transition-all shadow-lg shadow-teal-600/20 flex items-center justify-center gap-3 active:scale-95">
              Get Export Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-full font-sans text-sm font-bold transition-all border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center gap-3 shadow-sm active:scale-95 group">
              View Products
              <PlayCircle className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* ─── Bottom Layout ─── */}
      <div className="absolute bottom-0 w-full z-30">
        {/* Slide Indicators */}
        <div className="container mx-auto px-6 mb-4 hidden sm:flex gap-2 justify-center md:justify-start">
          {carouselMedia.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} className="p-1">
              <div className={`h-1 transition-all duration-500 rounded-full ${
                i === activeSlide ? 'w-8 bg-teal-600' : 'w-4 bg-slate-300'
              }`} />
            </button>
          ))}
        </div>

        {/* Trust Strip (Inverted) */}
        <div className="relative bg-white/80 backdrop-blur-md border-t border-slate-200 py-4 md:py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-between items-center gap-8 overflow-x-auto no-scrollbar">
              {[
                "WHO-GMP Compliant",
                "PAN India Sourcing",
                "Bulk Orders Welcome",
                "Export Ready"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-slate-500 font-semibold whitespace-nowrap">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS fix for scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}