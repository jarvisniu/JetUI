import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/jetui.js',
    format: 'umd',
    name: 'JetUI',
  },
  plugins: [
    vue({
      css: './dist/jetui.css'
    }),
  ],
}