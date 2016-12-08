var webpack = require('webpack')
var path = require('path')

var SERVER_DIR = path.resolve(__dirname, 'app', 'src', 'server', 'server')

var config = [
	{
		target: 'node',
		entry: SERVER_DIR,
		output: {
        path: './dist',
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs',
    },
		module: {
		  loaders: [
		    {
	        test: /.jsx?$/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['es2015', 'react']
	        }
	      }
		  ]
		},
		externals: [
	    /^[a-z\-0-9]+$/, {
	      'react-dom/server': true
	    }
		],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
	}
]

module.exports = config