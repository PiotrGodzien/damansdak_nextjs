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
        // 'herobanner': "url('https://otherlandlabs.com/_next/static/images/pattern-871dbd5e89966c7b04bf3ef0ebe03eed.svg')",
        'herobanner': "url('http://verdepro.pl/b.jpg')",
        'footerbanner': "url('https://verdepro.pl/pattern_dark.jpg')",
        'midelbanner' : "url('http://verdepro.pl/dach4.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
