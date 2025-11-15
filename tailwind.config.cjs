/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4', // teal
        secondary: '#0ea5d4', 
        deep: '#052f2f',
        accent: '#10b981'
      }
    },
  },
  plugins: [],
}
