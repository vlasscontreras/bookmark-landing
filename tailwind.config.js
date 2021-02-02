module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        neutral: '#9194a1',
        primary: {
          DEFAULT: '#5368df',
          dark: '#252b46',
        },
        secondary: {
          DEFAULT: '#fa5757',
          dark: '#e94949',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
