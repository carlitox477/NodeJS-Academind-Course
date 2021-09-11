//To import a module
const http = require('http')

const rqListener = (req, res) =>{
    const url = req.url
    if(url=== '/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end() //to end 
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from NodeJS</h1></body>')
    res.write('</html>')
    res.end()
    console.log(req)
    
    
}

const server = http.createServer(rqListener); //especify callback
server.listen(3001) //Especify port
//run server with command node server_file_name.js