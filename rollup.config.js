const path = require('path');
const packageJson = require('./package.json');
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: path.resolve(__dirname, 'src/index.ts'),
    output: [
        {
            file: packageJson.main,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        nodeResolve({
            moduleDirectory: ['node_modules'],
            extensions: EXTENSIONS,
        }),
        babel({
            babelHelpers: 'runtime',
            extensions: EXTENSIONS,
            include: ['src/**'],
            exclude: ['node_modules/**', '**/*.test.ts', '**/*.test.tsx'],
        }),
    ],
};
