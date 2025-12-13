/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1eb",
        paperDark: "#eee8df",
        ink: "#1c1c1c",
        inkMuted: "#5a5a5a",
        accent: "#8a6f4d",
      },
      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
