import webpack from 'webpack'
import express from 'express'
import path from 'path'
import router from '../../src/server/router'
import config from '../../config/webpack.dev.client'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware  from 'webpack-hot-middleware'

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    chunks: false,
    'errors-only': true,
    colors: true
  }
}))

app.use(webpackHotMiddleware (compiler, {
  log: console.log
}))

app.use('/static', express.static('./static'));
app.use("/*", router)

app.listen(3000,function(){
  console.log("\n🌎  Started listening on port 3000\n")
})