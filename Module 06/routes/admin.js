const express = require('express')
const path =require('path')
const rootDir = require('../util/path')
const router = express.Router()

const products = []

router.get("/add-product",(req, res, next) =>{
    //console.log("Add product middleware")
    //res.send("<h1>Add product</h1><form action='/admin/product' method='POST'><label>Product name: </label><input type='text' name='title'/><button>Add product</button></form>")
    //res.sendFile(path.join(rootDir(), 'views','add-product.html'))
    res.render("add-product",{docTitle: "Add product"})
})

router.post("/add-product",(req, res, next) =>{
    products.push({title: req.body.title})
    //console.log(req.body)
    res.redirect("/")
})


exports.routes= router;
exports.products= products;
