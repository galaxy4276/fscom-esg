/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../templates/**/*.html'],
  theme: {
    fontFamily: {
      pretendard: ['Pretendard'],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}
