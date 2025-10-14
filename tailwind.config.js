const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Naskh Arabic"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
