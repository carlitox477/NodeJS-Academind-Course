# Understanding the Basics

## Creating a NodeJS server
### Core modules
* http: For http requests. It help us launch a server. [Documentation](https://nodejs.org/api/http.html).
* https: For https requests. It help us launch a SLL server. [Documentation](https://nodejs.org/api/https.html)
* fs: To manage the file system. [Documentation](https://nodejs.org/api/fs.html).
* path: It help us to construct paths. It works in any OS. [Documentation](https://nodejs.org/api/path.html).
* os: It help us with the OS. [Documentation](https://nodejs.org/api/os.html).

### How to import a module?
For a module in a local folder:
```javascript
const module_path='./path'
const module = require(module_path)
```

For a global module:
```javascript
const module = require('global_module_name')
```

### How can I run a server?
```javascript
const server = http.createServer(rqListener); //especify callback with 2 params (request, response), return void
server.listen(3001) //Especify port
```
You can run server with command <b>node server_file_name.js</b>

## NodeJS Program Lifecycle
Node use 1 thread to recive request, but it manage them with multiple threads.
![Node Lyfe Cycle](/img/NodeJs_LyfeCycle.png)

You can end the event loop executing the line (in the js file): <b>process.exit()</b>

### Quit running NodeJS server from console
Push CTRL + C in the console where node server is running.

## Understanding Requests
### Main atributes
* url: everything after / from the domain
* method
* headers: has meta information

## Sending responses
The response object can be use to send responses.

It has some useful methods, as:
* setHeader(String, String): We can use it to describe metadata we want to send.
* write(any): It allow us to write data we want to send.
* end(): We send back data to the client, we can't write more data

## HTTP request and reponse information
Look for [documentation]('https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers')

## Routing Request
On the createServer callback you can use a switch to manage requests

### Form attributes
* action: URL where the form data will be sent
* method: Define type of request that will be sent

### Input attributes
* name: to identify data in the request

## Redirecting requests
You can modify the response and set the new location in the header with method:
```javascript
res.setHeader('Location','/')
```
When the response invokes the end() method, tthe user will be redirected

## Parsing request bodies
### How NodeJS manage the incomming requests?
![Streams & Buffers](/img/StreamsAndBuffers.png)

To use body data we need to:
* Manage the streamed data with the on('data', callback) method. Usually like this:
```javascript
const body = []

//Node ejecuta esto hasta que termina de recibir la data
req.on('data', (chunk) => {
    body.push(chunk)
})
```
* Once the streamed data is recived, we need to put in in a buffer and convert it depending on its format. For example:
```javascript
req.on('end',()=>{
    const parsedBody = Buffer.concat(body).toString()
    //There coould be more transformation, or even other.
    // Actions ...
    })
```

## Understanding event driven code execution
The on method establishes callback for the event that was specified. Is like an event listener. 

