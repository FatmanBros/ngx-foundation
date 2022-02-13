module.exports = {
  content: ["./src/**/*.{html,js,ts,scss}", "./projects/**/*.{html,js,ts,scss}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
