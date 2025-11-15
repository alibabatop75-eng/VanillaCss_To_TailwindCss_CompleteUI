/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'rufina': ['Rufina', 'serif'],
      },
      colors: {
        'custom-blue': '#2a5298',
        'custom-dark': '#111',
        'custom-gray': '#687283',
        'custom-gold': '#f5e9d6',
      }
    },
  },
  plugins: [],
}