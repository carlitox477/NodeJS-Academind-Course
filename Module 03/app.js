//To import a module
const http = require('http')

const rqListener = (req, res) =>{
    console.log(req)
}

const server = http.createServer(rqListener); //especify callback
server.listen(3001) //Especify port
//run server with command node server_file_name.js