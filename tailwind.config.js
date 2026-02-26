/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050505',
        accent: '#FFD949',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(255, 217, 73, 0.45), 0 0 40px rgba(255, 217, 73, 0.25)',
      },
    },
  },
  plugins: [],
}
