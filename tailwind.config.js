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
          translucent: 'rgba(62, 243, 255, 0.7)',
          offwhite: '#E5E5E5',
          'trans-black': 'rgba(0,0,0,.7)',
          'trans-white': 'rgba(255,255,255,.5)',
        },
      },
      container: {
        padding: '2rem',
      },
      height: {
        hero: 'calc(100vh - 4rem)',
        'hero-m': 'calc(100vh - 8rem)',
        preview: '340px',
      },
      width: {
        fit: 'fit-content',
      },
      boxShadow: {
        custom: '-8px 8px 0 0 rgba(62, 243, 255, 0.7)',
        active: '-4px 4px 0 0 rgba(62, 243, 255, 0.7)',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'active'],
      translate: ['active'],
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
