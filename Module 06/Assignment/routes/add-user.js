const express = require('express')
const users = require('./../util/globals')
const addUserRouter = express.Router()

addUserRouter.get('/add-user',(req, res, next)=>{
    res.render('add-user',{docTitle: "Add user", path: "/add-user"})
})

addUserRouter.post('/add-user',(req,res,next)=>{
    users.push(req.body.username)
    console.log(users)
    res.redirect('/')
})

module.exports = addUserRouter