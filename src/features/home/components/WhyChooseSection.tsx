import { Globe } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { features } from "../data/features";
import { countries, certifications } from "../data/countries";

export function WhyChooseSection() {
  return (
    <section
      id="why"
      className="px-[60px] py-[100px] bg-navy grid grid-cols-2 gap-20 items-center max-md:px-6 max-md:py-[60px] max-md:grid-cols-1 max-md:gap-10"
    >
      <div>
        <SectionLabel>Our Advantage</SectionLabel>
        <SectionTitle>
          Why Choose
          <br />
          <strong>Liberty Medical</strong>
        </SectionTitle>
        <p className="text-base text-brand-gray leading-[1.7] max-w-[560px]">
          Trusted by hospitals, government buyers, distributors and pharmacies
          across the globe.
        </p>

        <div className="mt-10 reveal opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`flex gap-5 py-6 ${feat.noBorder ? "" : "border-b border-white/[0.06]"} group`}
              >
                <div className="feature-icon w-12 h-12 shrink-0 bg-teal/10 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 text-teal group-hover:text-navy transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-semibold text-base mb-1">{feat.title}</div>
                  <div className="text-[13px] text-brand-gray leading-[1.6]">
                    {feat.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white/[0.03] border border-border rounded-3xl p-10 relative overflow-hidden reveal opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out before:content-[''] before:absolute before:top-[-40%] before:right-[-20%] before:w-[300px] before:h-[300px] before:rounded-full before:bg-[radial-gradient(circle,rgba(0,201,177,0.15)_0%,transparent_70%)]">
        <div className="font-serif text-[28px] mb-8 relative z-[1] flex items-center gap-3">
          <Globe className="w-7 h-7 text-teal" /> Our Global Reach
        </div>
        <div className="flex flex-wrap gap-2.5 relative z-[1]">
          {countries.map((country) => (
            <span
              key={country}
              className="bg-white/[0.06] border border-white/10 px-3.5 py-2 rounded-md text-xs font-medium transition-all duration-200 cursor-default hover:border-teal hover:bg-teal/10 hover:text-teal"
            >
              {country}
            </span>
          ))}
        </div>

        <div className="mt-9 pt-8 border-t border-border relative z-[1]">
          <div className="text-xs text-brand-gray tracking-[2px] uppercase mb-4">
            Certifications &amp; Compliance
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-gold/15 border border-gold text-gold-light text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
