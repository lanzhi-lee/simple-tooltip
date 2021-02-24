import rollupTypescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.ts',
  plugins: [
    rollupTypescript(),
    postcss()
  ],
  output: [
    {
      file: './dist/index.js',
      format: 'es' // npm 项目使用 es 版本
    },
    {
      name: 'tooltip',
      file: './dist/index.min.js',
      format: 'umd', // 浏览器使用 umd 版本
      plugins: [terser()]
    }
  ]
}
