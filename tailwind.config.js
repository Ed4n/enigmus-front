/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'sphinx-yellow': {
          '50': '#fef7db',
          '100': '#fff3c2',
          '200': '#ffe488',
          '300': '#ffce44',
          '400': '#feb411',
          '500': '#ee9b04',
          '600': '#cd7501',
          '700': '#a35105',
          '800': '#87400c',
          '900': '#733410',
          '950': '#431905',
        },
      }

    },
  },
  plugins: [],
}
