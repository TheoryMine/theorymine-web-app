const path = require('path')
const express = require('express')
const app = express()
const proxy = require('express-http-proxy')
const fs = require('fs')
const PORT = process.env.PORT || 8080
const API_URL = process.env.API_URL || 'https://xdreams.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(require('../config/webpack.config.dev'))

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
      hot: true,
      stats: { colors: true },
    })
  )

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
    })
  )
} else {
  app.use(express.static('dist'))
}

app.use('/api', proxy(API_URL))
app.use(
  '/health',
  require('express-healthcheck')({
    healthy: function() {
      const version = fs.readFileSync('./version', 'utf8').toString()
      return {
        status: 'up',
        uptime: process.uptime(),
        version,
      }
    },
  })
)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'))
})

app.listen(PORT, function() {
  console.log(`listening on http://localhost:${PORT}`)
})
