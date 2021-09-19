# Express.js
* It is a NodeJS framework (a set of helpers functions, tools and rules that help us build our application)
* Writing server logic code can be super complex and tedious, express comes to give us a hand with that
* It help us to focus on our Business Logic, not on the nitty gritty details
* Other NodeJS frameworks are: Adonis.js; Koa; Salis.js.
* Express is by far the most used NodeJs framework

## Expres.js installation
1. Go to our project folder
1. Run `npm install --save express` (it is a production dependency, an integral major part of our application)

To use express we need to import the module `const express = require("express")`. To create an express aplication simply use the express constructor like this: 
```javascript
const express = require("express") //module importation
const express_app=express()
```
This express app is a valid request handler, so we can use it in out function `createServer` for the `http` module