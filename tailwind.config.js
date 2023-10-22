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
        'televersantlightDBlue': '#c8e2f7',


      }
    },
  },
  plugins: [

  ],
}

