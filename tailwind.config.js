module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./projects/**/*.{html,js,ts}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
