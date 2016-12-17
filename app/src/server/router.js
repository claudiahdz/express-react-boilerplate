import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import express from 'express'
import path from 'path'
import routes from '../shared/routes'

const router = express.Router()

router.get('/', (req, res) => {
  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
      if (error) {
          res.status(500).send(error.message)
      } else if (renderProps) {

          const html = renderToString(
            <RouterContext {...renderProps} />
          )

          res.status(200).send(renderFullPage(html))
      } else {
          res.status(404).send('Not found')
      }
  })
})

function renderFullPage(html) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <!-- Required meta tags always come first -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Hello Server Side Rendering</title>
        <link rel="stylesheet" href="/static/styles.css">
    </head>
    <body>
        <div id="root"><div>${html}</div></div>
        <script src="/static/bundle.js"></script>
    </body>
    </html>
    `
}

module.exports = router