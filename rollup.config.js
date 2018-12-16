import vue from 'rollup-plugin-vue'
import serve from 'rollup-plugin-serve'

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
    serve({
      contentBase: ['.'],
      port: 1234,
    }),
  ],
}
