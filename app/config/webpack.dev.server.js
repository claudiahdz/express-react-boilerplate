const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const port = process.env.WEBPACK_PORT || 3000
const host = process.env.HOST || 'localhost'

const config = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: './app/bin/server/server_dev.js',
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'server.bundle.js',
    publicPath: '/static/',
    libraryTarget: 'commonjs2'
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
  plugins: [new ExtractTextPlugin('styles.css')],
  resolve: {
    "root": __dirname,
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config
