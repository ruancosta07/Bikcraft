/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
      'poppins-semi': ['Poppins-semi', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'merriweather': ['Merriweather', 'sans-serif']
    },
    colors:{
      'c1': '#ffffff',
      'c2': '#f2f2f2',
      'c3': '#e6e6e6',
      'c4': '#d6d6d6',
      'c5': '#c7c7c7',
      'c6': '#b8b8b8',
      'c7': '#a3a3a3',
      'c8': '#7a7a7a',
      'c9': '#b6b6b6',
      'c10': '#5c5c5c',
      'c11': '#4d4d4d',
      'c12': '#3d3d3d',
      'c13': '#2e2e2e',
      'c14': '#1f1f1f',
      'c15': '#0f0f0f',
      'c16': '#000000',
      'p1': '#ffbb00',
      'p2': '#e5a40b',
      'p3': '#a66e00',
      'p4': '#664400',
      'p5': '#332200',
    },
    extend: {},
  },
  plugins: [],
}

