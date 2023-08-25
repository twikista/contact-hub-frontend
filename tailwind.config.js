/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-pearl': '#141718',
        linen: '#f4ede4',
        'light-bp': '#232627',
        'outer-space': '#343839',
        lynch: '#72787B',
        'dodger-blue': '#0084ff',
        'medium-purple': '#8e55ea',
        bp2: '#001e2b',
        malachite: '#00ed64',
        'hot-purple': '#4a154b',
        seance: '#611f69',
        'bright-sun': '#ecb22e',
        try: '#B795F3',
        ti: '#7F40CB',
        newbg: '#242629',
        ni: '#16161a',
      },
    },
  },
  plugins: [],
}
