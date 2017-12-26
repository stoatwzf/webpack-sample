const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src1/index.js',
	output: {
		path: path.resolve(__dirname, 'dist1'),
		filename: '[name].bundle.js',
		publicPath: '/'
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
	plugins: [
		new CleanWebpackPlugin(['./dist1']),
		new HtmlWebpackPlugin({
			title: 'output manage',
			template: './src1/index.template.html'
		})
	],
	devtool: 'inline-source-map'
};