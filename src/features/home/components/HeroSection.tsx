import { Globe, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center px-[60px] pt-[120px] pb-[80px] overflow-hidden max-md:px-6 max-md:pt-[100px] max-md:pb-[60px]">
      {/* Background layers - Deep Navy/Teal palette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(0,201,177,0.08)_0%,transparent_60%),radial-gradient(ellipse_50%_80%_at_10%_80%,rgba(201,168,76,0.06)_0%,transparent_50%),linear-gradient(160deg,#0a1628_0%,#071020_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,201,177,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,201,177,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-[2] max-w-[780px]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/30 rounded-full px-4 py-1.5 mb-8 text-[11px] font-semibold tracking-[2px] uppercase text-teal animate-fade-up">
          <Globe className="w-3.5 h-3.5" />
          India&apos;s Trusted Export Partner
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(42px,5.5vw,72px)] font-light leading-[1.1] mb-6 animate-fade-up-1 text-white">
          Global Merchant Exporter of <br />
          <strong className="font-bold bg-gradient-to-br from-teal via-teal-light to-gold-light bg-clip-text text-transparent">
            WHO‑GMP Certified Pharmaceuticals
          </strong>
        </h1>

        {/* Sub-Headline */}
        <p className="text-md text-brand-gray leading-[1.6] max-w-[640px] mb-10 animate-fade-up-2">
          We source high‑quality medicines from India’s top 
          <span className="text-gold-light opacity-90"> WHO‑GMP, ISO, and FDA‑approved </span> 
          manufacturers and export them to 50+ countries with complete documentation and 24×7 support.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap animate-fade-up-3">
          <a
            href="#inquiry"
            className="bg-gradient-to-br from-teal to-teal-dark text-navy px-9 py-4 rounded-lg font-bold text-sm tracking-[1px] uppercase no-underline transition-all duration-200 shadow-[0_8px_32px_rgba(0,201,177,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,201,177,0.45)] flex items-center gap-2"
          >
            Get Quote <ArrowRight size={16} />
          </a>
          <a
            href={WHATSAPP_URL}
            className="bg-white/5 border border-white/10 text-white px-7 py-4 rounded-lg font-semibold text-sm no-underline flex items-center gap-2.5 transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Hero stat cards - Visible on Desktop */}
      <div className="absolute right-[60px] top-1/2 -translate-y-1/2 w-[420px] animate-fade-up-5 max-lg:hidden">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/[0.04] border border-border rounded-2xl px-6 py-7 backdrop-blur-[10px] transition-all duration-300 hover:border-teal/50 hover:bg-teal/[0.06] row-span-2 flex flex-col justify-between">
            <div>
              <div className="font-mono text-4xl font-bold text-teal leading-none mb-1">50+</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">Countries Served</div>
            </div>
            <div>
              <div className="font-mono text-4xl font-bold text-gold-light leading-none mb-1">24×7</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">Export Support</div>
            </div>
            <div className="flex gap-2 flex-wrap mt-3">
              {["WHO-GMP", "ISO", "IEC"].map((cert) => (
                <span key={cert} className="bg-gold/15 border border-gold/30 text-gold-light text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/[0.04] border border-border rounded-2xl px-6 py-7 backdrop-blur-[10px] transition-all duration-300 hover:border-teal/50 hover:bg-teal/[0.06]">
              <div className="font-mono text-4xl font-bold text-teal leading-none mb-1">10K+</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">SKUs Available</div>
            </div>
            <div className="bg-white/[0.04] border border-border rounded-2xl px-6 py-7 backdrop-blur-[10px] transition-all duration-300 hover:border-teal/50 hover:bg-teal/[0.06]">
              <div className="font-mono text-[24px] font-bold text-teal leading-none mb-1">Competitive</div>
              <div className="text-xs text-brand-gray tracking-[1px] uppercase">Bulk Pricing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}