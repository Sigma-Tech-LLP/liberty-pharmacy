"use client";
import React from 'react';

export default function HeroSection() {
  return (
    <header className="relative w-full bg-white pt-10 pb-10 md:pb-32 overflow-hidden border-b border-border">
      {/* ─── Background Layer: Medical Imagery ─── */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Medical Research and Equipment"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Soft white gradient to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="h-px w-12 bg-teal" />
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-navy/60 font-bold">
              Global Supply Portfolio
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-8xl mb-8 text-navy leading-[1.1] animate-fade-up-1">
            Pharmaceutical <br />
            <span className="italic text-teal font-light underline decoration-teal/10 underline-offset-8">
              Inventory.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-brand-gray text-lg md:text-xl leading-relaxed animate-fade-up-2">
            Sourcing high-quality medicines from WHO-GMP compliant manufacturers for 
            international markets in 30+ countries.
          </p>

          {/* Institutional Trust Signal */}
          <div className="mt-12 flex flex-wrap gap-8 animate-fade-up-3 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-bold text-navy text-2xl">30+</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gray">Nations Served[cite: 1]</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans font-bold text-navy text-2xl">WHO-GMP</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gray">Quality Standards[cite: 1]</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans font-bold text-navy text-2xl">24/7</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gray">Global Support[cite: 1]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blueprint Line */}
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-teal/40 to-transparent" />
    </header>
  );
}