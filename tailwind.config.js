module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '10rem',
    },
    extend: {
      colors: {
        custom: {
          DEFAULT: '#00E0EE',
          offwhite: '#E5E5E5',
        },
      },
      container: {
        padding: '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
