/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textGreen: "#418A1C",
        bgGreen: "#F7FFEC",
        detailsGreen: "#51C815",
        blackGreen: "#081800",
      },
      screens: {
        xsm: "425px",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
