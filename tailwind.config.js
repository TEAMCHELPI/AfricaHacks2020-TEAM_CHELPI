module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#119d4f'
        }
      },
      boxShadow: {
        'outline': '0 0 0 2px #119d4f'
      },
    },
    fontFamily: {
      "head": ['Playfair Display', 'Roboto', 'serif'],
      "body": ['Roboto', 'sans-serif'],
    },
  }
}
