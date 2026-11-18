import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080808",
        canvas: "#000000",
        surface: {
          50: "rgba(255, 255, 255, 0.02)",
          100: "rgba(255, 255, 255, 0.04)",
          200: "rgba(255, 255, 255, 0.07)",
          300: "rgba(255, 255, 255, 0.10)",
          border: "rgba(255, 255, 255, 0.08)",
          "border-bright": "rgba(255, 255, 255, 0.16)",
        },
        ink: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
          faint: "#52525B",
        },
        accent: {
          glow: "rgba(255, 255, 255, 0.15)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: ["SF Mono", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        "squircle-sm": "12px",
        "squircle-md": "18px",
        "squircle-lg": "24px",
        "squircle-xl": "32px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        "glass-elevated": "0 20px 48px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "glass-glow": "0 0 80px -20px rgba(255, 255, 255, 0.08)",
        specular: "inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.025em",
        snug: "-0.015em",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "drift-slow": "drift 12s ease-in-out infinite alternate",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translateY(0px) scale(1)" },
          "100%": { transform: "translateY(-15px) scale(1.03)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333333%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
