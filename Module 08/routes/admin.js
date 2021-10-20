const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

router.get("/add-product",adminController.getAddProductPage)
router.post("/add-product",adminController.postAddProduct)

router.get("/products",adminController.getProductsPage)


exports.routes= router;