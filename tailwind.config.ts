import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f4c81", // Professional Blue (Trust)
          mid: "#eef4fa",    // Soft Wash Blue
        },
        teal: {
          DEFAULT: "#0ea5e9", // Medical Cyan
          dark: "#0369a1",
        },
        "off-white": "#ffffff",
        "brand-gray": "#64748b",
        "light-bg": "#f8fafc", // Sterile background
        border: "#e2e8f0",     // Clean dividers
      },
      fontFamily: {
        sans: ['"Inter"','"DM Sans"', "sans-serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.5)" },
        },
        trustScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "fade-up-1": "fadeUp 0.8s ease 0.1s both",
        "fade-up-2": "fadeUp 0.8s ease 0.2s both",
        "fade-up-3": "fadeUp 0.8s ease 0.3s both",
        "fade-up-4": "fadeUp 0.8s ease 0.4s both",
        "fade-up-5": "fadeUp 1s ease 0.5s both",
        "pulse-dot": "pulse 2s infinite",
        "trust-scroll": "trustScroll 22s linear infinite",
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
