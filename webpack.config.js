const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(opts) {
	return {
		entry: {
			vendor: ['mdui'],
			main: './src/main.js'
		},
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: 'scripts/[name].bundle.js',
			chunkFilename: 'scripts/[chunkhash].js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: "css-loader"
					})
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						loaders: {
				            'scss': ExtractTextPlugin.extract({
				            	use: 'css-loader!sass-loader',
				            	fallback: 'vue-style-loader'
				            }),
				            'sass': ExtractTextPlugin.extract({
				            	use: 'css-loader!sass-loader?indentedSyntax',
				            	fallback: 'vue-style-loader'
				            })
				        }
					}
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/,
					loader: 'url-loader',
					options: {
						name: 'assets/[name].[ext]?[hash:7]',
						limit: 10000,
						path: path.resolve(__dirname, '../dist/assets/')
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './src/index.tpl'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new ExtractTextPlugin({
				filename: 'styles/style.css?[contenthash:7]'
			})
		],
		resolve: {
			extensions: ['.js', '.vue', '.scss', '.css'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@modules': path.resolve(__dirname, 'node_modules'),
				'@': path.resolve(__dirname, 'src'),
				'@components': path.resolve(__dirname, 'src/components'),
				'@pages': path.resolve(__dirname, 'src/pages')
			}
		},
		devServer: {
			contentBase: path.resolve(__dirname, ''),
			stats: {
				colors: true
			},
			historyApiFallback: true,
			port: '3042',
			inline: true,
			hot: true,
			disableHostCheck: true,
			host: '0.0.0.0'
		}
	}
}




