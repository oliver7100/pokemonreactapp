/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1F1D2B",
        secondaryColor: "#ABBBC2",
        accentColor: "#EA7C69",
        backgroundColor: "#252836",
        buttonColor: "#474651",
        secondaryTextColor: "#7F8992",
        overlay: "#000000",
      },
    },
  },
  plugins: [],
};
