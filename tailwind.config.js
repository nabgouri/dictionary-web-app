/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ["Lora", 'serif'],
        inconsolata: ["Inconsolata", 'monospace']
      },
      keyframes: {
        rotateplane: {
          '0%': {
            transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)',
            '-webkit-transform': 'perspective(120px) rotateX(0deg) rotateY(0deg)',
          },
          '50%': {
            transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)',
            '-webkit-transform': 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)',
          },
          '100%': {
            transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)',
            '-webkit-transform': 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)',
          },
        },
      },
      animation: {
        rotateplane: 'rotateplane 1.2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
  safelist: [
    'font-inter',
    'font-lora',
    'font-inconsolata',
  ],
};

