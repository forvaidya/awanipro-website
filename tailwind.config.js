/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#06b6d4',
        accent: '#ec4899',
        cyber: '#00f0ff',
        dark: '#0f172a',
        'dark-light': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-accent': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      },
    },
  },
  plugins: [],
}
