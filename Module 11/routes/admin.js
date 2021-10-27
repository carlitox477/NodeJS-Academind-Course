const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

router.get("/add-product",adminController.getAddProductPage)
router.post("/add-product",adminController.postAddProduct)

router.post("/edit-product",adminController.postEditProduct)
router.get("/edit-product/:productId",adminController.getEditProductPage)
//router.post("/delete-product/:productId",adminController.postDeleteProduct)
router.post("/delete-product",adminController.postDeleteProduct)

router.get("/products",adminController.getProductsPage)


exports.routes= router;