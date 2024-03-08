/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA16C",
        secondary: "#3B3B3B",
        ternary: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
