//To import a module
const http = require('http')

const rqListener = (req, res) =>{
    console.log(req)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from node!</h1></body>')
    res.write('</html>')
    res.end()
}

const server = http.createServer(rqListener); //especify callback
server.listen(3001) //Especify port
//run server with command node server_file_name.js