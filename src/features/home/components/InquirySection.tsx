"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, Send, Globe, Shield, Zap, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ClientEffects } from "@/components/ClientEffects";
import { WHATSAPP_URL, COMPANY } from "@/lib/constants";
import { submitInquiry } from "@/app/actions/inquiry";

const INPUT_STYLE = 
  "w-full bg-transparent border-b border-slate-200 py-4 text-navy font-sans text-base outline-none transition-all duration-500 focus:border-teal focus:pl-2 placeholder:text-slate-300";

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
    <section id="inquiry" className="py-32 bg-[#F8FAFC] px-[60px] max-md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: The Aesthetic Info Panel */}
          <div className="col-span-12 lg:col-span-5 space-y-12">
            <div>
              <SectionLabel>
                <p className="mb-6">

                Direct Procurement
                </p>
                </SectionLabel>
              <SectionTitle>
                <p className="text-navy !leading-[1.1] mb-8">

                Ready to scale your <br />
                <span className="text-teal font-serif italic font-light">Medical Supply?</span>
                </p>
              </SectionTitle>
              <p className="text-brand-gray text-lg max-w-md leading-relaxed">
                Connect with our export desk for high-volume pharmaceutical distribution and tailored logistics.
              </p>
            </div>

            {/* Premium Stat Grid */}
            <div className="grid grid-cols-2 gap-8 border-y border-slate-200 py-10">
              <MiniStat icon={<Shield size={18}/>} label="Compliance" value="WHO-GMP" />
              <MiniStat icon={<Globe size={18}/>} label="Logistics" value="Global Cold-Chain" />
              <MiniStat icon={<Zap size={18}/>} label="Turnaround" value="24h Quotes" />
              <MiniStat icon={<Phone size={18}/>} label="Support" value="Priority Desk" />
            </div>

            {/* Elegant Contact Details */}
            <div className="space-y-6">
  {/* Location Item */}
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center 
                    text-navy/70 group-hover:bg-navy group-hover:text-white transition-all duration-300">
      <MapPin size={16}/>
    </div>
    <span className="text-sm font-medium text-navy/70 group-hover:text-navy transition-colors">
      Bandra West, Mumbai, India
    </span>
  </div>

  {/* WhatsApp Item */}
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center 
                    text-teal group-hover:bg-teal group-hover:text-white transition-all duration-300">
      <WhatsAppIcon size={16} />
    </div>
    <span className="text-sm font-medium text-navy/70 group-hover:text-teal transition-colors">
      +91 91361 58212
    </span>
  </div>
</div>
          </div>

          {/* RIGHT: The Minimalist Form Card */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-10 lg:p-16 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(15,76,129,0.08)] relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-[100px]" />

              <form action={formAction} ref={formRef} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <label className="text-[10px] font-black uppercase tracking-[2px] text-teal mb-1 block">Full Name</label>
                    <input type="text" name="fullName" className={INPUT_STYLE} placeholder="Enter your name" required />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] font-black uppercase tracking-[2px] text-teal mb-1 block">Email Address</label>
                    <input type="email" name="email" className={INPUT_STYLE} placeholder="email@institution.com" required />
                  </div>
                </div>

                <div className="group relative">
                  <label className="text-[10px] font-black uppercase tracking-[2px] text-teal mb-1 block">Institutional WhatsApp</label>
                  <input type="tel" name="phone" className={INPUT_STYLE} placeholder="+1 (000) 000-0000" required />
                </div>

                <div className="group relative">
                  <label className="text-[10px] font-black uppercase tracking-[2px] text-teal mb-1 block">Requirement Details</label>
                  <textarea
                    name="message"
                    className={`${INPUT_STYLE} min-h-[120px] resize-none`}
                    placeholder="List products, strengths, and volumes..."
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <button
                    type="submit"
                    disabled={pending}
                    className="group flex-1 bg-navy text-white h-16 rounded-full font-bold text-xs uppercase tracking-[2px] flex items-center justify-center gap-3 overflow-hidden relative"
                  >
                    <span className="relative z-10">{pending ? "Transmitting..." : "Send Inquiry"}</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>

                  <a
                    href={WHATSAPP_URL}
                    className="flex items-center justify-center gap-3 px-8 h-16 rounded-full border border-slate-200 text-navy font-bold text-xs uppercase tracking-[2px] hover:bg-slate-50 transition-colors"
                  >
                    <WhatsAppIcon size={18} />
                    Instant Quote
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
    <div className="flex items-center gap-4">
      <div className="text-teal/40">{icon}</div>
      <div>
        <p className="text-[9px] font-bold text-brand-gray uppercase tracking-widest">{label}</p>
        <p className="text-navy font-bold text-sm">{value}</p>
      </div>
    </div>
  );
}