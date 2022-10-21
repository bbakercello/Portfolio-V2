/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {container: {
    center: true,
  },
    extend: {fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif',
    },},
    
    backgroundImage: {
      'hero-pattern': "url( 'data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M46.1,-58C58.4,-44.7,66.1,-28.8,68,-12.8C69.8,3.2,65.9,19.5,57.5,32.4C49.1,45.2,36.2,54.7,20.5,63.6C4.7,72.6,-13.9,81,-28.8,76.6C-43.6,72.3,-54.6,55.1,-61.7,38C-68.8,20.9,-71.8,3.8,-69.5,-12.7C-67.1,-29.3,-59.3,-45.3,-46.8,-58.6C-34.3,-71.9,-17.2,-82.5,-0.1,-82.3C16.9,-82.2,33.8,-71.3,46.1,-58Z'/%3E%3C/svg%3E' transform='translate(100 100)' )",
    },
    gradientColorStops: theme => ({
      'primary': '##0369a1',
      'secondary': '##0284c7',
      'danger': '#0ea5e9',
  }),
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}