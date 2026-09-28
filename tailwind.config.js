/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FFF0F5",
        blush2: "#FDF2F8",
        crimson: "#E11D48",
        wine: "#BE123C",
        rosegold: "#B76E79",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        orbit: { to: { transform: "rotate(360deg)" } },
        "orbit-reverse": { to: { transform: "rotate(-360deg)" } },
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(-4deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(225,29,72,0.35)" },
          "50%": { boxShadow: "0 0 22px 6px rgba(225,29,72,0.35)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        orbit: "orbit 55s linear infinite",
        "orbit-reverse": "orbit-reverse 55s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        glow: "glow 2.2s ease-in-out infinite",
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
