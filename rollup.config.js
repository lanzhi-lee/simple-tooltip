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
      name: 'simple-tootip',
      file: './dist/index.js',
      format: 'es'
    },
    {
      name: 'simple-tootip',
      file: './dist/index.min.js',
      format: 'es',
      plugins: [terser()]
    }
  ]
}
