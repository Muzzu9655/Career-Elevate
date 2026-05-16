/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#f97316",
        "primary-dark": "#ea580c",
        "primary-light": "#fff7ed",
        gold: "#f59e0b",
        navy: "#0f172a",
        "navy-light": "#1e293b",
        slate: "#64748b",
        "slate-light": "#94a3b8",
        surface: "#f8fafc",
        surface2: "#f1f5f9",
        border: "#e2e8f0",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.5s ease forwards",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 24px rgba(249,115,22,0.15), 0 1px 3px rgba(0,0,0,0.06)",
        orange: "0 0 24px rgba(249,115,22,0.3)",
      },
    },
  },
  plugins: [],
};