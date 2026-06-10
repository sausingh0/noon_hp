/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blinkit: {
          green: '#0c831f',
          'green-light': '#f0faf0',
          yellow: '#f8d000',
          orange: '#f4831f',
          'gray-bg': '#f2f3f7',
          'gray-text': '#7e818c',
          'dark': '#1d1d1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
