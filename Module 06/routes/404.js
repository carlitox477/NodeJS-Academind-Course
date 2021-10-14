const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()


router.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(rootDir(),'views','404.html'))
    res.status(404).render("404", {title: "Page not found"})
})

module.exports = router