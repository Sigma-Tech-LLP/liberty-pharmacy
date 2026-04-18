export const WHATSAPP_URL = "https://wa.me/917837839436";

export const COMPANY = {
  name: "Liberty Medical",
  tagline: "Global Pharma Export",
  address: {
    line1: "Shop No. 7, Comet Building, Opp. Lake View",
    line2: "Guru Nanak Road, Bandra West, Mumbai",
    full: "Shop No. 7, Comet Building\nOpp. Lake View, Guru Nanak Road\nBandra West, Mumbai – 400050",
  },
  phones: ["+91 78378 39436", "+91 78378 39439"],
  year: 2025,
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#categories" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#inquiry" },
] as const;

export const FOOTER_LINKS = [
  { label: "Products", href: "#categories" },
  { label: "How It Works", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "Retail", href: "#retail" },
] as const;
