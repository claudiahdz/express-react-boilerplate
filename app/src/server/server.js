import express from 'express'
// import enforceSSL from 'express-enforces-ssl'

import router from './router'

const app = express()

// Enforce HTTPS
// app.enable('trust proxy')
// app.use(enforceSSL())

app.use("/*", router)

app.listen(3000,function(){
  console.log("\n🌎  Started listening on port", 3000)
})