tailwind.config = {
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },
      extend: {
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            inter: ["Inter", "sans-serif"],
         },
         colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: "#000000",
            red: "#ff0000",

            // Branding
            primary: {
               100: '#FFF5E6',
               200: '#FED697',
               300: '#FEC46C',
               400: '#FDAB2D',
               500: '#FD9A02',
               600: '#B16C01',
               700: '#9A5E01'
            },
            greyscale: {
               100: '#FFFFFF',
               200: '#FAFBFB',
               300: '#F6F6F6',
               400: '#EDEDED',
               500: '#E1E2E2',
               600: '#C6C7C7',
               700: '#B9BABA',
               800: '#ADAFAE',
               900: '#A0A1A1',
               1000: '#929493',
               1100: '#848786',
               1200: '#777979',
               1300: '#696C6B',
               1400: '#5E6160',
               1500: '#505353',
               1600: '#454847',
               1700: '#353938',
               1800: '#272B2A',
               1900: '#1C201F',
            }
         },
      },
   }
};