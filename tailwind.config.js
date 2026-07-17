/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        cyanGlow: '#06B6D4',
        darkBg: '#020617',
        darkCard: '#0F172A',
      },
      boxShadow: {
        glow: '0 0 40px rgba(6, 182, 212, 0.22)',
        card: '0 20px 70px rgba(2, 6, 23, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
