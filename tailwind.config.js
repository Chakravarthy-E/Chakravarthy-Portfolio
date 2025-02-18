/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "input-color": "#1F1D36",
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        name: "#BFDCE5",
        h1: "#DBDFFD",
        h2: "#646FD4",
        violet: "#16213E",
        skyblue: "#2F58CD",
        yellow: "#FDCC49",
        grey: "#ededed",
        brown: "#51557E",
        thickblue: "#0E6BA8",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "deep-black": "#20252E",
        navColor: "#404258",
        purple: "#024CAA",
        bgColor: "#000000",
        "card-color": "#18122B",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        openSans: ["Open Sans", "Sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        righteous: ["Righteous", "cursive"],
        mont: ["Montserrat", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
