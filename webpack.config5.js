const path = require('path');

module.exports = {
	entry: './src3/index.js',
	output: {
		path: path.resolve(__dirname, 'dist3'),
		filename: 'webpack-numbers.js',
		library: 'webpackNumbers',
		libraryTarget: 'umd'
	},
	externals: {
		lodash: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_'
		}
	}
};