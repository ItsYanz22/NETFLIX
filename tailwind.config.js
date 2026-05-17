/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          black: '#000000',
          dark: '#141414',
          gray: '#808080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)',
        'gradient-to-b': 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
