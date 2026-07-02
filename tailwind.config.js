// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#120A3B',
          50: '#EEF1FA',
          600: '#291F6B',
          900: '#0A0726',
        },
        brand: {
          orange: '#F97316',
          orangedark: '#C2410C',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.6' },
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        fadeIn: 'fadeIn 0.8s ease both',
        scaleIn: 'scaleIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 5s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
        drawLine: 'drawLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};