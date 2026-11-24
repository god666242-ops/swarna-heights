/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: { md: "900px" },
      colors: {
        onyx: "#0b0c0e",
        night: "#111316",
        jade: "#0e2822",
        jade2: "#143730",
        ivory: "#f4eee3",
        bone: "#e9e1d1",
        rose: "#e0a899",
        rosel: "#f3cdc1",
        smoke: "#a9a498",
        inkd: "#1b1a17",
      },
      fontFamily: {
        fd: ["var(--fd)", "Georgia", "serif"],
        fb: ["var(--fb)", "system-ui", "sans-serif"],
      },
      keyframes: { rise: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "none" } } },
      animation: { rise: "rise 1.1s cubic-bezier(.2,.7,.2,1) backwards" },
    },
  },
  plugins: [],
};
