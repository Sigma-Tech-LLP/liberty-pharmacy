import { Clock, Bike, Stethoscope } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";
import type { RetailFeature } from "@/types";

const retailFeatures: RetailFeature[] = [
  { icon: Clock, label: "24×7 Open" },
  { icon: Bike, label: "Free Home Delivery" },
  { icon: Stethoscope, label: "Pharmacist Support" },
];

export function RetailSection() {
  return (
    <section
      id="retail"
      className="px-[60px] py-20 bg-navy-mid text-center max-md:px-6 max-md:py-[60px]"
    >
      <SectionLabel>Walk-In &amp; Delivery</SectionLabel>
      <SectionTitle>
        Retail Pharmacy — <strong>Bandra</strong>
      </SectionTitle>
      <div className="max-w-[700px] mx-auto bg-white/[0.03] border border-border rounded-3xl p-14 mt-10 reveal opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out">
        <p className="text-base text-brand-gray leading-[1.7] max-w-[500px] mx-auto mb-8">
          Visit our flagship pharmacy in Bandra West for in-store purchase or
          order via WhatsApp for same-day home delivery.
        </p>
        <div className="grid grid-cols-3 gap-6 my-10 max-md:grid-cols-1">
          {retailFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.label}
                className="text-center p-6 bg-teal/[0.05] rounded-xl border border-border"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-teal/20">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <div className="text-[13px] font-semibold">{feat.label}</div>
              </div>
            );
          })}
        </div>
        <a
          href={WHATSAPP_URL}
          className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white px-7 py-4 rounded-lg font-semibold text-sm no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
        >
          <WhatsAppIcon size={18} />
          WhatsApp Order Now
        </a>
      </div>
    </section>
  );
}
