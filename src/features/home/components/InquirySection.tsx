"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Globe, Shield, Zap, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";
import { submitInquiry } from "@/app/actions/inquiry";

// Prevents iOS zoom and handles narrow widths
const INPUT_STYLE = 
  "w-full bg-transparent border-b border-slate-200 py-4 text-navy font-sans text-base outline-none transition-all duration-500 focus:border-teal focus:pl-2 placeholder:text-slate-300 appearance-none rounded-none";

export function InquirySection() {
  const [state, formAction, pending] = useActionState(submitInquiry, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Transmission Received.");
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section id="inquiry" className="py-12 md:py-32 bg-[#F8FAFC] px-4 sm:px-10 md:px-[60px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: Info Panel */}
          <div className="w-full lg:col-span-5 space-y-8">
            <div>
              <SectionLabel>
                <span className="mb-3 block">Direct Procurement</span>
              </SectionLabel>
              <SectionTitle>
                {/* Fluid typography for the 370px-445px range */}
                <h2 className="text-navy leading-[1.1] mb-5 text-[clamp(28px,8vw,48px)] font-serif">
                  Ready to scale your <br />
                  <span className="text-teal italic font-light">Medical Supply?</span>
                </h2>
              </SectionTitle>
              <p className="text-brand-gray text-base md:text-lg max-w-md leading-relaxed">
                Connect with our export desk for high-volume pharmaceutical distribution.
              </p>
            </div>

            {/* Stats Grid: Adjusted for narrow screens */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:gap-8 border-y border-slate-200 py-8">
              <MiniStat icon={<Shield size={16}/>} label="Compliance" value="WHO-GMP" />
              <MiniStat icon={<Globe size={16}/>} label="Logistics" value="Cold-Chain" />
              <MiniStat icon={<Zap size={16}/>} label="Turnaround" value="24h Quotes" />
              <MiniStat icon={<Phone size={16}/>} label="Support" value="Priority" />
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-navy/70">
                  <MapPin size={14}/>
                </div>
                <span className="text-sm font-medium text-navy/70">Mumbai, India</span>
              </div>
              <a href={WHATSAPP_URL} className="flex items-center gap-3 group w-fit">
                <div className="shrink-0 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-teal group-active:bg-teal group-active:text-white transition-all">
                  <WhatsAppIcon size={14} />
                </div>
                <span className="text-sm font-medium text-navy/70 group-hover:text-teal">
                  +91 91361 58212
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: Form Card */}
          <div className="w-full lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-10 lg:p-16 rounded-[24px] md:rounded-[40px] shadow-[0_30px_60px_-15px_rgba(15,76,129,0.05)]"
            >
              <form action={formAction} ref={formRef} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-[1px] text-teal block">Full Name</label>
                    <input type="text" name="fullName" className={INPUT_STYLE} placeholder="Name" required />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-[1px] text-teal block">Email</label>
                    <input type="email" name="email" className={INPUT_STYLE} placeholder="email@institution.com" required />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-[1px] text-teal block">WhatsApp</label>
                  <input type="tel" name="phone" className={INPUT_STYLE} placeholder="+1..." required />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-[1px] text-teal block">Requirements</label>
                  <textarea
                    name="message"
                    className={`${INPUT_STYLE} min-h-[90px] resize-none`}
                    placeholder="Products and volumes..."
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={pending}
                    className="group w-full sm:flex-1 bg-navy text-white h-14 rounded-full font-bold text-xs uppercase tracking-[1.5px] flex items-center justify-center gap-2 overflow-hidden relative active:scale-[0.98] transition-all"
                  >
                    <span className="relative z-10">{pending ? "Sending..." : "Send Inquiry"}</span>
                    <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={WHATSAPP_URL}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 h-14 rounded-full border border-slate-200 text-navy font-bold text-xs uppercase tracking-[1.5px] active:bg-slate-50 transition-colors"
                  >
                    <WhatsAppIcon size={16} />
                    WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      <div className="text-teal/50 shrink-0 mt-0.5">{icon}</div>
      <div className="min-w-0"> {/* Prevents text overflow in narrow grids */}
        <p className="text-[8px] font-bold text-brand-gray uppercase tracking-wider mb-0.5 truncate">{label}</p>
        <p className="text-navy font-bold text-[11px] xs:text-xs md:text-sm whitespace-nowrap">{value}</p>
      </div>
    </div>
  );
}