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
        dark1: '#152238',
        dark2: '#192841',
        dark3: '#1c2e4a',
        dark4: '#203354',
        dark5: '#23395d',
      },
      fontFamily: {
        logo: 'Courgette',
        logo2: 'Rock Salt'
      }
    },
  },
  plugins: [],
}
