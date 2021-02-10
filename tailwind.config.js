/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F3F9FA',
          100: '#E6F3F4',
          200: '#C1E0E4',
          300: '#9BCED4',
          400: '#50A9B3',
          500: '#058493',
          600: '#057784',
          700: '#034F58',
          800: '#023B42',
          900: '#02282C',
        },
        pink: {
          50: '#FEF5F8',
          100: '#FEEBF0',
          200: '#FCCCDA',
          300: '#FAAEC4',
          400: '#F77198',
          500: '#F3346C',
          600: '#DB2F61',
          700: '#921F41',
          800: '#6D1731',
          900: '#491020',
        },
        orange: {
          50: '#FFF9F7',
          100: '#FFF3EF',
          200: '#FEE2D6',
          300: '#FDD1BE',
          400: '#FCAE8D',
          500: '#FB8B5C',
          600: '#E27D53',
          700: '#975337',
          800: '#713F29',
          900: '#4B2A1C',
        },
        cream: {
          50: '#FEFEFC',
          100: '#FEFCFA',
          200: '#FCF8F2',
          300: '#FAF4EB',
          400: '#F7EBDB',
          500: '#F3E3CC',
          600: '#DBCCB8',
          700: '#92887A',
          800: '#6D665C',
          900: '#49443D',
        },
        navy: {
          50: '#F4F5F6',
          100: '#E9EBED',
          200: '#C8CDD2',
          300: '#A7AEB7',
          400: '#667282',
          500: '#24354C',
          600: '#203044',
          700: '#16202E',
          800: '#101822',
          900: '#0B1017',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
