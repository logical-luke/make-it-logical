import tailwindcss_primeui from "tailwindcss-primeui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [tailwindcss_primeui],
  darkMode: ['selector'],
  theme: {
    extend: {
      colors: {
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