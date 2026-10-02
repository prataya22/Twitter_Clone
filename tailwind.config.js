/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'x-blue': '#1d9bf0',
        'x-blue-hover': '#1a8cd8',
        'x-bg': '#000000',
        'x-surface': '#16181c',
        'x-border': '#2f3336',
        'x-text': '#e7e9ea',
        'x-muted': '#536471',
        'x-hover': 'rgba(231,233,234,0.1)',
        'x-green': '#00ba7c',
        'x-pink': '#f91880',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
