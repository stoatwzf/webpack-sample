const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src1/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist1'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist1'
	},
	plugins: [
		new cleanWebpackPlugin(['dist1']),
		new htmlWebpackPlugin({
			title: 'output mangement',
			template: './src1/index.template.html'
		})
	]
};