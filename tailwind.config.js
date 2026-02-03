/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fcPurple: "#3C1A6E",
        fcGold: "#D4AF37",
        fcCream: "#FBF7EE",
        fcInk: "#111827",
      },
    },
  },
  plugins: [],
};
