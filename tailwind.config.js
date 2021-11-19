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
          "url('/hero.webp')",
        pattern:
          "url('/pattern_dark.webp')",
        paralaxImage:
          "url('/home_parallax.webp')",
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
