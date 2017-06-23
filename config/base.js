const webpack = require('webpack');
const path = require('path');

module.exports = function(opts) {
	return {
		entry: {
			main: '../src/main.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist/assets/scripts/'),
			filename: '[name].bundle.js',
			publicPath: '/assets/scripts/'
		},
		module: {},
		plugins: [],
		resolve: {
			extensions: ['', '.js', '.vue', '.scss', '.css']
		},
		devServer: {
			stats: {
				colors: true
			}
			historyApiFallback: true,
			port: '3042',
			inline: true,
			hot: true,
			disableHostCheck: true,
			host: '0.0.0.0'
		}
	}
}




