/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,js,tsx}",
    "./components/**/*.{js,ts,js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#333333',
        },
      },
    },
  },
  plugins: [],
}

