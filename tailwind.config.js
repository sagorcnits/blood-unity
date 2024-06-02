/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "serif"],
      },

      colors: {
        paragraph: "#535353",
        darkRed: "#800000",
      },
    },
  },
  plugins: [require("daisyui")],
};
