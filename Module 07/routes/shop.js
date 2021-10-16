const express = require('express')
const router = express.Router()
const productControler = require('./../controllers/products')

router.get("/",productControler.getProducts)

module.exports = router