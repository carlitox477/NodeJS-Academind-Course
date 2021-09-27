//To import a module
const http = require('http')
const express = require('express')
const app = express()

app.use((req, res, next) =>{
    console.log('First middleware')
    next() //Next allow us to go to the next middleware
    console.log('First middleware: doing more things')
})

app.use((req, res, next) =>{
    console.log('Second middleware')
    res.send("<h1>Hello from express!</h1>")
})

//const server = http.createServer(app);
app.listen(3001)