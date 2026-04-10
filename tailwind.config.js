/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#d1d1d1",
          400: "#b0b0b0",
          500: "#8e8e8e",
          600: "#6e6e6e",
          700: "#4e4e4e",
          800: "#2e2e2e",
          900: "#121212",
          950: "#0a0a0a",
        },
        accent: {
          50: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#eeeeee",
          400: "#e0e0e0",
          500: "#bdbdbd",
          600: "#9e9e9e",
          700: "#757575",
          800: "#616161",
          900: "#424242",
          950: "#212121",
        },
        gold: {
          50: "#fff9e6",
          100: "#ffefb3",
          200: "#ffe380",
          300: "#ffd74d",
          400: "#ffcc1a",
          500: "#e6b400",
          600: "#b38c00",
          700: "#806400",
          800: "#4d3c00",
          900: "#1a1400",
          950: "#0d0a00",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
