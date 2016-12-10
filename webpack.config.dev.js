var webpack = require('webpack')
var path = require('path')

var entry = path.resolve(__dirname, 'app', 'src', 'client', 'client')

var config = {
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    entry
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
   module: {
     loaders: [
       {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
       }
     ]
   },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
}

module.exports = config