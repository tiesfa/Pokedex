/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'press-start': ['"Press Start 2P"', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#383838',
        },
        light: {
          DEFAULT: '#FFFFFF',
        },
        accent: {
          candyRed: '#FF5959',
          pastel: '#CDDEFF',
          leafGreen: '#40FF89'
        },
      },
    },
  },
  plugins: [],
}

