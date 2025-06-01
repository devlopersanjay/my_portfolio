/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc001",
        secondary: "#ff9c01",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // or 'Mulish', etc.
        montserrat: ["Montserrat", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        // Add others as needed
      },
    },
  },
  plugins: [],
};
