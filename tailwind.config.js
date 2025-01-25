/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "lexend":["Lexend Giga", "serif"],
        "funneldisplay":["Funnel Display", "serif"],
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}

