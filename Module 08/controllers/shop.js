const Product = require('../models/product')

// Shop
exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list', {
            prods: products,
            docTitle: 'Shop',
            path: "/products",
            hasProducts: products.length > 0,
            activeShop: true})
    })
    
}

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/index', {
            docTitle: 'Shop',
            path: "/",
            })
    })
    
}

exports.getCart = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/cart', {
            prods: products,
            docTitle: 'Shop',
            path: "/cart",
            })
    })
    
}

exports.getCart = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/orders', {
            prods: products,
            docTitle: 'Orders',
            path: "/orders",
            })
    })
    
}


exports.getCheckout = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/checkout', {
            prods: products,
            docTitle: 'Shop',
            path: "/checkout",
            })
    })
    
}

exports.getOrders = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('shop/orders', {
            prods: products,
            docTitle: 'Orders',
            path: "/orders",
            })
    })
    
}