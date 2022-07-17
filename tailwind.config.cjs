/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        slate: {
          300: 'hsl(212, 45%, 89%)',
          500: 'hsl(220, 15%, 55%)',
          800: 'hsl(218, 44%, 22%)',
        },
      },
    },
  },
  plugins: [],
}
