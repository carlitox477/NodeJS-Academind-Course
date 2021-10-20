const express = require('express')
const router = express.Router()
const shopControler = require('../controllers/shop')

router.get("/",shopControler.getIndex)
router.get("/products",shopControler.getProducts)
router.get("/cart",shopControler.getCart)
router.get("/checkout",shopControler.getCheckout)
router.get("/orders",shopControler.getOrders)

module.exports = router