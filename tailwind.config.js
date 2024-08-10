/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        marcellus: ['var(--font-marcellus-sc)'],
        'dm-sans': ['var(--font-dm-sans)'],
        marion: ['var(--font-marion)']
      },
      colors: {
        't-gold': '#FFE06B',
        't-light-brown': '#7D5123',
        't-dark-brown': '#252525',
        't-tan': '#ECD592',
        't-orange': '#E5AF44',
        't-gray': '#B5B7B9',
        't-light-blue': '#0094FF'
      }
    },
  },
  plugins: [],
};
