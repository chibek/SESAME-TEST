const { colors: tailwindColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...tailwindColors,
  primary: { DEFAULT: "#5EBEA3", hover: "#BEF0E2" },
  secondary: "#FF9984",
  dark: {
    primary: {
      DEFAULT: "#788387",
      hover: "#D3E6ED",
    },
  },
  bg: "#B5B5B5",
  screen: "#F4F4F4",
};
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors,
      fill: colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
