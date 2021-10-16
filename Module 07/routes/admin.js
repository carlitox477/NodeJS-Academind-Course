const express = require('express')
const router = express.Router()

const productsControler = require('./../controllers/products')

router.get("/add-product",productsControler.getAddProductPage)
router.post("/add-product",productsControler.postAddProduct)


exports.routes= router;