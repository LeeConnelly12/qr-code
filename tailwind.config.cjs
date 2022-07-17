/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
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
