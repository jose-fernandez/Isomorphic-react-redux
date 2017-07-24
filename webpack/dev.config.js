/**
 * Created by jose.e.rodriguez on 24/07/2017.
 */

/*INSTALLED THESE TO SOLVE WEBPACK PROBLEMS:
	npm uninstall webpack --save-dev
	npm install webpack@2.1.0-beta.21 --save-dev
	npm uninstall "" --save-dev
	npm install "@2.44.26" --save-dev*/

const path = require('path');
const webpack = require('webpack');
const assetsPath = path.resolve(__dirname, '../public/assets');
const { webpackHost, webpackPort } = require('../config/env');
module.exports = {
	devtool: 'inline-source-map',
	context: path.resolve(__dirname, '..'),
	entry: {
		main: [
			`webpack-hot-middleware/client?path=http://${webpackHost}:${webpackPort}/__webpack_hmr`,
			'./src/index.js',
		],
	},
	output: {
		path: assetsPath,
		filename: '[name].js',
		chunkFilename: '[name]-[chunkhash].js',
		publicPath: `http://${webpackHost}:${webpackPort}/assets/`,
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
			},
		],
	},
	progress: true,
	resolve: {
		modules: [
			'node_modules',
			'src',
		],
		extensions: ['', '.json', '.js', '.jsx'],
	},
	plugins: [
		// hot reload
		new webpack.HotModuleReplacementPlugin(),
		new webpack.IgnorePlugin(/webpack-stats\.json$/),
	],
};