const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Blinker', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#F4120F',
        secondary: '#222222',
      },
      backgroundImage: {
        'herobanner': "url('https://verdepro.pl/hero.jpeg')",
        'footerbanner': "url('https://verdepro.pl/pattern_dark.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
