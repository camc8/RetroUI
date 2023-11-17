/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['lores-12', 'sans-serif'],
      },
      colors: {
        primary: '#AAA8AB'
      }
    },
  },
  plugins: [],
}