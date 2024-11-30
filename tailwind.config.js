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
        itckabel: ['ITCKabelStdBold', 'sans-serif'], // For Spinster
        itckabelM: ['ITCKabelStdMedium', 'sans-serif'], // For Spinster
        centra: ['Centra', 'sans-serif'], // For Spinster
        inter: ['Inter', 'sans-serif'], // For Home Page
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
        sliderTrack: 'rgb(255, 254, 166)',
        sliderThumb: 'rgb(254, 254, 91)',
        homeBar: 'rgb(212, 203, 210)',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
        'spin-reverse': 'spin-reverse 50s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
