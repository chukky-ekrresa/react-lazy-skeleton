import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import linaria from 'linaria/rollup';
import css from 'rollup-plugin-css-only';

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
			css({
				output: 'styles.css'
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
				typescript: require('typescript')
			}),
			commonjs(),
			sizeSnapshot(),
			process.env.NODE_ENV === 'production' && terser(),
			linaria({
				sourceMap: process.env.NODE_ENV !== 'production'
			}),
			css({
				output: 'styles.css'
			})
		]
	}
];
