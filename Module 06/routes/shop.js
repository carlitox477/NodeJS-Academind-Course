const path = require('path')
const rootDir = require('../util/path')
const express = require('express')
const router = express.Router()
const adminData = require('./admin')

router.get("/",(req, res, next) =>{
    //console.log('shop.js', adminData.products)
    const products =adminData.products
    res.render('shop', {prods: products, docTitle: 'Shop', path: "/", hasProducts: products.length > 0, activeShop: true})
    //res.sendFile(path.join(rootDir(),'views','shop.html'))
})

module.exports = router