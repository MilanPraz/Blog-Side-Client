/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#331D2C",
        secondary: "#3F2E3E",
        third: "#A78295",
        fourth: "#EFE1D1",
      },
    },
  },
  plugins: [],
};
