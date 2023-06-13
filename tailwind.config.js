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
      colors: {
        'discord-900': '#202225',
        'discord-800': '#292b2f',
        'discord-700': '#2f3136',
        'discord-600': '#40444b',
      }
    },
  },
  plugins: [],
}

