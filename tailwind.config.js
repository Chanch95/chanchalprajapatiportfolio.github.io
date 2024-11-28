/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,jsx,ts,tsx}',
    './index.html', 
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '640px' }, // For screens up to 640px
      },
    },
  },
  plugins: [],
}