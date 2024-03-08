/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'selector',
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },

    extend: {
      colors : {
        // Blue :
        CobaltBlue:'#1446A3',
        Cerulean:'#086788',
        PolynesianBlue:'#1F487E',
        DelftBlue:'#1D3461',
        IndigoDye:'#084B83',
        PrussianBlue:'#253D5B',
        // Green :
        PineGreen:'#136F63',
        MidnightGreen:'#0B5563',
        Skobeloff:'#1D7874',
        // Yellow : 
        Saffron:'#EFC11A',
        Gold:'#D5B00B',
        // Red : 
        Scarlet:'#FF331F'
      },

      keyframes:{
        move:{
          "50%": {transform: 'translateY(-1rem)'}
        }
      },

      animation:{
        'movingY': 'move 2s linear infinite'
      }
    },

    container : {
      center: true,
      padding : {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },

    fontFamily: {
      poppins:['poppins', 'san-serif'],
      dmsans:['DM Sans', 'san-serif']
    },
    
  },
  plugins: [],
}