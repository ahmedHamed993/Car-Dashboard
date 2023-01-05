/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple : {
          700 : '#A162F7',
        },
      },
      transitionProperty: {
        'width': 'width',
        'background':'background',
      }
    },
  },
  plugins: [],
}
