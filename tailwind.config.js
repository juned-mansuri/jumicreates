/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0D11',
          charcoal: '#1A1A22',
          lime: '#D8F944',
          'lime-hover': '#C7EB2B',
          lilac: '#E8E1F9',
          'lilac-soft': '#F4EFFF',
          blush: '#FCECF4',
          card: '#FFFFFF',
          surface: '#F8F8FC'
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
        '6xl': '3.5rem'
      },
      boxShadow: {
        'canvas': '0 30px 100px -20px rgba(135, 115, 190, 0.18), 0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'pill': '0 10px 25px -5px rgba(216, 249, 68, 0.35)',
        'float': '0 20px 40px -10px rgba(13, 13, 17, 0.12)'
      }
    },
  },
  plugins: [],
};
