/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#565E83",
        "lightblue":"#9EDEE0",
        "shadowblue":"#CDDCF2",
        "shadowviolet":"#EBEBF5",
      }
    },
  },
  plugins: [],
}
