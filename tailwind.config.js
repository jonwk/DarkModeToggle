// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        reactBlue: "#61dafb",
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        rose: colors.rose,
        orange: colors.orange,
        yellow: colors.amber,
        blue: colors.blue,
      },
      height: {
        "1/10": "10%",
        "1/7": "15%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
