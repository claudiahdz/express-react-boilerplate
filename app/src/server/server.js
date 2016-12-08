import express from 'express'
import router from './router'

const app = express()

app.use("/*", router)

app.listen(3000,function(){
  console.log("\n🌎  Started listening on port", 3000)
})