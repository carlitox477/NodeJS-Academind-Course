//To import a module
const http = require('http')
const fs = require('fs')
const rqListener=require('./routes')

const server = http.createServer(rqListener); //especify callback
server.listen(3001) //Especify port
//run server with command node server_file_name.js