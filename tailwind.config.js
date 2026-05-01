/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F0E8',
        cream: '#FAF6EE',
        gold: {
          50:  '#FDF8EC',
          100: '#FAF0D0',
          200: '#F3DFA0',
          300: '#EAC96A',
          400: '#E0B040',
          DEFAULT: '#C9A84C',
          600: '#A07830',
          700: '#7A5C20',
          800: '#5A4018',
          900: '#3D2A0E',
        },
        maroon: {
          light: '#A01030',
          DEFAULT: '#800020',
          dark: '#5A0010',
          deeper: '#3D000E',
        },
        brown: {
          light: '#8B5E3C',
          DEFAULT: '#5C2E0E',
          dark: '#3D1A08',
          darker: '#2A1006',
          deeper: '#250E02',
        },
        saffron: '#FF9933',
        pearl: '#F8F4ED',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #800020 0%, #A01030 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1A0A02 0%, #3D1A08 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(26,8,2,0.7) 0%, rgba(61,26,8,0.8) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
        'gold-lg': '0 8px 40px rgba(201, 168, 76, 0.4)',
        'maroon': '0 4px 20px rgba(128, 0, 32, 0.3)',
        'elegant': '0 20px 60px rgba(0,0,0,0.15)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
