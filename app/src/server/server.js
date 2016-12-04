var express = require("express")
// var path = require("path")

var app = express()

app.use(express.static("./"))

app.listen(3000,function(){
    console.log("🌎  Started listening on port", 3000)
})