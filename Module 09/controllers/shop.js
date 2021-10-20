const Product = require('../models/product')

// Shop
exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: "/products",
            hasProducts: products.length > 0,
            activeShop: true})
    })
}

exports.getProduct = (req, res, next) =>{
    const productId = req.params.productId;
    Product.fetchAll((products)=>{
        res.render('shop/product-detail', {
            prods: products,
            pageTitle: 'Shop',
            path: "/products/"+productId
        })
    })
}

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: "/",
            })
    })
    
}

exports.getCart = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/cart', {
            prods: products,
            pageTitle: 'Shop',
            path: "/cart",
            })
    })
    
}

exports.getCart = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/cart', {
            prods: products,
            pageTitle: 'Orders',
            path: "/cart",
            })
    })
    
}


exports.getCheckout = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/checkout', {
            prods: products,
            pageTitle: 'Shop',
            path: "/checkout",
            })
    })
    
}

exports.getOrders = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/orders', {
            prods: products,
            pageTitle: 'Orders',
            path: "/orders",
            })
    })
    
}