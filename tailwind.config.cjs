/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Kumbh Sans, sans-serif",
      },
      fontSize: {
        title: "18px",
        subtitle: "14px",
        body: "10px",
      },
      colors: {
        title: "#2E3349",
        gray: "#6B7082",
        primary: "#41CBD3",
        bg: "#19A1AE",
        "light-gray": "#E8E9EC",
        border: "#979797",
      },
      backgroundImage: {
        "bg-bubbles": "url('/assets/bg-pattern-card.svg') ",
        "bg-pattern-top": "url('/assets/bg-pattern-top.svg')",
        "bg-pattern-bottom": "url('/assets/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
};
