"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // 1. Import Link
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowRight, Globe, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[999] flex justify-center transition-all duration-500 
        ${isScrolled ? "pt-4 md:pt-6" : "pt-0"}`}
      >
        <nav 
          className={`flex items-center justify-between transition-all duration-500 
          ${isScrolled 
            ? "w-[92%] max-w-7xl px-5 md:px-8 py-3 bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-slate-200/50" 
            : "w-full px-6 lg:px-[60px] py-5 md:py-8 bg-white border-b border-slate-100"
          }`}
        >
          {/* 2. Logo Link updated */}
          <Link href="/" className="relative z-[1001] transition-transform active:scale-95">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {/* 3. Desktop Links updated */}
                  <Link
                    href={link.href}
                    className="text-[11px] font-bold tracking-[2px] uppercase transition-all hover:text-[#0D8B8B]"
                    style={{ color: '#0F4C81' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 4. Desktop CTA updated */}
            <Link
              href="/contact"
              className="bg-[#0F4C81] text-white px-7 py-3.5 rounded-full font-bold text-[10px] tracking-[2px] uppercase flex items-center gap-2 hover:bg-[#0D8B8B] hover:shadow-lg hover:shadow-navy/10 transition-all"
            >
              Get Quote <ArrowRight size={14} />
            </Link>
          </div>

          <button 
            className="lg:hidden relative z-[1001] w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-[#0F4C81] border border-slate-100 transition-all active:scale-90" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[998] bg-white lg:hidden"
          >
            <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-gradient-to-bl from-teal/10 via-transparent to-transparent -z-10 rounded-bl-full blur-3xl" />

            <div className="flex flex-col h-full pt-32 pb-12 px-8 max-w-md mx-auto">
              <ul className="flex flex-col gap-8 list-none p-0 m-0 flex-grow">
                {NAV_LINKS.map((link, i) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, ease: "easeOut" }}
                  >
                    {/* 5. Mobile Links updated */}
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="text-xs font-bold text-slate-300 font-sans tracking-widest">0{i + 1}</span>
                      <span className="text-4xl md:text-5xl font-serif text-[#0F4C81] group-hover:text-[#0D8B8B] transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-10">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Reach</span>
                    <span className="text-sm font-semibold text-[#0F4C81] flex items-center gap-1.5">
                      <Globe size={16} className="text-[#0D8B8B]"/> 50+ Nations
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">24/7 Support</span>
                    <span className="text-sm font-semibold text-[#0F4C81] flex items-center gap-1.5">
                      <PhoneCall size={16} className="text-[#0D8B8B]"/> Quick Help
                    </span>
                  </div>
                </div>

                {/* 6. Mobile CTA updated */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#0F4C81] text-white py-5 rounded-2xl font-bold text-xs tracking-[2px] uppercase flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-xl shadow-navy/20"
                >
                  Request Bulk Quotation <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}