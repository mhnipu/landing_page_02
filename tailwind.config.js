/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Silver': '#F5F7FA',
        'DarkGray': '#4D4D4D',
        'Primary': '#630afa',
        'Secondary': '#ce00ec',
        'lightGray': '#717171',
        'gray900': '#18191f',
        'televersantBlue': '#1a9ab8ff',
        'televersantDBlue': '#218ca2ff',
        'televersantlightBlue': '#d7e8f5',
        'televersantlightDBlue': '#6cb4eeff',
        'NeviDBlue': '#010851',
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [

  ],
}

