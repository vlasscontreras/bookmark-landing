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
        primary: 'var(--color-soft-blue)',
        'primary-dark': 'var(--color-dark-blue)',
        secondary: 'var(--color-soft-red)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
