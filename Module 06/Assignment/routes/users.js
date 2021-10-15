const express = require ('express')
const users = require('./../util/globals')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.render('users',{docTitle: 'Users', users: users, path:'/'})
})

module.exports = router