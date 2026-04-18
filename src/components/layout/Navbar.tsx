import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[60px] py-[18px] bg-[rgba(10,22,40,0.92)] backdrop-blur-[20px] border-b border-border max-md:px-5 max-md:py-4">
      <Logo />
      <ul className="flex gap-8 list-none max-md:hidden">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[13px] font-medium tracking-[1px] uppercase text-brand-gray no-underline transition-colors duration-300 hover:text-teal"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#inquiry"
            className="bg-gradient-to-br from-teal to-teal-dark !text-navy !px-6 !py-2.5 !rounded-md !font-semibold text-[13px] tracking-[1px] uppercase no-underline"
          >
            Get Quote
          </a>
        </li>
      </ul>
    </nav>
  );
}
