import webpack from 'webpack'
import ProgressPlugin from 'webpack/lib/ProgressPlugin'
import config from '../../config/webpack.config.js'

const compiler = webpack(config)

compiler.apply(new ProgressPlugin((percentage, log) => {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(Math.floor(percentage * 100) + '% ' + log)
}))

compiler.run((err, stats) => {
  if(err)
    return console.error(err.message)

  console.log(stats.toString({
    chunks: false,
    'errors-only': true,
    colors: true
  }))
})