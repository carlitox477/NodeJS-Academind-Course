const Product = require('../models/product')
const Cart = require('../models/cart')

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
    Product.findById(productId, (product)=>{
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.name,
            path: "/products"
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
    Cart.getCart((cart)=>{
        Product.fetchAll((products)=>{
            const cartProducts=[]
            for(let prod of products){
                const cartProductData=cart.products.find(p=> prod.id === p.id)
                if(cartProductData){
                    //console.log(cartProductData)
                    cartProducts.push({...prod, qty: cartProductData.qty})
                }
            }
            //console.log(cartProducts)
            res.render('shop/cart', {
                cartProducts: cartProducts,
                cartTotal: cart.totalPrice,
                pageTitle: 'Cart',
                path: "/cart",
                })
        })
        
    })
}

exports.postCart = (req, res, next) =>{
    const prodId= req.body.productId
    Product.findById(prodId,(product)=>{
        Cart.addProduct(prodId,product.price)
        res.redirect("/cart")
    })
}

exports.postDeleteFromCart = (req, res, next) =>{
    const prodId= req.query.productId
    Product.findById(prodId,(product)=>{
        Cart.deleteProduct(prodId,product.price)
        res.redirect("/cart")
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