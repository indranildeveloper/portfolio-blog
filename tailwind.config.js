/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
