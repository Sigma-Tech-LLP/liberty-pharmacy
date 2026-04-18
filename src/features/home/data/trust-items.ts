import {
  ShieldCheck,
  Package,
  Snowflake,
  FileText,
  Truck,
  MessageCircle,
} from "lucide-react";
import type { TrustItem } from "@/types";

export const trustItems: TrustItem[] = [
  { icon: ShieldCheck, label: "WHO-GMP Certified Sources" },
  { icon: Package, label: "Bulk Supply Capability" },
  { icon: Snowflake, label: "Cold Chain Handling" },
  { icon: FileText, label: "Full Export Documentation" },
  { icon: Truck, label: "Fast Global Dispatch" },
  { icon: MessageCircle, label: "WhatsApp Support 24\u00d77" },
];
