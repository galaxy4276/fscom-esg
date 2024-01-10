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
      // dropShadow: {
      //   card: '0px 4px 24px 0px rgba(0, 0, 0, 0.15)'
      // },
    },
  },
  plugins: [require('daisyui')],
}
