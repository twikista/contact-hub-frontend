/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#002855',
        secondary: '#00A79D',
        'primary-white': '#FFFAEB',
        accent: '#FF6F61',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        h1: 'clamp(1.25rem, 0.5249rem + 3.0939vw, 3rem)',
        h2: 'clamp(1rem, 0.482rem + 2.2099vw, 2.25rem)',
        'sub-heading': 'clamp(0.75rem, 0.4392rem + 1.326vw, 1.5rem)',
        regular: 'clamp(0.75rem, 0.6464rem + 0.442vw, 1rem)',
        'regular-x': 'clamp(0.75rem, 0.5946rem + 0.663vw, 1.125rem)',
      },
      screens: {
        tablet: '540px',
      },
      width: {
        'btn-h': 'clamp(2rem, 1.2231rem + 3.3149vw, 3.875rem)',
        'btn-w': 'clamp(5rem, 2.4102rem + 11.0497vw, 11.25rem)',
      },
      padding: {
        'btn-py': 'clamp(0.5rem, 0.2928rem + 0.884vw, 1rem)',
        'btn-px': 'clamp(1rem, 0.3785rem + 2.6519vw, 2.5rem)',
      },
    },
  },
  plugins: [],
}
