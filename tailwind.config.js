/** @type {import('tailwindcss').Config} */
import tailwindcss from '@tailwindcss/vite'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '1000': '1000px',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ] ,
};