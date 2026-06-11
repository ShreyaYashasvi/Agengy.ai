/** @type {import('tailwindcss').Config} */
module.exports = {
  // 👇 CRITICAL: Tailwind needs to know where to find your code files
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5044E5',
      }
    },
  },
  plugins: [],
}