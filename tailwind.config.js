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
        secondaryColor: "#99A6AE",
        accentColor: "#EA7C69",
        hoverColor: "#C46858",
        backgroundColor: "#252836",
        buttonColor: "#474651",
        borderColor: "#312F3C",
        primaryTextColor: "#FDFDFD",
        secondaryTextColor: "#6D757F",
        disabledColor: "#312F3C",
      },
    },
  },
  plugins: [],
};
