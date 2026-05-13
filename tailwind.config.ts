import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        resilium: {
          blue: "#4B6376",
          orange: "#F4852E",
          white: "#FFFFFF",
          black: "#000000",
          blueDark: "#3A4E5F",
          blueDeep: "#2B3B49",
          deepNavy: "#071722",
          warmSand: "#F4EFE7",
          offWhite: "#F8F6F1",
          charcoal: "#17212B",
          gray: "#9AA6AD"
        }
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(244,133,46,0.18)",
        panel: "0 24px 80px rgba(23,33,43,0.16)"
      }
    }
  },
  plugins: []
};

export default config;
