const { colors: tailwindColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...tailwindColors,
  primary: { DEFAULT: "#50B59B", hover: "#ADEADB", dark: "#4B665F", darkhover: "#4FB39A" },
  secondary: { DEFAULT:"#FF9984", hover: "#EAC7C0", dark:"#B36B5D",darkhover: "#E68A77"},
  tertiary: {DEFAULT:"#848484", hover:"#E6E6E6", dark:"#664747"},
  bg: {DEFAULT:"#DBDBDB", dark:"#5C5C5C"},
  screen: "#F4F4F4",
  dropdown: "#f4f4f4",
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
    extend: {
      rotate: ['group-hover']
    },
  },
  plugins: [],
};
