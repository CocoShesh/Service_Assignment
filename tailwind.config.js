/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        plan: "url('./images/plan-bg-section.webp')",
        selling: "url('./images/Selling-bg.webp')",
        "real-state": "url('./images/real-estate.png')",
        contact: "url('./images/contact-bg.png')",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
