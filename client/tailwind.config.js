/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FBF8F3',
        'off-white': '#F4F0E8',
        beige: '#E8E0D2',
        sand: '#D5C7B2',
        charcoal: '#2B2925',
        ink: '#141311',
        mist: '#8C9BA5',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.32em',
        wide: '0.16em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
