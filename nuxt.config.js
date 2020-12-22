export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  generate: {
    fallback: true
  },
  loadingIndicator: {
    name: 'chasing-dots',
    color: '#119d4f'
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Chelpi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Roboto:wght@300;400&display=swap'
      }, {
        rel: "preconnect", href: "https://fonts.gstatic.com"
      }
    ]
  },
  pwa: {
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      ogHost: 'http://chelpi.com.ng/',
      nativeUI: true
    },
    manifest: {
      name: 'Chelpi',
      short_name: 'Chelpi',
      description: '',
      dir: 'ltr',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/stylesheet/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/vue-swiper.js', ssr: false },
    { src: '~plugins/global.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  auth: {
    redirect: {
     login: '/', // redirect user when not connected
     callback: '/auth/signed-in'
   },
    strategies: {
      local: false,
      auth0: {
        clientId: process.env.AUTH0_CLIENT_ID,
        audience: process.env.AUTH0_AUDIENCE,
        domain: process.env.AUTH0_DOMAIN,
      }
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://my-json-server/typicode.com/TEAMCHELPI/AfricaHackRESTApi/',
    headers: {
      'Content-Type': 'application/json',
      common: {
        'Accept': 'application/json, text/plain, */*'
      },
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
