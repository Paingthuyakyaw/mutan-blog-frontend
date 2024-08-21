const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "10rem",
        },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      libre: ["Libre Baskerville", "serif"],
    },
  },
  plugins: [nextui()],
};
