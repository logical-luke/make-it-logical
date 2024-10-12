/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ['selector'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sinkin Sans"', 'sans-serif'],
      },
      transitionDuration: {
        '1300': '2000ms',
        '1500': '2000ms',
        '2000': '2000ms',
      },
      colors: {
        'black': '#05040E',
        'honolulu-blue': {
          DEFAULT: '#197bbd',
          50: '#cbe6f8',
          100: '#96cdf1',
          200: '#62b4eb',
          300: '#2e9be4',
          400: '#197bbd',
          500: '#146398',
          600: '#0f4a72',
          700: '#0a314c',
          800: '#051926',
          900: '#020c13',
        },
      },
    },
  },
}