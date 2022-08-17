/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
  },
}

