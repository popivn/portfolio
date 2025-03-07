/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, hsl(140, 24%, 12%), rgb(24, 39, 29))",
        "gradient-secondary":
          "linear-gradient(to right, hsl(139, 20.50%, 15.30%), rgb(6, 42, 18))",
        "gradient-hover":
          "linear-gradient(to right, hsl(140, 24%, 12%), rgb(11, 68, 30))",
      },
      colors: {
        secondary: "rgb(159, 174, 189)",
        primary: "rgb(121, 159, 197)",
        bgcolor: "rgb(23, 38, 28)",
      },
    },
  },
  plugins: [],
};
