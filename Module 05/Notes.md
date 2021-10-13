# Express.js
* It is a NodeJS framework (a set of helpers functions, tools and rules that help us build our application)
* Writing server logic code can be super complex and tedious, express comes to give us a hand with that
* It help us to focus on our Business Logic, not on the nitty gritty details
* Other NodeJS frameworks are: Adonis.js; Koa; Salis.js.
* Express is by far the most used NodeJs framework
* [Git Repository](https://github.com/expressjs/express)
* We can create a server by using the function **express_app.listen(port)**
* [Documentation](https://expressjs.com/)

## Expres.js installation
1. Go to our project folder
1. Run `npm install --save express` (it is a production dependency, an integral major part of our application)

To use express we need to import the module `const express = require("express")`. To create an express aplication simply use the express constructor like this: 
```javascript
const express = require("express") //module importation
const express_app=express()
```
This express app is a valid request handler, so we can use it in the function `createServer` for the `http` module

## Middleware concept
* Concept similar to pipeline, using functions.
* Middlewares that are added for the same path one after other can't be skipped. A middleware must sent a response or go to the next middleware
* More specifict middlewares should go first

### Sending responses
We can use *setHeader* and *write*, however, we can also use the *send* function. To send a html we will need to use the *sendFile* function and the path module like this:
```javascript
const path = require('path')

app_or_router.get("/",(req, res, next) =>{
    res.sendFile(path.join(__dirname, '../','views','file.html'))
    //each join argument is a folder except from the last one which is the file name.
    //__dirname is aglobal variable for the current project folder
    //If we construct the path manually it may not work on other OS
})
```
Other way to get the project path is with the next code:
```javascript
const path = require('path')
module.exports = path.dirname(require.main.filename)
```
Which is usually in a separate file, in a folder called util

### Use function
**use** allow us to add a middleware function. The function given as parameter is executed for each request and it must have 3 parameters:
* request
* response
* next: a function that will allow to go to the next middleware
```javascript
const http = require('http')
const express = require('express')
const app = express()

app.use((req, res, next) =>{
    console.log('First middleware')
    next()
})

app.use((req, res, next) =>{
    console.log('Second middleware')
})


const server = http.createServer(app);
server.listen(3001)
```
If it includes a path, the URL should start with it to be triggered. For instance:

```javascript
app.use("/should_start_with_this",(req, res, next) =>{
    console.log('Second middleware')
}) //'/should_start_with_this' and '/should_start_with_this/more path' will trigger this function
```

Also, if the use method use a router, the path used in the main app acts as a prefix. For instance, in the main expres app:
```javascript
//Main app file
app.use("/prefix",router)
```

```javascript
//router file
router.use("/url", callback)
```
We trigger the callback only if the URL is **/prefix/url**


### get and post functions
Same as *use* function, but only triggered by **GET** and **POST** request. They require an exact path match. We can use both methods for the same path as long as the method is different

### request redirect
Use the function *res.redirect(URL)* for a Response object

### Parse body
Use the package **body-parser**, this may be alredy included in express, it relays on the current express version.

```javascript
//...
// to install it for developing use npm install --save body-parser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false; //https://stackoverflow.com/questions/29136374/what-the-difference-between-qs-and-querystring/50199038
    // true use qs, false use querystring
}))
//Act as a middleware that always call next but first parse the body
```

### Send a 404 error page
Whithout a file:
```javascript
//At last of the node app
app.use((req, res, next)=>{
    res.status(404).send("<h1>Page not found</h1>")
})
```

With a file

# Routing
## Route convention
All routing code should go in a folder called **routes**.

## Express modularization
We use the router in a separate file like this:

```javascript
const router = express.Router()

// router added code

module.exports = router
```

On **router** we can use the methods *get* and *post* as we used in the main app.

To be able to use the router we should import it into de main app file and use it.

```javascript
const routes = require('.routes/router_path/routes.js')
app.use(routes)
```

# public convention
A folder called *public* will contain all the files that the user will have access. For instance: css code. To use these files we need to serve them statically, meaning we need to serve the public folder statically. This can be done by serverving it in the main app file like:
```javascript
app.use(express.static(path.join(project_route_folder, 'public')))
```
IMPORTANT: All the files and folder in, in this particular case, *public* will be added, NOT the public folder. Meaning that we won't be able to access to public, instead we will have direct access to its files and folder.