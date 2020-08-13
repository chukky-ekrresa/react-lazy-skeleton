import linaria from 'linaria/rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

import packageJson from './package.json';

const input = 'src/index.ts';

export default [
	//CJS
	{
		input,
		output: {
			file: packageJson.main,
			format: 'cjs',
			sourcemap: process.env.NODE_ENV !== 'production',
			exports: 'named'
		},
		plugins: [
			peerDepsExternal(),
			resolve(),
			typescript({
				rollupCommonJSResolveHack: true,
				typescript: require('typescript')
			}),
			commonjs(),
			process.env.NODE_ENV === 'production' && terser(),
			linaria({
				sourceMap: process.env.NODE_ENV !== 'production'
			}),
			postcss({
				extract: 'styles.css',
				minimize: true,
				sourceMap: process.env.NODE_ENV !== 'production'
			})
		]
	},
	// ESM
	{
		input,
		output: {
			file: packageJson.module,
			format: 'esm',
			sourcemap: process.env.NODE_ENV !== 'production',
			exports: 'named'
		},
		plugins: [
			peerDepsExternal(),
			resolve(),
			typescript({
				rollupCommonJSResolveHack: true,
				typescript: require('typescript'),
				useTsconfigDeclarationDir: true
			}),
			commonjs(),
			process.env.NODE_ENV === 'production' && terser(),
			linaria({
				sourceMap: process.env.NODE_ENV !== 'production'
			}),
			postcss({
				extract: 'styles.css',
				minimize: true,
				sourceMap: process.env.NODE_ENV !== 'production'
			})
		]
	}
];
