module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
    ],
    options: {
      whitelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong', 'ul', 'li'  /* etc. */],
    },
  },
  theme: {
    linearGradientColors: { // defaults to {}
      'red': '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    },
    zIndex: {
      '-10': '-10',
      '10': '10',
    },
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      },
    },
    container: {
      padding: '1rem',
    },
    colors: {
      background: {
        primary: '#0D2438',
        secondary: '#102C44',
        tertiary: '#1E3951',
      },

      copy: {
        primary: '#cbd5e0',
        secondary: '#e2e8f0',
      },

      'border-color': {
        primary: '#1a202c',
      },

      // transparent: 'transparent',

      black: '#000000',
      white: '#ffffff',

      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.white'),

          // ...
        },
      },
    }),
    fontFamily: {
      sans: [
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '75': '.75',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
};
