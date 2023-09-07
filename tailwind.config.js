/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Bellefair', 'serif'],
      sans: ['Barlow Condensed', 'sans-serif'],
    },

    extend: {
      colors: {
        customDark: '#0b0d17',
        customBlue: '#d0d6f9',
      },
      fontFamily: {
        bodyText: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
