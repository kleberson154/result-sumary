/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          100: 'hsl(0, 100%, 67%)',
          200: 'hsl(0, 100%, 96%)'
        },
        orange: {
          100: 'hsl(39, 100%, 56%)',
          200: 'hsl(39, 100%, 96%)'
        },
        green: {
          100: 'hsl(166, 100%, 37%)',
          200: 'hsl(166, 100%, 96%)'
        },
        blue: {
          100: 'hsl(234, 85%, 45%)',
          200: 'hsl(234, 85%, 92%)'
        },
        purple: 'hsl(252, 100%, 67%)',
        royal: 'hsl(241, 81%, 54%)',
        violet: 'hsla(256, 72%, 46%, 1)',
        persian: 'hsla(241, 72%, 46%, 0)',
        gray: 'hsl(224, 30%, 27%)',
        lavender: 'hsl(241, 100%, 89%)',
        pale: 'hsl(221, 100%, 96%)'
      }
    }
  },
  plugins: []
}
