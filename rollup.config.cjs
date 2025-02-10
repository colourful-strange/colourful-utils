const json = require('@rollup/plugin-json');
const terser = require('@rollup/plugin-terser');
const babel = require('@rollup/plugin-babel');

const pkg = require('./package.json');

module.exports = {
    input: 'src/main.js',
    output: [
        {
            file: pkg.main,
            name: pkg.c_name,
            format: 'umd',
            sourcemap: true,
        },
        {
            file: pkg.module,
            name: pkg.c_name,
            format: 'esm',
            sourcemap: true,
        }
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        json(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-flow-strip-types'],
            exclude: 'node_modules/**'
          })
    ],
}