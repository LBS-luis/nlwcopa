/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        ignite: {
          500: '#129E57'
        },
        nlwYellow: {
          500: "#F7DD43",
          700: "#E5CD3D"

        },
        gray:{
          100:"#E1E1E6",
          300:"#8D8D99",
          600:"#323238",
          800:"#202024",
          900:"#121214",
        },
        mblue: {
          500: '#191A2C',
          300: '#75789D'
        }
      },
      animation: {
        'spin-slow':'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}
