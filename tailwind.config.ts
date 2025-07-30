import type { Config } from "tailwindcss"

/**
 * Tailwind CSS Configuration for Tishya Exports
 * Updated with strict color palette usage
 * Brand Colors: BFAFA1 (warm beige), E9E4D5 (light cream), FFFAF0 (ivory)
 * Font Colors: 7A9B91 (sage green), 4C5B56 (dark sage), A3B5A1 (light sage)
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Strict color palette - only specified colors
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors from specifications - ONLY these colors allowed
        brand: {
          beige: "#BFAFA1", // Primary brand color - warm beige
          cream: "#E9E4D5", // Secondary brand color - light cream
          ivory: "#FFFAF0", // Tertiary brand color - ivory
        },
        // Font colors from specifications - ONLY these colors for text
        font: {
          sage: "#7A9B91", // Primary font color - sage green
          dark: "#4C5B56", // Dark font color - dark sage
          light: "#A3B5A1", // Light font color - light sage
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        shimmer: {
          "0%": {
            "background-position": "-200% 0",
          },
          "100%": {
            "background-position": "200% 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      // Custom typography with specified fonts
      fontFamily: {
        display: ["Playfair Display", "serif"], // For larger text elements
        body: ["Frank Ruhl Libre", "serif"], // For smaller text and numbers
        sans: ["Inter", "system-ui", "sans-serif"], // Fallback
      },
      // Custom spacing for elegant layout
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      // Custom shadows using only brand colors
      boxShadow: {
        soft: "0 2px 15px -3px rgba(191, 175, 161, 0.1), 0 10px 20px -2px rgba(191, 175, 161, 0.05)",
        medium: "0 4px 25px -5px rgba(191, 175, 161, 0.15), 0 10px 10px -5px rgba(191, 175, 161, 0.08)",
        strong: "0 10px 40px -10px rgba(191, 175, 161, 0.2), 0 2px 10px -2px rgba(191, 175, 161, 0.1)",
        elegant: "0 8px 32px -8px rgba(191, 175, 161, 0.3)",
      },
      // Custom gradients with brand colors only
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #FFFAF0 0%, #E9E4D5 50%, #BFAFA1 100%)",
        "stone-texture":
          "linear-gradient(45deg, #FFFAF0 25%, transparent 25%), linear-gradient(-45deg, #E9E4D5 25%, transparent 25%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
