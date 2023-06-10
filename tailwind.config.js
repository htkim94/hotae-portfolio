/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu Regular', 'Helvetica', 'Arial', 'sans-serif'],
        'ubuntu-mono': ['UbuntuMono Regular', 'monospace'],
        'ubuntu-mono-bold': ['UbuntuMono Bold', 'monospace']
      },
      maxHeight: {
        'home-hero': '80rem',
      },
    },
  },
  plugins: [],
}

