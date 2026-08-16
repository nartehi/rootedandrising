/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette lifted from the original Base44 build
        clay: '#7A443A', // primary — deep terracotta
        bark: '#2D2926', // near-black brown, body text
        cream: '#FDFBF7', // page background
        sand: '#F7F3ED', // alternating section background
        honey: '#E9C46A', // warm gold accent
        mist: '#B4C7D0', // muted blue accent
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'slow-float': 'slow-float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
