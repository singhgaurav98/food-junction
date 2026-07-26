/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7A1B1B",
          dark: "#4C0F0F",
          deep: "#5C1414"
        },
        marigold: {
          DEFAULT: "#E8A317",
          light: "#F4C542"
        },
        clay: "#C8562B",
        cream: "#FBF3E3",
        ink: "#2A1810"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      backgroundImage: {
        thali: "radial-gradient(circle at center, #F4C542 0%, #E8A317 55%, #C8562B 100%)"
      }
    }
  },
  plugins: []
};
