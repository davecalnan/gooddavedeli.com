const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Cubano"],
      body: ["Lato"],
    },
    extend: {
      colors: {
        gray: colors.warmGray,
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
    },
  },
  plugins: [],
};
