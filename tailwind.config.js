/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceSans: "'Source Sans 3', sans-serif",
        PlayfairDisplay: "'Playfair Display', serif",
      },
      colors: {
        white: "#fefbf8",
        black: "#101115",
        gray: "#404249",
        main: "#94b17b"
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
}
