/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        textGreen: "#418A1C",
        secGreen: "#74bb8f",
        bgGreen: "#F7FFEC",
        detailsGreen: "#51C815",
        blackGreen: "#081800",
      },
      screens: {
        xsm: "425px",
        ml: "800px",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
    },
    aspectRatio: {
      "16/13.6": "16 / 13.6",
      "3/4": "3/4",
    },
  },
  plugins: [],
};
