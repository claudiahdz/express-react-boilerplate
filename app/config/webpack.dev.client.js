const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const port = process.env.WEBPACK_PORT || 3000
const host = process.env.HOST || 'localhost'

const config = {
  name: 'client',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client',
    './app/src/client/client.js',
  ],  
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&localIdentName=[hash:base64]')
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')],
  resolve: {
    "root": __dirname,
    extensions: ['', '.js', '.jsx', '.css']
  }
}

module.exports = config