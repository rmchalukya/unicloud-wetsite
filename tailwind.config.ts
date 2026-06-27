import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dae6ff",
          200: "#bdd4ff",
          300: "#8fb8ff",
          400: "#5a91ff",
          500: "#3466ff",
          600: "#1d4ed8",
          700: "#1740b0",
          800: "#193591",
          900: "#1a2e76",
          dark: "#0b1a3e",
        },
        accent: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        surface: {
          50: "#f8f9fc",
          100: "#eef1f6",
          200: "#e2e6ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["Georgia", '"Times New Roman"', "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ring-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "ring-spin-rv": {
          to: { transform: "rotate(-360deg)" },
        },
        "dot-float": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(-10px)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "ring-spin": "ring-spin 50s linear infinite",
        "ring-spin-rv": "ring-spin-rv 70s linear infinite",
        "ring-spin-slow": "ring-spin 90s linear infinite",
        "dot-float": "dot-float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
