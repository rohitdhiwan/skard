/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebeeff',
          200: '#d8e0ff',
          300: '#b4c2ff',
          400: '#8b9dff',
          500: '#6B7280', // Modern gray
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        accent: {
          50: '#f4f7f7',
          100: '#e2edef',
          200: '#c5dde2',
          300: '#94c5ce',
          400: '#64aab7',
          500: '#4A90A0', // Muted teal
          600: '#3b7d8f',
          700: '#356878',
          800: '#325564',
          900: '#2d4854',
          950: '#1a2c35',
        },
        success: {
          500: '#84cc16', // Softer green
        },
        warning: {
          500: '#eab308', // Warmer yellow
        },
        error: {
          500: '#dc2626', // Softer red
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};