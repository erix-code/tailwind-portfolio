/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
      )
    })
  ],
}

