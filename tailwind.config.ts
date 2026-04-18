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
          DEFAULT: "#0a1628",
          mid: "#0f2040",
        },
        teal: {
          DEFAULT: "#00c9b1",
          dark: "#009d8c",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
        },
        "off-white": "#f8f9fc",
        "brand-gray": "#8a9bb5",
        "light-bg": "#f0f4fa",
        border: "rgba(0, 201, 177, 0.2)",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
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
      },
    },
  },
  plugins: [],
} satisfies Config;
