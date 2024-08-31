/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        main: "inset 0 -2px 4px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
