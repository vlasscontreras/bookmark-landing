module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'var(--font-base)',
    },
    extend: {
      colors: {
        neutral: 'var(--color-grayish-blue)',
        primary: {
          DEFAULT: 'var(--color-soft-blue)',
          dark: 'var(--color-dark-blue)',
        },
        secondary: {
          DEFAULT: 'var(--color-soft-red)',
          dark: 'var(--color-soft-red-dark)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
