const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src4/index.js',
	output: {
		path: path.resolve(__dirname, 'dist4'),
		filename: 'bundle.js'
	},
	module: {
		rules: [/*{
			test: require.resolve('index.js'),
			use: 'imports-loader?this=window'
		}, */{
			test: require.resolve('./src4/global.js'),
			use: 'exports-loader?file,parse=helpers.parse'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'shimming'
		}),
		new webpack.ProvidePlugin({
			// _: 'lodash'
			join: ['lodash', 'join']
		})
	]
};