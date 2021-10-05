const express= require('express')
const path= require('path')
const rootPath=require("../util/path")
const router =express.Router()


router.get("/",(req, res,next)=>{
    res.sendFile(path.join(rootPath,'views', 'index.html'))
})

module.exports = router