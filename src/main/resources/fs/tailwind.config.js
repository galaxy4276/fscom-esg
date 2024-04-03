/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['../templates/**/*.html', './js/**/*.js', './css/**/*.css'],
  },
  theme: {
    fontFamily: {
      pretendard: ['Pretendard'],
    },
    extend: {
      colors: {
        esgteal: '#00c7b5',
        esggreen: '#8AC32A',
      }
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
