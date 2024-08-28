/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['var(--font-marcellus-sc)'],
        'dm-sans': ['var(--font-dm-sans)'],
        marion: ['var(--font-marion)']
      },
      colors: {
        't-gold': '#FFE06B',
        't-light-brown': '#7D5123',
        't-med-brown': '#333333',
        't-brown': '#494949',
        't-dark-brown': '#252525',
        't-tan': '#ECD592',
        't-orange': '#E5AF44',
        't-gray': '#B5B7B9',
        't-light-blue': '#0094FF',
        'royal-blue': {
          '50': '#ecf4ff',
          '100': '#ddeaff',
          '200': '#c2d9ff',
          '300': '#9cbeff',
          '400': '#7598ff',
          '500': '#5271ff',
          '600': '#3649f5',
          '700': '#2a39d8',
          '800': '#2533ae',
          '900': '#263389',
          '950': '#161b50',
        },
        'raw-umber': {
          '50': '#faf8ec',
          '100': '#f3edce',
          '200': '#e8d9a0',
          '300': '#dabf6a',
          '400': '#cea741',
          '500': '#be9234',
          '600': '#a4722a',
          '700': '#7d5123',
          '800': '#6e4625',
          '900': '#5f3b24',
          '950': '#361f12',
        },
        'energy-yellow': {
          '50': '#fefae8',
          '100': '#fff4c2',
          '200': '#ffe06b',
          '300': '#ffd045',
          '400': '#fcb813',
          '500': '#eca006',
          '600': '#cc7902',
          '700': '#a25406',
          '800': '#86420d',
          '900': '#723611',
          '950': '#431a05',
        },
        'rope': {
          '50': '#fefcec',
          '100': '#fcf4c9',
          '200': '#f8e78f',
          '300': '#f5d554',
          '400': '#f2c22d',
          '500': '#eca414',
          '600': '#d17d0e',
          '700': '#ad5a10',
          '800': '#8b4513',
          '900': '#743a13',
          '950': '#421d06',
        }
      },
      screens: {
        'sm+': '680px'
      }
    },
  },
  plugins: [],
};
