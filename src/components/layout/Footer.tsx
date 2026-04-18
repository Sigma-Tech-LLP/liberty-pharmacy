import { Logo } from "./Logo";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-border py-12 px-[60px] flex justify-between items-center flex-wrap gap-6 max-md:flex-col max-md:text-center max-md:px-6 max-md:py-8">
      <div>
        <Logo />
        <div className="text-[13px] text-brand-gray mt-2 leading-[1.6]">
          {COMPANY.address.line1}
          <br />
          {COMPANY.address.line2}
        </div>
      </div>

      <div className="flex gap-6 flex-wrap">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs text-brand-gray no-underline tracking-[1px] uppercase transition-colors duration-200 hover:text-teal"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="text-[11px] text-brand-gray font-mono">
        &copy; {COMPANY.year} {COMPANY.name} &middot; All Rights Reserved
      </div>
    </footer>
  );
}
