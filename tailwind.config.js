module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark_blue: "#111827",
        gold: "#D89659",
      },
      backgroundImage: theme => ({
        'hero-background': "url('/src/images/hero.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
