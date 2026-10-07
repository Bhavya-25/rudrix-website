/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rudrix: '#FF4A00',
        'rudrix-strong': '#D63C00', // WCAG-safe orange for filled buttons / links on light (white text 4.66:1)
        cream: '#FAFBEA',
        ink: '#111111',
        'near-black': '#171717',
        'soft-black': '#202020',
        paper: '#F7F7F5',
        mist: '#EEEEEC',
        stone: '#8A8A8A',
        slate2: '#555555',
        live: '#66D45A',
      },
      fontFamily: { sans: ['var(--font-sans)', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
