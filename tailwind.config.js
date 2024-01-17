module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 50: "#fbebea", A700: "#d63500" },
        blue_gray: { 300: "#8da4bf" },
        blue: { 50: "#e5f1fc", 600: "#3079e1" },
        light_blue: { 700: "#0073e6" },
        gray: { 50: "#f6f8fa", 300: "#dde5ea", "300_01": "#dadce0" },
        teal: { 100: "#bacbd5" },
        red: { 50: "#fce8ef" },
        deep_purple: { 50: "#ebe8fd", A200: "#6548ee" },
        green: { A700: "#05c165" },
        white: { A700: "#ffffff" },
        indigo: { 800: "#1c4980" },
        pink: { 400: "#e9407a" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
