const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Blinker", ...defaultTheme.fontFamily.sans],
        serif: ["Lato", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#F4120F",
        secondary: "#222222",
      },
      backgroundImage: {
        herobanner:
          "url('https://damansdak.s3.eu-central-1.amazonaws.com/hero.jpeg')",
        pattern:
          "url('https://damansdak.s3.eu-central-1.amazonaws.com/pattern_dark.jpg')",
        paralaxImage:
          "url('https://damansdak.s3.eu-central-1.amazonaws.com/home_parallax.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
