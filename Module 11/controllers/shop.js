const Product = require('../models/product')
const Cart = require('../models/cart')

// Shop
exports.getProducts = (req, res, next) =>{
    //DONE
    Product.findAll().then(products =>{
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: "/products",
            hasProducts: products.length > 0,
            activeShop: true
            })
    }).catch(err =>{
        console.log(err)
    })
}

exports.getProduct = (req, res, next) =>{
    //DONE
    /*
    Product.findAll({
        where:{
            id: req.params.productId
        }
    }).then(products=>{
        if(products.length === 1){
            res.render('shop/product-detail', {
                product: products[0],
                pageTitle: products[0].title,
                path: "/products"
            })
        }else{
            res.render('404', {
                path: "/products"
            })
        }
    })*/
    Product.findByPk(req.params.productId).then(product =>{
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: "/products"
        })
    })
}

exports.getIndex = (req, res, next) =>{
    //DONE
    Product.findAll().then(products =>{
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: "/",
            })
    }).catch(err =>{
        console.log(err)
    })
}

exports.getCart = (req, res, next) =>{
    //DONE
    Cart.getCart((cart)=>{
        Product.findAll().then(products=>{
            const cartProducts=[]
            for(let prod of products){
                const cartProductData=cart.products.find(p=> p.id === String(prod.dataValues.id))
                
                if(cartProductData){
                    cartProducts.push({...prod.dataValues, qty: cartProductData.qty})
                }
            }
            res.render('shop/cart', {
                cartProducts: cartProducts,
                cartTotal: cart.totalPrice.toFixed(2),
                pageTitle: 'Cart',
                path: "/cart",
                })
        })       
    })
}

exports.postCart = (req, res, next) =>{
    //DONE
    const prodId= req.body.productId
    Product.findByPk(prodId).then(product =>{
        Cart.addProduct(prodId,product.price)
        res.redirect("/cart")
    })
}

exports.postDeleteFromCart = (req, res, next) =>{
    //DONE
    const prodId= req.query.productId
    Product.findByPk(prodId).then(prod =>{
        Cart.deleteProduct(prodId, prod.price)
        res.redirect("/cart")
    }).catch(err =>{
        console.log(err)
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
    Product.fetchAll().then(([products, fieldData])=>{
        res.render('shop/orders', {
            prods: products,
            pageTitle: 'Orders',
            path: "/orders",
            })
    })
    
}