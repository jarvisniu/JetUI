const pkg = require('./package.json')

module.exports = {
  ssr: false,
  components: true,
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
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '//cdn.niujunwei.com/jet-ui/jet-ui.png' }
    ]
  },
  // Customize the progress-bar color
  loading: { color: '#fff' },
  // Global CSS
  css: [
    "modern-normalize",
    // "jol",
    "~styles/main.scss",
  ],
  plugins: [
    "~plugins/jet-ui.js"
  ],
  // Nuxt.js modules
  modules: [
  ],
  // Build configuration
  build: {
    publicPath: '//cdn.niujunwei.com/jet-ui/',
  },
  generate: {
    dir: 'docs',
  },
}
