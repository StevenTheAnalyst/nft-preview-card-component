/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Custom-1", "sans-serif"],
        custom2: ["Custom-2", "sans-serif"],
      },
    },
  },
  variants: {
  },
  plugins: [
  ],
}
