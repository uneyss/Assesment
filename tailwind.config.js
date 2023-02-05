/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto: ["Roboto", "sans-serif"]
      },
      screens: {
        'sm': {'min': '350px', 'max': '767px'}
      },
    },
  },
  plugins: [],
}
