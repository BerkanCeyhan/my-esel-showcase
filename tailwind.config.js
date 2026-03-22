/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F3EE',
        foreground: '#1A1A1A',
        accent: '#1A1A1A',
        surface: '#E8E5DC',
        highlight: '#C8C3B6',
        border: '#D4D0C7',
        cta: {
          bg: '#1A1A1A',
          text: '#FFFFFF'
        },
        muted: '#6B6860',
        footer: '#D5D2C8'
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        label: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
