/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "8.5/10": "80%",
        "9/10": "90%",
      },
      backgroundImage: {
      },
      backgroundColor: theme => ({
        ...theme("colors"),
        "primary": "#00BF63",
        "primary-100": "#e3fff1",
        "primary-200": "#00ff84",
        "primary-400": "#00ff84",
        "primary-500": "#00ff84",
        "primary-600": "#008e49",
        "primary-800": "#00552c",
        "primary-900": "#001a0d",
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

