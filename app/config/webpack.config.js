var webpack = require('webpack')
var path = require('path')

var entry = path.resolve(__dirname, '..', 'src', 'server', 'server')

var config = [
	{
		target: 'node',
		entry: entry,
		output: {
        path: './dist',
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs',
    },
		module: {
		  loaders: [
		    {
	        test: /.jsx?$/,
	        loader: 'babel',
	        query: {
	          presets: ['es2015', 'react']
	        }
	      },
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