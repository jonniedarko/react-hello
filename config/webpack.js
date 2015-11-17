var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react']
			}
}
		]
	}
};
