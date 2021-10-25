const Product = require('../models/product')
const Cart = require('../models/cart')

// Shop
exports.getProducts = (req, res, next) =>{
    Product.fetchAll().
    then(([rows,fieldData])=>{
        res.render('shop/product-list', {
            prods: rows,
            pageTitle: 'Shop',
            path: "/products",
            hasProducts: rows.length > 0,
            activeShop: true})
    })
    .catch(err =>{
        console.log(err)
    })
}

exports.getProduct = (req, res, next) =>{
    const productId = req.params.productId;
    Product.findById(productId).then(([products, fieldData])=>{
        if(products.length === 1){
            const product = products[0]
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.title,
                path: "/products"
            })
        }
    })
}

exports.getIndex = (req, res, next) =>{
    Product.fetchAll().
    then(([rows,fieldData])=>{
        res.render('shop/index', {
            prods: rows,
            pageTitle: 'Shop',
            path: "/",
            })
    })
    .catch(err =>{
        console.log(err)
    })

}

exports.getCart = (req, res, next) =>{
    Cart.getCart((cart)=>{
        Product.fetchAll().then(([products, fieldData])=>{
            const cartProducts=[]
            for(let prod of products){
                const cartProductData=cart.products.find(p=> p.id === String(prod.id))
                
                if(cartProductData){
                    cartProducts.push({...prod, qty: cartProductData.qty})
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
    const prodId= req.body.productId
    Product.findById(prodId).then(([products, fieldData])=>{
        if(products.length===1){
            const product=products[0]
            Cart.addProduct(prodId,product.price)
            res.redirect("/cart")
        }
    })
}

exports.postDeleteFromCart = (req, res, next) =>{
    const prodId= req.query.productId
    Product.findById(prodId).then(([products, fieldData])=>{
        if(products.length === 1){
            const product = products[0]
            Cart.deleteProduct(prodId,product.price)
            res.redirect("/cart")
        }
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