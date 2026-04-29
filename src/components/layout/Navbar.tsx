"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowRight, Globe, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[999] flex justify-center transition-all duration-500 ${isScrolled ? "pt-4" : "pt-0"}`}>
        <nav 
          className={`flex items-center justify-between transition-all duration-500 
          ${isScrolled 
            ? "w-[95%] max-w-7xl px-6 lg:px-8 py-3 bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-slate-200" 
            : "w-full px-6 lg:px-[60px] py-6 bg-white border-b border-slate-100"
          }`}
        >
          <a href="/"><Logo /></a>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-8 max-lg:hidden">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[11px] font-bold tracking-[2px] uppercase transition-colors hover:text-teal"
                    style={{ color: '#0F4C81' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#inquiry"
              className="bg-[#0F4C81] text-white px-6 py-3 rounded-full font-bold text-[10px] tracking-[2px] uppercase flex items-center gap-2 hover:bg-[#0D8B8B] transition-all"
            >
              Get Quote <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-[#0F4C81] transition-transform active:scale-90" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[998] bg-white pt-32 pb-10 px-8 flex flex-col justify-between lg:hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-navy-mid/20 -z-10 rounded-bl-full blur-3xl opacity-50" />

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 list-none p-0 m-0">
              {NAV_LINKS.map((link, i) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-serif text-[#0F4C81] hover:text-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Bottom Section: CTA & Details */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Ops</span>
                  <span className="text-sm font-medium text-navy flex items-center gap-1"><Globe size={14} className="text-teal"/> 50+ Countries</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support</span>
                  <span className="text-sm font-medium text-navy flex items-center gap-1"><PhoneCall size={14} className="text-teal"/> Contact Team</span>
                </div>
              </div>

              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#0F4C81] text-white py-5 rounded-2xl font-bold text-xs tracking-[2px] uppercase flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-navy/20"
              >
                Request Bulk Quotation <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}