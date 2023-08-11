/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#0C134F',
        secondary: '#1D267D',
        tertiary: '#5C469C',
        quaternary: '#D4ADFC',
        dark1: '#232931',
        dark2: '#393E46',
        dark3: '#4ECCA3',
        dark4: '#203354',
        dark5: '#21E6C1',
      },
      fontFamily: {
        logo: 'Courgette',
        logo2: 'Rock Salt'
      }
    },
  },
  plugins: [],
}
