const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
	entry: {
		foo: './src/foo.js',
		main: './src/index.js'
	},
	output: {
		path: resolve(__dirname, './dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg)$/,
				use: [ 'file-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new CleanWebpackPlugin(['dist']),
	],
	mode: 'production',
	devtool: 'inline-source-map',

}

module.exports = config;