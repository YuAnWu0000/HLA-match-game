/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#2A2B2F',
        secondary: '#ffffff',
        error: '#92400e',
        warning: '#f97316',
        info: '#575958',
        success: '#4ade80'
      },
      keyframes: {
        zoomIn: {
          '0%': {
            'background-size': '100% auto',
            'background-position': 'center 0rem'
          },
          '100%': {
            'background-size': '140% auto',
            'background-position': 'center -20rem'
          }
        },
        drop: {
          '0%': {
            transform: 'rotateX(0deg) translateY(-2rem)'
          },
          '100%': {
            transform: 'rotateX(35deg) translateY(-25rem)'
          }
        }
      },
      animation: {
        bgZoomIn: '5s zoomIn linear forwards',
        cardDrop: '3s drop ease-out forwards'
      }
    }
  },
  plugins: []
}
