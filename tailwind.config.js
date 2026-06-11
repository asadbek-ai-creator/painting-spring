/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        navy: '#1A2E6C',
        red: {
          DEFAULT: '#D94F3D',
          ink: '#B83A2A',
          soft: '#FF8A72',
        },
        cream: '#F5F0E8',
        beige: '#E8DFD0',
        ink: '#333333',
        gray: '#666666',
      },
    },
  },
  plugins: [],
}
