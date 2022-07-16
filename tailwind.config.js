/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fira-sans": ["Fira Sans", "sans-serif"],
      },
      inset: {
        "nav-logo": "auto 0",
      },
      colors: {
        "soft-white": "#fffcfc",
        nav: "#4cdf9b",
        "nav-hamburguer": "#7ec992eb",
        body: "#ededed6b",
        "modal-opacity": "#0000008a",
        "links": "#3fb57e"
      },
      fontSize: {
        "size-logo": "1.35rem",
      },
    },
  },
  plugins: [],
};
