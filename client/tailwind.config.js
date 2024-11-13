/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ["selector"],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["\"Sinkin Sans\"", "sans-serif"]
      },
      transitionDuration: {
        "1300": "2000ms",
        "1500": "2000ms",
        "2000": "2000ms"
      },
      colors: {
        primary: {
          DEFAULT: '#f3f4f6', // Light mode background
          dark: '#111827',    // Dark mode background
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        secondary: {
          DEFAULT: '#05040E', // Your custom black for text
          light: '#f3f4f6',   // Light text for dark mode
          50: '#f7f7f8',
          100: '#efeef1',
          200: '#d8d6dd',
          300: '#b6b3bf',
          400: '#8f8a9d',
          500: '#726d82',
          600: '#5d596b',
          700: '#4c4957',
          800: '#413e49',
          900: '#39363f',
          950: '#05040E',
        },
        accent: {
          DEFAULT: '#ffd900', // Your base accent color
          50: '#fffdf0',
          100: '#fffbe0',
          200: '#fff6b3',
          300: '#ffee80',
          400: '#ffe14d',
          500: '#ffd900',
          600: '#e6c300',
          700: '#b39700',
          800: '#806c00',
          900: '#4d4100',
          950: '#332b00',
        },
      }
    }
  }
};