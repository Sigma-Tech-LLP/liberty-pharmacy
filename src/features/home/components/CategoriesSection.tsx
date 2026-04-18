import { ClipboardList } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { categories } from "../data/categories";

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="px-[60px] py-[100px] bg-gradient-to-b from-navy to-navy-mid max-md:px-6 max-md:py-[60px]"
    >
      <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
        <div>
          <SectionLabel>Our Catalog</SectionLabel>
          <SectionTitle>
            Product <strong>Categories</strong>
          </SectionTitle>
          <p className="text-base text-brand-gray leading-[1.7] max-w-[560px]">
            Comprehensive pharmaceutical supply across all major therapeutic and
            surgical categories for global buyers.
          </p>
        </div>
        <a
          href="#inquiry"
          className="bg-gradient-to-br from-teal to-teal-dark text-navy px-9 py-4 rounded-lg font-bold text-sm tracking-[1px] uppercase no-underline transition-all duration-200 shadow-[0_8px_32px_rgba(0,201,177,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,201,177,0.45)]"
        >
          Request Catalog →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-5 reveal opacity-0 translate-y-8 transition-[opacity,transform] duration-700 ease-out max-md:grid-cols-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className="group bg-white/[0.03] border border-border rounded-2xl px-7 py-9 cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-teal hover:bg-teal/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-linear-to-r before:from-teal before:to-gold before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-5 border border-teal/20 group-hover:bg-teal/20 group-hover:border-teal/40 transition-all duration-300">
                <Icon className="w-7 h-7 text-teal" />
              </div>
              <div className="font-serif text-[22px] font-semibold mb-2 text-off-white">
                {cat.name}
              </div>
              <div className="text-[13px] text-brand-gray leading-[1.6]">{cat.desc}</div>
              <div className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold tracking-[1px] text-teal uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Inquire Now →
              </div>
            </div>
          );
        })}
        {/* Custom Requirements card */}
        <div className="group bg-teal/[0.06] border border-teal rounded-2xl px-7 py-9 cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-teal hover:bg-teal/[0.05] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-linear-to-r before:from-teal before:to-gold before:scale-x-100 before:origin-left">
          <div className="w-14 h-14 bg-teal/20 rounded-xl flex items-center justify-center mb-5 border border-teal/40">
            <ClipboardList className="w-7 h-7 text-teal" />
          </div>
          <div className="font-serif text-[22px] font-semibold mb-2 text-off-white">
            Custom Requirements
          </div>
          <div className="text-[13px] text-brand-gray leading-[1.6]">
            Can&apos;t find what you need? Share your product list and we&apos;ll
            source it from our PAN India network.
          </div>
          <div className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold tracking-[1px] text-teal uppercase opacity-100 transition-opacity duration-300">
            Send Requirement →
          </div>
        </div>
      </div>
    </section>
  );
}
