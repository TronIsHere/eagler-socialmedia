/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#101011',
        'secondary':'#161717',
        'whiteGray':'#1d1d1e',
        'accent':'#999998',
        'second-accent':'#b9b8b9',
        'low-color-accent':'#3e3e3e',
        'slightGray':'#2c2c2c',
        'links':'#426a86',
        'primary-button':'#4595d0'
      },
      padding:{
        
      }
    },
  },
  plugins: [],
}