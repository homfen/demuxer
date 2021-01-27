import path from 'path';
import livereloadPlugin from 'rollup-plugin-livereload';
import typescriptPlugin from 'rollup-plugin-typescript2';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import typescript from 'typescript';

const { BUILD_MODE } = process.env;

const getPlugins = function () {
    const plugins = [
        typescriptPlugin({
            tsconfig: path.resolve(__dirname, 'tsconfig.json'),
            typescript
        })
    ];

    if (BUILD_MODE === 'dev') {
        plugins.push(livereloadPlugin());
    }

    return plugins;
};

let configs = [];
let formatMaps = [
    {
        entry: 'index',
        outputName: 'all'
    },
    {
        entry: 'ts-only',
        outputName: 'ts'
    },
    {
        entry: 'mp4-only',
        outputName: 'mp4'
    },
    {
        entry: 'flv-only',
        outputName: 'flv'
    }
];

formatMaps.forEach((item, index) => {
    configs.push({
        input: [`./src/${item.entry}.ts`],
        output: [
            {
                file: `dist/demuxer.${item.outputName}.umd.js`,
                format: 'umd',
                name: 'Demuxer'
            },
            {
                file: `dist/demuxer.${item.outputName}.esm.js`,
                format: 'esm',
                plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
            },
            {
                file: `dist/demuxer.${item.outputName}.cjs.js`,
                format: 'cjs',
                plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
            }
        ],
        plugins: getPlugins()
    });
});

export default configs;
