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

## Middleware
* Concept similar to pipeline, using functions.
* Middlewares are added one after other and can't be skipped. A middleware must sent a response or go to the next middleware

### Sending responses
We can use *setHeader* and *write*, however, we can also use the *send* function


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
