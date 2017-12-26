const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: __dirname + '/src2/index.js',
		vendor: [
			'lodash'
		]
	},
	output: {
		path: __dirname + '/dist2',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist2']),
      	new HtmlWebpackPlugin({
       		title: 'Caching'
      	}),
		// new UglifyJsPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		})
	]
};