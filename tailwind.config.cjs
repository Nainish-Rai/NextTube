/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "md":"600px",
        "sm":"450px"
      },
      colors:{
        "bg":"#141414",
        "bg-primary":"#0c0c0e",
        "bg-secondary":"#15161a",
        "pri":"rgb(229 231 235)",
        "sec":"rgb(209 213 200)"
      }
    },
  },
  plugins: [],
}
