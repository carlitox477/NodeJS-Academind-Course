const Product = require('../models/product')

//Admin pages
//Add product
exports.getAddProductPage = (req, res, next)=>{
    res.render("admin/edit-product",{
        pageTitle: "Add product",
        path:"/admin/add-product",
        activeAddProduct: true,
        product: null
    })
}

exports.postAddProduct = (req, res, next)=>{
    Product.create(
        {
            title: req.body.title,
            price: parseFloat(req.body.price).toFixed(2),
            imageUrl: req.body.imageUrl,
            description: req.body.description
        }
    ).then(result =>{
        console.log(result)
        res.redirect("/")
    }).catch(err =>{
        console.log(err)
    })
}

//Edit product
exports.getEditProductPage = (req, res, next)=>{
    Product.findByPk(req.params.productId).then(productJSON =>{
        res.render("admin/edit-product",{
            product: productJSON,
            pageTitle: "Edit "+productJSON.title,
            path:"/admin/products",
            activeAddProduct: true}
            )
    }).catch(err=>{
        console.log(err)
        res.redirect('/404')
    })
}

exports.postEditProduct = (req, res, next)=>{
    //TODO

    const product =new Product(req.body.productId,
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.imageUrl
        )
    product.save()
    res.redirect("/admin/products")
}

exports.postDeleteProduct = (req, res, next)=>{
    //TODO
    //Product.deleteById(req.params.productId)
    
    Product.deleteById(req.query.productId).then(
        ()=>{
            res.redirect("/admin/products")
        }
    )
}

// Products page
exports.getProductsPage = (req, res, next) =>{
    Product.findAll().then(products =>{
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin products',
            path: "/admin/products",
            hasProducts: products.length > 0,
            activeShop: true})
    }).catch(err =>{
        console.log(err)
    })
}