import { Globe } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center px-[60px] pt-[120px] pb-[80px] overflow-hidden max-md:px-6 max-md:pt-[100px] max-md:pb-[60px]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(0,201,177,0.08)_0%,transparent_60%),radial-gradient(ellipse_50%_80%_at_10%_80%,rgba(201,168,76,0.06)_0%,transparent_50%),linear-gradient(160deg,#0a1628_0%,#071020_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,201,177,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,201,177,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-[2] max-w-[680px]">
        <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal rounded-full px-4 py-1.5 mb-8 text-[11px] font-semibold tracking-[2px] uppercase text-teal animate-fade-up before:content-[''] before:w-1.5 before:h-1.5 before:bg-teal before:rounded-full before:animate-pulse-dot">
          <Globe className="w-3.5 h-3.5" />
          India&apos;s Trusted Export Partner
        </div>
        <h1 className="font-serif text-[clamp(52px,6vw,88px)] font-light leading-[1.05] mb-3 animate-fade-up-1">
          Global Pharma
          <br />
          <strong className="font-bold bg-gradient-to-br from-teal to-gold-light bg-clip-text text-transparent block">
            Export Excellence
          </strong>
        </h1>
        <p className="font-serif text-[22px] font-light text-gold-light opacity-80 mb-6 animate-fade-up-2">
          From Bandra to the World
        </p>
        <p className="text-base text-brand-gray leading-[1.7] max-w-[540px] mb-10 animate-fade-up-3">
          WHO-GMP sourced medicines, surgical supplies and wellness products
          supplied to hospitals, distributors and pharmacies worldwide. Fast
          sourcing. Competitive bulk pricing. Complete export documentation.
        </p>
        <div className="flex gap-4 flex-wrap animate-fade-up-4">
          <a
            href="#inquiry"
            className="bg-gradient-to-br from-teal to-teal-dark text-navy px-9 py-4 rounded-lg font-bold text-sm tracking-[1px] uppercase no-underline transition-all duration-200 shadow-[0_8px_32px_rgba(0,201,177,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,201,177,0.45)]"
          >
            Get Export Quote →
          </a>
          <a
            href={WHATSAPP_URL}
            className="bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white px-7 py-4 rounded-lg font-semibold text-sm no-underline flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon size={18} />
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* Hero stat cards */}
      <div className="absolute right-[60px] top-1/2 -translate-y-1/2 w-[420px] animate-fade-up-5 max-md:hidden">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/[0.04] border border-border rounded-2xl px-6 py-7 backdrop-blur-[10px] transition-all duration-300 hover:border-teal hover:bg-teal/[0.06] row-span-2 flex flex-col justify-between">
            <div>
              <div className="font-mono text-4xl font-bold text-teal leading-none mb-1">50+</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">Countries Served</div>
            </div>
            <div>
              <div className="font-mono text-4xl font-bold text-gold leading-none mb-1">24×7</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">Export Support</div>
            </div>
            <div className="flex gap-2 flex-wrap mt-3">
              {["WHO-GMP", "ISO", "IEC"].map((cert) => (
                <span key={cert} className="bg-gold/15 border border-gold text-gold-light text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white/[0.04] border border-border rounded-2xl px-6 py-7 backdrop-blur-[10px] transition-all duration-300 hover:border-teal hover:bg-teal/[0.06] mb-4">
              <div className="font-mono text-4xl font-bold text-teal leading-none mb-1">10K+</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">Products</div>
            </div>
            <div className="bg-white/[0.04] border border-border rounded-2xl px-6 py-7 backdrop-blur-[10px] transition-all duration-300 hover:border-teal hover:bg-teal/[0.06]">
              <div className="font-mono text-[28px] font-bold text-teal leading-none mb-1">PAN India</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">Sourcing Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
