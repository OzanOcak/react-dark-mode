module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Rubik",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1224px",
      xl: "1350px",
    },
    extend: {
      colors: {
        primary: "#232129",
        accent: {
          DEFAULT: "green",
          hover: "darkgreen",
        },
        grey: "#494455",
      },
      backgroundImage: {
        heroLight: "url('/src/assets/img/bg-light.svg')",
        heroDark: "url('/src/assets/img/bg-dark.svg')",
      },
    },
  },
  plugins: [],
};
