//To import a module
const http = require('http')
const fs = require('fs')

const rqListener = (req, res) =>{
    const url = req.url
    const method= req.method
    if(url=== '/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        //res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end() //to end 
    }
    if(url==='/message' && method==='POST'){
        const body = []
        console.log("message and post")

        //Node ejecuta esto hasta que termina de recibir la data
        req.on('data', (chunk) => {
            console.log("message and post: on")
            console.log(chunk)
            body.push(chunk)
        })
        
        return req.on('end',()=>{
            console.log("message and post: end")
            const parsedBody = Buffer.concat(body).toString()
            
            const message = parsedBody.split('=')[1].replaceAll("+",' ');
            fs.writeFile('message.txt', message, (err)=>{ //Create new file
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end()
                
            }) 
            //console.log(message)
        })
        
    }
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from NodeJS</h1></body>')
    res.write('</html>')
    res.end()
    //console.log(req)
    
    
}

const server = http.createServer(rqListener); //especify callback
server.listen(3001) //Especify port
//run server with command node server_file_name.js