const pkg = require('./package.json')

module.exports = {
  mode: 'spa',
  server: {
    port: 7788,
    host: '0.0.0.0',
  },
  router: {
    mode: 'hash',
  },
  // Headers of the page
  head: {
    title: 'jet-ui docs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Customize the progress-bar color
  loading: { color: '#fff' },
  // Global CSS
  css: [
    // "modern-normalize",
    // "jol",
    // "@jarvisniu/unstyle",
    // "@jarvisniu/unstyle/font-size.css",
    "~styles/main.scss",
  ],
  // Plugins to load before mounting the App
  plugins: [
    // { ssr: false, src: '~plugins/components' },
  ],
  // Nuxt.js modules
  modules: [
  ],
  // Build configuration
  build: {
    publicPath: '//cdn.niujunwei.com/jet-ui/',
    // You can extend webpack config here
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  generate: {
    dir: 'docs',
  },
}
