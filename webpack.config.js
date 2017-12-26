const path = require('path');

module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.(csv|tsv)$/,
			use: [
				'scv-loader'
			]
		}, {
			test: /\.xml$/,
			use: [
				'xml-loader'
			]
		}]
	}
};