var webpack = require('webpack')
var path = require('path')

var DIR = './app/src/client/main.js'

var config = {
	entry: DIR,
	output: { path: __dirname, filename: 'bundle.js' },
	module: {
	  loaders: [
	    {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
	  ]
	}
}

module.exports = config