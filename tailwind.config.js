/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C51A1A",
        custom: {
          100: '#f9e6e6',
          200: '#f0cccc',
          300: '#e6b3b3',
          400: '#dc9999',
          500: '#d28080',
          600: '#c9511a',
          700: '#a64115',
          800: '#853210',
          900: '#651f0c',
        },
      },
      backgroundColor: {
        footer: "#333333",
      },
    },
  },
  plugins: [],
}




