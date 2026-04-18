import type { LucideIcon } from "lucide-react";

export interface Category {
  icon: LucideIcon;
  name: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
  noBorder?: boolean;
}

export interface TrustItem {
  icon: LucideIcon;
  label: string;
}

export interface RetailFeature {
  icon: LucideIcon;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
