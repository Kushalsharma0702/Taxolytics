/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        // Light theme colors
        light: {
          bg: '#FAF7F0',
          card: '#FFFFFF',
          text: {
            primary: '#4A4947',
            secondary: '#696663',
          },
          accent: {
            primary: '#B17457',
            secondary: '#D8D2C2',
            muted: '#E8E4D8',
          },
        },
        // Dark theme colors
        dark: {
          bg: '#1E192E',
          card: '#322C4D',
          text: {
            primary: '#FFFFFF',
            secondary: '#B8B2D8',
          },
          accent: {
            primary: '#6E5A8A',
            secondary: '#4C4472',
            muted: '#3F375E',
          },
        },
        // Shared colors
        brand: {
          primary: '#6E5A8A', // Purple
          secondary: '#B17457', // Bronze
        },
        success: '#10B981', // Green
        warning: '#F59E0B', // Amber
        error: '#EF4444', // Red
        info: '#3B82F6', // Blue
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1) translate(0px, 0px)',
          },
          '33%': {
            transform: 'scale(1.1) translate(30px, -50px)',
          },
          '66%': {
            transform: 'scale(0.9) translate(-20px, 20px)',
          },
          '100%': {
            transform: 'scale(1) translate(0px, 0px)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};