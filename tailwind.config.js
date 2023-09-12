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
        yellowGamer: '#f2c510',
      },
      gradientColorStops: {
        yellowLight: '#FDF119',
        yellowSemi: '#FDBF19',
        yellowDark: '#FDBA19',
      },
    },
  },
  plugins: [nextui()],
}
