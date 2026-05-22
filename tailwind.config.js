/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand:       '#D24A25',
        'brand-dark':'#C73F1C',
        'brand-mid': '#B93A19',
        'brand-light':'#FDF0EC',
        dark:        '#111827',
        'dark-soft': '#1F2937',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,6vw,5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem,4.5vw,4rem)',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.8rem,3vw,2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
      },
      fontWeight: {
        '800': '800',
      },
      boxShadow: {
        'card':    '0 1px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.07)',
        'card-lg': '0 4px 12px rgba(0,0,0,0.08), 0 20px 56px rgba(0,0,0,0.10)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.10), 0 24px 64px rgba(0,0,0,0.12)',
        'cta':     '0 4px 20px rgba(210,74,37,0.40), 0 1px 4px rgba(210,74,37,0.20)',
        'nav':     '0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.65s ease-out both',
        'fade-in':  'fadeIn 0.45s ease-out both',
        'scale-in': 'scaleIn 0.45s ease-out both',
        'ping':     'ping 1.4s cubic-bezier(0,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
