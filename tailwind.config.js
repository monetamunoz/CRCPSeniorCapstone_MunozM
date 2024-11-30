/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itckabel: ['ITCKabelStdBold', 'sans-serif'], // Custom font
        itckabelM: ['ITCKabelStdMedium', 'sans-serif'],
        inter: ['var(--font-inter)'], 
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
        sliderTrack: 'rgb(255, 254, 166)', // Custom track color
        sliderThumb: 'rgb(254, 254, 91)', // Custom thumb color
        homeBar: 'rgb(212, 203, 210)', // Custom Home Top Menu color
      },
      backgroundImage: {
        'floating-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)",
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-120deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        'spin-slow-reverse': 'spin-reverse 50s linear infinite',
      },
    },
  },
  plugins: [],
};
