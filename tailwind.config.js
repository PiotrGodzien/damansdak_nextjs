const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Blinker", ...defaultTheme.fontFamily.sans],
        serif: ["Blinker", ...defaultTheme.fontFamily.serif],
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
      backgroundVideo: {
        herovideo:
          "url('https://video.wixstatic.com/video/49c2cf_a0e8472cfbb7489b8dfb065c3b9cb346/1080p/mp4/file.mp4')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
