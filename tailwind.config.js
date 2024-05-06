/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#1F1D2B",
        secondaryColor: "#ABBBC2",
        accentColor: "#EA7C69",
        backgroundColor: "#252836",
        buttonColor: "#312F3C",
        primaryTextColor: "#FDFDFD",
        secondaryTextColor: "#6D757F",
        overlay: "#000000",
      },
    },
  },
  plugins: [],
};
