/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
      },
      backgroundColor: theme => ({
        ...theme("colors"),
        "primary": "#00BF63",
        "secondary": "#000000",
        "tertiary": "#ffffff",
        "back-gray": "#181515"

      }),
      textColor: {
        "primary": "#ffffff",
        "secondary": "#ffffff",
        "tertiary": "#000000"
      }
    },
  },
  plugins: [],
}

