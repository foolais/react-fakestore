/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA16C",
        secondary: "#3B3B3B",
        ternary: "#F8F8F8",
        "hover-primary": "#f19762",
        "hover-secondary": "#2e2e2e",
        "hover-ternary": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
