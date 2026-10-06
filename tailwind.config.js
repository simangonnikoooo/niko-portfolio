/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Manrope"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f1f4fa',
          100: '#e1e7f3',
          200: '#c3cfe6',
          700: '#1b2a4a',
          800: '#121d36',
          900: '#0b1220',
          950: '#070c17',
        },
        accent: {
          DEFAULT: '#22d3ee',
          soft: '#67e8f9',
          deep: '#0891b2',
          violet: '#8b5cf6',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(11, 18, 32, 0.18)',
        lift: '0 24px 48px -20px rgba(11, 18, 32, 0.35)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.25), 0 12px 40px -12px rgba(34, 211, 238, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -16px) scale(1.06)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
