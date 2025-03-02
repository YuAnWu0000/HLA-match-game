/** @type {import('tailwindcss').Config} */
const basePath = process.env.NODE_ENV === 'production' ? '/HLA-match-game' : ''
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Noto Sans TC', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      '4k': { min: '2601px', max: '4100px' },
      '2k': { min: '1901px', max: '2600px' },
      '2xl': { max: '1900px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '350px' }
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
      backgroundImage: {
        'hla-self': `url('${basePath}/images/hla_self.jpg')`,
        'buddhist-logo': `url('${basePath}/images/buddhist_logo.png')`,
        'country-board': `url('${basePath}/images/bg_country.jpg')`,
        'country-card-back': `url('${basePath}/images/card/country_card_back.png')`,
        'dna-board': `url('${basePath}/images/bg_dna.jpg')`,
        'dna-card-back': `url('${basePath}/images/card/dna_card_back.png')`,
        'check-up': `url('${basePath}/images/check_up.jpg')`,
        'times-up': `url('${basePath}/images/times_up_bg.jpg')`,
        win: `url('${basePath}/images/win_bg.jpg')`,
        failed: `url('${basePath}/images/failed_bg.jpg')`
      },
      keyframes: {
        zoomIn: {
          '0%': {
            'background-size': '100% auto',
            'background-position': 'center 0rem'
          },
          '100%': {
            'background-size': 'var(--bg-size)',
            'background-position': 'var(--bg-position)'
          }
        },
        drop: {
          '0%': {
            transform: 'rotateX(0deg) translateY(-50rem)'
          },
          '100%': {
            transform: 'var(--card-transform)'
          }
        },
        scale: {
          '0%': {
            transform: 'scale(0.75)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        lightUp: {
          '0%': {
            filter: 'brightness(40%)'
          },
          '100%': {
            filter: 'brightness(100%)'
          }
        },
        flip: {
          '100%': {
            transform: 'rotate3d(0, 1, 0, 180deg)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        bgZoomIn: '1.5s zoomIn 1.5s ease-in-out forwards',
        cardDrop: '0.2s drop var(--delayTime) ease-out forwards',
        cardScale: '1s scale 1s ease-out forwards',
        openLight: '1.5s lightUp 0.5s ease-out forwards',
        cardFlip: '0.5s flip ease-out forwards',
        fadeIn: '0.2s fadeIn 1s ease-out forwards'
      }
    }
  },
  plugins: []
}
