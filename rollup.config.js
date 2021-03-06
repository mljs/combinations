'use strict';

const nodejs = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'combinations',
  },
  plugins: [
    nodejs(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ]
      ],
      plugins: [
        [
          'transform-runtime', {
            helper: false,
            polyfill: false,
            regenerator: true
          }
        ]
      ],
      exclude: 'node_modules/**',
    }),
  ],
};
