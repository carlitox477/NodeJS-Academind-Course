const express = require('express')
const path =require('path')
const rootDir = require('../util/path')
const router = express.Router()

router.use("/add-product",(req, res, next) =>{
    //console.log("Add product middleware")
    //res.send("<h1>Add product</h1><form action='/admin/product' method='POST'><label>Product name: </label><input type='text' name='title'/><button>Add product</button></form>")
    res.sendFile(path.join(rootDir(), 'views','add-product.html'))
})

router.post("/product",(req, res, next) =>{
    console.log(req.body)
    res.redirect("/")
})

router.get("/product",(req, res, next) =>{
    console.log("Get request")
    res.redirect("/")
})


module.exports = router