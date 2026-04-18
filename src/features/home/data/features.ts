import { Globe, Coins, FileStack, Snowflake, MessageCircle } from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    icon: Globe,
    title: "PAN India Sourcing Network",
    text: "Access to thousands of manufacturers, distributors and C&F agents across India for any product requirement.",
  },
  {
    icon: Coins,
    title: "Competitive Bulk Pricing",
    text: "Direct factory sourcing and high-volume relationships give us the best landed prices for international buyers.",
  },
  {
    icon: FileStack,
    title: "Export Documentation Expertise",
    text: "Full regulatory documentation — COA, COPP, FSC, MSDS — handled by our experienced export compliance team.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain Handling",
    text: "Temperature-controlled logistics for vaccines, biologicals and other cold chain pharmaceutical products.",
  },
  {
    icon: MessageCircle,
    title: "Fast WhatsApp Support",
    text: "Direct WhatsApp line for instant quotation, query resolution and order updates — available 24\u00d77.",
    noBorder: true,
  },
];
