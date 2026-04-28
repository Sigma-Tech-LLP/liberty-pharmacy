"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[999] flex justify-center transition-all duration-500 ${isScrolled ? "pt-4" : "pt-0"}`}>
      <nav 
        className={`flex items-center justify-between transition-all duration-500 
        ${isScrolled 
          ? "w-[90%] max-w-7xl px-8 py-3 bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-slate-200" 
          : "w-full px-[60px] py-6 bg-white border-b border-slate-100 max-md:px-6"
        }`}
      >
        <Logo />

        {/* Links - Using Hex for guaranteed visibility */}
        <div className="flex items-center gap-8 max-md:hidden">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[11px] font-bold tracking-[2px] uppercase transition-colors"
                  style={{ color: '#0F4C81' }} // Explicit Navy
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA - Guaranteed Contrast */}
          <a
            href="#inquiry"
            className="bg-[#0F4C81] text-white px-6 py-3 rounded-full font-bold text-[10px] tracking-[2px] uppercase flex items-center gap-2 hover:bg-[#0D8B8B] transition-all"
          >
            Get Quote <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#0F4C81]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}