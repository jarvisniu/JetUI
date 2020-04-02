import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const banner = `// jet-ui v${ pkg.version } - Jarvis Niu
// https://github.com/jarvisniu/jet-ui\n`

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: 'dist/jet-ui.esm.js',
      format: 'esm',
    },
    {
      banner,
      file: 'dist/jet-ui.js',
      format: 'umd',
      name: 'JetUI',
    },
    {
      banner,
      file: 'dist/jet-ui.min.js',
      format: 'umd',
      name: 'JetUI',
    },
  ],
  plugins: [
    resolve(),
    cjs(),
    postcss({
      plugins: [],
    }),
    vue({
      // @ts-ignore
      needMap: false,
    }),
    terser({
      include: /^.+\.min\.js$/,
    }),
  ],
}
