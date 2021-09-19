const fs = require('fs')

const HTML_TEMPLATE = '<html>\n<head>\n<title>Module 3 assignment</title>\n</head>\n<body>\nCONTENT\n</body>\n</html>'

const requestHandler = (req, res) =>{
    const url = req.url
    const method= req.method
    let content

    if(url==='/'){
        content='<p>Welcome to Module 3 assignment<p>'
        content+='<a href="/users">See users</a>'
        content+='<form action="/create-user" method="POST">'
        content+='<h1>Create a user</h1>'
        content+='<label>Username</label>'
        content+='<input name="Username" type="text">'
        content+='<button type="submit">Register username</button>'
        content+='</form>'
        res.write(HTML_TEMPLATE.replace('CONTENT',content))
        return res.end()
    }else if (url==='/users'){
        console.log('On users page')
        const users = fs.readFileSync('users.txt','utf-8').toString().split('\r\n')
        console.log('users.txt was read')
        console.log(users)
        content='<p>Welcome to users page<p>'
        content+='<a href="/">Go back to main</a>'
        content+='<ul>'
        
        
        users.map(user =>{
            content+=`<li>${user}</li>`
        })
        
        content+='</ul>'
        res.write(HTML_TEMPLATE.replace('CONTENT',content))
        return res.end()
    }else if (url === '/create-user' && method==='POST'){
        const username_chunks=[]
        //Node ejecuta esto hasta que termina de recibir la data
        req.on('data', (chunk) => {
            username_chunks.push(chunk)
        })
        
        return req.on('end',()=>{
            console.log("No more data chunks")
            const username_data = Buffer.concat(username_chunks).toString()
            
            const username = '\r\n' + username_data.split('=')[1].replaceAll("+",' ');
            fs.appendFile('users.txt',username,(err)=>{
                if(err){
                    console.log('Problem adding '+username)
                }else{
                    console.log(username+" added")
                    res.statusCode=302
                    res.setHeader('Location','/users')
                    return res.end()
                }
            })
        })
    }
}

module.exports = requestHandler
