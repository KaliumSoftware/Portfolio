/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#f9f9f9',
        yellowGamer: '#f2c510',
      },
      gradientColorStops: {
        yellowLight: '#FDF119',
        yellowSemi: '#FDBF19',
        yellowDark: '#FDBA19',
      },
      animation: {
        'spin-slow': 'pulse 2s linear infinite',
      },
    },
  },
  plugins: [nextui()],
}
