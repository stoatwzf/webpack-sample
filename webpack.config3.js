const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
	plugins: [
		new CleanWebpackPlugin(['dist1']),
		new HtmlWebpackPlugin({
			title: 'output manage',
			template: './src1/index.template.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist1',
		hot: true
	}
};