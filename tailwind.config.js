/** @type {import('tailwindcss').Config} */
const { slate } = require('tailwindcss/colors');
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif',
    },},
  
    gradientColorStops: theme => ({
      'primary': '##0369a1',
      'secondary': '##0284c7',
      'danger': '#0ea5e9',
  }),

  },
  plugins: [],
}