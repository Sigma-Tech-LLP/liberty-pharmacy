import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { processSteps } from "../data/process-steps";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="px-[60px] py-[100px] bg-navy-mid max-md:px-6 max-md:py-[60px]"
    >
      <div className="text-center max-w-[600px] mx-auto">
        <SectionLabel>Seamless Process</SectionLabel>
        <SectionTitle>
          How It <strong>Works</strong>
        </SectionTitle>
        <p className="text-base text-brand-gray leading-[1.7] max-w-[560px] mx-auto">
          From inquiry to doorstep delivery — a streamlined 4-step export
          process built for international buyers.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-0 mt-[60px] relative reveal opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out max-md:grid-cols-2 max-md:before:hidden before:content-[''] before:absolute before:top-[44px] before:left-[12%] before:right-[12%] before:h-px before:bg-linear-to-r before:from-transparent before:via-teal before:to-transparent">
        {processSteps.map((step) => (
          <div key={step.num} className="process-step text-center px-6 relative">
            <div className="step-num w-[88px] h-[88px] bg-teal/10 border border-teal rounded-full flex items-center justify-center mx-auto mb-7 font-mono text-[28px] font-bold text-teal relative z-[1] transition-all duration-300">
              {step.num}
            </div>
            <div className="font-serif text-xl font-semibold mb-2.5">
              {step.title}
            </div>
            <div className="text-[13px] text-brand-gray leading-[1.6]">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
